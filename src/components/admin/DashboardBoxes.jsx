import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

const DashboardBoxes = () => {
  return (
    <div className="flex gap-4 ">
      <BoxWrapper title={"Total Sales"} price={`₹`+5487557} percent={254}/>
      <BoxWrapper title={"Total Expences"} price={`₹`+47584} percent={157}/>
      <BoxWrapper title={"Total Customers"} price={458} percent={221}/>
      <BoxWrapper title={"Total Orders"} price={2542} percent={258}/>
    </div>
  )
}

export default DashboardBoxes

const BoxWrapper=({title,price,percent})=>{
    return(
        <div className="w-full bg-white p-4 h-20 flex justify-start items-center gap-4 dark:bg-gray-800 dark:text-white dark:border-2">
            <div><IoBagHandle fontSize={36}/></div>
            <div>
                <div>{title}</div>
                <div>{price} <span className="text-green-500">+{percent}%</span></div>
            </div>
        </div>
    )
}
