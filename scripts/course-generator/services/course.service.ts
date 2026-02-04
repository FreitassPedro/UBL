import { join } from "path";
import type Course from "../interfaces/course.js";
import type Lesson from "../interfaces/lesson.js";
import type Video from "../interfaces/video.js";
import { toLessons } from "../mappers/lesson.mapper.js";
import { save } from "../utils/file.js";
import YoutubeService from "./youtube.service.js";

let lastSubjectId: number = 0;

export default class CourseService {
  private readonly youtubeService: YoutubeService;

  constructor(youtubeService: YoutubeService) {
    this.youtubeService = youtubeService;
  }

  public async *iterateLessons(course: Course): AsyncGenerator<{
    stepIndex: number;
    subjectIndex: number;
    lessons:Lesson[];
  }> {
    console.log(`Grade curricular: ${course.name.toUpperCase()}`);
    for (let stepIndex = 0; stepIndex < course.steps.length; stepIndex++) {
      const step = course.steps[stepIndex];
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

  public async generate(directory: string, course: Course): Promise<void> {
    for await (const { stepIndex, subjectIndex, lessons } of this.iterateLessons(course)) {
      const subject = course.steps[stepIndex].subjects[subjectIndex];
      subject.duration = lessons.reduce((total, lesson) => total + (lesson.duration ?? 0), 0);

      save(
        join(directory, course.slug.toLowerCase(), "steps", String(stepIndex + 1)),
        `${++lastSubjectId}.json`,
        lessons
      );
    }

    save(
      join(directory, course.slug.toLowerCase()),
      "index.json",
      course
    );
  }
}
