// script.js

window.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-img');
    const textElements = document.querySelectorAll('.description p, .profile-description h2, .profile-description p, .side-title');

    profileImage.style.opacity = 0;
    textElements.forEach(el => el.style.opacity = 0);

    setTimeout(() => {
        profileImage.style.transition = "opacity 2s";
        profileImage.style.opacity = 1;

        textElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = "opacity 2s";
                el.style.opacity = 1;
            }, 500 * index);
        });
    }, 500);
});

window.onscroll = function() {
    var aboutMe = document.getElementById("aboutMe");
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 300) {
      aboutMe.style.display = "block"; // Tampilkan bagian "About Me"
    }
  };

 // Ambil elemen section3 dan audio
const section3 = document.getElementById('section3');
const backgroundMusic = document.getElementById('backgroundMusic');

// Fungsi untuk memulai audio dengan interaksi pengguna
function playMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log('Audio tidak dapat diputar secara otomatis: ', error);
        });
    }
}

// Event listener untuk deteksi scroll
window.addEventListener('scroll', function() {
    const sectionPosition = section3.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        playMusic();
    }
});

// Cek apakah audio dapat dimulai setelah interaksi pengguna
document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        playMusic();
    }
});
