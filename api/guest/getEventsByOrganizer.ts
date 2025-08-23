import { axiosInstanseGuest } from "../../lib/axios/guest/axiosInstance";
import { IEvent } from "../../types/event";

type GetEventsByOrganizerResponse = {
  events: IEvent[];
};

export const GetEventsByOrganizer = async (
  organizerId: string,
  filter: string
): Promise<GetEventsByOrganizerResponse> => {
  const { data } = await axiosInstanseGuest(`/guest/organizer-events/${organizerId}?filter=${filter}`);
  return data;
};
