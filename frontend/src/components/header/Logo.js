import React from 'react'
import { italicLogo, underlineLogo } from '../../configs/site'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Logo() {
    const logoStyle = "hidden md:flex font-extrabold text-2xl " + (italicLogo ? "italic " : "") + (underlineLogo ? "underline " : "");

    return (
        <div className='flex flex-row whitespace-no-wrap'>
            <div className='flex md:hidden'><GiHamburgerMenu/></div>
            <div className={logoStyle}>BrightUrban</div>
        </div>
    )
}
