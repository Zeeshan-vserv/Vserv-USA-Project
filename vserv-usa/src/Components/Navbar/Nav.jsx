import React from 'react'
import logo from '../../images/logo.png'
import { TfiWorld } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className='flex flex-row items-center justify-between w-full bg-white'>
        <img className='flex items-center h-24 p-3 ml-16' src={logo} alt="" />
        <div className='flex font-semibold text-xl gap-14'>
        <Link to="/home">What We Do</Link>
        <span>What We Think</span>
        <span>About VSERV</span>
        <Link to="https://vservjobs.com/" target='_blank'>Careers</Link>
        <Link to="/contactus">Contact Us</Link>
        </div>
        <div className='flex m-3 text-2xl p-3'>
            <TfiWorld />
        </div>

      </div>
    </div>
  )
}

export default Nav
