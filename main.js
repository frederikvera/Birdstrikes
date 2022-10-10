let chart = document.getElementById('chart').getContext('2d');
let bmiChart = new Chart(chart, {
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