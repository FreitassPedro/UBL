import type Lesson from "../interfaces/lesson.ts";
import type RawVideo from "../interfaces/raw-video.ts";
import { toSeconds } from "../utils/time.ts";

export function toLessons(videos: RawVideo[], videoDurations: Map<string, string>): Lesson[] {
  return videos.map((video) => {
    const durationISO = videoDurations.get(video.contentDetails.videoId);
    const duration = durationISO ? toSeconds(durationISO) : undefined;
    return {
      title: video.snippet.title,
      embedUrl: `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`,
      duration,
    };
  });
}
