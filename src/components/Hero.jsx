import HeroImg from "../assets/images/home.jpg";

export default function Hero() {
  return (
    <section className="hero-section section" id="hero">
      <div className="hero-container container grid">
        <div className="hero-text">
          <h1 className="hero-text__title">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="hero-text__description">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>

          <form action="" className="hero-search">
            <i className="bx bxs-map"></i>
            <input
              type="search"
              placeholder="Search by location..."
              className="hero-search__input"
            />
            <button className="button">Search</button>
          </form>

          <div className="hero-text__value">
            <div>
              <h1 className="hero-text__value__number">
                9K <span>+</span>
              </h1>
              <span className="hero-text__value__description">
                Premium <br /> Product
              </span>
            </div>
            <div>
              <h1 className="hero-text__value__number">
                2K <span>+</span>
              </h1>
              <span className="hero-text__value__description">
                Happy <br /> Customers
              </span>
            </div>
            <div>
              <h1 className="hero-text__value__number">
                28K <span>+</span>
              </h1>
              <span className="hero-text__value__description">
                Awards <br /> Won
              </span>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <div className="hero-images__orbe"></div>
          <div className="hero-images__img">
            <img src={HeroImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
