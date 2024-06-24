import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { StoreContext } from '../../Context/Context';
import './Navbar.css'


const Navbar = () => {


    const { categorys, lastBasket, basket } = useContext(StoreContext)


    const [colorful, setColorful] = useState(false)
    const [subnav, setSubnav] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    // const [seeSideMenu , setSeeSideMenu]=useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 250 ? setColorful(true) : setColorful(false);


        })
    }, [window.scrollY])



    const completeCloseMenu = () => {
        setShowMobileMenu(false)
        setSubnav(false)
    }


    console.log(lastBasket)


    return (
        <nav className={`navbar ${colorful ? 'colorful' : ''}`}>
            <div className="container">
                <div className="nav-container">

                    <div className="nav-left">
                        <div className="logo-container">
                            <img className='nav-logo' src='./../src/Components/Navbar/logo-no-background.png' alt="" />
                        </div>
                    </div>
                    <div className="nav-center">
                        {
                            showMobileMenu ? <IoMdClose className='nav-item-menubar'
                                onClick={() => { completeCloseMenu() }} />
                                : <AiOutlineMenu className='nav-item-menubar'
                                    onClick={() => setShowMobileMenu(true)} />
                        }

                        <ul className={`nav-items ${showMobileMenu ? 'active-items' : ''}`}>
                            <li className={`nav-item`}
                                onClick={() => completeCloseMenu()}
                            >
                                <Link to={'/'} className='Link'>Home
                                </Link>
                            </li>

                            <li className={`nav-item`} onClick={() => setSubnav(!subnav)}>Products <FaCaretDown />
                            </li>
                            <div className={`subnav-prod ${colorful ? 'sub-nav-color' : ''} ${subnav ? 'subnav-see' : ''}`}>
                                <ul>
                                    {
                                        categorys.map((item, index) => (
                                            <Link
                                                key={index}
                                                className='Link' to={`/product/${item}`}>
                                                <li
                                                    onClick={() => completeCloseMenu()}
                                                    className='category-item'>
                                                    {item}
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                            <li className={`nav-item`}
                                onClick={() => completeCloseMenu()}
                            >
                                <Link className='Link' to={'/contact'}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className={`nav-item`}
                                onClick={() => completeCloseMenu()}
                            >
                                <Link className='Link' to={'/aboutus'}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className={`button-container ${colorful ? '' : 'shadow'}`}>
                            <button>
                                <Link className='Link' to={'/login'} >
                                    Login / Sig Up
                                </Link>
                            </button>
                        </div>
                        <div className="nav-basket-container">
                            <Link className='Link' to={'/basket'}>
                                <MdOutlineShoppingCart className='basket-logo' />
                                <span className='product-counter'>{lastBasket.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar