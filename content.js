function removePaywall() {
  document.querySelectorAll("div.tw-py-16.tw-px-32.tw-bg-black.tw-text-white").forEach(el => el.remove());
  document.querySelectorAll("div.tw-flex.tw-justify-center.tw-items-center.tw-absolute.tw-top-0.tw-z-20").forEach(el => el.remove())
  document.querySelectorAll(".tw-backdrop-blur-sm").forEach(el => {
    el.classList.remove("tw-backdrop-blur-sm");
  });
  document.querySelectorAll("style").forEach(style => {
    const content = style.textContent;
    if (
      content.match(/#html-prev-\d+\s+\.t\s*{[^}]*filter\s*:\s*blur/i) ||
      content.match(/#t\d+_\d+~\.t\s*{[^}]*filter\s*:\s*blur/i)
    ) {
      style.remove();
    }
  });
}

removePaywall();
