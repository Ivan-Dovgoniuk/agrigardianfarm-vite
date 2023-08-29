import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import logo from '../images/agri.png';
import { Link } from "react-router-dom";

import "./css/checkout.css"

const stripePromise = loadStripe("key");

export default function Payment() {
  const signout = () => {
    localStorage.setItem("token", null)
  }
  return (
    <div>
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
      <br />
      <br />
      <br />
      <br />

      <header class="masthead text-center back-image">
        <div class="auth-inner">
          <div class="text-center">
            <div className="sr-root">
              <div className="sr-main">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}