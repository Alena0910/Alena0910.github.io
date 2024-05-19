import React, { useState } from 'react';
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';


interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Sidebar 的狀態

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="sidebar">
        { 
          !isOpen && <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleMenu} />
          </Link>
        }
      </div>
      { 
        isOpen && <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={toggleMenu} />
              </Link>
            </li>
            {
              SidebarData.map((item: SidebarItem, index : number) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      &ensp; {item.icon} &ensp;
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      }
    </div>
  );
};

export default Sidebar;
