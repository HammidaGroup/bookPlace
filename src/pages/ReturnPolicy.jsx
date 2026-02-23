import React from "react";
import "./ReturnPolicy.css";
import Header from "../components/HeaderComp/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <>
      <Header />
      <div className="return-container">
        <Menu />
        <div className="return-content">
          <h1>Return & Refund Policy – BookPlace</h1>

          <p>
            BookPlace ek local second hand book resale platform hai jo
            Azamgarh aur Thekma ke students ke liye bana hai. Kyunki hum
            used (second hand) books deal karte hain, isliye return policy
            limited conditions me apply hoti hai.
          </p>

          <h2>1. General Return Policy</h2>
          <p>
            Second hand books hone ki wajah se normally returns accept nahi
            kiye jate. Buyers ko book purchase karne se pehle condition
            verify karne ki salah di jati hai.
          </p>

          <h2>2. Condition Verification</h2>
          <p>
            Buyer ko delivery ke time book ki condition check karni chahiye.
            Ek baar product accept karne ke baad normal wear and tear ke liye
            return valid nahi hoga.
          </p>

          <h2>3. Wrong Item / Serious Mismatch</h2>
          <p>
            Agar galat book deliver ho jaye ya major mismatch ho (jaise
            different class/subject), to issue 24 ghante ke andar report
            karna zaroori hai.
          </p>

          <h2>4. Refund Policy</h2>
          <p>
            Agar return valid reason ke saath approve hota hai, to refund
            process case-by-case basis par decide kiya jayega.
          </p>

          <h2>5. Non-Refundable Situations</h2>
          <ul>
            <li>Minor scratches ya normal used condition</li>
            <li>Late complaint (24 hours ke baad)</li>
            <li>Buyer ne condition verify kiye bina accept kiya</li>
          </ul>

          <p className="return-note">
            BookPlace ek connecting platform hai. Hum buyer aur seller ke
            beech coordination karte hain, lekin final inspection buyer ki
            responsibility hoti hai.
          </p>

          <p className="last-updated">Last Updated: 2026</p>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default ReturnPolicy;