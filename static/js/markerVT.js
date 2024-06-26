var myMap = myMap || L.map('map').setView([44.5588, -72.5778], 7);

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define the URL for API request
var url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=H0bVyMLzqj1Wd45IS1IxBUygOOwx7nH50dOa68hC&fuel_type=ELEC";

// Vermont bounding box coordinates
const vermontBoundingBox = {
    minLatitude: 42.726853,
    maxLatitude: 45.016659,
    minLongitude: -73.43774,
    maxLongitude: -71.464555
};

// Object to store markers for each year
var markersByYear = {};

// Function to clear existing markers from the map
function clearMarkers() {
    for (var year in markersByYear) {
        markersByYear[year].forEach(function(marker) {
            myMap.removeLayer(marker);
        });
    }
    markersByYear = {};
}

// Function to add markers for a specific year
function addMarkersForYear(year) {
    if (markersByYear[year]) {
        markersByYear[year].forEach(function(marker) {
            myMap.addLayer(marker);
        });
        return; // Skip if markers for this year already exist
    }

    d3.json(url).then(function(response) {
        console.log(response);
        var features = response.fuel_stations;
        var markers = [];
        for (let i = 0; i < features.length; i++) {
            let station = features[i];
            let latitude = parseFloat(station.latitude);
            let longitude = parseFloat(station.longitude);
            let state = station.state;
            let openDate = station.open_date ? parseInt(station.open_date.substring(0, 4)) : null; // Check if open_date exists

            if (!isNaN(latitude) && !isNaN(longitude) && state === "VT" && (!year || openDate === year)) {
                // Check if station is within Vermont bounding box and matches the selected year
                if (latitude >= vermontBoundingBox.minLatitude &&
                    latitude <= vermontBoundingBox.maxLatitude &&
                    longitude >= vermontBoundingBox.minLongitude &&
                    longitude <= vermontBoundingBox.maxLongitude) {
                    let marker = L.marker([latitude, longitude]);
                    markers.push(marker);
                    myMap.addLayer(marker);
                }
            }
        }
        markersByYear[year] = markers;
    });
}

// Initial load: Add markers for all stations until 2019
addMarkersForYear(2019);

// Event listener for year selection from dropdown menu
document.getElementById('year-select').addEventListener('change', function() {
    var selectedYear = parseInt(this.value);
    addMarkersForYear(selectedYear);
});

// Event listener for state selection from dropdown menu
document.getElementById('state-select').addEventListener('change', function () {
    var selectedState = this.value;
    clearMarkers(); // Clear existing markers
    loadMarkerFile(selectedState); // Load markers for the selected state
});