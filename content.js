function removePaywall() {
  document.querySelectorAll("div.tw-py-16.tw-px-32.tw-bg-black.tw-text-white").forEach(el => el.remove());
  document.querySelectorAll("div.tw-flex.tw-justify-center.tw-items-center.tw-absolute.tw-top-0.tw-z-20").forEach(el => el.remove())
  document.querySelectorAll(".tw-backdrop-blur-sm").forEach(el => {
    el.classList.remove("tw-backdrop-blur-sm");
  });
  document.querySelectorAll("style").forEach(style => {
    if (
      style.textContent.includes("#html-prev-") &&
      style.textContent.includes(".t") &&
      style.textContent.includes("filter:blur")
    ) {
      style.remove();
    }
  });
}

removePaywall();
