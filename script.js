// Portfolio category switching
const buttons = document.querySelectorAll('.category-btn');
const projects = document.querySelectorAll('.projects');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from buttons
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show correct project section
        const target = btn.getAttribute('data-target');
        projects.forEach(p => {
            if(p.id === target) p.classList.add('active');
            else p.classList.remove('active');
        });
    });
});

// NAVBAR TOGGLE
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});