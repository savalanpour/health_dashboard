import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import highchartsMore from "highcharts/highcharts-more.js";
import HighchartsReact from 'highcharts-react-official';
import solidGauge from "highcharts/modules/solid-gauge.js";
import s from "./StressChart.module.scss";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const StressChart = ({stress=80}) => {
  const chartRef = useRef();
  
  const chartOptions = {
    chart: {
      type: "solidgauge",
      width: 300,
      height: 220,
    },
  
    title: null,
  
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
  
    exporting: {
      enabled: false
    },
  
    tooltip: {
      enabled: false
    },
  
    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#d53939'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -80,
      },
      labels: {
        y: 16
      },
      min: 0,
      max: 100,
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Stress',
      data: [stress],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:50px">{y}</span><br/>' +
          '<span style="font-size:26px;opacity:0.7">Stress</span>' +
          '</div>'
      },
      tooltip: {
        valueSuffix: ''
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

export default StressChart;
