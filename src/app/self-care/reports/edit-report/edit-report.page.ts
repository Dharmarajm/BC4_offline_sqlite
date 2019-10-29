import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { environment } from '../../../../environments/environment'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';
import { NetworkService } from '../../../network-connectivity/network-service';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.page.html',
  styleUrls: ['../reports.page.scss']
})
export class EditReportPage implements OnInit {
  data:any;
  editReport:FormGroup
  datetime:any;
  tabBar: any;
  reportTypeValue:any[]=[];
  originalReportType:any[]=[];
  
  store_photos:any[]=[];
  audioFileName:any;
  cdvFilePath:any;
  fileuri:any[]=[];
  active:boolean=false;
  report:any;
  environment:any;
  edit_all_image:any[]=[];
  originalArray:any[]=[];
  spliceIndexArray:any[]=[];
  showBackdrop: boolean = false;
  Progress:boolean=false;
  todaydate:any;
  year:any;
  isNetwork:boolean;
  localFilePath:any;
  add_alert: any;
  constructor(public alertController: AlertController,private toast: Toast,private camera: Camera, public actionSheetController: ActionSheetController, private file: File, private transfer: FileTransfer, private imagePicker: ImagePicker, private webview: WebView, private crop: Crop,public sanitizer: DomSanitizer,public modalController: ModalController,public toastController: ToastController,public service:settingsService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder, public datePipe:DatePipe, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider,private networkProvider: NetworkService) { 
      this.environment = environment.ImageUrl;
      this.route.queryParams.subscribe(params => {
        if (params && params.edit) {
          this.data = JSON.parse(params.edit);
          console.log(this.data)
        }
      });
   }

  ngOnInit() {
    this.todaydate=new Date().toISOString();
    this.year= new Date().getFullYear()
  }


  ionViewWillEnter() {
    this.edit_all_image=[];
    this.originalArray=[];
    this.fileuri=[];
    this.spliceIndexArray=[];
    // this.service.reportType().subscribe(res=>{
    //  console.log(res)
    //  this.originalReportType=res['enum_masters'];
    //  this.reportTypeValue=res['enum_masters'];
    //  this.reportTypeValue.push("Others")
    //  console.log(this.reportTypeValue);
    //  let assets = this.data.event_assets;
    //  for(var i in assets){
    //     let mapUrl=this.environment+assets[i]["url"]
    //     this.edit_all_image.push({"uri":mapUrl});
    //     this.originalArray.push({"uri":mapUrl})   
    //  }
    //  this.statusBar.backgroundColorByHexString('#ea4e4e');
    //  this.tabBar = document.getElementById('myTabBar');
    //  this.tabBar.style.display = 'none';
     
    //  let Others:any;
    //  console.log(this.originalReportType)
    //  let index=this.originalReportType.indexOf(this.data['event_category']);
    //  console.log(index)
    //  console.log(index)
    //  if(index>-1){
    //   this.report=this.data['event_category'];
    //   Others='';      
    //  }else{
    //   this.report="Others";
    //   Others=this.data['event_category'];   
    //  }

    //  this.editReport=this.fb.group({
    //   'event_category': [this.report,[Validators.required]],
    //   'others':      [Others],    
    //   'event_name':       [this.data.event_name,[Validators.required]],
    //   'event_datetime':   [this.datePipe.transform(this.data.event_datetime,"MMM dd yyyy"),[Validators.required]],
    //   'description':      [this.data.description]
     
    //  });
    //  console.log(this.editReport)
    // })
    
    this.databaseSummary.getEnumMasters('report').then((res)=>{
      this.originalReportType=res['enum_masters'];
      this.reportTypeValue=res['enum_masters'];
      this.reportTypeValue.push("Others")
      
      let localAssets = this.data["event_options"];
    
      let globalassets = this.data["event_assets"];
      if(this.networkProvider.isNetworkOnline){
        this.isNetwork = true;
      }else{
        this.isNetwork = false;
      }
      
      for(let i in localAssets["localImagePath"]){
          let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"],"globalURI": null,"cdvFilePath":localAssets["localImagePath"][i]["cdvFilePath"],"fileName":localAssets["localImagePath"][i]["fileName"],"delete":localAssets["localImagePath"][i]["delete"] };
        if(globalassets!=null){
        if(globalassets.length>i){
          let globeURL = this.environment+globalassets[i]["url"]
          mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
        }
        } 
        this.edit_all_image.push(mapUrl);
        this.originalArray.push(mapUrl);
      }
      
      
      this.statusBar.backgroundColorByHexString('#ea4e4e');
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
      
      
      let Others:any;
      let index=this.originalReportType.indexOf(this.data['event_category']);
     
      if(index>-1){
        this.report=this.data['event_category'];
        Others='';      
      }else{
        this.report="Others";
        Others=this.data['event_category'];   
      }

      this.editReport=this.fb.group({
        'event_category': [this.report,[Validators.required]],
        'others':      [Others],    
        'event_name':       [this.data.event_name,[Validators.required]],
        'event_datetime':   [this.datePipe.transform(this.data.event_datetime,"MMM dd yyyy"),[Validators.required]],
        'description':      [this.data.description]
      
      });
      console.log(this.editReport)
    })
    .catch(error=>{ console.log(error) });

    
  }

 ionViewWillLeave() {
  this.tabBar.style.display = 'flex';
  this.tabBar = document.getElementById('myTabBar').childNodes[0];
  this.tabBar.classList.remove("tab-selected");
  }

 

  editReportSubmit(value){
    
    if(this.editReport.valid){
      if(value['event_category']=='Others'){
        if(value['others']!=''){

        }else{
          this.presentToast("Please enter your report type name");
          return false;
        }
      }
      if(this.edit_all_image.length==0){
        this.presentToast("Please add your report image");
        return false;
      }
    else{
        this.addconfirmation(value);
    }
    }else if(this.editReport['value']['event_name']==""){
        this.presentToast("Please enter your Name")
    }else if(this.editReport['value']['event_datetime']==""){
        this.presentToast("Please select your report date")
    }else if(this.editReport['value']['event_category']==""){
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
            let details=value;
            if(value['event_category']=='Others'){
              details['event_category']=details['others']
            }

            //let date=this.datePipe.transform(value.event_datetime,"dd MMM yyyy")
            let new1 = new Date(value.event_datetime);
            let event_dateTime = new1.toJSON();
            let collectData={'event_name':value.event_name,'event_datetime':event_dateTime,'event_category':details['event_category'],'description':value.description,'event_type':'report','created_at':this.data['created_at'],'id':this.data["id"]};
            // this.service.commonUpdatePost(this.data["id"],collectData).subscribe(res=>{
            
            //  if(this.spliceIndexArray.length>0){
            //     this.deleteImage();
            //  }else if(this.fileuri.length >0){ 
            //    console.log(this.fileuri.length>0) 
            //   let event_id:any=this.data['id'];
            //    this.sample(event_id); 
            //  }else{
            //   this.Progress=false;
            //  this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
            //  }      
            // },error=>{    
            //   this.Progress=false;
            // })
            this.database.updateAnEvent(this.data['event_id'],collectData).then((res) => {
              console.log(res);  
              let event_id:any=this.data['event_id'];
              this.AddLocalImageData(event_id);
            }).catch(error=>{ 
              this.Progress=false;
              console.log(error) 
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
        "localImagePath": this.edit_all_image
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
            //this.store_photos.push(this.webview.convertFileSrc(results[i]))
            //console.log(this.store_photos,'webviewuri')
            this.localFilePath = results[i];
            this.active=true;

            this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry: FileEntry) => {
              return new Promise((resolve, reject) => {
                fileEntry.file(meta => resolve(meta), error => reject(error));
              });
            }).then((fileMeta: IFile) => {
                console.log(fileMeta)
                this.audioFileName= fileMeta.name;
                this.cdvFilePath = fileMeta['localURL'];
                this.edit_all_image.push({ "localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false })
                this.fileuri.push({"uri":this.cdvFilePath,"fileName":this.audioFileName})  
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
  //this.edit_all_image.push({"uri":this.webview.convertFileSrc(imageData)});
  //this.store_photos.push(this.webview.convertFileSrc(results[i]))
  //console.log(this.store_photos,'webviewuri')
  this.localFilePath = imageData;
  this.active=true;

  this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry: FileEntry) => {
    return new Promise((resolve, reject) => {
      fileEntry.file(meta => resolve(meta), error => reject(error));
    });
  }).then((fileMeta: IFile) => {
      console.log(fileMeta)
      this.audioFileName= fileMeta.name;
      this.cdvFilePath = fileMeta['localURL'];
      this.edit_all_image.push({ "localURI": this.localFilePath,"globalURI": null,"cdvFilePath":this.cdvFilePath,"fileName":this.audioFileName,"delete":false })
      this.fileuri.push({"uri":this.cdvFilePath,"fileName":this.audioFileName})   
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
       console.log(i,"i")
      console.log(this.fileuri.length)
      console.log(this.fileuri.length-i==0)
       if(this.fileuri.length-i ==0){
         this.Progress=false;
         console.log('success')
         this.presentToast('Report added successfully');
         this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
       }
      },error=>{
        console.log(this.fileuri.length)
        console.log('alert')
      })    }

  }

  close() {
    this.router.navigate(['/self-care-tabs/tabs/tab1/reports/view-report'],{skipLocationChange: true });
  }

  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  deleteImage(){
   
    let delete_detail={"index":this.spliceIndexArray,"id":this.data["id"]}
    
    this.service.deleteImage(delete_detail).subscribe(res=>{
        console.log(res)
        if(this.fileuri.length >0){ 
         console.log(this.fileuri.length>0) 
         let event_id:any=this.data['id'];
         this.sample(event_id); 
        }else{
         this.Progress=false;
         this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
        }
    })
  }


  removeImg(index,image,originalArray){
    //  let result = originalArray.some(el=>el.uri === image.uri);
    
    // if(result==true){
     
    //     var index1 = this.originalArray.findIndex(p => p.uri == image.uri)
        
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
  }

 
}
