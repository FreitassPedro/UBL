import type { Lesson } from "../gradeCurricular";
import { circuitosDigitais } from "./Step1/CircuitosDigitais"
import { introducaoComputacaoI } from "./Step1/IntroducaoComputacaoI";
import { linguagensProgramacao } from "./Step1/LinguagensProgramacao";
import { matematicaDiscreta } from "./Step1/MatematicaDiscreta";

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

export const fetchCourseLessons = (course: string) => {
    switch (course) {
        case "circuitos-digitais":
            return mapYtbJsonToLesson(circuitosDigitais);
        case "linguagens-de-programacao":
            return mapYtbJsonToLesson(linguagensProgramacao);
        case "matematica-discreta":
            return mapYtbJsonToLesson(matematicaDiscreta);

        case "introducao-a-computacao":
            return mapYtbJsonToLesson(introducaoComputacaoI);
        default:
            return [];
    }


}