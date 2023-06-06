import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../navbar/SideBar'


function RootLayout() {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default RootLayout