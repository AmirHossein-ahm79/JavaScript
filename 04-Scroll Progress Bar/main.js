// Detect page scrolling
window.onscroll = function () {
  updateProgress();
};

function updateProgress() {
  // Get current scroll position
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // Calculate total scrollable height
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate scroll percentage
  let scrolled = (winScroll / height) * 100;

  // Update progress bar width
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Display scroll percentage
  document.getElementById("percentage").innerText = Math.round(scrolled) + "%";
}
