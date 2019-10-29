import { Component } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TermsConditionsPage } from '../../login/terms-conditions/terms-conditions.page';
import { AboutPage } from '../../login/about/about.page';
import { EditProfilePage } from './edit-profile/edit-profile.page'
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification  } from '@ionic-native/local-notifications/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pic : any;
  linkSource:any;
  img:any;
  caregiver:any;
  
  data1:any = "-";
  initialLogo:any;
  caregive_option:any;
  nativepath:any;
  // playaudio:any;
  // playaudio1:any;
  dataArray:any[]=[];
  alertFileName:any;
  remainderFileName:any;
  alertToneNativepath:any;
  remainderToneNativepath:any;
  medicationDuration:any[]=[
                            {name:'unit1',type:'radio',label:'1 Unit',value:"1 Unit",checked: false},
                            {name:'unit3',type:'radio',label:'3 Units',value:"3 Units",checked: false},
                            {name:'unit5',type:'radio',label:'5 Units',value:"5 Units",checked: true},
                            {name:'unit10',type:'radio',label:'10 Units',value:"10 Units",checked: false},
                            {name:'unit15',type:'radio',label:'15 Units',value:"15 Units",checked: false}
                          ];
  autoUpdateTrigger:any[]= [
                            {name:'never',type:'radio',label:'Never',value:"Never",checked: true},
                            {name:'day1',type:'radio',label:'1 Day',value:"1 Day",checked: false},
                            {name:'day2',type:'radio',label:'3 Days',value:"3 Days",checked: false},
                            {name:'day3',type:'radio',label:'5 Days',value:"5 Days",checked: false},
                            {name:'day4',type:'radio',label:'10 Days',value:"10 Days",checked: false},
                            {name:'day5',type:'radio',label:'15 Days',value:"15 Days",checked: false}
                          ];                       
  reOrderUnit:any="5 Units";
  autoUpdateDays:any="Never";

  constructor(private toast: Toast,public toastController: ToastController, private localNotifications: LocalNotifications, private file: File,private FilePath: FilePath,private fileChooser: FileChooser,private statusBar: StatusBar,public modalController: ModalController, public sanitizer: DomSanitizer, public serv: settingsService, public actionSheetController: ActionSheetController, public router:Router, public alertController: AlertController,private clipboard: Clipboard,public database:DatabaseProvider) { }

  ngOnInit() {
  
   this.alertFileName=localStorage.getItem("notifyAlertName") || 'Default';
   this.remainderFileName=localStorage.getItem("remainderAlertName") || 'Default';
   
  }


  ionViewWillEnter(){
    this.serv.setting().subscribe(res => {
      this.pic = res;
      console.log(this.pic)   
      this.initialLogo=this.pic.user_info.name.charAt(0);
      this.caregiver = this.pic.caregiver;
      
      this.caregive_option=this.pic['caregiver'].map(data=>({
          name: 'radio1',
          type: 'radio',
          label: data.name,
          value: data.name,
      }));
      console.log(this.caregive_option)
      // if(this.pic.profile_pic == null)
      // {  
      //    this.img="../../../assets/img/contact.png"
        
      // }else{
      //   this.linkSource = this.pic.profile_pic;
      //   this.img= this.sanitizer.bypassSecurityTrustResourceUrl(this.linkSource)
      //   console.log(this.img)
      // }
      if(this.pic.profile_pic != null){
        let source=this.pic['profile_pic'];
        this.img= this.sanitizer.bypassSecurityTrustResourceUrl(source);
      }
      
      
    })
    this.statusBar.backgroundColorByHexString('#483df6');
    this.reOrderUnit=localStorage.getItem("reOrderQuantity")  || "5 Units";
    this.autoUpdateDays=localStorage.getItem("autoUpdateDays")  || "Never";
    this.updateReOrderTriggers();
    this.updateAutoTriggers();
  }

 async edit(){
    
    let data={ 
        pics: this.pic
      }  

    const modal = await this.modalController.create({
      component: EditProfilePage,
      componentProps: data
    });

    modal.onDidDismiss()
      .then((data) => {
        //const user = data['data']; // Here's your selected user!
       this.ionViewWillEnter(); 
    });
    return await modal.present();

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(this.pic)
    //   }
    // };
    
    //this.navCtrl.navigateForward(['/editprofile']);
    //this.router.navigate(['/editprofile',{item:this.pic}])
    // this.router.navigate(['self-care-tabs/tabs/tab3/edit-profile'], navigationExtras)
    //this.navCtrl.navigate(['/self-care-tabs/tabs/tab3/editprofile']);
  }
 async careGiverName(){

     console.log(this.caregive_option)
     console.log()
     const alert = await this.alertController.create({
      header: 'CareGiver',
      backdropDismiss: false,
      inputs:this.caregive_option,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            console.log(res)
            this.data1=res;
            console.log('Confirm Ok');
          }
        }
      ] 
    });

    await alert.present();
  }
  
  async reorderDuration(){
 
    const alert1 = await this.alertController.create({
          header: 'Choose Reorder Days',
          backdropDismiss: false,
          inputs:  this.medicationDuration,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {

                console.log('Confirm Cancel');
              }
            }, {
              text: 'Ok',
              handler: (res) => { 
                this.reOrderUnit=res;
                localStorage.setItem("reOrderQuantity",this.reOrderUnit);
                
                this.updateReOrderTriggers();
                console.log(res);
              }
            }
          ]
    });

    await alert1.present();
  }

  async autoUpdateDuration(){
 
    const alert2 = await this.alertController.create({
          header: 'Choose Auto Update Days',
          backdropDismiss: false,
          inputs:  this.autoUpdateTrigger,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {

                console.log('Confirm Cancel');
              }
            }, {
              text: 'Ok',
              handler: (res) => { 
                this.autoUpdateDays=res;
                localStorage.setItem("autoUpdateDays",this.autoUpdateDays);
                
                this.updateAutoTriggers();
                console.log(res);
              }
            }
          ]
          
        });

        await alert2.present();
  }

  updateReOrderTriggers(){
    for(var i=0;i<this.medicationDuration.length;i++){
      if(this.reOrderUnit!=this.medicationDuration[i].value){
        this.medicationDuration[i].checked=false;
      }else{
        this.medicationDuration[i].checked=true;
      } 
    } 
  }

  updateAutoTriggers(){
    for(var i=0;i<this.autoUpdateTrigger.length;i++){
      if(this.autoUpdateDays!=this.autoUpdateTrigger[i].value){
        this.autoUpdateTrigger[i].checked=false;
      }else{
        this.autoUpdateTrigger[i].checked=true;
      } 
    }
  }
  
  goToterms() {
      
      this.router.navigate(['/terms_conditions']);

  }

  goToAbout() {
    
    this.router.navigate(['/about']);

  }

  // logout(){
  //   localStorage.clear();
  //   this.router.navigate(['/login'])
  // }

  async logout() {

      const alert = await this.alertController.create({
        header: 'BC4',
        message: 'Are you sure want to logout?',
        mode: 'md',
        buttons: [
          {
            text: 'Logout',
            handler: () => {
              localStorage.clear();
              this.database.deleteDataFromTable().then((res) => {
                console.log(res);
                this.router.navigate(['/login'])
              })
              .catch(error => console.log(error));
              
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

  copyText(CopyText:any){
    console.log(CopyText)
    this.clipboard.copy(CopyText);
    this.presentToast('UID Copied to Clipboard');
  }

  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  alertToneSetting(){
      this.fileChooser.open({ "mime": "audio/*" }).then((url) => {
        //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
        //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
        this.FilePath.resolveNativePath(url).then((result) => {
          
          this.alertToneNativepath = result;
          localStorage.setItem("alertSong",this.alertToneNativepath)
          this.file.resolveLocalFilesystemUrl(result).then((fileEntry: FileEntry) => {
            return new Promise((resolve, reject) => {
              fileEntry.file(meta => resolve(meta), error => reject(error));
            });
          }).then((fileMeta: IFile) => {
            this.alertFileName=fileMeta.name;
            localStorage.setItem("notifyAlertName",this.alertFileName)
          })  
          this.localNotifications.getAll().then((res: ILocalNotification[]) => {
            console.log(res);  
            this.dataArray=res; 
            
            let songArray:ILocalNotification[]=[]
            for(var i in  this.dataArray) {
              console.log(i)
              console.log(this.dataArray)
              //songArray.push({id:this.dataArray[i].id})
              this.localNotifications.update(
                {id:this.dataArray[i].id,title:this.dataArray[i].title,sound:this.alertToneNativepath}); 
            }   
          })
        });    
    });
  }

  remainderToneSetting(){
    this.fileChooser.open({ "mime": "audio/*" }).then((url) => {
      //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
      //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
      this.FilePath.resolveNativePath(url).then((result) => {
        this.remainderToneNativepath = result;
        localStorage.setItem("remainderSong",this.remainderToneNativepath)
        this.file.resolveLocalFilesystemUrl(result).then((fileEntry: FileEntry) => {
          return new Promise((resolve, reject) => {
            fileEntry.file(meta => resolve(meta), error => reject(error));
          });
        }).then((fileMeta: IFile) => {
          this.remainderFileName=fileMeta.name;
          localStorage.setItem("remainderAlertName",this.remainderFileName)
        })  
        // this.localNotifications.getAll().then((res: ILocalNotification[]) => {
        //   console.log(res);  
        //   this.dataArray=res; 
          
        //   let songArray:ILocalNotification[]=[]
        //   for(var i in  this.dataArray) {
        //     console.log(i)
        //     console.log(this.dataArray)
        //     //songArray.push({id:this.dataArray[i].id})
        //     this.localNotifications.update(
        //       {id:this.dataArray[i].id,title:this.dataArray[i].title,sound:this.remainderToneNativepath});
        
        //   }   
        // })
      });    
    });
  }

}
