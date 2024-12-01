import React from 'react'
import { Outlet } from 'react-router-dom'
import navbar from './navbar'

function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout