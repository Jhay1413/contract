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
  receiver: z
    .nullable(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .optional(),
  sender: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  project: z
    .object({
      projectId: z.string(),
      projectName: z.string(),
    })
    .nullable(),
  transactionId: z.string().nullable(),
  transaction: z
    .nullable(
      z.object({
        transactionId: z.string(),
        projectId: z.string(),
      })
    )
    .optional(),
  remarks: z.string().nullable(),
});

export const ticketLogsSchema = z.object({
  ticketId: z.string(),
  status: z.string(),
  sender: z.string(),
  receiver: z.nullable(z.string()).optional(),
  senderId: z.string(),
  receiverId: z.nullable(z.string()).optional(),
  priority: z.string(),
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()),
  remarks: z.string().nullable(),
  attachments: z.array(z.string()),
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
  requestDetails: z.string(),
  priority: z.string(),
  dueDate: z.string().datetime(),
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()),
  sender: AccountQuerySchema,
  receiver: z.nullable(AccountQuerySchema).optional(),
  requestee: AccountQuerySchema,
  remarks: z.string().nullable(),
  project: projectQuerySchema.nullable(),
  attachments: z.array(z.string()),
  transactionId: z.string().nullable(),
  transaction: z
    .nullable(
      z.object({
        transactionId: z.string(),
        documentSubType: z.string(),
        status: z.string(),
        priority: z.string(),
        dueDate: z.string().datetime(),
      })
    )
    .optional(),
  ticketLogs: z.array(ticketLogsSchema),
});
