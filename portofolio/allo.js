// script.js

function showProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection.classList.contains('hidden')) {
        projectsSection.classList.remove('hidden');
        projectsSection.classList.add('animate-fadeIn');
    }
}

// Optional: Add event listener for the contact button
document.getElementById('contactBtn').addEventListener('click', function() {
    alert("Kontak Saya tidak tersedia saat ini.");
});

// Event listener for the footer wave animation
const footerWave = document.querySelector('.footer-wave');

if (footerWave) {
    footerWave.classList.add('animate-wave');
}
