document.addEventListener("DOMContentLoaded", function () {
  const paymentBtns = document.querySelectorAll(".pay__btn");
  const popup = document.getElementById("paymentPopup");
  const closeBtn = document.querySelector(".close-btn");
  const popupContent = document.querySelector(".popup-content");

  function openPopup() {
    popup.classList.add("active");

    gsap.to(popup, {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(popupContent, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  }

  function closePopup() {
    gsap.to(popupContent, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(popup, {
      backgroundColor: "rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        popup.classList.remove("active");
      },
    });
  }

  paymentBtns.forEach(function (paymentBtn) {
    paymentBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openPopup();
    });
  });

  closeBtn.addEventListener("click", function () {
    closePopup();
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  const paymentForm = document.querySelector(".payment-form");
  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Форма отправлена! Добавьте свою логику обработки платежа.");
    closePopup();
  });
});
