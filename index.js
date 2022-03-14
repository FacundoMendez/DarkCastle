let skip = document.querySelector(".skip");
let video = document.querySelector(".preload");
let videoRayo = document.querySelector(".skip__video")

function videoSkip(){
    skip.addEventListener("click", function(){
        video.style.display= "none"
        videoRayo.innerHTML = `<video class="video__skip-rayo" src="./src/Rayo.mp4" autobuffer="" muted autoplay type="video/mp4"></video>`
    });
}

videoSkip()

