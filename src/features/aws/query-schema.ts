import { z } from "zod";

const getViewSignedUrlsSchema = z.object({
  id: z.string(),
  signedUrl: z.string().optional(),
  fileUrl: z.string(),
});

const getMultipleSignedUrlSchema = z.object({
  id: z.string(),
  data: z.array(
    z.object({
      url: z.string(),
      signedUrl: z.string().optional(),
    })
  ),
});
export { getViewSignedUrlsSchema, getMultipleSignedUrlSchema };
