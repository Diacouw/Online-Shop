import React from 'react'
import {Link} from 'react-router-dom'
import './LogSign.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="username" required id='username' placeholder='Enter Your Username Or Email' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required id='password'
                                placeholder='Enter Your Password' />
                        </div>
                        <button type='submit' className='form-btn'>Login</button>

                        <p className='forgot-p'>Forgot Password ?</p>
                    </form>

                    <p className='no-acc'>No Acount ?
                        <span>
                            <Link className='Link' to={'/signup'}> Create One</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login