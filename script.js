
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");

    let counter = 0;

    // Next button
    document.getElementById("next").addEventListener("click", () => {
      counter++;
      if (counter >= images.length) {
        counter = 0; // loop back to first image
      }
      slides.style.transform = `translateX(-${counter * 100}vw)`;
    });

    // Previous button
    document.getElementById("prev").addEventListener("click", () => {
      counter--;
      if (counter < 0) {
        counter = images.length - 1; // loop back to last image
      }
      slides.style.transform = `translateX(-${counter * 100}vw)`;
    });
