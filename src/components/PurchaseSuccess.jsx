import purchaseSuccessLogo from "../images/purchase-success.png"
import "./css/purchase-success.css"

export const PurchaseSuccess = ({
  setIsPurchaseSuccess
})=>{
  return(
    <div className="purchase-success-container">
      <div className="purchase-success-content">
        <img src={purchaseSuccessLogo}/>
        <h3>Thank you for your purchase!</h3>
        <button onClick={()=>setIsPurchaseSuccess(false)}>
          Go back to My Profile
        </button>
        <p className="useful-links-title">Useful Links:</p>
        <p className="useful-links">
          <a href="https://agriguardian.farm/?page_id=1700" style={{color:'#357234'}}>
            Download
          </a>
          |    
          <a href="https://agriguardian.farm/?page_id=840" style={{color:'#357234'}}>
            FAQ
          </a>
        </p>
        <p style={{maxWidth:400,textAlign:'center'}}>
         Learn how to get the most from AgriGuardian and how to videos on our YouTube Channel
        </p>
        <a href="https://youtu.be/_4aJ_U9VOuk" style={{color:'#357234',cursor:'pointer'}}>
          Watch Video On YouTube
        </a>
      </div>
    </div>
  )
}