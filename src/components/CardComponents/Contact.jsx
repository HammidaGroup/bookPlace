import { useLocation } from "react-router-dom";

const Contact = () => {
  const { state } = useLocation();

  return (
    <div style={{ padding: "20px" }}>
      <img src={state.img} width="200" alt="book" />
      <h2>{state.class}</h2>
      <h3>₹{state.price}</h3>
      <p>{state.desc}</p>

      <button style={{ marginTop: "10px" }}>
        Call Seller
      </button>
    </div>
  );
};

export default Contact;
