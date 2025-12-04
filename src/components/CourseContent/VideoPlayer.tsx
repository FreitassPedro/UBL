import { PlayIcon } from "lucide-react";

export function VideoPlayer({ videoId }: { videoId: string }) {
  return (
    <div className="w-full h-[400px] my-4 bg-bg-card rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-border-subtle">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
