import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsFire, BsVirus } from "react-icons/bs";
import { FaRegStar, FaRobot, FaSkull } from "react-icons/fa";
import { GiPiercingSword } from "react-icons/gi";
import { IoInfiniteSharp } from "react-icons/io5";

export function ModeSelector() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h3 className="font-bold mb-4">Modes</h3>
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>FFA</p>
          <FaSkull className="text-4xl text-gray-900" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Dream</p>
          <FaRegStar className="text-4xl text-blue-600" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Ultra</p>
          <AiOutlineThunderbolt className="text-4xl text-yellow-600" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Infinity</p>
          <IoInfiniteSharp className="text-4xl" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Self</p>
          <BsFire className="text-4xl text-red-600" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Virus</p>
          <BsVirus className="text-4xl text-green-600" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Crazy</p>
          <GiPiercingSword className="text-4xl text-blue-600" />
        </button>
        <button className="bg-gray-700 p-2 rounded flex flex-col items-center font-bold hover:shadow-md hover:shadow-neon hover:bg-gray-500">
          <p>Bots</p>
          <FaRobot className="text-4xl" />
        </button>
      </div>
    </div>
  );
}
