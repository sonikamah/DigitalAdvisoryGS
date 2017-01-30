/**
 * Created by jainpri on 1/5/2017.
 */

const Config = {
  chart: {
    //plotBackgroundColor: null,
    //plotBorderWidth: null,
    //plotShadow: false,
    type: 'areaspline'
  },
  title: {
    text: 'market shares January, 2015 to May, 2015'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },

  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:  '#FFFFFF'
  },
  xAxis: {
    categories: [
      '2020',
      '2025',
      '2030',
      '2035',
      '2040',
      '2045',
      '2050',
      '2055'
    ]

  },
  yAxis: {
    opposite: true
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },

  series: []
}

export default Config;
