// Logika untuk buka-tutup detail pengalaman
document.querySelectorAll('.toggle-detail').forEach(item => {
    item.addEventListener('click', function(e) {
        // Mencegah trigger ganda jika mengklik elemen dalam
        this.classList.toggle('active');
    });
});

// Menutup laci jika klik di luar area pengalaman (opsional)
window.onclick = function(event) {
    if (!event.target.closest('.exp-item')) {
        // logic tambahan jika diperlukan
    }
};

// 1. ANIMASI GARIS H3
const judul = document.querySelectorAll('h3');

const observerH3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.3 });

judul.forEach(h3 => {
    observerH3.observe(h3);
});

// 2. NAVIGASI SPAN + SCROLL SPY
const navLinks = document.querySelectorAll('.nav-btn'); // Pastiin class di HTML = nav-btn
const sections = document.querySelectorAll('.cv-section'); // Ganti ini. Jangan 'cv-section' kecuali itu tag custom

// Klik span = scroll ke section
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ 
            behavior: 'smooth',
            block: 'center' // Biar berhenti agak ketengah
        });
    });
});

// Auto ganti nav aktif pas scroll - pake IntersectionObserver aja, hapus yg window.addEventListener
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let id = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-btn[data-target="${id}"]`);
            if(activeLink) activeLink.classList.add('active');
        }
    });
}, {
    threshold: 0.6,
    rootMargin: '-80px 0px -40% 0px' // -80px offset navbar, -40% biar ganti pas section udah di tengah
});

sections.forEach(section => {
    observerNav.observe(section);
});