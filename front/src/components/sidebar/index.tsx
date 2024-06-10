"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

function SideNavbar() {
  return (
    <div className="absolute">
      <Disclosure as="nav">
        <div className="p-6 w-1/2 h-screen  lg:left-0 lg:w-60">
          <div className="flex flex-col justify-start item-center">
            <div className=" my-4 border-b pb-4">
              <Link href="/profile">
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600  " />
                <h3 className="text-base font-semibold ">
                  Profile
                </h3>
              </div>
              </Link>
              <Link href="/orders">
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600  " />
                <h3 className="text-base font-semibold ">
                  Orders
                </h3>
              </div>
              </Link>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600  " />
                <h3 className="text-base font-semibold ">
                  Messages
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600  " />
                <h3 className="text-base font-semibold ">
                Shopping
                </h3>
              </div>
            </div>
            <div className=" my-4">
              <div className="flex items-center pl-5 border p-2 rounded-md cursor-pointer hover:shadow-lg hover:bg-red-600 hover:border-transparent hover:text-black/70 transition-all duration-300  m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600  " />
                <h3 className="text-base font-semibold ">
                  Sing Out
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
