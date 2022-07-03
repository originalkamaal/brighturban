import React from 'react'
import { italicLogo, underlineLogo } from '../../configs/site'
import MegaMenu from './MegaMenu';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';

function Header(props) {

    const navigate = useNavigate();
    const handleLogout = () => {
        auth.signOut();
        navigate("/");


    }

    const { currentUser } = props
    const logoStyle = "hidden md:flex font-extrabold text-2xl " + (italicLogo ? "italic " : "") + (underlineLogo ? "underline " : "");
    return (
        <>
            <div className='bg-blue-600 text-white h-16 flex flex-row items-center justify-between px-6'>
                <div className='flex flex-row whitespace-no-wrap'>
                    <div className='flex md:hidden'>|||</div>
                    <div className={logoStyle}>BrightUrban</div>
                </div>
                <div className='hidden md:flex w-1/3 flex-row whitespace-no-wrap'>
                    <input type='text' className='shadow-md w-full px-3 py-1 bg-white text-gray-900 text-sm rounded-l-md h-8 flex outline-none focus:outline-none items-center' placeholder='Search' />
                    <button className='shadow-md bg-black text-white px-3 rounded-r-md h-8 flex outline-none focus:outline-none items-center'>Search</button>
                </div>


                <div className='flex flex-row whitespace-no-wrap text-sm space-x-6'>
                    <div className='hidden md:flex space-x-5 font-bold'>
                        <div>Become Seller</div>
                        {currentUser ? <div className='cursor-pointer' onClick={handleLogout}>Logout</div> : <div><Link to="/login">Login</Link></div>}
                        <div>More</div>
                    </div>
                    <div className='font-bold'>Cart</div>
                </div>



            </div>
            <MegaMenu />
        </>

    )
}

Header.defaultProps = {
    currentUser: null
}


export default Header