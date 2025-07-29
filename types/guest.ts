export interface IGuest {
    _id: string;
    name: string;
    profilePicture: string;
    email: string;
    password: string;
    mobile: number;
    age: number;
    numberOfEventsAttended: number;
    wallet: any;
    // events: IEvent,
    createdAt: Date;
}
