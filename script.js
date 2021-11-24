//1. Select the section with an id of container without using querySelector.
document.getElementsByClassName('section')

//Select the section with an id of container using querySelector.
document.querySelector('#container')

//Select all of the list items with a class of “second”.
document.querySelectorAll(".second")

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol', 'li')

//Give the section with an id of container the text “Hello!”.
let container = document.querySelector('#container')
container.innerText = "Hello!"

// Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('#footer')
footer.className += "main"

// Remove the class main on the div with a class of footer.
footer.classname = "footer"

// Create a new li element.
document.createElement("li");