import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-left">
                    <img className='footer-logo' src='./../src/Components/Footer/logo-color.png' alt="" />
                </div>
                <div className="footer-center">
                    <div className="contact-us">
                        <div className="email">
                            <p>Email Address :</p>
                            <p className='email-address'>Diacouw@gmail.com</p>
                        </div>
                        <div className="phone">
                            <p>Phone Num </p>
                            <p className='phone-num'>0935-7696-321</p>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="shop-address">
                        <p>Company Address : </p>
                        <div className='address'>
                            <p >Tehran , Tajrish ,Baq Ferdows,
                            </p>
                            <span>DiaCo Shop</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright' >© 2022 - 2024 www.DiaCoShop.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer