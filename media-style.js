// LIGHTBOX
document.querySelectorAll('.myImage').forEach(img => {
    img.addEventListener('click', () => {
        const container = img.closest('.photo-container');
        const lightbox = container.querySelector('.lightbox');
        const lightboxImg = container.querySelector('.lightbox-content');
        lightboxImg.src = img.src;
        lightbox.style.display = 'block';

        lightbox.querySelector('.close').onclick = () => lightbox.style.display = 'none';
        lightbox.onclick = e => { if (e.target === lightbox) lightbox.style.display = 'none'; }
    });
});

// PLAY BUTTON
document.querySelectorAll('.container').forEach(container => {
    const playBtn = container.querySelector('.play-btn');
    const audio = container.querySelector('audio');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            document.querySelectorAll('audio').forEach(a => a.pause());
            document.querySelectorAll('.play-btn').forEach(b => b.classList.replace('fa-pause', 'fa-play'));
            audio.play();
            playBtn.classList.replace('fa-play', 'fa-pause');
        } else {
            audio.pause();
            playBtn.classList.replace('fa-pause', 'fa-play');
        }
    });
});
