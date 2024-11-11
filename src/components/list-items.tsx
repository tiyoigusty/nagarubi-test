import { useState } from "react";

interface Item {
  id: number;
  name: string;
}

export function ListItem() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState<string>("");

  const handleAddItem = () => {
    if (newItemName.trim() === "") return;

    const newItem: Item = {
      id: Date.now(),
      name: newItemName,
    };
    setItems([...items, newItem]);
    setNewItemName("");
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-neon mb-6">User Dashboard</h1>

      <div className="mb-4 flex">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add new item"
          className="flex-grow px-4 py-2 rounded-l bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon transition"
        />
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-neon text-black font-bold rounded-r hover:bg-green-400 transition"
        >
          Add Item
        </button>
      </div>

      <ul className="text-left space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-800 rounded p-3"
          >
            <span className="text-gray-200">{item.name}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
