
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");

    let counter = 0;


    document.getElementById("next").addEventListener("click", () => {
      counter++;
      if (counter >= images.length) {
        counter = 0; 
      }
      slides.style.transform = `translateX(-${counter * 100}vw)`;
    });

    document.getElementById("prev").addEventListener("click", () => {
      counter--;
      if (counter < 0) {
        counter = images.length - 1; 
      }
      slides.style.transform = `translateX(-${counter * 100}vw)`;
    });
