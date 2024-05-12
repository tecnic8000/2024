console.log("Chart.js " + Chart.version);
//----REMEBER TO CHECK SCRIPT LINK IN HTML----
//----TASK: BLOCKOUT, ANIMATIC, MODELLING, RIGGING, ANIMATION, VFX/LIGHT, RENDER, COMP, CLOSED
//----STATUS: PLANNED, WORKING, REVIEW1, DONE, PENDING

const data = {
    //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'projName1', //PROJECT NAME
        data: [
            {x: ['2022-05-02', '2022-05-15'], y: 'MODELLING', name: 'James', status: 'PLANNED', duration:'0', pay:'900'},
            {x: ['2022-05-03', '2022-05-25'], y: 'ANIMATIC', name: 'Kirk', status: 'REVIEW1', duration:'0', pay:'100'},
            {x: ['2022-05-02', '2022-05-05'], y: 'ANIMATION', name: 'Jasmine', status: 'DONE', duration:'0', pay:'250'},
            {x: ['2022-05-12', '2022-05-30'], y: 'RENDER', name: 'John', status: 'WORKING', duration:'0', pay:'520'},
            {x: ['2022-05-10', '2022-06-14'], y: 'COMP', name: 'Logan', status: 'PENDING', duration:'0', pay:'400'},
        ], 
        backgroundColor: 'rgba(10, 216, 82, 0.8)'
    }]
  };
//----PLUGINS----------------------------
    const todayLine = {
        id: 'todayLine',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x, y}} = chart;
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 1 ;
            ctx.strokeStyle = 'rgba(255, 26, 104, 1)';
            ctx.moveTo(y.getPixelForValue(new Date()), top);
            ctx.lineTo(y.getPixelForValue(new Date()), bottom);
            ctx.stroke();
            }
    }
    const assignedTask = { //this one works so far
        id: 'assignTask',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x,y}} = chart;
            ctx.textBaseline = 'middle';
            data.datasets[0].data.forEach((datapoint, index) => {
                ctx.fillText(datapoint.name, 10, y.getPixelForValue(index));
            });
        }
    }
    const taskStatus = {
        id: 'taskStatus',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, chartArea: { top, bottom, left, right }, scales: {x,y}} = chart;
            data.datasets[0].data.forEach((datapoint, index) => {
                ctx.fillText(datapoint.status, 15, y.getPixelForValue(index));
            });
            

        }
    }

//-----CONFIG------------------------------------------ 
  const config = {
    type: 'bar',
    data,
    options: {
      layout: {padding:{left:70}},
      indexAxis : 'y',
      scales: {
        x: {
            position: 'top',
            type: 'time',
            time: {unit: 'day', display: true, text: 'date'},
            min: '2022-04-27', //PROJECT START DATE
            max: '2022-06-10' //PROJECT END DATE
        }
      },
      plugins:{
        legend: {display:false}
      }
    },
    plugins: [todayLine, assignedTask, taskStatus] //TODO: make collumn for duration, start-end date, pay
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  