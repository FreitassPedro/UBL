import type { Lesson } from "@/types/lesson";

interface YouTubeApiResponse {
    items: {
        id: string;
        snippet: {
            title: string;
            resourceId: {
                videoId: string;
            };
        };
    }[];
}

const mapYtbJsonToLesson = (apiResponse: YouTubeApiResponse) => {
    const lessons: Lesson[] = [];
    for (const item of apiResponse.items) {
        const lesson: Lesson = {
            id: item.id,
            title: item.snippet.title,
            url: item.snippet.resourceId.videoId,
            type: "video"
        }
        lessons.push(lesson);
    }
    return lessons;
}

export const fetchCourseLessons = (course: any) => {
   return mapYtbJsonToLesson(course);
}
