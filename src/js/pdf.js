document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.getElementById('cv-content');
    const downloadBtn = this;

    // Persiapan sebelum download: Buka semua laci agar konten terlihat di PDF
    const allItems = document.querySelectorAll('.exp-item');
    allItems.forEach(item => item.classList.add('active'));

    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    const opt = {
        margin:       10, // Margin PDF (mm)
        filename:     'CV_Afdal_Farid.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Jalankan konversi
    html2pdf().set(opt).from(element).save().then(() => {
        downloadBtn.innerHTML = '<i class="fas fa-file-pdf"></i>';
        // Opsional: Tutup kembali setelah download (aktifkan jika mau)
        // allItems.forEach(item => item.classList.remove('active'));
    });
});