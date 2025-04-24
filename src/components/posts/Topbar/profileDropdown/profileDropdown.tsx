import React from "react";
import { Menu, Search } from "lucide-react";

export default function ProfileDropdown() {
    return (
        <div>
            <div className=" flex items-center p-4 border-b border-gray-800">
                <Search />
                <input
                    placeholder="Search..."
                    className="placeholder-gray-400 ml-2 w-full border-none focus:outline-none"
                />
            </div>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 flex flex-col">

                    <nav className="flex-1 p-4 space-y-2">
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">Dashboard</button>
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">Profile</button>
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">Settings</button>
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700">Logout</button>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-auto">
                    {/* <Card className="p-6"> */}
                    <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
                        consectetur nisl. Cras euismod, nibh eu fringilla aliquet, nisi urna
                        vestibulum justo, at posuere enim sapien vel neque. Praesent ut
                        malesuada purus. Integer vitae ligula eget nunc feugiat pulvinar.
                    </p>
                    {/* </Card> */}
                </div>
            </div>
        </div>

    );
}
