console.log("Chart.js " + Chart.version);
//----REMEBER TO CHECK SCRIPT LINK IN HTML----
//----TASK: BLOCKOUT, ANIMATIC, MODELLING, RIGGING, ANIMATION, VFX/LIGHT, RENDER, COMP, CLOSED

const colorCode = {
    PENDING:    'rgba(255, 98, 179, .7)', 
    WORKING:    'rgba(255, 206, 86, .7)',
    DONE:       'rgba(16, 255, 0, .7)',
    REVIEW:     'rgba(255, 159, 64, .7)'
}
const data = {
    //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'projName1', //PROJECT NAME
        data: [
            {x: ['2022-05-02', '2022-05-15'], y: 'MODELLING', status: 'WORKING', duration:'1', note:'furtherNote1\nnewLine'},
            {x: ['2022-05-03', '2022-05-25'], y: 'ANIMATIC', status: 'REVIEW', duration:'2', note:''},
            {x: ['2022-05-02', '2022-05-05'], y: 'ANIMATION', status: 'DONE', duration:'3', note:''},
            {x: ['2022-05-12', '2022-05-30'], y: 'RENDER', status: 'WORKING', duration:'4', note:''},
            {x: ['2022-05-10', '2022-06-04'], y: 'COMP', status: 'PENDING', duration:'4', note:''},
            {x: ['2022-05-10', '2022-06-10'], y: 'RENDER1', status: 'PENDING', duration:'5', note:''}
        ],
        backgroundColor: (ctx) => {return colorCode[ctx.raw.status];} 
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
            ctx.fillText(`${new Date().getDate()}-${new Date().getMonth()+1}`,y.getPixelForValue(new Date()), bottom);
            }  
}

//-----CONFIG------------------------------------------ 
const config = {
    type: 'bar',
    data,
    options: {
      indexAxis : 'y',
      scales: {
        x: {
            position: 'top',
            type: 'time',
            time: {displayFormats:{day:'dd-MM'}},
            min: '2022-04-27', //PROJECT START DATE
            max: '2022-06-10' //PROJECT END DATE
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
        datalabels:{formatter: (val) => {return `${val.status}-${val.duration}days`}}
        }
    },
    plugins: [todayLine, ChartDataLabels],
};
const myChart = new Chart(document.getElementById('myChart'),config);

//---FORM THAT LOAS TASKS INTO GANTT CHART -----------------------------

//--FORM THAT UPADTE ITSELF------------------------------------------------
