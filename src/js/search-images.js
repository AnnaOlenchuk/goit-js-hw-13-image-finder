import { formRef, markupGalleryRef, loadBtnRef } from './refs';
import apiService from './apiService';
import updateGallery from './update-gallery';
import infiniteLoad from './infinite-load';
formRef.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  
  apiService.searchQuery = event.target.elements.query.value;
  
  markupGalleryRef.innerHTML = '';
  formRef.reset();
  
  apiService.resetPage();

  fetchAll();
};

function fetchAll() {
    apiService.fetchImages().then(images => {
      updateGallery(images);  
    
      if (images.length > 0) {
        infiniteLoad(fetchAll);
      }
  });
}


// loadBtnRef.addEventListener('click', () => {
//   apiService.fetchImages().then(images => {
//     updateGallery(images);
//   });
// });