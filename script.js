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