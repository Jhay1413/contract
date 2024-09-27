"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeStaffWorkMutationSchema = exports.transactionMutationSchema = exports.filesMutationSchema = exports.sizeInMB = exports.MAX_FILE_SIZE_10MB = exports.MAX_FILE_SIZE_50MB = void 0;
exports.MAX_FILE_SIZE_50MB = 50;
exports.MAX_FILE_SIZE_10MB = 10;
// const ACCEPTED_FILE_TYPES = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];
const zod_1 = require("zod");
const sizeInMB = (sizeInBytes, decimalsNum = 2) => {
    const result = sizeInBytes / (1024 * 1024);
    return +result.toFixed(decimalsNum);
};
exports.sizeInMB = sizeInMB;
const FileTypeEnum = zod_1.z.enum(["INITIAL_DOC", "FOLLOWED_UP"]);
exports.filesMutationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    remarks: zod_1.z.nullable(zod_1.z.string()),
    createdAt: zod_1.z.string().datetime().optional(),
    fileType: FileTypeEnum.optional(),
    fileName: zod_1.z.string(),
    fileStatus: zod_1.z.nullable(zod_1.z.string()).optional(),
    fileUrl: zod_1.z.nullable(zod_1.z.string()).optional(),
    fileOriginalName: zod_1.z.nullable(zod_1.z.string()).optional(),
    file: zod_1.z
        .custom()
        .refine((files) => {
        return Array.from(files !== null && files !== void 0 ? files : []).length !== 0;
    }, "Image is required")
        .refine((files) => {
        return Array.from(files !== null && files !== void 0 ? files : []).every((file) => (0, exports.sizeInMB)(file.size) <= exports.MAX_FILE_SIZE_50MB);
    }, `The maximum image size is ${exports.MAX_FILE_SIZE_50MB}MB`)
        // .refine((files) => {
        //   return Array.from(files ?? []).every((file) =>
        //     ACCEPTED_FILE_TYPES.includes(file.type)
        //   );
        // }, "File type is not supported")
        .optional(),
});
exports.transactionMutationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    transactionId: zod_1.z.string().optional(),
    documentType: zod_1.z.string(),
    documentSubType: zod_1.z.string(),
    subject: zod_1.z.string(),
    dueDate: zod_1.z.string().datetime(),
    team: zod_1.z.string(),
    status: zod_1.z.string(),
    priority: zod_1.z.string(),
    companyId: zod_1.z.string(),
    projectId: zod_1.z.string(),
    receiverId: zod_1.z.nullable(zod_1.z.string()).optional(),
    remarks: zod_1.z.string(),
    receivedById: zod_1.z.nullable(zod_1.z.string()).optional(),
    forwarderId: zod_1.z.string(),
    dateForwarded: zod_1.z.string().datetime(),
    dateReceived: zod_1.z.nullable(zod_1.z.string().datetime()).optional(),
    originDepartment: zod_1.z.string(),
    targetDepartment: zod_1.z.string(),
    attachments: zod_1.z.array(exports.filesMutationSchema),
});
exports.completeStaffWorkMutationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    date: zod_1.z.string().datetime(),
    remarks: zod_1.z.string(),
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
    transactionId: zod_1.z.string().optional(),
    attachmentFile: zod_1.z
        .instanceof(File)
        .refine((file) => {
        return file.size > 0;
    }, "File is required")
        .refine((file) => {
        return (0, exports.sizeInMB)(file.size) <= exports.MAX_FILE_SIZE_10MB;
    }, `The maximum file size is ${exports.MAX_FILE_SIZE_10MB}MB`)
        // .refine((file) => {
        //   return ACCEPTED_FILE_TYPES.includes(file.type);
        // }, "File type is not supported")
        .optional(),
    attachmentUrl: zod_1.z.string().optional(),
});
