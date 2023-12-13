document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.circle img');

    circle.addEventListener('mouseover', () => {
        circle.style.transform = 'scale(1.2)';
    });

    circle.addEventListener('mouseout', () => {
        circle.style.transform = 'scale(1)';
    });
});
