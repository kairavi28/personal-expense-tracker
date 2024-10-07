import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectExpenses } from "../slices/expenseSlice";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StatsLine = () => {
  const expenses = useSelector(selectExpenses);
  const expenseData = expenses.map(expense => expense.amount);
  const expenseLabels = expenses.map(expense => expense.date); 

  const data = {
    labels: expenseLabels, 
    datasets: [
      {
        label: "Expenses Over Time",
        data: expenseData,
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, 
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Expense Amount'
        }
      }
    }
  };

  return (
    <div style={{ width: "400px", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default StatsLine;
