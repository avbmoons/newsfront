
                const ctx = document.getElementById('myChart');

                Chart.defaults.font.size = 12

                new Chart(ctx, {
                  type: 'line',
                  data: {
                    labels: ['Oct-24', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                    datasets: [
                      {
                      label: 'Visits',
                      data: visits,
                      borderColor: '#2641af',
                      backgroundColor: '#2641af', 
                      borderWidth: 2         ,
                      pointBorderWidth: 0,
                      pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
                    }, 
                    {
                      label: 'Users',
                      data: users,
                      borderColor: '#34B639',
                      backgroundColor: '#34B639',
                      borderWidth: 2,
                      pointBorderWidth: 0,
                      pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
                    },
                    {
                      label: 'Messages',
                      data: messages,
                      borderColor: '#35BFDE',
                      backgroundColor: '#35BFDE',
                      borderWidth: 2,
                      pointBorderWidth: 0,
                      pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
                    },
                    {
                      label: 'Exports',
                      data: exports,
                      borderColor: '#EB9041',
                      backgroundColor: '#EB9041',
                      borderWidth: 2,
                      pointBorderWidth: 0,
                      pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
                    }
                  
                  ]
                  },
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    },
                    plugins: {
                      legend: {
                        align: 'end',
                        labels: {
                          boxWidth: 14,
                          font: {
                            size: 14
                          }
                        }
                      }
                    }
                  }
                });
