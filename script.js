document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu-lateral');
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', function () {
        menu.style.left = '-250px';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    });
});
