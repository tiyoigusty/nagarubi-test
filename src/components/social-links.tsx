import { FaDiscord, FaFacebook, FaReddit, FaYoutube } from "react-icons/fa";

export function SocialLink() {
  return (
    <div className="flex space-x-4 mt-4">
      <a href="#" className="text-blue-600 self-center">
        <div className="flex flex-col items-center">
          <FaDiscord className="text-3xl" />
          Discord
        </div>
      </a>
      <a href="#" className="text-red-600">
        <div className="flex flex-col items-center">
          <FaYoutube className="text-3xl" />
          YouTube
        </div>
      </a>
      <a href="#" className="text-blue-500">
        <div className="flex flex-col items-center">
          <FaFacebook className="text-3xl" />
          Facebook
        </div>
      </a>
      <a href="#" className="text-orange-500">
        <div className="flex flex-col items-center">
          <FaReddit className="text-3xl" />
          Reddit
        </div>
      </a>
    </div>
  );
}
