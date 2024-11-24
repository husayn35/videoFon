fetch("media.json")
  .then((response) => response.json())
  .then((data) => {
    const images = data.images;
    const videos = data.videos;

    // Rasmlar va videolar bilan ishlash
    images.forEach((imgUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgUrl;
      document.body.appendChild(imgElement);
    });

    videos.forEach((videoUrl) => {
      const videoElement = document.createElement("video");
      const sourceElement = document.createElement("source");
      sourceElement.src = videoUrl;
      videoElement.appendChild(sourceElement);
      videoElement.controls = true;
      document.body.appendChild(videoElement);
    });
  })
  .catch((error) => {
    console.error("Media faylini yuklashda xatolik:", error);
  });
