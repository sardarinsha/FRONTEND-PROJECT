// Basic interactivity: size dropdown + Add to Cart, search bar (demo), pagination (demo).

document.addEventListener("DOMContentLoaded", () => {
  const sizeSelect = document.getElementById("size");
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  if (addToCartBtn && sizeSelect) {
    addToCartBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const size = sizeSelect.value;
      if (!size) {
        alert("Please select a size before adding to cart.");
        return;
      }

      alert(`Added product (size: ${size}) to cart.`);
    });
  }

  const searchForms = document.querySelectorAll("form.search-bar");
  searchForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector(
        "input[type='search'], input[type='text']"
      );
      const query = input ? input.value.trim() : "";
      if (!query) {
        alert("Type something to search for.");
      } else {
        alert(`Search requested for: "${query}" (demo only, not filtering yet).`);
      }
    });
  });

  const paginationContainer = document.querySelector(
    "[data-pagination='products']"
  );
  if (paginationContainer) {
    paginationContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.matches("button")) return;

      event.preventDefault();
      const label = target.textContent?.trim();
      if (label) {
        alert(`You clicked "${label}" (pagination is a visual demo only).`);
      }
    });
  }
});
