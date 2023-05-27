import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const imageElGallery = ({ preview, original, description }) => `
  <li>
    <img src="${preview}" data-source="${original}" alt="${description}" width="372" height="240"/>
  </li>
`;
const galleryAll = galleryItems.map((el) => imageElGallery(el));

galleryList.insertAdjacentHTML("afterbegin", galleryAll.join(""));

let lightbox = null;

const imageShow = (event) => {
  const target = event.target;

  if (target.nodeName === "IMG") {
    const imageUrl = target.dataset.source;

     lightbox = basicLightbox.create(`<img src="${imageUrl}">`);

    lightbox.show();
  }
};

const closeLightboxOnEscape = (event) => {
    if (event.code === "Escape" && lightbox !== null) {
      lightbox.close();
    }
  };
document.addEventListener("keydown", closeLightboxOnEscape);

galleryList.addEventListener("click", imageShow);



