document.addEventListener("DOMContentLoaded", () => {
  const partTitles = document.querySelectorAll(".program__part-title");

  partTitles.forEach((title) => {
    const itemsContainer = title.nextElementSibling;

    itemsContainer.style.maxHeight = "0";
    itemsContainer.style.overflow = "hidden";
    itemsContainer.style.transition = "max-height 0.3s ease";

    title.addEventListener("click", () => {
      const isOpen =
        itemsContainer.style.maxHeight !== "0px" &&
        itemsContainer.style.maxHeight !== "";

      if (isOpen) {
        itemsContainer.style.maxHeight = "0";
        title.classList.remove("active");
      } else {
        itemsContainer.style.maxHeight = itemsContainer.scrollHeight + "px";
        title.classList.add("active");
      }
    });
  });
});
