import { join } from "path";
import type Curriculum from "../interfaces/curriculum.ts";
import type Lesson from "../interfaces/lesson.ts";
import type Video from "../interfaces/video.ts";
import { toLessons } from "../mappers/lesson.mapper.ts";
import { save } from "../utils/file.ts";
import YoutubeService from "./youtube.service.ts";

let lastSubjectId: number = 0;

export default class CurriculumService {
  private readonly youtubeService: YoutubeService;

  constructor(youtubeService: YoutubeService) {
    this.youtubeService = youtubeService;
  }

  public async *iterateLessons(curriculum: Curriculum): AsyncGenerator<{
    stepIndex: number;
    subjectIndex: number;
    lessons:Lesson[];
  }> {
    console.log(`Grade curricular: ${curriculum.name.toUpperCase()}`);
    for (let stepIndex = 0; stepIndex < curriculum.steps.length; stepIndex++) {
      const step = curriculum.steps[stepIndex];
      console.log(`> Etapa ${stepIndex + 1} (Total: ${step.subjects.length} playlists)`);

      for (let subjectIndex = 0; subjectIndex < step.subjects.length; subjectIndex++) {
        const subject = step.subjects[subjectIndex];
        console.log(`>> Disciplina ${subjectIndex + 1}: ${subject.url} (Nome: ${subject.name})`);

        const videos: Video[] = await this.youtubeService.getVideos(this.youtubeService.getPlaylistId(subject.url));
        const videoDurations: Map<string, string> = await this.youtubeService.getVideoDurations(videos.map(video => video.contentDetails.videoId));
        const lessons: Lesson[] = toLessons(videos, videoDurations);
        subject.lessons = lessons.length;

        yield {
          stepIndex: stepIndex,
          subjectIndex: subjectIndex,
          lessons: lessons
        };
      }
    }
  }

  public async generate(directory: string, curriculum: Curriculum): Promise<void> {
    for await (const { stepIndex, subjectIndex, lessons } of this.iterateLessons(curriculum)) {
      const subject = curriculum.steps[stepIndex].subjects[subjectIndex];
      subject.duration = lessons.reduce((total, lesson) => total + (lesson.duration ?? 0), 0);

      save(
        join(directory, curriculum.acronym.toLowerCase(), "steps", String(stepIndex + 1)),
        `${++lastSubjectId}.json`,
        lessons
      );
    }

    save(
      join(directory, curriculum.acronym.toLowerCase()),
      "index.json",
      curriculum
    );
  }
}
