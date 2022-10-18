// start to define the elements that will cearte the nav bar

let myNavbar = document.querySelector("ul");
let mySection = document.querySelectorAll("section");

// building the function that will invoke the nav items

let buildMyNav = () => {
  let navStr = "";

  // starting to loop over sections to extract the data inside (id,data-nav)

  mySection.forEach((section) => {
    navStr += `<li><a href="#${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
  });
  // setting the markup to the ul to be ready for use .

  myNavbar.innerHTML = navStr;
};
//invoke the function
buildMyNav();

// Add class 'active' to section when near top of viewport

onscroll = () => {
  // start  to define the top are of each  section element
  let scrollArea = document.documentElement.scrollTop;
  // looping the sections
  mySection.forEach((section) => {
    // set the condition to add/remove the active class
    if (
      scrollArea >= section.offsetTop - 250 &&
      scrollArea < section.offsetTop + section.offsetHeight
    ) {
      section.classList.add("your-active-class");
      let secId = section.attributes.id.value;
      deleteClass();
      addActive(secId);
    } else {
      section.classList.remove("your-active-class");
    }
  });
};

// Set sections as active
// start to target the link (a);
let liA = document.querySelector("li a");
// added the active class for the first (a)
liA.classList.add("high-light");

//Remove class function

let deleteClass = () => {
  let a = document.querySelectorAll("a");
  a.forEach((a) => {
    a.classList.remove("high-light");
  });
};

//Add class function

let addActive = (id) => {
  let aId = `a[href="#${id}"]`;

  document.querySelector(aId).classList.add("high-light");
};

// adding the bars functionalty !
let clientWidth = document.documentElement.clientWidth;
// adding the condition to functionallty (to keep fit with small screens)
console.log(clientWidth);
if (clientWidth < 768) {
  let bars = document.querySelector(".bars");

  bars.addEventListener("click", () => {
    let clicky = document.querySelector("#navbar__list");

    clicky.style.display = "flex";
  });

  // toggle off the navbar when click out side the nav !

  let omitBars = document.querySelector("main");

  omitBars.addEventListener("click", () => {
    let clicky = document.querySelector("#navbar__list");
    clicky.style.display = "none";
  });
}
