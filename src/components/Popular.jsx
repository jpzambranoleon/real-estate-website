import Popular1 from "../assets/images/popular1.jpg";
import Popular2 from "../assets/images/popular2.jpg";
import Popular3 from "../assets/images/popular3.jpg";
import Popular4 from "../assets/images/popular4.jpg";
import Popular5 from "../assets/images/popular5.jpg";

export default function Popular() {
  const cardData = [
    {
      img: Popular1,
      price: "66,336",
      title: "Garden City Assat",
      description: "Street The Garden Of Miraflores, Lima - Perú Av. Sol #9876",
    },
    {
      img: Popular2,
      price: "35,159",
      title: "Gables Luxurious House",
      description: "Street The Garden Of Miraflores, Lima - Perú Av. Sol #9876",
    },
    {
      img: Popular3,
      price: "75,043",
      title: "Garden Orchard City",
      description: "Street The Garden Of Miraflores, Lima - Perú Av. Sol #9876",
    },
    {
      img: Popular4,
      price: "62,024",
      title: "Luxurius City Garden",
      description: "Street The Garden Of Miraflores, Lima - Perú Av. Sol #9876",
    },
    {
      img: Popular5,
      price: "47,043",
      title: "Aliva Private Garden",
      description: "Street The Garden Of Miraflores, Lima - Perú Av. Sol #9876",
    },
  ];

  const swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <section className="popular-section section" id="popular">
      <div className="container">
        <span className="section-subtitle">Best Choice</span>
        <h2 className="section-title">
          Popular Residences <span>.</span>
        </h2>

        <div className="popular-container swiper">
          <div className="swiper-wrapper">
            {cardData.map((data, id) => (
              <article className="popular-card swiper-slide">
                <img
                  src={data.img}
                  alt="popular"
                  className="popular-card__img"
                />

                <div className="popular-card__data">
                  <h2 className="popular-card__data__price">
                    <span>$</span>
                    {data.price}
                  </h2>
                  <h3 className="popular-card__data__title">{data.title}</h3>
                  <p className="popular-card__data__description">
                    {data.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="swiper-button-next">
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="bx bx-chevron-left"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
