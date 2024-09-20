
const button = document.querySelectorAll('.class-button');

//querySelectorAll = node list is like an array, each node is an element found by the querySelector

//arrow function inside the forEach, 'button' is referring to the element in the array
button.forEach( (button) => {

    button.addEventListener('click', () => {
        button.style.backgroundColor = 'lightblue';
    })

});












