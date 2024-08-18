const customSlider = document.querySelector('.custom-slider');

function customActivate(e) {
  const items = document.querySelectorAll('.custom-item');
  e.target.matches('.custom-next') && customSlider.append(items[0]);
  e.target.matches('.custom-prev') && customSlider.prepend(items[items.length - 1]);
}

document.addEventListener('click', customActivate, false);
