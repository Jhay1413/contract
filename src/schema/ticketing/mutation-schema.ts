import { z } from "zod";

export const ticketingMutationSchema = z.object({
    id: z.string().optional(),
    ticketId: z.string(),
    subject: z.string(),
    section: z.string(),
	division: z.string(),
    status: z.string(),
	requestType: z.string(),
    requestDetails: z.string(),
    priority: z.string(),
    dueDate: z.string().datetime(),
    senderId: z.string(),
    receiverId: z.string(),
	requesteeId: z.string(),
    remarks: z.string().nullable(),
    projectId: z.string().nullable(),
    transactionId: z.string().nullable(),
    attachments: z.string().nullable(),
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