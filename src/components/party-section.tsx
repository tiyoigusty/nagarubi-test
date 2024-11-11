import { FaPeopleLine } from "react-icons/fa6";
import { MyButton } from "./button";

export function PartySection() {
  return (
    <div className="bg-gray-800 bg-opacity-60 px-4 py-8 rounded-lg shadow-md text-white">
      <h3 className="font-bold mb-2 flex items-center justify-center gap-3 text-xl">
        <FaPeopleLine className="text-4xl" />
        PARTY
      </h3>
      <p className="text-sm mb-4 flex justify-center">Play with your friends</p>
      <div className="flex justify-center space-x-4">
        <MyButton label="CREATE" color="green" width="default" />
        <MyButton label="JOIN" color="orange" width="default" />
      </div>
    </div>
  );
}
