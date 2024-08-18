var customNextBtn = document.querySelector('.custom-next'),
    customPrevBtn = document.querySelector('.custom-prev'),
    customCarousel = document.querySelector('.custom-carousel'),
    customList = document.querySelector('.custom-list'), 
    customItem = document.querySelectorAll('.custom-item'),
    customRunningTime = document.querySelector('.custom-carousel .custom-timeRunning');

let customTimeRunning = 5000;  // Augmenté pour une transition plus douce
let customTimeAutoNext = 8000; // Légèrement augmenté pour laisser plus de temps entre les slides

customNextBtn.onclick = function() {
    customShowSlider('next');
};

customPrevBtn.onclick = function() {
    customShowSlider('prev');
};

let customRunTimeOut;

let customRunNextAuto = setTimeout(() => {
    customNextBtn.click();
}, customTimeAutoNext);

function customResetTimeAnimation() {
    customRunningTime.style.animation = 'none';
    customRunningTime.offsetHeight; /* trigger reflow */
    customRunningTime.style.animation = null;
    customRunningTime.style.animation = 'custom-runningTime 8s ease-in-out 1 forwards'; // Easing ajusté
}

function customShowSlider(type) {
    let customSliderItemsDom = customList.querySelectorAll('.custom-carousel .custom-list .custom-item');
    if (type === 'next') {
        customList.appendChild(customSliderItemsDom[0]);
        customCarousel.classList.add('custom-next');
    } else {
        customList.prepend(customSliderItemsDom[customSliderItemsDom.length - 1]);
        customCarousel.classList.add('custom-prev');
    }

    clearTimeout(customRunTimeOut);

    customRunTimeOut = setTimeout(() => {
        customCarousel.classList.remove('custom-next');
        customCarousel.classList.remove('custom-prev');
    }, customTimeRunning);

    clearTimeout(customRunNextAuto);
    customRunNextAuto = setTimeout(() => {
        customNextBtn.click();
    }, customTimeAutoNext);

    customResetTimeAnimation(); // Reset the running time animation
}

// Start the initial animation 
customResetTimeAnimation();
