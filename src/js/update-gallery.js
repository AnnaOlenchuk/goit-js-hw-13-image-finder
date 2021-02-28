import itemTpl from "../templates/gallery-item.hbs";
import { markupGalleryRef } from "./refs";
import infiniteLoad from './infinite-load';


function updateGallery(images) {
    const markup = itemTpl(images);
  
    markupGalleryRef.insertAdjacentHTML("beforeend", markup);
    infiniteLoad(fetchImages);
}

export default updateGallery;