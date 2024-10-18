export const MAX_FILE_SIZE_50MB = 50;
export const MAX_FILE_SIZE_10MB = 10;
// const ACCEPTED_FILE_TYPES = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];

import { z } from "zod";

export const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};
const FileTypeEnum = z.enum(["INITIAL_DOC", "FOLLOWED_UP"]);
export const filesMutationSchema = z.object({
  id: z.string().optional(),
  remarks: z.nullable(z.string()),
  createdAt: z.string().datetime().optional(),
  fileType: FileTypeEnum.optional(),
  fileName: z.string(),
  fileStatus: z.nullable(z.string()).optional(),
  fileUrl: z.nullable(z.string()).optional(),
  fileOriginalName: z.nullable(z.string()).optional(),
  file: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0;
    }, "Image is required")
    .refine((files) => {
      return Array.from(files ?? []).every(
        (file) => sizeInMB(file.size) <= MAX_FILE_SIZE_50MB
      );
    }, `The maximum image size is ${MAX_FILE_SIZE_50MB}MB`)
    // .refine((files) => {
    //   return Array.from(files ?? []).every((file) =>
    //     ACCEPTED_FILE_TYPES.includes(file.type)
    //   );
    // }, "File type is not supported")
    .optional(),
});
export const transactionMutationSchema = z.object({
  id: z.string().optional(),
  transactionId: z.string().optional(),
  documentType: z.string(),
  documentSubType: z.string(),
  subject: z.string(),
  dueDate: z.string().datetime(),
  team: z.string(),
  category: z.string(),
  status: z.string(),
  priority: z.string(),
  companyId: z.string(),
  projectId: z.string(),
  receiverId: z.nullable(z.string()).optional(),
  remarks: z.string(),
  receivedById: z.nullable(z.string()).optional(),
  forwarderId: z.string(),
  dateForwarded: z.string().datetime(),
  dateReceived: z.nullable(z.string().datetime()).optional(),
  originDepartment: z.string(),
  targetDepartment: z.string(),
  attachments: z.array(filesMutationSchema),
});
export const completeStaffWorkMutationSchema = z.object({
  id: z.string().optional(),
  date: z.string().datetime(),
  remarks: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  transactionId: z.string().optional(),
  attachmentFile: z
    .instanceof(File)
    .refine((file) => {
      return file.size > 0;
    }, "File is required")
    .refine((file) => {
      return sizeInMB(file.size) <= MAX_FILE_SIZE_10MB;
    }, `The maximum file size is ${MAX_FILE_SIZE_10MB}MB`)
    // .refine((file) => {
    //   return ACCEPTED_FILE_TYPES.includes(file.type);
    // }, "File type is not supported")
    .optional(),
  attachmentUrl: z.string().optional(),
});
