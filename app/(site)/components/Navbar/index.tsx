"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

export type MenuTag = {
  name: string;
  route: string;
  margin?: boolean;
}
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [loading, setLoading] = useState(false);

  const cart: any = useSelector((state: any) => state.cart)

const getItemsCount=()=>{
  return cart.reduce((acc: any, item: any) => acc + item.quantity, 0)
}

const cartName = `Cart (${getItemsCount()})`;

const menuItems: MenuTag[] = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Shop",
        route: "/shop",
    },
    {
        name: cartName,
        route: "/cart",
    },
    {
        name: "Login",
        route: "/signIn",
    },
];


  const handleMenuItemClick = (menuName: any) => {
    setActiveMenu(menuName);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="grid grid-cols-1 md:grid-cols-3 text-black mx-4 my-2">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-center text-black">
            GameSpace
          </h2>
        </div>
        <div className="md:col-span-2 hidden md:flex items-center justify-end space-x-4">
          <ul className="flex items-center space-x-4">
            {menuItems.map((menuItem: any, index: number) => (
              <Link
                href={menuItem.route}
                key={index}
                className={`${
                  activeMenu === menuItem.name
                    ? "transition duration-300 text-black md:border-l md:border-black sm:border-l sm:border-black"
                    : "transition duration-300"
                }`}
                onClick={() => handleMenuItemClick(menuItem.name)}
              >
                <h2>{menuItem.name}</h2>
              </Link>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Hamburger menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-can-black p-4 text-black fixed justify-start w-full items-center inset-x-0 inset-y-0 bg-opacity-25 backdrop-blur-sm flex">
          <div className="absolute top-0 right-0 m-4">
            <div
              className="text-black border border-black rounded-full p-1 cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose size={20} />
            </div>
          </div>
          <ul className="flex flex-col space-y-2">
            {menuItems.map((menuItem: any, index: number) => (
              <Link
                href={menuItem.route}
                key={index}
                className={`${
                  activeMenu === menuItem.name
                    ? "border-b border-l px-2 border-black transition duration-300 text-black md:border-l md:border-black sm:border-l sm:border-black"
                    : "hover:border-b hover:border-l hover:px-2 transition duration-300"
                }`}
                onClick={() => {
                  handleMenuItemClick(menuItem.name);
                  setIsMenuOpen(false); // Close the menu
                }}
              >
                <h2>{menuItem.name}</h2>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
