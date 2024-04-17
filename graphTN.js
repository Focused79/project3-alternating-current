// Data for stations in Tennessee
const tennesseeData = {
  labels: ["Stations before 2020", "Stations in 2020", "Stations in 2021", "Stations in 2022"],
  datasets: [{
    label: 'Tennessee',
    data: [351,577,725,1005],
    fill: false,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }]
};

const tennesseeCtx = document.getElementById('tennesseeChart').getContext('2d');

const tennesseeChart = new Chart(tennesseeCtx, {
  type: 'line',
  data: tennesseeData,
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