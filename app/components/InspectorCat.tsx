type InspectorCatProps = {
  videoSrc: string;
};

export default function InspectorCat({
  videoSrc,
}: InspectorCatProps) {
  return (
    <div className="flex justify-center mb-5 sm:mb-8">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-44 h-44 sm:w-64 sm:h-64 object-contain"
      />
    </div>
  );
}