import React, { useState } from 'react';
import './App.css';

function App() {
  // State for selected fund for comparison tool
  const [selectedFund, setSelectedFund] = useState(null);

  // Dummy data for mutual funds
  const mutualFunds = [
    {
      id: 1,
      name: "Growth Equity Fund",
      description: "Invest in high-growth companies with potential for above-average returns.",
      benefits: ["Diversification", "Potential for capital appreciation"],
      minimumInvestment: "$1,000",
      expenseRatio: "0.75%",
      riskLevel: "High",
      image: "growth_equity.jpg"
    },
    {
      id: 2,
      name: "Income Bond Fund",
      description: "Generate steady income through investment in high-quality bonds.",
      benefits: ["Regular income", "Lower risk compared to equity funds"],
      minimumInvestment: "$500",
      expenseRatio: "0.50%",
      riskLevel: "Low to Medium",
      image: "income_bond.jpg"
    },
    {
        id: 3,
        name: "Healthcare Innovation Fund",
        description: "Invest in companies revolutionizing healthcare and biotechnology.",
        benefits: ["Potential for substantial growth, Exposure to cutting-edge medical advancements"],
        minimumInvestment: "$2,000",
        expenseRatio: "0.65%",
        riskLevel: "High",
        image: "health_equity.jpeg"
      },
      {
        id: 4,
        name: "Emerging Markets Equity Fundd",
        description: "Capitalize on the growth potential of emerging market economies.",
        benefits: ["High growth opportunities, Diversification across emerging markets"],
        minimumInvestment: "$5000",
        expenseRatio: "0.90%",
        riskLevel: "Low",
        image: "emerging-market-economy1.webp"
      },
      {
        id: 5,
        name: "Technology Sector Fund",
        description: "Invest in leading technology companies driving innovation.",
        benefits: ["Exposure to rapidly growing tech industry, Potential for high returns"],
        minimumInvestment: "$2,000",
        expenseRatio: "0.69%",
        riskLevel: "High",
        image: "technology_equity.jpeg"
      },
      {
        id: 6,
        name: "Global Infrastructure Fund",
        description: "Invest in global infrastructure projects such as transportation and utilities.",
        benefits: ["Stable income, Exposure to essential services"],
        minimumInvestment: "$900",
        expenseRatio: "0.60%",
        riskLevel: "Medium to High",
        image: "global-infrastructure-min.jpg"
      }
    // Add more funds as needed
  ];

  // Function to handle fund selection
  const handleFundSelect = (fundId) => {
    setSelectedFund(mutualFunds.find(fund => fund.id === fundId));
  };

  // Fund comparison tool component
  const FundComparisonTool = () => {
    return (
      <div className="comparison-tool">
        <h2>Fund Comparison Tool</h2>
        <p>Select funds to compare their features</p>
        <div className="fund-options">
          {mutualFunds.map(fund => (
            <div key={fund.id} className="fund-option" onClick={() => handleFundSelect(fund.id)}>
              <img src={fund.image} alt={fund.name} />
              <h3>{fund.name}</h3>
            </div>
          ))}
        </div>
        {selectedFund && (
          <div className="selected-fund">
            <h3>{selectedFund.name}</h3>
            <p>{selectedFund.description}</p>
            <ul>
              {selectedFund.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <p>Minimum Investment: {selectedFund.minimumInvestment}</p>
            <p>Expense Ratio: {selectedFund.expenseRatio}</p>
            <p>Risk Level: {selectedFund.riskLevel}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <h1 className="company-name">Abhi finance</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#services">Services</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cta-container">
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
      <main>
        <section className="fund-options">
          <h2>Our Mutual Funds</h2>
          <div className="fund-cards">
            {mutualFunds.map(fund => (
              <div key={fund.id} className="fund-card">
                <img src={fund.image} alt={fund.name} />
                <h3>{fund.name}</h3>
                <p>{fund.description}</p>
                <ul>
                  {fund.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p>Minimum Investment: {fund.minimumInvestment}</p>
                <p>Expense Ratio: {fund.expenseRatio}</p>
                <p>Risk Level: {fund.riskLevel}</p>
                <button onClick={() => handleFundSelect(fund.id)}>Compare</button>
              </div>
            ))}
          </div>
        </section>
        <FundComparisonTool />
      </main>

      
      

      <div className="App">
      <header className="header">
        {/* Header content goes here */}
      </header>
      
      <section className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to contact us.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      
      {/* Other sections of your website go here */}
    </div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <p>Abhi finance</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Investment Options</li>
              <li>Financial Planning</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: (800) 123-4567</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Abhi finance. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
    </div>


    
  );
}

export default App;
