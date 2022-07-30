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
