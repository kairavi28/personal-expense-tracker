import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectExpenses } from "../slices/expenseSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsPie = () => {
  const expenses = useSelector(selectExpenses);

  const expenseData = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default StatsPie;
