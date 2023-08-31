import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"


const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

export const PaymentForm =()=>{

  const [email,setEmail] = useState('')
  const [coupon,setCoupon] = useState('')

  const plan = 'monthly'

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);
    console.log(token.id)
    console.log(email)
    console.log(plan)
    if (error) {
      console.error(error);
    } else {
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
  fetch(`${BASE_URL}/create-subscription?email=` + email + "&token=" + token.id + "&plan=" + plan + "&coupon=" + coupon, params)
  .then(response => response.json())
  .catch(error => {
    console.error("An error occurred:", error);
  });
    }
  };
  
  return(
    <form className="card-container" onSubmit={handleSubmit}>
      <h3>Make a payment</h3>
      <p>Enter credit or debit card below</p>
      <CardElement className="card-element"
       options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}/>
      <input className="payment-input" 
             placeholder="Email" 
             type='email'
             onChange={(e)=>setEmail(e.target.value)}/>
      <input className="payment-input"
             placeholder="Cupon code(optional)" 
             type='text'
             onChange={(e)=>setCoupon(e.target.value)}/>
      <button className="pay-button" type="submit">Pay</button>
    </form>
  )
}