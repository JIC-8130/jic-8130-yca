import React from "react";
import Line from "react-chartjs-2";


var producedData = {
    label: "Number of Units Produced",
    data: [25, 16, 15, 17, 20, 13],
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(51, 255, 107, 0.4)',
    backgroundColor: 'rgba(51, 255, 107, 0.5)',
    pointBorderColor: 'rgba(51, 255, 107, 0.4)',
    pointBackgroundColor: 'rgba(51, 255, 107, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle',
    // Set More Options
  };
     
  var defectsData = {
    label: "Number of Defects",
    data: [10, 5, 11, 2, 6, 4],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(199, 0, 57, 0.4)',
    backgroundColor: 'rgba(199, 0, 57, 0.4)',
    borderColor: 'rgba(199, 0, 57, 0.4)',
    pointBackgroundColor: 'rgba(199, 0, 57, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var qiData = {
    label: "Number of Quality Incidents",
    data: [15, 10, 17, 7, 2, 11],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(255, 195, 0, 0.4)',
    backgroundColor: 'rgba(255, 195, 0, 0.4)',
    pointBorderColor: 'rgba(255, 195, 0, 0.4)',
    pointBackgroundColor: 'rgba(255, 195, 0, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var safetyData = {
    label: "Number of Safety Incidents",
    data: [2, 0, 0, 0, 1, 0],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'red',
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var workerData = {
    label: "Number of Workers at Line",
    data: [21, 18, 18, 19, 21, 16],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(51, 134, 255, 0.4)',
    backgroundColor: 'rgba(51, 134, 255, 0.4)',
    borderColor: 'rgba(51, 134, 255, 0.4)',
    pointBackgroundColor: 'rgba(51, 134, 255, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var overtimeData = {
    label: "Assembly Line Overtime",
    data: [8, 12, 15, 10, 12, 13],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(95, 83, 100, 0.4)',
    backgroundColor: 'rgba(95, 83, 100, 0.4)',
    borderColor: 'rgba(95, 83, 100, 0.4)',
    pointBackgroundColor: 'rgba(95, 83, 100, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };

  var downtimeData = {
    label: "Assemly Line Downtime",
    data: [0, 0, 1, 0, 0, 3],
    lineTension: 0.3,
    lineTension: 0.3,
    fill: false,
    borderColor: 'rgba(255, 159, 51, 0.7)',
    backgroundColor: 'rgba(255, 159, 51, 0.7)',
    borderColor: 'rgba(255, 159, 51, 0.7)',
    pointBackgroundColor: 'rgba(255, 159, 51, 1)',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'circle'
  };
     
  var productionData = {
    labels: ["10-15-2018", "10-16-2018", "10-17-2018", "10-18-2018", "10-19-2018", "10-20-2018"],
    datasets: [producedData, defectsData, qiData, safetyData, workerData, overtimeData, downtimeData]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  const chartData = {
    labels:  [],
    datasets: [{
      label: 'Total Kills per Game',
      data: [1, 2, 3],
      backgroundColor: "#12345"
    }]
  }

const QAChart = () => {
    // var ctx = document.getElementById("lineChart");
    // <div id ="chart">hello there</div>
    
    // {var myChart = new Chart(document.getElementById("chart"), {
    //     type: 'line',
    //     data: productionData,
    //     options: chartOptions
    // })}
    // <Line data={chartData} width={100} height={50} />
    
    <div className="chart">
  <Line
    data={chartData}

    options={{

      
        title: {
          display: false,
          text: 'Title',
          fontSize: 25
        },
        legend: {
          display: false,
          position: 'bottom'
        },
        scales: {
       xAxes: [{
        scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 10
        },
        //type: 'linear',
        position: 'bottom',
        gridLines: {
            display: false
        }
     }],
       yAxes: [{
        scaleLabel: {
            display: true,
            labelString: 'Total',
            fontSize: 10
         }
       }]
      }
    }}
  />

</div>
};

export default QAChart;