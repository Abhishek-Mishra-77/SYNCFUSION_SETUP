import React from "react";
import { FcBullish } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex justify-center gap-2  py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">Stats</span>
      </div>
      <div className="flex-1 flex-col py-8">
        <SideBarComponent name="Dashboard" address={"/dashboard"} />
      </div>
      <div>bottom part</div>
    </div>
  );
};

const SideBarComponent = ({ name, address }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div
      className={`px-16 m-1 hover:bg-neutral-600 active:bg-neutral-600 ${
        pathname === address ? "bg-neutral-600" : ""
      }`}
    >
      <Link to={address}>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default Sidebar;
