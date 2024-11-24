const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((v) => {
      if (v !== video) {
        v.pause();
      }
    });
  });
});
