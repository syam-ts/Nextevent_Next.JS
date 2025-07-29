export interface IOrganizer {
    _id: string;
    name: string;
    email: string;
    mobile: number;
    password: string;
    role: string;
    organizationName: string;
    createdEvents: [];
    createdAt: string;
}
