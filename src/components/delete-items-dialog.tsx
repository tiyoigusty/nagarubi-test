import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import axios from "axios";
import { Item } from "@/types/items";

export function DialogDeleteItem({
  item,
  onDelete,
  onClose,
}: {
  item: Item | null;
  onDelete: (itemId: string) => void;
  onClose: () => void;
}) {
  const handleDeleteItem = async () => {
    if (!item?.id) return;

    try {
      await axios.delete(`http://localhost:5000/items/${item.id}`);
      onDelete(item.id);
      onClose();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="bg-slate-950 shadow-lg shadow-red-500">
        <DialogHeader>
          <DialogTitle className="text-white">Confirm Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onClose}
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
  );
}
