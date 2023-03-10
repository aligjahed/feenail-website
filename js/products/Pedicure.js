let products = [
  {
    title: "Calus Blade",
    decs: "",
    image: "../img/PediRazorW.jpg",
  },
  {
    title: "Calus Blade",
    decs: "",
    image: "../img/PediRazorFlatW.jpg",
  },
  {
    title: "Calus Remover small",
    decs: "",
    image: "../img/00001W.jpg",
  },
  {
    title: "Curved Calus Remover",
    decs: "",
    image: "../img/51NZx+qBPWLW.jpg",
  },
  {
    title: "Flat Calus Remover",
    decs: "",
    image: "../img/B1167145588W.jpg",
  },
  {
    title: "360 Calus Remover",
    decs: "",
    image: "../img/RandePa360W.jpg",
  },
  {
    title: "ZEN Sugar Scrub",
    decs: "Lavander",
    image: "../img/SS001W.png",
  },
  {
    title: "ZEN Sugar Scrub",
    decs: "Dark Chocolate and coffee",
    image: "../img/SS002W.png",
  },
  {
    title: "ZEN Sugar Scrub",
    decs: "Pineapple and Drugon",
    image: "../img/SS003W.png",
  },
  {
    title: "ZEN Sugar Scrub",
    decs: "Sour Cherry",
    image: "../img/SS004W.png",
  },
  {
    title: "ZEN Pedicure Coctaile",
    decs: "Diamond Shape",
    image: "../img/PB001W.png",
  },
  {
    title: "ZEN Pedicure Coctaile",
    decs: "Fish Shape",
    image: "../img/PB002W.png",
  },
  {
    title: "ZEN Pedicure Coctaile",
    decs: "Ghost Shaped Shape",
    image: "../img/PB003W.png",
  },
  {
    title: "ZEN Pedicure Coctaile",
    decs: "Heart Shape",
    image: "../img/PB004W.png",
  },
  {
    title: "ZEN Pedicure Coctaile",
    decs: "Star Shape",
    image: "../img/PB005W.png",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB001W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB002W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB003W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB004W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB005W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB006W.jpg",
  },
  {
    title: "ZEN Body Butter",
    decs: "",
    image: "../img/BB007W.jpg",
  },
];

const footfiles = document.getElementById("pedicureSec");

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
