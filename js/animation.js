gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".hero__left .hero__stats",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".hero__left .hero__info",
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".hero__left .hero__title",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".hero__left .hero__btns-top",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".hero__left .hero__btns-bottom",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".hero__right img",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".hero.section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});
