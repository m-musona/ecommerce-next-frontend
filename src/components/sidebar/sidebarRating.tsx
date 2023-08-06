import React from "react";

const SidebarRating = () => {
  return (
    <div className="p-4">
      <div className="py-1 font-semibold">Rating</div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>5 Stars</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>4 Stars</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>3 Stars</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>2 Stars</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>1 Stars</div>
      </div>
      <div className="pl-4 py-1 flex">
        <input className="mr-2 leading-tight" type="checkbox" />
        <div>No Rating</div>
      </div>
    </div>
  );
};

export default SidebarRating;
