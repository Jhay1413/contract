"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMultipleSignedUrlSchema = exports.getViewSignedUrlsSchema = void 0;
const zod_1 = require("zod");
const getViewSignedUrlsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    signedUrl: zod_1.z.string().optional(),
    fileUrl: zod_1.z.string(),
});
exports.getViewSignedUrlsSchema = getViewSignedUrlsSchema;
const getMultipleSignedUrlSchema = zod_1.z.object({
    id: zod_1.z.string(),
    data: zod_1.z.array(zod_1.z.object({
        url: zod_1.z.string(),
        signedUrl: zod_1.z.string().optional(),
    })),
});
exports.getMultipleSignedUrlSchema = getMultipleSignedUrlSchema;
