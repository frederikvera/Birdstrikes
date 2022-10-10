let birdStrikeMonth = document.getElementById('chart1').getContext('2d');
let chart1 = new Chart(birdStrikeMonth, {
    type: 'bar', //forskellige former af charts
    data: {
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        datasets:[{
            label: 'Bird Strikes by Month',
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
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(100, 102, 255, 0.2)',
                'rgba(143,163,105,0.2)',
                'rgba(101,8,50,0.2)',
                'rgba(157,45,89,0.2)',
                'rgba(159,104,22,0.2)',


            ],
            borderColor: [
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgb(56,14,48)',
                'rgb(32,40,79)',
                'rgb(93,20,80)',
                'rgb(131,87,45)',
                'rgb(105,62,19)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});






let birdStrikeCount = document.getElementById('chart2').getContext('2d');
let chart2 = new Chart(birdStrikeCount, {
    type: 'pie', //forskellige former af charts
    data: {
        labels:['1', '2-10', '11-100', 'More than 100'],
        datasets:[{
            label: 'Amount of birds hits per incident',
            data: [
                5272,
                564,
                27,
                2,

            ],

            backgroundColor:[
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',


            ],
            borderColor: [
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {}
});








let birdStrikeSize = document.getElementById('chart3').getContext('2d');
let chart3 = new Chart(birdStrikeSize, {
    type: 'bar', //forskellige former af charts
    data: {
        labels:['Small', 'Medium', 'Large'],
        datasets:[{
            label: 'Size of birds that hit planes',
            data: [
                3336,
                1857,
                335,

            ],

            backgroundColor:[
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',


            ],
            borderColor: [
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {}
});

