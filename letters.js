f1t = document.querySelector('#f1t')
f1 = document.querySelector('#f1')
f2t = document.querySelector('#f2t')
f2 = document.querySelector('#f2')
f3t = document.querySelector('#f3t')
f3 = document.querySelector('#f3')
f4t = document.querySelector('#f4t')
f4 = document.querySelector('#f4')
f5t = document.querySelector('#f5t')
f5 = document.querySelector('#f5')
f6t = document.querySelector('#f6t')
f6 = document.querySelector('#f6')
f7t = document.querySelector('#f7t')
f7 = document.querySelector('#f7')

l1t = document.querySelector('#l1t')
l1 = document.querySelector('#l1')
l2t = document.querySelector('#l2t')
l2 = document.querySelector('#l2')
l3t = document.querySelector('#l3t')
l3 = document.querySelector('#l3')
l4t = document.querySelector('#l4t')
l4 = document.querySelector('#l4')
l5t = document.querySelector('#l5t')
l5 = document.querySelector('#l5')
l6t = document.querySelector('#l6t')
l6 = document.querySelector('#l6')
l7t = document.querySelector('#l7t')
l7 = document.querySelector('#l7')

adjustor = 0.33

f1t.addEventListener('mouseover', function (e) {
  f1.classList.add("active")
  e.stopPropagation()
})

f1t.addEventListener('mouseout', function (e) {
  f1.classList.remove("active")
  e.stopPropagation()
})

f2t.addEventListener('mouseover', function (e) {
  f2.classList.add("active")
  e.stopPropagation()
})

f2t.addEventListener('mouseout', function (e) {
  f2.classList.remove("active")
  e.stopPropagation()
})

f3t.addEventListener('mouseover', function (e) {
  f3.classList.add("active")
  e.stopPropagation()
})

f3t.addEventListener('mouseout', function (e) {
  f3.classList.remove("active")
  e.stopPropagation()
})

f4t.addEventListener('mouseover', function (e) {
  f4.classList.add("active")
  e.stopPropagation()
})

f4t.addEventListener('mouseout', function (e) {
  f4.classList.remove("active")
  e.stopPropagation()
})

f5t.addEventListener('mouseover', function (e) {
  f5.classList.add("active")
  e.stopPropagation()
})

f5t.addEventListener('mouseout', function (e) {
  f5.classList.remove("active")
  e.stopPropagation()
})

f6t.addEventListener('mouseover', function (e) {
  f6.classList.add("active")
  e.stopPropagation()
})

f6t.addEventListener('mouseout', function (e) {
  f6.classList.remove("active")
  e.stopPropagation()
})

f7t.addEventListener('mouseover', function (e) {
  f7.classList.add("active")
  e.stopPropagation()
})

f7t.addEventListener('mouseout', function (e) {
  f7.classList.remove("active")
  e.stopPropagation()
})



l1t.addEventListener('mouseover', function (e) {
  l1.classList.add("active")
  e.stopPropagation()
})

l1t.addEventListener('mouseout', function (e) {
  l1.classList.remove("active")
  e.stopPropagation()
})

l2t.addEventListener('mouseover', function (e) {
  l2.classList.add("active")
  e.stopPropagation()
})

l2t.addEventListener('mouseout', function (e) {
  l2.classList.remove("active")
  e.stopPropagation()
})

l3t.addEventListener('mouseover', function (e) {
  l3.classList.add("active")
  e.stopPropagation()
})

l3t.addEventListener('mouseout', function (e) {
  l3.classList.remove("active")
  e.stopPropagation()
})

l4t.addEventListener('mouseover', function (e) {
  l4.classList.add("active")
  e.stopPropagation()
})

l4t.addEventListener('mouseout', function (e) {
  l4.classList.remove("active")
  e.stopPropagation()
})

l5t.addEventListener('mouseover', function (e) {
  l5.classList.add("active")
  e.stopPropagation()
})

l5t.addEventListener('mouseout', function (e) {
  l5.classList.remove("active")
  e.stopPropagation()
})

l6t.addEventListener('mouseover', function (e) {
  l6.classList.add("active")
  e.stopPropagation()
})

l6t.addEventListener('mouseout', function (e) {
  l6.classList.remove("active")
  e.stopPropagation()
})

l7t.addEventListener('mouseover', function (e) {
  l7.classList.add("active")
  e.stopPropagation()
})

l7t.addEventListener('mouseout', function (e) {
  l7.classList.remove("active")
  e.stopPropagation()
})

// H2 Transformation


window.onload = function() {
  f1.classList.add("active")
  setTimeout(function(){f2.classList.add("active")}, 100 * adjustor)
  setTimeout(function(){f3.classList.add("active")}, 200 * adjustor)
  setTimeout(function(){f4.classList.add("active")}, 300 * adjustor)
  setTimeout(function(){f5.classList.add("active")}, 400 * adjustor)
  setTimeout(function(){f6.classList.add("active")}, 500 * adjustor)
  setTimeout(function(){f7.classList.add("active")}, 600 * adjustor)

  setTimeout(function(){l1.classList.add("active")}, 700 * adjustor)
  setTimeout(function(){l2.classList.add("active")}, 800 * adjustor)
  setTimeout(function(){l3.classList.add("active")}, 900 * adjustor)
  setTimeout(function(){l4.classList.add("active")}, 1000 * adjustor)
  setTimeout(function(){l5.classList.add("active")}, 1100 * adjustor)
  setTimeout(function(){l6.classList.add("active")}, 1200 * adjustor)
  setTimeout(function(){l7.classList.add("active")}, 1300 * adjustor)


  setTimeout(function(){f1.classList.remove("active")}, 700 * adjustor)
  setTimeout(function(){f2.classList.remove("active")}, 800 * adjustor)
  setTimeout(function(){f3.classList.remove("active")}, 900 * adjustor)
  setTimeout(function(){f4.classList.remove("active")}, 1000 * adjustor)
  setTimeout(function(){f5.classList.remove("active")}, 1100 * adjustor)
  setTimeout(function(){f6.classList.remove("active")}, 1200 * adjustor)
  setTimeout(function(){f7.classList.remove("active")}, 1300 * adjustor)

  setTimeout(function(){l1.classList.remove("active")}, 1400 * adjustor)
  setTimeout(function(){l2.classList.remove("active")}, 1500 * adjustor)
  setTimeout(function(){l3.classList.remove("active")}, 1600 * adjustor)
  setTimeout(function(){l4.classList.remove("active")}, 1700 * adjustor)
  setTimeout(function(){l5.classList.remove("active")}, 1800 * adjustor)
  setTimeout(function(){l6.classList.remove("active")}, 1800 * adjustor)
  setTimeout(function(){l7.classList.remove("active")}, 2000 * adjustor)
}

