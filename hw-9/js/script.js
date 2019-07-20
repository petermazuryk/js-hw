'use strict';
import galleryData from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

function createGallery(galleryData) {
  galleryData.map((data, idx) => {
    const galleryLi = document.createElement('li');
    galleryLi.classList.add('gallery__item');
    gallery.append(galleryLi);

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.setAttribute('href', galleryData[idx].original);
    galleryLi.append(galleryLink);

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.setAttribute('src', galleryData[idx].preview);
    galleryImg.setAttribute('data-source', galleryData[idx].original);
    galleryImg.setAttribute('alt', galleryData[idx].description);
    galleryLink.append(galleryImg);

    const gallerySpan = document.createElement('span');
    gallerySpan.classList.add('gallery__icon');
    galleryLi.appendChild(gallerySpan);

    const galleryIcons = document.createElement('i');
    galleryIcons.classList.add('material-icons');
    galleryIcons.textContent = 'zoom_out_map';

    gallerySpan.append(galleryIcons);
  });
}
createGallery(galleryData);

gallery.addEventListener('click', openModal);
const overlay = document.querySelector('.overlay');

function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  overlay.classList.add('is-visible');
  const overlayImg = document.querySelector('.overlay-img');
  overlayImg.setAttribute('src', e.target.dataset.source);
  window.addEventListener('keydown', handleKey);
}

/// Закрыть модальное окно
const closeButton = document.querySelector('button[data-action="close-modal"]');

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', handleClick);

function closeModal() {
  overlay.classList.remove('is-visible');
  window.removeEventListener('keydown', handleKey);
}
// Закрыть модальное окно - Escape
function handleKey(e) {
  if (e.code !== 'Escape') {
    return;
  }

  closeModal();
}

function handleClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  closeModal();
}
