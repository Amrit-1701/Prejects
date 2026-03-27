let gallery = document.getElementById("gallery");



// counter

function countVideos() {
  let total = document.querySelectorAll(".video-card").length;
  document.getElementById("count").innerText =
    "Total Videos = " + total;
}

countVideos();



// add new video

function addVideo() {
  let div = document.createElement("div");

  div.className = "video-card html";

  div.innerHTML = `
  <iframe width="350" height="200"
  src="https://www.youtube.com/embed/UB1O30fR-EE">
  </iframe>
  <h3>New HTML Video</h3>
  `;

  gallery.appendChild(div);

  countVideos();
}



// hide show

let visible = true;

function toggleVideos() {

  if (visible) {
    gallery.style.display = "none";
    visible = false;
  } else {
    gallery.style.display = "grid";
    visible = true;
  }
}



// filter

function showAll() {
  let v = document.querySelectorAll(".video-card");

  v.forEach(function (x) {
    x.style.display = "block";
  });
}

function showHTML() {
  let v = document.querySelectorAll(".video-card");

  v.forEach(function (x) {
    if (x.classList.contains("html"))
      x.style.display = "block";
    else
      x.style.display = "none";
  });
}

function showCSS() {
  let v = document.querySelectorAll(".video-card");

  v.forEach(function (x) {
    if (x.classList.contains("css"))
      x.style.display = "block";
    else
      x.style.display = "none";
  });
}



// change background

function changeBG() {

  let arr = [
    "url(pexels-arnie-chou-304906-1229042.jpg)",
    "url(pexels-pixabay-270404.jpg)",
    "url(pexels-luis-gomes-546819.jpg)"
  ];

  let r = Math.floor(Math.random() * 3);

  document.body.style.backgroundImage = arr[r];
}



// click message

document.addEventListener("click", function (e) {

  if (e.target.closest(".video-card")) {

    alert("Video selected");

  }

});