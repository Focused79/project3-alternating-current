// Data for stations in California
const californiaData = {
  labels: ["Stations before 2020", "Stations in 2020", "Stations in 2021", "Stations in 2022"],
  datasets: [{
    label: 'California',
    data: [5955, 12179, 14881, 18050],
    fill: false,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }]
};

const californiaCtx = document.getElementById('californiaChart').getContext('2d');

const californiaChart = new Chart(californiaCtx, {
  type: 'line',
  data: californiaData,
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