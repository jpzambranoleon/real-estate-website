export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container container grid">
        <div>
          <a href="#" className="footer-logo">
            Holux <i className="bx bxs-home-alt-2"></i>
          </a>
          <p className="footer-description">
            Our vision is to make all peaple <br />
            the best place to live for them.
          </p>
        </div>

        <div className="footer-content">
          <div>
            <h3 className="footer-content__title">About</h3>

            <ul className="footer-content__links">
              <li>
                <a className="link">About us</a>
              </li>
              <li>
                <a className="link">Features</a>
              </li>
              <li>
                <a className="link">News & Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-content__title">Company</h3>

            <ul className="footer-content__links">
              <li>
                <a className="link">How We Work?</a>
              </li>
              <li>
                <a className="link">Capital</a>
              </li>
              <li>
                <a className="link">Security</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-content__title">Support</h3>

            <ul className="footer-content__links">
              <li>
                <a className="link">FAQs</a>
              </li>
              <li>
                <a className="link">Support Center</a>
              </li>
              <li>
                <a className="link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-content__title">Follow us</h3>

            <ul className="footer-content__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="social-link"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="social-link"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                className="social-link"
              >
                <i className="bx bxl-pinterest"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-info container">
        <span className="footer-info__copy">
          &#169; Bedimcode. All rights reserved
        </span>

        <div className="footer-info__privacy">
          <a href="#">Terms & Agreements</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
