import React from "react";
import Image from "next/image";
import logo from "../../images/ShopNestTransparent.png";
const Logo = () => {
  return (
    <div className="py-5 pl-4 mr-10">
      <Image src={logo} alt="Logo" width={200} height={100} />
    </div>
  );
};

export default Logo;
