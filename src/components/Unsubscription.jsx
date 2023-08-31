import infoIcon from '../images/info-icon.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnsubscriptionCards } from "./UnsubscriptionCards";
import Slider from 'react-slick';
import { Popular } from './Popular';
import { useEffect, useState } from 'react';
import { SliderPagination } from './SliderPagination';

const UnsubscriptionCardsSlider = ({
  setPlan,
  setIsPaymentModalVisible,
  setIsVoucherModalVisible
})=>{

  const [slide,setSlide] = useState(0)

  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  }

  const handleGetSubscription=(plan)=>{
    setPlan(plan)
    setIsPaymentModalVisible(true)
  }

  return(
    <>
    <Slider settings={settings} 
            style={{width:'100%'}}
            afterChange={index=>setSlide(index)}
    >
      <div className="unsubscription-item-mobile">
        <h3 className="unsubscription-title-mobile">
          Monthly
        </h3>
        <h3 className="unsubscription-price-mobile">
          €10.99
        </h3>
        <ul className="unsubscription-list-mobile">
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
          <button className="unsubscription-button-mobile">
            Get Subscription
          </button>
        </a>
    </div>
    <div className="unsubscription-item-mobile">
      <div className="unsubscription-header-block">
        <h3 className="unsubscription-title-mobile">
          Annual
        </h3>
        <Popular/>
        </div>
        <h3 className="unsubscription-price-mobile">
          €99.99
        </h3>
        <ul className="unsubscription-list-mobile">
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
          <button className="unsubscription-button-mobile">
            Get Subscription
          </button>
        </a>
    </div>
    <div className="voucher-item-mobile">
      <div className="unsubscription-header-block">
        <h3 className="unsubscription-title-mobile">
          Customizable
        </h3>
        </div>
        <h3 className="unsubscription-price-mobile">
          Voucher
        </h3>
        <p>Activate a subscription by paid voucher</p>
        <a>
          <button 
              className="unsubscription-button-mobile"
              onClick={()=>setIsVoucherModalVisible(true)}
          >
            Use voucher
          </button>
        </a>
    </div>
  </Slider>
  <SliderPagination slide={slide}/>
  </>
  )
}

export const Unsubscription =({
  setPlan,
  setIsPaymentModalVisible,
  setIsVoucherModalVisible
})=>{

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <=500 ? true : false

 return(
  <>
    <div className="subscription-plan">
    <p style={{marginBottom:5,color:'rgba(0, 0, 0, 0.70)'}}>
      Subscription Plan:
    </p>
    <span style={{color:'#000'}}>
      You do not have an active Subscription!
    </span>
      <div className="unsubscription-plan-info">
        <img src={infoIcon} style={{marginRight:10}} width={24} height={24}/>
        <span style={{color:'#357234'}}>
          All of our subscription packages come with a 7 day free trial. 
          If you cancel before the trial expires you will not be charged
        </span>
      </div>
    </div>
    <div className="unsubscriptions-block"
         style={{width:"100%"}}>
           {!isMobile && <UnsubscriptionCards 
                                setPlan={setPlan}
                                setIsPaymentModalVisible={setIsPaymentModalVisible}
                                setIsVoucherModalVisible={setIsVoucherModalVisible}
           />}
           {isMobile && <UnsubscriptionCardsSlider
                                setPlan={setPlan}
                                setIsPaymentModalVisible={setIsPaymentModalVisible}
                                setIsVoucherModalVisible={setIsVoucherModalVisible}
           />}
    </div>
  </>
 )
}