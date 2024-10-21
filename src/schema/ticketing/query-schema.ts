import { z } from "zod";
import { AccountQuerySchema } from "../users/query-schema";
import { projectQuerySchema } from "../companies/query-schema";

export const ticketingTableSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  subject: z.string(),
  status: z.enum(["ON-PROCESS", "APPROVED", "RESOLVED", "FOR SIGN AND SEAL", "ARCHIVED"]),
  priority: z.enum(["LOW", "IMPORTANT", "URGENT"]),
  dueDate: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  receiver: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  sender: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  project: z.object({
    projectName: z.string(),
  }).nullable(),
  transactionId: z.string().nullable(),
  remarks: z.string().nullable(),
});

export const ticketFullDetailsSchema = z.object({
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
  sender: AccountQuerySchema,
  receiver: AccountQuerySchema,
  requestee: AccountQuerySchema,
  remarks: z.string().nullable(),
  project: projectQuerySchema.nullable(),
  transactionId: z.string().nullable(),
  attachments: z.string().nullable(),
});