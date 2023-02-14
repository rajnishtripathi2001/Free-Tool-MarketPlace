const container = document.getElementById("grid-container");

const data = [
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube View",
    download: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube Subscriber",
    download: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube Like",
    download: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube comment",
    download: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube share",
    download: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube gali",
    download: "IMG_20230117_152122.jpg",
  },
];

data.forEach((el) => {
  const div = document.createElement("div");
  div.className = "card grid-item";
  div.innerHTML = `<div class="image-container">
           <img src=${el.thumbnail} alt="imka" />
          </div>
          <div class="bottom-container">
          <p>${el.text}</p>
          <a href=${el.download} download="file-name">
            <button type="button" class="btn">
              <i class="fa fa-download"></i><b> Download</b>
            </button>
          </a>
        </div>`;
  container.appendChild(div);
  console.log(el);
});
