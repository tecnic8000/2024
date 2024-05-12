const colorCode = {pending:'rgba(255, 98, 179, .7)', working:'rgba(255, 206, 86, .7)',done:'rgba(16, 255, 0, .7)'}
const data = {
    datasets: [{
        data: [
            {x: ['2022-05-02', '2022-05-15'], y: 'MODELLING', status: 'working', duration:'1', note:'furtherNote1\nnewLine'},
            {x: ['2022-05-03', '2022-05-25'], y: 'ANIMATIC', status: 'pending', duration:'2', note:'furtherNote2\nnewLine3'},
            {x: ['2022-05-10', '2022-05-27'], y: 'COMP', status: 'done', duration:'4', note:''},
            {x: ['2022-05-10', '2022-05-25'], y: 'RENDER1', status: 'done', duration:'5', note:''},
            {x: ['2022-05-01', '2022-05-31'], y: '//', status: '//', duration:'template', note:'template'}
        ],backgroundColor: (ctx) => {return colorCode[ctx.raw.status];} 
    }]
};
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
            ctx.restore();
            ctx.fillText(`${new Date().getDate()}-${new Date().getMonth()+1}`,y.getPixelForValue(new Date()), top);
        }  
}
const config = {
    type: 'bar',
    data,
    options: {
      indexAxis : 'y',
      scales: {
        x: {
            position: 'top',
            type: 'time',
            time: {displayFormats:{day:'dd'}},
            min: '2022-05-01', //PROJECT START DATE
            max: '2022-05-31' //PROJECT END DATE
        }
      },
      barPercentage: 0.6
      ,
      plugins:{
        legend: {display:false},
        tooltip:{callbacks:{title:(ctx) => { //todo write duration function
            const start = new Date(ctx[0].raw.x[0])
            const end = new Date(ctx[0].raw.x[1])
            const duration = ctx[0].raw.duration
            return `${start.toLocaleString([],{day:'numeric', month:'short'})} - ${end.toLocaleString([],{day:'numeric', month:'short'})} \n${ctx[0].raw.note}`
            }}},
        datalabels:{formatter: (val) => {
            if(val.status =='done'){
                return `${val.status}-${val.duration}days`
            } else {return val.status}
            
        }}
        }
    },
    plugins: [todayLine, ChartDataLabels],
};
const myChart = new Chart(document.getElementById('myChart'),config);
console.log(data);
console.log("Chart.js " + Chart.version);
console.log(Date());







//---WIP---WIP---WIP---WIP---WIP---WIP---
function calculateDays() {//---DURATION CALCULATOR --------------------------------
    // Get the values of the start and end date input fields
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
  
    // Calculate the difference in milliseconds between the two dates
    var timeDifference = endDate.getTime() - startDate.getTime();
  
    // Convert milliseconds to days
    var daysDifference = timeDifference / (1000 * 3600 * 24);
  
    // Display the result
    document.getElementById("result").innerText = "Number of days between the two dates: " + daysDifference;
}
function addTask(){//---LOADS TASKS !! JS cannot write files  Chart JS Series Part 9 -----------------------------
    const taskName = document.getElementById('taskName');
    const taskStart = document.getElementById('taskStart');
    const taskEnd = document.getElementById('taskEnd');
    const taskNote = document.getElementById('taskNote');
    myChart.data.datasets[0].data.push({x:[taskStart.value, taskEnd.value],y: taskName.value, status:'WORKING', duration:0, note: taskNote.value});
    myChart.update();
}
