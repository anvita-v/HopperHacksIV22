var bp = localStorage.getItem("BP");



if ((bp != null) && bp.length > 0 ) {
const array = bp.split(",");
var length = array.length;
var alldata = new Array(new Array());
alert (length);
for(i=0; i<length; i++)
{
    alert("ARR" + array[i]);
var splitdata =  array[i].split(";") ;
alert (splitdata);
alldata[i][0]= splitdata[0]
alldata[i][1] = splitdata[1];
//alert (splitdata);
//alert (alldata);
}
//alert (i);
}

var chart = JSC.chart('chartDiv', {
    debug: true,
    type: '',
    title_label_text: 'Weight',
    legend_visible: false,
    defaultSeries: { 
      shape_opacity: 3.9,
      color: '#A1807B',
      height: 40, 
      defaultPoint_marker: {
        size: 13,
        outline: { color: '#DBDBDB', width: 0 }
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
          ['1/10/2020', 176.0]
        ]
      }
    ]
  });