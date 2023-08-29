import axios from "axios";
import Swal from "sweetalert2";
import icon from "../images/nopayments-icon.png"

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

export const ConfirmModal = ({
  setStatus,
  setIsConfirmVisible
}) => {

  const cancelSub = () => {
    axios.post(BASE_URL + "stripe-pay/cancel-subscription?email=" + localStorage.getItem("email"))
    .then(
      res => {
        Swal.fire({
          imageUrl:icon,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: 'Custom image',
          title: 'Sorry to see you leave!',
        })
      }
    ).then(()=>{
      setStatus('HAVE_NOT_SUB')
      setIsConfirmVisible(false)
    })
  }

  return(
    <>
      <div className="modal-background"/>
      <div className="confirm-modal">
        <h3>
          Confirm Action
        </h3>
        <p>
          Agriculture accounts for <br/>
          over 50% of workplace fatalities while only making up 5% of the workforce
        </p>
        <div className="confirm-buttons">
          <button className="cancel-button"
            onClick={cancelSub}
          >
            Cancel Subscription
          </button>
          <button className="back-button"
                  onClick={()=>setIsConfirmVisible(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  )
}