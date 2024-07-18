
import SearchBar from "@/components/searchBar";
import SideNavbar from "@/components/sidebar";
import React from "react";


const profile: React.FC = () => {
    return (
        <div className="w-full h-screen mt-5">
            <SideNavbar />
            <h1 className="text-center">This is profile</h1>
        </div>
    )
}

export default profile;