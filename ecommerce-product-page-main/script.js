const slidesDiv = document.querySelector(".slides");

const imagesUrls = [
  {
    thumb: "images/image-product-1-thumbnail.jpg",
    main: "images/image-product-1.jpg",
  },
  {
    thumb: "images/image-product-2-thumbnail.jpg",
    main: "images/image-product-2.jpg",
  },
  {
    thumb: "images/image-product-3-thumbnail.jpg",
    main: "images/image-product-3.jpg",
  },
  {
    thumb: "images/image-product-4-thumbnail.jpg",
    main: "images/image-product-4.jpg",
  },
];

imagesUrls.forEach((img) => {
  slidesDiv.insertAdjacentHTML(
    "beforeend",
    `<div><img class="slides__img" src="${img.thumb}" data-main-img="${img.main}"/></div>`
  );
});

const slidesImg = slidesDiv.querySelectorAll(".slides__img");
const mainImg = document.querySelector(".product__main-img");

function changeSlide(thumb) {
  const mainUrl = thumb.dataset.mainImg;
  mainImg.src = mainUrl;
  slidesImg.forEach((t) => t.classList.remove("slides__img--active"));
  thumb.classList.add("slides__img--active");
}
changeSlide(slidesImg[0]);
slidesImg.forEach((s) => s.addEventListener("click", () => changeSlide(s)));
