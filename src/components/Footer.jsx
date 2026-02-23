import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">

        <div className="footer-content">

          <h2>BookPlace – Second Hand Books in Azamgarh</h2>

          <p>
            BookPlace Azamgarh ka ek trusted local online platform hai jahan
            UP Board ke class 9, 10, 11 aur 12 ke students apni second hand
            books buy aur sell kar sakte hain. Hamara mission hai ki Azamgarh
            aur Thekma ke students ko sasti aur easily available school books
            provide ki ja sake.
          </p>

          <p>
            Yahan students apni purani books bech kar paise kama sakte hain aur
            naye academic session ke liye low price par old books kharid sakte
            hain.
          </p>

          {/* Legal Links Section */}
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/return-policy">Return Policy</Link>
          </div>

          <div className="footer-bottom">
            <p>© 2026 BookPlace | Serving Azamgarh & Thekma Students</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer