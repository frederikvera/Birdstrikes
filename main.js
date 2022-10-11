
// First chart
// bar chart
// Birdstrikes per month

Chart.defaults.color = "#ffffff";

let birdStrikeMonth = document.getElementById('chart1').getContext('2d');
let chart1 = new Chart(birdStrikeMonth, {
    type: 'bar',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        datasets:[{
            label: 'Bird Strikes per Month',
            data: [
                93,
                128,
                245,
                371,
                671,
                507,
                920,
                943,
                948,
                615,
                289,
                147
            ],

            backgroundColor:[
                'rgba(140, 159, 64, 0.2)',
                'rgba(140, 159, 64, 0.2)',
                'rgba(140, 159, 64, 0.2)',
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(140, 159, 64, 0.2)',
                'rgba(140, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(140, 159, 64, 1)',
                'rgba(140, 159, 64, 1)',
                'rgba(140, 159, 64, 1)',
                'rgba(140, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgb(255, 99, 132, 1)',
                'rgb(255, 99, 132, 1)',
                'rgb(54, 162, 235, 1)',
                'rgb(140, 159, 64, 1)',
                'rgb(140, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x:{
                grid:{
                    display: false
                }
            },
            y:{
                grid:{
                    display: false
                }
            },
        },
        plugins:{
            legend:{
                labels:{
                    font:{
                        size: 25
                    },
                    boxWidth: 0
                },
            },
        },
    },
});






// Second chart
// Bar chart
// The amount of birds getting hit per incident


let birdStrikeSize = document.getElementById('chart3').getContext('2d');
let chart3 = new Chart(birdStrikeSize, {
    type: 'bar',
    data: {
        labels:['Small', 'Medium', 'Large'],
        datasets:[{
            label: 'Size of the Birds that Collide with Planes',
            data: [
                3336,
                1857,
                335,

            ],

            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(140, 159, 64, 0.2)',


            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(140, 159, 64, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x:{
                grid:{
                    display: false
                }
            },
            y:{
                grid:{
                    display: false
                }
            },
        },
        plugins:{
            legend:{
                labels:{
                    font:{
                        size: 25,
                    },
                    boxWidth: 0
                },
            },
        },
    }
});






// Second chart
// Pie chart
//

let birdStrikeCount = document.getElementById('chart2').getContext('2d');
let chart2 = new Chart(birdStrikeCount, {
    type: 'pie',
    data: {
        labels:['1', '2-10', '11-100', 'More than 100'],
        datasets:[{
            label: '',
            data: [
                5272,
                564,
                27,
                2,
            ],

            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(140, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',


            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(140, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins:{
            legend:{
                position: "right",
                title: {
                    display: true,
                    text: `Birds hit per incident`,
                    font:{
                        size: 25
                    }
                }
            }
        }
    }
});

