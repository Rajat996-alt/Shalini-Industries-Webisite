import { useState } from "react";

import CollectionDropdownMenu from "./CollectionDropdownMenu";
import HandcraftedDropDownMenu from "./HandcraftedDropDownMenu";

import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Header = () => {
  const [activeMenus, setActiveMenus] = useState(null);
  const [dropdownMenu, setDropdownMenu] = useState("hidden");

  return (
    <>
      <header className="bg-[#FEFAE0] w-full">
        <nav className="h-18 flex justify-around">
          <ul className="flex items-center w-1/3 justify-around font-medium text-[#452302]">
            <li className="cursor-pointer hover:rounded-full hover:bg-white px-2 py-1 transition-all duration-150 ease-linear">
              Home
            </li>
            <span
              onMouseEnter={() => {
                setActiveMenus("Collections");
                setDropdownMenu("none");
              }}
              onMouseLeave={() => {
                setActiveMenus(null);
                setDropdownMenu("hidden");
              }}
              className="flex items-center hover:rounded-full hover:bg-white cursor-pointer px-2 py-1 transition-all duration-150 ease-linear gap-1"
            >
              <li className="">Collections</li>
              <span className="">
                {activeMenus === "Collections" ? (
                  <FaCaretDown />
                ) : (
                  <FaCaretUp />
                )}
              </span>
            </span>
          </ul>
          <h2 className="w-1/3 text-center font-bold text-2xl pt-2">
            Shalini Industries
          </h2>
          <ul className="flex items-center w-1/3 justify-around font-medium  text-[#452302]">
            <span
              onMouseEnter={() => {
                setActiveMenus("Handcrafted");
                setDropdownMenu("none");
              }}
              onMouseLeave={() => {
                setActiveMenus(null);
                setDropdownMenu("hidden");
              }}
              className="flex items-center hover:rounded-full hover:bg-white cursor-pointer px-2 py-1 transition-all duration-150 ease-linear gap-1"
            >
              <li className="">Handcrafted</li>
              <span className="">
                {activeMenus === "Handcrafted" ? (
                  <FaCaretDown />
                ) : (
                  <FaCaretUp />
                )}
              </span>
            </span>
            <li className="cursor-pointer hover:rounded-full hover:bg-white px-2 py-1 transition-all duration-150 ease-linear">
              Our Journey
            </li>
          </ul>
        </nav>

        <div>
          {activeMenus === "Collections" && (
            <CollectionDropdownMenu visibility={dropdownMenu} />
          )}
          {activeMenus === "Handcrafted" && (
            <HandcraftedDropDownMenu visibility={dropdownMenu} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
