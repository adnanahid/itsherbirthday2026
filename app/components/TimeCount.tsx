type TimeCountProps = {
  videoSrc: string;
};

export default function TimeCount({
  videoSrc,
}: TimeCountProps) {
  return (
    <div className="flex justify-center mb-5 sm:mb-8">
        <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-[90vw] h-[90vw] max-w-175 max-h-175 object-contain"
        />
    </div>
  );
}