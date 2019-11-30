import { Component } from '@angular/core';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {CalendarModal, CalendarModalOptions,  CalendarResult } from 'ion2-calendar';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-cg-expense-view-summary',
  templateUrl: './cg-expense-view-summary.page.html',
  styleUrls: ['../cgexpenses.page.scss']
})
export class CgExpenseviewSummaryPage {
  view_all_expen:any;
  expen_key:any[]=[];
  user_id:any;
  tabBar: any;
  status: any = -1;
  end_date1:any;
  from_date1:any;
  loader:boolean=true;
  getChartValue:any[]=[];
  constructor(private toast:Toast,public modalCtrl: ModalController, public toastController: ToastController,public alertController:AlertController,public service: careGiverService, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
   }

  ngOnInit() {           
  }

  ionViewWillEnter() {
    this.user_id = localStorage.getItem("user_id");
    this.from_date1 = new Date();
    this.from_date1.setDate(this.from_date1.getDate() - 30);
    this.end_date1 = new Date();
      // this.service.view_expenses(this.user_id).subscribe(res =>{
      // this.view_all_expen = res;
      // this.from_date1= this.view_all_expen.from_date 
      // this.end_date1= this.view_all_expen.end_date
      // console.log(this.view_all_expen,'res')  
      // this.expen_key = Object.keys(this.view_all_expen.expense);
      // this.getChartValue=this.expen_key.map(res=>{
      //   console.log(res)
      //   let chartType=res.toString();       
      //   const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
      //   return total
      //   });
      //   this.loader=false;
      //  console.log(this.getChartValue)
      //  console.log(this.expen_key);
      // })

      this.databaseSummary.ExpenseViewSummary(this.from_date1,this.end_date1,'expense','event_name','view_summary').then((res)=>{
        this.view_all_expen = res;
        this.from_date1= this.view_all_expen.from_date 
        this.end_date1= this.view_all_expen.end_date
        console.log(this.view_all_expen,'res')  
        this.expen_key = Object.keys(this.view_all_expen.expense);
        this.getChartValue=this.expen_key.map(res=>{
          console.log(res)
          let chartType=res.toString();       
          const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
          return total
          });
          this.loader=false;
        console.log(this.getChartValue)
        console.log(this.expen_key);
      })
      .catch(error=>{ console.log(error) });
      
    this.statusBar.backgroundColorByHexString('#ffd32c');
    this.tabBar = document.getElementById('myTabBar1');
    //this.tabBar.classList.remove("tab-selected");
    this.tabBar.style.display = 'none';
  }

  
   async presentToast(message: string) {
    this.toast.show(message, '4000', 'center').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  toggle(i: number){
    this.status = i === this.status ? -1 : i;
    console.log(this.status);
  }

  

   async openCalendar() {
  const options: CalendarModalOptions = {
    canBackwardsSelected:true,
    pickMode: 'range',
    color: 'danger',
    title: ''
  };

  const myCalendar = await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();

  const event: any = await myCalendar.onDidDismiss();
  const date = event.data;
  const from_date: CalendarResult = date.from.dateObj;
  const end_date: CalendarResult = date.to.dateObj;
      this.from_date1=from_date
      this.end_date1=end_date
      // this.service.filterAmount(from_date,end_date,this.user_id).subscribe(res=>{
      //   console.log(res)
      //   this.view_all_expen=res
      //   this.expen_key = Object.keys(this.view_all_expen.expense);
      //   this.getChartValue=this.expen_key.map(res=>{
      //   console.log(res)
      //   let chartType=res.toString();       
      //   const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
      //   return total  
      //   });
      //   console.log(this.getChartValue)
      //   console.log(this.expen_key);
    
      // })

      this.databaseSummary.ExpenseViewSummary(this.from_date1,this.end_date1,'expense','event_name','view_summary').then((res)=>{
        console.log(res)
        this.view_all_expen=res
        this.expen_key = Object.keys(this.view_all_expen.expense);
        this.getChartValue=this.expen_key.map(res=>{
        console.log(res)
        let chartType=res.toString();       
        const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
        return total  
        });
        console.log(this.getChartValue)
        console.log(this.expen_key);
      })
 
}

ionViewWillLeave(){
  this.statusBar.backgroundColorByHexString('#483df6');
  this.tabBar.style.display = 'flex';
 } 


}