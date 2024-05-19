import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

interface SidebarData {
    title: string,
    path: string,
    icon: JSX.Element,
    cName: string
}[]

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Issue List',
        path: '/issue-list',
        icon: <FaIcons.FaListUl />,
        cName: 'nav-text'
    }
];