export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero__container container grid">
        <div className="hero__data">
          <h1 className="hero__title">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="hero__description">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>

          <form action="" className="hero__search">
            <i className="bx bxs-map"></i>
            <input
              type="search"
              placeholder="Search by location..."
              className="hero__search-input"
            />
            <button className="button">Search</button>
          </form>

          <div className="hero__value">
            <div>
              <h1 className="hero__value-number">
                9K <span>+</span>
              </h1>
              <span className="hero__value-description">
                Premium <br /> Product
              </span>
            </div>
            <div>
              <h1 className="hero__value-number">
                2K <span>+</span>
              </h1>
              <span className="hero__value-description">
                Happy <br /> Customers
              </span>
            </div>
            <div>
              <h1 className="hero__value-number">
                28K <span>+</span>
              </h1>
              <span className="hero__value-description">
                Awards <br /> Won
              </span>
            </div>
          </div>
        </div>
        <div className="hero__images">
          <div className="home__orbe"></div>
          <div className="home__img">
            <img src="./src/assets/images/home.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
