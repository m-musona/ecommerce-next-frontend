import React from "react";

const SidebarPrice = () => {
  return (
    <div className="p-4">
      <div className="py-1 font-semibold">Price</div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>0 - 100</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>100 - 300</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>300 - 700</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>700 - 1000</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>1000 and Over</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="w-16 px-2 appearance-none border focus:outline-none border-gray-400 focus:border-fuchsia-950 rounded" />{" "}
        -{" "}
        <input className="w-16 px-2 appearance-none border focus:outline-none border-gray-400 focus:border-fuchsia-950 rounded" />
      </div>
    </div>
  );
};

export default SidebarPrice;
