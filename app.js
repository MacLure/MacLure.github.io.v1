html = document.querySelector('#html')
css = document.querySelector('#css')
js = document.querySelector('#js')
react = document.querySelector('#react')
redux  = document.querySelector('#redux')
sass = document.querySelector('#sass')
ruby = document.querySelector('#ruby')
rails = document.querySelector('#rails')
git = document.querySelector('#git')

htmlText = document.querySelector('#htmlText')
cssText = document.querySelector('#cssText')
jsText = document.querySelector('#jsText')
reactText = document.querySelector('#reactText')
reduxText  = document.querySelector('#reduxText')
sassText = document.querySelector('#sassText')
rubyText = document.querySelector('#rubyText')
railsText = document.querySelector('#railsText')
gitText = document.querySelector('#gitText')

scrollButton = document.querySelector('.scrollButton')
scrollButton.addEventListener("click", function () {window.scroll({
  top: window.innerHeight   , 
  left: 0, 
  behavior: 'smooth'
});})

html.addEventListener('mouseover', function () {htmlText.innerText=('HTML 5')})
css.addEventListener('mouseover', function () {cssText.innerText=('CSS 3')})
js.addEventListener('mouseover', function () {jsText.innerText=('Javascript')})
react.addEventListener('mouseover', function () {reactText.innerText=('React')})
redux.addEventListener('mouseover', function () {reduxText.innerText=('Redux')})
sass.addEventListener('mouseover', function () {sassText.innerText=('Sass')})
ruby.addEventListener('mouseover', function () {rubyText.innerText=('Ruby')})
rails.addEventListener('mouseover', function () {railsText.innerText=('rails')})
git.addEventListener('mouseover', function () {gitText.innerText=('Git')})

html.addEventListener('mouseout', function () {htmlText.innerText=('')})
css.addEventListener('mouseout', function () {cssText.innerText=('')})
js.addEventListener('mouseout', function () {jsText.innerText=('')})
react.addEventListener('mouseout', function () {reactText.innerText=('')})
redux.addEventListener('mouseout', function () {reduxText.innerText=('')})
sass.addEventListener('mouseout', function () {sassText.innerText=('')})
ruby.addEventListener('mouseout', function () {rubyText.innerText=('')})
rails.addEventListener('mouseout', function () {railsText.innerText=('')})
git.addEventListener('mouseout', function () {gitText.innerText=('')})

// diamond transformations

const diamond1 = document.querySelector('.diamond1')
const diamond2 = document.querySelector('.diamond2')
const diamond3 = document.querySelector('.diamond3')
const diamond4 = document.querySelector('.diamond4')

const walk = 50;

function move1(e) {
  const { offsetWidth: width, offsetHeight: height } = diamond1Activator;
  let {offsetX: x, offsetY: y} = e;
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  diamond1.classList.add("gradientHover")
  diamond1.style.transform = `perspective(400px) RotateZ(45deg) rotateY(${yWalk}deg) rotateX(${xWalk}deg)`
}

function reset1() {
  diamond1.classList.remove("gradientHover")
  diamond1.style.transform = `Rotate(45deg)`
}

function move2(e) {
  const { offsetWidth: width, offsetHeight: height } = diamond2Activator;
  let {offsetX: x, offsetY: y} = e;
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  diamond2.classList.add("gradientHover")
  diamond2.style.transform = `perspective(400px) RotateZ(45deg) rotateY(${yWalk}deg) rotateX(${xWalk}deg)`
}

function reset2() {
  diamond2.classList.remove("gradientHover")
  diamond2.style.transform = `Rotate(45deg)`
}
function move3(e) {
  const { offsetWidth: width, offsetHeight: height } = diamond3Activator;
  let {offsetX: x, offsetY: y} = e;
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  diamond3.classList.add("gradientHover")
  diamond3.style.transform = `perspective(400px) RotateZ(45deg) rotateY(${yWalk}deg) rotateX(${xWalk}deg)`
}

function reset3() {
  diamond3.classList.remove("gradientHover")
  diamond3.style.transform = `Rotate(45deg)`
}

function move4(e) {
  const { offsetWidth: width, offsetHeight: height } = diamond4Activator;
  let {offsetX: x, offsetY: y} = e;
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  diamond4.classList.add("gradientHover")
  diamond4.style.transform = `perspective(400px) RotateZ(45deg) rotateY(${yWalk}deg) rotateX(${xWalk}deg)`
}

function reset4() {
  diamond4.classList.remove("gradientHover")
  diamond4.style.transform = `Rotate(45deg)`
}
const diamond1Activator = document.querySelector('.diamond1Activator')
const diamond2Activator = document.querySelector('.diamond2Activator')
const diamond3Activator = document.querySelector('.diamond3Activator')
const diamond4Activator = document.querySelector('.diamond4Activator')

diamond1Activator.addEventListener('mousemove', move1);
diamond1Activator.addEventListener('mouseleave', reset1);

diamond2Activator.addEventListener('mousemove', move2);
diamond2Activator.addEventListener('mouseleave', reset2);

diamond3Activator.addEventListener('mousemove', move3);
diamond3Activator.addEventListener('mouseleave', reset3);

diamond4Activator.addEventListener('mousemove', move4);
diamond4Activator.addEventListener('mouseleave', reset4);