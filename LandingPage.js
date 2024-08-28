import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">argon</div>
        <div className="login-buttons">
          <button className="user-login">User Login</button>
          <button className="technician-login">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Take care of your home needs now!</h1>
          <p>Search by your location to find a trusted vendor. Choose a vendor and book a technician.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search home appliances" />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>All Services</h2>
        <div className="service-cards">
          <div className="service-card">Fridge</div>
          <div className="service-card">Air Conditioner</div>
          <div className="service-card">Washing Machine</div>
          <div className="service-card">Gas Stove</div>
          <div className="service-card">Microwave</div>
          <div className="service-card">Television</div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="booking-steps">
        <h2>Book a request in 3 simple steps</h2>
        <div className="steps">
          <div className="step">
            <img src="path/to/appliance-image.png" alt="Provide appliance details" />
            <p>Provide your appliance details</p>
          </div>
          <div className="step">
            <img src="path/to/technician-image.png" alt="Choose your technician" />
            <p>Choose your technician</p>
          </div>
          <div className="step">
            <img src="path/to/fixed-image.png" alt="Get it fixed!" />
            <p>Get it fixed!</p>
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="featured-vendors">
        <h2>Featured Vendors</h2>
        <div className="vendor-cards">
          <div className="vendor-card">
            <img src="path/to/vendor-image.png" alt="Metro Hardware" />
            <h3>Metro Hardware</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="vendor-card">
            <img src="path/to/vendor-image.png" alt="Metro Hardware" />
            <h3>Metro Hardware</h3>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="vendor-card">
            <img src="path/to/vendor-image.png" alt="Metro Hardware" />
            <h3>Metro Hardware</h3>
            <p>Rating: ★★★★☆</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What our happy customers have to say about us</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p>“Great service! Couldn't be happier.”</p>
            <p>— User Name</p>
          </div>
          <div className="testimonial-card">
            <p>“Fast and reliable.”</p>
            <p>— User Name</p>
          </div>
          <div className="testimonial-card">
            <p>“Highly recommend!”</p>
            <p>— User Name</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 argon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
