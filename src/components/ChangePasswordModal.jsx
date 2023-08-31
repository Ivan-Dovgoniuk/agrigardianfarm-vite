import "./css/change-password.css"
import crossIcon from "../images/cross-icon.png"
import iconSuccess from "../images/purchase-success.png"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

export const ChangePasswordModal = ({
  setIsChangePasswordModalVisible
})=>{

  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [newPasswordRepeat,setNewPasswordRepeat] = useState('')
  const [isPasswordCorrect,setIsNewPasswordCorrect] = useState(false)

  useEffect(()=>{
    if(newPassword == newPasswordRepeat && newPasswordRepeat.length !=0 ){
      setIsNewPasswordCorrect(true)
    }else(
      setIsNewPasswordCorrect(false)
    )
  },[newPasswordRepeat])

  const hundleSubmit=(event)=>{
    event.preventDefault();
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      },
      body:JSON.stringify({
        newPassword: newPassword,
        oldPassword: oldPassword
      })
    };
    fetch(`${BASE_URL}users/master/password/edit`,params)
    .then(response =>{
      console.log(response)
      if(response.status == 200){
        Swal.fire({
          imageUrl:iconSuccess,
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: 'Custom image',
          title: 'Password successfully changed!',
          color:'green'
      })
      setIsChangePasswordModalVisible(false)
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
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
      <div className="change-password-modal-container">
        <div className="change-password-modal-header">
          <h2>Change Password</h2>
          <a className="change-password-modal-close-button" onClick={()=>setIsChangePasswordModalVisible(false)}>
            <img src={crossIcon}/>
          </a>
        </div>
          <div className="change-password-modal-form-block">
                <form onSubmit={hundleSubmit}>
                <label for='old-password' style={{marginBottom:0}}>Enter old password</label>
                <input 
                    id="old-password"
                    className="change-password-modal-input" 
                    placeholder="Old password" 
                    type='text'
                    value={oldPassword}
                    onChange={(e)=>setOldPassword(e.target.value)}/>
                <label for='new-password' style={{marginBottom:0}}>Enter new password</label>
                <input 
                    id="new-password"
                    className="change-password-modal-input" 
                    placeholder="New password" 
                    type='text'
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}/>
                <label for='second-new-password' style={{marginBottom:0}}>Repeat the new password</label>
                <input 
                    id="second-new-password"
                    className="change-password-modal-input" 
                    placeholder="New password" 
                    type='text'
                    value={newPasswordRepeat}
                    onChange={(e)=>setNewPasswordRepeat(e.target.value)}/>
                <button className="change-password-modal-button" type="submit" disabled={!isPasswordCorrect}>
                  {isPasswordCorrect ? 'Change password' : 'Fill in all fields'}
                </button>
                </form>
          </div>
      </div>
  </div>
  )
}