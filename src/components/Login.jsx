import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import "./css/login.css"
import Swal from 'sweetalert2';

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

async function loginUser({
  username,
  password
}) {
  return fetch(BASE_URL + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.accessToken;
    });
}

export default function Login() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    if (token != null) {
      localStorage.setItem("token", token)
      localStorage.setItem("email", username)
      // setToken(token);
      navigate('/info');
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or password is incorrect!',
      })
    }

  }

  localStorage.setItem("email", username);

  return (
    <div className='login-container'>
      <div className='image-block'>
      </div>
      <div className='login-form-block'>
          <form onSubmit={handleSubmit}>
              <h1>Welcome Back 👋</h1>
              <p>
                Don't have an account? 
                <Link className='sign-up-link' to='/sign-up' style={{color:'#357234',marginLeft:2}}>
                  Sign Up
                </Link>
              </p>
              <input className='input' 
                     placeholder='Email'
                     type='email'
                     onChange={e => setUserName(e.target.value)}
              />
              <input className='input' 
                     placeholder='Password'
                     type='password'
                     onChange={e => setPassword(e.target.value)}
              />
              <p>
                I Agree with  
                <a style={{color:'#357234',cursor:'pointer'}}> Privacy Policy </a> 
                and  
                <a style={{color:'#357234',cursor:'pointer'}}> Terms of Service </a>
              </p>
              <button className='submit-button' 
                      style={{width:'100%',maxWidth:590}}
                      type="submit"
              >
                Sign in
              </button>
              <button className='fogot-password-button' 
                      style={{width:'100%',maxWidth:590}}
                      type='button'
              >
                Forgot Password
              </button>
          </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};