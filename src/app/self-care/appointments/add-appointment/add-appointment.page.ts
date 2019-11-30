import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.page.html',
  styleUrls: ['../appointments.page.scss']
})
export class AddAppointmentPage implements OnInit {
  addform:FormGroup
  todaydate:any;
  dropdown:any;
  reminder:boolean=false;
  submitted:boolean=false;
  tabBar: any;
  Progress:boolean=false;
  fixed_appointment:boolean=false;
  add_alert: HTMLIonAlertElement;
  constructor(private toast: Toast,public alertController:AlertController,
    public localNotifications:LocalNotifications,private router: Router,
    private fb: FormBuilder, public route:ActivatedRoute,public service: settingsService,
    public datepipe: DatePipe, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) { }

  ngOnInit() {
    this.todaydate=new Date().toISOString();
    this.addform=this.fb.group({
      event_name:['',[Validators.required]],
      event_time:['',[Validators.required]],
      event_datetime:[ '',[Validators.required]],
      event_category:['',[Validators.required]],
      description:[''],
      reminder:[this.reminder],
      appointment_fixed:[this.fixed_appointment]

    })

    // this.service.Appointmentdropdown().subscribe(res=>{
    //   this.dropdown=res['enum_masters']
    //   console.log(this.dropdown)
    // })
    this.databaseSummary.getEnumMasters('appointment').then((res)=>{
      this.dropdown=res['enum_masters'];
    })
    .catch(error=>{ console.log(error) });

  }

  get f(){return this.addform.controls }

  ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#c7a254');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }
  
  cancel(){
    this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
    this.addform.reset()
  }
  addDetails(val){
      this.submitted=true;
      if(this.addform.valid){
        if(val.appointment_fixed==false && val.reminder==false){
           this.warning(); 
        }else{
          this.ConfirmEvent(val);
        }
      }
  }

   async ConfirmEvent(val) {
     console.log(val)
      this.add_alert = await this.alertController.create({
        header: 'Appointment',
        message: 'Are you sure to submit'+' '+ (val.event_category).bold()+' '+'?',
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
              
              let new1 = new Date(val.event_time);
              let gethours = new1.getHours();
              let getMinutes = new1.getMinutes();

              let new2 = new Date(val.event_datetime);
              new2.setHours(gethours)
              new2.setMinutes(getMinutes)
              let event_dateTime = new2.toJSON();
              console.log(event_dateTime)
              let app_data:any = {
                "event_name": val.event_name,
                "event_datetime": event_dateTime,
                "event_category": val.event_category,
                "description": val.description,
                "event_options":{
                  'reminder':val.reminder,
                  'appointment_fixed':val.appointment_fixed
                },
                "event_type": "appointment"
              }
              // this.service.appointmentDetails(app_data).subscribe(res=>{
              //         let getEventId:any=res['event']['id'];

              //         if(val.reminder==true){
              //           let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+new Date().getMilliseconds();
                        
              //           let getDate:any = new Date(val.event_datetime);
              //           let getTime:any = new Date(val.event_time);
              //           let getHours = getTime.getHours();
              //           let getMinutes = getTime.getMinutes();
              //           let getSeconds = getTime.getSeconds();
              //           let getMilliseconds = getTime.getMilliseconds(); 
              //           getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
              //           let ID:any=getEventId+"1";
              //           console.log(ID)
              //           let repeatAlarmValue = {
              //                           id: ID,
              //                           title: val.event_name,
              //                           text: 'Appointment',
              //                           lockscreen:true,
              //                           trigger: {at: new Date(getDate.getTime())},
              //                           data: { secret:getEventId },
              //                           foreground: true,
              //                           //autoClear: true, 
              //                           sound: null             
              //                           //vibrate: true,
              //                         }
              //           this.scheduleNotifications(repeatAlarmValue);             
              //         }else{
              //           this.Progress=false;
              //           this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
              //         }
              // },
              // error=>{
              //   this.Progress=false;
              //   console.log("error")
              // })

              this.database.createAnEvent(app_data).then((res)=>{
                
                      let getEventId:any=res['event_id'];

                      if(val.reminder==true){
                        let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+new Date().getMilliseconds();
                        
                        let getDate:any = new Date(val.event_datetime);
                        let getTime:any = new Date(val.event_time);
                        let getHours = getTime.getHours();
                        let getMinutes = getTime.getMinutes();
                        let getSeconds = getTime.getSeconds();
                        let getMilliseconds = getTime.getMilliseconds(); 
                        getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
                        let ID:any=getEventId;
                        console.log(ID)
                        let repeatAlarmValue = {
                                        id: ID,
                                        title: val.event_name,
                                        text: 'Appointment',
                                        lockscreen:true,
                                        trigger: {at: new Date(getDate.getTime())},
                                        data: { secret:getEventId },
                                        foreground: true,
                                        //autoClear: true, 
                                        sound: null             
                                        //vibrate: true,
                                      }
                        this.scheduleNotifications(repeatAlarmValue);             
                      }else{
                        this.Progress=false;
                        this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
                      }
              })
              .catch(error=>{ console.log(error) });
            }
          }
        ]
      });
      await this.add_alert.present();
    }

    async warning(){
      const alert = await this.alertController.create({
        header: 'Appointment',
        message: 'whether check reminder or appointment fixed to submit',
        mode: 'md',
        buttons: ['OK']
      })
      await alert.present(); 
    }

  scheduleNotifications(data){
    this.localNotifications.schedule(data);
    this.Progress=false;
    this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#c7a254');
    this.tabBar.style.display = 'flex';
  }
}   
