import { z } from "zod";
declare const dashboardData: z.ZodObject<{
    priority: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        percentage: z.ZodNumber;
        project: z.ZodObject<{
            projectName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            projectName: string;
        }, {
            projectName: string;
        }>;
        transactionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        transactionId: string;
        percentage: number;
        project: {
            projectName: string;
        };
    }, {
        id: string;
        transactionId: string;
        percentage: number;
        project: {
            projectName: string;
        };
    }>, "many">;
    perApplication: z.ZodArray<z.ZodObject<{
        category: z.ZodString;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        category: string;
        count: number;
    }, {
        category: string;
        count: number;
    }>, "many">;
    perSection: z.ZodArray<z.ZodObject<{
        section: z.ZodString;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        section: string;
        count: number;
    }, {
        section: string;
        count: number;
    }>, "many">;
    totalProject: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    priority: {
        id: string;
        transactionId: string;
        percentage: number;
        project: {
            projectName: string;
        };
    }[];
    perApplication: {
        category: string;
        count: number;
    }[];
    perSection: {
        section: string;
        count: number;
    }[];
    totalProject: number;
}, {
    priority: {
        id: string;
        transactionId: string;
        percentage: number;
        project: {
            projectName: string;
        };
    }[];
    perApplication: {
        category: string;
        count: number;
    }[];
    perSection: {
        section: string;
        count: number;
    }[];
    totalProject: number;
}>;
export { dashboardData };
