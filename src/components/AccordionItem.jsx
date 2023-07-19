import { useState } from "react";

const AccordionItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`value-accordion__item ${isOpen ? "accordion-open" : ""}`}
      onClick={handleItemClick}
    >
      <header className="accordion-header">
        {data.icon}
        <h3 className="accordion-header__title">{data.title}</h3>
        <div className="accordion-header__arrow">
          <i className="bx bxs-down-arrow"></i>
        </div>
      </header>

      <div
        className="accordion-content"
        style={isOpen ? { height: "auto" } : { height: 0, overflow: "hidden" }}
      >
        <p className="accordion-content__description">{data.description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
