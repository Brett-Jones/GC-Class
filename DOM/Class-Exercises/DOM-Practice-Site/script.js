
/*
// const paragraphs = document.getElementsByTagName('p')

// console.log(paragraphs);

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].textContent = 'This text is updated!!';
// }

A class is basically a collection/ list

.textContent allows us to asses the text in a class
*/

// const container = document.getElementById('container');
// const newParagraph = document.createElement('p');

// newParagraph.textContent = 'This is a new paragraph, I had to many snacks during the break';

// const paragraph = document.getElementById('myText');
// const button = document.getElementById('myButton');

// button.addEventListener('click', function(){
//     paragraph.textContent = "We changed the text!"
// });


// //function() / () => {} is saying do the thing I coded next.
// button. addEventListener('click', () => {
//     paragraph.textContent = "We changed the text!"
// })



const container = document.getElementById('container');
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph added with JS';


//if you want to put something inside of something, we use append.
//in this case we use appendChild.
container.appendChild(newParagraph); 

const removablePara = document.getElementById('removable');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', () => {
    removablePara.remove();
})



