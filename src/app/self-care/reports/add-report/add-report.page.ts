import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../../environments/environment'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.page.html',
  styleUrls: ['../reports.page.scss']
})
export class AddReportPage implements OnInit {

  reportForm: FormGroup
 
  store_photos:any[]=[];
  tabBar: any;
  audioFileName:any;
  cdvFilePath:any;
  fileuri:any[]=[];
  active:boolean=false;
  image_save_status:boolean=false;
  reportTypeValue:any[]=[];
  showBackdrop: boolean = false;
  Progress:boolean=false;
  todaydate:any;
  year:any;
  submitted:boolean=false;
  add_alert: any;
  localFilePath:any;

  constructor(private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider,public alertController: AlertController,private toast: Toast,private camera: Camera, public actionSheetController: ActionSheetController, private fb: FormBuilder, public route:ActivatedRoute,public service:settingsService, public router: Router, public datepipe:DatePipe, private file: File, private transfer: FileTransfer, private imagePicker: ImagePicker, private webview: WebView, private crop: Crop,public sanitizer: DomSanitizer,public modalController: ModalController,public toastController: ToastController,  private statusBar: StatusBar) { }
   
  ngOnInit() {
    this.todaydate=new Date().toISOString();
    this.year= new Date().getFullYear()
    this.reportForm=this.fb.group({
    'event_category': ['',[Validators.required]],
    'others':      [''],   
    'event_name':       ['',[Validators.required]],
    'event_datetime':   [this.datepipe.transform(new Date(),"dd MMM yyyy"),[Validators.required]],
    'description':      ['']    
    });
  }


  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ea4e4e');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';

    // this.service.reportType().subscribe(res=>{
    //  console.log(res)
    //  this.reportTypeValue=res['enum_masters'];
    //  this.reportTypeValue.push("Others")
    //  console.log(this.reportTypeValue)
    // })

    this.databaseSummary.getEnumMasters('report').then((res)=>{
      this.reportTypeValue=res['enum_masters'];
      this.reportTypeValue.push("Others");
    })
    .catch(error=>{ console.log(error) });
  }

  get f(){return this.reportForm.controls }


  close() {
    this.router.navigate(['/self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
  }
  
  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
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
            this.store_photos.push(this.webview.convertFileSrc(results[i]))
            console.log(this.store_photos,'webviewuri')
                  this.active=true;
            this.localFilePath = results[i];
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
    }, (err) => {
      console.log(err) 
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
   });
  }

sample(event_id){
    const fileTransfer: FileTransferObject = this.transfer.create();
    
    let data={id:event_id}
     for(var i=0;i<this.fileuri.length;i++){

    let options: FileUploadOptions = {
     fileKey: 'event_assets',
     fileName: this.fileuri[i].fileName,
     mimeType: 'multipart/form-data',
     params:data,
     chunkedMode: false,
     headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
    }
      console.log(this.fileuri,'file')
     
      fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
         if(this.fileuri.length-i ==0){
           this.Progress=false;
         this.presentToast('Report added successfully');
         this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
         }else{
            
         }
      },error=>{
        console.log('alert')
      })    }

  }
  
  reportSubmit(value){
    this.submitted=true;
    console.log(value)
    if(this.reportForm.valid){
      if(value['event_category']=='Others'){
        if(value['others']!=''){

        }else{
          this.presentToast("Please enter your report type name");
          return false;
        }
      }
      if(this.store_photos.length==0){
        this.presentToast("Please add your report image");
        return false;
      }else{
      this.addconfirmation(value);
    }
    }else if(this.reportForm['value']['event_name']==""){
        this.presentToast("Please enter your Name")
    }else if(this.reportForm['value']['event_datetime']==""){
        this.presentToast("Please select your report date")
    }else if(this.reportForm['value']['event_category']==""){
        this.presentToast("Please select your report type")
    }else{

    }
    
  }

  async addconfirmation(value){
    this.add_alert = await this.alertController.create({
      header: 'Report',
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
            let details=value;
            if(value['event_category']=='Others'){
              details['event_category']=details['others']
            }
            details['event_type']='report';
            console.log(details)
            let new1 = new Date(value.event_datetime);
          
            let event_dateTime = new1.toJSON();
            let data={'event_name':value.event_name,'event_datetime':event_dateTime,'event_category':details['event_category'],'description':value.description,'event_type':'report'};
            // this.service.commonPost(data).subscribe(res=>{
            //   console.log(res)
            //  if(this.fileuri.length >0){ 
            //   let event_id:any=res['event']['id'];
            //    this.sample(event_id); 
            //  }else{
            //   this.Progress=false;
            //   this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
            //  }
             
            // },error=>{
            //         this.image_save_status=true;
            //   console.log('')
            // })
            this.database.createAnEvent(data).then((res)=>{
              console.log(res);  
              if(this.fileuri.length >0){ 
                 let event_id:any=res['event_id'];
                 this.AddLocalImageData(event_id);
                  
              }else{
                this.Progress=false;
                this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
              }
            })
            .catch(error=>{ 
              this.image_save_status=true;
            });
          }
        }
      ]
    });
    await this.add_alert.present();
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
        this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
    })
    .catch(error=>{ 
      this.Progress=false;
      console.log(error) 
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
   if(this.store_photos.length==0){
     this.active=false;
     }
   }
}
