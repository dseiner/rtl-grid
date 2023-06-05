window.addEventListener('DOMContentLoaded', () => {
  const myDiv = document.getElementById('myDiv');

  function updateWidth() {
    const width = myDiv.offsetWidth;
    myDiv.textContent = `Width: ${width}px`;
  }

  // Initial width update
  updateWidth();

  // Update width on window resize
  window.addEventListener('resize', updateWidth);
});
