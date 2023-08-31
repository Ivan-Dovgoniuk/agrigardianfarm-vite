import "./css/voucher-modal.css";
import crossIcon from "../images/cross-icon.png";
import { useState } from "react";
import Swal from "sweetalert2";
import iconUnsuccess from "../images/nopayments-icon.png"

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

export const VoucherModal = ({
  setIsVoucherModalVisible,
  setIsPurchaseSuccess,
  email
})=>{

  const [voucherCode,setVoucherCode] = useState('')

  const hundleSubmit=(event)=>{
    event.preventDefault();
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      },
    };
    fetch(`${BASE_URL}stripe-pay/create-subscription-voucher?email=` + email + "&voucherCode=" + voucherCode,params)
    .then(response =>{
      if(response.status == 200){
        setIsPurchaseSuccess(true)
        setIsVoucherModalVisible(false)
      }else{
        Swal.fire({
          imageUrl:iconUnsuccess,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: 'Custom image',
          title: 'Voucher code is not correct!',
          color:'red'
      })
      }
    })
    .catch(error => {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  }

return(
  <div className="modal-background">
      <div className="voucher-modal-container">
        <div className="voucher-modal-header">
          <h2>Use voucher</h2>
          <a className="voucher-modal-close-button" onClick={()=>setIsVoucherModalVisible(false)}>
            <img src={crossIcon}/>
          </a>
        </div>
          <div className="voucher-modal-form-block">
                <p>Enter a voucher code below</p>
                <form onSubmit={hundleSubmit}>
                <input 
                    className="voucher-modal-input" 
                    placeholder="Voucher Code" 
                    type='text'
                    value={voucherCode}
                    onChange={(e)=>setVoucherCode(e.target.value)}/>
                <button className="voucher-modal-button" type="submit">
                  Use
                </button>
                </form>
          </div>
      </div>
  </div>
)
}