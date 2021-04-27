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
                
                {/* Under this "Thank you for your order!" was going to be a randomly generated string of characters for the order number. */}
                {/* Another idea for whoever is reading this: my partner and I thought it might be smart to have the student's ID be part of the verification process when grabbing your order from the CCA. */}

            </div>
            
        </div>
    )
}

export default Order