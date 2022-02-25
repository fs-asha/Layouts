$(function() {
    // var start = moment().subtract(29, 'days');
    // var end = moment();
    var start = moment('01-Jan-2022');
    var end = moment('15-Feb-2022');

    function cb(start, end) {
        $('#reportrange span').html(start.format('DD-MM-YYYY') + ' - to - ' + end.format('DD-MM-YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);
    cb(start, end);

});

var instaCMData=[{
    "category": ["14-Feb-22", "13-Feb-22", "12-Feb-22", "11-Feb-22", "10-Feb-22", "09-Feb-22", "08-Feb-22", "07-Feb-22", "06-Feb-22", "05-Feb-22", "04-Feb-22", "03-Feb-22", "02-Feb-22", "01-Feb-22", "31-Jan-22", "30-Jan-22", "29-Jan-22", "28-Jan-22", "27-Jan-22", "26-Jan-22", "25-Jan-22", "24-Jan-22", "23-Jan-22", "22-Jan-22", "21-Jan-22", "20-Jan-22", "19-Jan-22", "18-Jan-22", "17-Jan-22", "16-Jan-22", "15-Jan-22", "14-Jan-22", "13-Jan-22", "12-Jan-22", "11-Jan-22", "10-Jan-22", "09-Jan-22", "08-Jan-22", "07-Jan-22", "06-Jan-22", "05-Jan-22", "04-Jan-22", "03-Jan-22", "02-Jan-22", "01-Jan-22"],
    "likes": [1495, 2913, 0, 330, 0, 819, 0, 1055, 629, 403, 2523, 948, 688, 2173, 0, 693, 851, 475, 623, 2990, 0, 0, 1194, 904, 2472, 0, 0, 2101, 1433, 640, 2696, 4385, 4875, 1116, 1668, 1801, 2997, 1206, 5440, 0, 0, 0, 3646, 640, 905],
    "comments": [37, 43, 0, 7, 0, 7, 25, 20, 3, 19, 26, 35, 35, 46, 7, 78, 23, 15, 8, 177, 0, 34, 143, 14, 74, 14, 0, 52, 27, 12, 54, 49, 60, 51, 30, 43, 38, 11, 142, 5, 0, 0, 66, 53, 23],
    "shares": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}];
// console.log(instaCMData[0].category);

// Instagram Likes CM
Highcharts.chart('instacmlContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: instaCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fd6851'],
    series: [{
        name: 'Likes',
        data: instaCMData[0].likes
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Instagram Comments CM
Highcharts.chart('instacmcContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: instaCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#8f99f3'],
    series: [{
        name: 'Comments',
        data: instaCMData[0].comments
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Instagram Shares CM
Highcharts.chart('instacmsContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: instaCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fdf095'],
    series: [{
        name: 'Share',
        data: instaCMData[0].shares
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

var fbCMData=[{
    "category": ["14-Feb-22", "13-Feb-22", "12-Feb-22", "11-Feb-22", "10-Feb-22", "09-Feb-22", "08-Feb-22", "07-Feb-22", "06-Feb-22", "05-Feb-22", "04-Feb-22", "03-Feb-22", "02-Feb-22", "01-Feb-22", "31-Jan-22", "30-Jan-22", "29-Jan-22", "28-Jan-22", "27-Jan-22", "26-Jan-22", "25-Jan-22", "24-Jan-22", "23-Jan-22", "22-Jan-22", "21-Jan-22", "20-Jan-22", "19-Jan-22", "18-Jan-22", "17-Jan-22", "16-Jan-22", "15-Jan-22", "14-Jan-22", "13-Jan-22", "12-Jan-22", "11-Jan-22", "10-Jan-22", "09-Jan-22", "08-Jan-22", "07-Jan-22", "06-Jan-22", "05-Jan-22", "04-Jan-22", "03-Jan-22", "02-Jan-22", "01-Jan-22"],
    "likes": [5675, 6975, 1791, 788, 1400, 2300, 7802, 3100, 2600, 3191, 2888, 7400, 6042, 6385, 2200, 9232, 2566, 1454, 1910, 15175, 6003, 6326, 8400, 1600, 4900, 2400, 1200, 5600, 0, 1622, 2600, 9818, 9500, 3566, 6900, 4755, 5957, 14700, 7000, 1062, 16520, 1600, 6531, 7067, 2495],
    "comments": [493, 388, 254, 126, 77, 126, 471, 114, 264, 441, 116, 396, 409, 488, 837, 5803, 303, 268, 261, 1496, 282, 421, 827, 77, 583, 125, 180, 1763, 0, 218, 397, 585, 578, 334, 420, 261, 550, 1202, 940, 217, 2540, 856, 4388, 605, 230],
    "shares": [172, 299, 84, 46, 29, 103, 392, 101, 69, 150, 110, 351, 283, 344, 231, 814, 161, 80, 63, 1414, 169, 396, 432, 48, 192, 145, 29, 133, 0, 82, 69, 300, 241, 245, 332, 315, 331, 722, 282, 65, 717, 43, 232, 256, 97]
}];

// Facebook Likes CM
Highcharts.chart('fbcmlContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fd6851'],
    series: [{
        name: 'Likes',
        data: fbCMData[0].likes
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Facebook Comments CM
Highcharts.chart('fbcmcContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#8f99f3'],
    series: [{
        name: 'Comments',
        data: fbCMData[0].comments
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Facebook Shares CM
Highcharts.chart('fbcmsContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fdf095'],
    series: [{
        name: 'Share',
        data: fbCMData[0].shares
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

var fbCMOData=[{
    "category": ["14-Feb-22", "13-Feb-22", "12-Feb-22", "11-Feb-22", "10-Feb-22", "09-Feb-22", "08-Feb-22", "07-Feb-22", "06-Feb-22", "05-Feb-22", "04-Feb-22", "03-Feb-22", "02-Feb-22", "01-Feb-22", "31-Jan-22", "30-Jan-22", "29-Jan-22", "28-Jan-22", "27-Jan-22", "26-Jan-22", "25-Jan-22", "24-Jan-22", "23-Jan-22", "22-Jan-22", "21-Jan-22", "20-Jan-22", "19-Jan-22", "18-Jan-22", "17-Jan-22", "16-Jan-22", "15-Jan-22", "14-Jan-22", "13-Jan-22", "12-Jan-22", "11-Jan-22", "10-Jan-22", "09-Jan-22", "08-Jan-22", "07-Jan-22", "06-Jan-22", "05-Jan-22", "04-Jan-22", "03-Jan-22", "02-Jan-22", "01-Jan-22"],
    "likes": [2793, 2186, 1524, 1309, 1318, 1764, 3533, 832, 1543, 2047, 2035, 2097, 1561, 1621, 1543, 2202, 2560, 2645, 1488, 4322, 2313, 3245, 3121, 1453, 3592, 1763, 1825, 2751, 1028, 1211, 927, 3227, 3938, 2476, 6131, 2034, 1870, 948, 1508, 4208, 1860, 1961, 973, 1033, 1260],
    "comments": [133, 271, 117, 88, 75, 104, 235, 36, 84, 123, 150, 145, 150, 104, 92, 115, 108, 199, 118, 261, 139, 179, 177, 63, 192, 122, 241, 146, 106, 65, 52, 232, 234, 272, 338, 99, 106, 51, 106, 286, 223, 1032, 130, 52, 76],
    "shares": [97, 109, 44, 49, 41, 108, 169, 23, 51, 119, 36, 51, 110, 76, 58, 57, 79, 99, 56, 178, 81, 121, 101, 57, 161, 98, 65, 215, 51, 35, 26, 107, 79, 229, 232, 59, 122, 38, 71, 195, 66, 67, 35, 55, 87]
}];

// Facebook Likes CMO
Highcharts.chart('fbcmolContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMOData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fd6851'],
    series: [{
        name: 'Likes',
        data: fbCMOData[0].likes
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Facebook Comments CMO
Highcharts.chart('fbcmocContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMOData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#8f99f3'],
    series: [{
        name: 'Comments',
        data: fbCMOData[0].comments
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

// Facebook Shares CMO
Highcharts.chart('fbcmosContainer', {
    chart: {
        type: 'areaspline',
        height:300
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true
    },
    xAxis: {
        categories: fbCMOData[0].category,
        title: {
            text: ''
        },
        labels: {
            rotation: -90
        }
    },
    yAxis: {
        crosshair: {
            width: 2,
            color: '#999',
            dashStyle: 'dot'
        },
        title: {
            text: ''
        },
        lineWidth: 1,
          gridLineColor:'#f2f2f2',
    },
    tooltip: {
        borderWidth: 0,
        borderRadius:30,
        shadow: true,
        useHTML: true,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
            pointPlacement: 'on'
        }
    },
    colors: ['#fdf095'],
    series: [{
        name: 'Share',
        data: fbCMOData[0].shares
    }],
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

var ytCMData=[{
    "category": ["14-Feb-22", "13-Feb-22", "12-Feb-22", "11-Feb-22", "10-Feb-22", "09-Feb-22", "08-Feb-22", "07-Feb-22", "06-Feb-22", "05-Feb-22", "04-Feb-22", "03-Feb-22", "02-Feb-22", "01-Feb-22", "31-Jan-22", "30-Jan-22", "29-Jan-22", "28-Jan-22", "27-Jan-22", "26-Jan-22", "25-Jan-22", "24-Jan-22", "23-Jan-22", "22-Jan-22", "21-Jan-22", "20-Jan-22", "19-Jan-22", "18-Jan-22", "17-Jan-22", "16-Jan-22", "15-Jan-22", "14-Jan-22", "13-Jan-22", "12-Jan-22", "11-Jan-22", "10-Jan-22", "09-Jan-22", "08-Jan-22", "07-Jan-22", "06-Jan-22", "05-Jan-22", "04-Jan-22", "03-Jan-22", "02-Jan-22", "01-Jan-22"],
    "likes": [10, 19, 0, 0, 0, 0, 18, 8, 0, 34, 0, 43, 58, 48, 111, 524, 21, 32, 0, 152, 30, 48, 68, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 96, 87, 77, 0, 0, 93, 18],
    "views": [165, 330, 0, 0, 0, 0, 401, 260, 0, 443, 0, 776, 1117, 697, 1419, 5334, 209, 538, 0, 1635, 383, 712, 867, 0, 1129, 0, 0, 0, 0, 0, 0, 0, 0, 575, 0, 0, 0, 0, 2095, 1571, 853, 0, 0, 2280, 86]
}];

// Youtube CM
Highcharts.chart('ytcmContainer', {
    chart: {
        zoomType: 'xy',
        height:300
    },
    title: {
        text: ''
    },
    xAxis: [{
        categories: ytCMData[0].category,
        crosshair: true
    }],
    colors:["#008ffb", "#f89c5e"],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: 'Likes',
        }
    }, { // Secondary yAxis
        title: {
            text: 'Views',
        },
        labels: {
            format: '{value}',
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        
    },
    series: [{
        name: 'Views',
        type: 'column',
        yAxis: 1,
        data: ytCMData[0].views,
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Likes',
        type: 'spline',
        data: ytCMData[0].likes,
        tooltip: {
            valueSuffix: ''
        }
    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
});

// Twitter smachart
Highcharts.chart('twsmoContainer', {
    chart: {
        type: 'column',
        height:300
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    colors:['#4b9aff', '#ff6060', '#51d29f', '#ffb46e'],
    series: [{
        name: 'Reply',
        data: [126, 156, 51, 26, 262, 53, 180, 114, 238, 142, 236, 99]

    }, {
        name: 'Like',
        data: [167, 278, 89, 258, 135, 102, 202, 300, 113, 232, 177, 146]

    }, {
        name: 'Retweet',
        data: [30, 69, 281, 208, 97, 159, 227, 67, 127, 223, 157, 188]

    // }, {
    //     name: 'Quote',
    //     data: [179, 154, 150, 48, 155, 136, 290, 61, 87, 169, 165, 58]

    }],
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    }
});