import React from "react";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoIosOptions } from "react-icons/io";

function Header() {
  return (
    <nav className="flex flex-wrap justify-around text-gray-500 items-center bg-[#191932] p-4 rounded-t-lg w-full">
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <img src="" alt="logo" className="hidden sm:block cursor-pointer" />
          <span className="text-lg sm:text-xl font-semibold cursor-pointer">
            ORION
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 sm:mt-0">
        <input
          type="text"
          className="bg-[#05050F] h-8 rounded-lg w-full sm:w-[320px] md:w-[420px] lg:w-[520px]"
        />
        <CiSearch className="text-[#25245D] cursor-pointer mt-2 sm:mt-0" />
        <nav className="flex-1 text-center sm:text-right mt-2 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-[24px] cursor-pointer">
            <li className="inline-block">
              <a href="#" className="active:border-b-orange-500">
                Statistics
              </a>
            </li>
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Analytics</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <FiUser color="grey" className="cursor-pointer" />
        <IoIosOptions color="grey" className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Header;
