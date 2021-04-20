import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Input from '../components/Input';
import InputHot from '../components/InputHot';

const Inputs = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            
            <div id="body" style={{height:"120vh"}}>
                <div id = "foodTypeCold" style ={{fontSize:"4vh"}}>
                    Cold
                </div>
                <div id = "input">
                <Input></Input>
                </div>
                
                <br></br>
                <br></br>
                <div id = "foodTypeHot" style ={{fontSize:"4vh"}}>
                    Hot
                </div>
                <div id = "input">
                <InputHot></InputHot>
                </div>
                
                <div>
                <Link to="/order">
                <Button type="primary" style = {{borderRadius: "25px",height:"40px" , width: "10vh ",margin: "30px 0px 15px 10vh"}}>Next</Button>
                </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Inputs