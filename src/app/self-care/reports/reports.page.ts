import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { settingsService } from '../self-common-service/settings/settings.service';
import { ToastController,AlertController } from '@ionic/angular';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
import { formatDate } from '@angular/common';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss']
})
export class ReportsPage implements OnInit {
  
  tab_details: any;
  details: any;
  report_page:number=1;
  report_page_offset:number=0;
  report_details:any[]=[];
  tabBar: any;
  report_scroll:any[];
  data_details:any[]=[];
  loader:boolean;
  constructor(private toast: Toast,public alertController:AlertController,public toastController: ToastController,private router: Router, private statusBar: StatusBar,public settingService: settingsService,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) { }

  ngOnInit() {
  }
  

  ionViewWillEnter() {
    this.loader=true;
    this.statusBar.backgroundColorByHexString('#ea4e4e');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.report_page=1; 
    this.report_page_offset=0;
    // this.settingService.commonDateEventList("report",this.report_page).subscribe(res => {
    //     let data:any = res['event_list']
    //     this.data_details=res['event_list']; 
    //      setInterval(() => {  
    //          this.loader=false;
    //        }, 1000);
    //     this.groupBy(data);
        
    //  }); 

    this.databaseSummary.getAllEvents('report','New',this.report_page_offset).then(res=>{
      let data:any = res['event_list'];
      this.data_details=res['event_list'];
      this.groupBy(data);
   }).catch(err=>{console.log(err)})
  }
  
  groupBy(data){

      let records:any[]=data.map(item => ({
           id:item.id,
           event_id: item.event_id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_options: item.event_options,
           event_name: item.event_name,
           event_datetime: item.event_datetime,
           event_category: item.event_category,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
      }));

      let value = []
      const example = from(records).pipe(
        groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
        mergeMap(group => group.pipe(toArray()))
      ).subscribe(val => {
        console.log(val)
        if(val){
            let ff = { "created_at":val[0].event_datetime,"events" :val }
            value.push(ff);
        }
      })
      this.report_details=value;
      this.loader=false;
  }

  addReport(){
  
   this.router.navigate(['self-care-tabs/tabs/tab1/reports/add-report']);
  }

  viewReport(view){
   if(this.report_details.length != 0){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        viewReport: JSON.stringify(view)
      }
    };
    this.router.navigate(['self-care-tabs/tabs/tab1/reports/view-report'], navigationExtras)
   }
  }

  async deleteReport(id){
   const alert = await this.alertController.create({
      header: 'Report',
      message: 'Are you sure want to delete report?',
      mode: 'md',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            // this.settingService.commonDeleteEvent(id).subscribe(res => {
            //   console.log(res)
            //   this.presentToast("Record Deleted Successfully");
            //   this.ionViewWillEnter();
            //   //this.health_records=res['event_list'];
            // }, error => {
            //   console.log(error)
            // })
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
            console.log('Confirm Cancel');
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

  SearchItem(event){
    let search:any=event.detail.value
    console.log(event);
    this.report_page=1; 
    this.report_page_offset=0;
    // this.settingService.commonDateEventSearchList('report',search).subscribe(res=>{
    //   let data:any = res['event_list'];
    //   this.data_details=res['event_list']; 
    //   this.groupBy(data);
    // }, error=>{
    //      this.presentToast("Server slow, Please try again")
    // })
    this.databaseSummary.getAllEventsSearchList('report',search,'New',this.report_page_offset).then(res=>{
      let data:any = res['event_list'];
      this.data_details = res['event_list'];
      this.groupBy(data)
    }).catch(err=>{console.log(err)})
  }

  loadData(event) {
     setTimeout(() => {
      console.log('Done');
      this.report_page+=1;
      this.report_page_offset=this.report_page*10-10;
      let data:any[]=[];
      // this.settingService.commonDateEventList("report",this.report_page).subscribe(res => {
      //    let data:any = res['event_list'];
      //    let concat=this.data_details.concat(data);
      //     this.report_scroll=concat.map(item => ({
      //      id:item.id,
      //      created_at: item.created_at,
      //      description: item.description,
      //      event_assets: item.event_assets,
      //      event_name: item.event_name,
      //      event_datetime: item.event_datetime,
      //      event_category: item.event_category,
      //      value: item.value,
      //      event_type: item.event_type,
      //      user_id: item.user_id,
      //      playing: false,
      //      progress: 0
      //     }));
      //     let value = []
      //     const example = from(this.report_scroll).pipe(
      //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //       console.log(val)
      //       if(val){
      //           let ff = { "created_at":val[0].event_datetime,"events" :val }
      //           value.push(ff);
      //       }
      //     })
      //     this.report_scroll=value;
      //     //this.report_scroll.map(item => this.report_details.push(item));
      //     this.report_details=this.report_scroll;
      //     event.target.complete();
      //     if (this.report_page *10 !=this.report_details.length){
      //        event.target.disabled = true;
      //     }
      // },error=>{
      //    event.target.disabled = true;
      // })

      this.databaseSummary.getAllEvents('report','New',this.report_page_offset).then(async(res)=>{
        let data:any = res['event_list'];
         let concat=this.data_details.concat(data);
          this.report_scroll=concat.map(item => ({
           id:item.id,
           event_id: item.event_id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_options: item.event_options,
           event_name: item.event_name,
           event_datetime: item.event_datetime,
           event_category: item.event_category,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
          }));
          let value = []
          const example = from(this.report_scroll).pipe(
            groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff = { "created_at":val[0].event_datetime,"events" :val }
                value.push(ff);
            }
          })
          this.report_scroll=value;
          
          this.report_details=this.report_scroll;
          event.target.complete();
          if (this.report_page *10 !=this.report_details.length){
             event.target.disabled = true;
          }
     }).catch(err=>{console.log(err)})
     }, 500);
    }


  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }
 
 
}
