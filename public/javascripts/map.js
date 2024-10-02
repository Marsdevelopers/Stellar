document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Access the embedded emission data
  var emissionData = [
    { lat: 35.6895, lon: 139.6917, emission: 50 }, // Tokyo
    { lat: 40.7128, lon: -74.0060, emission: 200 }, // New York
    { lat: 51.5074, lon: -0.1278, emission: 100 } // London
];

// Function to get color based on emission level
function getColor(emission) {
    return emission > 150 ? 'red' :
           emission > 50  ? 'orange' :
                            'blue';
}
  

   

      L.marker([lat, lng], {
        icon: L.icon({
         
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
          shadowSize: [41, 41]
        })
      }).addTo(map)
        .bindPopup('<b>${area.title}</b><br>${area.description}');
    });
 