import React, { useEffect, useState } from 'react';
import "./JoinPage.css";
import HeaderHome from '../components/HeaderComp/HeaderHome';
import googleSvg from "../assets/google-logo-search-new-svgrepo-com.svg"
import Menu from '../components/Menu';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SomthingWrong from '../components/SomthingWrong';
const JoinPage = () => {
  const navigate = useNavigate()
    const formData = new FormData()
    const [name, setName] = useState('');    
 const [email, setEmail] = useState('');    
 const [password, setPassword] = useState('');
 const [submitted, setSubmitted] = useState(false);
 

  
   const [params] = useSearchParams();
   
  


  

const joinHandler = () => {
  window.location.href = "https://bookplace-backend.onrender.com/auth/google";
};

//    useEffect(() => {
//   const token = params.get("token");

//   if (token) {
//     localStorage.setItem("token", token);
//     console.log("TOKEN SAVED:", token);
//   }
// }, [params]);
// ;

  return (
    <>
    <HeaderHome/>
   
      {/* <SomthingWrong/> */}
      {/* <h2 className='signup-title' ></h2> */}
    
     
       

        <div className="join-container">
          <Menu/>
  <div className="join-box">
    <h1>BookPlace से जुड़ें 📚</h1>
    <p className="join-sub">
      अपनी पुरानी किताब बेचें और सस्ती किताबें खरीदें।
      Azamgarh के छात्रों के लिए एक भरोसेमंद प्लेटफॉर्म।
    </p>

    <div className="features">
      <p>✔ 100% Free Registration</p>
      <p>✔ Safe & Secure Login</p>
      <p>✔ Easy Book Listing</p>
    </div>

     <button
          type="button"
          className="google-btn"
          onClick={joinHandler}
          >
          <img src={googleSvg} alt="Google" style={{ width: '22px', height: '22px' }} />
          Continue with Google
        </button>
  </div>
</div>

      
      
      
    
    </>
  );
};


export default JoinPage