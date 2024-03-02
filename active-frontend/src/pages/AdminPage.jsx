import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import GalleryManagement from "../components/specific-components/adminpage-components/GalleryManagement";
import MeetingManagement from "../components/specific-components/adminpage-components/MeetingManagement";
import Users from "../components/specific-components/adminpage-components/Users";
import { elements } from "../components/specific-components/adminpage-components/sidebarElements";


function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Update the URL based on the selected tab
    navigate(routes[tab]);
  };

  const routes = {
    Users: "/users",
    "Gallery Management": "/gallery",
    Meetings: "/meetings",
  };

  return (
    <div className='flex mt-10'>
      <div className='flex flex-col rounded-md w-[15%] items-center justify-start z-50'>
        <span className="flex justify-center mb-2">
          <h1 className="text-lg font-jost">Admin</h1>
        </span>
        <div className='rounded-xl bg-gradient-to-b from-sky-600 to-sky-700 p-20 h-auto'>
          {elements.map((item) => (
            <p
              key={item.id}  // Use item.id as the key
              className={`font-jost text-3xl text-gray-200 cursor-pointer mb-10 ${
                activeTab === item.id ? 'text-white border-b-2' : 'hover:text-white'
              }`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-20">
      {/* Render the corresponding management component based on the activeTab */}
      {activeTab === 'gallery' && <GalleryManagement />}
      {activeTab === 'meetings' && <MeetingManagement />}
      {activeTab === 'users' && <Users />}
      </div>
    </div>
  );
}


export default AdminPage;
