import { Component, OnInit } from '@angular/core';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { DatePipe } from '@angular/common';  
import { Router,  ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { CalendarModal, CalendarModalOptions,  CalendarResult } from 'ion2-calendar';
import {  from } from 'rxjs';
import {  groupBy, mergeMap,  toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cgvital-reading',
  templateUrl: './cgvital-reading.page.html',
  styleUrls: ['../cgvitals.page.scss']
})
export class cgvitalreading implements OnInit {
tabBar: any;
index:number;
page:number=1;
count:number=10;
previous_data: any[]=[];
event_name: any;
from_date1: CalendarResult;
end_date1: CalendarResult;
user_id: string;
vital_reading: any[]=[];
vital_scroll: any[]=[];


  constructor(public modalCtrl: ModalController,private toast: Toast,public datepipe: DatePipe, public service: careGiverService, public route:ActivatedRoute, public router: Router,public toastController: ToastController,public alertController:AlertController, private statusBar: StatusBar) { 
      this.route.queryParams.subscribe(params => {      
      this.event_name = params.data
      this.service.reading_history( this.event_name,this.page,this.count).subscribe(res=>{
      this.previous_data=res['events']
      this.groupBy(this.previous_data)
    })         
    });    
}

  ngOnInit() {  
  }
 
  ionViewWillEnter(){   
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
    this.ngOnInit(); 
  }

  groupBy(data){
    let records:any[]=data.map(item => ({
      id:item.id,
      description: item.description,
      event_name: item.event_name,
      event_category:item.event_category,
      event_datetime:item.event_datetime,
      event_type: item.event_type,
      value1:item.event_options.value1,
      value2: item.event_options.value2,
      value3: item.event_options.value3,
      value4: item.event_options.value4,
 }));

 let value = []
 const example = from(records).pipe(
   groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
   mergeMap(group => group.pipe(toArray()))
 ).subscribe(val => {
   if(val){
       let ff = { "created_at":val[0].event_datetime,"events" :val }
       value.push(ff);
   }
 })
 this.vital_reading=value;
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      canBackwardsSelected:true,
      pickMode: 'range',
      color: 'secondary',
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
        this.service.filterReading(this.event_name,this.page,this.count,from_date,end_date).subscribe(res=>{
        let filter=res['events']
        this.groupBy(filter)      
        });      
     }

   scroll(event){
    setTimeout(() => {
      this.page+=1;
      this.service.reading_history(this.event_name,this.page,this.count).subscribe(res=>{
        let data=res['events'];
        let concat= this.previous_data.concat(data);
        this.previous_data=concat;
        let records:any[]=this.previous_data.map(item => ({
          id:item.id,
          description: item.description,
          event_name: item.event_name,
          event_category:item.event_category,
          event_datetime:item.event_datetime,
          event_type: item.event_type,
          value1:item.event_options.value1,
          value2: item.event_options.value2,
          value3: item.event_options.value3,
          value4: item.event_options.value4,
     }));
     let value = []
    const example = from(records).pipe(
   groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
   mergeMap(group => group.pipe(toArray()))
 ).subscribe(val => {
   if(val){
       let ff = { "created_at":val[0].event_datetime,"events" :val }
       value.push(ff);
   }
 })
 this.vital_scroll=value;
          this.vital_reading=this.vital_scroll;
          event.target.complete();
          if (this.page *10 !=this.vital_reading.length){
             event.target.disabled = true;
          }
      },error=>{
         event.target.disabled = true;
      }) 
    }, 500)
    }   
  


  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
      });
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar.style.display = 'flex';
  }

  
}