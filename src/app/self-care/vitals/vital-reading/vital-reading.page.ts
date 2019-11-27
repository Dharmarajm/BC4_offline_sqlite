import { Component, OnInit, ViewChild } from '@angular/core';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController,ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import {CalendarModal, CalendarModalOptions,  CalendarResult } from 'ion2-calendar';
import {  from } from 'rxjs';
import {  groupBy, mergeMap,  toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-vital-reading',
  templateUrl: './vital-reading.page.html',
  styleUrls: ['../vitals.page.scss']
}) 
export class VitalReadingPage implements OnInit {
tabBar: any;
Progress:boolean=false;
page:number=1;
count:number=10;
previous_data: any[]=[];
event_name: any;
from_date1: any;
end_date1: any;
user_id: string;
vital_reading: any[]=[];
delete_content: any;

  constructor(public modalCtrl: ModalController,private toast: Toast,public datepipe: DatePipe, public service: settingsService, public route:ActivatedRoute, public router: Router,public toastController: ToastController,public alertController:AlertController, private statusBar: StatusBar) { 
      this.route.queryParams.subscribe(params => {      
           this.event_name = params.data
           this.user_id = localStorage.getItem("user_id");               
      });
      
}


  ngOnInit() {  
    
  }
  ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
    this.end_date1 = new Date()
    var y = this.end_date1.getFullYear()
    var m = this.end_date1.getMonth();
    this.from_date1 = new Date(y, m, 1); 
    this.service.filterReading( this.event_name,this.user_id,this.page,this.count,this.from_date1, this.end_date1).subscribe(res=>{
    this.previous_data=res['events']
    this.groupBy(this.previous_data)
    console.log(this.previous_data)
  })
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
       console.log(this.vital_reading)     
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
    this.page=1;
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const from_date: CalendarResult = date.from.dateObj;
    const end_date: CalendarResult = date.to.dateObj;
        this.from_date1=from_date
        this.end_date1=end_date
        this.service.filterReading(this.event_name,this.user_id,this.page,this.count,from_date,end_date).subscribe(res=>{
        this.previous_data=res['events']
        console.log(this.previous_data)
        this.groupBy(this.previous_data)      
        });      
     }

    loadData(scroll){
    setTimeout(() => {
      this.page+=1;
      this.service.filterReading(this.event_name,this.user_id,this.page,this.count,this.from_date1,this.end_date1).subscribe(res=>{
        let event:any=res['events'];
        console.log(event)
        let merge:any= this.previous_data.concat(event);
        console.log(merge)
        this.previous_data=merge;
        console.log(this.previous_data)
        this.groupBy(merge);
      scroll.target.complete();
      if(this.page *10 !=this.vital_reading.length){
        scroll.target.disabled = true;
      }
      },error=>{
        scroll.target.disabled = true;
      }) 
    }, 500)
  }   
  
async DeleteItem(id){
  const alert = await this.alertController.create({
      header: 'Vitals',
      message: 'Are you sure want to delete?',
      mode: 'md',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.service.commonDeleteEvent(id).subscribe(res => {                                 
              this.presentToast("Record Deleted Successfully");              
              this.router.navigate(['/self-care-tabs/tabs/tab1/vitals']);
            }, error => {

            })
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
    this.toast.show(message, '4000', 'center').subscribe(
      toast => { 
      });
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar.style.display = 'flex';
  }

  
}