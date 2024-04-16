// Initialize Leaflet map
let myMap = L.map("map", {
    center: [37.09, -122.33], // Adjusted longitude to a negative value
    zoom: 6
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Initialize heatmap layer and add it to myMap
var heat = L.heatLayer([], { radius: 25 }).addTo(myMap);

// Load CSV data and create heatmap
d3.csv('C:/Users/marti/OneDrive/Desktop/School/SMU-VIRT-DATA-PT-12-2023-U-LOLC/project3-alternating-current/csv/Sorted_CA_EV_Registration_2020-2022.csv').then(function(data) {
    // Iterate over each data point
    data.forEach(function(d) {
        // Geocode zip code to latitude and longitude
        geocodeZipCode(d.zipcode).then(function(coordinates) {
            // Add latitude, longitude, and value to heatmap data
            heat.addLatLng([coordinates.lat, coordinates.lng, parseFloat(d.value)]);
        });
    });
});

// Function to geocode zip code to latitude and longitude
async function geocodeZipCode(zipcode) {
    // Use the geocoding-js library to perform geocoding
    // Replace 'YOUR_API_KEY' with your actual API key if applicable
    const geocoder = new GeocoderJS('AIzaSyDoNQwc9XZ9IVIc7YRIKiIDVfx_aujnGjI');
    const result = await geocoder.geocode(zipcode);
    if (result.length > 0) {
        return {
            lat: result[0].latitude,
            lng: result[0].longitude
        };
    } else {
        console.error('Geocoding failed for zip code:', zipcode);
        return null;
    }
}