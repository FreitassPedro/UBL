import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const courses = {
  CC: [
    [
      // Etapa 1
      "https://www.youtube.com/playlist?list=PLXyWBo_coJnMYO9Na3t-oYsc2X4kPJBWf",
      "https://www.youtube.com/watch?v=KGoSTh1sgyM&list=PL6mfjjCaO1WrEJ0JKRyXO3QjaPkJaSvAS",
      "https://www.youtube.com/watch?v=xfDdxqbkiSQ&list=PLnzT8EWpmbka4KukGR184tifzqcuq_ZDv",
      "https://youtube.com/playlist?list=PLcoJJSvnDgcKpOi_UeneTNTIVOigRQwcn",
      "https://www.youtube.com/watch?v=ijkDjQT7UPM&list=PL82Svt6JAgOH3M6TCELx8oegTVCriUg3L",
    ],
    [
      // Etapa 2
      "https://www.youtube.com/watch?v=WgHUHPlJETs&list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx",
      "https://www.youtube.com/playlist?list=PLIEzh1OveCVczEZAjhVIVd7Qs-X8ILgnI",
      "https://www.youtube.com/watch?v=0hT3EKGhbpI&list=PLndfcZyvAqbofQl2kLLdeWWjCcPlOPnrW",
      "https://youtube.com/playlist?list=PLcoJJSvnDgcKpOi_UeneTNTIVOigRQwcn&si=RT7FxhHXAYGUuYJD",
      "https://www.youtube.com/playlist?list=PLTeQ2u81sjqfsFNWrUCIoqJZBSJrai8M7",
    ],
    [
      // Etapa 3
      "https://www.youtube.com/watch?v=fjOiu6CD5pc&list=PLrPn-zKAOzUzKdPqFNF52g-i9p1f-vmsk",
      "https://www.youtube.com/playlist?list=PLEUHFTHcrJmswfeq7QEHskgkT6HER3gK6",
      "https://www.youtube.com/watch?v=snXf8YT7L3U&list=PLrOyM49ctTx8HWnxWRBtKrfcuf7ew_3nm",
      "https://www.youtube.com/watch?v=lQdzRBRL9Tw&list=PLAudUnJeNg4sd0TEJ9EG6hr-3d3jqrddN",
      "https://www.youtube.com/watch?v=eTisiy5FB7k&list=PLYItvall0TqJ25sVTLcMhxsE0Hci58mpQ",
    ],
    [
      // Etapa 4
      "https://www.youtube.com/watch?v=_HBTCUNPxOg&list=PLncEdvQ20-mgGanwuFczm-4IwIdIcIiha",
      "https://www.youtube.com/watch?v=a6nNQ6qKgiY&list=PLI9WiBCz67cPTTRER4CrsN0wpRN-NmjGA",
      "https://www.youtube.com/watch?v=pmAxIs5U1KI&list=PLxI8Can9yAHeHQr2McJ01e-ANyh3K0Lfq",
      "https://www.youtube.com/playlist?list=PLEUHFTHcrJmsqKX-GDD-hBvkF8h2_BfKJ",
      "https://youtube.com/playlist?list=PLZ-Bk6jzsb-OScKa7vhpcQXoU2uxYGaFx",
    ],
    [
      // Etapa 5
      "https://www.youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR",
      "https://www.youtube.com/watch?v=h_hEI1Kfm2U&list=PLhBaeEzs3d7lsn_Mq2n3R4_api16Wkp1Q",
      "https://www.youtube.com/watch?v=EGn8fOf7zE0&list=PLSmh8AKk_aUn9HxFs5FnjQupdQnV56MXV",
      "https://www.youtube.com/watch?v=8rrgnFCL9LM&list=PL2peXovwG2kuqXC6sECjFSiG-MT1yXMQ-",
      "https://www.youtube.com/watch?v=AVSAesOiKYY&list=PLE51fUFkeIwLXwe4rvG4EMgw7zgjP-tDx",
    ],
    [
      // Etapa 6
      "https://www.youtube.com/watch?v=4zMwOozUt9U&list=PLncEdvQ20-mhD_qMeLHtLnA3XDT1Fr_k4",
      "https://www.youtube.com/watch?v=-T3zDFxngf4&list=PLeejGOroKw_txh7j7S3etF5eudI2WvMx0",
      "https://www.youtube.com/watch?v=TEEy5f46h_Q&list=PLP0bYj2MTFcuXa4-EbBKhvehr-rkxpeR8",
      "https://www.youtube.com/watch?v=kfHqZLYHfHU&list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX",
      "https://www.youtube.com/watch?v=8mBTfk7s63s&list=PLAudUnJeNg4ugGUJo52dtgFZ_tCm1Ds5W",
    ],
    [
      // Etapa 7
      "https://www.youtube.com/watch?v=dWRxL30aoes&list=PLYLYA7XrlskNgCeSpJf9PQHHb8Z4WpRm4",
      "https://www.youtube.com/watch?v=0VD_2t6EdS4&list=PL9At2PVRU0ZqVArhU9QMyI3jSe113_m2-",
      "https://youtube.com/playlist?list=PLX6Nyaq0ebfhI396WlWN6WlBm-tp7vDtV",
      "https://youtube.com/playlist?list=PLUFcRbu9t-v4peHdmDy4rtG3EnbZNS86R",
      "https://youtube.com/playlist?list=PLclUQno6PMpQO0-XrDwWsPzRzEvjwp1__",
    ],
  ],
  Matematica: [
    [
      // Etapa 1
      "https://www.youtube.com/playlist?list=PL2xox8ncv81W698VTHptmp7ZNvcKqlyHO",
      "https://www.youtube.com/playlist?list=PL2xox8ncv81X2Cp3FClIjRE9sG_Vq6sZ_",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHf6oB0nf8FwLhqSOcBLqOxH",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHcSZv2BBUJAfGsXx0D0hn-2",
      "https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    ],
    [
      // Etapa 2
      "https://www.youtube.com/playlist?list=PL2D9B691A704C6F7B",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHdNN5fpKWRF8bbLG-2P-0LW",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHdUtWDKtTA9AmuICNyX9EIr",
      "https://www.youtube.com/playlist?list=PL2xox8ncv81WXIutzWJDQ7E78riZqJClA",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHcfxDjfTmU-t7XC1w2GVwc_",
    ],
    [
      // Etapa 3
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHeZfF4HwiVmv4D6n3acKLER",
      "https://www.youtube.com/playlist?list=PL6eyvTm7LSBsdkBBKzEDcyYbdujN_6TmL",
      "https://www.youtube.com/playlist?list=PLo4jXE-LdDTR9q44hqm2w3NWtvyP_ZoiP",
      "https://www.youtube.com/playlist?list=PL7581C21F8ADD6C8E",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHdOIYVPQPS6oUPBk8mb1CVU",
    ],
    [
      // Etapa 4
      "https://www.youtube.com/playlist?list=PLFBA21F349930F92F",
      "https://www.youtube.com/playlist?list=PL516F59E9AE8F5BF7",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHeeWqe3m9HZFiBhT33Mfxew",
      "https://www.youtube.com/channel/UCYe-qV12CP64BewDy2-BY5A/playlists",
      "https://www.youtube.com/playlist?list=PL2xox8ncv81UTkjNN2WQM8knGQJpu1j_z",
    ],
    [
      // Etapa 5
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHeOiMYCBlkyCALloROQ58OY",
      "https://www.youtube.com/playlist?list=PLhueTEPO9C1KEX8jTphPeb9kEF9it4b5x",
      "https://www.youtube.com/playlist?list=PLpizEtrJatZEUjIgADKdbE6_jGhcXFxht",
      "https://www.youtube.com/playlist?list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX",
      "https://www.youtube.com/playlist?list=PLxI8Can9yAHdG8tw2QofrU02IuAEVyGlL",
    ],
    [
      // Etapa 6
      "https://www.youtube.com/playlist?list=PL2xox8ncv81XSiyT7czJX8q7I7kNmc8Bk",
      "https://www.youtube.com/playlist?list=PLW5Hta-B_II5vB4Vn9wVWaJVHTo4XxB_i",
      "https://www.youtube.com/playlist?list=PL2xox8ncv81W0HbBtma7QQMeyVllJMk0m",
      "https://www.youtube.com/playlist?list=PLo4jXE-LdDTRQ07QOEFl0x6mvyTl2hlRn",
      "https://www.youtube.com/playlist?list=PLpB72X90N5xST4NmvjQicgfRgpt-9rgw-",
    ],
  ],
};

function parseISODuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return (
    Number(match[1] || 0) * 3600 +
    Number(match[2] || 0) * 60 +
    Number(match[3] || 0)
  );
}

function getPlaylistId(url: string): string | null {
  const u = new URL(url);
  return u.searchParams.get("list");
}

async function getPlaylistData(playlistId: string, apiKey: string) {
  let data = undefined;
  let pageToken: string | undefined = undefined;

  do {
    const params = new URLSearchParams({
      part: "snippet,contentDetails",
      playlistId,
      key: apiKey,
      maxResults: "50",
    });

    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${params}`
    );

    const innerData = await response.json();
    if (!data) {
      data = {
        ...innerData,
        items: [...innerData.items],
      };
    } else {
      data.items.push(...innerData.items);
    }

    pageToken = innerData.nextPageToken;
  } while (pageToken);
  return data;
}

async function getVideoData(videoId: string, apiKey: string) {
  const params = new URLSearchParams({
    part: "contentDetails",
    id: videoId,
    key: apiKey,
  });

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?${params}`
  );

  const data = await response.json();
  if (!data.items || data.items.length == 0) {
    return null;
  }

  const contentDetails = data.items[0].contentDetails;
  contentDetails.durationSeconds = parseISODuration(contentDetails.duration);
  return contentDetails;
}

async function run() {
  const apiKey = process.argv[2];
  if (!apiKey) {
    console.error("Insira sua chave de API como argumento do programa");
    process.exit(1);
  }

  for (const [course, steps] of Object.entries(courses)) {
    console.log(`Curso: ${course.toUpperCase()}`);

    for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
      const step = steps[stepIndex];
      console.log(`> Etapa ${stepIndex + 1} (Total: ${step.length} playlists)`);

      for (let idx = 0; idx < step.length; idx++) {
        const url: string = step[idx];
        console.log(`>> Playlist ${idx + 1}: ${url}`);

        const playlistId: string | null = getPlaylistId(url);
        if (!playlistId) {
          continue;
        }

        let totalDurationSeconds: number = 0;
        const playlistData = await getPlaylistData(playlistId, apiKey);
        for (const item of playlistData.items) {
          const videoData = await getVideoData(
            item.contentDetails.videoId,
            apiKey
          );

          if (!!videoData) {
            item.contentDetails.extra = videoData;
            totalDurationSeconds += item.contentDetails.extra.durationSeconds;
          }
        }

        playlistData.extra = {
          durationSeconds: totalDurationSeconds,
        };

        const dir = join("output", course, `Step${stepIndex + 1}`);
        mkdirSync(dir, { recursive: true });
        writeFileSync(
          join(dir, `playlist${idx + 1}.json`),
          JSON.stringify(playlistData, null, 2)
        );
      }
    }
  }
}

run();
