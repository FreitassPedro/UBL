interface VideoPlayerProps {
  url: string;
  onLoaded?: () => void;
}

export const VideoPlayer = ({ url, onLoaded }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full bg-bg-card rounded-xl shadow-2xl shadow-black/40 overflow-hidden border border-border-subtle">
      <iframe
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        onLoad={onLoaded}
      />
    </div>
  );
};
