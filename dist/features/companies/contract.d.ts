import { z } from "zod";
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
    fetchCompanyProjectsBySearch: {
        method: "GET";
        query: z.ZodObject<{
            projectName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            projectName: string;
        }, {
            projectName: string;
        }>;
        path: "/company/projects";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                projectName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                projectName: string;
            }, {
                id: string;
                projectName: string;
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
