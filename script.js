const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
var backgroundVideo = document.getElementById("backgroundVideo")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");

        var videoSrc = e.getAttribute("data-video-src");
        fixed.style.backgroundImage = `url(${image})`;
        backgroundVideo.src = videoSrc;
        backgroundVideo.play();
    })
})


// document.addEventListener(`DOMContentLoaded`, function() {
//     const videoDiv = document.querySelector(`.elem1`);
//     const videoSrc = videoDiv.getAttribute(`data-video-src`);

//     if (videoSrc) {
//         const videoElement = document.createElement(`video`);
//         videoElement.src = videoSrc;
//         videoElement.controls = true;
//         videoDiv.appendChild(videoElement);
//     }
// });