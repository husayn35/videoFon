// Videolarni avtomatik ijro qilish funksiyasi
document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(".video-card"); // video-card larni olish

  // Faqat mobil qurilmalarda ishlashni ta'minlash
  const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Mobil qurilma tekshiruvi

  if (!isMobile) return; // Agar mobil emas bo'lsa, kodni ishlatmaymiz

  let currentVideoIndex = 0; // Hozirgi video indeksi

  // Video oynasini ko'rinishi
  const playVideo = (videoElement) => {
    videoElement.play();
  };

  // Video oynasini to'xtatish
  const pauseVideo = (videoElement) => {
    videoElement.pause();
  };

  // Keyingi video'ga o'tish
  const playNextVideo = () => {
    const nextIndex = currentVideoIndex + 1;
    if (nextIndex < videoCards.length) {
      const nextVideo = videoCards[nextIndex].querySelector("video");
      playVideo(nextVideo); // keyingi videoni ijro qilish
      currentVideoIndex = nextIndex; // yangi video indeksini yangilash
    }
  };

  // Video elementlari bo'ylab harakatlanish
  const handleScroll = () => {
    videoCards.forEach((card, index) => {
      const video = card.querySelector("video"); // har bir video ni olish
      const rect = card.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0; // video ko'rinadigan joyda ekanligini tekshirish

      // video controls atributini qo'shish
      video.setAttribute("controls", "controls");

      // Agar video ko'rinadigan joyda bo'lsa, uni ijro qilish
      if (isInView && !video.paused) {
        playVideo(video);
      } else {
        pauseVideo(video);
      }

      // Keyingi video oynasini avtomatik ravishda ijro qilish
      if (isInView && currentVideoIndex !== index) {
        if (currentVideoIndex >= 0) {
          const previousVideo =
            videoCards[currentVideoIndex].querySelector("video");
          pauseVideo(previousVideo); // oldingi videoni to'xtatish
        }
        currentVideoIndex = index;
        playVideo(video);
      }
    });
  };

  // 'ended' voqeasini tekshirib, keyingi videoga o'tish
  videoCards.forEach((card, index) => {
    const video = card.querySelector("video");

    // Video tugagandan so'ng keyingi video'ga o'tish
    video.addEventListener("ended", () => {
      if (index === currentVideoIndex) {
        playNextVideo();
      }
    });
  });

  // Scroll holatida video ijro qilishni boshqarish
  window.addEventListener("scroll", handleScroll);

  // Dastlabki video ijro qilish
  handleScroll();
});
