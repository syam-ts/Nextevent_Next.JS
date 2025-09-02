"use client";
import React from "react";
import DashboardUi from "./DashboardUi";
import { useGetDashboardStatsForEntities } from "../../../hooks/admin/dashboard/useGetDashboardStatsForEntities";
import { useGetDashboardStatsForGrossData } from "../../../hooks/admin/dashboard/useGetDashboardStatsForGrossData";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

const DashboardContainer = () => {

  const { data: entityData } = useGetDashboardStatsForEntities();
  const { data: grossData } = useGetDashboardStatsForGrossData();
  
  if (!entityData) return;
  if (!grossData) return;

  return (
    <div>
      <DashboardUi
        totalEvents={entityData?.totalEvents}
        totalOrganizers={entityData?.totalOrganizers}
        totalGuests={entityData?.totalGuests}
        totalTickets={grossData?.totalTickets}
        totalRefund={grossData?.totalRefund}
        totalTransfer={grossData?.totalTransfer}
        totalProfit={grossData?.totalProfit}
      />
    </div>
  );
};

export default DashboardContainer;
