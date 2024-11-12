import { z } from "zod";

export const addItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a positive number"),
});

export type AddItemFormData = z.infer<typeof addItemSchema>;
