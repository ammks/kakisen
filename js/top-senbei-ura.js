const senbeis = document.querySelectorAll(".senbei");

senbeis.forEach((senbei) => {
    const backNum = senbei.getAttribute("data-back");
    const backImg = `img/top-senbei-ura${backNum}.png`;

    senbei.style.setProperty("--front-img", `url(img/top-senbei.png)`);
    senbei.style.setProperty("--back-img", `url(${backImg})`);

    setInterval(() => {
    const shouldFlip = Math.random() < 0.3;
    if (shouldFlip) {
      senbei.classList.toggle("flip");
    }
  }, 3000 + Math.random() * 2000);
});