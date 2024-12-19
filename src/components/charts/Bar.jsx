import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarChart = () => {

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

    const barChartData={
        labels:[
            "Rent",
            "Groceries",
            "Utilities",
            "Entertainment",
            "Transportation",
        ],
        datasets:[
            {
                label:"Expences",
                data:[9000,5000,4500,6000,8000],
                backgroundColor: [
                  "rgba(255,99,132,0.6)",
                  "rgba(54,162,235,0.6)",
                  "rgba(255,206,86,0.6)",
                  "rgba(75,192,192,0.6)",
                  "rgba(153,102,255,0.6)",
                ],
                borderColor:[
                  "rgba(255,99,132,0.6)",
                  "rgba(54,162,235,0.6)",
                  "rgba(255,206,86,0.6)",
                  "rgba(75,192,192,0.6)",
                  "rgba(153,102,255,0.6)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options={
      responsive: true,
      plugins : {
          legend:{
              position:"top",
              labels: {
                color: isDarkMode ? "white" : "black", // Dynamic text color for legend
              },
          },
          title:{
              display:true,
              text:"This Graph Representing Expences",
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
    
    <div className="container mx-auto w-9/12 my-10">
        <Bar options={options} data={barChartData} />
    </div>
  )
}

export default BarChart

