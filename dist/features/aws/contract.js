"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsContract = void 0;
const core_1 = require("@ts-rest/core");
const zod_1 = require("zod");
const query_schema_1 = require("./query-schema");
const contract = (0, core_1.initContract)();
exports.awsContract = contract.router({
    getMultipleSignedUrl: {
        method: "GET",
        path: "/aws/getMultipleSignedUrl",
        query: zod_1.z.object({
            data: zod_1.z.array(query_schema_1.getMultipleSignedUrlSchema),
        }),
        responses: {
            200: zod_1.z.array(query_schema_1.getMultipleSignedUrlSchema),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getViewSignedUrl: {
        method: "GET",
        path: "/aws/getViewSignedUrl",
        query: zod_1.z.object({
            data: zod_1.z.array(query_schema_1.getViewSignedUrlsSchema),
        }),
        responses: {
            200: zod_1.z.array(query_schema_1.getViewSignedUrlsSchema),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    getSignedUrl: {
        method: "GET",
        path: "/aws/getSignedUrl",
        query: zod_1.z.object({
            company: zod_1.z.string(),
            fileName: zod_1.z.string(),
            fileType: zod_1.z.string(),
        }),
        responses: {
            200: zod_1.z.object({
                company: zod_1.z.string(),
                fileName: zod_1.z.string(),
                fileType: zod_1.z.string(),
                fileUrl: zod_1.z.string(),
                signedUrl: zod_1.z.string(),
            }),
            500: zod_1.z.object({
                error: zod_1.z.string(),
            }),
        },
    },
    uploadDocument: {
        method: "POST",
        path: "/posts",
        contentType: "multipart/form-data", // <- Only difference
        body: contract.type(), // <- Use File type in here
        responses: {
            200: zod_1.z.object({
                key: zod_1.z.string(),
            }),
            400: zod_1.z.object({
                message: zod_1.z.string(),
            }),
        },
    },
});
