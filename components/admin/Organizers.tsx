"use client";
import React from "react";
import dayjs from "dayjs";
import { IOrganizer } from "../../types/organizer";
import { useGetAllOrganizers } from "../../hooks/admin/useGetAllOrganizers";

const Organizers = () => {
  const { data } = useGetAllOrganizers();

  return (
    <div className="w-[60rem] mt-44 mx-52">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200">
            <div className="py-3 px-4">
         <div className="flex justify-between">
             {/* Search */}
            <section>
                <div className="relative max-w-xs border rounded-xl   ">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  name="hs-table-search"
                  id="hs-table-search"
                  className="py-1.5 
            sm:py-2 px-3 ps-9 block w-full outline-none text-black border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Search for orgnaizer"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="size-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </section>

                {/* filter 1 */}
              <section>
                    <select className="bg-gray-600 rounded-2xl px-2 py-1">
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
              </section>
                {/* filter 2 */}
              <section>
                    <select className="bg-gray-600 rounded-2xl px-2 py-1">
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
              </section>
         </div>
            </div>
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
                  {data?.organizers.map((Organizer: IOrganizer) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {Organizer.organizationName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {Organizer.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {Organizer.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {Organizer.mobile}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dayjs(Organizer.createdAt).format("D-MM-YYYY")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-800">
                        {Organizer.totalEventsCreated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <section>
            <div className="flex  justify-center py-4">
            
              <button className="w-8 rounded-full bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                1
              </button>
              <button className="w-8 rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                2
              </button>
              <button className="w-8 rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                3
              </button>
       
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
