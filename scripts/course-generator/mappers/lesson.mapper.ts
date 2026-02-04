import type Lesson from "../interfaces/lesson.js";
import type Video from "../interfaces/video.js";
import { toSeconds } from "../utils/time.js";

let lastLessonId: number = 0;

export function toLessons(videos: Video[], videoDurations: Map<string, string>): Lesson[] {
  return videos.map((video) => {
    const durationISO = videoDurations.get(video.contentDetails.videoId);
    const duration = durationISO ? toSeconds(durationISO) : undefined;
    return {
      id: ++lastLessonId,
      title: video.snippet.title,
      embedUrl: `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`,
      duration,
    };
  });
}
