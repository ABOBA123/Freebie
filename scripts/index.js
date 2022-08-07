const thirdSlide = document.getElementById('third-slide')
const threeButton = document.getElementById('three')

window.addEventListener('scroll', function () {
    // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
    if (window.pageYOffset >= 670 ) {
        threeButton.className = 'three-button' 
    } else {
        threeButton.className = "three-button off"
    }
})

const men = document.getElementById('men')
 function menactive (){

   men.className='men  men-active'

 }
 setTimeout(menactive, 1500);

 const slide = document.getElementById('third-slide')
 const FetText = document.getElementById('fet')
 window.addEventListener('scroll',function(){
    // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
    if (window.pageYOffset >= 608) {
        FetText.className='fat-text'
    }
    else {
        FetText.className ="fat-text off_fat-text"
    }
 })

 const BlackButton = document.getElementById('black-button')

BlackButton.onclick= function(){

let div= document.createElement("div")
div.id="popup_block";
div.className="popup_block";
div.onclick=function(){
div.remove()
}
let Close_div=document.createElement("block")
div.appendChild(Close_div)
event.stopPropagation();  

let content_div = document.createElement("div");
    content_div.className = "popup-content";
    // event.stopPropagation("popup-content");  
    content_div.innerHTML =`
    <div class="container_popup">
    <a href="" class="popup-cross">X</a>
    <div class="margin-auto text-center">
    <h1 class="color-white font-size-20 ">when you register now<br>
    you will</h1>
    </div>
    <div class="popup_fat-text">
    receive a 10%
    </div>
    <div class="popup-transparent-text">
    <p>buy it for just $25</p>
    </div>
    <div>
    <input class="popup-input" type="text" placeholder="enter your email">
    </div>
    <div class="j-center"> 
    <button class=popup_button>
    <p>Get me 10%</p>
    </button>
    </div>
    <div class="popup_link">
    <a href="https://www.google.ru/webhp?hl=ru">No thanks</a>
    </div>
    <div >
    <p class="popup_basement">Have time to get a discount before it expires<p>
    </div>

    </div>
    `;
      
    div.appendChild(content_div)
    
document.body.appendChild(div)

}