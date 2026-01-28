import { join } from "path";
import curriculumCC from "./data/curriculumCC.ts";
import curriculumMath from "./data/curriculumMath.ts";
import CurriculumService from "./services/curriculum.service.ts";
import YouTubeService from "./services/youtube.service.ts";

async function main() {
  const [, , youtubeApiKey] = process.argv;
  if (!youtubeApiKey) {
    throw new Error("Use: node main.js <YOUTUBE_API_KEY>");
  }

  const directory: string = join("output", "curriculums");
  const youtubeService: YouTubeService = new YouTubeService(youtubeApiKey);
  const curriculumService: CurriculumService = new CurriculumService(youtubeService);
  for (const curriculum of [curriculumMath, curriculumCC]) {
    await curriculumService.generate(directory, curriculum);
  }
}

main();
