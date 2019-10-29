import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ToastController,AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';  
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.page.html',
  styleUrls: ['../appointments.page.scss']
})
export class EditAppointmentPage implements OnInit {
  data:any;
  dropdown:any;
  editform:FormGroup
  reminder:boolean;
  submitted:boolean=false;
  tabBar: any;
  todaydate:any;
  Progress:boolean=false;
  getRoute:any;
  fixed_appointment:boolean=false;

  constructor(public localNotifications:LocalNotifications,public alertController:AlertController,public toastController: ToastController,
    private router: Router, public route:ActivatedRoute,public service: settingsService,
    public datepipe: DatePipe,private fb: FormBuilder, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
      this.route.queryParams.subscribe(params => {
        console.log(params)
          if (params && params.viewAppointment) {
          this.data = JSON.parse(params.viewAppointment);
          this.getRoute=params.check
         console.log(this.data)
         if(this.getRoute=='home'){
          this.reminder=this.data['event_options']['reminder'];
          this.fixed_appointment=this.data['event_options']['appointment_fixed'];
         }else{
          this.reminder=this.data['reminder'];
          this.fixed_appointment=this.data['appointment_fixed'];
         }
          // this.reminder=this.data['reminder'] || this.data['event_options']['reminder'];
          // this.fixed_appointment=this.data['appointment_fixed'] || this.data['event_options']['appointment_fixed'];         
        }
      });
     }

  ngOnInit() {    
  }
  ionViewWillEnter(){
    this.todaydate=new Date().toISOString();
    this.editform=this.fb.group({
      event_name:[this.data['event_name'],[Validators.required]],
      event_time:[this.data['event_datetime'],[Validators.required]],
      event_datetime:[this.data['event_datetime'],[Validators.required]],
      event_category:[this.data['event_category'],[Validators.required]],
      description:[this.data['description']],
      reminder:[this.reminder],
      appointment_fixed:[this.fixed_appointment]
     })
     console.log(this.editform)
    this.statusBar.backgroundColorByHexString('#c7a254');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
    // this.service.Appointmentdropdown().subscribe(res=>{
    //   this.dropdown=res['enum_masters']
    //   console.log(this.dropdown)
    // })

    this.databaseSummary.getEnumMasters('appointment').then((res)=>{
      this.dropdown=res['enum_masters'];
    })
    .catch(error=>{ console.log(error) });
  }

  get f(){return this.editform.controls }

  cancel(){
    if(this.getRoute=='home'){
      this.router.navigate(["self-care-tabs/tabs/tab1"]) 
    }else{
      this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
    }
  }
  
  editDetails(val){
    this.submitted=true;
    if(this.editform.valid){
      if(val.appointment_fixed==false && val.reminder==false){
        this.warning();
      }else{
        this.ConfirmEvent(val);
      }
      // console.log(val,this.reminder)
      // this.Progress=true;
      // let date:any=this.datepipe.transform(val.event_datetime,"dd MMM yyyy")
      // let app_data:any = {
      //           "event_name": val.event_name,
      //           "event_datetime": date+ " "+ val.event_time,
      //           "event_category": val.event_category,
      //           "description": val.description,
      //           "event_options":{
      //             'reminder':val.reminder
      //           },
      //           "event_type": "appointment"
      //     }
      // this.service.EditDetails(this.data['id'],app_data).subscribe(res=>{
      //   let getEventId:any=this.data['id'];

      //   if(val.reminder==true && this.reminder==false || val.reminder==true && this.reminder==true){
      //     this.assignOrCancelNotifications(val,getEventId,'assign');
      //   }else if(val.reminder==false && this.reminder==true){
      //     this.assignOrCancelNotifications(val,getEventId,'cancel');
      //   }else{
      //     this.Progress=false;
      //     this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
      //   }
      // },
      // error=>{
      //   console.log("error");
      // })
    }
  }

  async ConfirmEvent(val) {
    const alert = await this.alertController.create({
        header: 'Appointment',
        message: 'The information updated will be replaced with old one',
        mode: 'md',
        buttons: [
          {
            text: 'Confirm',
            handler: () => {
              this.Progress=true;
              let new1 = new Date(val.event_time);
              let gethours = new1.getHours();
              let getMinutes = new1.getMinutes();

              let new2 = new Date(val.event_datetime);
              new2.setHours(gethours)
              new2.setMinutes(getMinutes)
              let event_dateTime = new2.toJSON();
              let app_data:any = {
                        "id": this.data["id"],
                        "event_name": val.event_name,
                        "event_datetime": event_dateTime,
                        "event_category": val.event_category,
                        "description": val.description,
                        "event_options":{
                          'reminder':val.reminder,
                          'appointment_fixed':val.appointment_fixed
                        },
                        "event_type": "appointment",
                        "created_at": this.data['created_at'] 
                  }
              // this.service.EditDetails(this.data['id'],app_data).subscribe(res=>{
              //   let getEventId:any=this.data['id'];

              //   if(val.reminder==true && this.reminder==false || val.reminder==true && this.reminder==true){
              //     this.assignOrCancelNotifications(val,getEventId,'assign');
              //   }else if(val.reminder==false && this.reminder==true){
              //     this.assignOrCancelNotifications(val,getEventId,'cancel');
              //   }else{
              //     this.Progress=false;
              //     if(this.getRoute=='home'){
              //       this.router.navigate(["self-care-tabs/tabs/tab1"]) 
              //     }else{
              //       this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
              //     }
                  
              //   }
              // },
              // error=>{
              //   console.log("error");
              // })

              this.database.updateAnEvent(this.data['event_id'],app_data).then((res)=>{
                let getEventId:any=this.data['event_id'];

                if(val.reminder==true && this.reminder==false || val.reminder==true && this.reminder==true){
                  this.assignOrCancelNotifications(val,getEventId,'assign');
                }else if(val.reminder==false && this.reminder==true){
                  this.assignOrCancelNotifications(val,getEventId,'cancel');
                }else{
                  this.Progress=false;
                  if(this.getRoute=='home'){
                    this.router.navigate(["self-care-tabs/tabs/tab1"]) 
                  }else{
                    this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
                  }
                }  
              })
              .catch(error=>{ console.log(error) });
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

    async warning(){
      const alert = await this.alertController.create({
        header: 'Appointment',
        message: 'whether check reminder or appointment fixed to submit',
        mode: 'md',
        buttons: ['OK']
      })
      await alert.present(); 
    }



  assignOrCancelNotifications(val,getEventId,notify){
    let ID:any=getEventId; 
    if(notify=='assign'){
    let getDate:any = new Date(val.event_datetime);
      let getTime:any = new Date(val.event_time);
      let getHours = getTime.getHours();
      let getMinutes = getTime.getMinutes();
      let getSeconds = getTime.getSeconds();
      let getMilliseconds = getTime.getMilliseconds(); 
      getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
      
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
  }else if(notify=='cancel'){
    this.localNotifications.cancel(ID).then((res)=>{
      console.log(res)
      this.Progress=false;
      if(this.getRoute=='home'){
        this.router.navigate(["self-care-tabs/tabs/tab1"]) 
      }else{
        this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
      }
    });
  }          
      
  }

  scheduleNotifications(data){
    this.localNotifications.schedule(data);
    this.Progress=false;
    if(this.getRoute=='home'){
      this.router.navigate(["self-care-tabs/tabs/tab1"]) 
    }else{
      this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
    }
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#c7a254');
    this.tabBar.style.display = 'flex';
  }

}   
