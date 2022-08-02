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
