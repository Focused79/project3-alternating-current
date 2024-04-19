// Data for stations in North Carolina
const northCarolinaData = {
  labels: ["Stations before 2020", "Stations in 2020", "Stations in 2021", "Stations in 2022"],
  datasets: [{
    label: 'North Carolina',
    data: [658,962,1220,1820],
    fill: false,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }]
};

const northCarolinaCtx = document.getElementById('northCarolinaChart').getContext('2d');

const cnorthCarolinaChart = new Chart(northCarolinaCtx, {
  type: 'line',
  data: northCarolinaData,
  options: {
    responsive: false, // Disable responsiveness
    maintainAspectRatio: false, // Disable aspect ratio
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});