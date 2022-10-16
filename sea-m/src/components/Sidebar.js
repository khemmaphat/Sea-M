import React from 'react';
import './Sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img 
        src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' 
        className='profile-img' 
      />
      <div>
        <SidebarButton title="Feed" to="/Feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title="Trending" to="/Trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/Player" icon={<FaPlay />}/>
        <SidebarButton title="Favorites" to="/Favorites" icon={<MdFavorite />}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>
  )
}
