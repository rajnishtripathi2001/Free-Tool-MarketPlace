const container = document.getElementById("grid-container");

const data = [
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube View",
    donload: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube Subscriber",
    donload: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube Like",
    donload: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube comment",
    donload: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube share",
    donload: "IMG_20230117_152122.jpg",
  },
  {
    thumbnail: "ytb.png",
    text: "Get Free Youtube gali",
    donload: "IMG_20230117_152122.jpg",
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
          <a href=${el.donload} download="file-name">
            <button type="button" class="btn">
              <i class="fa fa-download"></i><b> Download</b>
            </button>
          </a>
        </div>`;
  container.appendChild(div);
  console.log(el);
});
