export default function Navbar() {
  function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50  viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }

  window.addEventListener("scroll", scrollHeader);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Holu <i className="bx bxs-home-alt-2"></i>
        </a>

        <div className="nav__menu">
          <ul className="nav__menu__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="bx bx-home-alt-2"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#popular" className="nav__link">
                <i className="bx bx-building-house"></i>
                <span>Residences</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#value" className="nav__link">
                <i className="bx bx-award"></i>
                <span>Value</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-phone"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="button nav__button">
          Subscribe
        </a>
      </nav>
    </header>
  );
}
