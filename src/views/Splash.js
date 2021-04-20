import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Login from '../auth/Login';

const Splash = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>

            <div id = "header"  style={{height:"120vh"}}>
                Please Login.
            </div>

        </div>
    )
}

export default Splash