//All
function Home() {
    window.location.href = 'index.html';
}

function Gizmos() {
    window.location.href = 'Aspect1.html';
}

function Pixels() {
    window.location.href = 'Aspect2.html';
}

function Chuck() {
    window.location.href = 'Aspect3.html';
}


//Home
loadBanner();

var index=0;
    function changeBanner(){ 
      [].forEach.call(document.getElementsByClassName("galleryImages"),function (v,i) { document.getElementsByClassName("galleryImages")[i].hidden = i!==index});
      index = (index+1) % document.getElementsByClassName("galleryImages").length;
      console.log("test");    
    }

function loadBanner() {
    var srcs = ["Images/P06.Campus1.jpg","Images/P07.Campus2.jpg","Images/P08.Campus3.jpg"];
    var c = 0;
    
    imgs = [];
    
    for(i = srcs.length - 1; i >= 0; i--) {
        imgs[i] = new Image();
        imgs[i].src = srcs[i];
        imgs[i].onload = function() {loaded();};
    }
    
    loaded = function() {
        c++;
        if(c === srcs.length){
            window.onload = function () {setInterval(changeBanner, 3000)};
            changeBanner();
        }
    };
    
    this.update = function() {};
}

//Vehicles
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