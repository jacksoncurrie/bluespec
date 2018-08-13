// When move down button pressed
var moveDown = () =>

    // Scroll to bottom of image
    window.scrollTo({

        // Height of window before header
        top: window.innerHeight,
        left: 0,

        // smooth scrool
        behavior: 'smooth'
    });