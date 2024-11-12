import { Item } from "@/types/items";
import { AddItemFormData, addItemSchema } from "@/validation/item-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../assets/treasure.png";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function DialogAddItem({ onAdd }: { onAdd: (item: Item) => void }) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddItemFormData>({
    resolver: zodResolver(addItemSchema),
  });

  const handleAddItem = async (data: AddItemFormData) => {
    const newItem: Item = {
      ...data,
      imageUrl: image,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/items",
        newItem,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        onAdd(newItem);
        reset();
        setIsAddDialogOpen(false);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 bg-neon text-black font-bold rounded hover:bg-green-400 transition">
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
        <form onSubmit={handleSubmit(handleAddItem)} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full px-4 p-2 rounded bg-gray-700 text-gray-200"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="text-white">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="w-full px-4 p-2 rounded bg-gray-700 text-gray-200 resize-none"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="price" className="text-white">
              Price
            </label>
            <input
              id="price"
              type="number"
              {...register("price", { valueAsNumber: true })}
              className="w-full px-4 p-2 rounded bg-gray-700 text-gray-200"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="px-4 py-2 bg-neon text-black font-bold rounded hover:bg-green-400 transition"
            >
              Add Item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
