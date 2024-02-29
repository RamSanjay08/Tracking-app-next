import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-between items-center py-1 px-6 shadow-sm shadow-black/10">
      <div className="flex gap-2 items-center">
        <Image src="/WebchainLogo.png" alt="logo" width={60} height={60} />
        <h2 className="text-2xl font-semibold tracking-widest">R-TRACKER</h2>
      </div>
      <ul className="flex gap-8">
        <li className="text-lg hover:text-red-600 cursor-pointer">Home</li>
        <li className="text-lg hover:text-red-600 cursor-pointer">About Us</li>
        <li className="text-lg hover:text-red-600 cursor-pointer">
          Contact Us
        </li>
      </ul>
    </header>
  );
}

export default Header;
