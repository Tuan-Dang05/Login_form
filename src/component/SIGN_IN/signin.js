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
                                <a href>Forgot Password</a>
                            </label>
                            <div className="clear" />
                            <div className="submit-agileits">
                                <input type="submit" defaultValue="Login" value="Login" />
                            </div>
                            <div className="another-login">
                                <p>Or login with</p>
                                <i className="fab fa-facebook-f" />
                                <i className="fab fa-google" onClick={google}/>
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
// /auth/userinfo.email
	// /auth/userinfo.profile
	// 599875005570-1assl06808a63q5j7brvehlp5ieqgp2b.apps.googleusercontent.com
// Password 
const CLIENT_ID	= "599875005570-1assl06808a63q5j7brvehlp5ieqgp2b.apps.googleusercontent.com";
const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&
response_type=token&
redirect_uri=https://nha-que-di-code.vercel.app/&
client_id=${CLIENT_ID}`;

function google(){
	window.location.href = LINK_GET_TOKEN;
}
// Lấy token 
const getToken = () => {
	const saveAccessToken = window.localStorage.getItem("access_token");
	if (saveAccessToken) {
	return saveAccessToken;
	} else {
	const url = new URLSearchParams (window.location.hash.substring(1));
	const token = url.get("access_token");
	window.localStorage.setItem("access_token");
	return token;
	}
	};
	const getUserInfo = async () => {
	const accessToken = getToken();
	const respone = await fetch(
	`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
	);
	const data = await respone.json();
	renderUI(data);
	};
	getUserInfo();
const renderUI = (data) => {
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const mail = document.getElementById("mail");
avatar.src = data.picture;
name.innerText = data.name;
mail.innerText = data.email;
};
