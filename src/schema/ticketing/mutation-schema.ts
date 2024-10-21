import { z } from "zod";

export const ticketingMutationSchema = z.object({
    id: z.string().optional(),
    ticketId: z.string(),
    subject: z.string(),
    section: z.string(),
	division: z.string(),
    status: z.enum(["ON-PROCESS", "APPROVED", "RESOLVED", "FOR SIGN AND SEAL", "ARCHIVED"]),
	requestType: z.string(),
    requestDetails: z.string(),
    priority: z.enum(["LOW", "IMPORTANT", "URGENT"]),
    dueDate: z.string().datetime(),
    senderId: z.string(),
    receiverId: z.string(),
	requesteeId: z.string(),
    remarks: z.string().nullable(),
    projectId: z.string().nullable(),
    transactionId: z.string().nullable(),
    attachments: z.string().nullable(),
});
export const ticketEditSchema = ticketingMutationSchema.extend({
    id:z.string()
})