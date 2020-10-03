/* Here goes the charts data */
    google.charts.load('current', {
  'callback': function () {
    var TotalAddedValue = google.visualization.arrayToDataTable([
      ['Category', 'large added value', {role: 'annotation'}, 'small added value', {role: 'annotation'}, 'no added value', {role: 'annotation'}],
      ['Trunk delivery',  27, '27%',	33, '33%',	40, '40%'],
      ['Open or start vehicle via mobile phone',  30, '30%',	34, '34%',	35, '35%'],
      ['Integration of third-party mobility services into the car',  33, '33%',	43, '43%',	24, '24%'],
      ['Access to the same previously bought connected services in other connected cars',  33, '33%',	41, '41%',	26, '26%'],
      ['Personalized services',  39, '39%',	42, '42%',	19, '19%'],
      ['Self-learning/intelligent services',  39, '39%',	39, '39%',	22, '22%'],
      ['Smartphone apps from car manufacturers',  41, '41%',	42, '42%',	17, '17%'],
      ['Seamless integration of personal devices across different car models',  42, '42%',	37, '37%',	22, '22%'],
      ['Autopilot',  42, '42%',	34, '34%',	25, '25%'],
      ['Proactive services',  43, '43%',	42, '42%',	15, '15%']
    ]);

    var PremiumAddedValue = google.visualization.arrayToDataTable([
      ['Category', 'large added value', {role: 'annotation'}, 'small added value', {role: 'annotation'}, 'no added value', {role: 'annotation'}],
      ['Trunk delivery',  33, '33%',	36, '36%',	31, '31%'],
      ['Open or start vehicle via mobile phone',  36, '36%',	35, '35%',	29, '29%'],
      ['Integration of third-party mobility services into the car',  38, '38%',	43, '43%',	19, '19%'],
      ['Access to the same previously bought connected services in other connected cars',  40, '40%',	41, '41%',	19, '19%'],
      ['Personalized services',  44, '44%',	41, '41%',	15, '15%'],
      ['Self-learning/intelligent services',  44, '44%',	38, '38%',	18, '18%'],
      ['Smartphone apps from car manufacturers',  46, '46%',	41, '41%',	13, '13%'],
      ['Seamless integration of personal devices across different car models',  51, '51%',	32, '32%',	16, '16%'],
      ['Autopilot',  46, '46%',	34, '34%',	20, '20%'],
      ['Proactive services',  47, '47%',	40, '40%',	12, '12%']
    ]);

    var NonPremiumAddedValue = google.visualization.arrayToDataTable([
      ['Category', 'large added value', {role: 'annotation'}, 'small added value', {role: 'annotation'}, 'no added value', {role: 'annotation'}],
      ['Trunk delivery',  22, '22%',	32, '32%',	46, '46%'],
      ['Open or start vehicle via mobile phone',  27, '27%',	34, '34%',	40, '40%'],
      ['Integration of third-party mobility services into the car',  30, '30%',	43, '43%',	27, '27%'],
      ['Access to the same previously bought connected services in other connected cars',  29, '29%',	41, '41%',	30, '30%'],
      ['Personalized services',  35, '35%',	43, '43%',	22, '22%'],
      ['Self-learning/intelligent services',  36, '36%',	39, '39%',	25, '25%'],
      ['Smartphone apps from car manufacturers',  37, '37%',	43, '43%',	20, '20%'],
      ['Seamless integration of personal devices across different car models',  34, '34%',	40, '40%',	26, '26%'],
      ['Autopilot',  39, '39%',	34, '34%',	28, '28%'],
      ['Proactive services',  41, '41%',	43, '43%',	16, '16%']
    ]);

/* Customizing the chart */
    var optionsAddedValue = {
    title: '',
    sort: 'event',
    sortAscending: false,
    sortColumn: 0,
    height: '100%',
    width: '100%',
    bar: {groupWidth: '50%'},
    baselineColor: 'transparent',
    legend: 'none',
    chartArea: {
          height: '100%',
          width: '100%',
          top: 80,
          left: 120,
          bottom: 80,
          right: 20
      },
    annotations: {
          alwaysOutside: false,
          textStyle: {
            fontName: 'Arial',
            fontSize: 10,
            bold:true,
            auraColor: '#eee',
            color: '#FFFFFF'
    }},
    animation:{
        startup: true,
        duration: 800,
        easing: 'out',
    },
    isStacked: 'percent',
    hAxis: {
      ticks: []
        },
    vAxis: {
      textStyle: {
              fontName: 'Arial',
              color: '#000000',
              fontSize: 11,
              bold: true
              },
        },
    colors:['#0068b7', '#FF0000', '#bcbdc0']
      };

/* Sorting of Data */
TotalAddedValue.sort([{column: 1, desc:true}, {column: 3, desc:true}]);
PremiumAddedValue.sort([{column: 1, desc:true}, {column: 3, desc:true}]);
NonPremiumAddedValue.sort([{column: 1, desc:true}, {column: 3, desc:true}]);

/* Event Listener */
    var chart = new google.visualization.BarChart(document.getElementById('chart_divAddedValue'));
    chart.draw(TotalAddedValue, optionsAddedValue);

    document.getElementById('totaladdedvalue').addEventListener('click', function () {
      function drawChart() {
      Array.from(document.querySelectorAll("[id='totaladdedvalue']")).map(function(button) {
           button.style.backgroundColor="#004b85";
      })
      Array.from(document.querySelectorAll("[id='premiumaddedvalue'], [id='nonpremiumaddedvalue']")).map(function(button) {
           button.style.backgroundColor="#0068b7";
      })
      chart.draw(TotalAddedValue, optionsAddedValue);
      }
      drawChart();
    }, false);

    document.getElementById('premiumaddedvalue').addEventListener('click', function () {
      function drawChart() {
      Array.from(document.querySelectorAll("[id='premiumaddedvalue']")).map(function(button) {
           button.style.backgroundColor="#004b85";
      })
      Array.from(document.querySelectorAll("[id='totaladdedvalue'], [id='nonpremiumaddedvalue']")).map(function(button) {
           button.style.backgroundColor="#0068b7";
      })
      chart.draw(PremiumAddedValue, optionsAddedValue);
      }
      drawChart();
    }, false);

    document.getElementById('nonpremiumaddedvalue').addEventListener('click', function () {
      function drawChart() {
      Array.from(document.querySelectorAll("[id='nonpremiumaddedvalue']")).map(function(button) {
           button.style.backgroundColor="#004b85";
      })
      Array.from(document.querySelectorAll("[id='totaladdedvalue'], [id='premiumaddedvalue']")).map(function(button) {
           button.style.backgroundColor="#0068b7";
      })
      chart.draw(NonPremiumAddedValue, optionsAddedValue);
      }
      drawChart();
    }, false);
  },
  'packages':['corechart']
});
