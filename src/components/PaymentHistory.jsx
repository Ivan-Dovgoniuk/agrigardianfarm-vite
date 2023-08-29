import closeIcon from '../images/close-icon.png'
import noPaymentsIcon from '../images/nopayments-icon.png'


export const PaymentHistory = ({
  setIsPaymentHistoryVisible
})=>{

  const payments = false

  const PaymentTable = ()=>{
    return(
      <div style={{overflowY:'auto',maxHeight:'100%',display:'grid'}}>
        <table className="payment-history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>20 Feb. 2023 (14:31)</td>
              <td>Monthly Plan</td>
              <td>10.99</td>
            </tr>
          </tbody>
        </table>
        </div>
    )
  }

  const NoPayment = ()=>{
    return(
      <div className='nopayment-container'>
        <div className='nopayment-content'>
          <img src={noPaymentsIcon}/>
          <p>
              There are no payments yet
          </p>
        </div>
      </div>
    )
  }

  return(
    <>
    <div className="modal-background"/>
    <div className="payment-history-container">
      <div className="payment-history-header">
        <h3>
          Payment History
        </h3>
        <img src={closeIcon} onClick={()=>setIsPaymentHistoryVisible(false)}/>
      </div>
      {payments ? <PaymentTable/> : <NoPayment/>}
    </div>
    </>
  )
}