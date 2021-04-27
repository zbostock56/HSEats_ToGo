import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
// import Loading from '../components/Loading';
// import Input from '../components/Input';
// import InputHot from '../components/InputHot';

/*

Comments:
Landing Page for students or teachers. Needs to be specifically linked to teachers and students login in App.js.

Commment for the auth folder: shouldn't need to mess with all this. Developed and works for all student and teacher email addresses to login and doesn't have any problems (that I know of)

*/


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
