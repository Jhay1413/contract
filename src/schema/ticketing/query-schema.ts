import { z } from "zod";

export const ticketingQuerySchema = z.object({
    query: z.string().optional(),
    status: z.enum(["OPEN", "CLOSED", "PENDING", "ARCHIVED"]).optional(),
    page: z.number().default(1), // Pagination default value
    pageSize: z.number().default(10), // Default page size
    userId: z.string().optional(),
  });

export const ticketingTableSchema = z.object({
    ticketId: z.string(),
    subject: z.string(),
    status: z.enum(["OPEN", "CLOSED", "PENDING", "ARCHIVED"]),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
    dueDate: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    receiver: z.string().nullable(),
    sender: z.string().nullable(),
  });