import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import image from "../assets/treasure.png";
import axios from "axios";

interface Item {
  id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ListItem() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemDescription, setNewItemDescription] = useState<string>("");
  const [newItemPrice, setNewItemPrice] = useState<number>(0);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<Item | null>(null);

  // Fetch items from JSON Server
  const fetchItems = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/items",
      });
      const data = await response.data;
      // console.log("ini items", data);

      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  console.log("items dari state", items);

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item to JSON Server
  const handleAddItem = async () => {
    if (newItemName.trim() === "") return;

    const newItem: Item = {
      name: newItemName,
      description: newItemDescription,
      price: newItemPrice,
      imageUrl: image,
    };

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/items",
        data: newItem,
        headers: { "Content-Type": "application/json" },
      });

      if (response.data) {
        setItems([...items, newItem]);
        setNewItemName("");
        setNewItemDescription("");
        setNewItemPrice(0);
        setIsAddDialogOpen(false); // Close the dialog after adding item
      } else {
        console.error("Failed to add item");
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Confirm delete item
  const confirmDeleteItem = (item: Item) => {
    setItemToDelete(item);
    setIsDeleteDialogOpen(true);
  };

  // Delete item from JSON Server
  const handleDeleteItem = async () => {
    if (!itemToDelete) return;

    console.log(itemToDelete.id);

    try {
      await axios({
        method: "delete",
        url: `http://localhost:5000/items/${itemToDelete.id}`,
      });
      setItems(items.filter((item) => item.id !== itemToDelete.id));
      setIsDeleteDialogOpen(false);
      setItemToDelete(null);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-between items-center p-3">
        <h1 className="text-3xl font-bold text-neon mb-6">User Dashboard</h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setIsAddDialogOpen(true)}
              className="px-4 py-2 bg-neon text-black font-bold rounded hover:bg-green-400 transition"
            >
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-950 shadow-lg shadow-neon">
            <DialogHeader>
              <DialogTitle className="text-white">Add New Item</DialogTitle>
              <DialogDescription>
                Enter details for the new item below.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Item Name"
                className="w-full px-4 p-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon transition"
              />
              <label htmlFor="description" className="text-white">
                Description
              </label>
              <textarea
                id="description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
                placeholder="Item Description"
                className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon transition resize-none"
              />
              <label htmlFor="price" className="text-white">
                Price
              </label>
              <input
                id="price"
                type="number"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(parseFloat(e.target.value))}
                placeholder="Price"
                className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon transition"
              />
            </div>
            <DialogFooter>
              <Button
                onClick={handleAddItem}
                className="px-4 py-2 bg-neon text-black font-bold rounded hover:bg-green-400 transition"
              >
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
              onClick={() => confirmDeleteItem(item)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="bg-slate-950 shadow-lg shadow-red-500">
          <DialogHeader>
            <DialogTitle className="text-white">Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => setIsDeleteDialogOpen(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteItem}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
