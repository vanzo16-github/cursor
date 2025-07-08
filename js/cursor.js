"use strict";

Object.defineProperty(HTMLMediaElement.prototype, "playing", {
    get: function get() {
        return !!(
            this.currentTime > 0 &&
            !this.paused &&
            !this.ended &&
            this.readyState > 2
        );
    }
});

$("body").on("mouseover", ".box-video", function () {
    var videoBlock = $(this).find(".video"),
        video = videoBlock.get(0);

    if (!videoBlock.playing) {
        video.play();
        videoBlock.css("background-color", "black");
    }
});
$("body").on("mouseleave", ".box-video", function () {
    var videoBlock = $(this).find(".video"),
        video = videoBlock.get(0);
    video.pause();
    video.currentTime = 0
});