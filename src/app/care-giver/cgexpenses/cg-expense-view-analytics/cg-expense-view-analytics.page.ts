import { Component } from '@angular/core';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import * as Highcharts from 'highcharts';
import { DatePipe } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { CgExpenseFiltersPage } from '../cg-expense-filters/cg-expense-filters.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-cg-expense-view-analytics',
  templateUrl: './cg-expense-view-analytics.page.html',
  styleUrls: ['../cgexpenses.page.scss']
})
export class CgExpenseAnalyticsPage {
  chartres:any;
  chart_keys: any[]=[];
  user_id:any;
  tabBar: any;
  yaxis_total:any;
  loader:boolean=false;
  firstDay:any;
  date:any;
  constructor(private toast: Toast,public modalController:ModalController, public service: careGiverService, public datepipe:DatePipe, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) { 
    this.filterModal();
  }

  ngOnInit() {
  }

ionViewWillEnter() {
      // this.date = new Date();
      // this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
      // this.loader=true;
      this.statusBar.backgroundColorByHexString('#ffd32c');
      this.tabBar = document.getElementById('myTabBar1')
      //this.tabBar.classList.remove("tab-selected");
      this.tabBar.style.display = 'none';
      this.user_id = localStorage.getItem("user_id");
      // this.service.chartrepeat(this.user_id).subscribe(res=>{          
      //  this.chartres =res;
      //  console.log(this.chartres,'chart')
      //  this.chart_keys = Object.keys(this.chartres);
      //  setTimeout(() => {
      //   this.loader=false;
      //  },1500)
      //  setTimeout(() => {
      //   for(let i of this.chart_keys){
      //     this.charts(i,this.chartres[i]);
      //   }        
      //  }, 2000); 
      // });
}
datetoast(){
  this.presentToast('Use filter to get specific data')   
}
async presentToast(message: string) {
  this.toast.show(message, '4000', 'center').subscribe(
    toast => { 
      console.log(toast); 
    });
}
charts(name: string,value){
  console.log(value)
  let xaxis_value = [];
  //console.log(xaxis_value);
  let yaxis_value = [];
 // console.log(yaxis_value);
  from(value).pipe(pluck("event_datetime")).subscribe(val => xaxis_value.push(this.datepipe.transform(val, 'MMM dd')))
  from(value).pipe(pluck("value")).subscribe(val => yaxis_value.push([val]))
  this.yaxis_total=[{
    name: name,
       data:yaxis_value,
       colorByPoint: true,
       color:'#ffd32c'
    }]
    Highcharts.chart(name,{
    chart: {
        type: 'column',
        zoomType: 'xy',
        renderTo: "container",
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: name
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
      pointFormat: '<span style="color:{point.color}">Total Spent</span>: <b>{point.y:.2f} Rs</b><br/>'
    }, 
    xAxis: {
        categories: xaxis_value
    },
    yAxis: {
      title: {
        text: 'Rupees'
      }
    },
      series:this.yaxis_total,
    credits: {
        enabled: false
    },
    legend: {
      enabled: false
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

    })
}


async filterModal(){
   const modal = await this.modalController.create({
          component: CgExpenseFiltersPage,
        });

    modal.onDidDismiss()
      .then((data) => {
        if(data['data'] != undefined){
          this.loader=true;
        data['event_type']='expense'
        // this.service.filterChart(data['data']).subscribe(res=>{         
        //       this.chartres =res;
        //       this.date=this.chartres.end_date;
        //       this.firstDay=this.chartres.from_date;
        //       this.chart_keys = Object.keys(this.chartres.expense); 
        //       console.log(this.chart_keys)
        //       setTimeout(() => {
        //        this.loader=false;
        //       },1500)
        //       setTimeout(() => {
        //        for(let i of this.chart_keys){         
        //          this.charts(i,this.chartres.expense[i]);
        //        }
               
        //       }, 2000); 
        // })

        this.databaseSummary.ExpenseViewSummary(data['from_date'],data['end_date'],'expense',data['event_name'],'view_analytics').then((res)=>{
          this.chartres =res;
          this.date=this.chartres.end_date;
          this.firstDay=this.chartres.from_date;
          this.chart_keys = Object.keys(this.chartres.expense); 
          console.log(this.chart_keys)
          setTimeout(() => {
            this.loader=false;
          },1500)
          setTimeout(() => {
            for(let i of this.chart_keys){         
              this.charts(i,this.chartres.expense[i]);
            }
            
          }, 2000); 
        })
      }
    });
        return await modal.present();
}

ionViewWillLeave(){
  this.statusBar.backgroundColorByHexString('#483df6');
  this.tabBar.style.display = 'flex';
 }

}