/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let sectionCount=document.querySelectorAll('section');
let navbar__list=document.querySelector('#navbar__list');
let liCounter=0;
for(let i=0;i<=sectionCount.length-1;i++){
   let li=document.createElement('li');
   li.classList.add('menu__link');
   liCounter++;
   li.innerText=`Section ${liCounter}`;
   navbar__list.appendChild(li);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//Successful message:
/* const body=document.querySelector('body')
const formButton=document.getElementById('button');
formButton.addEventListener('click',function displayMessage(){
   let outerDiv=document.createElement('div');
   let innerDiv=document.createElement('div');
   outerDiv.classList.add('succesfullContainer');
   innerDiv.classList.add('succesfullMessage');
   let text=document.createTextNode('Your submission was received, now close this window please');
   innerDiv.appendChild(text);
   outerDiv.appendChild(innerDiv);
   body.appendChild(outerDiv);
   console.log(innerDiv,outerDiv);
}) */