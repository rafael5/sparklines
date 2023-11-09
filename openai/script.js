$(document).ready(function () {
    const dataPoints = [5, 8, 12, 6, 10, 7, 9, 15, 11, 14]; // Replace with your data points

    // Create the Sparkline line plot
    $('#sparkline').sparkline(dataPoints, {
        type: 'line',
        width: '200px',
        height: '50px',
        lineColor: 'blue',
        fillColor: 'lightblue'
    });
});

