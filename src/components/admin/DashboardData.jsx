import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardBoxes from './DashboardBoxes'
import LineChart from '../charts/Line'
import BarChart from '../charts/Bar'
import PieChart from '../charts/Pie'

const DashboardData = () => {

  const navigate = useNavigate();

  const handleChartClick = (chartType) => {
    navigate(`/dashboard/${chartType}`);
  };

  return (
    <div className="p-4 flex flex-col gap-5 dark:bg-gray-800 dark:text-white">
      <DashboardBoxes/>
      <div className="charts flex  ">
        <div onClick={() => handleChartClick("line")} className="line w-1/2 dark:border cursor-pointer"><LineChart clickable={true}/></div>
        <div onClick={() => handleChartClick("bar")} className="line w-1/2 dark:border cursor-pointer"><BarChart clickable={true}/></div>
      </div>
      <div onClick={() => handleChartClick("pie")} className='dark:border cursor-pointer'><PieChart clickable={true}/></div>
    </div>
  )
}

export default DashboardData
