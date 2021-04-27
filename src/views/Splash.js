import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Login from '../auth/Login';

/* This was a splash page idea for where someone could land if they come to the site and had not been logged. */
/* This could be added to the React Router route for when someone isn't logged in. */

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