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