
const funText = document.getElementById('funText');

const changeTextButton = document.getElementById('changeTextButton');

changeTextButton.addEventListener('click', () => {
    funText.textContent = 'Humans & bananas share 50% of there DNA';
})

// Random Facts --------------------------------------------------------------------------

const factText = document.getElementById('fact');
const newFactButton = document.getElementById('newFact');

const facts = [
    "Scotland's national animal is the unicorn",
    "Strawberries are not berries",
    "Giraffes are 30 times more likely to get hit by lightning than people",
    "Avocados are berries",
    "Australia fought a war against emus.....and LOST",
    "The fear of long words is called Hippopotomonstrosesquippedaliophobia",
    "Ants don’t have lungs"
]
//this allows us to change text to a random fact
newFactButton.addEventListener('click', () => {
    const randomIndex = 
        Math.floor(Math.random() * facts.length)
        factText.textContent = facts[randomIndex];
});

//------------------------------------------------------------------------

const header = document.querySelector('header');
/*querySelector will give us back the things that match in the 
 given location on the page.

*/
header.addEventListener('click', () => {
    header.style.backgroundColor = '007bff';
    header.querySelector('h1').textContent = 'You clicked the header';
})

//--------------------------------------------------------------------------

document.body.addEventListener()







