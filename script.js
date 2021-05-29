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
  // console.log(current);
});

// // *********************
// // This Code is for only the floating card in right bottom corner
// // **********************

// const WebCifarIcon = document.querySelector("#webCifar-icon");
// const WebCifarEl = document.querySelector("#webCifar");
// const close = WebCifarEl.querySelector(".close");
// const youtubeLink = document.querySelector(".youtubeLink");

// WebCifarIcon.addEventListener("click", () => {
//   WebCifarEl.classList.add("active");
// });
// close.addEventListener("click", () => {
//   WebCifarEl.classList.remove("active");
// });

// youtubeLink.setAttribute("href", "https://youtu.be/RsPWEmfOQdU");
