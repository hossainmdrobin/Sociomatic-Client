import React from "react";
import { Menu, Search } from "lucide-react";
import VerticalTabs from "./verticalTab";
import AddButtons from "./addButtons";

export default function ProfileDropdown() {
    return (
        <div className="w-full">
            <div className=" flex items-center p-4 border-b border-gray-800">
                <Search />
                <input
                    placeholder="Search..."
                    className="placeholder-gray-400 ml-2 w-full border-none focus:outline-none"
                />
            </div>
            <div className="flex">
                {/* Sidebar */}
                <VerticalTabs />
            </div>
            <AddButtons />
        </div>

    );
}
