document.addEventListener("DOMContentLoaded", function () {
  const lazyElements = document.querySelectorAll(".lazy");

  // Placeholder image URL
  const placeholderImage = "../images/load.avif";

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;

          // If the element is an image
          if (lazyElement.tagName.toLowerCase() === "img") {
            // Set the placeholder image until the actual image is loaded
            lazyElement.src = lazyElement.dataset.src;
            lazyElement.classList.remove("lazy");
          }
          // If the element is a video
          else if (lazyElement.tagName.toLowerCase() === "video") {
            // Set the placeholder for the video until the video is loaded
            const source = lazyElement.querySelector("source");
            source.src = source.dataset.src;

            // Set a placeholder image for the video
            lazyElement.poster = placeholderImage;

            lazyElement.load();
            lazyElement.classList.remove("lazy");
          }

          // Stop observing the element once it has been processed
          observer.unobserve(lazyElement);
        }
      });
    },
    {
      rootMargin: "200px", // 200px before the element enters the viewport
    }
  );

  lazyElements.forEach((element) => {
    // Initially set the placeholder for images
    if (element.tagName.toLowerCase() === "img") {
      element.src = placeholderImage;
    }

    observer.observe(element);
  });
});
