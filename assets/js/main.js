// Target the off-canvas element
const offCanvas = document.getElementById('offcanvasTop');

// When off-canvas is opened
offCanvas.addEventListener('shown.bs.offcanvas', function () {
    // Store the current scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Set body's overflow and padding-right to hide scrollbar without affecting layout
    document.body.style.overflow = 'hidden';  // Prevent body scroll
    document.body.style.paddingRight = `${scrollbarWidth}px`;  // Maintain layout
});

// When off-canvas is closed
offCanvas.addEventListener('hidden.bs.offcanvas', function () {
    document.body.style.overflow = '';  // Re-enable body scroll
    document.body.style.paddingRight = '';  // Reset padding
});
