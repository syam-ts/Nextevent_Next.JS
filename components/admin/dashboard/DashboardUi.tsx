import React from "react";
import PolarChartComponent from "./PolarChartComponent";
import PieChartComponent from "./PieChartComponent";
import LineChartComponent from "./LineChartComponent";

type DashboardUiProps = {
  totalEvents: number;
  totalOrganizers: number;
  totalGuests: number;
  totalTickets: number;
  totalRefund: number;
  totalTransfer: number;
  totalProfit: number;
};

const DashboardUi: React.FC<DashboardUiProps> = ({
  totalEvents,
  totalOrganizers,
  totalGuests,
  totalTickets,
  totalRefund,
  totalTransfer,
  totalProfit,
}) => {
  
  return (
    <div>
      <div className="flex gap-12">
        {/* Polar chart  */}
        <PolarChartComponent
          totalTickets={totalTickets}
          totalRefund={totalRefund}
          totalTransfer={totalTransfer}
          totalProfit={totalProfit}
        />

        {/* Pie chart  */}
        <PieChartComponent
          totalEvents={totalEvents}
          totalOrganizers={totalOrganizers}
          totalGuests={totalGuests}
        />
      </div>

      {/* Line chart */}
      {/* <LineChartComponent /> */}
    </div>
  );
};

export default DashboardUi;
