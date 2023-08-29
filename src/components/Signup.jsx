
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./css/login.css"
import Swal from 'sweetalert2';

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

async function signIn({
  name,
  password,
  username,
  country,
  county,
  city,
  phoneCode,
  phoneNumber,
  street,
  zipAreaCode,
  creditCard
}) {
  return fetch(BASE_URL + 'users/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      password,
      username,
      country,
      county,
      city,
      phoneCode,
      phoneNumber,
      street,
      zipAreaCode,
      creditCard
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((data)=> {
      console.log(data)
      return data.username
    });
}

export default function SignUp() {

  const [name, setUserName] = useState();
  const [password, setPassword] = useState();
  const [rpassword, setRassword] = useState();
  const [username,setEmail] = useState();
  const [country, setCountry] = useState();
  const [county, setCounty] = useState();
  const [city, setCity] = useState();
  const [phoneCode, setPhoneCode] = useState();
  const [phoneNumber, setPhoneNum] = useState();
  const [street, setStreet] = useState();
  const [zipAreaCode, setZip] = useState("zipArea")
  const [creditCard, setCredit] = useState("")

  const [step, setStep] = useState(true)
  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    if(password === rpassword){
    const info = await signIn({
      name,
      password,
      username,
      country,
      county,
      city,
      phoneCode,
      phoneNumber,
      street,
      zipAreaCode,
      creditCard
    });

    if (info != null) {
      Swal.fire({
        icon: 'success',
        title: 'Check code in mail',
      })
      navigate('/verify');
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or password is incorrect!',
      })
    }
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password and Repeat Password dont match!',
    })
  }
  }

  

  localStorage.setItem("email", username);

  return (
    <>
      <div className='box'></div>

      <div class="container" style={{paddingBottom:100}}>
        <div className="">
          <div className="">
           
            <div class='box'>

            </div>
          </div>
        </div>

        <div className="auth-wrapper" style={{marginTop:100}}>
          <div className="auth-inner">
            <form onSubmit={handleSubmit}>
              <div className='text-center'>
                <h3>Create a new account</h3>
                <figcaption class="blockquote-footer">
                  <cite>Please fill the form to continue</cite>
                </figcaption>
              </div>

              {
                step ?
                  <>
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={e => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        autocomplete='new-password'
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Repeat the password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat the password"
                        autocomplete='new-password'
                        onChange={e => setRassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid">
                      <button onClick={() => setStep(false)} className="btn btn-success">
                        Next step
                      </button>
                    </div>
                  </> :
                  <></>
              }
              {
                !step ?
                  <>
                    <div className="mb-3">
                      <label>Country</label>
                      <input
                        type="country"
                        className="form-control"
                        placeholder="Enter country"
                        autocomplete='off'
                        onChange={e => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>County</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter county"
                        onChange={e => setCounty(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city"
                        onChange={e => setCity(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Street name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter street"
                        onChange={e => setStreet(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>EirCode</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter EirCode"
                        onChange={e => setZip(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <label>Phone Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone code"
                        onChange={e => setPhoneCode(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                        onChange={e => setPhoneNum(e.target.value)}
                      />
                    </div>
                    <div className="d-grid">
                    {/* <button type="submit" className="btn btn-success">
                        Sign up
                      </button> */}
                      <button type="submit" className="btn btn-success">
                        Sign up
                      </button>
                    </div>
                  </>
                  : <></>
              }

              <p className="forgot-password text-right">
                Have you account ? <Link to='/sign-in'>Log in</Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

