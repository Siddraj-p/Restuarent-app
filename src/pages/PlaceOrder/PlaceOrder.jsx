import React, { useContext,useState,useEffect } from 'react';
import "./PlaceOreder.css";
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const { getTotalCartAmount,user } = useContext(StoreContext);

   const [locationInfo, setLocationInfo] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });
const navigate = useNavigate();

    const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Your Order has been placed successfully!');
    navigate('/feedback');  
};

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                const apiKey = '00d91b8d39fa46d4a13c3e138597be2e'; 
                const response = await axios.get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
                );

                const details = response.data.results[0].components;
                setLocationInfo({
                    street: details.road || '',
                    city: details.city || details.town || details.village || '',
                    state: details.state || '',
                    country: details.country || '',
                    zip: details.postcode || ''
                });
            },
            (error) => {
                console.error('Location permission denied:', error);
            }
        );
    }, []);

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();
  //   alert('Your Order has been placed successfully!');
  // };

  return (
    <form className='place-order' onSubmit={handlePlaceOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" value={user?.firstName || ''}  placeholder='First-Name' required />
          {/* <input type="text" value={user?.lastName || ''}  placeholder='Last-Name' required /> */}
        </div>
        <input type="email"   value={user?.email || ''} placeholder='Email' required />
        <input type="text" value={locationInfo?.street || ''} placeholder='Street' required />
        <div className="multi-fields">
          <input type="text" value={locationInfo?.city} placeholder='City' required />
          <input type="text"  value={locationInfo?.state || ''} placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input type="text" value={locationInfo.zip || ''} placeholder='Code' required />
          <input type="text"value={locationInfo.country}   placeholder='Country' required />
        </div>
        {/* <input type="text" value={user?.phone || ''}  placeholder='Phone' required /> */}
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee:</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">Proceed to Checkout</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
