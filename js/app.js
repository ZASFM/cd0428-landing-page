/*---------------------------------------------------Nav bar creation virtual DOM---------------------------------------------------*/
// build the nav, here im building a li element and nesting also anchor tags inside then:
let sectionCount=document.querySelectorAll('section');
let navbar__list=document.querySelector('#navbar__list');
//Here im setting a counter than goes from zero to the number of sections
let liCounter=0;
//Looping through through the sections list and for every section i create:
//A li element with the class of menu__link, and inside this an anchor element with he same href as the correspondent section id
for(let i=0;i<=sectionCount.length-1;i++){
   let li=document.createElement('li');
   li.classList.add('menu__link');
   //before assigning the counter to the anchor tag, I want it to increment from 0 to 1 because I don`t have a section 0
   liCounter++;
   let anchors=document.createElement('a');
   anchors.href=`#section${liCounter}`;
   //Now that the counter starts at 1, for every anchor tag i set an innerText of section plus the counter, which starts at 1
   //and ends at 4
   anchors.innerText=`Section ${liCounter}`;
   //Some appending because otherwise it won´t work
   li.appendChild(anchors);
   navbar__list.appendChild(li);
}
/*--------------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------Adding an active and selected class + marking the nav elements-------------------------------------*/
// Add class 'active' to section when near top of viewport, this part keep track of which section the viewport is showing, 
//enlightens the respective nav element to that section displayed:
//Im selecting all the anchor tags
let anchor=document.querySelectorAll('a');
function makeActive(){
   //Here im using a for loop to iterate through all the sections
   for (let section of sectionCount) {
      //Here for each section im getting there relative position to the viewport with the .getBoundingClientRect()
       const box = section.getBoundingClientRect();
       const value=150;
       //Here if any of those sections, the top is lesser or equal the top of the viewport + 150, and the bottom 
       //is greater or equal the bottom of the viewport + 150, i want this section to have the class active
       if (box.top <= value && box.bottom >= value) {
          section.classList.add('active');
          //Now im looping through the anchor list:
            for(let i=0;i<anchor.length;i++){
               //So now, the section that is currently in the viewport i want to get its data-nav attribute, and 
               //see with which of the anchor tags elements before it matches.
               //Note: im using the data-nav, and the anchor innerText, because both have a space =>section+' '+.....
               if(anchor[i].innerText.toString()===section.getAttribute('data-nav').toString()){
                  //Once the are matched, i want to give that anchor a selected class, this way i can use CSS, to mark it
                  anchor[i].parentElement.classList.add('selected');
                  /* anchor[i].style.color='white'; */
               }else{
                  //And if that section the previously was in the viewport and has the selected class, now it is not, i want to 
                  //delete the selected class out of it and give it to the anchor tag whose section is currently at the viewport
                  //Yh, it works like a .toggle 
                  anchor[i].parentElement.classList.remove('selected');
                  /* anchor[i].style.color='black'; */
               }
            }
       }else {
         //And if my section is no longer in the viewport get the class active out of it and give it to the section that
         //is in the viewport.
       section.classList.remove('active');
       }
    }
 }
 //Using the scroll event, so now everytime it scrolls, the function makeActive will be runned.
 //I also tried this with a setInterval(), but it was very conflicting with the other eventListeners
document.addEventListener("scroll", function() { makeActive();})
/*--------------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Smooth transition-----------------------------------------------------*/
//Im getting the anchors and storing them in an array using the spread operator:
let arrayOfAnchors=[...anchor];
//Looping through the array:
for(let i=0;i<arrayOfAnchors.length;i++){
   //For every anchor tag I give them an eventListener.
   //I also tried this with eventDelegation, but it didn't work
   arrayOfAnchors[i].addEventListener('click',function(event){
      //setting the .preventDefault() because otherwise, it would just scroll to the section without applying
      //the smooth transition 
      event.preventDefault();
      //Here im getting the current target href attribute and setting a smooth scroll to it
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})
   })
}
/*------------------------------------------------------------------------------------------------------------------------------------*/


// Scroll to anchor ID using scrollTO event
//This is commented, because I received a review that I interpreted as:
//The nav elements should scroll the the correct section, not with the anchor tags, but with an click event, so did I:
//This part takes care of the scrolling to the correspondent section when one of the nav element are clicked using a click event:
//Looping through the anchor list
/* for(let i=0;i<anchor.length;i++){
   //Setting an eventlistener to every anchor
   anchor[i].addEventListener('click',function(event){
      //Setting the .preventDefault(), so now at clicking at the anchor tags they won´t take me to the section:
      event.preventDefault();
      //Setting my target:
      let target=event.target;
      //Inside this loop Im looping through my list of sections:
      for(let j=0;j<sectionCount.length;j++){
         //Since im gonna click at one of the anchors, I want to get that anchors href and get rid of the # using slice
         //then I want to match it with the id of the section
         if(target.getAttribute('href').slice(1,this.length)===sectionCount[j].id){
            //If the matching thrives, I want using the location.href I want to go the the section that has the same
            //Id of my targeted anchor, and agin Im suing slice because i only want to get the number (0-4)
            location.href=`#section${sectionCount[j].id.slice(7,this.length)}`;
         }
      }
   })
} */
//The code above that is commented, worked, but now it wont accept the smooth transition, so there is a conflict
//And I decided not to include it, but here you can see some more of my DOM skills. 