import { Component, OnInit } from '@angular/core';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DatePipe } from '@angular/common';
import { AlertController,Platform  } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-add-general',
  templateUrl: './add-general.page.html',
  styleUrls: ['../alerts.page.scss']
})
export class AddOthersPage implements OnInit {
  todaydate:any;
  vital_options:any;
  other_alert_form:FormGroup;
  submitted:boolean = false;
  tabBar:any;
  Progress: boolean = false;
  status:boolean = false;
  repeatType:any='days';
  initialMeal:any='before_meal';
  repeatOrder=[{'days':[{day:'Mon',dayCode: 1,checked:false}, {day:'Tue',dayCode: 2,checked:false}, {day:'Wed',dayCode: 3,checked:false},{day: 'Thu',dayCode: 4,checked:false},{ day:'Fri',dayCode: 5,checked:false},{day:'Sat',dayCode: 6,checked:false},{day:'Sun',dayCode: 0,checked:false}],
  'others':[{day:'1 mo.',dayCode: 1,checked:false},{day:'3 mo.',dayCode: 3,checked:false},{day:'12 mo.',dayCode: 12,checked:false}]}];
  repeatValue:any[]=[];
  defaultMonth= '1 mo.';
  add_alert: any;

  constructor(public platform: Platform,private toast: Toast, public localNotifications:LocalNotifications,public alertController: AlertController, public datepipe: DatePipe, public service: settingsService, private fb: FormBuilder, public route: ActivatedRoute, public router: Router, private statusBar: StatusBar) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#0e9bff');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
    this.todaydate = new Date().toISOString();
    this.other_alert_form = this.fb.group({
      event_datetime: ['', [Validators.required]],
      event_time: ['', [Validators.required]],
      event_name: ['', [Validators.required]],
      event_type: ['alert_general'],
      meal: [this.initialMeal, [Validators.required]],
      remainder_repeat: [this.status],
      repeat_category:[this.repeatType]
    });

   }
  
  get f(){return this.other_alert_form.controls }
  
  validateBeforeSubmit(form){
      console.log(form)
      this.submitted=true;
      if(form.remainder_repeat==true && this.repeatValue.length==0){
        this.presentToast('Choose one repeat options');
        return;
      }

      if(this.other_alert_form.invalid){
        return;
      }else{
        let date=this.datepipe.transform(form.event_datetime,"dd MMM yyyy");
        let data = {
          event_name: form.event_name,
          event_datetime: date +" "+ form.event_time,
          event_type: form.event_type,
          event_options: 
             {
                meal: form.meal,
                remainder_repeat: form.remainder_repeat,
                repeat_category:form.repeat_category,
                repeat_value:this.repeatValue
  
             }
        };
        console.log(data)
        this.addconfirmation(form,data);
      }
  }


  async addconfirmation(form,data){
    this.add_alert = await this.alertController.create({
      header: 'Alerts',
      message: 'Are you sure to submit'+' '+ (form.event_name).bold()+' '+ 'Alert'+'?',
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
            this.service.commonPost(data).subscribe(res=>{
              let getData:any=res;
              let getEventId:any=res['event']['id'];
              
              
              console.log(this.repeatValue)
              let repeatAlarmValue=[];
              let getDate = new Date(form.event_datetime)
              let getTime:any = new Date(form.event_time)
              
              let getHours = getTime.getHours();
              let getMinutes = getTime.getMinutes();
              let getSeconds = getTime.getSeconds();
              let getMilliseconds = getTime.getMilliseconds();
              getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
              let repeatHours = getDate.getHours();
              console.log(repeatHours)
              let repeatMinutes = getDate.getMinutes();
              console.log(repeatMinutes)
              if(form.remainder_repeat==true){
                
                if(form.repeat_category=='days'){
                    repeatAlarmValue=this.repeatValue.map((res,index)=>{
                      let ID:any=getEventId+''+Number(index+1);
                      console.log(ID)
                      this.localNotifications.schedule({
                        id: ID,
                        title: form.event_name,
                        text: 'General Alert',
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
                     
                      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'])       
                    })
                  
                 // this.scheduleNotifications(repeatAlarmValue,true);
                  
                }else if(form.repeat_category=='others'){
                   this.Progress=false;
                   this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
                  //  let ID:any=getEventId+''+1;
                  //  let monthValue=Number(this.repeatValue[0].charAt(0));
                  //  let triggerData:any = {
                  //   count: 1,
                  //    every:{ quarter: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                  //  }
                  //  if(monthValue==1){
                  //   triggerData = {
                  //     count: 1,
                  //      every:{ month: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                  //    }
                  //  }else if(monthValue==12){
                  //   triggerData = {
                  //     count: 1,
                  //      every:{ quarter: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                  //    }  
                  //  }else{
                  //   triggerData = {
                  //     count: 1,
                  //      every:{ quarter: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                  //    }
                  //  }
                  
                  // let repeatAlarmValue = {
                  //     id: ID,
                  //     title: form.event_name,
                  //     text: 'You just got notified :)',
                  //     lockscreen:true,
                  //     trigger: triggerData,
                  //     data: { secret:getEventId },
                  //     foreground: true,
                  //     //autoClear: true, 
                  //     sound: null,             
                  //     //vibrate: true,
                  //   }
    
                  // this.scheduleNotifications(repeatAlarmValue,true);
                }
                
                console.log(repeatAlarmValue)
              }else{
                let ID:any=getEventId+''+1;
                this.localNotifications.schedule({
                                id: ID,
                                title: form.event_name,
                                text: 'General Alert',
                                trigger: {at: new Date(getDate.getTime())},
                                data: { secret:getEventId },
                                lockscreen:true,
                                vibrate: true,
                                priority: 2,
                                foreground: true,
                                sound: null    
                              })
                              this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
     
              }
               
            },error=>{
              this.Progress=false;
            });
          }
        }
      ]
    });
    await this.add_alert.present();
  }
  scheduleNotifications(data,boolean){
    this.localNotifications.schedule(data);
    this.Progress=false;
    this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
  }
   
  checkValue(event){
    console.log(event)
    this.repeatValue=[];
    this.repeatValue.push(event.detail.value)
    //console.log(others,index,event.detail.checked)
    // for(var i in this.repeatOrder[0]['others']){
    //   console.log(i)
    //   if(i==index){
    //    // this.repeatOrder[0]['others'][i]['checked']=true;
    //     console.log(this.repeatOrder[0]['others'][i]['checked'])
    //   }else{
    //     this.repeatOrder[0]['others'][i]['checked']=false;
    //     console.log(this.repeatOrder[0]['others'][i]['checked'])
    //   }  
    // }
    // this.repeatValue=[];
    // this.repeatValue.push(others)
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
   console.log()
   if(this.other_alert_form['value']['repeat_category']!=undefined && this.other_alert_form['value']['repeat_category']!=null && this.other_alert_form['value']['repeat_category']!=''){
      this.repeatType=this.other_alert_form['value']['repeat_category'];
      // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
      //   this.repeatValue.push(this.defaultMonth);
      // }
     }else{
      this.repeatType='days';
      this.other_alert_form['value']['repeat_category'] = this.repeatType;
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