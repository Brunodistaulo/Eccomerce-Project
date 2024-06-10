"use client";

import Sidebar from "@/components/sidebar";
import { userSession } from "@/types/types";
import React, { useEffect, useState } from "react";


const DashboardLayout: React.FC = () => {

    const [userData, setUserData] = useState<userSession>();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userData = localStorage.getItem('UserSession')
            setUserData(JSON.parse(userData!))
        }
    }, [])

    console.log(userData);
    


    return (
        <div className="w-full h-screen">
            <Sidebar />
            {
                userData ? (
                    <div className="w-full ml-64">
                        <h1 className="">Welcome {userData.userData.name}</h1>
                        <p className="">{userData.userData.phone}</p>
                        <p className="">{userData.userData.address}</p>
                    </div>
                ) : (
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                )
                }
        </div>
    );
};


export default DashboardLayout