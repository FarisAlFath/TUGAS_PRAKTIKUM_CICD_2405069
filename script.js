console.log("Anime Dashboard Deployed!");

// Fungsi untuk Filter berdasarkan Genre
function filterAnime(genre) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.btn-filter');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (genre === 'all' || card.getAttribute('data-genre').includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Fungsi Modal Detail
function showDetail(title, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('animeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('animeModal').style.display = 'none';
}

// Menutup modal jika klik di luar kotak
window.onclick = function(event) {
    const modal = document.getElementById('animeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

console.log("Anime Hub CI/CD Dashboard Loaded Successfully!");