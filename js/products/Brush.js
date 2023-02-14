let products = [
  {
    title: "Diamond Tool",
    decs: "",
    image: "../img/DiamondTool.jpg",
  },
  {
    title: "Dotting Tool",
    decs: "",
    image: "../img/dotting01.jpg",
  },
  {
    title: "Design Tool",
    decs: "",
    image: "../img/nla001.jpg",
  },
  {
    title: "Nail Brush",
    decs: "",
    image: "../img/nailbrush0018.jpg",
  },
  {
    title: "Nail Brush - Imperial",
    decs: "",
    image: "../img/brush-imperial.jpg",
  },
  {
    title: "Nail Brush - Pixel",
    decs: "",
    image: "../img/brush-pixel.jpg",
  },
  {
    title: "Nail Brush - Ez FLow 00",
    decs: "",
    image: "../img/brush-ezflow.jpg",
  },
  {
    title: "Nail Brush - Piexl Prience",
    decs: "",
    image: "../img/pixel-prince.jpg",
  },
  {
    title: "Nail Brush - Heat",
    decs: "",
    image: "../img/brush-heat.jpg",
  },
  {
    title: "Nail Brush - Tetis",
    decs: "",
    image: "../img/brush-tetis.jpg",
  },
  {
    title: "Nail Brush - DK13R ROUBLOFF 2",
    decs: "",
    image: "../img/brush-robluf.jpg",
  },
  {
    title: "Nail Brush - Salon",
    decs: "",
    image: "../img/brush-salon.jpg",
  },
  {
    title: "Nail Brush - DK13R ROUBLOFF 1/5",
    decs: "",
    image: "../img/brush-robluf-2.jpg",
  },
];

const footfiles = document.getElementById("brushSec");

products.forEach((element) => {
  let product = `<div class="card mb-2 w-50">
              <img id="cardImg" class="card-img-top " src="${element.image}" alt="" style="max-height: 390px; height: 75%; object-fit: contain;" />
              <div class="card-body bg-secondary d-flex align-items-center p-0" style="max-height: 35px">
                <h6 class="card-title text-white text-truncate m-0 p-2">
                  ${element.title}
                </h6>
              </div>
              <div class="card-footer" style="min-height: 50px; max-height: 1000px; overflow: auto;">
                ${element.decs}
              </div>
            </div>`;

  footfiles.innerHTML = footfiles.innerHTML + product;
});
