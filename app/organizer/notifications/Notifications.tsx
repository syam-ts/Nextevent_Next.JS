"use client";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Bell, Check, Clock, Eye } from "lucide-react";
import { IOrgNotification } from "../../../types/slice-states/orgNotificationState";
import { markAsReadNotification } from "../../../redux/slices/organizerNotificationSlice";
import { useMarkAsReadNotificationOrg } from "../../../hooks/organizer/useMarkAsReadNotificationOrg";

const Notifications = () => {
  
  const { mutate } = useMarkAsReadNotificationOrg();

  const notifications = useSelector(
    (state: IOrgNotification) => state.orgnotification.notifications
  );
  const dispatch = useDispatch();

  const markAsRead = (notificationId: string) => {
    mutate(
      {
        notificationId: notificationId,
      },
      {
        onSuccess: (data) => {
          dispatch(markAsReadNotification(data.notification));
        },
        onError(error: unknown) {
          const err = error as { response: { data: { message: string } } };
          console.log("ERROR: ", err.response.data.message);
        },
      }
    );
  };

  return (
    <div className="space-y-2 py-4">
      <div className="text-center mb-6">
        <h1 className="font-extrabold text-4xl text-indigo-700 py-12">
          Notifications
        </h1>
      </div>

      {notifications.map((notification) => (
        <div className="max-w-4xl mx-auto px-4 py-2">
          <article
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border ${notification.markAsRead
                ? "border-gray-100"
                : "border-indigo-200 bg-indigo-50/30"
              } hover:scale-[1.01]`}
          >
            <div className="flex items-center p-4">
              <div className="flex-shrink-0 mr-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${notification.markAsRead ? "bg-gray-100" : "bg-indigo-100"
                    }`}
                >
                  <Bell
                    className={`w-5 h-5 ${notification.markAsRead
                        ? "text-gray-500"
                        : "text-indigo-600"
                      }`}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 mr-4">
                <p
                  className={`text-sm leading-relaxed ${notification.markAsRead
                      ? "text-gray-600"
                      : "text-gray-800 font-medium"
                    } line-clamp-2`}
                >
                  {notification.message}
                </p>

                <div className="flex items-center mt-2">
                  <Clock className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">
                    {dayjs(notification.createdAt).format("D MMMM YYYY")}
                  </span>

                  {!notification.markAsRead ? (
                    <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      New
                    </span>
                  ) : (
                    <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-indigo-800">
                      old
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {!notification.markAsRead ? (
                  <button
                    onClick={() => markAsRead(notification._id)}
                    className="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                    title="Mark as read"
                  >
                    <Check className="w-3 h-3 mr-1" />
                    Read
                  </button>
                ) : (
                  <div
                    className="inline-flex items-center px-3 py-2 text-xs font-medium text-green-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                    title="Mark as read"
                  >
                    <Check className="w-3 h-3 mr-1" />
                    Read
                  </div>
                )}

                <Link
                  href={`/organizer/event/${notification.entityId}`}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-semibold rounded-lg hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-sm"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
