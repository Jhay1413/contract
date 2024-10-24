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
export { getViewSignedUrlsSchema };
