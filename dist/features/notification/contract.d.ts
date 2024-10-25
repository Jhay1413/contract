import { z } from "zod";
export declare const notificationContract: {
    readNotif: {
        body: z.ZodObject<{
            dateRead: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dateRead: string;
        }, {
            dateRead: string;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/notification/:id/read";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
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
    getNotificationsByUserId: {
        method: "GET";
        query: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/notification/userNotif";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
};
