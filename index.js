let index = 0;
let interval = 1000;

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 100)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    setInterval(() => {
      animate(star);
    }, 1000);
  }, index++ * (interval / 3));
}
