// import axios from 'axios';

// const url = 'https://pixabay.com/api/';
const key = '20450055-ae2c445d558ef9cadcd364e4d';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=20450055-ae2c445d558ef9cadcd364e4d`;
  
  const options = {
    headers: {
      Authorization: key,
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(({ images }) => {
      this.page += 1;
      return images;
    }); 
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  }
};



