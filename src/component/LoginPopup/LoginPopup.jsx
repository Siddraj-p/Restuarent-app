  import React, { useState } from 'react'
  import "./LoginPopup.css"
  import { assets } from '../../assets/assets'
  // import StoreContextProvider from '../../context/StoreContext'
  import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

  const LoginPopup = ({setShowLogin}) => {
    const { setUser } = useContext(StoreContext);

    const[currState, setCurrState] = useState("Login")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (currState === "Sign Up") {
            setUser({
                firstName: name,
                lastName: '',
                email: email,
                phone: '',
                street: '',
                city: '',
                state: '',
                zip: '',
                country: ''
            });
            alert("Account Created!");
        } else {
            setUser({
                firstName: 'Your Name', 
                email: email,
            });
            alert("Login Successful!");
        }
        setShowLogin(false);
    };

  return (
    <div className="login-popup">
     <form  className="login-popup-container" onSubmit={handleSubmit}>
      <div className="login-popup-title">
        
        <h2>{currState}</h2>
       
        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        
      </div>
      <div className="login-popup-inputs">

        {currState=== "Login"? <></> :  

          <input type="text" placeholder='Your name' required   value={name}
                            onChange={(e) => setName(e.target.value)} /> }
          <input type="email" placeholder='Your Email' required    value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Your Password' required   value={password}
                            onChange={(e) =>setPassword(e.target.value)} />

      </div>
      
      <button>{currState==="Sign Up"? "create account" : "login"}</button>
      <div className="login-popup-condition">
        <input type='checkbox' required />
        <p> By Continueing , i agree to the terms and condition</p>
      </div>
      {currState === "Login"
      ?  <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} >click here</span> </p>
      : <p>Allready have an account? <span onClick={()=>setCurrState("Login")} >click here</span> </p> 
      }
     
     </form>
    </div>
  )
}

export default LoginPopup