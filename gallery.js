/* 1. Hàm chạy khi di chuột hoặc Focus phím vào ảnh */
function upDate(previewPic) {
  console.log("Sự kiện trigger thành công!");
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);

  var imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2. Hàm chạy khi rời chuột hoặc Blur phím khỏi ảnh */
function unDo() {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover or Focus over an image below to display here.";
}

/* 3. Hàm tự động thêm tabindex cho 6 ảnh khi tải trang (onload) */
function initializeGallery() {
  console.log("Trang đã tải xong, đang thêm tabindex...");
  
  var images = document.querySelectorAll(".preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}