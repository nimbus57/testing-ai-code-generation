document.querySelectorAll('.particle').forEach(particle => {
    particle.addEventListener('click', () => {
        const subParticles = particle.querySelector('.sub-particles');
        if (subParticles.classList.contains('hidden')) {
            subParticles.classList.remove('hidden');
        } else {
            subParticles.classList.add('hidden');
        }
    });
});
