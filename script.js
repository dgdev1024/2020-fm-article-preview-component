// DOM Elements
const shareButton = document.querySelector(".card__details-share-button");
const sharePane = document.querySelector(".card__details-share-pane");

// Toggle Share Pane
const toggleSharePane = () => {
  const { classList } = sharePane;
  const visibleClass = "card__details-share-pane--visible";
  if (classList.contains(visibleClass)) {
    classList.remove(visibleClass);
  } else {
    classList.add(visibleClass);
  }
};

// On Window Load
window.onload = () => {
  shareButton.addEventListener("click", toggleSharePane);
};
