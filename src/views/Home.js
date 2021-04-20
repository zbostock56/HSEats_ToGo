import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
// import Loading from '../components/Loading';
// import Input from '../components/Input';
// import InputHot from '../components/InputHot';

const Home = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            
            <div id="header" style={{height:"100vh"}}>
                Welcome, let's start your order.
                
                <br/>
                <Link to="/inputs">
                <Button type="primary">Next</Button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home
