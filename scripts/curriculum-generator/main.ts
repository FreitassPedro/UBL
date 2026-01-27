import curriculumCC  from "./data/curriculumCC.ts";
import curriculumMath from "./data/curriculumMath.ts";
import CurriculumService from "./services/curriculum.service.ts";
import YouTubeService from "./services/youtube.service.ts";

async function main() {
  const youtubeApiKey: string = process.argv[2];
  if (!youtubeApiKey) {
    console.error("Insira sua chave de API do YouTube como argumento do programa");
    process.exit(1);
  }

  const youtubeService: YouTubeService = new YouTubeService(youtubeApiKey);
  const curriculumService: CurriculumService = new CurriculumService(youtubeService);
  for (const curriculum of [curriculumMath, curriculumCC]) {
    await curriculumService.saveCurriculum(curriculum);
    await curriculumService.saveLessons(curriculum);
  }
}

main();
