import React from "react";
import "./Sponserd.css";
import sangharshCochingSpo from "../../assets/sponserd/sponserd-sangharshConching.png";
import adsIcon from "../../assets/sponserd/adsIcon.png";

const Sponserd = () => {
 
    const sponHandler = (coachingName, phone) => {

  if (window.gtag) {
    window.gtag('event', 'sponsored_click', {
      event_category: 'ads',
      event_label: coachingName,
    });
  }

 const message = `Hello Sir/Madam,

I came across ${coachingName} through BookPlace.

I am interested in getting more information about your courses and admission process.

Please share the details.

Thank you.`

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
};
  return (
    <div className="sponserd-main">
       <div className="icon-text-div">
        <img className="adsIcon" src={adsIcon} alt="ads icon" /> <h2 className="sponserd-heading">Sponsored</h2>
       </div>

      <div className="sponserd-slider">
        {[1,2,3,4,5,6].map((item, index) => (
          <div  className="sponserd-card" key={index}>
            <button onClick={() => sponHandler("Sangharsh Coaching Center" , "918858809407")} className="spo-btn">View Details</button>
            <img src={sangharshCochingSpo} alt="sangharsh coaching" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponserd;
