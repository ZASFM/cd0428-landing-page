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

// build the nav, here im building a li element and nesting also anchor tags inside then:
let sectionCount=document.querySelectorAll('section');
let navbar__list=document.querySelector('#navbar__list');
let liCounter=0;
for(let i=0;i<=sectionCount.length-1;i++){
   let li=document.createElement('li');
   li.classList.add('menu__link');
   liCounter++;
   let anchors=document.createElement('a');
   anchors.href=`#section${liCounter}`;
   anchors.classList.add('smoothTransition')
   anchors.innerText=`Section ${liCounter}`;
   li.appendChild(anchors);
   navbar__list.appendChild(li);
}

// Add class 'active' to section when near top of viewport, this part keep track of which section the viewport is showing, 
//enlightens the respective nav element to that section displayed:
let anchor=document.querySelectorAll('a');
function makeActive(){
   for (let section of sectionCount) {
       const box = section.getBoundingClientRect();
       const value=150;
       if (box.top <= value && box.bottom >= value) {
          section.classList.add('active');
            for(let i=0;i<anchor.length;i++){
               if(anchor[i].innerText.toString()===section.getAttribute('data-nav').toString()){
                  anchor[i].parentElement.classList.add('selected');
                  anchor[i].style.color='white';
               }else{
                  anchor[i].parentElement.classList.remove('selected');
                  anchor[i].style.color='black';
               }
            }
       }else {
       section.classList.remove('active');
       }
    }
 }
document.addEventListener("scroll", function() { makeActive();});

//This part takes care of the scrolling to the correspondent section when one of the nav element are clicked using a click event:
for(let i=0;i<anchor.length;i++){
   anchor[i].addEventListener('click',function(event){
      event.preventDefault();
      let target=event.target;
      for(let j=0;j<sectionCount.length;j++){
         if(target.getAttribute('href').slice(1,this.length)===sectionCount[j].id){
            location.href=`#section${sectionCount[j].id.slice(7,9)}`;
         }
      }
   })
}

document.querySelector('.navbar__menu').addEventListener('click', function (e) {
   /* e.preventDefault(); */
   const target = e.target;
   if (target.classList.contains('smoothTransition')) {
       const id = target.getAttribute('href').slice(1);
       document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
   }
});

 let liEl=document.getElementsByClassName('menu__link');
 let ulEl=document.getElementById('navbar__list');

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
