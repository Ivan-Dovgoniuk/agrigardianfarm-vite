import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import "./css/checkout.css"
import "./css/payment.css"
import { PaymentForm } from "./PaymentForm"


export default function Payment (){

  const stripePromise = loadStripe("pk_live_51Kt9pVDXVoonsbUB1jP6gcD5kha0sL0oO2DytvTf9pOzRTrfVNWVTJ2fxnoBIx43HaNdAysc6kTnQNf8YGW7SEpG007WKFRjzw");

  return(
    <div className="payment-page">
        <div className="breadcrumbs">
                <p><a href="https://agriguardian.farm/">Home </a>/ <span>User Profile</span> / <span> Payment </span></p>
        </div>
        <div className="payment-content">
          <div className='payment-image-block'/>
          <div className="payment-form-block">
              <Elements stripe={stripePromise}>
                <PaymentForm/>
              </Elements>
          </div>
        </div>
    </div>
  )
} 