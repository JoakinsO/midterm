var main = document.getElementById("main");
var head = document.getElementById("title");
var show = document.getElementById("show");

document.getElementById("bg1").addEventListener("click", function(){
    main.style.display = "block";
});
document.getElementById("bg2").addEventListener("click", function(){
    main.style.display = "block";
});
document.getElementById("bg3").addEventListener("click", function(){
    main.style.display = "block";
});
document.getElementById("bg4").addEventListener("click", function(){
    main.style.display = "block";
});

document.getElementById("bg1").addEventListener("click", function(){
    head.innerHTML = "Head Gear";
    show.innerHTML = "<img src = 'imgs/gears/h1.png' />"
    show.innerHTML = "<img src = 'imgs/gears/h2.png' />"
    show.innerHTML = "<img src = 'imgs/gears/h3.png' />"
})