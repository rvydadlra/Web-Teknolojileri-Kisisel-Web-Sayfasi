window.addEventListener('DOMContentLoaded', getData);

function getData() {
    // API isteği yapılacak URL
    var apiUrl = 'https://api.deezer.com/search';
    
    // Aranacak şarkı veya sanatçı adı
    var query = 'Adele';
    
    // API isteği yapma
    fetch(apiUrl + '?q=' + query)
        .then(response => response.json())
        .then(data => {
            // API'den dönen müzik verilerini işleme
            displayData(data);
        })
        .catch(error => {
            console.log('API hatası:', error);
        });
}

function displayData(data) {
    var tracksContainer = document.getElementById('tracks-container');
    // Şarkıları gösterme
    data.data.forEach(track => {
        var trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <h3>${track.title}</h3>
            <p>${track.artist.name}</p>
            <img src="${track.album.cover_medium}" alt="${track.title}" width="200">
            <audio controls>
                <source src="${track.preview}" type="audio/mpeg">
                Tarayıcınız audio elementini desteklemiyor.
            </audio>
        `;
        tracksContainer.appendChild(trackElement);
    });
}
