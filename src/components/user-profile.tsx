import {
  FaCoins,
  FaGift,
  FaShopify,
  FaTrophy,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export function UserProfile() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md shadow-neon w-full text-white relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">SuperMario</h2>
        <button className="text-gray-400 hover:text-red-500">
          <FaSignOutAlt />
        </button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-vector/logo-kid-gamer_573604-730.jpg?semt=ais_hybrid"
            alt="User Profile"
            className="w-28 h-28 rounded-full p-2 border-4 border-neon shadow-md shadow-green-300"
          />
          <button className="absolute top-0 right-1 p-2 bg-green-800 shadow-md shadow-green-200 rounded-full">
            <FaEdit className="text-white" />
          </button>
        </div>

        <div className="space-y-2 w-2/4">
          <div className="flex items-center justify-center text-sm rounded-md bg-slate-800 px-3 py-1">
            <p className="text-sm text-gray-400">
              <span className="text-yellow-400 font-semibold">35</span> / 50 XP
            </p>
          </div>
          <div className="flex items-center justify-between text-sm rounded-md bg-slate-800 px-3 py-1">
            <div className="flex items-center space-x-2">
              <FaCoins className="text-yellow-400" />
              <span>1623</span>
            </div>
            <button className="text-green-500 font-bold">+</button>
          </div>
          <div className="flex items-center justify-between text-sm rounded-md bg-slate-800 px-3 py-1">
            <div className="flex items-center space-x-2">
              <IoDiamond className="text-blue-400" />
              <span>135</span>
            </div>
            <button className="text-green-500 font-bold">+</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button className="flex flex-col items-center bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
          <FaShopify className="text-xl mb-1 text-yellow-300" />
          <span className="text-xs">SHOP</span>
        </button>
        <button className="flex flex-col items-center bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
          <FaGift className="text-xl mb-1 text-pink-300" />
          <span className="text-xs">FREE GIFT</span>
        </button>
        <button className="flex flex-col items-center bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
          <FaTrophy className="text-xl mb-1 text-orange-400" />
          <span className="text-xs">RANKINGS</span>
        </button>
      </div>
    </div>
  );
}
