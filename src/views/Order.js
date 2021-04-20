import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'
import { Link } from "react-router-dom";


import Navbar from '../components/Navbar';
// import Loading from '../components/Loading';


const Order = () => {
    
    const {auth, setAuth} = useContext(AuthContext)


    return (
        <div className="App">
            <Navbar></Navbar>
            
            <div id="header" style={{height:"100vh"}}>
                Thank you for your order!
                
            
                
            </div>
            
        </div>
    )
}

export default Order