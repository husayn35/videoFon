// Video va Canvas elementlari
const videoElement = document.getElementById("video"); // Video elementini tanlash
const canvasElement = document.createElement("canvas");
const context = canvasElement.getContext("2d");

// Video yuklanganda matnni qo'shish
videoElement.addEventListener("loadeddata", function () {
  // Canvas o'lchamini video o'lchamiga moslashtirish
  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;

  // Canvasga video tasvirini chizish va pastki qismiga matn qo'yish
  context.drawImage(
    videoElement,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );

  // Matnni video pastki qismiga joylash
  context.font = "30px Arial"; // Matnning o'lchami va shrifti
  context.fillStyle = "white"; // Matn rangi
  context.fillText(
    "28_kh_",
    canvasElement.width / 2 - 50,
    canvasElement.height - 20
  ); // Matnni joylashtirish

  // Canvas tasvirini videoga qo'shish
  videoElement.src = canvasElement.toDataURL("image/png");
});
