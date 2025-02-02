document.addEventListener('DOMContentLoaded', () => {
    const burgerCheckbox =
   document.getElementById('burger'); 
   const messageTo =
   document.querySelector('.message');
     /* const middleText = 
   document.querySelector('.middle'); */  
       burgerCheckbox.addEventListener('change',function() {
       if (burgerCheckbox.checked) {
            /*  middleText.style.display ='none'; */  messageTo.style.display='block';  
    } else {  /*  middleText.style.display = 'block' ; */messageTo.style.display='none';     } 
   });});

   document.addEventListener('DOMContentLoaded', () => {
    const burgerCheckbox =
   document.getElementById('burger'); 
   const messageTo2 =
   document.querySelector('.apps');
     /* const middleText = 
   document.querySelector('.middle'); */  
       burgerCheckbox.addEventListener('change',function() {
       if (burgerCheckbox.checked) {
            /*  middleText.style.display ='none'; */  messageTo2.style.display='block';  
    } else {  /*  middleText.style.display = 'block' ; */messageTo2.style.display='none';     } 
   });});