import { z } from "zod";
export declare const userAccountsContract: {
    getUsersForTickets: {
        method: "GET";
        query: z.ZodObject<{
            division: z.ZodString;
            section: z.ZodString;
            role: z.ZodString;
            mode: z.ZodString;
            requesteedId: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            section: string;
            role: string;
            mode: string;
            division: string;
            type?: string | undefined;
            requesteedId?: string | undefined;
        }, {
            section: string;
            role: string;
            mode: string;
            division: string;
            type?: string | undefined;
            requesteedId?: string | undefined;
        }>;
        path: "/user/forward-to";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                userInfo: z.ZodObject<{
                    firstName: z.ZodString;
                    lastName: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    firstName: string;
                    lastName: string;
                }, {
                    firstName: string;
                    lastName: string;
                }>;
                accountRole: z.ZodEnum<["SUPERADMIN", "ADMIN", "TL", "CH", "GUEST", "RECORDS", "MANAGER", "QA", "DMS", "FINANCE"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                userInfo: {
                    firstName: string;
                    lastName: string;
                };
            }, {
                id: string;
                accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                userInfo: {
                    firstName: string;
                    lastName: string;
                };
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
    getUserInfoForSelect: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            query: string;
        }, {
            query: string;
        }>;
        path: "/user/user-info";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: string;
            }, {
                value: string;
                label: string;
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
    getUserByRoleAccess: {
        method: "GET";
        query: z.ZodObject<{
            id: z.ZodString;
            targetDivision: z.ZodString;
            team: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            team: string | null;
            targetDivision: string;
        }, {
            id: string;
            team: string | null;
            targetDivision: string;
        }>;
        path: "/user/user-by-roles";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                accountId: z.ZodString;
                firstName: z.ZodString;
                lastName: z.ZodString;
                account: z.ZodObject<{
                    accountRole: z.ZodEnum<["SUPERADMIN", "ADMIN", "TL", "CH", "GUEST", "RECORDS", "MANAGER", "QA", "DMS", "FINANCE"]>;
                }, "strip", z.ZodTypeAny, {
                    accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                }, {
                    accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                }>;
            }, "strip", z.ZodTypeAny, {
                firstName: string;
                lastName: string;
                accountId: string;
                account: {
                    accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                };
            }, {
                firstName: string;
                lastName: string;
                accountId: string;
                account: {
                    accountRole: "SUPERADMIN" | "ADMIN" | "TL" | "CH" | "GUEST" | "RECORDS" | "MANAGER" | "QA" | "DMS" | "FINANCE";
                };
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
