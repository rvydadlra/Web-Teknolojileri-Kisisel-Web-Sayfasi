window.addEventListener('DOMContentLoaded', getData);

function getData() {
    // API isteği yapılacak URL
    var apiUrl = 'https://newsapi.org/v2/top-headlines';
    
    // API anahtarınızı buraya girin
    var apiKey = '2c35986412f44845b947507cdf43eb88';
    
    // API isteği yapma
    fetch(apiUrl + '?country=us&apiKey=' + apiKey)
        .then(response => response.json())
        .then(data => {
            // API'den dönen haberleri işleme
            displayData(data);
        })
        .catch(error => {
            console.log('API hatası:', error);
        });
}

function displayData(data) {
    var articlesContainer = document.getElementById('articles-container');
    // Haberleri gösterme
    data.articles.forEach(article => {
        var articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <img src="${article.urlToImage}" alt="${article.title}" width="200">
            <a href="${article.url}" target="_blank">Daha fazlasını oku</a>
        `;
        articlesContainer.appendChild(articleElement);
    });
}
