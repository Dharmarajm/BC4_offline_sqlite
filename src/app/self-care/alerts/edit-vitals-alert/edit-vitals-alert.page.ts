import { Component, OnInit } from '@angular/core';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification  } from '@ionic-native/local-notifications/ngx';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { ToastController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-edit-vitals-alrt',
  templateUrl: './edit-vitals-alert.page.html',
  styleUrls: ['../alerts.page.scss']
})
export class EditVitalsAlertPage implements OnInit {
  todaydate:any;
  vital_options:any;
  vital_edit_form:FormGroup;
  submitted:boolean = false;
  tabBar:any;
  Progress: boolean = false;
  status:boolean;
  repeatType:any='days';
  initialMeal:any='before_meal';
  repeatOrder=[{'days':[{day:'Mon',dayCode: 1,checked:false}, {day:'Tue',dayCode: 2,checked:false}, {day:'Wed',dayCode: 3,checked:false},{day: 'Thu',dayCode: 4,checked:false},{ day:'Fri',dayCode: 5,checked:false},{day:'Sat',dayCode: 6,checked:false},{day:'Sun',dayCode: 0,checked:false}],
  'others':[{day:'1 mo.',dayCode: 1,checked:false},{day:'3 mo.',dayCode: 3,checked:false},{day:'6 mo.',dayCode: 6,checked:false},{day:'12 mo.',dayCode: 12,checked:false}]}];
  repeatValue:any[]=[];
  getAllDatas:any;
  defaultMonth= '1 mo.' 
  NotifyRepeat:boolean=false;
  Originalvalue:any[]=[];
  add_alert: any;

  constructor(private toast: Toast,public localNotifications:LocalNotifications,public alertController: AlertController, public toastController: ToastController, public datepipe: DatePipe, public service: settingsService, private fb: FormBuilder, public route: ActivatedRoute, public router: Router, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) { 
    this.route.queryParams.subscribe(params => {   
      if (params && params.vital_alertData) {
       this.getAllDatas = JSON.parse(params.vital_alertData);     
       let duplicateData = JSON.parse(params.vital_alertData);
       if(this.getAllDatas['event_options']['remainder_repeat']==true){
        this.repeatType=this.getAllDatas['event_options']['repeat_category'];
        this.repeatValue = duplicateData['event_options']['repeat_value'];
        this.Originalvalue=this.getAllDatas['event_options']['repeat_value'];
        if(this.getAllDatas['event_options']['repeat_category']=='others'){
          this.defaultMonth= this.repeatValue[0]; 
        }else{
          for(var i in this.repeatOrder[0]['days']){
            let index = this.repeatValue.findIndex((days)=> {
              return days.day == this.repeatOrder[0]['days'][i]['day'];
             })
             if(index>-1){
              this.repeatOrder[0]['days'][i]['checked']=true; 
             }
            
          }
        }
       }
       this.status=this.getAllDatas['event_options']['remainder_repeat'];
       this.NotifyRepeat=this.getAllDatas['event_options']['remainder_repeat'];
       this.initialMeal=this.getAllDatas['event_options']['meal'];
       console.log(this.getAllDatas)
       console.log(this.repeatValue,this.Originalvalue);
      }
    })
  }

  ngOnInit() {
    
 }

 ionViewWillEnter(){

  this.todaydate=this.getAllDatas['event_datetime']
  this.statusBar.backgroundColorByHexString('#0e9bff');
  this.tabBar = document.getElementById('myTabBar');
  this.tabBar.style.display = 'none';
  // this.service.vitalReading().subscribe(res => {
  //   this.vital_options = res['enum_masters'];
  // })

  this.databaseSummary.getEnumMasters('vital').then((res)=>{
    this.vital_options = res['enum_masters'];
  })
  .catch(error=>{ console.log(error) });

  this.vital_edit_form = this.fb.group({
    event_datetime: [this.getAllDatas['event_datetime'], [Validators.required]],
    event_time: [this.getAllDatas['event_datetime'], [Validators.required]],
    event_name: [this.getAllDatas['event_name'], [Validators.required]],
    event_type: ['alert_vital'],
    meal: [this.initialMeal, [Validators.required]],
    remainder_repeat: [this.status],
    repeat_category:[this.repeatType]
  });
 }

 get f(){return this.vital_edit_form.controls }

 validateBeforeSubmit(form){
    this.submitted=true;
    if(form.remainder_repeat==true && this.repeatValue.length==0){
      this.presentToast('Choose one repeat options');
      return;
    }
    if(this.vital_edit_form.invalid){
      return;
    }else{
      let new1 = new Date(form.event_time);
      let gethours = new1.getHours();
      let getMinutes = new1.getMinutes();

      let new2 = new Date(form.event_datetime);
      new2.setHours(gethours)
      new2.setMinutes(getMinutes)
      let event_dateTime = new2.toJSON();
      let data = {
        event_name: form.event_name,
        event_datetime: event_dateTime,
        event_type: form.event_type,
        event_options: {
              meal: form.meal,
              remainder_repeat: form.remainder_repeat,
              repeat_category:form.repeat_category,
              repeat_value:this.repeatValue
          }
      };
          this.addconfirmation(form,data)      
    }
 }

 async addconfirmation(form,data){
  this.add_alert = await this.alertController.create({
    header: 'Alert',
    message: 'Are you sure to submit?',
    mode: 'md',
    backdropDismiss: false,
    buttons: [
      {
        text: 'Edit'      
      },
      {
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: () => {
          this.Progress=true;
        //   this.service.commonUpdatePost(this.getAllDatas['id'],data).subscribe(res=>{
        //     let getData:any=res;
        //     let getEventId:any=this.getAllDatas['id']           
        //     if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){
        //       let cancelArray=[];  
        //       for(var i in this.Originalvalue){
        //         if(+i>this.repeatValue.length-1){
        //           let ID:any=getEventId+''+Number(+i+1);
        //           cancelArray.push(ID)
        //         }
        //       }
        //         this.assignOrCancelNotifications(cancelArray,form,getEventId);             
        //     }else{
        //       this.assignSchedule(form,getEventId);
        //     }          
        // },error=>{
        //   this.Progress=false;
        // });
          this.database.updateAnEvent(this.getAllDatas['event_id'],data).then((res)=>{
            let getData:any=res;
              let getEventId:any=this.getAllDatas['event_id']           
              if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){
                let cancelArray=[];  
                for(var i in this.Originalvalue){
                  if(+i>this.repeatValue.length-1){
                    let ID:any=getEventId+''+Number(+i+1);
                    cancelArray.push(ID)
                  }
                }
                  this.assignOrCancelNotifications(cancelArray,form,getEventId);             
              }else{
                this.assignSchedule(form,getEventId);
              }
          }).catch(error=>{ 
            console.log(error); 
            this.Progress=false;
          });
        }
      }
    ]
  });
  await this.add_alert.present();
}

 assignSchedule(form,getEventId){
  console.log(this.repeatValue)
  let repeatAlarmValue=[];
  let getDate = new Date(form.event_datetime)
  let getTime:any = new Date(form.event_time)
  
  let getHours = getTime.getHours();
  let gettMinutes = getTime.getMinutes();
  let getSeconds = getTime.getSeconds();
  let getMilliseconds = getTime.getMilliseconds();
  getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
  let repeatHours = getDate.getHours();
  let repeatMinutes = getDate.getMinutes();

  if(form.remainder_repeat==true){
    if(form.repeat_category=='days'){
        repeatAlarmValue=this.repeatValue.map((res,index)=>{
          let ID:any=getEventId+''+Number(index+1);
       this.localNotifications.schedule({
          id: ID,
          title: form.event_name,
          text: 'Vital Alert',
          trigger: {
            count: 1,
            every:{ weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes  } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
          },
          data: { secret:getEventId },
          lockscreen:true,
          vibrate: true,
          priority: 2,
          foreground: true,
          sound: null
        })
      })
      this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
     // this.scheduleNotifications(repeatAlarmValue,true);
      
    }else if(form.repeat_category=='others'){
      this.Progress=false;
      this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
      // let monthValue=Number(this.repeatValue[0].charAt(0));
      // let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
      // repeatAlarmValue.push(
      //   {
      //     id: uniqueTime,
      //     title: form.event_name,
      //     text: 'You just got notified :)',
      //     lockscreen:true,
      //     trigger: {
      //       count: 1,
      //       every:{ week: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
      //     },
      //     data: { secret:getEventId },
      //     foreground: true,
      //     //autoClear: true, 
      //     sound: null,             
      //     //vibrate: true,
      //   }
      // )
    }
    
  }else{
    let ID:any=getEventId+''+1;
    this.localNotifications.schedule({
                    id: ID,
                    title: form.event_name,
                    text: 'Vital Alert',
                    trigger: {at: new Date(getDate.getTime())},
                    data: { secret:getEventId },
                    lockscreen:true,
                    vibrate: true,
                    priority: 2,
                    foreground: true,
                    sound: null
                  })
     this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
    //this.scheduleNotifications(repeatAlarmValue,false); 
  }
 }

 scheduleNotifications(data,boolean){
  this.localNotifications.schedule(data);
  this.Progress=false;
  this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
 }

 assignOrCancelNotifications(cancelArray,val,getEventId){
  this.localNotifications.cancel(cancelArray).then((res)=>{
    console.log(res);
    this.assignSchedule(val,getEventId);
  });
}
 
 checkValue(event){
  console.log(event)
  this.repeatValue=[];
  this.repeatValue.push(event.detail.value)
  this.defaultMonth= event.detail.value;
  console.log(this.repeatValue)
}

repeatCategChange(event){
 this.repeatValue=[];
 if(event.detail.value=='days'){
  //this.repeatValue=[];
  for(var i in this.repeatOrder[0]['days']){
    this.repeatOrder[0]['days'][i]['checked']=false;
  }
 }else{
  this.defaultMonth= '1 mo.' 
  this.repeatValue.push(this.defaultMonth)
 }
 console.log(this.repeatValue)
 
}

repeatDayCheck(day,checked){
 console.log(day,checked);
 let index = this.repeatValue.findIndex((days)=> {
  return days.day == day.day;
 })
 console.log(index)
 console.log(checked==true)
 if(checked==true){
  if(index==-1 ){
    this.repeatValue.push(day);
  }   
 }else{
  if(index>-1){
  this.repeatValue.splice(index,1);
  }
 }
 console.log(this.repeatValue)
}

repeatCheck(event){
 //this.defaultMonth= '1 mo.';
 this.status = event.detail.checked;
 if(this.vital_edit_form['value']['repeat_category']!=undefined && this.vital_edit_form['value']['repeat_category']!=null && this.vital_edit_form['value']['repeat_category']!=''){
    this.repeatType=this.vital_edit_form['value']['repeat_category'];
    // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
    //   this.repeatValue.push(this.defaultMonth);
    // }
   }else{
    this.repeatType='days';
    this.vital_edit_form['value']['repeat_category'] = this.repeatType;
   }
   console.log(this.repeatValue)
}

async presentToast(message: string) {
  this.toast.show(message, '2000', 'bottom').subscribe(
    toast => { 
      console.log(toast); 
    });
}

 cancel() {
  this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
 }

 ionViewWillLeave() {
  this.statusBar.backgroundColorByHexString('#0e9bff');
  this.tabBar.style.display = 'flex';
 }



}