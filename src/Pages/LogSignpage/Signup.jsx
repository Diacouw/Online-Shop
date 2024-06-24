import React from 'react'
import {Link} from 'react-router-dom'
import './LogSign.css'

const Signup = () => {
  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="username" required id='username' placeholder='Enter Your Username' />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="username" required id='email' placeholder='Enter Your Email' />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" required id='password'
                placeholder='Enter Your Password' />
            </div>
            <button type='submit' className='form-btn'>Login</button>
          </form>

          <p className='no-acc'>Already Have An Acount ?
            <span>
              <Link className='Link' to={'/login'}> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup