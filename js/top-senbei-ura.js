const senbeis = document.querySelectorAll(".senbei");

senbeis.forEach((senbei) => {
    const backNum = senbei.getAttribute("data-back");
    const backImg = `../img/top-senbei-ura${backNum}.png`;
    const frontImg = `../img/top-senbei.png`;

    senbei.style.setProperty("--front-img", `url(${frontImg})`);
    senbei.style.setProperty("--back-img", `url(${backImg})`);  

  setInterval(() => {
    const shouldFlip = Math.random() < 0.5;
    if (shouldFlip) {
      senbei.classList.toggle("flip");
      setTimeout(() => {
        senbei.classList.remove("flip");
      }, 3000); 
    }
  }, 3000 + Math.random() * 3000);
});