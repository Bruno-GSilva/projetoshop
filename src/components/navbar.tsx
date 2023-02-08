import { useState } from 'react'
import image from "../assets/images/logo.png"

export default function Navbar() {
    return (
        <div className='w-full py-10 px-40 flex justify-between shadow-md relative left-0 top-0'>
            <img src={image} className="w-20 " />
            <div>
                <ul className='flex'>
                    <li><a href="#" className='hover:text-navbarLi hover:animate-wiggle p-size35x25 '>Home</a></li>
                    <li><a href="#" className='hover:text-navbarLi p-size35x25'>About</a></li>
                    <li><a href="#" className='hover:text-navbarLi p-size35x25'>Shop</a></li>
                    <li><a href="#" className='hover:text-navbarLi p-size35x25'>Blog</a></li>
                    <li><a href="#" className='hover:text-navbarLi p-size35x25'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}