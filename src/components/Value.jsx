import ValueImg from "../assets/images/value.jpg";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export const accordionData = [
  {
    icon: <i className="bx bxs-shield-x accordion-header__icon"></i>,
    title: "Best interest rates on the market",
    description:
      "We are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    icon: <i className="bx bxs-x-square accordion-header__icon"></i>,
    title: "Prevent unstable prices",
    description:
      "We are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    icon: <i className="bx bxs-bar-chart-square accordion-header__icon"></i>,
    title: "Best prices on the market",
    description:
      "We are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    icon: <i className="bx bxs-check-square accordion-header__icon"></i>,
    title: "Security of your data",
    description:
      "We are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
];

export default function Value() {
  /*
  const accordionItems = document.querySelectorAll(".value-accordion__item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion-header");

    accordionHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-open");
      toggleItem(item);

      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });

  const toggleItem = (item) => {
    const accordionContent = item.querySelector(".accordion-content");

    if (item.classList.contains("accordion-open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }
  }; */

  return (
    <section className="value-section section" id="value">
      <div className="value-container container grid">
        <div className="value-images">
          <div className="value-images__orbe"></div>
          <div className="value-images__img">
            <img src={ValueImg} alt="value-img" />
          </div>
        </div>

        <div className="value-content">
          <div className="value-data">
            <span className="section-subtitle">Our Value</span>
            <h2 className="section-title">
              Value We Give To You<span>.</span>
            </h2>
            <p className="value-data__description">
              We are always ready to help by providing the best service for you.
              We believe a good place to live can make your life better.
            </p>
          </div>

          <div className="value-accordion">
            {accordionData.map((data, id) => (
              <AccordionItem key={id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
