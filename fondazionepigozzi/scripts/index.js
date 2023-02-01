const mainCarousel = document.getElementById("mainCarousel");
const cardNumber = mainCarousel.childElementCount;
let screenWidth = window.innerWidth;

let scrollPosition = 0;

const getWindowWidth = () => {
  screenWidth = window.innerWidth;
};

const prevCard = () => {
  let offset = screenWidth / 3;
  scrollPosition -= 1;
  if (scrollPosition < 0) {
    mainCarousel.scrollLeft += offset * (cardNumber - 3);
    scrollPosition = cardNumber - 3;
  } else {
    mainCarousel.scrollLeft -= offset;
  }
};

const nextCard = () => {
  let offset = screenWidth / 3;
  scrollPosition += 1;
  if (scrollPosition > cardNumber - 3) {
    mainCarousel.scrollLeft -= offset * scrollPosition;
    scrollPosition = 0;
  } else {
    mainCarousel.scrollLeft += offset;
  }
};
