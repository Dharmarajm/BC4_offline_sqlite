import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { ToastController,AlertController } from '@ionic/angular';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
@Component({
  selector: 'app-cgreports',
  templateUrl: './cgreports.page.html',
  styleUrls: ['./cgreports.page.scss'],
})
export class CgreportsPage implements OnInit {
  
  tab_details: any;
  details: any;
  report_page:number=1;
  report_details:any[]=[];
  tabBar: any;
  report_scroll:any[];
  loader:boolean;
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  environmentUrl:any;
  data_details:any[]=[];
  report_page_offset:number=0;

  constructor(private toast:Toast,public alertController:AlertController,public toastController: ToastController,private router: Router, private statusBar: StatusBar,public settingService: careGiverService,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) { 
    this.environmentUrl=environment.ImageUrl;
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.loader=true;
    this.statusBar.backgroundColorByHexString('#ea4e4e');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.report_page=1; 
    this.databaseSummary.getAllEvents('report','New',this.report_page_offset).then(res=>{
      let data:any = res['event_list'];
      this.data_details=res['event_list'];
      this.groupBy(data);
    }).catch(err=>{console.log(err)})
        
    //     this.profile_details=JSON.parse(localStorage.getItem("details"));
    //     if(this.profile_details!= undefined){
    //     console.log(this.profile_details)
    //     this.logoinitial=this.profile_details.name.charAt(0);
    //     this.profile_pic=this.environmentUrl+this.profile_details.profile_pic;
    //     if(this.profile_details.profile_pic==null){
    //       this.profile_pic=null;  
    //     }
    //     this.user_name=this.profile_details.name;
    //     }
    //  }); 
  }
  
  groupBy(data){

      let records:any[]=data.map(item => ({
           id:item.id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
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
  }

  viewReport(view){
    if(this.report_details.length != 0){
     let navigationExtras: NavigationExtras = {
       queryParams: {
         viewReport: JSON.stringify(view)
       }
     };
     this.router.navigate(['care-giver-tabs/tabsc/tab1c/cg-reports/cg-view-report'], navigationExtras)
    }
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
    //   this.settingService.commonDateEventList("report",this.report_page).subscribe(res => {
    //      let data:any = res['event_list'];
    //      let concat=this.data_details.concat(data);
    //       this.report_scroll=concat.map(item => ({
    //        id:item.id,
    //        created_at: item.created_at,
    //        description: item.description,
    //        event_assets: item.event_assets,
    //        event_name: item.event_name,
    //        event_datetime: item.event_datetime,
    //        event_category: item.event_category,
    //        value: item.value,
    //        event_type: item.event_type,
    //        user_id: item.user_id,
    //        playing: false,
    //        progress: 0
    //       }));
    //       let value = []
    //       const example = from(this.report_scroll).pipe(
    //         groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
    //         mergeMap(group => group.pipe(toArray()))
    //       ).subscribe(val => {
    //         console.log(val)
    //         if(val){
    //             let ff = { "created_at":val[0].event_datetime,"events" :val }
    //             value.push(ff);
    //         }
    //       })
    //       this.report_scroll=value;
    //       //this.report_scroll.map(item => this.report_details.push(item));
    //       this.report_details=this.report_scroll;
    //       event.target.complete();
    //       if (this.report_page *10 !=this.report_details.length){
    //          event.target.disabled = true;
    //       }
    //   },error=>{
    //      event.target.disabled = true;
    //   })
    //  }, 500);
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
