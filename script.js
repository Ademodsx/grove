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

// Fungsi untuk memeriksa apakah pengguna ada dalam database
function authenticateUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Fungsi untuk mengarahkan pengguna ke halaman yang sesuai setelah login
function redirectToPage(page) {
    window.location.href = page;
}

// Fungsi untuk memeriksa apakah pengguna telah login saat mencoba mengakses halaman tertentu
function checkLoggedIn() {
    const currentPage = window.location.pathname.split('/').pop(); // Ambil bagian terakhir dari path URL
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");
    
    // Jika pengguna sudah login, arahkan sesuai halaman yang ditentukan
    if (username && password) {
        const user = authenticateUser(username, password);
        if (user) {
            redirectToPage(user.redirectTo);
        }
    } 
    // Jika pengguna belum login dan bukan di halaman index.html, arahkan ke index.js
    else if (currentPage !== "index.html") {
        window.location.href = "index.html";
    }
}

// Panggil fungsi checkLoggedIn() ketika halaman dimuat
checkLoggedIn();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const user = authenticateUser(username, password);
    if (user) {
        sessionStorage.setItem("username", username); // Simpan username di sessionStorage
        sessionStorage.setItem("password", password); // Simpan password di sessionStorage
        redirectToPage(user.redirectTo); // Arahkan ke halaman yang sesuai
    } else {
        alert('Username atau password salah');
    }
});
