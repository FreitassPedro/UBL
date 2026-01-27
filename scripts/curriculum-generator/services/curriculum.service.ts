import { join } from "path";
import type Curriculum from "../interfaces/curriculum.ts";
import type Lesson from "../interfaces/lesson.ts";
import type RawVideo from "../interfaces/raw-video.ts";
import { toLessons } from "../mappers/lesson.mapper.ts";
import { toCamelCase } from "../utils/case.ts";
import { save } from "../utils/file.ts";
import YoutubeService from "./youtube.service.ts";

export default class CurriculumService {
  private static readonly BASE_OUTPUT_DIRECTORY: string = join("output", "curriculums");
  private readonly youtubeService: YoutubeService;

  constructor(youtubeService: YoutubeService) {
    this.youtubeService = youtubeService;
  }

  public async saveLessons(curriculum: Curriculum): Promise<void> {
    console.log(`Grade curricular: ${curriculum.name.toUpperCase()}`);
    for (let stepIndex = 0; stepIndex < curriculum.steps.length; stepIndex++) {
      const step = curriculum.steps[stepIndex];
      console.log(`> Etapa ${stepIndex + 1} (Total: ${step.subjects.length} playlists)`);

      for (let subjectIndex = 0; subjectIndex < step.subjects.length; subjectIndex++) {
        const subject = step.subjects[subjectIndex];
        console.log(`>> Disciplina ${subjectIndex + 1}: ${subject.url} (Nome: ${subject.name})`);

        const videos: RawVideo[] = await this.youtubeService.getVideos(this.youtubeService.getPlaylistId(subject.url));
        const videoDurations: Map<string, string> = await this.youtubeService.getVideoDurations(videos.map(video => video.contentDetails.videoId));
        const lessons: Lesson[] = toLessons(videos, videoDurations);
        save(
          join(CurriculumService.BASE_OUTPUT_DIRECTORY, curriculum.acronym.toLowerCase(), "steps", String(stepIndex + 1)),
          `${toCamelCase(subject.name)}.json`,
          lessons
        );
      }
    }
  }

  public async saveCurriculum(curriculum: Curriculum): Promise<void> {
    save(
      join(CurriculumService.BASE_OUTPUT_DIRECTORY, curriculum.acronym.toLowerCase()),
      "index.json",
      curriculum
    );
  }
}
