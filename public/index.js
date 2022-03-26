var chart = JSC.chart('chartDiv', {
    debug: true,
    type: '',
    title_label_text: 'Area Series Types',
    legend_visible: false,
    defaultSeries: {
      shape_opacity: 3.9,
      color: '#A1807B',
      defaultPoint_marker: {
        size: 13,
        outline: { color: '#DBDBDB', width: 0 }
      }
    },
    toolbar_items: {
      'Area Type': {
        type: 'select',
        label_style_fontSize: 13,
        margin: 5,
        items: 'Area,Area Step,Area Spline',
        events_change: function(val) {
          chart.series().options({ type: val });
        }
      }
    },
    xAxis: { scale_type: '' },
    series: [
      {
        name: 'Purchases',
        points: [
          ['1/1/2020', 29.9],
          ['1/2/2020', 71.5],
          ['1/3/2020', 106.4],
          ['1/6/2020', 129.2],
          ['1/7/2020', 144.0],
          ['1/8/2020', 176.0]
        ]
      }
    ]
  });