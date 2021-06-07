function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

document.getElementById("sendLetter").addEventListener("click", function(event){
  event.preventDefault()
});



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-list ul li");
window.addEventListener("scroll", () => {
  let current = "";
  // console.log(pageYOffset);
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

const menuBtn = document.querySelector('.menu-toggle');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});