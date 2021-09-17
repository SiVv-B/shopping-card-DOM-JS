        
let mylist = Array.from(document.getElementsByClassName('mylist'));
let heart = Array.from(document.getElementsByClassName("heart"));
let remove = Array.from(document.getElementsByClassName("remove"));
let price = Array.from(document.getElementsByClassName("price"));
let minus = Array.from(document.getElementsByClassName("minus"));
let counter = Array.from(document.getElementsByClassName("counter"));
let plus = Array.from(document.getElementsByClassName("plus"));
let total = Array.from(document.getElementsByClassName("total"));
let pricetotal = document.getElementById("pricetotal");



    function calculSommeBlock (){
        let sommePriceBlock = 0;
        for (let i = 0; i < mylist.length ; i++ ) { 
            total[i].innerHTML = Number(price[i].innerHTML) * Number(counter[i].innerHTML) ;    
           
        sommePriceBlock +=  Number(price[i].innerHTML) * Number(counter[i].innerHTML);       
        }

        pricetotal.innerHTML= sommePriceBlock 
    }

    for (let i = 0 ; i < mylist.length ; i++){

plus[i].addEventListener('click' , function() {
 
        counter[i].innerHTML++     
 
   
    calculSommeBlock ();    
})

 minus[i].addEventListener('click' , function(){
     if(counter[i].innerHTML > 0){
         counter[i].innerHTML--

        
         calculSommeBlock();
     }
 })

heart[i].addEventListener('click' , changeColor);
}

function changeColor(event){        
    
    
    if ( event.target.style.color =='red'){

        event.target.style.color ='black';
    
    }else {
        event.target.style.color ='red';
    }


   }

   for (let i = 0; i < mylist.length ; i++ ) {
    let buttonremove = remove[i] ;
    buttonremove.addEventListener('click' , function(event){
        let buttonclick = event.target 
        buttonclick.parentElement.parentElement.remove() 
   
        price[i].innerHTML= 0 ;
   
       
          calculSommeBlock();
    })
   }
  