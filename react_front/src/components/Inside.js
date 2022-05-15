import React from "react";

import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
solidGauge(Highcharts);


export const Inside = ({ inside }) => {    
    if (!inside.length) {
        return (<>
            <h5><b>Данные внутренних датчиков</b></h5>
            <p style={{fontSize: '20px'}}>Ещё нет данных по автомобилю</p>
        </>
        )
    }
    let date = inside[0].time.slice(0, 10)
    let time = inside[0].time.slice(11, 16)
    const oilOpt = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: "60%",
            backgroundColor: "#fff176",
            marginTop: 30
          },
        
          title: {
            text: 'Масло'
          },
        
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333']
                ]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF']
                ]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {
            //   default background
            }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }]
          },
        
          // the value axis
          yAxis: {
            min: 0,
            max: 100,
        
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
        
            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
              step: 2,
              rotation: 'auto'
            },
            plotBands: [{
              from: 0,
              to: 20,
              color: '#DF5353' // green
            }, {
              from: 20,
              to: 60,
              color: '#DDDF0D' // yellow
            }, {
              from: 60,
              to: 100,
              color: '#55BF3B' // red
            }]
          },
        
          series: [{
            name: 'Остаток масла',
            data: [inside[0].oil],
            tooltip: {
              valueSuffix: ' %'
            }
          }]
    }

    const benOpt = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: "60%",
            backgroundColor: "#fff176",
            marginTop: 30
          },
        
          title: {
            text: 'Бензин'
          },
        
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333']
                ]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF']
                ]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {
            //   default background
            }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }]
          },
        
          // the value axis
          yAxis: {
            min: 0,
            max: 100,
        
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
        
            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
              step: 2,
              rotation: 'auto'
            },
            plotBands: [{
              from: 0,
              to: 20,
              color: '#DF5353' // green
            }, {
              from: 20,
              to: 60,
              color: '#DDDF0D' // yellow
            }, {
              from: 60,
              to: 100,
              color: '#55BF3B' // red
            }]
          },
        
          series: [{
            name: 'Остаток топлива',
            data: [inside[0].benzine],
            tooltip: {
              valueSuffix: ' %'
            }
          }]
    }
    const chargeOpt = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: "60%",
            backgroundColor: "#fff176",
            marginTop: 30
          },
        
          title: {
            text: 'Заряд аккумулятора'
          },
        
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333']
                ]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF']
                ]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {
            //   default background
            }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }]
          },
        
          // the value axis
          yAxis: {
            min: 0,
            max: 100,
        
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
        
            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
              step: 2,
              rotation: 'auto'
            },
            plotBands: [{
              from: 0,
              to: 20,
              color: '#DF5353' // green
            }, {
              from: 20,
              to: 60,
              color: '#DDDF0D' // yellow
            }, {
              from: 60,
              to: 100,
              color: '#55BF3B' // red
            }]
          },
        
          series: [{
            name: 'Остаток заряда',
            data: [inside[0].chargeAcc],
            tooltip: {
              valueSuffix: ' %'
            }
          }]
    }
    const humOpt = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: "60%",
            backgroundColor: "#fff176",
            marginTop: 30
          },
        
          title: {
            text: 'Влажность'
          },
        
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333']
                ]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF']
                ]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {
            //   default background
            }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }]
          },
        
          // the value axis
          yAxis: {
            min: 0,
            max: 100,
        
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
        
            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
              step: 2,
              rotation: 'auto'
            },
          },
        
          series: [{
            name: 'Влажность в машине',
            data: [inside[0].humidity],
            tooltip: {
              valueSuffix: ' %'
            }
          }]
    }
    const tempOpt = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: "60%",
            backgroundColor: "#fff176",
            marginTop: 30
          },
        
          title: {
            text: 'Температура'
          },
        
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#FFF'],
                  [1, '#333']
                ]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, '#333'],
                  [1, '#FFF']
                ]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {
            //   default background
            }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }]
          },
        
          // the value axis
          yAxis: {
            min: -10,
            max: 40,
        
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
        
            tickPixelInterval: 50,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
              step: 2,
              rotation: 'auto'
            },
            plotBands: [{
              from: -10,
              to: 0,
              color: '#2110e3' // green
            }, {
              from: 0,
              to: 15,
              color: '#DDDF0D' // yellow
            }, {
              from: 15,
              to: 40,
              color: '#0edb07' // red
            }]
          },
        
          series: [{
            name: 'В машине',
            data: [inside[0].oil],
            tooltip: {
              valueSuffix: ' °C'
            }
          }]
    }
    return (
        <div>

            <h5><b>Данные внутренних датчиков</b></h5>
            <p style={{fontSize: '20px'}}>Время обновления данных: <i>{date}  {time}</i></p>
            <HighchartsReact highcharts={Highcharts} options={oilOpt}  />
            <HighchartsReact highcharts={Highcharts} options={benOpt} />
            <HighchartsReact highcharts={Highcharts} options={humOpt} />
            <HighchartsReact highcharts={Highcharts} options={chargeOpt} />
            <HighchartsReact highcharts={Highcharts} options={tempOpt} />
        </div>
    )
    
}


