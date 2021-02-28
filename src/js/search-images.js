import { formRef, inputRef, markupGalleryRef, loadBtnRef } from './refs';
import debounce from 'lodash/debounce';
import apiService from './apiService';
import updateGallery from './update-gallery';
// import fetchImages from './apiService';


inputRef.addEventListener('input', debounce(searchImages, 500));

function searchImages(event) {
  formRef.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target.value;
  apiServices.query = form.elements.query.value;
  
  markupGalleryRef.innerHTML = '';
  form.reset();

  apiService.resetPage();

  apiService.fetchImages().then(images => {
    updateGallery(images);
  });
});

loadBtnRef.addEventListener('click', () => {
  serviceApi.fetchImages()
    .then(images => {
      updateGallery(images);
    });
});
}





