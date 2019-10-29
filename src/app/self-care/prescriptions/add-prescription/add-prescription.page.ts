import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../../environments/environment'
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.page.html',
  styleUrls: ['../prescriptions.page.scss']
})
export class AddPrescriptionPage implements OnInit {
   @ViewChild('doc_name',{ static: true }) Doc_name;

  name:any;
  prescriptionForm: FormGroup
  pres_details: any;
  cdvFilePath1:any[]=[];
  store_photos:any[]=[];
  tabBar: any;
  audioFileName:any;
  cdvFilePath:any;
  fileuri:any[]=[];
  active:boolean=false;
  image_save_status:boolean=false;
  showBackdrop: boolean = false;
  Progress:boolean=false;
  todaydate:any;
  year:any;
  submitted:boolean=false;
  localFilePath:any;
  add_alert: any;
  constructor(private toast: Toast,private camera: Camera, public actionSheetController: ActionSheetController, private fb: FormBuilder, public route:ActivatedRoute,
    public service:settingsService, public router: Router, public datepipe:DatePipe,
     private file: File, private transfer: FileTransfer, private imagePicker: ImagePicker,
      private webview: WebView, private crop: Crop,public sanitizer: DomSanitizer,
      public modalController: ModalController,public toastController: ToastController,
        private statusBar: StatusBar,public alertController: AlertController,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
   }

  ngOnInit() {
    this.todaydate=new Date().toISOString();
    this.year= new Date().getFullYear()
    console.log(this.todaydate)
    this.prescriptionForm=this.fb.group({
    'event_name':       ['',[Validators.required]], 
    'event_datetime':   [this.datepipe.transform(new Date(),"dd MMM yyyy"),[Validators.required]],
    'description':      ['',[]]
    });
  }
  get f(){return this.prescriptionForm.controls }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }
ionViewDidEnter(){
    this.Doc_name.setFocus();
  }
 

  close() {
    this.router.navigate(['/self-care-tabs/tabs/tab1/prescriptions'],{skipLocationChange: true });
  }
  
  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar.style.display = 'flex';
  }

  captureimage(){
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
            this.store_photos.push(this.webview.convertFileSrc(results[i]))
            console.log(this.store_photos,'webviewuri')
            this.active=true;
            this.localFilePath = results[i];
            //this.localFilePath= results[i]      
            this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry: FileEntry) => {
              return new Promise((resolve, reject) => {
                fileEntry.file(meta => resolve(meta), error => reject(error));
              });
            }).then((fileMeta: IFile) => {
                console.log(fileMeta)
                this.audioFileName= fileMeta.name;
                this.cdvFilePath = fileMeta['localURL'];
                
                this.fileuri.push({ "localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false })  
                console.log(this.fileuri,'fileuri')               
            })
      }
    },error => {
      console.log(error) 
    });
  }

  sample(event_id){
    const fileTransfer: FileTransferObject = this.transfer.create();
    
    let data={id:event_id}
     for(var i=0;i<this.fileuri.length;i++){
    console.log("inside loop test");
    let options: FileUploadOptions = {
     fileKey: 'event_assets',
     fileName: this.fileuri[i].fileName,
     mimeType: 'multipart/form-data',
     params: data,
     chunkedMode: false,
     headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
    }
     
      fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
      //  this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions']);
        console.log(i)
        console.log(this.fileuri.length-i)
        console.log(this.fileuri.length)
        if(this.fileuri.length-i ==0){
         this.Progress=false;
         this.presentToast('Prescription added successfully');
         this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions'],{skipLocationChange: true });
       }else{
       }
         

      },error=>{
        this.Progress=false;
        this.presentToast("File upload doesn't completed succesfully")
        console.log(error)
      })   
     }

  }
  
  prescriptionDetails(value){
    this.submitted=true;
    if(this.prescriptionForm.valid)
    {
      if(this.store_photos.length==0){
         this.presentToast("Please add your Prescription image")
      }else{
        this.addconfirmation(value)
      }      
    }else if(this.prescriptionForm['value']['event_name']==""){
        this.presentToast("Please enter your Doctor Name")
    }else if(this.prescriptionForm['value']['event_datetime']==""){
        this.presentToast("Please select the Prescription Date")
    }else{
    }
    
  }
  
async addconfirmation(value){
  this.add_alert = await this.alertController.create({
    header: 'Prescription',
    message: 'Are you sure to submit'+' '+ (value.event_name).bold()+' '+'?',
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
         this.image_save_status=true;
         //let date=this.datepipe.transform(value.event_datetime,"dd MMM yyyy")
         let new1 = new Date(value.event_datetime);
          
         let event_dateTime = new1.toJSON();
         let details={'event_name':value.event_name,'event_datetime':event_dateTime,'description':value.description,'event_type':'prescription'};
         this.database.createAnEvent(details).then((res)=>{
          console.log(res);  
          if(this.fileuri.length >0){ 
             let event_id:any=res['event_id'];
             this.AddLocalImageData(event_id);
              
          }else{
            this.Progress=false;
            this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions'],{skipLocationChange: true });
          }
        })
        .catch(error=>{ 
          this.Progress=false;
          this.image_save_status=true;
        });
        //  this.service.commonPost(details).subscribe(res=>{
        //   if(this.fileuri.length >0){ 
        //   let event_id:any=res['event']['id'];
        //    this.sample(event_id); 
        //   }else{
        //    this.Progress=false;
        //    this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions'],{skipLocationChange: true });

        //   }
        //  //this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions']);
        //  },error=>{
        //   this.image_save_status=true;
        //   console.log('')
        //  }) 
        }
      }
    ]
  });
  await this.add_alert.present();
}

  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  AddLocalImageData(event_id){
    let data={
      "event_options": {
        "localImagePath": this.fileuri
      }
    }
    this.database.updateAnEventImage(event_id,data).then((res)=>{
        console.log(res);  
        this.Progress=false;
        this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions'],{skipLocationChange: true });
    })
    .catch(error=>{ console.log(error) });
  }


  removeImage(i){
   this.store_photos.splice(i, 1);
   this.fileuri.splice(i, 1);
   if(this.store_photos.length==0){
     this.active=false;
     }
   }
 

   async editImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Gallery',
        role: 'image',
        icon: 'image',
        handler: () => {
          this.captureimage();
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
          this.active=true;
          this.localFilePath = imageData;
    this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry: FileEntry) => {
      return new Promise((resolve, reject) => {
        fileEntry.file(meta => resolve(meta), error => reject(error));
      });
    }).then((fileMeta: IFile) => {
        console.log(fileMeta)
        this.audioFileName= fileMeta.name;
        this.cdvFilePath = fileMeta['localURL'];
        this.fileuri.push({ "localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false })  
        console.log(this.fileuri,'fileuri')               
    })
  
  }, (err) => {
    // Handle error
    console.log(err);
  });
  }
  
}