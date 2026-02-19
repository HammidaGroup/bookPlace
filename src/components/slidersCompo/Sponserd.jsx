import React from "react";
import "./Sponserd.css";
import sangharshCochingSpo from "../../assets/sponserd/sponserd-sangharshConching.png";

const Sponserd = () => {
    const sponHandler=()=>{
     const message = `Hello Sir/Madam,

I came across Sangharsh Coaching Center through BookPlace.

I am interested in getting more information about your courses and admission process.

Please share the details.

Thank you.`;



    const url = `https://wa.me/918858809407?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    // navigate("/contact")
  
    }
  return (
    <div className="sponserd-main">
      <h2 className="sponserd-heading">Sponsored</h2>

      <div className="sponserd-slider">
        {[1,2,3,4,5,6].map((item, index) => (
          <div onClick={sponHandler} className="sponserd-card" key={index}>
            <img src={sangharshCochingSpo} alt="sangharsh coaching" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponserd;
