export function FeaturedVideo() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h3 className="font-bold mb-4">Featured Video</h3>
      <div className="rounded-lg overflow-hidden w-full">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/NAz3_4uvG0k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
