export default interface YoutubeVideo {
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
  };
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
}
