import React from 'react'
import "./PrivacyPolicy.css"
import Header from '../components/HeaderComp/Header'
import Menu from '../components/Menu'
const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="privacy-policy-container">
        <Menu/>
      <h2>प्राइवेसी पॉलिसी</h2>
      <section>
        <h3>डेटा का उपयोग</h3>
        <p>हम आपकी व्यक्तिगत जानकारी केवल तब प्राप्त करते हैं जब आप अपनी किताबें बेचने के लिए लॉगिन करते हैं। किताब खरीदने के लिए लॉगिन की आवश्यकता नहीं है।</p>
      </section>
      <section>
        <h3>रिटर्न पॉलिसी</h3>
        <p>यदि आपको खरीदी गई किताब पसंद नहीं आती है, तो आप उसे 1 दिन के भीतर वापस कर सकते हैं।</p>
      </section>
      <section>
        <h3>डेटा सुरक्षा</h3>
        <p>आपका लॉगिन डेटा और अन्य जानकारी पूरी तरह सुरक्षित रखी जाती है। हम आपकी जानकारी किसी तीसरे पक्ष के साथ साझा नहीं करते हैं।</p>
      </section>
      <section>
        <h3>कुकीज़ और ट्रैकिंग</h3>
        <p>हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग कर सकते हैं। आप अपने ब्राउज़र में कुकीज़ बंद करने का विकल्प चुन सकते हैं।</p>
      </section>
      <section>
        <h3>नीतियों में बदलाव</h3>
        <p>हमारी प्राइवेसी पॉलिसी में समय-समय पर बदलाव हो सकते हैं। किसी भी बदलाव की सूचना हम अपनी वेबसाइट पर देंगे।</p>
      </section>
    </div>
    </>
  )
}

export default PrivacyPolicy