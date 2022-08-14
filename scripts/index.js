const thirdSlide = document.getElementById("third-slide");
const threeButton = document.getElementById("three");

window.addEventListener("scroll", function () {
  // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
  if (window.pageYOffset >= 670) {
    threeButton.className = "three-button";
  } else {
    threeButton.className = "three-button off";
  }
});

const men = document.getElementById("men");
function menactive() {
  men.className = "men  men-active";
}
setTimeout(menactive, 1500);

const slide = document.getElementById("third-slide");
const FetText = document.getElementById("fet");
window.addEventListener("scroll", function () {
  // console.log(this.window.pageYOffset, thirdSlide.scrollHeight)
  if (window.pageYOffset >= 608) {
    FetText.className = "fat-text";
  } else {
    FetText.className = "fat-text off_fat-text";
  }
});

const BlackButton = document.getElementById("black-button");

BlackButton.onclick = function () {
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
  content_div.className = "popup-content";
  content_div.onclick = function (event) {
    event.stopPropagation();
  };
  // event.stopPropagation("popup-content");
  content_div.innerHTML = `
    <div class="container_popup">
    <a href="" class="popup-cross">X</a>
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

const YellowBatton = document.getElementById("yellow-batton_first");
YellowBatton.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBatton.innerHTML = "-";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBatton.innerHTML = "+";
  }
};

const YellowBattonSecond = document.getElementById("yellow-batton_second");
YellowBattonSecond.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonSecond.innerHTML = "-";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonSecond.innerHTML = "+";
  }
};

const YellowBattonThird = document.getElementById("yellow-batton_third");
YellowBattonThird.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonThird.innerHTML = "-";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonThird.innerHTML = "+";
  }
};


const YellowBattonFour = document.getElementById("yellow-batton_four");
YellowBattonFour.onclick = function (e) {
  let div = e.path[1].querySelector("div");
  let p = div.querySelector("p");
  if (p.className === "active") {
    e.path[1].className = "FAQs_container__block";
    div.querySelector("p").className = null;
    YellowBattonFour.innerHTML = "-";
  } else {
    e.path[1].className = "FAQs_container__block FAQ_S_container_active";

    div.querySelector("p").className = "active";
    YellowBattonFour.innerHTML = "+";
  }
};