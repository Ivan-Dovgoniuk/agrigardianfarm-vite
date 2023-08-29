import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import "./css/payment-modal.css";
import { PaymentFormModal } from "./PaymentFormModal";
import crossIcon from "../images/cross-icon.png";



export const PaymentModal = ({
  setIsPaymentModalVisible,
  plan
})=>{

  const stripePromise = loadStripe("pk_live_51Kt9pVDXVoonsbUB1jP6gcD5kha0sL0oO2DytvTf9pOzRTrfVNWVTJ2fxnoBIx43HaNdAysc6kTnQNf8YGW7SEpG007WKFRjzw");

return(
  <div className="modal-background">
      <div className="payment-modal-container">
        <div className="payment-modal-header">
          <h2>Make a payment</h2>
          <a className="payment-modal-close-button" onClick={()=>setIsPaymentModalVisible(false)}>
            <img src={crossIcon}/>
          </a>
        </div>
          <div className="payment-modal-form-block">
                <Elements stripe={stripePromise}>
                  <PaymentFormModal plan={plan}/>
                </Elements>
          </div>
      </div>
  </div>
)
}