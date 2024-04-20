import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

  const Signin = () => {
    
    return (
        <div>

            <form action method="POST" className="form" id="form-2" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <h3 className="heading">Đăng Nhập</h3>
                <p className="desc" style={{marginBottom:'-15px'}}>Cùng nhau khám phá hệ sinh thái của nhà quê đi code ❤️</p>
                <div className="spacer" />
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="email" placeholder="VD: email@domain.com" className="form-control" required/>
                    <span className="form-message" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" required/>
                    <span className="form-message" />
                </div>
                <button className="form-submit">Đăng nhập</button>
                <h4 style={{ fontSize: 15, color: '#636D77', fontWeight: 500, marginTop: 20 }}>OR</h4>
                <div className="form-submit-fb" style={{ backgroundColor: '#0765FE' }}>
                    <i className="fab fa-facebook" style={{ fontSize: 22, float: 'left' }} />
                    <span>Đăng nhập với Facebook</span>
                </div>
                <div className="form-submit-fb" style={{ border: '1px solid black', backgroundColor: 'white', color: 'rgb(124, 124, 124)' }} onClick={google}>
                    <img src="./image/gg.png" width={23} alt="gogle" style={{ float: 'left', marginTop: '-3px' }} />
                    <span>Đăng nhập với Google</span>
                </div>
                <div className style={{ marginTop: 10, fontSize: 12 }}>Bạn chưa có tài khoản? <span> <Link to="/signup" style={{ color: '#ff6f00',cursor:'pointer' }}> Đăng kí ngay!</Link></span></div>
            </form>

        </div>
    );
}

export default Signin;
const CLIENT_ID = "599875005570-1assl06808a63q5j7brvehlp5ieqgp2b.apps.googleusercontent.com";
const LINK_GET_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&
response_type=token&
redirect_uri=https://nha-que-di-code.vercel.app/&
client_id=${CLIENT_ID}`;

function google(){
    window.location.href = LINK_GET_TOKEN;
}