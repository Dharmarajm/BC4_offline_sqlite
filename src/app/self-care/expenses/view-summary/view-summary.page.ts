import { Component } from '@angular/core';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {CalendarModal, CalendarModalOptions,  CalendarResult } from 'ion2-calendar';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';


@Component({
  selector: 'app-view-summary',
  templateUrl: './view-summary.page.html',
  styleUrls: ['../expenses.page.scss']
})
export class viewSummaryPage {
  view_all_expen:any;
  expen_key:any[]=[];
  user_id:any;
  tabBar: any;
  status: any = -1;
  end_date1:any;
  from_date1:any;
  loader:boolean=true;
  getChartValue:any[]=[];
  constructor(private toast: Toast,public modalCtrl: ModalController, public toastController: ToastController,public alertController:AlertController,public expen_view: settingsService, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
   }

  ngOnInit() {           
  }

  ionViewWillEnter() {
      this.user_id = localStorage.getItem("user_id");
      this.from_date1 = new Date();
      this.from_date1.setDate(this.from_date1.getDate() - 30);
      this.end_date1 = new Date();
      
      // this.expen_view.view_expenses(this.user_id).subscribe(res =>{
      //   this.view_all_expen = res;
      //   this.from_date1= this.view_all_expen.from_date 
      //   this.end_date1= this.view_all_expen.end_date
      //   console.log(this.view_all_expen,'res')  
      //   this.expen_key = Object.keys(this.view_all_expen.expense);
      //   this.getChartValue=this.expen_key.map(res=>{
      //     console.log(res)
      //     let chartType=res.toString();       
      //     const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
      //     return total
      //     });
      //     this.loader=false;
      //   console.log(this.getChartValue)
      //   console.log(this.expen_key);
      // })

      this.databaseSummary.ExpenseViewSummary(this.from_date1,this.end_date1,'expense','event_name','view_summary').then((res)=>{
        console.log(res)
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
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
  }

 async delete(id,event){
   console.log(id)
     const alert = await this.alertController.create({
      header: 'Expenses',
      message: 'Are you sure want to delete'+' '+event+' '+'Expenses'+'?',
      mode: 'md',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
          //  this.expen_view.event_view_delete(id).subscribe(res =>{      
          //     console.log(res)                                   
          //     this.presentToast("Record Deleted Successfully");  
          //     this.ionViewWillEnter();          
          //   }, error => {
          //     console.log(error)
          //   })

          this.database.deleteAnEvent(id).then(res=>{
            this.presentToast("Record Deleted Successfully");  
            this.ionViewWillEnter();          
          }).catch(err=>{console.log(err)})
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           
          }
        }
      ]
    });
    await alert.present();
  }

  
   async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  toggle(i: number){
    this.status = i === this.status ? -1 : i;
    console.log(this.status);
  }

  ionViewWillLeave(){
    this.tabBar.style.display = 'flex';
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
      console.log(from_date)
          this.from_date1=from_date
          this.end_date1=end_date
          console.log(this.from_date1)
          // this.expen_view.filterAmount(from_date,end_date,this.user_id).subscribe(res=>{
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
          //  })

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

}