var autoRotate = true;
var rotateSpeed = -60;

if (window.matchMedia("(max-width: 767px)").matches) {
    var imgWidth = 100;
    var radius = 100;
} else {
    var imgWidth = 80;
    var radius = 240;
}
var imgHeight = 170;
setTimeout(init, 100);

var odrag = document.getElementById("drag-container");
var ospin = document.getElementById("spin-container");
var aImg = ospin.getElementsByTagName("img");
var aVid = ospin.getElementsByTagName("video");
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
            "rotateY(" +
            i * (360 / aEle.length) +
            "deg) translateZ(" +
            radius +
            "px)";
        aEle[i].style.transition = "transform 4s";
        aEle[i].style.transitionDelay =
            delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTranform(obj) {
    if (tY > 40) tY = 40;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(yes) {
    ospin.style.animationPlayState = yes ? "running" : "paused";
}

var sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
    var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
    )}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
    };

    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };

    return false;
};


// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
img.onclick = function () {
    modal.style.display = "block";
    img.src = this.src;
}
img2.onclick = function () {
    modal2.style.display = "block";
    img2.src = this.src;
}
img3.onclick = function () {
    modal3.style.display = "block";
    img3.src = this.src;
}
img4.onclick = function () {
    modal4.style.display = "block";
    img4.src = this.src;
}
img5.onclick = function () {
    modal5.style.display = "block";
    img5.src = this.src;
}
img6.onclick = function () {
    modal6.style.display = "block";
    img6.src = this.src;
}
img7.onclick = function () {
    modal7.style.display = "block";
    img7.src = this.src;
}

var Cl = document.getElementsByClassName("close")[0];

Cl.onclick = function () {
    modal.style.display = "none";
}
var cl2 = document.getElementsByClassName("close2")[0];

cl2.onclick = function () {
    modal2.style.display = "none";
}
var cl3 = document.getElementsByClassName("close3")[0];

cl3.onclick = function () {
    modal3.style.display = "none";
}
var cl4 = document.getElementsByClassName("close4")[0];

cl4.onclick = function () {
    modal4.style.display = "none";
}
var cl5 = document.getElementsByClassName("close5")[0];

cl5.onclick = function () {
    modal5.style.display = "none";
}
var cl6 = document.getElementsByClassName("close6")[0];

cl6.onclick = function () {
    modal6.style.display = "none";
}
var cl7 = document.getElementsByClassName("close7")[0];

cl7.onclick = function () {
    modal7.style.display = "none";
}

//websites//

const items = document.querySelectorAll('.item-port')

items.forEach((el) => {
  const image = el.querySelectorAll('.img-port')

  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })

   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })

  el.addEventListener('', (e) => {
    gsap.set(image, { x: e.offsetX - 200 })
  })
})