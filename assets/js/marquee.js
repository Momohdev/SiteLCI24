document.addEventListener("DOMContentLoaded", () => {
  // Réutilisation des mêmes fonctions d'animation pour les nouveaux éléments
  function animateInteractiveChars(chars, reverse = false) {
    const staggerOptions = {
      each: 0.35,
      from: reverse ? "start" : "end",
      ease: "linear",
    };

    gsap.fromTo(
      chars,
      { fontWeight: 100 },
      {
        fontWeight: 900,
        duration: 1,
        ease: "none",
        stagger: staggerOptions,
        scrollTrigger: {
          trigger: chars[0].closest(".interactive-marquee-container"),
          start: "50% bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }

  const splitInteractiveText = new SplitType(".interactive-item h1", { types: "chars" });

  const interactiveMarqueeContainers = document.querySelectorAll(".interactive-marquee-container");

  interactiveMarqueeContainers.forEach((container, index) => {
    let start = "0%";
    let end = "-15%";

    if (index % 2 === 0) {
      start = "0%";
      end = "10%";
    }

    const marquee = container.querySelector(".interactive-marquee");
    const words = marquee.querySelectorAll(".interactive-item h1");

    gsap.fromTo(
      marquee,
      {
        x: start,
      },
      {
        x: end,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "150% top",
          scrub: true,
        },
      }
    );

    words.forEach((word) => {
      const chars = Array.from(word.querySelectorAll(".char"));
      if (chars.length) {
        const reverse = index % 2 !== 0;
        animateInteractiveChars(chars, reverse);
      }
    });
  });
});
