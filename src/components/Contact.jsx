import ContactImg from "../assets/images/contact.png";

const cardData = [
  {
    icon: <i className="bx bxs-phone-call"></i>,
    title: "Contact Us",
    description: "022.321.165.19",
    buttonName: "Call Now",
  },
  {
    icon: <i className="bx bxs-message-rounded-dots"></i>,
    title: "Chat",
    description: "022.321.165.19",
    buttonName: "Chat Now",
  },
  {
    icon: <i className="bx bxs-video"></i>,
    title: "Video Call",
    description: "022.231.165.19",
    buttonName: "Video Call Now",
  },
  {
    icon: <i className="bx bxs-envelope"></i>,
    title: "Message",
    description: "022.231.165.19",
    buttonName: "Message Now",
  },
];

const ContactCard = ({ data }) => {
  return (
    <div className="contact-card__box">
      <div className="card-info">
        {data.icon}
        <div>
          <h3 className="card-info__title">{data.title}</h3>
          <p className="card-info__description">{data.description}</p>
        </div>
      </div>
      <button className="button card-button">{data.buttonName}</button>
    </div>
  );
};

export default function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="contact-container container grid">
        <div className="contact-images">
          <div className="contact-images__orbe"></div>
          <div className="contact-images__img">
            <img src={ContactImg} alt="contact-img" />
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-content__data">
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">
              Easy to Contact us<span>.</span>
            </h2>
            <p className="description">
              Is there a problem finding your dream home? Need a guide in buying
              your first home? Or need consultation on residential issues? Just
              contact us.
            </p>
          </div>

          <div className="contact-card">
            {cardData.map((data, id) => (
              <ContactCard data={data} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
