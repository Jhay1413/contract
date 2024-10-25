import { z } from "zod";
export declare const contacts: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    contactNumber: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string | null;
    contactNumber: string;
    id?: string | undefined;
}, {
    name: string;
    email: string | null;
    contactNumber: string;
    id?: string | undefined;
}>;
export declare const projects: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
    projectName: z.ZodString;
    projectAddress: z.ZodString;
    retainer: z.ZodBoolean;
    date_expiry: z.ZodNullable<z.ZodDate>;
    contactPersons: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        contactNumber: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    }, {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    }>>>;
    email: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string | null;
    projectId: string;
    projectName: string;
    projectAddress: string;
    retainer: boolean;
    date_expiry: Date | null;
    id?: string | undefined;
    contactPersons?: {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    } | null | undefined;
}, {
    email: string | null;
    projectId: string;
    projectName: string;
    projectAddress: string;
    retainer: boolean;
    date_expiry: Date | null;
    id?: string | undefined;
    contactPersons?: {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    } | null | undefined;
}>;
export declare const companyFormData: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    companyId: z.ZodString;
    companyName: z.ZodString;
    companyAddress: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    companyProjects: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        projectId: z.ZodString;
        projectName: z.ZodString;
        projectAddress: z.ZodString;
        retainer: z.ZodBoolean;
        date_expiry: z.ZodNullable<z.ZodDate>;
        contactPersons: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            contactNumber: z.ZodString;
            email: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        }, {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        }>>>;
        email: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email: string | null;
        projectId: string;
        projectName: string;
        projectAddress: string;
        retainer: boolean;
        date_expiry: Date | null;
        id?: string | undefined;
        contactPersons?: {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        } | null | undefined;
    }, {
        email: string | null;
        projectId: string;
        projectName: string;
        projectAddress: string;
        retainer: boolean;
        date_expiry: Date | null;
        id?: string | undefined;
        contactPersons?: {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        } | null | undefined;
    }>, "many">>>;
    contactPersons: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        contactNumber: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    }, {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    email: string | null;
    companyId: string;
    companyName: string;
    companyAddress: string;
    id?: string | undefined;
    contactPersons?: {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    } | null | undefined;
    companyProjects?: {
        email: string | null;
        projectId: string;
        projectName: string;
        projectAddress: string;
        retainer: boolean;
        date_expiry: Date | null;
        id?: string | undefined;
        contactPersons?: {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        } | null | undefined;
    }[] | null | undefined;
}, {
    email: string | null;
    companyId: string;
    companyName: string;
    companyAddress: string;
    id?: string | undefined;
    contactPersons?: {
        name: string;
        email: string | null;
        contactNumber: string;
        id?: string | undefined;
    } | null | undefined;
    companyProjects?: {
        email: string | null;
        projectId: string;
        projectName: string;
        projectAddress: string;
        retainer: boolean;
        date_expiry: Date | null;
        id?: string | undefined;
        contactPersons?: {
            name: string;
            email: string | null;
            contactNumber: string;
            id?: string | undefined;
        } | null | undefined;
    }[] | null | undefined;
}>;
export type TProject = z.infer<typeof projects>;
export type TcompanyFormData = z.infer<typeof companyFormData>;
