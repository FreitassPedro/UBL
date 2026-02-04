import { join } from "path";
import courseCC from "./data/courseCC.js";
import courseMath from "./data/courseMath.js";
import CourseService from "./services/course.service.js";
import YouTubeService from "./services/youtube.service.js";

async function main() {
  const [, , youtubeApiKey] = process.argv;
  if (!youtubeApiKey) {
    throw new Error("Use: node main.js <YOUTUBE_API_KEY>");
  }

  const directory: string = join("output", "courses");
  const youtubeService: YouTubeService = new YouTubeService(youtubeApiKey);
  const courseService: CourseService = new CourseService(youtubeService);
  for (const course of [courseCC, courseMath]) {
    await courseService.generate(directory, course);
  }
}

main();
