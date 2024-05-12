console.log("Chart.js " + Chart.version);
//----REMEBER TO CHECK SCRIPT LINK IN HTML----


const data = {
    //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'projName1', //PROJECT NAME
      data: [
        {x: ['2022-05-02', '2022-05-15'], y: 'task1', name: 'James'},
        {x: ['2022-05-03', '2022-05-25'], y: 'task2', name: 'James'},
        {x: ['2022-05-02', '2022-05-05'], y: 'task3', name: 'James'},
        {x: ['2022-05-12', '2022-05-30'], y: 'task4', name: 'James'},
      ], 
      backgroundColor: 'rgba(150, 26, 104, .5)',
      barPercentage:0.6
    }]
  };
  //  plugin //not working yet
  const todayLine = {
    id: 'todayLine',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x,y}} = chart;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5 ;
        ctx.strokeStyle = 'rgba(255, 26, 104, 1)';
        ctx.setLineDash([6,6]);
        ctx.moveTo(x.getPixelForValue(new Date()), top);
        ctx.lineTo(x.getPixelForValue(new Date()), bottom);
        ctx.stroke();
        }
    }
    const assignedTask = { //this one works so far
        id: 'assignTask',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x,y}} = chart;
            ctx.font = 'bold';
            ctx.fillStyle = 'black';
            ctx.fillText('text', 10, y.getPixelForValue(0));
        }
    }


  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      layout: {},
      indexAxis : 'y',
      scales: {
        x: {
            position: 'top',
            type: 'time',
            time: {unit: 'day'},
            min: '2022-04-27', //PROJECT START DATE
            max: '2022-06-10' //PROJECT END DATE
        }
      },
      plugins:{
        legend: {display:false}
      }
    },
    plugins: [todayLine, assignedTask]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  