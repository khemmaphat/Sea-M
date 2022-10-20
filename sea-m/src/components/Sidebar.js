import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../contents/spotify';

export default function Sidebar() {
  const [image, setImage] = useState("https://freesvg.org/img/abstract-user-flat-4.png");
  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    });
  },[]);
  return (
    <div className='sidebar-container'>
      <img 
        src= { image } 
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
