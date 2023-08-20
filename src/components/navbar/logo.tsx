import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/ShopNestTransparent.png";
const Logo = () => {
  return (
    <div className="py-5 pl-4 mr-10">
      <Link href={'/'}>
      <Image src={logo} alt="Logo" width={200} height={100} />
      </Link>
    </div>
  );
};

export default Logo;
