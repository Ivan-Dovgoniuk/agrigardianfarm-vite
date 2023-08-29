import checkIcon from '../images/check-icon.png'
import paymentHistoryIcon from '../images/payment-history-icon.png'
import youtubeIcon from '../images/youtube-icon.png'

export const Subscription =({
  setIsConfirmVisible,
  setIsPaymentHistoryVisible,
})=>{

  return(
    <>
    <div className="subscription-plan">
      <p style={{marginBottom:5,color:'rgba(0, 0, 0, 0.70)'}}>
        Subscription Plan:
      </p>
      <span style={{color:'#000'}}>
        You have an active subscription
      </span>
    </div>
    <div className="subscription-info-block">
      <div className="subscription-title-block">
          <img src={checkIcon}/>
          <div className="subscription-price">
            <h3>
              Annual
            </h3>
            <p>
              €10.99
            </p>
          </div>
      </div>
      <div className='subscription-dates'>
          <p>
            <span style={{marginRight:74,color:'rgba(0, 0, 0, 0.40)',fontWeight:'500'}}>
              Start:
            </span>
            <span style={{fontWeight:'500'}}>
              07 Feb 23
            </span>
          </p>
          <p>
            <span style={{marginRight:63,color:'rgba(0, 0, 0, 0.40)',fontWeight:'500'}}>
              Expire:
            </span>
            <span style={{fontWeight:'500'}}>
              07 Feb 23
            </span>
          </p>
          <p>
            <span style={{marginRight:20,color:'rgba(0, 0, 0, 0.40)',fontWeight:'500'}}>
              Next Billing:
            </span>
            <span style={{fontWeight:'500'}}>
              07 Feb 23
            </span>
          </p>
      </div>
      <div className='subscription-buttons'>
        <a style={{width:'100%'}}>
            <button className="subscription-button" 
                    style={{marginTop:0}}
                    onClick={()=>setIsConfirmVisible(true)}
            >
              Cancel Subscription
            </button>
        </a>
        <button className='payment-history-button'
                onClick={()=>setIsPaymentHistoryVisible(true)}
        >
            <img src={paymentHistoryIcon}/>
        </button>
      </div>
    </div>
    <div className='youtube-block'>
          <p>
          Learn how to get the most from AgriGuardian <br/> and how to videos on our YouTube Channe
          </p>
          <div className='youtube-link'>
            <img src={youtubeIcon}/>
            <a href='https://youtu.be/_4aJ_U9VOuk' style={{color:'#357234',cursor:'pointer'}}>
              Watch Video On YouTube
            </a>
          </div>
      </div>
    </>
  )
}