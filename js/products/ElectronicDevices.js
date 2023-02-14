let products = [
    {
        title: "Marathon Champion",
        decs: "",
        image: "../img/marathon-champ.jpg",
    },
    {
        title: "Strong 207",
        decs: "",
        image: "../img/strong.jpg",
    },
    {
        title: "Marathon Escort",
        decs: "",
        image: "../img/marathon-scort.jpg",
    },
    {
        title: "Nail Master Dm-208",
        decs: "",
        image: "../img/NailMaster-dm-208.jpg",
    },
    {
        title: "Strong 209",
        decs: "",
        image: "../img/strong-209.jpg",
    },
    {
        title: "Nail Master zs-601",
        decs: "",
        image: "../img/NailMaster-zs-601.jpg",
    },
    {
        title: "UV-LED Sun 5",
        decs: "",
        image: "../img/uv-sun.jpg",
    },
    {
        title: "UV-LED Star 5",
        decs: "",
        image: "../img/uv-led-star5.jpg",
    },
    {
        title: "UV-LED Sun 1",
        decs: "",
        image: "../img/sun-one.jpg",
    },
    {
        title: "UV-LED Sun 5 plus",
        decs: "",
        image: "../img/sun-five-plus-1.jpg",
    },
    {
        title: "UV-LED Sun 4s",
        decs: "",
        image: "../img/sun-four-s.jpg",
    },
    {
        title: "UV-LED Sun X5",
        decs: "",
        image: "../img/sun-x5.jpg",
    },
    {
        title: "UV-LED Star 6",
        decs: "",
        image: "../img/star-6.jpg",
    },
    {
        title: "UV-LED Sun F6",
        decs: "",
        image: "../img/sun-f6.jpg",
    },
    {
        title: "UV-LED Sun X7",
        decs: "",
        image: "../img/sun-x7.jpg",
    },
];

const footfiles = document.getElementById("eDeviceSec");

products.forEach((element) => {
    let product = `<div class="card mb-2 w-50" style="min-height: 350px;">
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
