function Home() {
    window.location.href = 'index.html';
}

function Vehicles() {
    window.location.href = 'Aspect1.html';
}

function Computers() {
    window.location.href = 'LiveAction.html';
}

function Pixar() {
    window.location.href = 'Pixar.html';
}

function Campus() {
    window.location.href = 'ThemeParks.html';
}

function toggleMe(a) {
    var e = document.getElementById(a);
    if(!e) return true;
    if(e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return false;
}

var index=0;
    function changeBanner(){ 
      [].forEach.call(document.getElementsByClassName("galleryImages"),function (v,i) { document.getElementsByClassName("galleryImages")[i].hidden = i!==index});
      index = (index+1) % document.getElementsByClassName("galleryImages").length;
    }
    window.onload = function () {setInterval(changeBanner, 3000)};

