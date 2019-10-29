import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ModalController, AlertController,NavParams, Platform, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../../../environments/environment';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.page.html',
    styleUrls: ['../health-diary.page.scss']
  })
  export class UploadPage{
    uploadform:FormGroup
    related_option:any
    alertcontrol: HTMLIonAlertElement;
    description: any;
    event_name: any;
    fileName: any;
    OriginalFileName: string;
    audioRecordPath: string;
    submitted:boolean=false;
    upload_datas: any;

    constructor(private toast: Toast,public navParams: NavParams,public toastController:ToastController, public fb: FormBuilder,public modalCtrl: ModalController, private router: Router,private transfer: FileTransfer,private mediaCapture: MediaCapture,private media: Media,private file: File,public platform: Platform,public alertController: AlertController,
      public service:settingsService,public _zone: NgZone,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider){
      this.fileName=this.navParams.get('fileName');
      this.audioRecordPath=this.navParams.get('path');

    
    }


    
    ionViewWillEnter(){
      // this.service.relatedto().subscribe((res)=>{
      //   this.related_option=res["enum_masters"]
      // })

      this.databaseSummary.getEnumMasters('health_diary').then((res)=>{
          this.related_option=res["enum_masters"]
      })
    .catch(error=>{ console.log(error) });
        this.uploadform=this.fb.group({
            event_name:['General',[Validators.required]],
            description:[],          
            })
         }
    
    cancel(){
        this.recordBack();
    }
 
get f(){return this.uploadform.controls }

 async recordBack(){
        console.log("hi")
       this.alertcontrol = await this.alertController.create({
        header: 'Reset',
        backdropDismiss: false,
        message: 'Do you want to Discard?',
        buttons: [
          { 
            text: 'Yes',
            role: 'cancel',
            handler:()=>{
            this.modalCtrl.dismiss();
            }
          }, {
            text: 'No',
            handler: () => {                      
            }
          }
        ]
      
      });
      await this.alertcontrol.present();
     }
uploadfunc(val){
        this.submitted=true
        if(this.uploadform.valid){
            this.description=val.description;
            this.event_name = val.event_name;
            this.uploadDeatils();
        }
     }
 uploadDeatils(){        

              let recordParams = {
                "event_name": this.event_name,
                "description": this.description,
                "event_type": "health_diary",
                "event_option":{ "file_name":this.fileName }
              }

              let options: FileUploadOptions = {
                fileKey: 'event_assets',
                fileName: this.fileName,
                mimeType: 'multipart/form-data',
                params:recordParams,
                chunkedMode: false,
                headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
              }
        
             
              let data={
                "path":this.audioRecordPath,
                "api": environment.apiUrl+'events',
                "options":options
              }

              
              let uploadData = { 
                                'event_name':this.event_name,
                                'description':this.description,
                                'event_type':'health_diary'
                               }; 
            //this.modalCtrl.dismiss(data);
            this.modalCtrl.dismiss(uploadData);
        
         }
      
async presentToast(message) {
  this.toast.show(message, '2000', 'bottom').subscribe(
    toast => { 
      console.log(toast); 
    });
      }
    


  }