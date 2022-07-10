import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi'
import { AuthContext } from '../../contexts/authContext';

export default function Menu() {



    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    console.log(user);

    const handleLogout = () => {

        logout();
        navigate('/')
    }
    return (
        <div className='flex flex-row items-center justify-center whitespace-no-wrap text-sm space-x-6'>
            <div className='hidden md:flex space-x-5 font-bold'>
                <div>Become Seller</div>
                {user ?
                    <>
                        <div onClick={handleLogout} className="cursor-pointer">Logout</div>
                    </>
                    :
                    <>

                        <div><Link to="/login">Login</Link></div>
                        <div><Link to="/register">Sign Up</Link></div>
                    </>
                }
                <div>More</div>
            </div>
            <div className='font-bold text-xl'><GiShoppingBag /></div>
        </div>
    )
}
