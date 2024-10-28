import { z } from "zod";
export declare const awsContract: {
    getMultipleSignedUrl: {
        method: "GET";
        query: z.ZodObject<{
            data: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            data: {
                data: {
                    url: string;
                    signedUrl?: string | undefined;
                }[];
                id: string;
            }[];
        }, {
            data: {
                data: {
                    url: string;
                    signedUrl?: string | undefined;
                }[];
                id: string;
            }[];
        }>;
        path: "/aws/getMultipleSignedUrl";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    getViewSignedUrl: {
        method: "GET";
        query: z.ZodObject<{
            data: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            data: {
                id: string;
                fileUrl: string;
                signedUrl?: string | undefined;
            }[];
        }, {
            data: {
                id: string;
                fileUrl: string;
                signedUrl?: string | undefined;
            }[];
        }>;
        path: "/aws/getViewSignedUrl";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    getSignedUrl: {
        method: "GET";
        query: z.ZodObject<{
            company: z.ZodString;
            fileName: z.ZodString;
            fileType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fileType: string;
            fileName: string;
            company: string;
        }, {
            fileType: string;
            fileName: string;
            company: string;
        }>;
        path: "/aws/getSignedUrl";
        responses: {
            200: z.ZodObject<{
                company: z.ZodString;
                fileName: z.ZodString;
                fileType: z.ZodString;
                fileUrl: z.ZodString;
                signedUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                fileType: string;
                fileName: string;
                fileUrl: string;
                company: string;
                signedUrl: string;
            }, {
                fileType: string;
                fileName: string;
                fileUrl: string;
                company: string;
                signedUrl: string;
            }>;
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    uploadDocument: {
        body: import("@ts-rest/core").ContractPlainType<{
            document: File;
            company: string;
            fileName: string;
            contentType: string;
        }>;
        method: "POST";
        contentType: "multipart/form-data";
        path: "/posts";
        responses: {
            200: z.ZodObject<{
                key: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                key: string;
            }, {
                key: string;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
        };
    };
};
