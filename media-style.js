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

document.querySelectorAll('.container').forEach(container => {
    const playBtn = container.querySelector('.play-btn');
    const audio = container.querySelector('audio');

    if (!playBtn || !audio) return;

    const previewLimit = 30000; // 30 seconds in ms
    const fadeDuration = 800;

    let fadeInterval = null;
    let previewTimeout = null;

    function resetAudio(btn) {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;

        clearTimeout(previewTimeout);
        previewTimeout = null;

        btn.classList.remove('fa-pause');
        btn.classList.add('fa-play');
    }

    function fadeOutAndStop(btn) {
        if (fadeInterval) clearInterval(fadeInterval);

        const steps = 20;
        const stepTime = fadeDuration / steps;
        let step = 0;
        const startVolume = audio.volume;

        fadeInterval = setInterval(() => {
            step++;
            audio.volume = Math.max(0, startVolume * (1 - step / steps));

            if (step >= steps) {
                clearInterval(fadeInterval);
                fadeInterval = null;
                resetAudio(btn);
            }
        }, stepTime);
    }

    playBtn.addEventListener('click', () => {

        // ⏹ Manual stop
        if (!audio.paused) {
            fadeOutAndStop(playBtn);
            return;
        }

        // Stop all others immediately
        document.querySelectorAll('audio').forEach(a => {
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
                a.volume = 1;
            }
        });

        document.querySelectorAll('.play-btn').forEach(b => {
            b.classList.remove('fa-pause');
            b.classList.add('fa-play');
        });

        if (fadeInterval) clearInterval(fadeInterval);
        if (previewTimeout) clearTimeout(previewTimeout);

        audio.currentTime = 0;
        audio.volume = 1;
        audio.play();

        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');

        // ⏱ HARD 30-SECOND TIMER (bulletproof)
        previewTimeout = setTimeout(() => {
            fadeOutAndStop(playBtn);
        }, previewLimit);
    });
});
// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
