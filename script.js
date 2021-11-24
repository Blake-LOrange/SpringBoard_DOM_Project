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

// Give the li the text “four”.
addLi.innerText = "Four"

// Append the li to the ul element.
let uL = document.querySelector("ul")
uL.appendChild(addLi)
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let oLS = document.querySelectorAll("ol li")
for(let i = 0; i < oLS.length; i++){
    oLS[i].style.backgroundColor = "green"
}

// Remove the div with a class of footer
footer.remove();
