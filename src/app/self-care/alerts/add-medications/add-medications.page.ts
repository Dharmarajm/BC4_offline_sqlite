import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification  } from '@ionic-native/local-notifications/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController } from '@ionic/angular';
import { environment } from '../../../../environments/environment'
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-add-medications',
  templateUrl: './add-medications.page.html',
  styleUrls: ['../alerts.page.scss']

})
export class AddMedicationPage implements OnInit {
  store_photos:any[]=[];
  fileuri:any[]=[];
  audioFileName: any;
  cdvFilePath: any;
  addform:FormGroup
  todaydate:any;
  showoptions:any;
  status:boolean=false;
  meals_option:any;
  medicine_option:any[]=[];
  dossage_option:any[]=[];
  initialMeal:any='before_meal';
  repeatType:string='days';
  submitted:boolean=false;
  selectedVital:any;
  repeate_days:any[]=[];
  Progress:boolean=false;
  repeatOrder=[{'days':[{day:'Mon',dayCode: 1,checked:false}, {day:'Tue',dayCode: 2,checked:false}, {day:'Wed',dayCode: 3,checked:false},{day: 'Thu',dayCode: 4,checked:false},{ day:'Fri',dayCode: 5,checked:false},{day:'Sat',dayCode: 6,checked:false},{day:'Sun',dayCode: 0,checked:false}],
  'others':[{day:'1 mo.',dayCode: 1,checked:false},{day:'3 mo.',dayCode: 3,checked:false},
  ]}];
  // {day:'6 mo.',dayCode: 6,checked:false},{day:'12 mo.',dayCode: 12,checked:false}
  repeatValue:any[]=[];
  defaultMonth= '1 mo.' 
  tabBar:any;
  getEventId: any;
  add_alert: any;
  notify_image:any;
  localFilePath:any;


  constructor(private camera: Camera, public actionSheetController: ActionSheetController, private toast: Toast, public localNotifications:LocalNotifications,private file: File, public fb:FormBuilder, private transfer: FileTransfer, private imagePicker: ImagePicker,
    private webview: WebView, public sanitizer: DomSanitizer,
    public alertController:AlertController,
    private router: Router, public route:ActivatedRoute,public service: settingsService,
    public datepipe: DatePipe, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) { }

  ngOnInit() {}
 ionViewWillEnter(){
  this.statusBar.backgroundColorByHexString('#0e9bff');
  this.tabBar = document.getElementById('myTabBar');
  this.tabBar.style.display = 'none';
  this.dossage_option=['0.5 tablet','1 tablet','1.5 tablet','2 tablet','1 tsp','1.5 tsp','Others' ]
  this.medicine_option=['Tablet','Syrup','Injection']

    this.todaydate=new Date().toISOString();
    this.addform=this.fb.group({
    event_time:['',[Validators.required]],
    event_datetime:['',[Validators.required]],
    event_category:[this.repeatType,[Validators.required]],
    remainder_repeat:[this.status],
    medicine_type:['',[Validators.required]],
    dossage:['',[Validators.required]],
    quantity:[''],
    event_name:['',[Validators.required]],
    description:[],
    meals:[this.initialMeal,[Validators.required]],
    unit:['']
    })
 }

 valueSet(data){
  this.selectedVital = data.detail.value;
  this.submitted=false;
  if(data.detail.value == "Tablet"){
    this.addform.controls['dossage'].reset();
    this.addform.controls['event_name'].reset();
    const validators = [ Validators.required ];
    this.addform.controls['quantity'].setValidators(validators);
    this.addform.updateValueAndValidity();
    this.addform.controls['quantity'].updateValueAndValidity();
  }
  else if(data.detail.value == "Syrup"){
    this.addform.controls['event_name'].reset();

    this.addform.controls['dossage'].reset();
    this.addform.controls['quantity'].clearValidators();
    this.addform.updateValueAndValidity();
    this.addform.controls['quantity'].updateValueAndValidity(); 
  }
  else if(data.detail.value == "Injection"){
    this.addform.controls['dossage'].reset();
    this.addform.controls['quantity'].clearValidators();
    this.addform.updateValueAndValidity();
    this.addform.controls['quantity'].updateValueAndValidity(); 
  }
 }
 


 get f(){return this.addform.controls }
 
 

//  selectedDays(event){
//    console.log(event.detail.value)
//    this.repeate_days.push(event.detail.value)
//    console.log(this.repeate_days)
// }

 addDeatils(val){  
  this.submitted=true;
   console.log(this.addform.valid)
   if(this.store_photos.length==0){
    this.presentToast("Please add your Medication image")
    return;
   }else if(this.addform.value.remainder_repeat==true && this.repeatValue.length==0){
    this.presentToast('Choose one repeat options');
    return;
   }else if(this.addform.valid){
     if(val.dossage=="Others"){
        val.dossage=val.unit
        console.log(val.dossage)
     }
     let new1 = new Date(val.event_time);
     let gethours = new1.getHours();
     let getMinutes = new1.getMinutes();

     let new2 = new Date(val.event_datetime);
     new2.setHours(gethours)
     new2.setMinutes(getMinutes)
     let event_dateTime = new2.toJSON();
    let medi_details:any= {
     event_name: val.event_name, event_datetime: event_dateTime, value: val.quantity, description: val.description, event_type: "alert_medication",
     event_options: {
          meal: val.meals, remainder_repeat:val.remainder_repeat, repeat_category: val.event_category, repeat_value:this.repeatValue, medicine_type: val.medicine_type, dossage: val.dossage
     } }
     this.addconfirmation(val,medi_details)
  }
 
}

async addconfirmation(val,medi_details){
  this.add_alert = await this.alertController.create({
    header: 'Alert',
    message: 'Are you sure to submit'+' '+ (val.event_name).bold()+' '+'?',
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
          // this.service.commonPost(medi_details).subscribe(res=>{
          //   let getData:any=res;
          //   this.getEventId=res['event']['id'];
          //   this.assignSchedule(val)
          // })
          console.log(medi_details)
          this.database.createAnEvent(medi_details).then((res)=>{
            let getData:any=res;
            this.getEventId=res['event_id'];
            this.assignSchedule(val,medi_details)
          }).catch(error=>{
            console.log(error)
            this.Progress=false;
          });
        }
      }
    ]
  });
  await this.add_alert.present();
}

assignSchedule(val,medi_data){
          let repeatAlarmValue=[];
          let getDate = new Date(val.event_datetime)
          let getTime:any = new Date(val.event_time)
          
          let getHours = getTime.getHours();
          let gettMinutes = getTime.getMinutes();
          let getSeconds = getTime.getSeconds();
          let getMilliseconds = getTime.getMilliseconds();
          getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
          let repeatHours = getDate.getHours();
          let repeatMinutes = getDate.getMinutes();
          if(val.remainder_repeat==true){
            
            if(val.event_category=='days'){
                 repeatAlarmValue=this.repeatValue.map((res,index)=>{
                let ID:any=this.getEventId+''+Number(index+1);
                this.localNotifications.schedule({
                  id: ID,
                  title: val.event_name,
                  icon:'assets/img/play1.png',
                  attachments:["assets/img/play1.png"],
                  text: 'Medication Alert',
                  trigger: {
                    count: 1,
                    every:{ weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                  },
                  data: { secret:this.getEventId },
                  lockscreen:true,
                  vibrate: true,
                  priority: 2,
                  foreground: true,
                  sound: null,
                  actions: [
                    { id: 'yes', title: 'Yes' },
                    { id: 'no',  title: 'No' }
                ]
                })
              })
                  if(this.fileuri.length >0){
                this.sample(this.getEventId,medi_data);
               }else{
                this.Progress=false;
                this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
               }
            //  this.scheduleNotifications(repeatAlarmValue,this.getEventId);
              
            }
            else if(val.event_category=='others'){
              let date=new Date().getUTCMonth();
              let monthValue=Number(this.repeatValue[0].charAt(0));
              console.log(monthValue)
              // let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
              // if(monthValue == 3){
               
              //    this.localNotifications.schedule({
              //       id: uniqueTime,
              //       title: val.event_name,
              //       icon:'assets/img/ico.png',
              //       attachments:[this.store_photos[0]],
              //       text: 'You just got notified :)',
              //       trigger: {
              //         count: 1,
              //         every:{ quarter:date, hour: repeatHours, minute: repeatMinutes },
              //       },
              //       data: { secret:this.getEventId },
              //       lockscreen:true,
              //       vibrate: true,
              //       priority: 2,
              //       foreground: true,
              //       sound: null
              //     })
              //     if(this.fileuri.length >0){
              //       this.sample(this.getEventId);
              //      }else{
              //       this.Progress=false;
              //       this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
              //      }

              // }else if(monthValue == 1){
              // this.localNotifications.schedule({
              //       id: uniqueTime,
              //       title: val.event_name,
              //       icon:'assets/img/ico.png',
              //       attachments:[this.store_photos[0]],
              //       text: 'You just got notified :)',
              //       trigger: {
              //         count: 1,
              //         every:{  weekOfMonth:date, hour: repeatHours, minute: repeatMinutes  },
              //       },
              //       data: { secret:this.getEventId },
              //       lockscreen:true,
              //       vibrate: true,
              //       priority: 2,
              //       foreground: true,
              //       sound: null
              //     })
              //     if(this.fileuri.length >0){
              //       this.sample(this.getEventId);
              //      }else{
              //       this.Progress=false;
              //       this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
              //      }

              // }

             
            }
           
          }
          else{
             let ID:any=this.getEventId+''+1;
            this.localNotifications.schedule({
                            id: ID,
                            title: val.event_name,
                            icon:'assets/img/ico.png',
                            attachments:[this.notify_image],
                            text: 'Medication Alert',
                            trigger: {at: new Date(getDate.getTime())},                           
                            data: { secret:this.getEventId },
                            lockscreen:true,
                            vibrate: true,
                            priority: 2,
                            foreground: true,
                            sound: null
                          })
                          if(this.fileuri.length >0){
                            this.sample(this.getEventId,medi_data);
                           }else{
                            this.Progress=false;
                            this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                           }
                          }
          
}

scheduleNotifications(data,getEventId){
  if(data!='test'){
    this.localNotifications.schedule(data);
  }
  
  if(this.fileuri.length >0){
    this.sample(this.getEventId);
   }else{
    this.Progress=false;
    this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
   }
}

otherCheck(event){
  if(event.detail.value=='Others'){
    const validators = [ Validators.required ];
    this.addform.controls['unit'].setValidators(validators);
    this.addform.updateValueAndValidity();
    this.addform.controls['unit'].updateValueAndValidity();
  }else{
    this.addform.controls['unit'].clearValidators();
    this.addform.updateValueAndValidity();
    this.addform.controls['unit'].updateValueAndValidity(); 
  }
}

checkValue(event){
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
 console.log()
 if(this.addform['value']['event_category']!=undefined && this.addform['value']['event_category']!=null && this.addform['value']['event_category']!=''){
    this.repeatType=this.addform['value']['event_category'];
    // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
    //   this.repeatValue.push(this.defaultMonth);
    // }
   }else{
    this.repeatType='days';
    this.addform['value']['event_category'] = this.repeatType;
   }
   console.log(this.repeatValue)
}

 //}

 sample(event_id,medi_data?){
  // const fileTransfer: FileTransferObject = this.transfer.create();
  
  // let data={id:event_id}
  //  for(var i=0;i<this.fileuri.length;i++){
  // console.log("inside loop test");
  // let options: FileUploadOptions = {
  //  fileKey: 'event_assets',
  //  fileName: this.fileuri[i].fileName,
  //  mimeType: 'multipart/form-data',
  //  params:data,
  //  chunkedMode: false,
  //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
  // }
   
  //   fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
  //     console.log(i)
  //     console.log(this.fileuri.length-i)
  //     console.log(this.fileuri.length)
  //     if(this.fileuri.length-i ==0){
  //       this.Progress=false;
  //      this.presentToast('Medication added successfully');
  //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],{skipLocationChange: true });
  //    }else{
  //    }
  //   },error=>{
  //     this.Progress=false;

  //     this.presentToast("File upload doesn't completed succesfully")
  //     console.log(error)
  //   })   
  //  }
  let data= medi_data;
  data['event_options']['localImagePath'] = this.fileuri;
  this.database.updateAnEventImage(event_id,data).then((res)=>{
      console.log(res);  
      this.Progress=false;
      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],{skipLocationChange: true });
  })
  .catch(error=>{ 
    this.Progress=false;
    console.log(error) 
  });


}


selectimage(){
  let options={
    maximumImagesCount: 3,
    quality: 100,
    width: 600,
    height: 600, 
    outputType: 0
  }
  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
           this.notify_image=results[0];
          this.store_photos.push(this.webview.convertFileSrc(results[i]))
          console.log(this.store_photos,'webviewuri')
          this.localFilePath = results[i]; 
          this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry: FileEntry) => {
            return new Promise((resolve, reject) => {
              fileEntry.file(meta => resolve(meta), error => reject(error));
            });
          }).then((fileMeta: IFile) => {
              console.log(fileMeta)
              this.audioFileName= fileMeta.name;
              this.cdvFilePath = fileMeta['localURL'];
              this.fileuri.push({"localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false})  
              console.log(this.fileuri,'fileuri')               
          })
    }
  },error => {
    console.log(error) 
  });
}

async AddImage() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Albums',
    buttons: [{
      text: 'Gallery',
      role: 'image',
      icon: 'image',
      handler: () => {
        this.selectimage();
        console.log('camera clicked');
      }
    }, {
      text: 'camera',
      icon: 'camera',
      handler: () => {
        this.takePicture();
        console.log('gallery clicked');
      }
    
    }]
  });
  await actionSheet.present();
}

takePicture(){
  var options: CameraOptions = {
      quality: 100,
      saveToPhotoAlbum: true,
      correctOrientation: true
  };
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.store_photos.push(this.webview.convertFileSrc(imageData))
    console.log(this.store_photos,'webviewuri')
    this.localFilePath = imageData; 
    this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry: FileEntry) => {
      return new Promise((resolve, reject) => {
        fileEntry.file(meta => resolve(meta), error => reject(error));
      });
    }).then((fileMeta: IFile) => {
        console.log(fileMeta)
        this.audioFileName= fileMeta.name;
        this.cdvFilePath = fileMeta['localURL'];
        this.fileuri.push({"localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false})  
        console.log(this.fileuri,'fileuri')               
    })
  }, (err) => {
    // Handle error
  });
}

async presentToast(message: string) {
  this.toast.show(message, '2000', 'bottom').subscribe(
    toast => { 
      console.log(toast); 
    });
  
}


removeImage(i){
  this.store_photos.splice(i, 1);
  // if(this.store_photos.length==0){
  //   this.active=false;
  //   }
  }

   cancel(){
     this.addform.reset();
     this.router.navigate(['self-care-tabs/tabs/tab1/alerts'])
   }
  
   _keyPress(event: any) {
    const pattern = /([\d]+)/;
    let inputChar = String.fromCharCode(event.charCode);

    if (event.charCode != 0) {
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }

   ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#0e9bff');
    this.tabBar.style.display = 'flex';
   }

}