import { Component, OnInit } from '@angular/core';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import * as HighCharts from 'highcharts';
import { DatePipe } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../environments/environment';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

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

  constructor(public datepipe:DatePipe,private statusBar: StatusBar,public settingService: careGiverService,private databaseSummary: DataBaseSummaryProvider) { 
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

    // this.settingService.main_chart(this.user_id).subscribe(res => {
    //   this.main_chart = res;
      
    //   for (let i in this.main_chart.Currentmonth) {
        
    //     this.currentMonthCat.push(i);
    //     let key:any = Object.values(this.main_chart.Currentmonth[i])
        
    //     this.data.push({
    //       name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
    //       y: key[0].value,
    //       drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
    //     })
    //     this.drilldownData.push({
    //       name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
    //       id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
    //       data: key[0].data
    //     })
    //   }
    //   console.log(this.drilldownData)
      

    //   let hashdata={name:'Current Month',colorByPoint: true,data:this.data, color:'#ffd32c'};
        
    //   this.values.push(hashdata)
      
    //   this.mainChart();
    // })

    this.databaseSummary.expense_cals_chart().then(res=>{
      this.main_chart = res;
        console.log(this.Last_Mon_len)
        for (let i in this.main_chart.Currentmonth) {
          
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
  
        let hashdata={name:'Current Month',colorByPoint: true,data:this.data, color:'#ffd32c'};
          
        this.values.push(hashdata)
        
        this.mainChart();
    })


    this.databaseSummary.expenseCalculation().then(res=>{
      this.expense_val = res;
    })
    
    // this.settingService.view_expenses_cal(this.user_id).subscribe(res =>{
    //   this.expense_val = res;
    //   console.log(Math.round(this.expense_val.MonthProjection));
    // });
    
    

    this.profile_details=JSON.parse(localStorage.getItem("details"));
    if(this.profile_details!= undefined){
    console.log(this.profile_details)
    this.logoinitial=this.profile_details.name.charAt(0);
    this.profile_pic=this.profile_details.profile_pic;
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
              // crosshairs: true,
              // shared: true,
              headerFormat:  '<span style="font-size:11px"><b>{series.name}</b> </span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} Rs</b><br/>'
        }, 
        xAxis: {
           type: 'category'
        },
        
        yAxis: {
          title: {
            text: 'Rupees'
          }
         
        },
        series: this.values,
        drilldown: {
          drillUpButton: {            
            position: {
                verticalAlign: 'top',
                align: 'right',
                x: 0,
                y: -10,
            }
          },
           series:this.drilldownData
        },
        lang: {
            noData: "No data found",
            drillUpText: '<< Back',
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        } 
     
      });
       
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
