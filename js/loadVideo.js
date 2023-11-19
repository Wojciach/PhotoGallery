export function loadVideo() {
    window.addEventListener('load', function() {
        var video = document.querySelector('video');
        var source = document.createElement('source');

        if (window.innerWidth < 720) {
            source.src = "./videos/video_m_480.mp4";
        } else {
            source.src = "./videos/video_l_960.mp4";
        }

        video.appendChild(source);
        video.load();

        video.addEventListener('loadeddata', function() {
            console.log(this.currentSrc);
        });
    });
}