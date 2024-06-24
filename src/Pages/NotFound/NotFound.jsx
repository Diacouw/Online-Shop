import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className="notfound-container">
                Error ! Page Not Found
                <span className="bckhome">
                    <Link className='Link' to={'/'}>Back To Home</Link>
                </span>
            </div>
        </div>
    )
}

export default NotFound