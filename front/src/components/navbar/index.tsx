"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { userSession } from "@/types/types";
import { usePathname } from "next/navigation";
import { Transition } from '@headlessui/react';
import Link from 'next/link'




const NavbarLayout = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('UserSession')
      setUserData(JSON.parse(userData!))
    }
  }, [pathname])


  const handleLogout = () => {
    localStorage.removeItem('UserSession')
    window.location.reload();
  }


  return (
    <div className="h-16 ">
      {
        userData ? (
          <nav className="flex items-center h-full">
            <div className="p-2 text-2xl font-medium">
              <a href="/">TechZone</a>
            </div>
            <div className="flex justify-end gap-14 w-full h-full">
              <div className="h-full w-56 flex justify-between gap-6 items-center">
                <Link href="/">
                  <p className="w-20 h-full flex justify-center items-center hover:border-b">Home</p>
                </Link>
                <Link href="/product">
                <p className="w-20 h-full flex justify-center items-center hover:border-b">Products</p>
                </Link>
                <Link href="/about">
                <p className="w-20 h-full flex justify-center items-center hover:border-b">About</p>
                </Link>
              </div>
              <div className="flex h-full w-[700px] justify-around">
                <div className="flex items-center">
                  <input className="outline-none h-8 w-[450px] rounded-md p-3 text-sm text-gray placeholder:italic placeholder:text-sm" placeholder="Search Product" type="text" name="" id="" />
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <a href="/cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6" strokeWidth={1.3}>
                    <path d="M3.90063 3.11902H5.90063L6.30063 5.11902M6.30063 5.11902H21.9006L17.9006 13.119H7.90063M6.30063 5.11902L7.90063 13.119M7.90063 13.119L5.60763 15.412C4.97763 16.042 5.42363 17.119 6.31463 17.119H17.9006M17.9006 17.119C17.3702 17.119 16.8615 17.3297 16.4864 17.7048C16.1113 18.0799 15.9006 18.5886 15.9006 19.119C15.9006 19.6495 16.1113 20.1582 16.4864 20.5332C16.8615 20.9083 17.3702 21.119 17.9006 21.119C18.4311 21.119 18.9398 20.9083 19.3148 20.5332C19.6899 20.1582 19.9006 19.6495 19.9006 19.119C19.9006 18.5886 19.6899 18.0799 19.3148 17.7048C18.9398 17.3297 18.4311 17.119 17.9006 17.119ZM9.90063 19.119C9.90063 19.6495 9.68992 20.1582 9.31485 20.5332C8.93978 20.9083 8.43107 21.119 7.90063 21.119C7.3702 21.119 6.86149 20.9083 6.48642 20.5332C6.11135 20.1582 5.90063 19.6495 5.90063 19.119C5.90063 18.5886 6.11135 18.0799 6.48642 17.7048C6.86149 17.3297 7.3702 17.119 7.90063 17.119C8.43107 17.119 8.93978 17.3297 9.31485 17.7048C9.68992 18.0799 9.90063 18.5886 9.90063 19.119Z" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></a>
                </div>
                <div className="flex items-center">
                  {
                    userData.token && (
                      <div>
                        <button className="flex items-center" onClick={() => setIsOpen((prev) => !prev)} >Welcome {userData.userData.name}!
                          {
                            !isOpen ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                />
                              </svg>
                            )
                          }
                        </button>
                        <Transition show={isOpen} enter="transition ease-out duration-300" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-300" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                          <div className="backdrop-blur-md bg-white absolute top-16 right-2 flex flex-col items-center rounded-lg text-black z-50 w-44">
                            <a href="/profile" className="p-2 text-base flex items-center justify-between w-full hover:bg-gray/10 hover:rounded-t-lg transition-all duration-200">
                              Profile
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                            </a>
                            <a href="/orders" className="p-2 text-base flex items-center justify-between w-full hover:bg-gray/10 transition-all duration-200">
                              Orders
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                              </svg>

                            </a>
                            <a href="/dashboard" className="p-2 text-base flex items-center justify-between w-full hover:bg-gray/10 transition-all duration-200">
                              Dashboard
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                              </svg>
                            </a>
                            <button
                              onClick={handleLogout}
                              className="p-2 text-base cursor-pointer flex items-center justify-between w-full hover:text-red-600 hover:bg-gray/10 hover:rounded-b-lg transition-all duration-200"
                            >
                              Logout
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                                />
                              </svg>
                            </button>
                          </div>
                        </Transition>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="flex items-center h-full">
            <div className="p-2 text-2xl font-medium">
              <a href="/">TechZone</a>
            </div>
            <div className="flex justify-end gap-14 w-full h-full">
              <div className="h-full w-56 flex justify-between gap-6 items-center">
                <a className="w-20 h-full flex justify-center items-center hover:border-b" href="/">Home</a>
                <a className="w-20 h-full flex justify-center items-center hover:border-b" href="/product">Products</a>
                <a className="w-20 h-full flex justify-center items-center hover:border-b" href="/about">About</a>
              </div>
              <div className="flex h-full w-[700px] justify-center gap-16 ">
                <div className="flex items-center">
                  <input className="outline-none h-8 w-[450px] rounded-md p-3 text-sm text-gray placeholder:italic placeholder:text-sm" placeholder="Search Product" type="text" name="" id="" />
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <a href="/cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6" strokeWidth={1.3}>
                    <path d="M3.90063 3.11902H5.90063L6.30063 5.11902M6.30063 5.11902H21.9006L17.9006 13.119H7.90063M6.30063 5.11902L7.90063 13.119M7.90063 13.119L5.60763 15.412C4.97763 16.042 5.42363 17.119 6.31463 17.119H17.9006M17.9006 17.119C17.3702 17.119 16.8615 17.3297 16.4864 17.7048C16.1113 18.0799 15.9006 18.5886 15.9006 19.119C15.9006 19.6495 16.1113 20.1582 16.4864 20.5332C16.8615 20.9083 17.3702 21.119 17.9006 21.119C18.4311 21.119 18.9398 20.9083 19.3148 20.5332C19.6899 20.1582 19.9006 19.6495 19.9006 19.119C19.9006 18.5886 19.6899 18.0799 19.3148 17.7048C18.9398 17.3297 18.4311 17.119 17.9006 17.119ZM9.90063 19.119C9.90063 19.6495 9.68992 20.1582 9.31485 20.5332C8.93978 20.9083 8.43107 21.119 7.90063 21.119C7.3702 21.119 6.86149 20.9083 6.48642 20.5332C6.11135 20.1582 5.90063 19.6495 5.90063 19.119C5.90063 18.5886 6.11135 18.0799 6.48642 17.7048C6.86149 17.3297 7.3702 17.119 7.90063 17.119C8.43107 17.119 8.93978 17.3297 9.31485 17.7048C9.68992 18.0799 9.90063 18.5886 9.90063 19.119Z" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></a>
                </div>
                <div className="flex items-center">
                  <button onClick={() => setIsOpen((prev) => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <Transition show={isOpen} enter="transition ease-out duration-300" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-300" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <div className="backdrop-blur-md bg-white absolute right-4 top-16 flex flex-col items-center justify-center rounded-lg text-black z-50 w-64 h-44">
                      <div className="flex flex-col items-center -mt-2">
                        <label htmlFor="Email" className="text-sm w-full">Email</label>
                        <input className="outline-none border rounded-md h-7 p-2 text-sm text-gray placeholder:italic" placeholder="Example@example.com" type="email" />
                      </div>
                      <div className="flex flex-col items-center mt-3">
                        <label htmlFor="Password" className="text-sm w-full text-right">Password</label>
                        <input className="outline-none border rounded-md h-7 p-2 text-sm text-gray placeholder:italic" placeholder="********" type="password" />
                      </div>
                      <div className="flex items-center mt-5 w-full justify-around">
                        <button className="bg-black text-white text-sm rounded-md p-1.5 w-20 hover:bg-black/75 transition-all duration-300">Login</button>
                        <button className="bg-black text-white text-sm rounded-md p-1.5 w-20 hover:bg-black/75 transition-all duration-300">Register</button>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </nav>
        )
      }
    </div>
  );
}


export default NavbarLayout;