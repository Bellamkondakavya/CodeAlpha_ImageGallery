const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {

      if(filter === "all" || card.classList.contains(filter)){
        card.style.display = "block";
      }
      else{
        card.style.display = "none";
      }

    });

  });

});

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(value)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const images = document.querySelectorAll(".card img");

let currentIndex = 0;

images.forEach((image, index) => {

  image.addEventListener("click", () => {

    currentIndex = index;

    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;

  });

});

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;

});

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  lightboxImg.src = images[currentIndex].src;

});

window.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.style.display = "none";
  }

});
