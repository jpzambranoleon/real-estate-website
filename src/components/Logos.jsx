import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Logo4 from "../assets/images/logo4.png";

export default function Logos() {
  return (
    <section className="logos-section section">
      <div className="logos-container container grid">
        <div className="logos__img">
          <img src={Logo1} alt="logo1" />
        </div>
        <div className="logos__img">
          <img src={Logo2} alt="logo2" />
        </div>
        <div className="logos__img">
          <img src={Logo3} alt="logo3" />
        </div>
        <div className="logos__img">
          <img src={Logo4} alt="logo4" />
        </div>
      </div>
    </section>
  );
}
