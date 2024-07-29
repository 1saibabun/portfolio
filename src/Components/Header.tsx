// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <>
    <header className="text-center py-5">
      <div className="container">
        <h1>Jyoti Prakash Nayak</h1>
        <p className="lead">Software Engineer</p>
      </div>
    </header><div id="hero" className="home">
        <div className="container">
          <div className="hero-content">            
            <p>I'm Designer, Developer, Freelancer, Photographer</p>
            <ul className="list-unstyled list-social">
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
