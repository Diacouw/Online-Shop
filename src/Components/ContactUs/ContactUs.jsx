import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contactus'>
            <div className="container">
                <div className="contactus-container">
                    <div className="contact-l">
                        <h3>Ways to Contact Us</h3>
                        <div className="socials">
                            <span className='social'>
                                <FaInstagram />
                            </span>
                            <span className="social">
                                <FaTelegram />
                            </span>
                            <span className="social">
                                <IoMail />
                            </span>
                        </div>
                    </div>
                    <div className="contact-r">
                        <form className='contact-form'>
                            <label className='form-label'>
                                <span>Enter your email to find out</span>
                                <span>about new products</span>
                            </label>
                            <div className="input-container">
                                <input type="email" placeholder='Enter Your Email' />
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs