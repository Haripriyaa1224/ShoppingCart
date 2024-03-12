import React from 'react'
import { FaCartPlus } from "react-icons/fa";

export const Navbar = () => {
    
  return (
    <div style={{
        display: 'flex',
       justifyContent: 'space-around',
       alignItems: 'center',
        backgroundColor:'#645CFF',
        color:'white',
        height:'40px'
    }}><h1>UseReducer</h1>
    <h1><FaCartPlus /></h1>
    </div>
  )
}
