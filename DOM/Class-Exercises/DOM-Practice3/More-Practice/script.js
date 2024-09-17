

const submitButton = document.getElementById('submitButton');
const outputParagraph = document.getElementById('output');
const nameInput = document.getElementById('name');


submitButton.addEventListener('click', function(){
    const userName = nameInput.value;
    outputParagraph.textContent = 'Hello, ' + userName + '!'; 
})











