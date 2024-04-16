var myMap =  L.map("map", {
    center: [38.50, -97.33],
    zoom: 5
});
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=H0bVyMLzqj1Wd45IS1IxBUygOOwx7nH50dOa68hC&fuel_type=ELEC";

