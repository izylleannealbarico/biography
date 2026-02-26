//Lightbox
document.querySelectorAll('.myImage').forEach(img => {
    img.addEventListener('click', () => {
        const container = img.closest('.photo-container');
        if (!container) return; // Guard: container might not exist

        const lightbox = container.querySelector('.lightbox');
        const lightboxImg = container.querySelector('.lightbox-content');
        const closeBtn = container.querySelector('.close');

        // Guard: if any required element is missing, exit
        if (!lightbox || !lightboxImg || !closeBtn) return;

        lightboxImg.src = img.src;
        lightbox.style.display = 'block';

        // Close on close button click
        closeBtn.onclick = () => lightbox.style.display = 'none';

        // Close if clicking outside the image
        lightbox.onclick = e => {
            if (e.target === lightbox) lightbox.style.display = 'none';
        };
    });
});


// ==========================
// AUDIO PLAY BUTTON FUNCTIONALITY
// ==========================
document.querySelectorAll('.container').forEach(container => {
    const playBtn = container.querySelector('.play-btn');
    const audio = container.querySelector('audio');

    // Guard: skip this container if either element doesn't exist
    if (!playBtn || !audio) return;

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Pause all other audio on the page
            document.querySelectorAll('audio').forEach(a => a.pause());

            // Reset all other play buttons to "play" icon
            document.querySelectorAll('.play-btn').forEach(b =>
                b.classList.replace('fa-pause', 'fa-play')
            );

            // Play this audio and toggle button
            audio.play();
            playBtn.classList.replace('fa-play', 'fa-pause');
        } else {
            // Pause audio and toggle button
            audio.pause();
            playBtn.classList.replace('fa-pause', 'fa-play');
        }
    });
});


// ==========================
// IMAGE MAP DESCRIPTION (Optional for travel page)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll("area");
    const desc = document.getElementById("desc");
    if (!desc) return; // Guard: description may not exist

    areas.forEach(area => {
        area.addEventListener("mouseover", () => {
            if (area.alt.includes("Coron")) {
                desc.textContent = "Coron, known for crystal-clear lagoons and limestone cliffs.";
            } else if (area.alt.includes("Athens")) {
                desc.textContent = "Athens, the capital of Greece and cradle of Western civilization.";
            } else if (area.alt.includes("Italy")) {
                desc.textContent = "Rome, Italy — home of the Colosseum.";
            } else if (area.alt.includes("Germany")) {
                desc.textContent = "Munich, Germany — historic architecture and culture.";
            } else if (area.alt.includes("Batanes")) {
                desc.textContent = "Batanes, Cagayan Valley — rolling hills and stone houses.";
            }
        });

        area.addEventListener("mouseout", () => {
            desc.textContent = "";
        });
    });
});