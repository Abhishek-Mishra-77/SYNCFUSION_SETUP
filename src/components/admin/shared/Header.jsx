import React, { useEffect, useState } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'


const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center dark:bg-gray-800 dark:text-white dark:border">
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
        <input type="text" placeholder="Search" className=" rounded-sm h-10 focus:outline-none active:outline-none border border-gray-300 w-[24rem] pl-11 pr-4 dark:bg-gray-800 dark:text-white dark:border" />
      </div>
      <div className='flex items-center gap-2 mr-2'>
      <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white dark:border"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
        <HiOutlineChatAlt fontSize={24}/>
        <HiOutlineBell fontSize={24}/>
      </div>
    </div>
  )
}

export default Header
