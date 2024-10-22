import { z } from "zod";

export const notification = z.object({
  id: z.string().optional(),
  createdAt: z.string().datetime(),
  message: z.string(),
  transactionId: z.string(),
  forwarderId: z.string(),
  receiverId: z.string(),
  isRead: z.boolean(),
  dateRead: z.nullable(z.string().datetime()),
});
