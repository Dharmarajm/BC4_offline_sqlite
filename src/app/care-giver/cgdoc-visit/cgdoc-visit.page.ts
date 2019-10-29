import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController,ToastController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import {CalendarModal, CalendarModalOptions,  CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-cgdoc-visit',
  templateUrl: './cgdoc-visit.page.html',
  styleUrls: ['./cgdoc-visit.page.scss'],
})
export class CgdocVisitPage implements OnInit {
  
  selectedSegment:any="first";
  tabBar: any;
  diaryPage:number=1;
  doctorPage:number=1;
  diary_records:any[]=[];
  doctor_records:any[]=[];
  dairyInput:any;
  doctorInput:any;
  status: boolean = false;
  diary_scroll:any[]=[];
  doctor_scroll:any[]=[];
  environmentUrl:any;
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  data_doctor_details:any[]=[];
  data_diary_details:any[]=[];
  from_date1: any;
  end_date1: any;
  userId: any;
  constructor(private toast:Toast, public datepipe: DatePipe,public modalCtrl: ModalController,private streamingMedia: StreamingMedia,public toastController: ToastController, private statusBar: StatusBar, private router: Router, public settingService: careGiverService, public alertController: AlertController) {
    this.environmentUrl=environment.ImageUrl;
   }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.diaryPage=1;
    this.doctorPage=1;
    this.statusBar.backgroundColorByHexString('#5ee4a2');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.getDiaryRecords();
    this.getDoctorRecords(); 
    
    
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

  getDiaryRecords(){
    this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
      let data:any = res['event_list']
      this.data_diary_details=res['event_list']; 
      this.groupByDiary(data)
      this.status = true;
    })
  }

  getDoctorRecords(){
    this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
      let data:any = res['event_list']
      this.data_doctor_details=res['event_list'];
      this.groupByDoctor(data)
      this.status = true;
    })
  }

  groupByDiary(data){

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
      this.diary_records=value;
  }

  groupByDoctor(data){

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
      this.doctor_records=value;
  }
 

  onSegmentChanged(event){

  }

  onDiarySearchChange(event){
    console.log(event)
    let search = event.detail.value;
    this.diaryPage=1;
    this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
      let data:any = res['event_list']
      this.data_diary_details=res['event_list'];
      this.groupByDiary(data)
    })
  }

  onDiaryCancel(event){

  }

  onDoctorSearchChange(event){
    console.log(event)
    let search = event.detail.value;
    this.doctorPage=1;
    this.settingService.commonEventSearchList("doc_visit",search).subscribe(res => {
      let data:any = res['event_list']
      this.data_doctor_details=res['event_list'];
      this.groupByDoctor(data)
    })
  }

  onDoctorCancel(event){

  }

  playDocRecord(record,data,index){
    console.log(record,data,index)
    let navParams:NavigationExtras = {
      queryParams: {
        value:JSON.stringify(record),
        current:JSON.stringify(data)
      }
    }; 
    this.router.navigate(['care-giver-tabs/tabsc/tab1c/common-care-giver-play'],navParams)
  }

  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      canBackwardsSelected:true,
      pickMode: 'range',
      color: 'dark',
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
        this.from_date1=this.datepipe.transform(from_date, 'dd-MMM-yyyy')
        this.end_date1=this.datepipe.transform(end_date, 'dd-MMM-yyyy')
        console.log(this.from_date1)
        this.userId=localStorage.getItem("user_id")
        console.log(this.userId)
        let filter_data={ 
          "user_id":this.userId,
          "from_date":this.from_date1,
          "end_date":this.end_date1,
          "event_type":'health_diary',
          "page":1,
          "per_page":10,
          "sort":"created_at"
          }
          console.log(filter_data)
          console.log(this.userId)
         this.settingService.record_filter(filter_data).subscribe(res=>{
          console.log(res)
          let data:any = res['diary_records']
          this.data_diary_details=res['diary_records'];
          this.groupByDiary(data);
         })
  }

  loadData1(event){
    setTimeout(() => {
      console.log('Done');
      this.diaryPage+=1;
      this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
         let data:any = res['event_list'];
         let concat=this.data_diary_details.concat(data);
          this.diary_scroll=concat.map(item => ({
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
          const example = from(this.diary_scroll).pipe(
            groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff = { "created_at":val[0].created_at,"events" :val }
                value.push(ff);
            }
          })
          this.diary_scroll=value;
          //this.diary_scroll.map(item => this.diary_records.push(item));
          this.diary_records=this.diary_scroll;
          event.target.complete();
          if (this.diaryPage *10 !=this.diary_records.length){
             event.target.disabled = true;
          }
      },error=>{
         event.target.disabled = true;
      })
     }, 500);
  }

  loadData2(event){
    setTimeout(() => {
      console.log('Done');
      this.doctorPage+=1;
      this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
         let data:any = res['event_list'];
         let concat=this.data_doctor_details.concat(data);
          this.doctor_scroll=concat.map(item => ({
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
          const example = from(this.doctor_scroll).pipe(
            groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff = { "created_at":val[0].created_at,"events" :val }
                value.push(ff);
            }
          })
          this.doctor_scroll=value;
          //this.doctor_scroll.map(item => this.doctor_records.push(item));
          this.doctor_records=this.doctor_scroll;
          event.target.complete();
          if (this.doctorPage *10 !=this.doctor_records.length){
             event.target.disabled = true;
          }
      },error=>{
         event.target.disabled = true;
      })
     }, 500);
  }

  // playDocRecord(record,data,index){
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
  // }


  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }

}
