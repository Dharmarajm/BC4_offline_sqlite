import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TermsConditionsPage } from '../../login/terms-conditions/terms-conditions.page';
import { AboutPage } from '../../login/about/about.page';
import { EditCGProfilePage } from './cg-edit-profile/cg-edit-profile.page'
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
import { environment } from '../../../environments/environment'
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
import { NetworkService } from '../../network-connectivity/network-service';

@Component({
  selector: 'app-tab3cg',
  templateUrl: 'tab3cg.page.html',
  styleUrls: ['tab3cg.page.scss']
})
export class Tab3cPage {
  
  pic : any;
  linkSource:any;
  img:any;
  caregiver:any;
  data:any = "5 days";
  data1:any = "-";
  data2:any = "Never";
  initialLogo:any;
  caregive_option:any;
  nativepath:any;
  playaudio:any;
  playaudio1:any;
  environment:any;
  dataArray:any[]=[];
  alertFileName:any;
  remainderFileName:any;
  alertToneNativepath:any;
  remainderToneNativepath:any;

  autoUpdateTrigger:any[]= [
    {name:'never',type:'radio',label:'Never',value:"Never",checked: true},
    {name:'day1',type:'radio',label:'1 Day',value:"1 Day",checked: false},
    {name:'day2',type:'radio',label:'3 Days',value:"3 Days",checked: false},
    {name:'day3',type:'radio',label:'5 Days',value:"5 Days",checked: false},
    {name:'day4',type:'radio',label:'10 Days',value:"10 Days",checked: false},
    {name:'day5',type:'radio',label:'15 Days',value:"15 Days",checked: false}
  ]; 
  autoUpdateDays:any="Never";
  isNetwork:boolean;

  constructor(private statusBar: StatusBar,public modalController: ModalController, public sanitizer: DomSanitizer, public serv: careGiverService, public actionSheetController: ActionSheetController, public router:Router, public alertController: AlertController,private clipboard: Clipboard,private file: File,private FilePath: FilePath,private fileChooser: FileChooser,private databaseSummary:DataBaseSummaryProvider,private networkProvider: NetworkService,private webview: WebView) {
    this.environment = environment.ImageUrl;
  }
  

  ngOnInit() {
    this.alertFileName=localStorage.getItem("notifyAlertName") || 'Default';
    this.remainderFileName=localStorage.getItem("remainderAlertName") || 'Default';
  }


  ionViewWillEnter(){
    // this.serv.setting().subscribe(res => {
    //   this.pic = res;
    //   console.log(this.pic)   
    //   this.initialLogo=this.pic.user_info.name.charAt(0);
    //   console.log(this.initialLogo)
    //   this.caregiver = this.pic.caregiver;
      
    //   this.caregive_option=this.pic['caregiver'].map(data=>({
    //       name: 'radio1',
    //       type: 'radio',
    //       label: data.name,
    //       value: data.name,
    //   }));
    //   console.log(this.caregive_option)
    
    //   if(this.pic.profile_pic != null){
    //     let source=this.pic['profile_pic'];
    //     this.img= this.sanitizer.bypassSecurityTrustResourceUrl(source);
    //   }
      
    // })

    this.databaseSummary.getCaregiverData().then(res=>{
      this.pic = res;
      
      this.initialLogo=this.pic['user_info'].name.charAt(0);
      
      let globalURL=null;
      let localURL=null;
      if(this.pic['user_info']['user_picture']['url'] != null){
        let source = this.pic['user_info']['user_picture']['url'];
        let gurl = source.includes("file:///");
        if(gurl==true){
          globalURL = this.webview.convertFileSrc(source);
        }else{
          let byPassURL = this.environment+source;
          globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(byPassURL);  
        }
      }
      //else if(this.pic['user_info']['user_option']!=null){
      //   let source = this.webview.convertFileSrc(this.pic['user_info']['user_option']['localURL']); 
      //   localURL = source;
      //  }
      else{
        let source = this.webview.convertFileSrc(this.pic['user_info']['user_picture']['localURL']); 
        localURL = source;
      }
      
      if(this.networkProvider.isNetworkOnline){
        this.isNetwork = true;
        this.img = globalURL!=null ? globalURL : localURL 
      }else{
        this.isNetwork = false;
        this.img = localURL || null; 
      }
      console.log(this.img)
    })

    this.statusBar.backgroundColorByHexString('#483df6');
    this.autoUpdateDays=localStorage.getItem("autoUpdateDays")  || "Never";
    this.updateAutoTriggers();
  }

  async edit(){
    
    let data={ 
        pics: this.pic
      }  

    const modal = await this.modalController.create({
      component: EditCGProfilePage,
      componentProps: data
    });

    modal.onDidDismiss()
      .then((data) => {
        //const user = data['data']; // Here's your selected user!
       this.ionViewWillEnter(); 
    });
    return await modal.present();

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
  
  // async medicineDuration(){
 
  //   const alert1 = await this.alertController.create({
  //     header: 'Choose Reorder Days',
  //     backdropDismiss: false,
  //     inputs:  [{name:'day1',type:'radio',label:'1 Day',value:"1 Day"},
  //               {name:'day2',type:'radio',label:'3 Days',value:"3 Days"},
  //               {name:'day3',type:'radio',label:'5 Days',value:"5 Days",checked: true},
  //               {name:'day4',type:'radio',label:'10 Days',value:"10 Days"},
  //               {name:'day5',type:'radio',label:'15 Days',value:"15 Days"}
  //             ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {

  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (res) => {
  //           console.log(res);
            
  //            this.data=res;
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ]
      
  //   });

  //   await alert1.present();
  // }

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
              this.router.navigate(['/login'])
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
          // this.localNotifications.getAll().then((res: ILocalNotification[]) => {
          //   console.log(res);  
          //   this.dataArray=res; 
            
          //   let songArray:ILocalNotification[]=[]
          //   for(var i in  this.dataArray) {
          //     console.log(i)
          //     console.log(this.dataArray)
          //     //songArray.push({id:this.dataArray[i].id})
          //     this.localNotifications.update(
          //       {id:this.dataArray[i].id,title:this.dataArray[i].title,sound:this.alertToneNativepath}); 
          //   }   
          // })
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
