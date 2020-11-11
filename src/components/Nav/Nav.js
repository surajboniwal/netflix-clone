import logo from './../../assets/logo.png'
import './Nav.css'
import { FaSearch, FaBell, FaCaretDown, FaBars } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

function Nav() {

    const [show, handleNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                handleNav(true)
            } else handleNav(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='left'>
                <img className='logo' src={logo} alt='Logo'></img>
                <ul className='menu'>
                    <li><a>Browse</a></li>
                    <li><a>DVD</a></li>
                </ul>
            </div>
            <div className='right'>
                <a className='searchItem'><FaSearch className='searchIcon' /> Search </a>
                <FaBell className='bellIcon' />
                <FaBars onClick={() => console.log('Menu')} className='menuIcon' />
                <div className='profile'>
                    <img src='https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png' alt='Profile Image' ></img>
                    <a>SurajBoniwal<FaCaretDown className='dropdownIcon' /></a>
                </div>
            </div>
        </div>
    )
}

export default Nav
