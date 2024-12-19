import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ clickable = false, onClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));

    checkDarkMode(); // Check on initial render

    // Add event listener to watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps of Ankit",
        data: [3000, 5000, 4500, 6000, 8000, 9000, 5000],
        borderColor: "rgb(75,192,192)",
      },
      {
        label: "Steps of Samyak",
        data: [5000, 3000, 6500, 1000, 7000, 9000, 4500],
        borderColor: "red",
      },
      {
        label: "Steps of Sparsh",
        data: [3000, 2000, 4500, 3000, 8000, 4000, 3000],
        borderColor: "green",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "white" : "black", // Dynamic text color for legend
        },
      },
      title: {
        display: true,
        text: "This Graph Represents Daily Steps",
        color: isDarkMode ? "white" : "black", // Dynamic text color for title
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "white" : "black", // Dynamic text color for x-axis
        },
        grid: {
          color: isDarkMode ? "#444" : "#ddd", // Gridline color for x-axis
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "white" : "black", // Dynamic text color for y-axis
        },
        grid: {
          color: isDarkMode ? "#444" : "#ddd", // Gridline color for y-axis
        },
      },
    },
  };

  return (
    <div className="container mx-auto w-9/12 my-10 dark:bg-gray-800 dark:text-white">
      <Line options={options} data={lineChartData} onClick={clickable ? onClick : undefined} />
    </div>
  );
};

export default LineChart;
