import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <div>
                {/*header*/}
                <div className="header-w3l-up">
                    <h1>Register</h1>
                </div>
                {/*main*/}
                <div className="main-agileinfo-up">
                    {/*form-stars-here*/}
                    <div className="wthree-form-up">
                        <h2>HR: Driving Success Through People.</h2>
                        <form action="#" method="post">
                            <div className="form-sub-w3-up">
                                <input type="text" name="Username" placeholder="Username " required />
                                <div className="icon-w3-up">
                                    <i className="fa fa-user" aria-hidden="true" />
                                </div>
                            </div>
                            <div className="form-sub-w3-up">
                                <input type="email" name="Email" placeholder="Email " required />
                                <div className="icon-w3-up">
                                    <i className="far fa-envelope" />
                                </div>
                            </div>
                            <div className="form-sub-w3-up">
                                <input type="password" name="password" id="password" placeholder="Password " required />
                                {/* pass */}
                                <div className="showPass-up">
                                    <i className="far fa-eye fa-regular" id="eye1" />
                                </div>
                                <div className="icon-w3-up">
                                    <i className="fas fa-unlock-alt" />
                                </div>
                            </div>
                            <div className="form-sub-w3-up">
                                <input type="password" name="password" id="re-password" placeholder="Re-Enter the password " required />
                                {/* re-pass */}
                                <div className="showPass-up">
                                    <i className="far fa-eye fa-regular" id="eye" />
                                </div>
                                <div className="icon-w3-up">
                                    <i className="fa-solid fa-key" />
                                </div>
                            </div>
                            {/* <div class="clear-up"></div> */}
                            <div className="submit-agileits-up">
                                <input type="submit" defaultValue="Register" />
                            </div>
                            <div className="another-login-up">
                                <p>Or register with</p>
                                <i className="fab fa-facebook-f" />
                                <i className="fab fa-google" />
                            </div>
                            <footer style={{ fontSize: 'clamp(10px,3vw,15px)' }}>
                                <span>You already have an account?</span>
                                <span><Link to="/"  style={{ textDecoration: 'none', color: 'rgb(53, 215, 215)' }}>Login now!</Link></span>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signup;
