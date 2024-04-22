import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
         <form action method="POST" className="form" id="form-1" style={{margin:'0 auto',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
  <h3 className="heading">Đăng ký</h3>
  <p className="desc">Cùng nhau khám phá hệ sinh thái của nhà quê đi code ❤️</p>
  <div className="spacer" />
  <div className="form-group">
    <label htmlFor="fullname" className="form-label">Tên đầy đủ</label>
    <input id="fullname" name="fullname" type="text" placeholder="VD: Tuấn Đặng" className="form-control" required/>
    <span className="form-message" />
  </div>
  <div className="form-group">
    <label htmlFor="email" className="form-label">Email</label>
    <input id="email" name="email" type="email" placeholder="VD: email@domain.com" className="form-control" required />
    <span className="form-message" />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="form-label">Mật khẩu</label>
    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" required />
    <span className="form-message" />
  </div>
  <div className="form-group">
    <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
    <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" className="form-control"  required/>
    <span className="form-message" />
  </div>
  <button className="form-submit">Đăng ký</button>
  <div className style={{marginTop: 10, fontSize: 12}}>Bạn đã có tài khoản? <span> <Link to='/' style={{color: '#ff6f00',cursor:'pointer'}}>Đăng nhập ngay!</Link></span></div>
</form>
 
        </div>
    );
}

export default Signup;
