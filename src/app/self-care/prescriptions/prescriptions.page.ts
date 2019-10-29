import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { settingsService } from '../self-common-service/settings/settings.service';
import { ToastController,AlertController } from '@ionic/angular';
import { of,from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { Platform } from '@ionic/angular';
import { KeyValue } from '@angular/common';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.page.html',
  styleUrls: ['./prescriptions.page.scss'],
})
export class PrescriptionsPage implements OnInit {
  tab_details: any;
  details: any;
  pres_page:number=1;
  pres_page_offset:number = 0;
  prescribe_details:any[]=[];
  tabBar: any;
  prescribe_scroll:any[]=[];
  data_details:any[]=[];
  loader:boolean;
  public unsubscribeBackEvent: any;
  constructor(private toast: Toast,public platform:Platform,public alertController:AlertController,public toastController: ToastController,private router: Router, private statusBar: StatusBar,public settingService: settingsService,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) { 
   // this.initializeBackButtonCustomHandler();
  }

  ngOnInit() {
  }
   
  ionViewWillEnter() {
    this.loader=true;
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.pres_page=1;
    this.pres_page_offset=0
    // this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {      
    //     let data:any = res['event_list'];
    //     this.data_details=res['event_list'];
    //     this.groupBy(data);
        
    //  });
     
     this.databaseSummary.getAllEvents('prescription','New',this.pres_page_offset).then(res=>{
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
           event_datetime:item.event_datetime,
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
      this.prescribe_details=value;
      this.loader=false;
  }
   
  ionViewWillLeave() {
    //this.unsubscribeBackEvent && this.unsubscribeBackEvent();
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }
 
 addPrescription(){
  
  this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions/add-prescription']);
  }

  keyDescOrder(a: KeyValue<number,string>, b: KeyValue<number,string>): number {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  viewPrescription(view){
    if(this.prescribe_details.length != 0){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          viewprescription: JSON.stringify(view)
        }
      };
      this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions/view-prescription'], navigationExtras)
    }
  }

async deletePrescription(id){
  console.log(id)
 const alert = await this.alertController.create({
      header: 'Prescription',
      message: 'Are you sure want to delete Prescription?',
      mode: 'md',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            // this.settingService.commonDeleteEvent(id).subscribe(res => {
            //   console.log(res)
            //   this.presentToast("Record Deleted Successfully");
            //   this.ionViewWillEnter();
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
    this.pres_page = 1;
    this.pres_page_offset = 0;
    // this.settingService.commonDateEventSearchList('prescription',search).subscribe(res=>{
    //   console.log(res)
    //  let data:any = res['event_list'];
    //  this.data_details = res['event_list'];
    //  this.groupBy(data)

    // }, error=>{
    //      this.presentToast("Server slow, Please try again")
    // })
    this.databaseSummary.getAllEventsSearchList('prescription',search,'New',this.pres_page_offset).then(res=>{
      let data:any = res['event_list'];
      this.data_details = res['event_list'];
      this.groupBy(data)
    }).catch(err=>{console.log(err)})
  }

  loadData(event) {
     setTimeout(() => {
      console.log('Done');
      this.pres_page+=1;
      this.pres_page_offset=this.pres_page*10-10;
      // this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {
      //    let data:any[] = res['event_list'];
      //    let concat=this.data_details.concat(data);
      //     this.prescribe_scroll=concat.map(item => ({
      //      id:item.id,
      //      created_at: item.created_at,
      //      description: item.description,
      //      event_assets: item.event_assets,
      //      event_name: item.event_name,
      //      event_datetime:item.event_datetime,
      //      value: item.value,
      //      event_type: item.event_type,
      //      user_id: item.user_id,
      //      playing: false,
      //      progress: 0
      //     }));
      //     let value:any = [];
      //     const example = from(this.prescribe_scroll).pipe(
      //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //       console.log(val)
      //       if(val){
      //           let ff: any = {}
      //           ff["created_at"] = val[0].event_datetime 
      //           ff["events"] = val
      //           value.push(ff);
      //       }
      //     })
      //     this.prescribe_scroll=value;
      //     this.prescribe_details=this.prescribe_scroll;
      //     event.target.complete();
      //     if (this.pres_page *10 !=this.prescribe_details.length){
      //        event.target.disabled = true;
      //     }
      // },error=>{
      //    event.target.disabled = true;
      // })
      let data:any[]=[];
      this.databaseSummary.getAllEvents('prescription','New',this.pres_page_offset).then(async(res)=>{
         data = res['event_list'];
         let concat = await this.data_details.concat(data);
          this.prescribe_scroll = await concat.map(item => ({
           id:item.id,
           event_id: item.event_id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_options: item.event_options,
           event_name: item.event_name,
           event_datetime:item.event_datetime,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
          }));
          let value:any = [];
          const example = from(this.prescribe_scroll).pipe(
            groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff: any = {}
                ff["created_at"] = val[0].event_datetime 
                ff["events"] = val
                value.push(ff);
            }
          })
          this.prescribe_scroll=value;
          this.prescribe_details=this.prescribe_scroll;
          event.target.complete();
          if (this.pres_page *10 !=this.prescribe_details.length){
             event.target.disabled = true;
          }
      }).catch(err=>{console.log(err)})  
     }, 500);
    }
   

}
