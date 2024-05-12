console.log("Chart.js " + Chart.version);
//----REMEBER TO CHECK SCRIPT LINK IN HTML----


const data = {
    //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'projName1', //PROJECT NAME
      data: [
        {x: ['2022-05-02', '2022-05-15'], y: 'task1'},
        {x: ['2022-05-03', '2022-05-25'], y: 'task2'},
        {x: ['2022-05-02', '2022-05-05'], y: 'task3'},
        {x: ['2022-05-12', '2022-05-30'], y: 'task4'},
      ], backgroundColor: 'rgba(255, 26, 104, .6)'
    }]
  };
  // todayLine plugin
  const todayLine = {
    id: 'todayLine',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x,y}} = chart;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3 ;
        ctx.moveTo(x.getPixelForValue(new Date()), top);
        ctx.lineTo(x.getPixelForValue(new Date()), bottom);
        ctx.stroke(); 
  }
}
  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      indexAxis : 'y',
      scales: {
        x: {
          type: 'time',
          time: {unit: 'day'},
          min: '2022-04-21', //PROJECT START DATE
          max: '2022-06-15' //PROJECT END DATE
        }
      }
    },
    plugins: [todayLine]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  