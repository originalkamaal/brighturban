import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {GiShoppingBag} from 'react-icons/gi'

export default function Menu(props) {

    const navigate = useNavigate();
    const { currentUser } = props;
    
    const handleLogout = () => {
        auth.signOut();
        navigate("/");


    }
    return (
        <div className='flex flex-row items-center justify-center whitespace-no-wrap text-sm space-x-6'>
            <div className='hidden md:flex space-x-5 font-bold'>
                <div>Become Seller</div>
                {currentUser ? <div className='cursor-pointer' onClick={handleLogout}>Logout</div> : <div><Link to="/login">Login</Link></div>}
                <div>More</div>
            </div>
            <div className='font-bold text-xl'><GiShoppingBag/></div>
        </div>
    )
}
