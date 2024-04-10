import React, { useState } from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import  { Redirect } from 'react-router-dom';
import './signin.css';
// import Signup from '../SIGN_UP/signup';
const Signin = () => {
    const [passwordType, setPasswordType] = useState('password');

    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    return (
        <div>
      {/* <BrowserRouter> */}
            <div>
                {/*header*/}
                <div className="header-w3l" style={{ marginTop: '-32px' }}>
                    <h1>Login </h1>
                </div>
                {/*main*/}
                <div className="main-agileinfo">
                    {/*form-stars-here*/}
                    <div className="wthree-form">
                        <h2>HR - The Key to Business Success.</h2>
                        <form action="#" method="post">
                            <div className="form-sub-w3">
                                <input type="text" name="Username" placeholder="Username " required />
                                <div className="icon-w3">
                                    <i className="fa fa-user" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="form-sub-w3">
                                <input type={passwordType} name="Password" id="password" placeholder="Password" required />
                                <div className="showPass">
                                    <i
                                        className={`fas fa-eye${passwordType === 'password' ? '' : '-slash'}`}
                                        id="eye1"
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                                <div className="icon-w3">
                                    <i className="fa fa-unlock-alt" aria-hidden="true" />
                                </div>
                            </div>
                            <label className="anim">
                                <input type="checkbox" className="checkbox" />
                                <span>Remember Me</span>
                                <a href="#">Forgot Password</a>
                            </label>
                            <div className="clear" />
                            <div className="submit-agileits">
                                <input type="submit" defaultValue="Login" value="Login" />
                            </div>
                            <div className="another-login">
                                <p>Or login with</p>
                                <i className="fab fa-facebook-f" />
                                <i className="fab fa-google" />
                            </div>
                            <footer style={{ fontSize: 'clamp(10px,3vw,15px)' }}>
                                <span>Do not have an account?</span>
                                <span><Link to="/signup"  style={{ textDecoration: 'none', color: 'rgb(53, 215, 215)' }}>Register now!</Link></span>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
     

            {/* <Routes>
                        <Route path="/signup" element={<Signup/>} />
                    
                      </Routes> */}
         
            {/* </BrowserRouter> */}

        </div>
    );
}

export default Signin;
