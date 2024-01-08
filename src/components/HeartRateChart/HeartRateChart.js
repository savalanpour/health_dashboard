import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import highchartsMore from "highcharts/highcharts-more.js";
import HighchartsReact from 'highcharts-react-official';
import solidGauge from "highcharts/modules/solid-gauge.js";
import s from "./HeartRateChart.module.scss";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const HeartRateChart = ({rate=80}) => {
  const chartRef = useRef();
  
  const chartOptions = {
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: 340,
      width: 555
    },
  
    title: {
      text: 'Heart Rate',
      y: 15,
    },
  
    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: null,
      center: ['50%', '75%'],
      size: '100%'
    },
  
    // the value axis
    yAxis: {
      min: 20,
      max: 170,
      tickPixelInterval: 30,
      tickPosition: 'inside',
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
      tickLength: 60,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: '14px'
        }
      },
      lineWidth: 0,
      plotBands: [{
        from: 20,
        to: 40,
        color: '#DF5353', // green
        thickness: 60,
      },{
        from: 40,
        to: 60,
        color: '#DDDF0D', // green
        thickness: 60
      },{
        from: 60,
        to: 100,
        color: '#55BF3B', // green
        thickness: 60
      }, {
        from: 100,
        to: 150,
        color: '#DDDF0D', // yellow
        thickness: 60
      }, {
        from: 150,
        to: 170,
        color: '#DF5353', // red
        thickness: 60
      }]
    },
  
    series: [{
      name: 'bps',
      data: [rate],
      tooltip: {
        valueSuffix: ' bps'
      },
      dataLabels: {
        format: '{y} bps',
        borderWidth: 0,
        color: '#333333',
        style: {
          fontSize: '16px'
        }
      },
      dial: {
        radius: '60%',
        backgroundColor: 'gray',
        baseWidth: 12,
        baseLength: '0%',
        rearLength: '0%'
      },
      pivot: {
        backgroundColor: 'gray',
        radius: 6
      }
    
    }]
  
  };
  
  return (
    <div className={s.root}>
      <div style={{minHeight: "100px"}}>
        <div className={s.chart}>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            constructorType="chart"
            ref={chartRef}
          />
        </div>
      </div>
    </div>
  );
};

export default HeartRateChart;
