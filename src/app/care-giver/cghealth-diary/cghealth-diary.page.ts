import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController,ToastController,IonInfiniteScroll } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
//import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-cghealth-diary',
  templateUrl: './cghealth-diary.page.html',
  styleUrls: ['./cghealth-diary.page.scss'],
})
export class CghealthDiaryPage implements OnInit {
  
  health_records: any[] = [];
  health_scroll:any[]=[];
  tabBar: any;
  status: boolean = false;
  healthDiaryPage:number = 1;
  environmentUrl:any;
  profile_details:any; 
  profile_pic:any;
  user_name:any;
  logoinitial:any;
  data_details:any[]=[];
  @ViewChild(IonInfiniteScroll,{ static: true }) infiniteScroll: IonInfiniteScroll;

  constructor(private toast: Toast,private streamingMedia: StreamingMedia,public toastController: ToastController, private statusBar: StatusBar, private router: Router, public settingService: careGiverService, public alertController: AlertController) { 
    this.environmentUrl=environment.ImageUrl;
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ff68ab');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.healthDiaryPage = 1;
    this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
      let data:any = res['event_list']
      this.data_details=res['event_list'];    
      this.groupBy(data)

      this.status = true;
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
    })
  }

  groupBy(data){

      let records:any[]=data.map(item => ({
           id:item.id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
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
        console.log(val)
        if(val){
            let ff = { "created_at":val[0].created_at,"events" :val }
            value.push(ff);
        }
      })
      this.health_records=value;
  }

  onSearchChange(event) {
    console.log(event)
    let search = event.detail.value;
    this.healthDiaryPage=1;
    this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
      let data:any = res['event_list'];
      this.data_details=res['event_list']; 
      this.groupBy(data)
    })
  }

  onCancel(event) {
    console.log(event);
  }

 
  
  playHealthRecord(record,data,index){
    console.log(record,data,index)
    let navParams:NavigationExtras = {
      queryParams: {
        value:JSON.stringify(record),
        current:JSON.stringify(data)
      }
    }; 
    this.router.navigate(['care-giver-tabs/tabsc/tab1c/common-care-giver-play'],navParams)
  }
  

  // playHealthRecord(record,data,index){
  //   console.log(record,data['events'][0]['event_assets'][0]['url']);
  //    let url=this.environmentUrl+data['events'][0]['event_assets'][0]['url'];
  //    console.log(url);

  //    var options: StreamingAudioOptions = {
  //       bgColor: "#000000",
  //       bgImage: "www/assets/img/play.png",
  //       bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
  //       initFullscreen: true, // true is default. iOS only.
  //       keepAwake: true, // prevents device from sleeping. true is default. Android only.
  //       successCallback: function() {
  //         console.log("Player closed without error.");
  //       },
  //       errorCallback: function(errMsg) {
  //         console.log("Error! " + errMsg);
  //       }
  //     }; 

  //    this.streamingMedia.playAudio(url, options);
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
      this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
         let data:any = res['event_list'];
         let concat=this.data_details.concat(data);
          this.health_scroll=concat.map(item => ({
           id:item.id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
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
          //this.health_scroll.map(item => this.health_records.push(item));
          console.log(this.health_scroll)
          console.log(this.health_records)
          this.health_records=this.health_scroll;
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
