// Data for stations in Vermont
const vermontData = {
  labels: ["Stations before 2020", "Stations in 2020", "Stations in 2021", "Stations in 2022"],
  datasets: [{
    label: 'Vermont',
    data: [351,577,725,1005],
    fill: false,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }]
};

const vermontCtx = document.getElementById('vermontChart').getContext('2d');

const vermontChart = new Chart(vermontCtx, {
  type: 'line',
  data: vermontData,
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