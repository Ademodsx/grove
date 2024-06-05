document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');

    // Fungsi untuk mendapatkan waktu saat ini dan menentukan video latar belakang yang sesuai
    function updateBackgroundVideo() {
        const now = new Date();
        const hours = now.getHours();

        // Jika waktu saat ini antara 6 pagi sampai 6 malam, gunakan video untuk siang hari
        if (hours >= 6 && hours < 18) {
            video.src = 'Time/daytime.mp4'; // Ganti dengan video siang hari
        } else {
            video.src = 'Time/nighttime.mp4'; // Ganti dengan video malam hari
        }
    }

    // Panggil fungsi updateBackgroundVideo() saat halaman dimuat dan setiap 5 menit
    updateBackgroundVideo();
    setInterval(updateBackgroundVideo, 300000); // 5 menit
});

const users = [
    { username: 'Ade_Cosmic', password: 'ade', redirectTo: 'Ade_Cosmic/Ade_Cosmic.html' },
    { username: 'user2', password: 'password2', redirectTo: 'web2.html' },
    // Tambahkan user dan password lainnya di sini
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        window.location.href = user.redirectTo; // Arahkan ke halaman yang sesuai
    } else {
        alert('Username atau password salah');
    }
});