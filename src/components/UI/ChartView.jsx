import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);
const ChartView = () => {
  const data = {
    labels: ["Applied", "Canceled"],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#4640de", "#ccc"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="my-2 w-60 h-60 p-2 text-center text-lg py-3 px-5 border">
      <h1>Jobs Data Chart</h1>
      <Doughnut data={data} updateMode="resize" width={30} height={30} />
    </div>
  );
};

export default ChartView;
