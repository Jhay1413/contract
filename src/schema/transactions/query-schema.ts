import { z } from "zod";
import { AccountSchema } from "../users/mutation-schema";
import {
  companyQuerySchema,
  projectQuerySchema,
} from "../companies/query-schema";

const FileTypeEnum = z.enum(["INITIAL_DOC", "FOLLOWED_UP"]);

export const filesQuerySchema = z.object({
  id: z.string().optional(),
  remarks: z.nullable(z.string()),
  createdAt: z.string().datetime().optional(),
  fileType: FileTypeEnum.optional(),
  fileName: z.string(),
  fileStatus: z.nullable(z.string()).optional(),
  fileUrl: z.nullable(z.string()).optional(),
  fileOriginalName: z.nullable(z.string()).optional(),
});

export const completeStaffWorkQuerySchema = z.object({
  id: z.string().optional(),
  date:  z.string().datetime(),
  remarks: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  transactionId: z.string().optional(),
  attachmentUrl: z.string().optional(),
});

export const transactionLogsData = z.object({
  id: z.string().optional(),
  transactionId: z.string(),
  documentType: z.string(),
  subject: z.string(),
  dueDate: z.nullable( z.string().datetime()).optional(),
  documentSubType: z.string(),
  createdAt:  z.string().datetime().optional(),
  updatedAt:  z.string().datetime().optional(),
  team: z.string().optional(),
  status: z.string(),
  priority: z.string(),
  company: z.string(),
  project: z.string(),
  remarks: z.string(),
  receiver: z.nullable(z.string()).optional(),
  forwarder: z.string(),
  dateForwarded:  z.string().datetime(),
  dateReceived: z.nullable( z.string().datetime()).optional(),
  originDepartment: z.string(),
  targetDepartment: z.string(),
  attachments: z.array(filesQuerySchema).optional(),
});
export const transactionQueryData = z.object({
  id: z.string().optional(),
  transactionId: z.string(),
  documentType: z.string(),
  documentSubType: z.string(),
  subject: z.string(),
  dueDate: z.string().datetime(),
  team: z.string(),
  status: z.string(),
  priority: z.string(),
  originDepartment: z.string().optional(),
  targetDepartment: z.string().optional(),
  remarks: z.string(),
  dateForwarded: z.nullable(z.string().datetime()),
  dateReceived: z.nullable(z.string().datetime()).optional(),
  attachments: z.array(filesQuerySchema).optional(),
  forwarder: AccountSchema.optional(),
  receiver: z.nullable(AccountSchema).optional(),
  attachment: z.nullable(z.array(filesQuerySchema)).optional(),
  company: companyQuerySchema.optional(),
  project: projectQuerySchema.optional(),
  transactionLogs: z.array(transactionLogsData).optional(),
  completeStaffWork: z.array(completeStaffWorkQuerySchema).optional(),
  percentage: z.string().optional(),
  projectName: z.string().optional(),
  receiverName: z.string().optional(),
  forwarderName: z.string().optional(),
  receiverId: z.nullable(z.string()).optional(),
  forwarderId: z.string(),
  companyId: z.string(),
  projectId: z.string(),
});
