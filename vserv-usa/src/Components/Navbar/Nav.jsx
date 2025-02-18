import React from 'react'
import logo from '../../images/logo.png'
import { TfiWorld } from "react-icons/tfi";

function Nav() {
  return (
    <div>
      <div className='flex flex-row items-center justify-between w-full bg-white'>
        <img className='flex items-center h-24 p-3 ml-16' src={logo} alt="" />
        <div className='flex font-semibold text-xl gap-14'>
        <span>What We Do</span>
        <span>What We Think</span>
        <span>About VSERV</span>
        <span>Careers</span>
        <span>Contact Us</span>
        </div>
        <div className='flex m-3 text-2xl p-3'>
            <TfiWorld />
        </div>

      </div>
    </div>
  )
}

export default Nav
