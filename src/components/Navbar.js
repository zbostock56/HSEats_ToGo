import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import AuthContext from '../auth/AuthContext.js';

import logo from '../img/hseapps.png'
import { Typography, Button, Avatar} from 'antd';
import { UserOutlined, HomeOutlined, CompassOutlined } from '@ant-design/icons';
import {motion} from 'framer-motion'


/*

Below is all the stuff for the "Navbar" at the top of the frontend page. Really its kinda in a mess, but it should work and shouldn't really need to be changed much at all.

*/

const {Title , Text} = Typography


const Navbar = ({history}) => {

  const {auth} = useContext(AuthContext)
  
  return (
    <div style={{backgroundColor: 'white', borderBottom: 'solid 1px rgba(0,0,0,0.1)'}}>
      <div style = {{padding: '10px', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        
        <div style={{display: "flex", alignItems: "center", width:"250px"}}>
          <Link to="/">
            <motion.img whileHover={{ scale: 1.05 }} src={logo} style={{height: "45px", marginRight:"4px", marginLeft:"10px"}}></motion.img>
          </Link>
          <Title level={3} style={{margin: "0px 5px"}}>HSEats<div style={{fontSize: "11px", margin: "-4px 0px 0px 39px", marginBottom:"5px"}}></div></Title>
        </div>

        <div style={{display: 'flex', alignItems: 'center', width:"250px", justifyContent:"flex-end"}}>
          {auth.isAuth? 
            <div style={{display:"flex", alignItems:"center"}}>
              <Text style={{marginRight: "10px", fontSize: "16px"}}>{auth.user.name}</Text>
              <motion.div style={{marginRight: "10px"}} whileHover={{ scale: 1.03 }}>
                <Link to="/settings">
                  {auth.user.profilePictureURL === "default" ?
                    <Avatar style={{cursor: "pointer"}} icon={<UserOutlined />} size={35} />
                  :
                    <Avatar style={{cursor: "pointer"}}src={auth.user.profilePictureURL} size={35} />
                  }
                </Link>
              </motion.div>
            </div>
          :
            <div style={{display:"flex", alignItems:"center"}}>
              <Link to="/login">
                <Button type="primary" icon={<UserOutlined />} size={'medium'}>
                  Login
                </Button>
              </Link>
            </div>
          }
        </div>

      </div>

    </div>
  );
}

export default Navbar;
