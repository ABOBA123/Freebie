const BlackLap = document.getElementById("black-lap");

BlackLap.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
};

const thirdSlide = document.getElementById("third-slide");
const fourSlide = document.getElementById("four_slide");
const threeButton = document.getElementById("three");
threeButton.onclick = function (e){
let div = document.querySelector("div")
let p = div.querySelector("p");
}
window.addEventListener("scroll", function () {
  // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
  if (window.pageYOffset >= 670) {
    threeButton.className = "three-button";
  } else {
    threeButton.className = "three-button off";
  }
});

const TextBoxt = document.getElementById("text-box");
// console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
window.addEventListener("scroll", function () {
  // function sayHi() {
  //   alert('Привет');
  // }

  // setTimeout(sayHi, 1000);
  if (window.pageYOffset >= 631) {
    TextBoxt.className = "text-box ";
  } else {
    TextBoxt.className = "text-box out";
  }
});

const men = document.getElementById("men");
function menactive() {
  men.className = "men  men-active";
}
setTimeout(menactive, 1500);

function checkEmail(value) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let email = value.path[0].value;
  let input = value.path[0];
  if (!re.test(email)) {
    let WindowAppears = document.createElement("div");
    WindowAppears.className = "window-appears";
    WindowAppears.innerHTML = `
      <div class="popup-window-appears_container ">
      <div class="green-lap"><div class="white-lap"><p class="red-lap">!</p></div>
      </div>
      <div class="popup__text"><p">A destructive toast.</p></div>
      <a href="" class="WindowAppears_exit" onclick="ExitWindow">x</a>
      </div>
      `;
    document.body.append(WindowAppears);
    input.className = "popup-input warning-input";
  } else {
    let WindowAppears = document.createElement("div");
    WindowAppears.className = "window-appears__green";
    WindowAppears.innerHTML = `
    <div class="popup-window-appears_container ">
    <div class="green-lap color-greeen" ><div class="white-lap"><p class="red-lap">✔</p></div>
    </div>
    <div class="popup__text"><p">A successful toast.</p></div>
    <a href="" class="WindowAppears_exit">x</a>
    </div>
    `;
    document.body.append(WindowAppears);
    input.className = "popup-input";
  }
}
const SaleButton = document.getElementById("sale-button");

SaleButton.onclick = function () {
  // alert("Yello world")
  let div = document.createElement("div");
  div.id = "popup-block";
  div.className = "popup-block";
  div.onclick = function () {
    div.remove();
  };
};

const YellowBatton = document.getElementById("yellow-batton_first");
YellowBatton.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBatton.innerHTML = "+";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBatton.innerHTML = "-";
  }
};
const FourSlide = document.getElementById("four_slide");
const YellowBlackBlock = document.getElementById("yellow_black_block");

window.addEventListener("scroll", function () {
  // console.log(this.window.pageYOffset, FourSlide.scrollHeight)
  if (window.pageYOffset >= 1891) {
    YellowBlackBlock.className = "slide-blackman_black-block";
  } else {
    YellowBlackBlock.className = "slide-blackman_black-block off_block";
  }
  // if (this.window.pageYOffset >= 2215) {
  //   YellowBlackBlock.className = "slide-blackman_black-block opacity_1";
  // }
  // if (this.window.pageYOffset>2874){
  //     YellowBlackBlock.className="slide-blackman_black-block off_block";

  // }
});

const Tutorials = document.getElementById("tutorials");
Tutorials.onclick = function setScrollIntoVieOptions(top) {
  const ThirdSlide = document.querySelector(".third-slide");
  ThirdSlide.scrollIntoView({
    block: "nearest",
    inline: "nearest",
    behavior: "smooth",
  });
};
const CaseStudies = document.getElementById("Case_studies");
CaseStudies.onclick = function () {
  window.scrollTo(0, 3200);
  const windowScrollTop = window.pageYOffset;
};
const Resourses = document.getElementById("Resourses");
Resourses.onclick = function () {
  window.scrollTo(0, 3900);
  const windowScrollTop = window.pageYOffset;
};

const YellowBattonSecond = document.getElementById("yellow-batton_second");
YellowBattonSecond.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonSecond.innerHTML = "+";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonSecond.innerHTML = "-";
  }
};

const YellowBattonThird = document.getElementById("yellow-batton_third");
YellowBattonThird.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");

  console.log(e.path[1].classNamem, p.className);
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonThird.innerHTML = "+";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonThird.innerHTML = "-";
  }
};

const YellowBattonFour = document.getElementById("yellow-batton_four");
YellowBattonFour.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonFour.innerHTML = "+";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonFour.innerHTML = "-";
  }
};

const ThreeBlackButton = document.getElementById("threeblackbutton");

window.addEventListener("scroll", function buttonactive() {
  // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
  if (this.window.pageYOffset >= 2890) {
    ThreeBlackButton.className =
      "with-thee-button__three_button_row with-thee-button__three_button_row-active";
  } else {
    ThreeBlackButton.className = "with-thee-button__three_button_row back";
  }
});
const FourText = document.getElementById("Four-text");

window.addEventListener("scroll", function () {
  // console.log(this.window.pageYOffset, FourSlide.scrollHeight)
  if (window.pageYOffset >= 2091) {
    FourText.className =
      "slide-blackman_big_block slide-blackman_big_block-active";
  } else {
    FourText.className = "slide-blackman_big_block back";
  }
});

const buttons = document.getElementsByClassName("black-button");
// console.log(buttons);

for (let button of buttons) {
  console.log(button);
  button.onclick = function (e) {
    // console.log(e);

    let div = document.createElement("div");
    div.id = "popup_block";
    div.className = "popup_block";
    div.onclick = function () {
      div.remove();
    };

    //   let Close_div = document.createElement("block");
    //   div.appendChild(Close_div);
    //   event.stopPropagation();

    let content_div = document.createElement("div");
    content_div.className = "popup-content opacity__1";
    content_div.onclick = function (event) {
      event.stopPropagation();
    };

    // <div onclick="" class="popup-cross">X</div>
    // event.stopPropagation("popup-content");
    content_div.innerHTML = `
      <div class="container_popup">

      <div class="popup_fat-text text-center">
  Get 10% off <br>
  your first Order
  </div>
  <div class="text-center">
  <h1 class="color-blue font-size-20 ">when you register now<br>
  you will</h1>
  </div>
  <div class="popup-transparent-text color-blue">
  <p>buy it for just $25</p>
  </div>
  
  <input onchange="checkEmail(event)" class="popup-input" type="text" placeholder="enter your email">
  
  <div class="j-center"> 
  <button class=popup_button>
  <p>Get me 10%</p>
  </button>
  </div>
  <div class="popup_link">
  <a href="https://www.google.ru/webhp?hl=ru">No thanks</a>
  </div>
  <div >
  <p class="popup_basement color-blue">Have time to get a discount before it expires<p>
  </div>
  
  </div>
  `;

    div.appendChild(content_div);

    document.body.appendChild(div);
  };
}

function close(e) {
  console.log(e);
}

