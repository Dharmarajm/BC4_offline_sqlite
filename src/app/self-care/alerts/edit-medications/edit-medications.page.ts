import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications  } from '@ionic-native/local-notifications/ngx';
import { ImagePicker  } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ToastController,AlertController } from '@ionic/angular';
import { environment } from '../../../../environments/environment'
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';
import { NetworkService } from '../../../network-connectivity/network-service';

@Component({
  selector: 'app-edit-medications',
  templateUrl: './edit-medications.page.html',
  styleUrls: ['../alerts.page.scss']
})
export class EditMedicationPage implements OnInit {
  tabBar: any;
  store_photos:any[]=[];
  fileuri:any[]=[];
  audioFileName: any;
  cdvFilePath: any;
  editform:FormGroup
  todaydate:any;
  edit_details:any;
  edit_options:any;
  meals_option:any;
  dossage_option:any[]=['0.5 tablet','1 tablet','1.5 tablet','2 tablet','1 tsp','1.5 tsp','Others' ]
  medicine_option:any[]=['Tablet','Syrup','Injection']
  showoptions:any;
  submitted:boolean=false;
  selectedVital:any;
  status:boolean;
  Progress:boolean=false;
  repeatType:string='days';
  repeatOrder=[{'days':[{day:'Mon',dayCode: 1,checked:false}, {day:'Tue',dayCode: 2,checked:false}, {day:'Wed',dayCode: 3,checked:false},{day: 'Thu',dayCode: 4,checked:false},{ day:'Fri',dayCode: 5,checked:false},{day:'Sat',dayCode: 6,checked:false},{day:'Sun',dayCode: 0,checked:false}],
  'others':[{day:'1 mo.',dayCode: 1,checked:false},{day:'3 mo.',dayCode: 3,checked:false},
 ]}];
  repeatValue:any[]=[];
  defaultMonth= '1 mo.' 
  edit_all_image:any[]=[];
  originalArray:any[]=[];
  spliceIndexArray:any[]=[];
  environment:any;
  initialMeal:any;
  assignDossageOption:any
  unitValue:any; 
  initialValue:any;
  renderForm:boolean=false;
  NotifyRepeat:boolean=false;
  Originalvalue:any[]=[];
  getEventId: any;
  add_alert: HTMLIonAlertElement;
  localFilePath:any;
  isNetwork:boolean;


  constructor(private toast: Toast,private camera: Camera, public actionSheetController: ActionSheetController,public localNotifications:LocalNotifications,public alertController:AlertController,public toastController: ToastController,
    private router: Router, public route:ActivatedRoute,public service: settingsService,
    public datepipe: DatePipe, private file: File, public fb:FormBuilder, private transfer: FileTransfer, 
    private imagePicker: ImagePicker, private webview: WebView, public sanitizer: DomSanitizer,private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider,private networkProvider: NetworkService) {
      this.environment = environment.ImageUrl;
      this.route.queryParams.subscribe(params => {
        if (params && params.medi_alertData) {
          this.edit_details= JSON.parse(params.medi_alertData);
          this.edit_options=this.edit_details 
          let duplicateData = JSON.parse(params.medi_alertData);
          if(this.edit_details['event_options']['remainder_repeat']==true){
            this.repeatType=this.edit_details['event_options']['repeat_category'];
            this.repeatValue = duplicateData['event_options']['repeat_value'];
            this.Originalvalue=this.edit_details['event_options']['repeat_value'];
            if(this.edit_details['event_options']['repeat_category']=='others'){
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
          console.log(this.edit_details)
          console.log(this.edit_details.id)
          this.initialValue = this.edit_details['event_name'];
          this.initialMeal = this.edit_details['event_options']['meal'];
          console.log(this.initialValue)
          this.status=this.edit_details['event_options']['remainder_repeat'];
          this.NotifyRepeat=this.edit_details['event_options']['remainder_repeat'];
          console.log(this.repeatValue,this.Originalvalue);

        }

      })
    }

  ngOnInit() {}
  ionViewWillEnter(){
    this.todaydate=this.edit_details['event_datetime']
    this.renderForm=false;
    
    let getIndex=this.dossage_option.findIndex(res=>res==this.edit_details['event_options']['dossage']);
    console.log(getIndex)
    
    if(getIndex==-1){
      this.assignDossageOption='Others';
      this.unitValue=this.edit_details['event_options']['dossage'];
    }else{
      this.assignDossageOption=this.edit_details['event_options']['dossage']
    }

    this.editform=this.fb.group({
      event_time:    [this.edit_details['event_datetime'],[Validators.required]],
      event_datetime:[this.edit_details['event_datetime'],[Validators.required]],
      event_category:[this.edit_details['event_options']['repeat_category'],[Validators.required]],
      remainder_repeat: [this.status],
      medicine_type: [this.edit_details['event_options']['medicine_type'],[Validators.required]],
      dossage:       [this.assignDossageOption,[Validators.required]],
      quantity:      [''],
      event_name:    [this.initialValue,[Validators.required]],
      description:   [this.edit_details['description']],
      meals:         [this.initialMeal,[Validators.required]],
      unit:          [this.unitValue]
      })
      
      this.initialValidator(this.edit_details['event_options']['medicine_type'],getIndex);

      // this.edit_all_image=[];
      // this.originalArray=[];
      // this.fileuri=[];
      // this.spliceIndexArray=[];
      // let assets = this.edit_details.event_assets;
      //   console.log(this.edit_all_image)
      //   for(var i in assets){
      //     let mapUrl=this.environment+assets[i]["url"]
      //     this.edit_all_image.push({"uri":mapUrl});
      //     this.originalArray.push({"uri":mapUrl})   
      // }
      this.edit_all_image=[];
      this.originalArray=[];
      this.fileuri=[];
      this.spliceIndexArray=[];
      let localAssets = this.edit_details["event_options"];
    
      let globalassets = this.edit_details["event_assets"];
      if(this.networkProvider.isNetworkOnline){
        this.isNetwork = true;
      }else{
        this.isNetwork = false;
      }
      
      for(let i in localAssets["localImagePath"]){
          let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"],"globalURI": null,"cdvFilePath":localAssets["localImagePath"][i]["cdvFilePath"],"fileName":localAssets["localImagePath"][i]["fileName"],"delete":localAssets["localImagePath"][i]["delete"] };
          if(globalassets!=null){
            if(globalassets.length>i){
              let globeURL = this.environment+globalassets[i]["url"];
              mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
            }
          }
        console.log(mapUrl) 
        this.edit_all_image.push(mapUrl);
        this.originalArray.push(mapUrl);
      }
      console.log(this.edit_all_image)

      this.statusBar.backgroundColorByHexString('#0e9bff');
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
  }

 valueSet(data){

      this.selectedVital = data.detail.value;
      this.submitted=false;
      if(data.detail.value == "Tablet"){
        this.editform.controls['dossage'].reset();
        this.editform.controls['event_name'].reset();
        const validators = [ Validators.required ];
        // this.editform.controls['quantity'].setValidators(validators);
        // this.editform.updateValueAndValidity();
        // this.editform.controls['quantity'].updateValueAndValidity();
      }
      else if(data.detail.value == "Syrup"){
        this.editform.controls['event_name'].reset();
    
        this.editform.controls['dossage'].reset();
        //this.editform.controls['quantity'].clearValidators();
        this.editform.updateValueAndValidity();
        //this.editform.controls['quantity'].updateValueAndValidity(); 
      }
      else if(data.detail.value == "Injection"){
        this.editform.controls['dossage'].reset();
        //this.editform.controls['quantity'].clearValidators();
        this.editform.updateValueAndValidity();
        //this.editform.controls['quantity'].updateValueAndValidity(); 
      }
 }

 initialValidator(data,index){
  const validators = [ Validators.required ];
  if( data== "Tablet"){
    // this.editform.controls['quantity'].setValidators(validators);
    // this.editform.updateValueAndValidity();
    // this.editform.controls['quantity'].updateValueAndValidity();
  }
  if(index==-1){
    this.editform.controls['unit'].setValidators(validators);
    this.editform.updateValueAndValidity();
    this.editform.controls['unit'].updateValueAndValidity();
  }
  this.renderForm=true; 

  
 }
 


 get f(){
   return this.editform.controls
   }



 editDeatils(val){ 
    this.submitted=true;
    console.log(val)
    if(this.edit_all_image.length==0){
     this.presentToast("Please add your Medication image")
    }
    else if(this.editform.value.remainder_repeat==true && this.repeatValue.length==0){
      this.presentToast('Choose one repeat options');
      return;
     }else if(this.editform.valid){
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
        event_name: val.event_name,
        event_datetime: event_dateTime,
        value: Number(val.quantity) + Number(this.edit_details['value']),
        description: val.description,
        event_type: "alert_medication",
        event_options: {
              meal: val.meals,
              remainder_repeat:val.remainder_repeat,
              repeat_category: val.event_category,
              repeat_value:this.repeatValue,
              medicine_type: val.medicine_type,
              dossage: val.dossage
        }    
      }
      this.addconfirmation(val,medi_details)
    }
 }
 async addconfirmation(val,medi_details){
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
          // this.service.commonUpdatePost(this.edit_details['id'],medi_details).subscribe(res=>{
          //   let getData:any=res;
          //  this.getEventId=this.edit_details['id'];
          //   if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){            
          //     let cancelArray=[];  
          //     for(var i in this.Originalvalue){
          //       if(+i>this.repeatValue.length-1){
          //         let ID:any=this.getEventId+''+Number(+i+1);
          //         cancelArray.push(ID)
          //       }
          //     }
          //       this.assignOrCancelNotifications(cancelArray,val,this.getEventId);           
          //   }else{
          //     this.assignSchedule(val);
          //   }               
          // },error=>{
          // })

          this.database.updateAnEvent(this.edit_details['event_id'],medi_details).then((res)=>{
            let getData:any=res;
            this.getEventId=this.edit_details['event_id'];
            if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){            
              let cancelArray=[];  
              for(var i in this.Originalvalue){
                if(+i>this.repeatValue.length-1){
                  let ID:any=this.getEventId+''+Number(+i+1);
                  cancelArray.push(ID)
                }
              }
                this.assignOrCancelNotifications(cancelArray,val,this.getEventId,medi_details);           
            }else{
              this.assignSchedule(val,medi_details);
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

 assignSchedule(val,medi_details?){
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
                  console.log(ID)
                  this.localNotifications.schedule({
                  id: ID,
                  title: val.event_name,
                  attachments:this.store_photos,
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
                  sound: null
                });
              })
              // if(this.spliceIndexArray.length>0){ 
              //   console.log('delete')
              //   this.deleteImage(medi_details);
              // }else if(this.fileuri.length >0){ 
              //   console.log('fileuri')
              //   let event_id=this.getEventId;
              //   this.sample(event_id,medi_details); 
              // }else{
              //   this.Progress=false;
              //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
              // }
                this.deleteImage(medi_details);
              //this.scheduleNotifications(repeatAlarmValue,getEventId);
              
            }
            else if(val.event_category=='others'){
             // this.scheduleNotifications("test",getEventId); 
              let data=new Date();
              let monthValue=Number(this.repeatValue[0].charAt(0));
              console.log(monthValue)
              let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
              if(monthValue == 3){
                 this.localNotifications.schedule({
                    id: uniqueTime,
                    title: val.event_name,
                    attachments:this.store_photos,
                    text: 'You just got notified :)',
                    trigger: {
                      count: 1,
                      every:{ quarter:data.getUTCMonth(), hour: repeatHours, minute: repeatMinutes },
                    },
                    data: { secret:this.getEventId },
                    lockscreen:true,
                    vibrate: true,
                    priority: 2,
                    foreground: true,
                    sound: null
                  });

                  this.deleteImage(medi_details);
                  // if(this.spliceIndexArray.length>0){ 
                  //   console.log('delete')
                  //   this.deleteImage(medi_details);
                  // }else if(this.fileuri.length >0){ 
                  //   console.log('fileuri')
                  //   let event_id=this.getEventId;
                  //   this.sample(event_id,medi_details); 
                  // }else{
                  //   this.Progress=false;
                  //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                  // }
                 // this.scheduleNotifications(repeatAlarmValue,getEventId);


              }else if(monthValue == 1){
                     this.localNotifications.schedule({
                    id: uniqueTime,
                    title: val.event_name,
                    attachments:this.store_photos,
                    text: 'You just got notified :)',
                    trigger: {
                      count: 1,
                      every:{ month:data.getUTCMonth(), hour: repeatHours, minute: repeatMinutes },
                    },
                    data: { secret:this.getEventId },
                    lockscreen:true,
                    vibrate: true,
                    priority: 2,
                    foreground: true,
                    sound: null
                  });

                  this.deleteImage(medi_details);
                  // if(this.spliceIndexArray.length>0){ 
                  //   console.log('delete')
                  //   this.deleteImage(medi_details);
                  // }else if(this.fileuri.length >0){
                  //   console.log('fileuri') 
                  //   let event_id=this.getEventId;
                  //   this.sample(event_id,medi_details); 
                  // }else{
                  //   this.Progress=false;
                  //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                  // }
                 // this.scheduleNotifications(repeatAlarmValue,getEventId);

              }
             
            }
           
          }
          else{
            let ID:any=this.getEventId+''+1;
            console.log(ID)
            let data=new Date();
            this.localNotifications.schedule({
                            id: ID,
                            title: val.event_name,
                            attachments:this.store_photos,
                            text: 'Medication Alert',
                            trigger: {at: new Date(getDate.getTime())},
                            data: { secret:this.getEventId },
                            lockscreen:true,
                            vibrate: true,
                            priority: 2,
                            foreground: true,
                            sound: null
                          });
                          // if(this.spliceIndexArray.length>0){
                          //   console.log('delete') 
                          //   this.deleteImage(medi_details);
                          // }else if(this.fileuri.length >0){ 
                          //   console.log('fileuri') 
                          //   let event_id=this.getEventId;
                          //   this.sample(event_id,medi_details); 
                          // }else{
                          //   this.Progress=false;
                          //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                          // }
                          this.deleteImage(medi_details);
          //  this.scheduleNotifications(repeatAlarmValue,getEventId); 
          }
}

// scheduleNotifications(data,getEventId){
//   if(data!='test'){
//     this.localNotifications.schedule(data);
//   }
//   if(this.spliceIndexArray.length>0){ 
//     this.deleteImage();
//   }else if(this.fileuri.length >0){ 
//   let event_id:any=this.edit_details['id'];
//     this.sample(event_id); 
//   }else{
//     this.Progress=false;
//     this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
//   }
// }

  assignOrCancelNotifications(cancelArray,val,getEventId,medi_details?){
    this.localNotifications.cancel(cancelArray).then((res)=>{
      console.log(res);
      this.assignSchedule(val,medi_details);
    });
  }
  
  otherCheck(event){
    if(event.detail.value=='Others'){
      const validators = [ Validators.required ];
      this.editform.controls['unit'].setValidators(validators);
      this.editform.updateValueAndValidity();
      this.editform.controls['unit'].updateValueAndValidity();
    }else{
      this.editform.controls['unit'].clearValidators();
      this.editform.updateValueAndValidity();
      this.editform.controls['unit'].updateValueAndValidity(); 
    }
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

 if(this.editform['value']['event_category']!=undefined && this.editform['value']['event_category']!=null && this.editform['value']['event_category']!=''){
    this.repeatType=this.editform['value']['event_category'];
    // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
    //   this.repeatValue.push(this.defaultMonth);
    // }
   }else{
    this.repeatType='days';
    this.editform['value']['event_category'] = this.repeatType;
   }
   console.log(this.repeatValue)
}

 
 sample(event_id,medi_details?){
  // const fileTransfer: FileTransferObject = this.transfer.create();
  // let data={id:event_id}
  //  for(var i=0;i<this.fileuri.length;i++){
  // let options: FileUploadOptions = {
  //  fileKey: 'event_assets',
  //  fileName: this.fileuri[i].fileName,
  //  mimeType: 'multipart/form-data',
  //  params:data,
  //  chunkedMode: false,
  //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
  // }
  //   fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
    
  //    if(this.fileuri.length-i ==0){
  //     this.Progress=false;
  //      this.presentToast('Prescription added successfully');
  //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],{skipLocationChange: true });
  //    }else{

  //    }
  //   },error=>{
  //     this.Progress=false;
  //   console.log(error)
  //   })  
  //   }

  let data = medi_details;
  data['event_options']['localImagePath'] = this.edit_all_image;
  console.log(event_id,data)
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
          //this.edit_all_image.push({"uri":this.webview.convertFileSrc(results[i])});
         
          this.localFilePath = results[i]; 
          this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry: FileEntry) => {
            return new Promise((resolve, reject) => {
              fileEntry.file(meta => resolve(meta), error => reject(error));
            });
          }).then((fileMeta: IFile) => {
              console.log(fileMeta)
              this.audioFileName= fileMeta.name;
              this.cdvFilePath = fileMeta['localURL'];
              this.edit_all_image.push({"localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false})
              this.fileuri.push({"uri":this.cdvFilePath,"fileName":this.audioFileName})
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
//this.edit_all_image.push({"uri":this.webview.convertFileSrc(imageData)});
          console.log(this.edit_all_image,'webviewuri')
          this.localFilePath = imageData;  
          this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry: FileEntry) => {
            return new Promise((resolve, reject) => {
              fileEntry.file(meta => resolve(meta), error => reject(error));
            });
          }).then((fileMeta: IFile) => {
              console.log(fileMeta)
              this.audioFileName= fileMeta.name;
              this.cdvFilePath = fileMeta['localURL'];
              this.edit_all_image.push({"localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false})
              this.fileuri.push({"uri":this.cdvFilePath,"fileName":this.audioFileName})  
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


   cancel(){   
     this.router.navigate(['self-care-tabs/tabs/tab1/alerts'])
   }

  
   deleteImage(medi_details){
    
    // let delete_detail={"index":this.spliceIndexArray,"id":this.edit_details["id"]};
    
    // this.service.deleteImage(delete_detail).subscribe(res=>{
    //     console.log(res)    
    //     if(this.fileuri.length >0){ 
    //       
    //        this.sample(event_id); 
    //     }else{
    //      this.Progress=false;
    //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
    //     }   
    // })
    let event_id=this.getEventId;
    console.log(event_id,'deleteImage')
    this.sample(event_id,medi_details); 
  }

  removeImg(index,image,originalArray){
    // let result = originalArray.some(el=>el.uri === image.uri);
    
    // if(result==true){
     
    //     var index1 = this.originalArray.findIndex(p => p.uri == image.uri)
       
       
    //     this.spliceIndexArray.push(index1);
        
    //     this.edit_all_image.splice(index,1);
      
    // }else{
      
    //   this.edit_all_image.splice(index,1);
      
    //   let fileResult = this.fileuri.some(el=>el.uri === image.uri);
    //   if(fileResult==true){
       
    //    var index1 = this.fileuri.findIndex(p => p.uri == image.uri)
       
    //     this.fileuri.splice(index1,1);
    //   }
      
    // }

    let result = originalArray.some(el=>el.localURI === image.localURI);

    //let result1 = originalArray.some(el=>el.globalURI === image.globalURI);

    if(result==true && image.globalURI!=null){
     
        var index1 = this.originalArray.findIndex(p => p.localURI == image.localURI && p.globalURI == image.globalURI )
        
        this.spliceIndexArray.push(index1);
        
        this.edit_all_image[index1]["delete"]=true;
      
    }else{
      
      this.edit_all_image.splice(index,1);
      
      let fileResult = this.fileuri.some(el=>el.localURI === image.localURI);
      if(fileResult==true){
        
        var index1 = this.fileuri.findIndex(p => p.localURI == image.localURI)
        
        this.fileuri.splice(index1,1);
      }
      
    }
    console.log(this.edit_all_image);
    console.log(this.fileuri);
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