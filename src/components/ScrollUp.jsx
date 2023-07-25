export default function ScrollUp() {
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    // When the scroll is higher than 350 viewport height, and the show-scroll class to the a tag with the scroll-top
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-sroll");
  }

  window.addEventListener("scroll", scrollUp);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="bx bx-chevrons-up"></i>
    </a>
  );
}
