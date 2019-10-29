import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
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
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-doc-visits',
  templateUrl: './doc-visits.page.html',
  styleUrls: ['./doc-visits.page.scss'],
})
export class DocVisitsPage implements OnInit {
  selectedSegment:any="first";
  tabBar: any;
  diaryPage:number=1;
  diaryPage_offset:number=0;
  doctorPage:number=1;
  doctorPage_offset:number=0;
  diary_records:any[]=[];
  doctor_records:any[]=[];
  dairyInput:any;
  doctorInput:any;
  status: boolean = false;
  diary_scroll:any[]=[];
  doctor_scroll:any[]=[];
  environmentUrl:any;
  from_date1: any;
  end_date1: any;
  userId: any;
  searchHas: any;
  pointer_event: boolean = false;
  data_doctor_details:any[]=[];
  data_diary_details:any[]=[];
  constructor(private toast: Toast,public datepipe: DatePipe, public modalCtrl: ModalController, private streamingMedia: StreamingMedia,public toastController: ToastController, private statusBar: StatusBar, private router: Router, public settingService: settingsService, public alertController: AlertController,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) { 
    this.environmentUrl=environment.ImageUrl;
  }

  ngOnInit() {
   console.log(this.from_date1==null,this.from_date1==undefined,this.from_date1=='')
  }
  
  ionViewWillEnter() {
    this.diaryPage=1;
    this.doctorPage=1;
    this.statusBar.backgroundColorByHexString('#5ee4a2');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.getDiaryRecords();
    this.getDoctorRecords();   
  }

  getDiaryRecords(){
    // this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
    //   let data:any = res['event_list'];
    //   this.data_diary_details=res['event_list'];
    //    console.log(data)
       
    //   this.groupByDiary(data)
    //   this.status = true;
    // })
    this.diaryPage=1;
    this.diaryPage_offset=0;
    this.databaseSummary.getAllEvents('health_diary','New',this.diaryPage_offset).then(res=>{
      let data:any = res['event_list'];
      this.data_diary_details=res['event_list'];
      this.groupByDiary(data)
      this.status = true;
    }).catch(err=>{console.log(err)})
  }

  getDoctorRecords(){
    // this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
    //   let data:any = res['event_list']
    //   this.data_doctor_details=res['event_list']; 
    //   this.groupByDoctor(data)
    //   this.status = true;
    // })
    this.doctorPage=1;
    this.doctorPage_offset=0;
    this.databaseSummary.getAllEvents('doc_visit','New',this.doctorPage_offset).then(res=>{
      let data:any = res['event_list']
      this.data_doctor_details=res['event_list']; 
      this.groupByDoctor(data)
      this.status = true;
    }).catch(err=>{console.log(err)})
  }

  groupByDiary(data){

      let records:any[]=data.map(item => ({
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
        console.log(val)
        if(val){
            let ff = { "created_at":val[0].created_at,"events" :val }
            value.push(ff);
        }
      })
      this.doctor_records=value;
  }
  

  async deleteEvent(id,event) {

    const alert = await this.alertController.create({
      header: 'Doc Visits',
      message: 'Are you sure want to delete'+' '+event+' '+ 'recording'+'?',
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

  onSegmentChanged(event){

  }

  onDiarySearchChange(event){
    console.log(event)
    let search = event.detail.value;
    this.diaryPage=1;
    // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
    //   let data:any = res['event_list']
    //   this.data_diary_details=res['event_list']; 
    //   this.groupByDiary(data)
    // })
     this.diaryPage=1;
     this.diaryPage_offset=0;
     this.databaseSummary.getAllEventsSearchList('health_diary',search,'New',this.diaryPage_offset).then(res=>{
        let data:any = res['event_list']
        this.data_diary_details=res['event_list']; 
        this.groupByDiary(data)
     }).catch(err=>{console.log(err)})
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
    console.log(end_date)
        //this.from_date1=this.datepipe.transform(from_date, 'dd-MMM-yyyy')
        //this.end_date1=this.datepipe.transform(end_date, 'dd-MMM-yyyy')
        this.from_date1=this.datepipe.transform(from_date, 'yyyy-MM-dd')
        this.end_date1=this.datepipe.transform(end_date, 'yyyy-MM-dd')
        console.log(this.from_date1)
        console.log(this.end_date1)
        this.userId=localStorage.getItem("user_id")
        console.log(this.userId)
        let filter_data = { 
          "user_id":this.userId,
          "from_date":this.from_date1,
          "end_date":this.end_date1,
          "event_type":'health_diary',
          "page":1,
          "per_page":10,
          "sort":"created_at"
          }
          //console.log(filter_data)
          //console.log(this.userId)
        //  this.settingService.record_filter(filter_data).subscribe(res=>{
        //   console.log(res)
        //   let data:any = res['diary_records']
        //   this.data_diary_details=res['diary_records'];
        //   this.groupByDiary(data);
        //  })

          this.databaseSummary.diaryRecordFilter(filter_data).then(res=>{
            let data:any = res['event_list']
            this.data_diary_details=res['event_list']; 
            this.groupByDiary(data)
          }).catch(err=>{console.log(err)})
  }
  
  onDiaryCancel(event){

  }

  onDoctorSearchChange(event){
    console.log(event)
    let search = event.detail.value;
    this.doctorPage=1;
    this.doctorPage_offset=0;
    // this.settingService.commonEventSearchList("doc_visit",search).subscribe(res => {
    //   let data:any = res['event_list']
    //   this.data_doctor_details=res['event_list']; 
    //   this.groupByDoctor(data)
    // })
    this.databaseSummary.getAllEventsSearchList('doc_visit',search,'New',this.doctorPage_offset).then(res=>{
        let data:any = res['event_list']
        this.data_doctor_details=res['event_list']; 
        this.groupByDoctor(data)
     }).catch(err=>{console.log(err)})
  }

  onDoctorCancel(event){

  }

  docRecord(){
    this.router.navigate(['/self-care-tabs/tabs/tab1/doc-visits/doc-visits-record'])
  }

  playDocRecord(record,data,index){
    console.log(record,data,index)
    let navParams:NavigationExtras = {
      queryParams: {
        value:JSON.stringify(record),
        current:JSON.stringify(data)
      }
    }; 
    this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'],navParams)
  }

  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  loadData1(event){ 
    setTimeout(() => {
      console.log('Done');
      this.diaryPage+=1;
      this.diaryPage_offset=this.diaryPage*10-10;
      // this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
      //    let data:any = res['event_list'];
      //    let concat=this.data_diary_details.concat(data);
        
      //     this.diary_scroll=concat.map(item => ({
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
      //     const example = from(this.diary_scroll).pipe(
      //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //       console.log(val)
      //       if(val){
      //           let ff = { "created_at":val[0].created_at,"events" :val }
      //           value.push(ff);
      //       }
      //     })
      //     this.diary_scroll=value;
          
      //     this.diary_records=this.diary_scroll;
      //     event.target.complete();
      //     if (this.diaryPage *10 !=this.diary_records.length){
      //        event.target.disabled = true;
      //     }
      // },error=>{
      //    event.target.disabled = true;
      // })
      let data:any[]=[];
      this.databaseSummary.getAllEvents('health_diary','New',this.diaryPage_offset).then(async(res)=>{
        data = res['event_list'];
        let concat=this.data_diary_details.concat(data);
        
        this.diary_scroll=concat.map(item => ({
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
        
        this.diary_records=this.diary_scroll;
        event.target.complete();
        if (this.diaryPage *10 !=this.diary_records.length){
            event.target.disabled = true;
        }
      }).catch(err=>{
        event.target.disabled = true;
        console.log(err)
      })  
     }, 500);
  }

  loadData2(event){
    setTimeout(() => {
      console.log('Done');
      this.doctorPage+=1;
      this.doctorPage_offset=this.doctorPage*10-10;
      // this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
      //    let data:any = res['event_list'];
      //    let concat=this.data_doctor_details.concat(data); 
      //     this.doctor_scroll=concat.map(item => ({
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
      //     const example = from(this.doctor_scroll).pipe(
      //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //       console.log(val)
      //       if(val){
      //           let ff = { "created_at":val[0].created_at,"events" :val }
      //           value.push(ff);
      //       }
      //     })
      //     this.doctor_scroll=value;
      //     //this.doctor_scroll.map(item => this.doctor_records.push(item));
      //     this.doctor_records=this.doctor_scroll;
      //     event.target.complete();
      //     if (this.doctorPage *10 !=this.doctor_records.length){
      //        event.target.disabled = true;
      //     }
      // },error=>{
      //    event.target.disabled = true;
      // })

      let data:any[]=[];
      this.databaseSummary.getAllEvents('doc_visit','New',this.doctorPage_offset).then(async(res)=>{
         data = res['event_list'];
         let concat=this.data_doctor_details.concat(data); 
          this.doctor_scroll=concat.map(item => ({
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
      }).catch(err=>{
        event.target.disabled = true;
        console.log(err)
      })  
     }, 500);
  }


  // playDocRecord(record,data,index){
  //    console.log(record,data['events'][0]['event_assets'][0]['url']);
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
   
   searchOf() {
    this.searchHas = document.getElementById('search_focus').classList[11];
    if(this.searchHas == "searchbar-has-focus"){
      this.pointer_event = true;
    }else{
      this.pointer_event = false;
    }
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }
}
