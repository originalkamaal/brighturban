import React from 'react'
import MegaMenu from './MegaMenu';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

function Header(props) {


    const { currentUser } = props
    return (
        <>
            <div className='bg-blue-600 text-white h-16 flex flex-row items-center justify-between px-6'>
                <Logo />
                <Search />
                <Menu currentUser/>
            </div>
            <MegaMenu />
        </>

    )
}

Header.defaultProps = {
    currentUser: null
}


export default Header