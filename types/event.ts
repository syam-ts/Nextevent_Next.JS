export interface IEvent {
    _id?: string;
    organizerDetails?: {
        _id: string
    };
    eventName: string;
    eventImage: string;
    location: string;
    date: string;
    startTime: string;
    endTime: string;
    ticketPrice: number;
    totalSeats: number;
    isPaid: boolean;
    details: string;
}
