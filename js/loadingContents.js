// Intersection Observer API yordamida lazy loading funksiyasi
document.addEventListener("DOMContentLoaded", function () {
  const lazyElements = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;
          if (lazyElement.tagName.toLowerCase() === "img") {
            lazyElement.src = lazyElement.dataset.src;
          } else if (lazyElement.tagName.toLowerCase() === "video") {
            const source = lazyElement.querySelector("source");
            source.src = source.dataset.src;
            lazyElement.load();
          }

          lazyElement.classList.remove("lazy");
          observer.unobserve(lazyElement);
        }
      });
    },
    {
      rootMargin: "200px", // 200px oldin yuklansin
    }
  );

  lazyElements.forEach((element) => observer.observe(element));
});
