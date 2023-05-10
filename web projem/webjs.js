const apiKey = 'API_KEY'; //API keyinizi buraya girin
const tabId = 'tabId'; //APIden almak istediğiniz tabIdyi buraya girin

const tablatureElement = document.getElementById('tablature');

fetch(`https://api.ultimateguitar.com/api/v1/tab/${tabId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const tablature = data.data.tab.body;
    tablatureElement.innerText = tablature;
  })
  .catch(error => {
    console.error('API hatası:', error);
    tablatureElement.innerText = 'Tablature alınamadı.';
  });