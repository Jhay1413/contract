import { z } from "zod";
export declare const filesQuerySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    remarks: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
    fileName: z.ZodString;
    fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    remarks: string | null;
    fileName: string;
    id?: string | undefined;
    createdAt?: string | undefined;
    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
    fileStatus?: string | null | undefined;
    fileUrl?: string | null | undefined;
    fileOriginalName?: string | null | undefined;
}, {
    remarks: string | null;
    fileName: string;
    id?: string | undefined;
    createdAt?: string | undefined;
    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
    fileStatus?: string | null | undefined;
    fileUrl?: string | null | undefined;
    fileOriginalName?: string | null | undefined;
}>;
export declare const completeStaffWorkQuerySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    date: z.ZodString;
    remarks: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    transactionId: z.ZodOptional<z.ZodString>;
    attachmentUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    date: string;
    remarks: string;
    id?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    transactionId?: string | undefined;
    attachmentUrl?: string | null | undefined;
}, {
    date: string;
    remarks: string;
    id?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    transactionId?: string | undefined;
    attachmentUrl?: string | null | undefined;
}>;
export declare const transactionLogsData: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    transactionId: z.ZodString;
    documentType: z.ZodString;
    percentage: z.ZodNumber;
    subject: z.ZodString;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    documentSubType: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    team: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodString;
    priority: z.ZodString;
    company: z.ZodString;
    project: z.ZodString;
    remarks: z.ZodString;
    receiver: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    forwarder: z.ZodString;
    dateForwarded: z.ZodString;
    dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    originDepartment: z.ZodString;
    targetDepartment: z.ZodString;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        remarks: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
        fileName: z.ZodString;
        fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }, {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    priority: string;
    status: string;
    remarks: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    documentSubType: string;
    company: string;
    project: string;
    forwarder: string;
    dateForwarded: string;
    originDepartment: string;
    targetDepartment: string;
    id?: string | undefined;
    receiver?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    dueDate?: string | null | undefined;
    team?: string | null | undefined;
    dateReceived?: string | null | undefined;
    attachments?: {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }[] | undefined;
}, {
    priority: string;
    status: string;
    remarks: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    documentSubType: string;
    company: string;
    project: string;
    forwarder: string;
    dateForwarded: string;
    originDepartment: string;
    targetDepartment: string;
    id?: string | undefined;
    receiver?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    dueDate?: string | null | undefined;
    team?: string | null | undefined;
    dateReceived?: string | null | undefined;
    attachments?: {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }[] | undefined;
}>;
export declare const transactionQueryData: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    transactionId: z.ZodString;
    documentType: z.ZodString;
    documentSubType: z.ZodString;
    subject: z.ZodString;
    dueDate: z.ZodString;
    team: z.ZodString;
    status: z.ZodString;
    priority: z.ZodString;
    percentage: z.ZodNumber;
    category: z.ZodString;
    originDepartment: z.ZodOptional<z.ZodString>;
    targetDepartment: z.ZodOptional<z.ZodString>;
    remarks: z.ZodString;
    dateForwarded: z.ZodNullable<z.ZodString>;
    dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        remarks: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
        fileName: z.ZodString;
        fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }, {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }>, "many">>;
    forwarder: z.ZodOptional<z.ZodObject<{
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
    }>>;
    receiver: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }>>>;
    company: z.ZodOptional<z.ZodObject<{
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
    }>>;
    project: z.ZodOptional<z.ZodObject<{
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
    transactionLogs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        transactionId: z.ZodString;
        documentType: z.ZodString;
        percentage: z.ZodNumber;
        subject: z.ZodString;
        dueDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        documentSubType: z.ZodString;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        team: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodString;
        priority: z.ZodString;
        company: z.ZodString;
        project: z.ZodString;
        remarks: z.ZodString;
        receiver: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        forwarder: z.ZodString;
        dateForwarded: z.ZodString;
        dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        originDepartment: z.ZodString;
        targetDepartment: z.ZodString;
        attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            remarks: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
            fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
            fileName: z.ZodString;
            fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }, {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        priority: string;
        status: string;
        remarks: string;
        transactionId: string;
        documentType: string;
        percentage: number;
        subject: string;
        documentSubType: string;
        company: string;
        project: string;
        forwarder: string;
        dateForwarded: string;
        originDepartment: string;
        targetDepartment: string;
        id?: string | undefined;
        receiver?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        dueDate?: string | null | undefined;
        team?: string | null | undefined;
        dateReceived?: string | null | undefined;
        attachments?: {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }[] | undefined;
    }, {
        priority: string;
        status: string;
        remarks: string;
        transactionId: string;
        documentType: string;
        percentage: number;
        subject: string;
        documentSubType: string;
        company: string;
        project: string;
        forwarder: string;
        dateForwarded: string;
        originDepartment: string;
        targetDepartment: string;
        id?: string | undefined;
        receiver?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        dueDate?: string | null | undefined;
        team?: string | null | undefined;
        dateReceived?: string | null | undefined;
        attachments?: {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }[] | undefined;
    }>, "many">>;
    completeStaffWork: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        date: z.ZodString;
        remarks: z.ZodString;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        transactionId: z.ZodOptional<z.ZodString>;
        attachmentUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        remarks: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        transactionId?: string | undefined;
        attachmentUrl?: string | null | undefined;
    }, {
        date: string;
        remarks: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        transactionId?: string | undefined;
        attachmentUrl?: string | null | undefined;
    }>, "many">>;
    projectName: z.ZodOptional<z.ZodString>;
    receiverName: z.ZodOptional<z.ZodString>;
    forwarderName: z.ZodOptional<z.ZodString>;
    receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    forwarderId: z.ZodString;
    companyId: z.ZodString;
    projectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    priority: string;
    status: string;
    projectId: string;
    companyId: string;
    remarks: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    dueDate: string;
    documentSubType: string;
    team: string;
    dateForwarded: string | null;
    category: string;
    forwarderId: string;
    id?: string | undefined;
    receiver?: {
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
    } | null | undefined;
    projectName?: string | undefined;
    company?: {
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
    } | undefined;
    project?: {
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
    } | undefined;
    forwarder?: {
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
    } | undefined;
    dateReceived?: string | null | undefined;
    originDepartment?: string | undefined;
    targetDepartment?: string | undefined;
    attachments?: {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }[] | undefined;
    transactionLogs?: {
        priority: string;
        status: string;
        remarks: string;
        transactionId: string;
        documentType: string;
        percentage: number;
        subject: string;
        documentSubType: string;
        company: string;
        project: string;
        forwarder: string;
        dateForwarded: string;
        originDepartment: string;
        targetDepartment: string;
        id?: string | undefined;
        receiver?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        dueDate?: string | null | undefined;
        team?: string | null | undefined;
        dateReceived?: string | null | undefined;
        attachments?: {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }[] | undefined;
    }[] | undefined;
    completeStaffWork?: {
        date: string;
        remarks: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        transactionId?: string | undefined;
        attachmentUrl?: string | null | undefined;
    }[] | undefined;
    receiverName?: string | undefined;
    forwarderName?: string | undefined;
    receiverId?: string | null | undefined;
}, {
    priority: string;
    status: string;
    projectId: string;
    companyId: string;
    remarks: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    dueDate: string;
    documentSubType: string;
    team: string;
    dateForwarded: string | null;
    category: string;
    forwarderId: string;
    id?: string | undefined;
    receiver?: {
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
    } | null | undefined;
    projectName?: string | undefined;
    company?: {
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
    } | undefined;
    project?: {
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
    } | undefined;
    forwarder?: {
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
    } | undefined;
    dateReceived?: string | null | undefined;
    originDepartment?: string | undefined;
    targetDepartment?: string | undefined;
    attachments?: {
        remarks: string | null;
        fileName: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
        fileStatus?: string | null | undefined;
        fileUrl?: string | null | undefined;
        fileOriginalName?: string | null | undefined;
    }[] | undefined;
    transactionLogs?: {
        priority: string;
        status: string;
        remarks: string;
        transactionId: string;
        documentType: string;
        percentage: number;
        subject: string;
        documentSubType: string;
        company: string;
        project: string;
        forwarder: string;
        dateForwarded: string;
        originDepartment: string;
        targetDepartment: string;
        id?: string | undefined;
        receiver?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        dueDate?: string | null | undefined;
        team?: string | null | undefined;
        dateReceived?: string | null | undefined;
        attachments?: {
            remarks: string | null;
            fileName: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
            fileStatus?: string | null | undefined;
            fileUrl?: string | null | undefined;
            fileOriginalName?: string | null | undefined;
        }[] | undefined;
    }[] | undefined;
    completeStaffWork?: {
        date: string;
        remarks: string;
        id?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        transactionId?: string | undefined;
        attachmentUrl?: string | null | undefined;
    }[] | undefined;
    receiverName?: string | undefined;
    forwarderName?: string | undefined;
    receiverId?: string | null | undefined;
}>;
export declare const transactionTable: z.ZodObject<{
    id: z.ZodString;
    transactionId: z.ZodString;
    documentSubType: z.ZodString;
    documentType: z.ZodString;
    subject: z.ZodString;
    status: z.ZodString;
    priority: z.ZodString;
    dueDate: z.ZodString;
    project: z.ZodObject<{
        projectName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        projectName: string;
    }, {
        projectName: string;
    }>;
    company: z.ZodObject<{
        companyName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        companyName: string;
    }, {
        companyName: string;
    }>;
    percentage: z.ZodNumber;
    receiver: z.ZodNullable<z.ZodString>;
    forwarder: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    priority: string;
    receiver: string | null;
    status: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    dueDate: string;
    documentSubType: string;
    company: {
        companyName: string;
    };
    project: {
        projectName: string;
    };
    forwarder: string | null;
}, {
    id: string;
    priority: string;
    receiver: string | null;
    status: string;
    transactionId: string;
    documentType: string;
    percentage: number;
    subject: string;
    dueDate: string;
    documentSubType: string;
    company: {
        companyName: string;
    };
    project: {
        projectName: string;
    };
    forwarder: string | null;
}>;
