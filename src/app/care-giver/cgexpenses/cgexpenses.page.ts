import { Component, OnInit } from '@angular/core';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import * as HighCharts from 'highcharts';
import { DatePipe } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../environments/environment';

declare var Highcharts;

@Component({
  selector: 'app-cgexpenses',
  templateUrl: './cgexpenses.page.html',
  styleUrls: ['./cgexpenses.page.scss'],
})
export class CgexpensesPage implements OnInit {

  expense_val:any;
  user_id:any;
  main_chart:any;
  tabBar: any;
  currentMonthCat:any=[];
  Last_Mon_len:any;
  values:any= [];
  keys_date:any;
  data:any = [];
  // currentMonthCatlm:any=[];
  datalm:any=[]
  lastMonthColor: string = "#fff";
  currentMonthColor:string = "#ffd32c";
  yearColor: string ="#fff";
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  environmentUrl:any;
  drilldownData:any[] = [];

  constructor(public datepipe:DatePipe,private statusBar: StatusBar,public settingService: careGiverService) { 
    this.environmentUrl=environment.ImageUrl;
  }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ffd32c');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.user_id = localStorage.getItem("user_id");
    this.currentMonthCat=[];
    this.values=[];
    this.data=[];
    console.log(this.values,'length')
    var hashdata;
    this.lastMonthColor= "#fff";
    this.currentMonthColor = "#ffd32c";
    this.yearColor ="#fff"; 
    this.settingService.main_chart(this.user_id).subscribe(res => {
      this.main_chart = res;
      //console.log(this.main_chart.Lastmonth,this.main_chart.Currentmonth,this.main_chart.Year,'len')
      //this.Last_Mon_len = this.main_chart.Lastmonth.length;
     
      //console.log(this.Last_Mon_len)
      for (let i in this.main_chart.Currentmonth) {
        //this.data.push(Object.values(this.main_chart.Currentmonth[i]))
        this.currentMonthCat.push(i);
        let key:any = Object.values(this.main_chart.Currentmonth[i])
        console.log(key[0])
        this.data.push({
          name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          y: key[0].value,
          drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
        })
        this.drilldownData.push({
          name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          data: key[0].data
        })
      }
      console.log(this.drilldownData)
      // let YearData = this.main_chart.Totalyear[0];
      // let getyearData= [{
      //   name: 'Total Spent',
      //   y: YearData['value']
      // }]
      // let yearData = {name:'Year',colorByPoint: true,data:getyearData, color:'#ffd32c'}
      // this.values.push(yearData)

      let hashdata={name:'Current Month',colorByPoint: true,data:this.data, color:'#ffd32c'};
        
      this.values.push(hashdata)
      
      this.mainChart();
    })


    
    this.settingService.view_expenses_cal(this.user_id).subscribe(res =>{
      this.expense_val = res;
      console.log(Math.round(this.expense_val.MonthProjection));
    });
    
    

    this.profile_details=JSON.parse(localStorage.getItem("details"));
    if(this.profile_details!= undefined){
    console.log(this.profile_details)
    this.logoinitial=this.profile_details.name.charAt(0);
    this.profile_pic=this.environmentUrl+this.profile_details.profile_pic;
    if(this.profile_details.profile_pic==null){
      this.profile_pic=null;  
    }
    this.user_name=this.profile_details.name;
    }
  }

  mainChart(){
    console.log(this.values)
      var myChart = Highcharts.chart('expense_chart', {
        chart: {
              type: 'column', //areaspline
              zoomType: 'xy',
              panning: true,
              panKey: 'shift'
              // scrollablePlotArea: {
              //     minWidth: 600
              // }
          },
          title: {
            text: null
          },
        credits: {
              enabled: false
        },
        legend:{
              enabled:false
        },
        plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true
              }
          }
        },
        tooltip: {
              crosshairs: true,
              shared: true,
              headerFormat:  '<span style="font-size:11px"><b>{series.name}</b> </span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} Rs</b><br/>'
        }, 
        xAxis: {
           type: 'category'
           //categories: this.currentMonthCat
        },
        // tooltip: {
        //       crosshairs: true,
        //       shared: true
        //   },
        yAxis: {
          title: {
            text: 'Rupees'
          }
          // labels: {
          //   format: '{value}'
          // }
        },
        series: this.values,
        drilldown: {
           series:this.drilldownData
        },
        lang: {
            noData: "No data found"
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        } 
        // responsive: {
        //       rules: [{
        //           condition: {
        //               maxWidth: 500
        //           },
        //           chartOptions: {
        //               legend: {
        //                   align: 'center',
        //                   verticalAlign: 'bottom',
        //                   layout: 'horizontal'
        //               }
        //           }
        //       }]
        //   }
      });

      // Highcharts.chart('expense_chart', {
      //   chart: {
      //    type: 'column'
      //   },
      //   title: {
      //    text: 'Browser market shares. January, 2015 to May, 2015'
      //   },
      //   subtitle: {
      //    text: 'Click the columns to view versions. Source: netmarketshare.com.'
      //   },
      //   xAxis: {
      //    type: 'category'
      //   },
      //   yAxis: {
      //    title: {
      //     text: 'Total percent market share'
      //    }
     
      //   },
      //   legend: {
      //    enabled: false
      //   },
      //   plotOptions: {
      //    series: {
      //     borderWidth: 0,
      //     dataLabels: {
      //      enabled: true,
      //      format: '{point.y:.1f}%'
      //     }
      //    }
      //   },
     
      //   tooltip: {
      //    headerFormat: '{series.name}',
      //    pointFormat: '{point.name}: {point.y:.2f}% of total'
      //   },
     
      //   series: [{
      //    name: 'Brands',
      //    colorByPoint: true,
      //    data: [{
      //     name: 'Microsoft Internet Explorer',
      //     y: 56.33,
      //     drilldown: 'Microsoft Internet Explorer'
      //    }, {
      //     name: 'Chrome',
      //     y: 24.03,
      //     drilldown: 'Chrome'
      //    }, {
      //     name: 'Firefox',
      //     y: 10.38,
      //     drilldown: 'Firefox'
      //    }, {
      //     name: 'Safari',
      //     y: 4.77,
      //     drilldown: 'Safari'
      //    }, {
      //     name: 'Opera',
      //     y: 0.91,
      //     drilldown: 'Opera'
      //    }, {
      //     name: 'Proprietary or Undetectable',
      //     y: 0.2,
      //     drilldown: null
      //    }]
      //   }],
      //   drilldown: {
      //    series: [{
      //     name: 'Microsoft Internet Explorer',
      //     id: 'Microsoft Internet Explorer',
      //     data: [
      //      [
      //       'v11.0',
      //       24.13
      //      ],
      //      [
      //       'v8.0',
      //       17.2
      //      ],
      //      [
      //       'v9.0',
      //       8.11
      //      ],
      //      [
      //       'v10.0',
      //       5.33
      //      ],
      //      [
      //       'v6.0',
      //       1.06
      //      ],
      //      [
      //       'v7.0',
      //       0.5
      //      ]
      //     ]
      //    }, {
      //     name: 'Chrome',
      //     id: 'Chrome',
      //     data: [
      //      [
      //       'v40.0',
      //       5
      //      ],
      //      [
      //       'v41.0',
      //       4.32
      //      ],
      //      [
      //       'v42.0',
      //       3.68
      //      ],
      //      [
      //       'v39.0',
      //       2.96
      //      ],
      //      [
      //       'v36.0',
      //       2.53
      //      ],
      //      [
      //       'v43.0',
      //       1.45
      //      ],
      //      [
      //       'v31.0',
      //       1.24
      //      ],
      //      [
      //       'v35.0',
      //       0.85
      //      ],
      //      [
      //       'v38.0',
      //       0.6
      //      ],
      //      [
      //       'v32.0',
      //       0.55
      //      ],
      //      [
      //       'v37.0',
      //       0.38
      //      ],
      //      [
      //       'v33.0',
      //       0.19
      //      ],
      //      [
      //       'v34.0',
      //       0.14
      //      ],
      //      [
      //       'v30.0',
      //       0.14
      //      ]
      //     ]
      //    }, {
      //     name: 'Firefox',
      //     id: 'Firefox',
      //     data: [
      //      [
      //       'v35',
      //       2.76
      //      ],
      //      [
      //       'v36',
      //       2.32
      //      ],
      //      [
      //       'v37',
      //       2.31
      //      ],
      //      [
      //       'v34',
      //       1.27
      //      ],
      //      [
      //       'v38',
      //       1.02
      //      ],
      //      [
      //       'v31',
      //       0.33
      //      ],
      //      [
      //       'v33',
      //       0.22
      //      ],
      //      [
      //       'v32',
      //       0.15
      //      ]
      //     ]
      //    }, {
      //     name: 'Safari',
      //     id: 'Safari',
      //     data: [
      //      [
      //       'v8.0',
      //       2.56
      //      ],
      //      [
      //       'v7.1',
      //       0.77
      //      ],
      //      [
      //       'v5.1',
      //       0.42
      //      ],
      //      [
      //       'v5.0',
      //       0.3
      //      ],
      //      [
      //       'v6.1',
      //       0.29
      //      ],
      //      [
      //       'v7.0',
      //       0.26
      //      ],
      //      [
      //       'v6.2',
      //       0.17
      //      ]
      //     ]
      //    }, {
      //     name: 'Opera',
      //     id: 'Opera',
      //     data: [
      //      [
      //       'v12.x',
      //       0.34
      //      ],
      //      [
      //       'v28',
      //       0.24
      //      ],
      //      [
      //       'v27',
      //       0.17
      //      ],
      //      [
      //       'v29',
      //       0.16
      //      ]
      //     ]
      //    }]
      //   }
      //  });

  }
cardClick(val){

    var hashdata={};
    this.data=[];
    this.currentMonthCat=[];
    this.values=[];
    
  if (val == 'LM') {
    this.lastMonthColor = "#0e9bff";
    this.currentMonthColor = "#fff";
    this.yearColor ="#fff";
    
    // for (var i = 0; i < this.main_chart.Lastmonth.length; i++) {
    //   this.data.push(Number(this.main_chart.Lastmonth[i].value))
    //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Lastmonth[i].event_datetime, 'MMM dd'));
    // }
    for (let i in this.main_chart.Lastmonth) {
      this.data.push(Object.values(this.main_chart.Lastmonth[i]))
      this.currentMonthCat.push(i);
    }
    hashdata={name:'Last Month', colorByPoint: true, data:this.data, color:'#0e9bff'}
    this.values.push(hashdata)
    this.mainChart();

  }else if (val == 'CM') {
    this.currentMonthColor = "#ffd32c";

    this.lastMonthColor = "#fff";
    this.yearColor ="#fff";
    
    // for (var i = 0; i < this.main_chart.Currentmonth.length; i++) {
    //   this.data.push(Number(this.main_chart.Currentmonth[i].value))
    //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Currentmonth[i].event_datetime, 'MMM dd'));
    // } 
    for (let i in this.main_chart.Currentmonth) {
      //this.data.push(Object.values(this.main_chart.Currentmonth[i]))
      this.currentMonthCat.push(i);
      let key:any = Object.values(this.main_chart.Currentmonth[i])
        console.log(key[0])
        this.data.push({
          name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          y: key[0].value,
          drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
        })
        this.drilldownData.push({
          id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
          data: key[0].data
        })
    }

    // let YearData = this.main_chart.Totalyear[0];
    // let getyearData= [{
    //   name: 'Total Spent',
    //   y: YearData['value']
    // }]
    // let yearData = {name:'Year',colorByPoint: true,data:getyearData, color:'#ffd32c'}
    // this.values.push(yearData)

    
    hashdata={name:'Current Month', colorByPoint: true, data:this.data, color:'#ffd32c'};
    this.values.push(hashdata)
    this.mainChart();

  }else if (val == 'Year') {
    this.yearColor = "#c7a254";

    this.lastMonthColor = "#fff";
    this.currentMonthColor = "#fff";


    // for (var i = 0; i < this.main_chart.Year.length; i++) {
    //   this.data.push(Number(this.main_chart.Year[i].value))
    //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Year[i].event_datetime, 'MMM dd'));
    // }
    for (let i in this.main_chart.Year) {
      console.log(Object.keys(this.main_chart.Year[i]))
      //this.data.push(Object.values(this.main_chart.Year[i]))
      this.currentMonthCat.push(i);
      let key:any = Object.values(this.main_chart.Year[i])
        console.log(key[0])
        this.data.push({
          name: key[0].event_datetime,
          y: key[0].value,
          drilldown: key[0].event_datetime
        })
        this.drilldownData.push({
          id: key[0].event_datetime,
          name: key[0].event_datetime,
          data: key[0].data
        })
    }
    hashdata={name:'Year', colorByPoint: true, data:this.data, color:'#c7a254'}
    this.values.push(hashdata)
    this.mainChart(); 
  }
  // // console.log(this.values) 
  // this.ngOnInit();  
}

ionViewWillLeave() {
  this.statusBar.backgroundColorByHexString('#483df6');
  this.tabBar.classList.add("tab-selected");
}
}
