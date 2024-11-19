import { z } from "zod";
export declare const ticketContract: {
    updateTicketOnInboxRoutes: {
        body: z.ZodObject<{
            status: z.ZodString;
            remarks: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: string;
            remarks: string;
        }, {
            status: string;
            remarks: string;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id/updateOnInbox";
        responses: {
            201: z.ZodObject<{
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
    fetchPendingRequesteeTicketRoutes: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
            priority: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            page: z.ZodString;
            pageSize: z.ZodString;
            userId: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
            senderId: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: string;
            query: string;
            pageSize: string;
            sortOrder: string;
            state?: string | undefined;
            priority?: string | undefined;
            status?: string | undefined;
            projectId?: string | undefined;
            transactionId?: string | undefined;
            senderId?: string | undefined;
            userId?: string | undefined;
        }, {
            page: string;
            query: string;
            pageSize: string;
            sortOrder: string;
            state?: string | undefined;
            priority?: string | undefined;
            status?: string | undefined;
            projectId?: string | undefined;
            transactionId?: string | undefined;
            senderId?: string | undefined;
            userId?: string | undefined;
        }>;
        path: "/tickets/pendingTickets";
        responses: {
            200: z.ZodObject<{
                data: z.ZodArray<z.ZodObject<{
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
                    receiver: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                        firstName: z.ZodString;
                        lastName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        firstName: string;
                        lastName: string;
                    }, {
                        firstName: string;
                        lastName: string;
                    }>>>;
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
                        projectId: z.ZodString;
                        projectName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        projectId: string;
                        projectName: string;
                    }, {
                        projectId: string;
                        projectName: string;
                    }>>;
                    transactionId: z.ZodNullable<z.ZodString>;
                    transaction: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                        transactionId: z.ZodString;
                        projectId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        projectId: string;
                        transactionId: string;
                    }, {
                        projectId: string;
                        transactionId: string;
                    }>>>;
                    remarks: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }, {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }>, "many">;
                numOfTickets: z.ZodNumber;
                totalPages: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                data: {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }[];
                totalPages: number;
                numOfTickets: number;
            }, {
                data: {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }[];
                totalPages: number;
                numOfTickets: number;
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
    getTickets: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
            priority: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            page: z.ZodString;
            pageSize: z.ZodString;
            userId: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodString;
            projectId: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
            senderId: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: string;
            query: string;
            pageSize: string;
            sortOrder: string;
            state?: string | undefined;
            priority?: string | undefined;
            status?: string | undefined;
            projectId?: string | undefined;
            transactionId?: string | undefined;
            senderId?: string | undefined;
            userId?: string | undefined;
        }, {
            page: string;
            query: string;
            pageSize: string;
            sortOrder: string;
            state?: string | undefined;
            priority?: string | undefined;
            status?: string | undefined;
            projectId?: string | undefined;
            transactionId?: string | undefined;
            senderId?: string | undefined;
            userId?: string | undefined;
        }>;
        path: "/tickets";
        responses: {
            200: z.ZodObject<{
                data: z.ZodArray<z.ZodObject<{
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
                    receiver: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                        firstName: z.ZodString;
                        lastName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        firstName: string;
                        lastName: string;
                    }, {
                        firstName: string;
                        lastName: string;
                    }>>>;
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
                        projectId: z.ZodString;
                        projectName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        projectId: string;
                        projectName: string;
                    }, {
                        projectId: string;
                        projectName: string;
                    }>>;
                    transactionId: z.ZodNullable<z.ZodString>;
                    transaction: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                        transactionId: z.ZodString;
                        projectId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        projectId: string;
                        transactionId: string;
                    }, {
                        projectId: string;
                        transactionId: string;
                    }>>>;
                    remarks: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }, {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }>, "many">;
                numOfTickets: z.ZodNumber;
                totalPages: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                data: {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }[];
                totalPages: number;
                numOfTickets: number;
            }, {
                data: {
                    id: string;
                    priority: string;
                    section: string;
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectId: string;
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
                    receiver?: {
                        firstName: string;
                        lastName: string;
                    } | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    transaction?: {
                        projectId: string;
                        transactionId: string;
                    } | null | undefined;
                }[];
                totalPages: number;
                numOfTickets: number;
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
    getTicketsById: {
        method: "GET";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id";
        responses: {
            200: z.ZodObject<{
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
                attachments: z.ZodArray<z.ZodString, "many">;
                transactionId: z.ZodNullable<z.ZodString>;
                transaction: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    transactionId: z.ZodString;
                    documentSubType: z.ZodString;
                    status: z.ZodString;
                    priority: z.ZodString;
                    dueDate: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    priority: string;
                    status: string;
                    transactionId: string;
                    dueDate: string;
                    documentSubType: string;
                }, {
                    priority: string;
                    status: string;
                    transactionId: string;
                    dueDate: string;
                    documentSubType: string;
                }>>>;
                ticketLogs: z.ZodArray<z.ZodObject<{
                    ticketId: z.ZodString;
                    status: z.ZodString;
                    sender: z.ZodString;
                    receiver: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    senderId: z.ZodString;
                    receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    priority: z.ZodString;
                    dateForwarded: z.ZodString;
                    dateReceived: z.ZodNullable<z.ZodString>;
                    remarks: z.ZodNullable<z.ZodString>;
                    attachments: z.ZodArray<z.ZodString, "many">;
                    createdAt: z.ZodOptional<z.ZodString>;
                    updatedAt: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    priority: string;
                    status: string;
                    remarks: string | null;
                    attachments: string[];
                    dateForwarded: string;
                    dateReceived: string | null;
                    ticketId: string;
                    sender: string;
                    senderId: string;
                    receiver?: string | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    receiverId?: string | null | undefined;
                }, {
                    priority: string;
                    status: string;
                    remarks: string | null;
                    attachments: string[];
                    dateForwarded: string;
                    dateReceived: string | null;
                    ticketId: string;
                    sender: string;
                    senderId: string;
                    receiver?: string | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    receiverId?: string | null | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                priority: string;
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
                    status: string;
                    remarks: string | null;
                    attachments: string[];
                    dateForwarded: string;
                    dateReceived: string | null;
                    ticketId: string;
                    sender: string;
                    senderId: string;
                    receiver?: string | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    receiverId?: string | null | undefined;
                }[];
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
                transaction?: {
                    priority: string;
                    status: string;
                    transactionId: string;
                    dueDate: string;
                    documentSubType: string;
                } | null | undefined;
            }, {
                priority: string;
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
                    status: string;
                    remarks: string | null;
                    attachments: string[];
                    dateForwarded: string;
                    dateReceived: string | null;
                    ticketId: string;
                    sender: string;
                    senderId: string;
                    receiver?: string | null | undefined;
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                    receiverId?: string | null | undefined;
                }[];
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
                transaction?: {
                    priority: string;
                    status: string;
                    transactionId: string;
                    dueDate: string;
                    documentSubType: string;
                } | null | undefined;
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
    createTickets: {
        body: z.ZodObject<{
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
            senderId: z.ZodString;
            receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            requesteeId: z.ZodString;
            remarks: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            transactionId: z.ZodNullable<z.ZodString>;
            attachments: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            id?: string | undefined;
            receiverId?: string | null | undefined;
        }, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            id?: string | undefined;
            receiverId?: string | null | undefined;
        }>;
        method: "POST";
        path: "/tickets";
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
    editTickets: {
        body: z.ZodObject<z.objectUtil.extendShape<{
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
            senderId: z.ZodString;
            receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            requesteeId: z.ZodString;
            remarks: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            transactionId: z.ZodNullable<z.ZodString>;
            attachments: z.ZodArray<z.ZodString, "many">;
        }, {
            id: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            receiverId?: string | null | undefined;
        }, {
            id: string;
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            receiverId?: string | null | undefined;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id";
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
    receiveTickets: {
        body: z.ZodObject<{
            dateReceived: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dateReceived: string;
        }, {
            dateReceived: string;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id/receive";
        responses: {
            201: z.ZodObject<{
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
    forwardTickets: {
        body: z.ZodObject<{
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
            senderId: z.ZodString;
            receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            requesteeId: z.ZodString;
            remarks: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            transactionId: z.ZodNullable<z.ZodString>;
            attachments: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            id?: string | undefined;
            receiverId?: string | null | undefined;
        }, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            attachments: string[];
            subject: string;
            dueDate: string;
            dateForwarded: string;
            dateReceived: string | null;
            ticketId: string;
            division: string;
            requestDetails: string;
            senderId: string;
            requestType: string;
            requesteeId: string;
            id?: string | undefined;
            receiverId?: string | null | undefined;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id/forward";
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
    resolveTickets: {
        body: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id/resolve";
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
    reopenTickets: {
        body: z.ZodObject<{
            requestee: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            requestee: string;
        }, {
            requestee: string;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/tickets/:id/reopen";
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
};
