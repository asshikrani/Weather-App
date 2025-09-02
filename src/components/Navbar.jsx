import React from "react";
import { Cloud } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-gray-900 text-white p-3 items-center">
        <div className="logo flex justify-center items-center gap-1 ml-6">
          <Cloud size={52} color="green" strokeWidth={2.25} />
        <h1 className="font-bold text-2xl  text-green-600">
          Mosam
        </h1>
        </div>
        <p className="mr-6"> <a href="https://ahmadsiddique.vercel.app">Abou Us</a></p>
      </nav>
      ;
    </div>
  );
};

export default Navbar;
