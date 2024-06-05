"use client";
import React, { useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { userSession } from "@/types/types";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export function NavbarLayout() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [userData, setUserData] = useState<userSession>();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('UserSession')
      setUserData(JSON.parse(userData!))
    }
  }, [pathname])

  return (
    <>
      <div className="bg-black p-6 flex justify-between h-16">
        <a className="text-white" href="/">Logo
        </a>
        <div className="absolute  ml-[37%] ">
          <SearchIcon className="w-5 h-5 absolute ml-3 mt-[4px] pointer-events-none " />
          <input
            type="text"
            name="search"
            placeholder="Search products"
            className="w-80 h-7 pr-3 pl-10 py-2 placeholder-gray-500 text-black rounded-lg border-none focus:ring-gray-500 outline-none"
          />
          <a
            href="/cart"
            className="text-xl cursor-pointer absolute ml-4"
          >
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", }} />
          </a>
        </div>
        {
          userData?.token ? (
            <div>
              <p className="text-white text-lg">Welcome {userData?.userData.name}!</p>
              <div>

              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-16 h-8 bg-white rounded-md ">
              <a
                href="/login"
                className=" text-black rounded-md p-[3px] duration-500 ease"
              >
                Login
              </a>
            </div>

          )
        }
      </div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-10">
            <div className="hidden md:block items-center">
              <div className="ml-4 flex items-center justify-around space-x-16 text-sm">
                <a
                  href="/home"
                  className="w-20 text-center text-white hover:border-b hover:rounded-none rounded-lg p-2 "
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="w-20 text-center text-white hover:border-b hover:rounded-none rounded-lg p-2"
                >
                  About
                </a>
              </div>

            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex p-2 text-white absolute right-0 top-[25px]" onClick={toggle}>
                {
                  isOpen ? (
                    <svg className="h-8 w-8 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor" >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-8 w-8 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )
                }
              </button>
            </div>
          </div>
        </div>
        {
          isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px3 du">
                <a
                  href="/home"
                  className="w-100 uppercase block text-center text-white hover:bg-white hover:text-black rounded-lg p-[3px] duration-500 ease "
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="w-100 uppercase block text-center text-white hover:bg-white hover:text-black rounded-lg p-[3px] duration-500 ease "
                >
                  About
                </a>
                <a
                  href="/register"
                  className="w-100 uppercase block text-center text-white hover:bg-white hover:text-black rounded-lg p-[3px] duration-500 ease "
                >
                  Log In
                </a>
              </div>
            </div>
          )
        }
      </nav>
    </>
  );
}
