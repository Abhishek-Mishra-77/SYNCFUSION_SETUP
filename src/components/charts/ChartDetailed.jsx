import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LineChart from "./Line";
import PieChart from "./Pie";
import BarChart from "./Bar";

const ChartDetailed = () => {
  const { chartType } = useParams();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <LineChart />;
      case "pie":
        return <PieChart />;
      case "bar":
        return <BarChart />;
      default:
        return <p>Chart type not found</p>;
    }
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        navigate(-1);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div
        ref={modalRef}
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-8/12"
      >
        <div className="chart-view w-full/12 h-full">{renderChart()}</div>
      </div>
    </div>
  );
};

export default ChartDetailed;
