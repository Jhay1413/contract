"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewSignedUrlsSchema = void 0;
const zod_1 = require("zod");
const getViewSignedUrlsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    signedUrl: zod_1.z.string().optional(),
    fileUrl: zod_1.z.string(),
});
exports.getViewSignedUrlsSchema = getViewSignedUrlsSchema;
