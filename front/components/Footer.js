import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <span className="hidden-link-text">LOGO</span>
                  <h1>LOGO</h1>
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Get Started</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Start</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Documentation</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Contact</a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#">News</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Security</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Blog</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Customers</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description"> Have a support question?</p>
                <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper"> 
                  <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a>
                </p>
              </div>
            </div>
            <div className="footer-social-links">
              <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
              </svg>
              <a className="footer-social-link linkedin" href="#" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,25,27,25,27,25z"></path>
                </svg>
              </a>
              <a className="footer-social-link twitter" href="#" target="_blank">
                <span className="hidden-link-text">Twitter</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M24.99,9.206c0.009,0.156,0.009,0.311,0.009,0.467c0,4.767-3.622,10.259-10.258,10.259 c-2.037,0-3.926-0.599-5.514-1.616c-0.288,0.045-0.573,0.067-0.86,0.067c-1.017,0-2.004-0.354-2.783-0.945 c-0.691-0.451-1.274-1.022-1.716-1.742c-0.44-0.726-0.747-1.537-0.911-2.413c-0.439-1.619,0.009-3.364,1.053-4.488 c-0.418,0.05-0.83,0.084-1.249,0.084c-1.189,0-2.356-0.34-3.336-0.935c-0.348,1.245-0.535,2.564-0.535,3.963c0,2.74,1.394,5.151,3.497,6.59c-1.28-0.031-2.513-0.392-3.581-0.977c0.014,0.04,0.014,0.079,0.014,0.119c0,4.485,3.319,8.264,7.725,9.117c-0.806,0.217-1.66,0.335-2.525,0.335c-0.62,0-1.224-0.061-1.812-0.172c1.229,3.823,4.791,6.617,8.992,6.673c5.417,0,9.88-4.396,9.88-9.881C24.99,9.393,24.99,9.297,24.99,9.206z"></path>
                </svg>
              </a>
              <a className="footer-social-link github" href="#" target="_blank">
                <span className="hidden-link-text">GitHub</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M15,0c-8.3,0-15,6.7-15,15c0,6.6,4.3,12.3,10.3,14.3c0.8,0.1,1.1-0.3,1.1-0.7c0-0.3,0-1.1,0-1.6 c-4.1,0.9-5-1.8-5-1.8c-0.7-1.8-1.6-2.3-1.6-2.3c-1.3-0.9,0.1-0.9,0.1-0.9c1.4,0,2.2,1.4,2.2,1.4c1.2,2.1,3.2,1.5,3.9,1.1 c0.1-0.8,0.4-1.5,0.7-1.8c-3.5-0.4-7.2-1.7-7.2-7.6c0-1.7,0.6-3.1,1.5-4.2c-0.2-0.4-0.7-1.1-0.7-2.3c0-2.1,1.4-3.7,3.3-3.7 c1,0,1.9,0.4,2.5,1.1c0.7-0.2,1.5-0.3,2.2-0.3c0.7,0,1.5,0.1,2.2,0.3c0.6-0.7,1.5-1.1,2.5-1.1c1.9,0,3.3,1.6,3.3,3.7 c0,1.2-0.5,1.9-0.7,2.3c0.9,1.1,1.5,2.5,1.5,4.2c0,5.8-3.7,7.2-7.2,7.6c0.4,0.6,0.7,1.3,0.7,2.1c0,1.3,0,2.9,0,4.2 c0,0.3,0.3,0.6,1.1,0.7c6.1-2,10.3-7.7,10.3-14.3C30,6.7,23.3,0,15,0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
