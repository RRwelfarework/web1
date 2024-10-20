// Climate Data Visualization using Chart.js
const ctx = document.getElementById('climateChart').getContext('2d');
const climateChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Temperature Rise in Mangalore (°C)',
            data: [27.5, 27.8, 28.0, 28.3, 28.7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
