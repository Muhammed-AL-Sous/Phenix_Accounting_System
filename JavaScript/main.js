let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
  })
);

// ===================================================== //

let myUp = document.querySelector("span.up");
let sections = document.querySelectorAll("section");

window.onscroll = function () {
  // Scroll To Top
  if (window.scrollY >= 600) {
    myUp.classList.add("show");
  } else {
    myUp.classList.remove("show");
  }

  // كود لتحريك العناصر الخاصة بالأقسام عند التمرير
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
    //  else {
    //   sec.classList.remove("show-animate"); // للتأكد من إزالة الكلاس عندما لا يكون الشرط متحققًا
    // }
  });
};

// Function Scroll To Top
myUp.onclick = function () {
  let scrollToTop = () => {
    let c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 13);
    }
  };
  scrollToTop();
};

// ===================================================== //

document.addEventListener("DOMContentLoaded", function () {
  // Select all boxes
  const boxes = document.querySelectorAll(".row3 .box");

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe the first three boxes initially
  for (let i = 0; i < Math.min(3, boxes.length); i++) {
    observer.observe(boxes[i]);
  }

  // Add event listener to handle scroll
  window.addEventListener("scroll", () => {
    boxes.forEach((box) => {
      if (!box.classList.contains("visible")) {
        observer.observe(box);
      }
    });
  });
});

// ===================================================== //
