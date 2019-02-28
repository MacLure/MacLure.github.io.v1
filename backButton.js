
const backButtonBorder = document.querySelector('.backButtonBorder')
const backButton = document.querySelector('.backButton')

backButton.addEventListener('mouseover', function() {
  backButtonBorder.classList.add("hovering")
});

backButton.addEventListener('mouseleave', function() {
  backButtonBorder.classList.remove("hovering")
});