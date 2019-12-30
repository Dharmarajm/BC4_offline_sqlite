import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute , Router } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl  } from '@angular/forms';
import { environment } from '../../../../environments/environment'   
//import { Base64 } from '@ionic-native/base64/ngx';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
// import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { NetworkService } from '../../../network-connectivity/network-service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  @ViewChild('name',{ static: true }) namefocus;
  userphoneupdate:any;
  useremailupdate:any;
  usernameupdate  :any;
  editProfileForm:FormGroup
  image:any;
  //preview:any;
  photos:any;
  uploadURI:any;  
  getValue:any;
  refresh:any;
  user_details:any;
  linkSource:any;
  img:any;
  img1:any;
  initialLogo:any;
  editprofile:any;
  cdvFilePath:any = null;
  audioFileName:any;
  cdvFilePath1:any;
  isNetwork:any;
  environment:any;

  constructor(private toast: Toast,public actionSheetController: ActionSheetController,private fb: FormBuilder,public sanitizer: DomSanitizer, public route:ActivatedRoute, private file: File, private transfer: FileTransfer, private camera: Camera, private imagePicker: ImagePicker, private webview: WebView, private crop: Crop, public serv:settingsService,public navParams: NavParams,public modalController: ModalController,public toastController: ToastController,private networkProvider: NetworkService,public database:DatabaseProvider) { 

  // this.route.queryParams.subscribe(params => {
  //     if (params && params.special) {
  //       console.log(params)
  //       this.editprofile = JSON.parse(params.special);
  //       console.log(this.editprofile.profile_pic,"edit")
  //        this.insialLogo = this.editprofile.user_info.name.charAt(0);
  //       if(this.editprofile["profile_pic"] == null){
  //         this.img=".././././assets/img/contact.png"
  //       }
  //       else{
  //             this.linkSource = this.editprofile["profile_pic"];
  //             this.img= this.sanitizer.bypassSecurityTrustResourceUrl(this.linkSource)
  //             console.log(this.img)
  //       }
  //     }
  //   });
   this.environment = environment.ImageUrl;
   this.editprofile=this.navParams.get('pics');
   let globalURL:any=null;
   let localURL:any=null;
   if(this.editprofile['user_info']['user_picture']['url'] != null){
    let source = this.editprofile['user_info']['user_picture']['url']
    let gurl = source.includes("file:///");
    if(gurl==true){
      globalURL = this.webview.convertFileSrc(source);
    }else{
      let byPassURL = this.environment+source;
      globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(byPassURL);  
    }
    //this.cdvFilePath1= this.sanitizer.bypassSecurityTrustResourceUrl(source);
   }
   // else if(this.editprofile['user_info']['user_option']!=null){
        //   let source = this.webview.convertFileSrc(this.editprofile['user_info']['user_option']['localURL']); 
        //   localURL = source;
        // }
   else{
    //this.cdvFilePath1= null;
    let source = this.webview.convertFileSrc(this.editprofile['user_info']['user_picture']['localURL']); 
    localURL = source;  
   }

   if(this.networkProvider.isNetworkOnline){
    this.isNetwork = true;
    this.cdvFilePath1 = globalURL!=null ? globalURL : localURL;
   }else{
    this.isNetwork = false;
    this.cdvFilePath1 = localURL; 
   }
  // this.cdvFilePath1=this.editprofile['profile_pic']
   this.initialLogo = this.editprofile.user_info.name.charAt(0);
   
  }
 

  ngOnInit() {

    this.editProfileForm=this.fb.group({

    "name":      [this.editprofile["user_info"]["name"],[Validators.required]],
    "email":     [this.editprofile["user_info"]["email"],[Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])]],
    "mobile_no": [this.editprofile["user_info"]["mobile_no"],[Validators.required,Validators.minLength(10)]],
    }); 


    
     this.userphoneupdate = this.editprofile.user_info.mobile_no;
     this.useremailupdate = this.editprofile.user_info.email;
     this.usernameupdate = this.editprofile.user_info.name;

     

  }

  ionViewDidEnter(){
    this.namefocus.setFocus();
  }

  sample(data){
    // const fileTransfer: FileTransferObject = this.transfer.create();
    
    // let data={}

    // let options: FileUploadOptions = {
    //  fileKey: 'user_picture',
    //  fileName: this.audioFileName,
    //  mimeType: 'multipart/form-data',
    //  params:data,
    //  chunkedMode: false,
    //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
    // }

    // fileTransfer.upload(this.cdvFilePath,environment.apiUrl+'users/profile_picture',options).then(res=>{
    //   this.presentToast('Profile updated successfully');
    //   console.log(res,'res');


    // }).catch();
    this.database.updateUserImage(data).then(res=>{
      console.log(res);
      this.presentToast('Profile updated successfully');
    }).catch(error=>{
      this.presentToast('Failed to update the profile');
      console.log(error);
    }) 
  }

  selectimage(){
    let options= {
      maximumImagesCount: 1,
      outputType: 0
    }
      this.imagePicker.getPictures(options).then((results) => {
         console.log('Image URI: ' + results);
         this.img=results.toString();
         this.crop.crop(this.img, { quality: 100 })
          .then(newImage => {
            console.log(newImage)
            this.cdvFilePath1 = this.webview.convertFileSrc(newImage);

            //this.reduceImages(results).then(() => {});
            this.file.resolveLocalFilesystemUrl(newImage).then((fileEntry: FileEntry) => {
            return new Promise((resolve, reject) => {
              fileEntry.file(meta => resolve(meta), error => reject(error));
            });
          }).then((fileMeta: IFile) => {
              console.log(fileMeta)
              this.audioFileName = fileMeta.name;
              this.cdvFilePath = fileMeta['localURL'];
              console.log(this.cdvFilePath,'filepath')
              let source =  this.editprofile['user_info']['user_picture']['url'];
              let userPicturedata:any;
              if(source==null){
                userPicturedata = {
                  url: source,
                  localURL: newImage,
                  cdvFilePath: this.cdvFilePath,
                  toUpdate: true
                }
              }else{
                userPicturedata = {
                  url: newImage,
                  localURL: newImage,
                  cdvFilePath: this.cdvFilePath,
                  toUpdate: true
                }
              }
              this.sample(userPicturedata);   
          })
         },error => console.error('Error cropping image', error));
      },(err) => { 
        console.log(err)
      });
  }

  async openImagePicker() {
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
    this.camera.getPicture(options).then((results) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.img=results.toString();
      this.crop.crop(this.img, { quality: 100 })
        .then(newImage => {
          console.log(newImage)
        this.cdvFilePath1=this.webview.convertFileSrc(newImage);

        //this.reduceImages(results).then(() => {});
        this.file.resolveLocalFilesystemUrl(newImage).then((fileEntry: FileEntry) => {
          return new Promise((resolve, reject) => {
            fileEntry.file(meta => resolve(meta), error => reject(error));
          });
        }).then((fileMeta: IFile) => {
            console.log(fileMeta)
            this.audioFileName = fileMeta.name;
            this.cdvFilePath = fileMeta['localURL'];
            console.log(this.cdvFilePath,'filepath')
            let source =  this.editprofile['user_info']['user_picture']['url'];
            // let userPicturedata = {
            //   url: source,
            //   localURL: newImage,
            //   cdvFilePath: this.cdvFilePath,
            //   toUpdate: true
            // }
            let userPicturedata:any;
            if(source==null){
              userPicturedata = {
                url: source,
                localURL: newImage,
                cdvFilePath: this.cdvFilePath,
                toUpdate: true
              }
            }else{
              userPicturedata = {
                url: newImage,
                localURL: newImage,
                cdvFilePath: this.cdvFilePath,
                toUpdate: true
              }
            }
            this.sample(userPicturedata);   
        })
      },error => console.error('Error cropping image', error));
    }, (err) => {
            // Handle error
    });
  }
   
  sendEditProfile(val){
    if(this.editProfileForm.valid){
       this.userphoneupdate = val.mobile_no;
       this.useremailupdate = val.email.toLowerCase();
       this.usernameupdate = val.name;
       
       let data = {   id:this.editprofile.user_info.id, 
                      name : this.usernameupdate, 
                      email:this.useremailupdate, 
                      mobile_no:this.userphoneupdate,
                      role_id : 1
                  }
        
      //  this.serv.editprofile(data, this.editprofile.user_info.id).subscribe(res=>{
        
      //   this.presentToast('Profile updated successfully');
      //   this.modalController.dismiss();
      //  },error=>{
        
      //  })
      this.database.updateUserData(data).then(res=>{
        console.log(res);
        this.presentToast('Profile updated successfully');
        this.modalController.dismiss();
      }).catch(err=>{
        console.log(err);
      })

    }else{
        this.presentToast('Please enter all the fields'); 
    }
       
  }

  close(){
    this.modalController.dismiss();
  }

  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }


  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    
    if(event.charCode!=0){
      if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      }
    }
  }

}
