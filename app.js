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

function resetProjects() {
  diamond1.style.opacity=(`1`)
  diamond2.style.opacity=(`1`)
  diamond3.style.opacity=(`1`)
  diamond4.style.opacity=(`1`)
}

html.addEventListener('mouseover', function () {htmlText.classList.remove('hiddenTechName')})
css.addEventListener('mouseover', function () {cssText.classList.remove('hiddenTechName')})
js.addEventListener('mouseover', function () {jsText.classList.remove('hiddenTechName')})
react.addEventListener('mouseover', function () {reactText.classList.remove('hiddenTechName')
  diamond2.style.opacity=(`${opacity}`)
  diamond3.style.opacity=(`${opacity}`)
  diamond4.style.opacity=(`${opacity}`)
})
redux.addEventListener('mouseover', function () {reduxText.classList.remove('hiddenTechName')
  diamond2.style.opacity=(`${opacity}`)
  diamond3.style.opacity=(`${opacity}`)
  diamond4.style.opacity=(`${opacity}`)
})
sass.addEventListener('mouseover', function () {sassText.classList.remove('hiddenTechName')
  diamond1.style.opacity=(`${opacity}`)
  diamond3.style.opacity=(`${opacity}`)
  diamond4.style.opacity=(`${opacity}`)
})
ruby.addEventListener('mouseover', function () {rubyText.classList.remove('hiddenTechName')
  diamond3.style.opacity=(`${opacity}`)
  diamond4.style.opacity=(`${opacity}`)
})
rails.addEventListener('mouseover', function () {railsText.classList.remove('hiddenTechName')
  diamond3.style.opacity=(`${opacity}`)
  diamond4.style.opacity=(`${opacity}`)
})
git.addEventListener('mouseover', function () {gitText.classList.remove('hiddenTechName')})

html.addEventListener('mouseout', function () {htmlText.classList.add('hiddenTechName'), resetProjects()})
css.addEventListener('mouseout', function () {cssText.classList.add('hiddenTechName'), resetProjects()})
js.addEventListener('mouseout', function () {jsText.classList.add('hiddenTechName'), resetProjects()})
react.addEventListener('mouseout', function () {reactText.classList.add('hiddenTechName'), resetProjects()})
redux.addEventListener('mouseout', function () {reduxText.classList.add('hiddenTechName'), resetProjects()})
sass.addEventListener('mouseout', function () {sassText.classList.add('hiddenTechName'), resetProjects()})
ruby.addEventListener('mouseout', function () {rubyText.classList.add('hiddenTechName'), resetProjects()})
rails.addEventListener('mouseout', function () {railsText.classList.add('hiddenTechName'), resetProjects()})
git.addEventListener('mouseout', function () {gitText.classList.add('hiddenTechName'), resetProjects()})

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

const opacity = 0.4

function resetTechStyles() {
htmlText.classList.add('hiddenTechName')
cssText.classList.add('hiddenTechName')
jsText.classList.add('hiddenTechName')
reactText.classList.add('hiddenTechName')
reduxText.classList.add('hiddenTechName')
sassText.classList.add('hiddenTechName')
rubyText.classList.add('hiddenTechName')
railsText.classList.add('hiddenTechName')
gitText.classList.add('hiddenTechName')
html.style.opacity=('1')
css.style.opacity=('1')
js.style.opacity=('1')
react.style.opacity=('1')
redux.style.opacity=('1')
sass.style.opacity=('1')
ruby.style.opacity=('1')
rails.style.opacity=('1')
git.style.opacity=('1')
}

diamond1Activator.addEventListener('mousemove', move1);
diamond1Activator.addEventListener('mouseleave', reset1);
diamond1Activator.addEventListener('mouseover', function() {
  htmlText.classList.remove('hiddenTechName')
  cssText.classList.remove('hiddenTechName')
  jsText.classList.remove('hiddenTechName')
  reactText.classList.remove('hiddenTechName')
  reduxText.classList.remove('hiddenTechName')
  sass.style.opacity=(`${opacity}`)
  rubyText.classList.remove('hiddenTechName')
  railsText.classList.remove('hiddenTechName')
  gitText.classList.remove('hiddenTechName')
});

diamond1Activator.addEventListener('mouseout', function(){resetTechStyles()})

diamond2Activator.addEventListener('mousemove', move2);
diamond2Activator.addEventListener('mouseleave', reset2);
diamond2Activator.addEventListener('mouseover', function() {
  htmlText.classList.remove('hiddenTechName')
  cssText.classList.remove('hiddenTechName')
  jsText.classList.remove('hiddenTechName')
  react.style.opacity=(`${opacity}`)
  redux.style.opacity=(`${opacity}`)
  sassText.classList.remove('hiddenTechName')
  rubyText.classList.remove('hiddenTechName')
  railsText.classList.remove('hiddenTechName')
  gitText.classList.remove('hiddenTechName')

});
diamond2Activator.addEventListener('mouseout', function(){resetTechStyles()})


diamond3Activator.addEventListener('mousemove', move3);
diamond3Activator.addEventListener('mouseleave', reset3);
diamond3Activator.addEventListener('mouseover', function() {
  htmlText.classList.remove('hiddenTechName')
  cssText.classList.remove('hiddenTechName')
  jsText.classList.remove('hiddenTechName')
  react.style.opacity=(`${opacity}`)
  redux.style.opacity=(`${opacity}`)
  sass.style.opacity=(`${opacity}`)
  ruby.style.opacity=(`${opacity}`)
  rails.style.opacity=(`${opacity}`)
  gitText.classList.remove('hiddenTechName')
});
diamond3Activator.addEventListener('mouseout', function(){resetTechStyles()})


diamond4Activator.addEventListener('mousemove', move4);
diamond4Activator.addEventListener('mouseleave', reset4);
diamond4Activator.addEventListener('mouseover', function() {
  htmlText.classList.remove('hiddenTechName')
  cssText.classList.remove('hiddenTechName')
  jsText.classList.remove('hiddenTechName')
  react.style.opacity=(`${opacity}`)
  redux.style.opacity=(`${opacity}`)
  sass.style.opacity=(`${opacity}`)
  ruby.style.opacity=(`${opacity}`)
  rails.style.opacity=(`${opacity}`)
  gitText.classList.remove('hiddenTechName')
});
diamond4Activator.addEventListener('mouseout', function(){resetTechStyles()})
