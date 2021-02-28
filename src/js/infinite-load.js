import { markupGalleryRef  } from './refs';

export default function infiniteLoad(render) {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        render();
        observer.unobserve(markupGalleryRef.lastElementChild); 
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '50px',
  });

  observer.observe(markupGalleryRef.lastElementChild);
}