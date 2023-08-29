import { Popular } from "./Popular"

export const UnsubscriptionCards = ({
  setPlan,
  setIsPaymentModalVisible
})=>{

  const handleGetSubscription=(plan)=>{
    setPlan(plan)
    setIsPaymentModalVisible(true)
  }

  return(
    <>
    <div className="unsubscription-item">
      <h3 className="unsubscription-title">
        Monthly
      </h3>
      <h3 className="unsubscription-price">
        €10.99
      </h3>
      <ul className="unsubscription-list">
        <li>
          Unlimited users
        </li>
        <li>
          Recurring Billing
        </li>
        <li>
          Cancel Anytime
        </li>
      </ul>
      <a onClick={()=>handleGetSubscription('monthly')}>
        <button className="unsubscription-button">
          Get Subscription
        </button>
      </a>
  </div>
  <div className="unsubscription-item">
    <div className="unsubscription-header-block">
      <h3 className="unsubscription-title">
        Annual
      </h3>
      <Popular/>
      </div>
      <h3 className="unsubscription-price">
        €99.99
      </h3>
      <ul className="unsubscription-list">
        <li>
          Unlimited users 
        </li>
        <li>
          Recurring Billing
        </li>
        <li>
          Cancel Anytime
        </li>
      </ul>
      <a onClick={()=>handleGetSubscription('annual')}>
        <button className="unsubscription-button">
          Get Subscription
        </button>
      </a>
  </div>
  <div className="voucher-item">
    <div className="unsubscription-header-block">
      <h3 className="unsubscription-title">
        Customizable
      </h3>
      </div>
      <h3 className="unsubscription-price">
        Voucher
      </h3>
      <p>Activate a subscription by paid voucher</p>
      <a>
        <button className="unsubscription-button">
          Use voucher
        </button>
      </a>
  </div>
  </>
  )
}