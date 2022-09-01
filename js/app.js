/*---------------------------------------------------Nav bar elements creation virtual DOM---------------------------------------------------*/
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
               if(
                  anchor[i].innerText.toString()===section.getAttribute('data-nav').toString()
               ){
                  //Once the are matched, i want to give that anchor a selected class, this way i can use CSS, to mark it
                  anchor[i].parentElement.classList.add('selected');
               }else{
                  //And if that section the previously was in the viewport and has the selected class, now it is not, i want to 
                  //delete the selected class out of it and give it to the anchor tag whose section is currently at the viewport
                  //Yh, it works like a .toggle 
                  anchor[i].parentElement.classList.remove('selected');
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
      document.querySelector(
         this.getAttribute('href')).scrollIntoView({behavior:'smooth'}
         )
   })
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------Setting the submit button to disable until I get my inputs filed----------------------------*/
let submitBtn=document.getElementById('button');
let arrayOfInputs=document.querySelectorAll('input');
//Looping through list of inputs:
for(let i=0;i<arrayOfInputs.length-1;i++){
   //for everytime I type something in my inputs, so this is easier to pull out than setting a timeInterval()
   arrayOfInputs[i].oninput=()=>{
      //If my inputs from index 0-4 have something as value, so they are not empty
      if (!(arrayOfInputs[0].value == '') 
      && !(arrayOfInputs[1].value == '') 
      && !(arrayOfInputs[2].value == '') 
      && !(arrayOfInputs[3].value == '') 
      && !(arrayOfInputs[4].value == '')) {
         //then I want ot erase my disabled attribute from my submit input
         submitBtn.removeAttribute('disabled');
     }
   }
}
//And now since everytime I click at submit input, even-though if the inputs are empty the alert will pop
//so now  disabling the submit input until the inputs get fulfilled, will make sure that the 
//alert popup wont show. 
submitBtn.addEventListener('click',function(){
   alert('Your application was successfully received');
})
/*-------------------------------------------------------------------------------------------------------------------------------------*/