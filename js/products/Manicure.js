let products = [
    {
        title: "Manicure File",
        decs: "100 - 100",
        image: "../img/HINAIL100100W.png",
    },
    {
        title: "Manicure File",
        decs: "100 - 180",
        image: "../img/HINAIL100180W.png",
    },
    {
        title: "Manicure File",
        decs: "150 - 150",
        image: "../img/HINAIL150150W.png",
    },
    {
        title: "Manicure File",
        decs: "180 - 180",
        image: "../img/HINAIL180180W.png",
    },
    {
        title: "Plastic Form",
        decs: "",
        image: "../img/GM001W.png",
    },
    {
        title: "Plastic Form",
        decs: "",
        image: "../img/GM002W.png",
    },
    {
        title: "Biscuit Polish Buffer",
        decs: "",
        image: "../img/BiscuitPoilish.jpg",
    },
    {
        title: "Kolikol Oil",
        decs: "",
        image: "../img/KotikolOil.jpg",
    },
    {
        title: "Cuticle Nipper 151",
        decs: "Length: 115mm, Contains grip, with packaging",
        image: "../img/151-0W.jpg",
    },
    {
        title: "Cuticle Nipper 152",
        decs: "Length: 100mm, Contains grip, with packaging",
        image: "../img/152-0W.jpg",
    },
    {
        title: "Cuticle Nipper 162",
        decs: "Length: 00mm, Contains grip, with packaging",
        image: "../img/162-0W.jpg",
    },
    {
        title: "Cuticle Scissors 010",
        decs: "Length: 100mm, with packaging",
        image: "../img/010W.jpg",
    },
    {
        title: "Cuticle Scissors 011    ",
        decs: "Length: 97mm, with packaging",
        image: "../img/011W.jpg",
    },
    {
        title: "Cuticle Scissors 027",
        decs: "Length: 93mm, with packaging",
        image: "../img/027W.jpg",
    },
    {
        title: "Nail Tip Cutter 420",
        decs: "",
        image: "../img/420W.jpg",
    },
    {
        title: "Nail Tip Cutter 421",
        decs: "",
        image: "../img/421W.jpg",
    },
    {
        title: "Nail Tip Cutter 422",
        decs: "",
        image: "../img/422W.jpg",
    },
    {
        title: "Nail Tip Cutter 423",
        decs: "",
        image: "../img/423W.jpg",
    },
    {
        title: "Cuticle Pusher 320",
        decs: "With packaging",
        image: "../img/320-0W.jpg",
    },
    {
        title: "Cuticle Pusher 322",
        decs: "With packaging",
        image: "../img/322-0W.jpg",
    },
    {
        title: "Cuticle Pusher 323",
        decs: "With packaging",
        image: "../img/323-0W.jpg",
    },
    {
        title: "Cuticle Pusher 329",
        decs: "With packaging",
        image: "../img/329-0W.jpg",
    },
    {
        title: "Cuticle Pusher 331",
        decs: "With packaging",
        image: "../img/331-0W.jpg",
    },
    {
        title: "Wooden Cuticle Pusher",
        decs: "",
        image: "../img/WoodenCluticlePusher.jpg",
    },
];

const footfiles = document.getElementById("manicureSec");

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
