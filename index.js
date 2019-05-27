// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
  console.log(
    Array.from(document.getElementsByTagName('h1')[0].children)
      .filter(node => node.innerText === 'USA')[0].innerHTML
  )
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
  console.log(
    ...Array.from(document.getElementsByClassName('empName'))
      .filter(node => node.nextElementSibling &&
        node.nextElementSibling.innerText.includes('Sales'))
      .map(node => node.innerText)
  )
}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
  console.log(
    ...Array.from(document.getElementsByTagName('a'))
      .map(anchor => Array.from(anchor.children)
        .filter(child => child.localName === 'span')[0]
      ).filter(node => node)
      .map(node => node.innerHTML)
  )
}
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
  Array.from(document.getElementsByName('skills')
  [0].children).filter(child => child.selected)
    .forEach(node => {
      console.log(node.value, node.innerHTML)
    })
}
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute() {
  document.querySelectorAll('*[data-customAttr]')
    .forEach(element => {
      console.log(element.value, element)
    })
}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let numOut = document.getElementById('sum')
num1.addEventListener('change', handleNumChange)
num2.addEventListener('change', handleNumChange)
function handleNumChange() {
  let out1 = +num1.value
  let out2 = +num2.value
  let sum = out1 + out2
  numOut.innerText = (sum === sum) ? sum : 'Cannot add'
}
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let skillIn = document.getElementsByName('skills')[0]
skillIn.addEventListener('change', () => {
  alert(`Are you sure ${skillIn.value} is one of your skills?`)
})
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let prevColor = ''
let colorButtons = document.getElementsByName('favoriteColor')
colorButtons.forEach(btn => {
  btn.addEventListener('change', event => {
    let curColor = event.target.value
    if (prevColor) {
      alert(`So you like ${curColor} more than ${prevColor} now?`)
    } else {
      alert(`I understand. You like ${curColor}.`)
    }
    prevColor = curColor
  })
})
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
Array.from(document.getElementsByClassName('empName')
).forEach(node => {
  node.parentElement.addEventListener('mouseenter', () => {
    node.toggleAttribute('hidden')
  })
})

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
let timeOut = document.getElementById('currentTime')
setInterval(setDate, 1000);
function setDate() {
  let dayTime
  let dateArray = String(new Date()).split(' ')
    .filter(str => str.includes(':'))[0].split(':')
  if (+dateArray[0] > 11) {
    dayTime = ' PM'
    if(+dateArray[0] > 12) {
      dateArray[0] = +dateArray[0] - 12
    }   
  } else {
    dayTime = ' AM'
    if(+dateArray[0] === 0) {
      dateArray[0] = 12
    }
  }
  timeOut.innerText = dateArray.join(':') + dayTime
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
let helloWorldOut = document.getElementById('helloWorld')
helloWorldOut.addEventListener('click', () => {
  setTimeout(() => {
    helloWorldOut.setAttribute('style',
      `color:RGB(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`)
  }, 3000)
})
function randomNumber(max = 1, min = 0) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
  func(node)
  node.childNodes.forEach(child => {
    walkTheDOM(child, func)
  })
}
