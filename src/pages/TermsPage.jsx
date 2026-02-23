import React from "react";
import "./TermsPage.css";
import Header from "../components/HeaderComp/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <>
      <Header />
      <div className="terms-container">
        <Menu />
        <div className="terms-content">
          <h1>Terms and Conditions – BookPlace</h1>

          <p>
            Welcome to BookPlace. By using our website, you agree to the
            following terms and conditions. Please read them carefully before
            using our platform.
          </p>

          <h2>1. Platform Purpose</h2>
          <p>
            BookPlace is a local online platform for students of Azamgarh and
            nearby areas including Thekma to buy and sell second hand UP Board
            books (Class 9–12).
          </p>

          <h2>2. User Responsibility</h2>
          <p>
            Users are responsible for providing correct information including
            book details, price, and contact information. Any false or
            misleading listing may be removed.
          </p>

          <h2>3. Commission & Service Fee</h2>
          <p>
            BookPlace charges a <strong>20% service fee</strong> on the total
            selling price of a book after a successful sale. This fee is for
            platform maintenance, listing management, and buyer-seller
            coordination.
          </p>
          <p>
            The remaining <strong>80%</strong> amount will be given to the
            seller.
          </p>

          <h2>4. Payment & Delivery</h2>
          <p>
            BookPlace may assist in coordination between buyer and seller.
            Payment terms and delivery method will be clearly communicated
            before final confirmation.
          </p>

          <h2>5. Listing Approval</h2>
          <p>
            All books submitted on the platform may go through a review process
            before being published. BookPlace reserves the right to reject or
            remove any listing that violates platform rules.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            BookPlace acts as a platform connecting buyers and sellers. We are
            not responsible for damage, loss, or disputes after product
            handover.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            BookPlace reserves the right to update these terms at any time.
            Continued use of the platform means you accept updated terms.
          </p>

          <p className="last-updated">Last Updated: 2026</p>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default TermsPage;