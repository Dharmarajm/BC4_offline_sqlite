import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController,ToastController,IonInfiniteScroll } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
//import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-health-diary',
  templateUrl: './health-diary.page.html',
  styleUrls: ['./health-diary.page.scss'],
})
export class HealthDiaryPage implements OnInit {
  health_records: any[] = [];
  health_scroll:any[]=[];
  tabBar: any;
  status: boolean = false;
  healthDiaryPage:number = 1;
  healthDiaryPage_offset:number = 0;
  environmentUrl:any;
  data_details:any[]=[];
  @ViewChild(IonInfiniteScroll,{ static: true }) infiniteScroll: IonInfiniteScroll;

  constructor(private toast: Toast,private streamingMedia: StreamingMedia,public toastController: ToastController, private statusBar: StatusBar, private router: Router, public settingService: settingsService, public alertController: AlertController,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.environmentUrl=environment.ImageUrl
    console.log("2019-06-26T04:22:22.534Z".toString())
    //this.datePipe.transform("2019-06-26T04:22:22.534Z", 'yyyy-MM-dd')
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ff68ab');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    // this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
    //   let data:any = res['event_list']
    //   this.data_details=res['event_list'];     
    //   this.groupBy(data)
    //   this.status = true;
    // })

    this.healthDiaryPage=1;
    this.healthDiaryPage_offset=0;
    this.databaseSummary.getAllEvents('health_diary','New',this.healthDiaryPage_offset).then(res=>{
      let data:any = res['event_list']
      this.data_details=res['event_list'];     
      this.groupBy(data)
      this.status = true;
    }).catch(err=>{console.log(err)})
  }

  groupBy(data){

      let records:any[]=data.map(item => ({
           id: item.id,
           event_id: item.event_id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_options: item.event_options,
           event_name: item.event_name,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
      }));

      let value = []
      const example = from(records).pipe(
        groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
        mergeMap(group => group.pipe(toArray()))
      ).subscribe(val => {
        if(val){
            let ff = { "created_at":val[0].created_at,"events" :val }
            value.push(ff);
        }
      })
      this.health_records=value;
      console.log(this.health_records,'health')
  }

  onSearchChange(event) {
    let search = event.detail.value;
    
    // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
    //   let data:any = res['event_list'];
    //   this.data_details=res['event_list'];    
    //   this.groupBy(data)
    // })
     this.healthDiaryPage=1;
     this.healthDiaryPage_offset=0;
     this.databaseSummary.getAllEventsSearchList('health_diary',search,'New',this.healthDiaryPage_offset).then(res=>{
        let data:any = res['event_list'];
        this.data_details=res['event_list'];    
        this.groupBy(data)
     }).catch(err=>{console.log(err)})
  }

  healthRecord() {
    this.router.navigate(['/self-care-tabs/tabs/tab1/health-diary/health-diary-record'])
  }

  onCancel(event) {
    console.log(event);
  }

  async deleteEvent(id,show) {
    const alert = await this.alertController.create({
      header: 'Health Dairy',
      message: 'Are you sure want to delete'+' '+show+'?',
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
  
  playHealthRecord(data){
    console.log(data)
    let navParams:NavigationExtras = {
      queryParams: {
        //value:JSON.stringify(record),
        current:JSON.stringify(data)
      }
    }; 
    this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'],navParams)
  }
  

  // playHealthRecord(record,data,index){
  //   console.log(record,data['events'][0]['event_assets'][0]['url']);
  //   let url=this.environmentUrl+data['events'][0]['event_assets'][0]['url'];
  //   console.log(url);

  //   var options: StreamingAudioOptions = {
  //      bgColor: "#000000",
  //      bgImage: "www/assets/img/play.png",
  //      bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
  //      initFullscreen: true, // true is default. iOS only.
  //      keepAwake: true, // prevents device from sleeping. true is default. Android only.
  //      successCallback: function() {
  //        console.log("Player closed without error.");
  //      },
  //      errorCallback: function(errMsg) {
  //        console.log("Error! " + errMsg);
  //      }
  //    }; 

  //   this.streamingMedia.playAudio(url, options);
  //  }

   stop(){
      this.streamingMedia.stopAudio();
   }
  
   pause(){
    this.streamingMedia.pauseAudio();
   }

   resume(){
    this.streamingMedia.resumeAudio();
   }

    loadData(event) {
     setTimeout(() => {
      console.log('Done');
      this.healthDiaryPage+=1;
      this.healthDiaryPage_offset=this.healthDiaryPage*10-10;
      // this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
      //    let data:any = res['event_list'];
      //    let concat=this.data_details.concat(data);
      //     this.health_scroll=concat.map(item => ({
      //      id:item.id,
      //      event_id: item.event_id,
      //      created_at: item.created_at,
      //      description: item.description,
      //      event_assets: item.event_assets,
      //      event_options: item.event_options,
      //      event_name: item.event_name,
      //      value: item.value,
      //      event_type: item.event_type,
      //      user_id: item.user_id,
      //      playing: false,
      //      progress: 0
      //     }));
      //     let value = []
      //     const example = from(this.health_scroll).pipe(
      //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //       console.log(val)
      //       if(val){
      //           let ff: any = { "created_at":val[0].created_at,"events" :val }
      //           value.push(ff);
      //       }
      //     })
      //     this.health_scroll=value;
          
      //     this.health_records=this.health_scroll;
      //     console.log(this.health_scroll)
      //     console.log(this.health_records)
      //     event.target.complete();
      //     if (this.healthDiaryPage *10 !=this.health_records.length){
      //        event.target.disabled = true;
      //     }
      // },error=>{
      //    event.target.disabled = true;
      // })

      let data:any[]=[];
      this.databaseSummary.getAllEvents('health_diary','New',this.healthDiaryPage_offset).then(async(res)=>{
          data = res['event_list'];
          let concat=this.data_details.concat(data);
          this.health_scroll=concat.map(item => ({
           id:item.id,
           event_id: item.event_id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_options: item.event_options,
           event_name: item.event_name,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
          }));
          let value = []
          const example = from(this.health_scroll).pipe(
            groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff: any = { "created_at":val[0].created_at,"events" :val }
                value.push(ff);
            }
          })
          this.health_scroll=value;
          
          this.health_records=this.health_scroll;
          console.log(this.health_scroll)
          console.log(this.health_records)
          event.target.complete();
          if (this.healthDiaryPage *10 !=this.health_records.length){
             event.target.disabled = true;
          }
        },error=>{
         event.target.disabled = true;
        })  
     }, 500);
    }
   
   toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
   }

  
  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  ionViewWillLeave() {
    this.tabBar.classList.add("tab-selected");
    this.statusBar.backgroundColorByHexString('#483df6');
  }
}
