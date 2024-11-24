function addDownloadLinkToMedia() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent); // Qurilma mobilmi?

  // Lazy elementlar (rasmlar va videolar)
  const mediaElements = document.querySelectorAll(".lazy");

  mediaElements.forEach((element) => {
    // Agar element rasm bo'lsa
    if (element.tagName.toLowerCase() === "img") {
      const downloadLink = document.createElement("a");
      downloadLink.href = element.dataset.src; // Rasm manzili
      downloadLink.download = "image.png"; // Foydalanuvchiga rasmni yuklab olish
      downloadLink.textContent = "Rasmni yuklab olish"; // Matn
      downloadLink.style.display = "block"; // Yuklab olish havolasini ko'rsatish
      downloadLink.style.marginTop = "10px"; // Biroz bo'sh joy qo'shish
      element.parentElement.appendChild(downloadLink); // Yuklab olish havolasini rasmga qo'shish
    }

    // Agar element video bo'lsa
    if (element.tagName.toLowerCase() === "video") {
      const source = element.querySelector("source");
      if (source) {
        const downloadLink = document.createElement("a");
        downloadLink.href = source.dataset.src; // Video manzili
        downloadLink.download = "video.mp4"; // Foydalanuvchiga videoni yuklab olish
        downloadLink.textContent = "Videoni yuklab olish"; // Matn
        downloadLink.style.display = "block"; // Yuklab olish havolasini ko'rsatish
        downloadLink.style.marginTop = "10px"; // Biroz bo'sh joy qo'shish
        element.parentElement.appendChild(downloadLink); // Yuklab olish havolasini video tagiga qo'shish
      }
    }
  });
}

// Bu funksiyani DOM yuklangach chaqirasiz
document.addEventListener("DOMContentLoaded", function () {
  addDownloadLinkToMedia(); // Yuklab olish havolalarini qo'shish
});
