import dayjs from "dayjs";
import React from "react";
import { IOrganizer } from "../../../types/organizer";

type OrganizerTableProps = {
  organizers: IOrganizer[];
};

export const OrganizerTable: React.FC<OrganizerTableProps> = React.memo(
  ({ organizers }) => {
    
    return (
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Organization Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Organizer Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Mobile
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
              >
                Created At
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
              >
                Total Events
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {organizers.map((organizer: IOrganizer) => (
              <tr key={organizer._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {organizer.organizationName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  {organizer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {organizer.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {organizer.mobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {dayjs(organizer.createdAt).format("D-MM-YYYY")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-800">
                  {organizer.totalEventsCreated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

export default React.memo(OrganizerTable);
