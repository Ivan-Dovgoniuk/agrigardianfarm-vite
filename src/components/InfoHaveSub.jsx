import "./css/info.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function InfoHaveSub({ user }) {
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL


  const cancelSub = () => {
    axios.post(BASE_URL + "stripe-pay/cancel-subscription?email=" + localStorage.getItem("email"))
    .then(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Subcribe is cancelled',
          // text: 'Email or password is incorrect!',
        })
      }
    ).then(()=>{
      navigate("/")
    })
  }

  return (
    <>
      <div className="auth-wrapper">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <header class="masthead text-center back-image">
          <div class="">
            <div class="">
              <div class="">
                <h1 class="mb-4">You have an <div class='active'>active</div> subscription!</h1>
                <h2 class="m-0"> Subscription starts: {user.userInfo.startSubscribeDate}</h2>
                <h2 class="m-0"> Subscription expires: {user.userInfo.endSubscribeDate}</h2>
                <button type="button" class="btn btn-dark" onClick={cancelSub}>Cancel subscription</button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}