
import './login.css';
import React, { useState } from 'react';
import KakaoLoginBtn from '../../components/KakaoLoginBtn'
import NaverLoginBtn from '../../components/NaverLoginBtn'




function Login({}) {
  return (
    <div className="Login">
        <KakaoLoginBtn />
        <NaverLoginBtn />
    </div>
  );
}

export default Login;
