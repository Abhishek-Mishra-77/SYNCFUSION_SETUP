import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);

const PieChart = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode by observing the document's HTML class list
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains('dark'));

    checkDarkMode(); // Initial check

    // Watch for changes to the class list of the <html> element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect(); // Clean up observer
  }, []);

  const pieChartData = {
    labels: [
      "Facebook",
      "Instagram",
      "Twitter",
      "Youtube",
      "LinkedIn",
    ],
    datasets: [
      {
        label: "Time Spent in Minutes",
        data: [60, 90, 30, 120, 20],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,0.6)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "white" : "black", // Adjust legend text color
        },
      },
      title: {
        display: true,
        text: "This Graph Represents Time Spent on Social Media",
        color: isDarkMode ? "white" : "black", // Adjust title text color
      },
    },
  };

  return (
    <div className="flex justify-center items-center mt-5">
      {/* Resize container */}
      <div className="w-80 h-80">
        <Pie options={options} data={pieChartData} />
      </div>
    </div>
  );
};

export default PieChart;