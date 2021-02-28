import itemTpl from "../templates/gallery-item.hbs";
import { markupGalleryRef } from "./refs";
// import alert from "./notify";

function updateGallery(images) {
    const markup = itemTpl(images);
  
    markupGalleryRef.insertAdjacentHTML("beforeend", markup);
}

export default updateGallery;