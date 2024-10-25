import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { getViewSignedUrlsSchema } from "./query-schema";

const contract = initContract();
export const awsContract = contract.router({
  getViewSignedUrl: {
    method: "GET",
    path: "/aws/getViewSignedUrl",
    query: z.object({
      data: z.array(getViewSignedUrlsSchema),
    }),
    responses: {
      200: z.array(getViewSignedUrlsSchema),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  getSignedUrl: {
    method: "GET",
    path: "/aws/getSignedUrl",
    query: z.object({
      company: z.string(),
      fileName: z.string(),
      fileType: z.string(),
    }),
    responses: {
      200: z.object({
        company: z.string(),
        fileName: z.string(),
        fileType: z.string(),
        fileUrl: z.string(),
        signedUrl: z.string(),
      }),
      500: z.object({
        error: z.string(),
      }),
    },
  },
  uploadDocument: {
    method: "POST",
    path: "/posts",
    contentType: "multipart/form-data", // <- Only difference
    body: contract.type<{
      document: File;
      company: string;
      fileName: string;
      contentType: string;
    }>(), // <- Use File type in here
    responses: {
      200: z.object({
        key: z.string(),
      }),
      400: z.object({
        message: z.string(),
      }),
    },
  },
});
