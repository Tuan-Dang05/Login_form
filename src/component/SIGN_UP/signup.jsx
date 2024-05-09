import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordType2,setPasswordType2] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const togglePasswordVisibility2 = () => {
    setPasswordType2(passwordType2 === 'password' ? 'text' : 'password');
  };



  const chechRePass = () => {
    const pass = document.getElementById('password');
    const re_pass = document.getElementById('re_pass');
    const password_confirmation = document.getElementById('password_confirmation');
    if (password_confirmation.value !== pass.value) {
      re_pass.classList.remove('d-none');
      re_pass.classList.add('d-block');
      console.log(re_pass)
    } else {
      re_pass.classList.remove('d-block');
      re_pass.classList.add('d-none');
      console.log(true)
    }
  }
  const checkFull = (event) => {
    event.preventDefault();
    const register_alert = document.getElementById('register_alert');
    const password = document.getElementById('password');
    const password_confirmation = document.getElementById('password_confirmation');
    if (password_confirmation.value !== password.value) {
      console.log(password_confirmation)
      console.log(password)
      register_alert.classList.remove("d-none");
      register_alert.classList.add("d-block");
      register_alert.style.backgroundColor = 'red'
      register_alert.innerHTML = "Đăng Nhập Thất Bại!"
    } else {
      register_alert.style.backgroundColor = '#20C779'
      register_alert.innerHTML = "Đăng Nhập Thành Công!"
    }

  }
  //   function handleClick(event) {
  //     event.preventDefault();
  //     // Thêm mã xử lý khác tại đây nếu cần
  // }
  return (
    <div>
      <div style={{ backgroundColor: '#20C779', margin: '0 auto', top: '10%', left: '50%', transform: 'translate(-50%,-10%)', zIndex: '999' }} className='position-absolute p-3 fs-4 fw-bolder justify-content-center col-2 text-center register_alert d-none text-light' id='register_alert'></div>
      {/* <div style={{backgroundColor:'#20C779',margin:'0 auto',top:'10%',left:'50%', transform:'translate(-50%,-10%)',zIndex:'999'}} className='position-absolute p-3 fs-4 fw-bolder justify-content-center col-2 text-center register_alert d-none text-light' id='register_alert2'>Đăng kí thành công!</div> */}
      {/* <div style={{backgroundColor:'#20C779'}} className='position-absolute p-3 fs-4 fw-bolder'>Đăng kí thành công!</div> */}
      <form action method="POST" className="form" id="form-1" style={{ margin: '0 auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <h3 className="heading">Đăng ký</h3>
        <p className="desc">Cùng nhau khám phá hệ sinh thái của nhà quê đi code ❤️</p>
        <div className="spacer" />
        <div className="form-group">
          <label htmlFor="fullname" className="form-label">Tên đăng nhập</label>
          <input id="fullname" name="fullname" type="text" placeholder="VD: Tuấn Đặng" className="form-control" required />
          <span className="form-message" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" placeholder="VD: email@domain.com" className="form-control" required />
          <span className="form-message" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input id="password" name="password" type={passwordType} placeholder="Nhập mật khẩu" className="form-control" required />
          <span id='showPass' style={{ position: 'absolute', right: 50, marginTop: '40px', fontSize: '15px', color: 'gray', cursor: 'pointer' }}>
            <i
              className={`fas fa-eye${passwordType === 'password' ? '' : '-slash'}`}
              id="eye1"
              onClick={togglePasswordVisibility}
            ></i>
          </span>
          <span className="form-message" />
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
          <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type={passwordType2} className="form-control" required onInput={chechRePass} />

          <span id='showPass' style={{ position: 'absolute', right: 50, marginTop: '40px', fontSize: '15px', color: 'gray', cursor: 'pointer' }}>
            <i
              className={`fas fa-eye${passwordType2 === 'password' ? '' : '-slash'}`}
              id="eye1"
              onClick={togglePasswordVisibility2}
            ></i>
          </span>
          <span className="form-message text-danger d-none" id="re_pass" >Mật khẩu nhập lại không chính xác!</span>
        </div>
        <button className="form-submit" id='register' onClick={checkFull}>Đăng ký</button>
        <div className style={{ marginTop: 10, fontSize: 12 }}>Bạn đã có tài khoản? <span> <Link to='/' style={{ color: '#ff6f00', cursor: 'pointer' }}>Đăng nhập ngay!</Link></span></div>
      </form>

    </div>
  );
}

export default Signup;
