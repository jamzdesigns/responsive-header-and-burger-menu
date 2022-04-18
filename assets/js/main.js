// SHOW MODAL-MENU 
showModalMenu();
function showModalMenu() {
    let btnMenu = document.querySelector('.menu-btn'); // element that triggers the click event

    tl = gsap.timeline( { paused: true, reversed: true } ); // create a gsap timeline animation
    tl.fromTo('.modal-menu', { xPercent: -100, autoAlpha: 0 }, { duration: 0.5, xPercent: 0, autoAlpha: 1, ease: 'power1.out' }) // animation given to the target element
    tl.fromTo('.nav-link-modal', { yPercent: 100, autoAlpha: 0 }, { duration: 0.5, yPercent: 0, autoAlpha: 1, stagger: { amount: 0.2, from: 'left' }, ease: 'power1.out' });

    btnMenu.addEventListener('click', function() { // add click function to menu-btn element
        tl.reversed() ? tl.play() : tl.reverse(); // play the animation if is paused or reversed if is playing
    });
}

// HIDE MODAL-MENU
hideModalMenu();
function hideModalMenu() {
    let btnClose = document.querySelector('.close-btn-wrapper'); // element that triggers the click event

    tl = gsap.timeline( { paused: true, reversed: true } ); // create a gsap timeline animation
    tl.fromTo('.modal-menu', { xPercent: -100, autoAlpha: 0 }, { duration: 0.5, xPercent: 0, autoAlpha: 1, ease: 'power1.out' }) // animation given to the target element
    tl.fromTo('.close-btn.first', { rotation: 0 }, { duration: 0.5, rotation: 45, ease: 'power1.out' })
    tl.fromTo('.close-btn.second', { rotation: 0 }, { duration: 0.5, rotation: -45, ease: 'power1.out' }, '<')
    tl.fromTo('.nav-link-modal', { yPercent: 100, autoAlpha: 0 }, { duration: 0.5, yPercent: 0, autoAlpha: 1, stagger: { amount: 0.2, from: 'left' }, ease: 'power1.out' });

    btnClose.addEventListener('click', function() { // add click function to close-btn-wrapper element
        tl.reversed() ? tl.play() : tl.reverse(); // play the animation if is paused or reversed if is playing
    });
}