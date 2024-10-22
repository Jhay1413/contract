import { z } from "zod";
export declare const notification: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    message: z.ZodString;
    transactionId: z.ZodString;
    forwarderId: z.ZodString;
    receiverId: z.ZodString;
    isRead: z.ZodBoolean;
    dateRead: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    createdAt: string;
    transactionId: string;
    receiverId: string;
    forwarderId: string;
    isRead: boolean;
    dateRead: string | null;
    id?: string | undefined;
}, {
    message: string;
    createdAt: string;
    transactionId: string;
    receiverId: string;
    forwarderId: string;
    isRead: boolean;
    dateRead: string | null;
    id?: string | undefined;
}>;
