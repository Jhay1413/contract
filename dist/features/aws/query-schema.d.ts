import { z } from "zod";
declare const getViewSignedUrlsSchema: z.ZodObject<{
    id: z.ZodString;
    signedUrl: z.ZodOptional<z.ZodString>;
    fileUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    fileUrl: string;
    signedUrl?: string | undefined;
}, {
    id: string;
    fileUrl: string;
    signedUrl?: string | undefined;
}>;
declare const getMultipleSignedUrlSchema: z.ZodObject<{
    id: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        signedUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        signedUrl?: string | undefined;
    }, {
        url: string;
        signedUrl?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        url: string;
        signedUrl?: string | undefined;
    }[];
    id: string;
}, {
    data: {
        url: string;
        signedUrl?: string | undefined;
    }[];
    id: string;
}>;
export { getViewSignedUrlsSchema, getMultipleSignedUrlSchema };
