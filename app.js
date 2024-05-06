// targeting html elements in javascript
// objective to have the active btn be the one the user clicked
const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
// targeting body tag
const allSections = document.querySelector(".main-content");

// functions handles highlighting the button the user clicks
const handlePageTransitions = () => {
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      console.log(currentBtn[0]);
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      //   has to read += " active-btn" without the space before it it bugs out.
      this.className += " active-btn";
    });
  }
  allSections.addEventListener("click", (e) => {
    // targeting data-id ="" in html file
    const id = e.target.dataset.id;
    if (id) {
      //   remove selected from the other btns
      sectionButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //   hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};
handlePageTransitions();
