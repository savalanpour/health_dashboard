import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import highchartsMore from "highcharts/highcharts-more.js";
import HighchartsReact from 'highcharts-react-official';
import solidGauge from "highcharts/modules/solid-gauge.js";
import s from "./SleepChart.module.scss";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const SleepChart = ({data= {}}) => {
  const chartRef = useRef();
  
  const showTotalTime = () => {
    const h = Math.floor((data.lightSleepDurationInSeconds + data.deepSleepDurationInSeconds + data.remSleepInSeconds + data.awakeDurationInSeconds) / 3600);
    const min = Math.floor(((data.lightSleepDurationInSeconds + data.deepSleepDurationInSeconds + data.remSleepInSeconds + data.awakeDurationInSeconds) % 3600) / 60)
    return `${h} hours and ${min} minutes`
  }
  const chartOptions = {
    chart: {
      type: 'pie',
      height: 340,
      width: 555
    },
    title: {
      text: `Sleep`,
      y: 12
    },
    subtitle: {
      text:  `${showTotalTime()}`,
    },
  
    accessibility: {
      announceNewData: {
        enabled: true
      },
      point: {
        valueSuffix: 'M'
      }
    },
  
    plotOptions: {
      series: {
        borderRadius: 5,
        dataLabels: {
          style: {
            fontSize: '0.9em',
          },
          enabled: true,
          verticalAlign: 'top',
          format: '{point.name}: {(divide point.y 60)} m'
        },
      },
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
    },
  
    series: [
      {
        name: 'Sleep',
        colorByPoint: true,
        data: [
          {
            name: 'Light Sleep',
            y: data.lightSleepDurationInSeconds,
          },
          {
            name: 'Deep Sleep',
            y: data.deepSleepDurationInSeconds,
          },
          {
            name: 'REM',
            y: data.remSleepInSeconds,
          },
          {
            name: 'Awake',
            y: data.awakeDurationInSeconds,
          },
        ]
      }
    ],
  
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

export default SleepChart;
