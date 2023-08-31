import { useEffect, useState } from "react";
import { ConfirmModal } from "./ConfirmModal";
import "./css/info.css"
import { Unsubscription } from "./Unsubscription";
import { PaymentHistory } from "./PaymentHistory";
import { Subscription } from "./Subscription";
import { PaymentModal } from "./PaymentModal";
import { PurchaseSuccess } from "./PurchaseSuccess";
import { VoucherModal } from "./VoucherModal";
import { ChangePasswordModal } from "./ChangePasswordModal";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

export default function UserProfile() {

	const [user, setUser] = useState()
	const [status, setStatus] = useState(null)
	const [isConfirmVisible,setIsConfirmVisible] = useState(false)
	const [isPaymentHistoryVisible,setIsPaymentHistoryVisible] = useState(false)
	const [isPaymentModalVisible,setIsPaymentModalVisible] = useState(false)
	const [isVoucherModalVisible,setIsVoucherModalVisible] = useState(false)
	const [isChangePasswordModalVisible,setIsChangePasswordModalVisible] = useState(false)
	const [plan,setPlan] = useState(null)
	const [isPurchaseSuccess,setIsPurchaseSuccess] = useState(false)

	const userInfo = user?.userInfo

	useEffect(() => {
		fetch(BASE_URL + "users/current", {
				method: 'GET',
				headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + localStorage.getItem("token")
				},
		}).then(response => response.json()).then(res => {
				setUser(res)
				setStatus(res.subName)
		});
}, [])

const renderSubscriptionInfo = ()=>{
		if(status && status == 'HAVE_SUB'){
			return <Subscription setIsConfirmVisible={setIsConfirmVisible}
													 setIsPaymentHistoryVisible={setIsPaymentHistoryVisible}
							/>
		}else if(status && status == 'HAVE_NOT_SUB'){
			return <Unsubscription setIsPaymentModalVisible={setIsPaymentModalVisible}
														 setIsVoucherModalVisible={setIsVoucherModalVisible}
														 setPlan={setPlan}
							/>
		}
}

	if(isPurchaseSuccess) return <PurchaseSuccess setIsPurchaseSuccess={setIsPurchaseSuccess}/>

	return (
		<>
		{isChangePasswordModalVisible && <ChangePasswordModal
																							setIsChangePasswordModalVisible={setIsChangePasswordModalVisible}
																		/>}
		{isPaymentModalVisible && <PaymentModal 
																	setIsPaymentModalVisible={setIsPaymentModalVisible}
																	setIsPurchaseSuccess={setIsPurchaseSuccess}
																	plan={plan}
															/>}
		{isVoucherModalVisible && <VoucherModal
																	setIsVoucherModalVisible={setIsVoucherModalVisible}
																	setIsPurchaseSuccess={setIsPurchaseSuccess}
																	email={userInfo?.username}
															/>}
		{isConfirmVisible && <ConfirmModal 
															setIsConfirmVisible={setIsConfirmVisible} 
															setStatus={setStatus}
													/>}
		{isPaymentHistoryVisible && <PaymentHistory 
															     setIsPaymentHistoryVisible={setIsPaymentHistoryVisible
																}/>}

		<section className="profile-page">
			<div className="breadcrumbs">
					<p><a href="https://agriguardian.farm/">Home </a>/<span> User Profile </span></p>
			</div>
			<div className="background">
				<h1 style={{color:'#FFFF',fontSize:48}}>
					{userInfo?.name}
				</h1>
			</div>
			<section className="content">
					<div className="profile-info">
							<p>
								Profile Info:
							</p>
							<p>
								<span style={{color:'rgba(0, 0, 0, 0.70)',marginRight:5}}>
									Name:
								</span>
								<span style={{color:'#000'}}>
									{userInfo?.name}
								</span>
							</p>
							<p>
								<span style={{color:'rgba(0, 0, 0, 0.70)',marginRight:5}}>
									Email:
								</span>
								<span style={{color:'#357234'}}>
									{userInfo?.username}
								</span>
							</p>
							<button className="change-password-button" onClick={()=>setIsChangePasswordModalVisible(true)}>
								Change Password
							</button>
						</div>
						{renderSubscriptionInfo()}
			</section>
		</section>
		</>
	)
}