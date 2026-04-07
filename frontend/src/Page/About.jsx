
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      
      <div className="about-content">
        <div className="about-image-wrapper">
          <img 
            src="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww" 
            alt="About Forever Store"
            className="about-image"
          />
        </div>
        
        <div className="about-text">
          <p className="about-welcome">
            Welcome to <strong>Forever</strong> - your trusted online shopping destination.
          </p>
          
          <p className="about-description">
            We take pride in offering only the highest quality products at prices that won't break the bank, backed by fast, reliable shipping and exceptional customer service that's always ready to help you with anything you need.
          </p>
          
          <h3 className="about-subtitle">Why Shop With Us?</h3>
          <ul className="about-list">
            <li>✓ Quality Products</li>
            <li>✓ Secure Payments</li>
            <li>✓ Fast Delivery</li>
            <li>✓ 24/7 Customer Support</li>
          </ul>
          
          <h3 className="about-subtitle">Our Mission</h3>
          <p className="about-description">
            Our mission is to provide the best possible shopping experience by offering carefully curated quality products, delivering exceptional customer service at every step, and ensuring that every interaction with our brand leaves you feeling valued and satisfied.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
