import type { Lesson } from "../gradeCurricular";
import { circuitosDigitais } from "./CircuitosDigitais"
import { introducaoComputacao } from "./IntroducaoComputacao";
import { linguagensProgramacao } from "./LinguagensProgramacao";
import { matematicaDiscreta } from "./MatematicaDiscreta";

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
            videoId: item.snippet.resourceId.videoId,
            type: "video"
        }
        lessons.push(lesson);
    }
    return lessons;
}

export const fetchCourseLessons = (course: string) => {
    switch (course) {
        case "circuitos-digitais":
            return mapYtbJsonToLesson(circuitosDigitais);
        case "linguagens-de-programacao":
            return mapYtbJsonToLesson(linguagensProgramacao);
        case "matematica-discreta":
            return mapYtbJsonToLesson(matematicaDiscreta);

        case "introducao-a-computacao":
            return mapYtbJsonToLesson(introducaoComputacao);
        default:
            return [];
    }


}