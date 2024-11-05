import { z } from "zod";

export const MAX_FILE_SIZE_50MB = 50;
export const MAX_FILE_SIZE_10MB = 10;
export const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};

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
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()),
  senderId: z.string(),
  receiverId: z.nullable(z.string()).optional(),
  requesteeId: z.string(),
  remarks: z.string().nullable(),
  projectId: z.string().nullable(),
  transactionId: z.string().nullable(),
  attachments: z.array(z.string()),
});
export const ticketEditSchema = ticketingMutationSchema.extend({
  id: z.string(),
});
