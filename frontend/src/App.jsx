import React, { useState } from "react";
import axios from "axios";
import "./CurrencyConverter.css";

function App() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const currencyCodes = ["USD", "EUR", "GBP", "GHS", "JPY", "CAD", "BSD"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Http Request
    try {
      const response = await axios.post(
        "http://localhost:3000/api/convert",
        formData
      );
      setResult(response?.data);
      setError("");
    } catch (error) {
      setError(
        "Error",
        error?.response ? error?.response?.data : error?.message
      );
    }
  };

  return (
    <div>
      <section className="hero">
        <h1>Currency Crusher</h1>
        <p>Smash through exchange rates with lightning-fast precision.</p>
      </section>
      <section className="converter">
        <form onSubmit={handleSubmit}>
          <select
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="input"
          >
            <option value="">Choose Your Starting Point</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <select
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Your Destination Currency</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter Amount to Crush"
            type="number"
            className="input"
          />
          <button type="submit" className="submit-btn">
            Crush It!
          </button>
        </form>
        {result && (
          <div className="result">
            <p>
              Crushed Amount: {result.convertedAmount} {result.target}
            </p>
            <p>Conversion Power: {result.conversionRate}</p>
          </div>
        )}
        {error && <p className="error">Error: {error}</p>}
      </section>
      <section className="additional-info">
        <h2>Why Use Currency Crusher?</h2>
        <p>Because you need speed, accuracy, and power in your currency conversions. Anything less is just wasted time.</p>
      </section>
    </div>
  );
}

export default App;
