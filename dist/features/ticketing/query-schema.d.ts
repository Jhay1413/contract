import { z } from "zod";
export declare const ticketingTableSchema: z.ZodObject<{
    id: z.ZodString;
    ticketId: z.ZodString;
    subject: z.ZodString;
    section: z.ZodString;
    division: z.ZodString;
    status: z.ZodString;
    priority: z.ZodString;
    requestDetails: z.ZodString;
    dueDate: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    dateForwarded: z.ZodString;
    dateReceived: z.ZodNullable<z.ZodString>;
    receiver: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
    }, {
        firstName: string;
        lastName: string;
    }>;
    sender: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
    }, {
        firstName: string;
        lastName: string;
    }>;
    project: z.ZodNullable<z.ZodObject<{
        projectName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        projectName: string;
    }, {
        projectName: string;
    }>>;
    transactionId: z.ZodNullable<z.ZodString>;
    remarks: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    priority: string;
    receiver: {
        firstName: string;
        lastName: string;
    };
    section: string;
    status: string;
    remarks: string | null;
    transactionId: string | null;
    subject: string;
    dueDate: string;
    project: {
        projectName: string;
    } | null;
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    division: string;
    requestDetails: string;
    sender: {
        firstName: string;
        lastName: string;
    };
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}, {
    id: string;
    priority: string;
    receiver: {
        firstName: string;
        lastName: string;
    };
    section: string;
    status: string;
    remarks: string | null;
    transactionId: string | null;
    subject: string;
    dueDate: string;
    project: {
        projectName: string;
    } | null;
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    division: string;
    requestDetails: string;
    sender: {
        firstName: string;
        lastName: string;
    };
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}>;
export declare const ticketLogsSchema: z.ZodObject<{
    ticketId: z.ZodString;
    status: z.ZodString;
    sender: z.ZodString;
    receiver: z.ZodString;
    priority: z.ZodString;
    dateForwarded: z.ZodString;
    dateReceived: z.ZodNullable<z.ZodString>;
    remarks: z.ZodNullable<z.ZodString>;
    attachments: z.ZodArray<z.ZodString, "many">;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    priority: string;
    receiver: string;
    status: string;
    remarks: string | null;
    attachments: string[];
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    sender: string;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}, {
    priority: string;
    receiver: string;
    status: string;
    remarks: string | null;
    attachments: string[];
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    sender: string;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}>;
export declare const ticketFullDetailsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ticketId: z.ZodString;
    subject: z.ZodString;
    section: z.ZodString;
    division: z.ZodString;
    status: z.ZodString;
    requestType: z.ZodString;
    requestDetails: z.ZodString;
    priority: z.ZodString;
    dueDate: z.ZodString;
    dateForwarded: z.ZodString;
    dateReceived: z.ZodNullable<z.ZodString>;
    sender: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        accountRole: z.ZodString;
        password: z.ZodString;
        userInfo: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            email: z.ZodString;
            employeeId: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            assignedDivision: z.ZodString;
            assignedSection: z.ZodNullable<z.ZodString>;
            dateStarted: z.ZodString;
            jobStatus: z.ZodString;
            contactNumber: z.ZodString;
            birthDate: z.ZodString;
            middleName: z.ZodNullable<z.ZodString>;
            imageUrl: z.ZodNullable<z.ZodString>;
            accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }>;
    receiver: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        accountRole: z.ZodString;
        password: z.ZodString;
        userInfo: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            email: z.ZodString;
            employeeId: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            assignedDivision: z.ZodString;
            assignedSection: z.ZodNullable<z.ZodString>;
            dateStarted: z.ZodString;
            jobStatus: z.ZodString;
            contactNumber: z.ZodString;
            birthDate: z.ZodString;
            middleName: z.ZodNullable<z.ZodString>;
            imageUrl: z.ZodNullable<z.ZodString>;
            accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }>;
    requestee: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        accountRole: z.ZodString;
        password: z.ZodString;
        userInfo: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            email: z.ZodString;
            employeeId: z.ZodString;
            firstName: z.ZodString;
            lastName: z.ZodString;
            assignedDivision: z.ZodString;
            assignedSection: z.ZodNullable<z.ZodString>;
            dateStarted: z.ZodString;
            jobStatus: z.ZodString;
            contactNumber: z.ZodString;
            birthDate: z.ZodString;
            middleName: z.ZodNullable<z.ZodString>;
            imageUrl: z.ZodNullable<z.ZodString>;
            accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }, {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }, {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    }>;
    remarks: z.ZodNullable<z.ZodString>;
    project: z.ZodNullable<z.ZodObject<{
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
    }>>;
    transactionId: z.ZodNullable<z.ZodString>;
    attachments: z.ZodArray<z.ZodString, "many">;
    ticketLogs: z.ZodArray<z.ZodObject<{
        ticketId: z.ZodString;
        status: z.ZodString;
        sender: z.ZodString;
        receiver: z.ZodString;
        priority: z.ZodString;
        dateForwarded: z.ZodString;
        dateReceived: z.ZodNullable<z.ZodString>;
        remarks: z.ZodNullable<z.ZodString>;
        attachments: z.ZodArray<z.ZodString, "many">;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        priority: string;
        receiver: string;
        status: string;
        remarks: string | null;
        attachments: string[];
        dateForwarded: string;
        dateReceived: string | null;
        ticketId: string;
        sender: string;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }, {
        priority: string;
        receiver: string;
        status: string;
        remarks: string | null;
        attachments: string[];
        dateForwarded: string;
        dateReceived: string | null;
        ticketId: string;
        sender: string;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    priority: string;
    receiver: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    section: string;
    status: string;
    remarks: string | null;
    transactionId: string | null;
    attachments: string[];
    subject: string;
    dueDate: string;
    project: {
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
    } | null;
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    division: string;
    requestDetails: string;
    sender: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    requestType: string;
    requestee: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    ticketLogs: {
        priority: string;
        receiver: string;
        status: string;
        remarks: string | null;
        attachments: string[];
        dateForwarded: string;
        dateReceived: string | null;
        ticketId: string;
        sender: string;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }[];
    id?: string | undefined;
}, {
    priority: string;
    receiver: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    section: string;
    status: string;
    remarks: string | null;
    transactionId: string | null;
    attachments: string[];
    subject: string;
    dueDate: string;
    project: {
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
    } | null;
    dateForwarded: string;
    dateReceived: string | null;
    ticketId: string;
    division: string;
    requestDetails: string;
    sender: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    requestType: string;
    requestee: {
        id: string;
        email: string;
        password: string;
        accountRole: string;
        userInfo?: {
            email: string;
            contactNumber: string;
            employeeId: string;
            firstName: string;
            lastName: string;
            assignedDivision: string;
            assignedSection: string | null;
            dateStarted: string;
            jobStatus: string;
            birthDate: string;
            middleName: string | null;
            imageUrl: string | null;
            accountId?: string | null | undefined;
        } | null | undefined;
    };
    ticketLogs: {
        priority: string;
        receiver: string;
        status: string;
        remarks: string | null;
        attachments: string[];
        dateForwarded: string;
        dateReceived: string | null;
        ticketId: string;
        sender: string;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }[];
    id?: string | undefined;
}>;
