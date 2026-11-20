const ninoBurgerBtn = document.getElementById('nino_burger_btn');
const ninoNavMenu = document.getElementById('nino_nav_menu');
const ninoNavLinks = document.querySelectorAll('.nino_nav a');

if (ninoBurgerBtn && ninoNavMenu) {
    ninoBurgerBtn.addEventListener('click', function() {
        ninoNavMenu.classList.toggle('nino_nav_active');
        ninoBurgerBtn.classList.toggle('nino_burger_active');
    });


    ninoNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            ninoNavMenu.classList.remove('nino_nav_active');
            ninoBurgerBtn.classList.remove('nino_burger_active');
        });
    });
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


const ninoFormPesan = document.getElementById('nino-form-pesan');

if (ninoFormPesan) {
    ninoFormPesan.addEventListener('submit', function(e) {
        e.preventDefault();
        const nama = document.getElementById('nino_nama').value;
        alert('Thank You, ' + nama + '! Your message has been sent successfully.');
        this.reset();
    });
}