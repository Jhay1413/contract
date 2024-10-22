import { z } from "zod";
import { companyFormData } from "./schema/company-schema";
import { filesQuerySchema, transactionLogsData, transactionQueryData, transactionTable } from "./schema/transactions/query-schema";
import { companyQuerySchema } from "./schema/companies/query-schema";
import { filesMutationSchema, transactionMutationSchema } from "./schema/transactions/mutation-schema";
import { userInfoQuerySchema } from "./schema/users/query-schema";
import { dashboardData } from "./schema/dashboard/dashboard-data";
import { ticketingTableSchema, ticketFullDetailsSchema } from "./schema/ticketing/query-schema";
import { ticketingMutationSchema, ticketEditSchema } from "./schema/ticketing/mutation-schema";
export declare const ticketContract: {
    getTickets: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
            page: z.ZodString;
            pageSize: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            page: string;
            query: string;
            pageSize: string;
        }, {
            page: string;
            query: string;
            pageSize: string;
        }>;
        path: "/tickets";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                ticketId: z.ZodString;
                subject: z.ZodString;
                status: z.ZodString;
                priority: z.ZodString;
                dueDate: z.ZodString;
                createdAt: z.ZodOptional<z.ZodString>;
                updatedAt: z.ZodOptional<z.ZodString>;
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
                status: string;
                remarks: string | null;
                transactionId: string | null;
                subject: string;
                dueDate: string;
                project: {
                    projectName: string;
                } | null;
                ticketId: string;
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
                status: string;
                remarks: string | null;
                transactionId: string | null;
                subject: string;
                dueDate: string;
                project: {
                    projectName: string;
                } | null;
                ticketId: string;
                sender: {
                    firstName: string;
                    lastName: string;
                };
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
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
            senderId: z.ZodString;
            receiverId: z.ZodString;
            requesteeId: z.ZodString;
            remarks: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            transactionId: z.ZodNullable<z.ZodString>;
            attachments: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            subject: string;
            dueDate: string;
            attachments: string | null;
            receiverId: string;
            ticketId: string;
            division: string;
            requestType: string;
            requestDetails: string;
            senderId: string;
            requesteeId: string;
            id?: string | undefined;
        }, {
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            subject: string;
            dueDate: string;
            attachments: string | null;
            receiverId: string;
            ticketId: string;
            division: string;
            requestType: string;
            requestDetails: string;
            senderId: string;
            requesteeId: string;
            id?: string | undefined;
        }>;
        method: "POST";
        path: "/tickets/create";
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
            senderId: z.ZodString;
            receiverId: z.ZodString;
            requesteeId: z.ZodString;
            remarks: z.ZodNullable<z.ZodString>;
            projectId: z.ZodNullable<z.ZodString>;
            transactionId: z.ZodNullable<z.ZodString>;
            attachments: z.ZodNullable<z.ZodString>;
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
            subject: string;
            dueDate: string;
            attachments: string | null;
            receiverId: string;
            ticketId: string;
            division: string;
            requestType: string;
            requestDetails: string;
            senderId: string;
            requesteeId: string;
        }, {
            id: string;
            priority: string;
            section: string;
            status: string;
            projectId: string | null;
            remarks: string | null;
            transactionId: string | null;
            subject: string;
            dueDate: string;
            attachments: string | null;
            receiverId: string;
            ticketId: string;
            division: string;
            requestType: string;
            requestDetails: string;
            senderId: string;
            requesteeId: string;
        }>;
        method: "PUT";
        path: "/tickets/edit/:ticketId";
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
export declare const dashboardContract: {
    getDashboardData: {
        method: "GET";
        path: "/dashboard/data";
        responses: {
            200: z.ZodObject<{
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
export declare const awsContract: {
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
export declare const userAccountsContract: {
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
export declare const companyContract: {
    insertCompany: {
        body: z.ZodObject<{
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
        method: "POST";
        path: "/companies";
        responses: {
            201: z.ZodObject<{
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
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    fetchCompanies: {
        method: "GET";
        path: "/companies";
        responses: {
            200: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
            }>, "many">>;
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    fetchCompany: {
        method: "GET";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/company/:id";
        responses: {
            200: z.ZodNullable<z.ZodObject<{
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
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    deleteCompanyById: {
        body: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        method: "DELETE";
        path: "/company/";
        responses: {
            200: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
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
    editCompanyById: {
        body: z.ZodObject<{
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
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/company/:id";
        responses: {
            201: z.ZodObject<{
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
export declare const transactionContract: {
    archivedTransation: {
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
        path: "/transactions/archived/:id";
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
    fetchTransactionsV2: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
            status: z.ZodOptional<z.ZodString>;
            page: z.ZodString;
            pageSize: z.ZodString;
            userId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: string;
            query: string;
            pageSize: string;
            status?: string | undefined;
            userId?: string | undefined;
        }, {
            page: string;
            query: string;
            pageSize: string;
            status?: string | undefined;
            userId?: string | undefined;
        }>;
        path: "/transactions/list";
        responses: {
            201: z.ZodObject<{
                data: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                numOfTransactions: z.ZodNumber;
                totalPages: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                data: {
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
                }[];
                numOfTransactions: number;
                totalPages: number;
            }, {
                data: {
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
                }[];
                numOfTransactions: number;
                totalPages: number;
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
    fetchTransactions: {
        method: "GET";
        query: z.ZodObject<{
            query: z.ZodString;
            status: z.ZodOptional<z.ZodString>;
            page: z.ZodString;
            pageSize: z.ZodString;
            userId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: string;
            query: string;
            pageSize: string;
            status?: string | undefined;
            userId?: string | undefined;
        }, {
            page: string;
            query: string;
            pageSize: string;
            status?: string | undefined;
            userId?: string | undefined;
        }>;
        path: "/transactions/search";
        responses: {
            201: z.ZodObject<{
                data: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                numOfTransactions: z.ZodNumber;
                totalPages: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                data: {
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
                }[];
                numOfTransactions: number;
                totalPages: number;
            }, {
                data: {
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
                }[];
                numOfTransactions: number;
                totalPages: number;
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
    fetchTransactionById: {
        method: "GET";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/transactions/:id";
        responses: {
            200: z.ZodNullable<z.ZodObject<{
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
            }>>;
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    updateTransaction: {
        body: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
            documentType: z.ZodString;
            documentSubType: z.ZodString;
            subject: z.ZodString;
            dueDate: z.ZodString;
            team: z.ZodString;
            category: z.ZodString;
            status: z.ZodString;
            priority: z.ZodString;
            companyId: z.ZodString;
            projectId: z.ZodString;
            receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            remarks: z.ZodString;
            receivedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            forwarderId: z.ZodString;
            dateForwarded: z.ZodString;
            dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            originDepartment: z.ZodString;
            targetDepartment: z.ZodString;
            attachments: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                remarks: z.ZodNullable<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
                fileName: z.ZodString;
                fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<FileList, z.ZodTypeDef, FileList>, FileList, FileList>, FileList, FileList>>;
            }, "strip", z.ZodTypeAny, {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }, {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            priority: string;
            status: string;
            projectId: string;
            companyId: string;
            remarks: string;
            documentType: string;
            subject: string;
            dueDate: string;
            documentSubType: string;
            team: string;
            dateForwarded: string;
            originDepartment: string;
            targetDepartment: string;
            attachments: {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }[];
            category: string;
            forwarderId: string;
            id?: string | undefined;
            transactionId?: string | undefined;
            dateReceived?: string | null | undefined;
            receiverId?: string | null | undefined;
            receivedById?: string | null | undefined;
        }, {
            priority: string;
            status: string;
            projectId: string;
            companyId: string;
            remarks: string;
            documentType: string;
            subject: string;
            dueDate: string;
            documentSubType: string;
            team: string;
            dateForwarded: string;
            originDepartment: string;
            targetDepartment: string;
            attachments: {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }[];
            category: string;
            forwarderId: string;
            id?: string | undefined;
            transactionId?: string | undefined;
            dateReceived?: string | null | undefined;
            receiverId?: string | null | undefined;
            receivedById?: string | null | undefined;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/transactions/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                success: string;
            }, {
                success: string;
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
    insertTransacitons: {
        body: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
            documentType: z.ZodString;
            documentSubType: z.ZodString;
            subject: z.ZodString;
            dueDate: z.ZodString;
            team: z.ZodString;
            category: z.ZodString;
            status: z.ZodString;
            priority: z.ZodString;
            companyId: z.ZodString;
            projectId: z.ZodString;
            receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            remarks: z.ZodString;
            receivedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            forwarderId: z.ZodString;
            dateForwarded: z.ZodString;
            dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            originDepartment: z.ZodString;
            targetDepartment: z.ZodString;
            attachments: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                remarks: z.ZodNullable<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodString>;
                fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
                fileName: z.ZodString;
                fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                file: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<FileList, z.ZodTypeDef, FileList>, FileList, FileList>, FileList, FileList>>;
            }, "strip", z.ZodTypeAny, {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }, {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            priority: string;
            status: string;
            projectId: string;
            companyId: string;
            remarks: string;
            documentType: string;
            subject: string;
            dueDate: string;
            documentSubType: string;
            team: string;
            dateForwarded: string;
            originDepartment: string;
            targetDepartment: string;
            attachments: {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }[];
            category: string;
            forwarderId: string;
            id?: string | undefined;
            transactionId?: string | undefined;
            dateReceived?: string | null | undefined;
            receiverId?: string | null | undefined;
            receivedById?: string | null | undefined;
        }, {
            priority: string;
            status: string;
            projectId: string;
            companyId: string;
            remarks: string;
            documentType: string;
            subject: string;
            dueDate: string;
            documentSubType: string;
            team: string;
            dateForwarded: string;
            originDepartment: string;
            targetDepartment: string;
            attachments: {
                remarks: string | null;
                fileName: string;
                id?: string | undefined;
                file?: FileList | undefined;
                createdAt?: string | undefined;
                fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                fileStatus?: string | null | undefined;
                fileUrl?: string | null | undefined;
                fileOriginalName?: string | null | undefined;
            }[];
            category: string;
            forwarderId: string;
            id?: string | undefined;
            transactionId?: string | undefined;
            dateReceived?: string | null | undefined;
            receiverId?: string | null | undefined;
            receivedById?: string | null | undefined;
        }>;
        method: "POST";
        path: "/transactions";
        responses: {
            201: z.ZodArray<z.ZodObject<{
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
    receivedTransaction: {
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
        path: "/transactions/received/:id";
        responses: {
            201: z.ZodObject<{
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
            500: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
    };
    getTransactionByParams: {
        method: "GET";
        query: z.ZodObject<{
            status: z.ZodString;
            accountId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: string;
            accountId: string;
        }, {
            status: string;
            accountId: string;
        }>;
        path: "/transactions/";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
    addCompleteStaffWork: {
        body: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            date: z.ZodString;
            remarks: z.ZodString;
            createdAt: z.ZodOptional<z.ZodString>;
            updatedAt: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
            attachmentFile: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<File, z.ZodTypeDef, File>, File, File>, File, File>>;
            attachmentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            date: string;
            remarks: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            updatedAt?: string | undefined;
            transactionId?: string | undefined;
            attachmentUrl?: string | null | undefined;
            attachmentFile?: File | undefined;
        }, {
            date: string;
            remarks: string;
            id?: string | undefined;
            createdAt?: string | undefined;
            updatedAt?: string | undefined;
            transactionId?: string | undefined;
            attachmentUrl?: string | null | undefined;
            attachmentFile?: File | undefined;
        }>;
        method: "PUT";
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "/transactions/addCsw/:id";
        responses: {
            201: z.ZodObject<{
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
declare const contracts: {
    company: {
        insertCompany: {
            body: z.ZodObject<{
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
            method: "POST";
            path: "/companies";
            responses: {
                201: z.ZodObject<{
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
                500: z.ZodObject<{
                    error: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
        };
        fetchCompanies: {
            method: "GET";
            path: "/companies";
            responses: {
                200: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
                }>, "many">>;
                500: z.ZodObject<{
                    error: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
        };
        fetchCompany: {
            method: "GET";
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/company/:id";
            responses: {
                200: z.ZodNullable<z.ZodObject<{
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
                500: z.ZodObject<{
                    error: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
        };
        deleteCompanyById: {
            body: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "DELETE";
            path: "/company/";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
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
        editCompanyById: {
            body: z.ZodObject<{
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
            method: "PUT";
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/company/:id";
            responses: {
                201: z.ZodObject<{
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
    transaction: {
        archivedTransation: {
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
            path: "/transactions/archived/:id";
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
        fetchTransactionsV2: {
            method: "GET";
            query: z.ZodObject<{
                query: z.ZodString;
                status: z.ZodOptional<z.ZodString>;
                page: z.ZodString;
                pageSize: z.ZodString;
                userId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page: string;
                query: string;
                pageSize: string;
                status?: string | undefined;
                userId?: string | undefined;
            }, {
                page: string;
                query: string;
                pageSize: string;
                status?: string | undefined;
                userId?: string | undefined;
            }>;
            path: "/transactions/list";
            responses: {
                201: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
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
                    }>, "many">;
                    numOfTransactions: z.ZodNumber;
                    totalPages: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    data: {
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
                    }[];
                    numOfTransactions: number;
                    totalPages: number;
                }, {
                    data: {
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
                    }[];
                    numOfTransactions: number;
                    totalPages: number;
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
        fetchTransactions: {
            method: "GET";
            query: z.ZodObject<{
                query: z.ZodString;
                status: z.ZodOptional<z.ZodString>;
                page: z.ZodString;
                pageSize: z.ZodString;
                userId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                page: string;
                query: string;
                pageSize: string;
                status?: string | undefined;
                userId?: string | undefined;
            }, {
                page: string;
                query: string;
                pageSize: string;
                status?: string | undefined;
                userId?: string | undefined;
            }>;
            path: "/transactions/search";
            responses: {
                201: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
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
                    }>, "many">;
                    numOfTransactions: z.ZodNumber;
                    totalPages: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    data: {
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
                    }[];
                    numOfTransactions: number;
                    totalPages: number;
                }, {
                    data: {
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
                    }[];
                    numOfTransactions: number;
                    totalPages: number;
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
        fetchTransactionById: {
            method: "GET";
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/transactions/:id";
            responses: {
                200: z.ZodNullable<z.ZodObject<{
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
                }>>;
                500: z.ZodObject<{
                    error: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
        };
        updateTransaction: {
            body: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                transactionId: z.ZodOptional<z.ZodString>;
                documentType: z.ZodString;
                documentSubType: z.ZodString;
                subject: z.ZodString;
                dueDate: z.ZodString;
                team: z.ZodString;
                category: z.ZodString;
                status: z.ZodString;
                priority: z.ZodString;
                companyId: z.ZodString;
                projectId: z.ZodString;
                receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                remarks: z.ZodString;
                receivedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                forwarderId: z.ZodString;
                dateForwarded: z.ZodString;
                dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                originDepartment: z.ZodString;
                targetDepartment: z.ZodString;
                attachments: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    remarks: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodString>;
                    fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
                    fileName: z.ZodString;
                    fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<FileList, z.ZodTypeDef, FileList>, FileList, FileList>, FileList, FileList>>;
                }, "strip", z.ZodTypeAny, {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }, {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                priority: string;
                status: string;
                projectId: string;
                companyId: string;
                remarks: string;
                documentType: string;
                subject: string;
                dueDate: string;
                documentSubType: string;
                team: string;
                dateForwarded: string;
                originDepartment: string;
                targetDepartment: string;
                attachments: {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }[];
                category: string;
                forwarderId: string;
                id?: string | undefined;
                transactionId?: string | undefined;
                dateReceived?: string | null | undefined;
                receiverId?: string | null | undefined;
                receivedById?: string | null | undefined;
            }, {
                priority: string;
                status: string;
                projectId: string;
                companyId: string;
                remarks: string;
                documentType: string;
                subject: string;
                dueDate: string;
                documentSubType: string;
                team: string;
                dateForwarded: string;
                originDepartment: string;
                targetDepartment: string;
                attachments: {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }[];
                category: string;
                forwarderId: string;
                id?: string | undefined;
                transactionId?: string | undefined;
                dateReceived?: string | null | undefined;
                receiverId?: string | null | undefined;
                receivedById?: string | null | undefined;
            }>;
            method: "PUT";
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/transactions/:id";
            responses: {
                200: z.ZodObject<{
                    success: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    success: string;
                }, {
                    success: string;
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
        insertTransacitons: {
            body: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                transactionId: z.ZodOptional<z.ZodString>;
                documentType: z.ZodString;
                documentSubType: z.ZodString;
                subject: z.ZodString;
                dueDate: z.ZodString;
                team: z.ZodString;
                category: z.ZodString;
                status: z.ZodString;
                priority: z.ZodString;
                companyId: z.ZodString;
                projectId: z.ZodString;
                receiverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                remarks: z.ZodString;
                receivedById: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                forwarderId: z.ZodString;
                dateForwarded: z.ZodString;
                dateReceived: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                originDepartment: z.ZodString;
                targetDepartment: z.ZodString;
                attachments: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    remarks: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodString>;
                    fileType: z.ZodOptional<z.ZodEnum<["INITIAL_DOC", "FOLLOWED_UP"]>>;
                    fileName: z.ZodString;
                    fileStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    fileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    fileOriginalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    file: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<FileList, z.ZodTypeDef, FileList>, FileList, FileList>, FileList, FileList>>;
                }, "strip", z.ZodTypeAny, {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }, {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                priority: string;
                status: string;
                projectId: string;
                companyId: string;
                remarks: string;
                documentType: string;
                subject: string;
                dueDate: string;
                documentSubType: string;
                team: string;
                dateForwarded: string;
                originDepartment: string;
                targetDepartment: string;
                attachments: {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }[];
                category: string;
                forwarderId: string;
                id?: string | undefined;
                transactionId?: string | undefined;
                dateReceived?: string | null | undefined;
                receiverId?: string | null | undefined;
                receivedById?: string | null | undefined;
            }, {
                priority: string;
                status: string;
                projectId: string;
                companyId: string;
                remarks: string;
                documentType: string;
                subject: string;
                dueDate: string;
                documentSubType: string;
                team: string;
                dateForwarded: string;
                originDepartment: string;
                targetDepartment: string;
                attachments: {
                    remarks: string | null;
                    fileName: string;
                    id?: string | undefined;
                    file?: FileList | undefined;
                    createdAt?: string | undefined;
                    fileType?: "INITIAL_DOC" | "FOLLOWED_UP" | undefined;
                    fileStatus?: string | null | undefined;
                    fileUrl?: string | null | undefined;
                    fileOriginalName?: string | null | undefined;
                }[];
                category: string;
                forwarderId: string;
                id?: string | undefined;
                transactionId?: string | undefined;
                dateReceived?: string | null | undefined;
                receiverId?: string | null | undefined;
                receivedById?: string | null | undefined;
            }>;
            method: "POST";
            path: "/transactions";
            responses: {
                201: z.ZodArray<z.ZodObject<{
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
        receivedTransaction: {
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
            path: "/transactions/received/:id";
            responses: {
                201: z.ZodObject<{
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
                500: z.ZodObject<{
                    error: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
        };
        getTransactionByParams: {
            method: "GET";
            query: z.ZodObject<{
                status: z.ZodString;
                accountId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                status: string;
                accountId: string;
            }, {
                status: string;
                accountId: string;
            }>;
            path: "/transactions/";
            responses: {
                200: z.ZodArray<z.ZodObject<{
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
        addCompleteStaffWork: {
            body: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                date: z.ZodString;
                remarks: z.ZodString;
                createdAt: z.ZodOptional<z.ZodString>;
                updatedAt: z.ZodOptional<z.ZodString>;
                transactionId: z.ZodOptional<z.ZodString>;
                attachmentFile: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodType<File, z.ZodTypeDef, File>, File, File>, File, File>>;
                attachmentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                date: string;
                remarks: string;
                id?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                transactionId?: string | undefined;
                attachmentUrl?: string | null | undefined;
                attachmentFile?: File | undefined;
            }, {
                date: string;
                remarks: string;
                id?: string | undefined;
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
                transactionId?: string | undefined;
                attachmentUrl?: string | null | undefined;
                attachmentFile?: File | undefined;
            }>;
            method: "PUT";
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/transactions/addCsw/:id";
            responses: {
                201: z.ZodObject<{
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
    userAccounts: {
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
    awsContract: {
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
    dashboardContract: {
        getDashboardData: {
            method: "GET";
            path: "/dashboard/data";
            responses: {
                200: z.ZodObject<{
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
    ticketing: {
        getTickets: {
            method: "GET";
            query: z.ZodObject<{
                query: z.ZodString;
                page: z.ZodString;
                pageSize: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                page: string;
                query: string;
                pageSize: string;
            }, {
                page: string;
                query: string;
                pageSize: string;
            }>;
            path: "/tickets";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    ticketId: z.ZodString;
                    subject: z.ZodString;
                    status: z.ZodString;
                    priority: z.ZodString;
                    dueDate: z.ZodString;
                    createdAt: z.ZodOptional<z.ZodString>;
                    updatedAt: z.ZodOptional<z.ZodString>;
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
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectName: string;
                    } | null;
                    ticketId: string;
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
                    status: string;
                    remarks: string | null;
                    transactionId: string | null;
                    subject: string;
                    dueDate: string;
                    project: {
                        projectName: string;
                    } | null;
                    ticketId: string;
                    sender: {
                        firstName: string;
                        lastName: string;
                    };
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
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
                senderId: z.ZodString;
                receiverId: z.ZodString;
                requesteeId: z.ZodString;
                remarks: z.ZodNullable<z.ZodString>;
                projectId: z.ZodNullable<z.ZodString>;
                transactionId: z.ZodNullable<z.ZodString>;
                attachments: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                priority: string;
                section: string;
                status: string;
                projectId: string | null;
                remarks: string | null;
                transactionId: string | null;
                subject: string;
                dueDate: string;
                attachments: string | null;
                receiverId: string;
                ticketId: string;
                division: string;
                requestType: string;
                requestDetails: string;
                senderId: string;
                requesteeId: string;
                id?: string | undefined;
            }, {
                priority: string;
                section: string;
                status: string;
                projectId: string | null;
                remarks: string | null;
                transactionId: string | null;
                subject: string;
                dueDate: string;
                attachments: string | null;
                receiverId: string;
                ticketId: string;
                division: string;
                requestType: string;
                requestDetails: string;
                senderId: string;
                requesteeId: string;
                id?: string | undefined;
            }>;
            method: "POST";
            path: "/tickets/create";
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
                senderId: z.ZodString;
                receiverId: z.ZodString;
                requesteeId: z.ZodString;
                remarks: z.ZodNullable<z.ZodString>;
                projectId: z.ZodNullable<z.ZodString>;
                transactionId: z.ZodNullable<z.ZodString>;
                attachments: z.ZodNullable<z.ZodString>;
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
                subject: string;
                dueDate: string;
                attachments: string | null;
                receiverId: string;
                ticketId: string;
                division: string;
                requestType: string;
                requestDetails: string;
                senderId: string;
                requesteeId: string;
            }, {
                id: string;
                priority: string;
                section: string;
                status: string;
                projectId: string | null;
                remarks: string | null;
                transactionId: string | null;
                subject: string;
                dueDate: string;
                attachments: string | null;
                receiverId: string;
                ticketId: string;
                division: string;
                requestType: string;
                requestDetails: string;
                senderId: string;
                requesteeId: string;
            }>;
            method: "PUT";
            path: "/tickets/edit/:ticketId";
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
};
export { companyFormData, transactionQueryData, companyQuerySchema, transactionMutationSchema, transactionLogsData, contracts, filesQuerySchema, filesMutationSchema, userInfoQuerySchema, transactionTable, dashboardData, ticketingMutationSchema, ticketingTableSchema, ticketEditSchema, ticketFullDetailsSchema, };
