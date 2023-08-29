import * as React from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import logo from '../images/agri.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./css/verify.css";



const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

async function verify({
  username,
  confirmationCode
}) {
  return fetch(BASE_URL + 'registration/confirmation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      confirmationCode
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.username;
    });
}

function resends ({username}) {
    return fetch(BASE_URL + 'registration/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
        })
      });
}

const Verify = () => {
    const [confirmationCode, setValue] = React.useState("");
    const signout = () => {
        localStorage.setItem("token", null)
    }
    const navigate = useNavigate();

    const resend = () => {
        resends({
            username: localStorage.getItem("email")
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const info = await verify({
          username: localStorage.getItem("email"),
          confirmationCode
        });
    
        if (info != null) {
          navigate('/');
          Swal.fire({
            icon: 'success',
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Code is incorrect!',
          })
        }
    
      }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container d-flex justify-content-center">
                    <Link className="navbar-brand" to={'/sign-in'}>
                    </Link>
                </div>
                <div className="container d-flex justify-content-center">
                    <Link className="navbar-brand" to={'/sign-in'}>
                        <img src={logo} class='radius-img' alt="Logo" width={100} height={80} />
                    </Link>
                </div>
                <div className="container d-flex justify-content-center">
                    <Link className="navbar-brand" to={'/sign-in'}>
                        <button type="button" onClick={signout()} class="btn btn-outline-success">Sign out</button>
                    </Link>
                </div>
            </nav>
            <div class="container">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h3>Create a new account</h3>
                        <figcaption class="blockquote-footer">
                            <cite>Enter the confirmation code that we have sent to your email</cite>
                        </figcaption>
                        <form onSubmit={handleSubmit}>
                            <ReactInputVerificationCode onChange={setValue} value={confirmationCode} />
                            <button className="button-v" type="submit">Verify</button>
                            <a className='resend' onClick={resend}>Resend a confirmation code</a>
                        </form>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Verify

