document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Initial check
    setTimeout(revealOnScroll, 100);

    // 3D model fallback logic (handled by model-viewer natively but we ensure smooth hide/show)
    const modelViewer = document.querySelector('model-viewer');
    if (modelViewer) {
        modelViewer.addEventListener('error', () => {
            console.log('Failed to load 3D model, fallback engaged if set.');
        });
    }
});
