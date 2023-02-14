let products = [
  {
    title: "Ceramic Nail Drill Bits",
    decs: "",
    image: "../img/nailbits-000.png",
  },
  {
    title: "Alloy grinding head",
    decs: "",
    image: "../img/nailbits-001.png",
  },
  {
    title: "Carbite Nail Drill Bits",
    decs: "",
    image: "../img/nailbits-002.png",
  },
  {
    title: "Diamond Nail Drill Bits",
    decs: "",
    image: "../img/nailbits-003.png",
  },
  {
    title: "Silicone Nail Drill Bits",
    decs: "",
    image: "../img/nailbits-004.png",
  },
  {
    title: "Sanding bands",
    decs: "",
    image: "../img/nailbits-005.png",
  },
];

const footfiles = document.getElementById("nailbitsSec");

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
