import { z } from "zod";
import { AccountQuerySchema } from "../users/query-schema";
import { projectQuerySchema } from "../companies/query-schema";

export const ticketingTableSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  subject: z.string(),
  section: z.string(),
  division: z.string(),
  status: z.string(),
  priority: z.string(),
  requestDetails: z.string(),
  dueDate: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()),
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

export const ticketLogsSchema = z.object({
  ticketId: z.string(),
  status: z.string(),
  sender: z.string(),
  receiver: z.string(),
  priority: z.string(),
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()),
  remarks: z.string().nullable(),
  attachments: z.array(z.string().nullable()),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export const ticketFullDetailsSchema = z.object({
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
  sender: AccountQuerySchema,
  receiver: AccountQuerySchema,
  requestee: AccountQuerySchema,
  remarks: z.string().nullable(),
  project: projectQuerySchema.nullable(),
  transactionId: z.string().nullable(),
  attachments: z.array(z.string().nullable()),
  ticketLogs: z.array(ticketLogsSchema),
});