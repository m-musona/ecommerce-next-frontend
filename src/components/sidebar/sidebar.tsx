import React from "react";
import SidebarPrice from "./sidebarPrice";
import SidebarRating from "./sidebarRating";
import SidebarFeature from "./sidebarFeature";

const Sidebar = () => {
  return (
    <div className="bg-white w-[250px] ml-2 my-2 mr-4 h-min rounded-lg">
      <div className="text-lg p-4 font-semibold">Filter by:</div>
      <hr className="mx-4" />
      <SidebarPrice />
      <hr className="mx-4" />
      <SidebarRating />
      <hr className="mx-4" />
      <SidebarFeature />
      <hr className="mx-4" />
    </div>
  );
};

export default Sidebar;
