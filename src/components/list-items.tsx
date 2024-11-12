import { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "@/types/items";
import { DialogAddItem } from "./add-items-dialog";
import { DialogDeleteItem } from "./delete-items-dialog";

export function ListItem() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToDelete, setItemToDelete] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [items]);

  const handleAddItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-between items-center p-3">
        <h1 className="text-3xl font-bold text-neon mb-6">User Dashboard</h1>
        <DialogAddItem onAdd={handleAddItem} />
      </div>

      <ul className="text-left space-y-2 mt-4 h-96 overflow-y-scroll scrollbar-hide">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-800 rounded p-3"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt="item"
                className="w-16 h-16 rounded-full border-2 p-1 border-white"
              />
              <div>
                <p className="text-gray-200 font-semibold">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <p className="text-gray-400 text-sm">Price: ${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => setItemToDelete(item)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <DialogDeleteItem
        item={itemToDelete}
        onDelete={handleDeleteItem}
        onClose={() => setItemToDelete(null)}
      />
    </div>
  );
}
