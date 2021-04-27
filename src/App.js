import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Loading from './components/Loading';

import Home from './views/Home';
import Splash from './views/Splash';

import AuthContext from './auth/AuthContext';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Verify from './auth/Verify';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Settings from './auth/Settings';

import './App.css';
import Inputs from './views/Inputs';
import Order from './views/Order';

/*

Below does the login verification for the the student or teacher/admin, should not need to be changed.

*/


const App = () => {
  const [auth, setAuth] = useState({isAuth: false, loading: true, fetched: false})

  useEffect(() => {
    document.title = "HSEats"

    if (!auth.user && !auth.fetched){
      console.log('test token')
      testToken()
    }
    if (auth.toFetch){
      testToken()
      console.log("hi there")
    }
    console.log(auth)

  }, [auth])

  const testToken = async () => {
    const token = localStorage.getItem('token')

    if(!token){
      setAuth({isAuth: false, loading: false, fetched: true})

    } else {
      axios.defaults.headers.common['Authorization'] =`Bearer ${token}`

      try{
        const res = await axios.get(`${process.env.REACT_APP_AUTH_API}/user/?timestamp=${new Date().getTime()}`)
        console.log(res.data)

        if (!res.data.errors){
          setAuth({isAuth: true, user: res.data, loading: false, fetched: true})

        } else {
          console.log("set to false")
          localStorage.removeItem("token")
          setAuth({isAuth: false, loading: false, fetched: true})
        }
      } catch (err) {
        localStorage.removeItem("token")
        console.log("set to false")
        setAuth({isAuth: false, loading: false, fetched: true})
      }
    }
  } 

/*

Under this comment controls the paths. Package is called React Router. Its pretty great stuff. Look up docs for better info.

*/


  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/verify/:token" component={Verify}/>
          <Route exact path="/forgot-password" component={ForgotPassword}/>
          <Route exact path="/reset-password/:token" component={ResetPassword}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/splash" component={Splash}/>
          <Route exact path="/inputs" component={Inputs}/>
          <Route exact path="/order" component={Order}/>

          {/* general routes */}
          {/* <Route exact path="/" component={Splash}/> */}
          <Route exact path="/" component={Home}/>

          {auth.user?.role === "teacher"?
            <div>
              {/* admin routes
                  This is what page the teacher/admin will land on.
              */}
            </div>
          :
            <div>
              
              {auth.user?.role === "student"?
                <div>
                  {
                  /* student routes */
                  /* Student's page should be set up here. For example, set the Route and the path to /(whatever the name is of the path) */
                  }
                </div>
              :
                <div>
                  {/* 
                  not logged in routes
                  Maybe add Splash.js to the not logged in route?
                  */}
                </div>
              }
            </div>
          }
          
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App;


