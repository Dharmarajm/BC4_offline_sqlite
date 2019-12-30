import { Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { ModalController } from '@ionic/angular';
import { AboutPage } from './about/about.page';
import { AlertController,ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonSlides } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 // @ViewChild('slides') slider: IonSlides;

  details:any;
  policyDetail:any;
  sms:any;
  selectedSegment:any="first"; 
  healthDetailList:any[]=[];
  allhealthDetailData:any[]=[];
  alergiesList:any[]=[];
  currentMedicationList:any[]=[];
  //contact declarations
  user_type: any;
  care_giver:boolean=false;
  emergency:boolean=false;
  doctor:boolean=false;
  info:any=[{'doctor':[],'emergency':[],'care_giver':[]}];
  contact_details:any;
  contactLength:number;
  contact_limitation:any;
  navigateHealth:NavigationExtras;
  navigatePreview:NavigationExtras;
  navigateProfile:NavigationExtras;
  careGiver_contact: any[]=[];
  constructor(private toast: Toast,private statusBar: StatusBar,public toastController: ToastController,public alertController: AlertController, 
    public modalController: ModalController,private router: Router, public route:ActivatedRoute, 
    public settingService: settingsService,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider,private file: File,private transfer: FileTransfer) {
    
  }


  ngOnInit(){ 
  }


  // About segment code

  ionViewWillEnter(){
    this.info=[{'doctor':[],'emergency':[],'care_giver':[]}];
    // this.settingService.aboutDetail().subscribe(res=>{
      
    //   this.details=res;
    //   if(this.details['policies'].length!=0){
    //     this.policyDetail = this.details['policies'][0]['attribute_name_value'];  
    //   }else{
    //     this.policyDetail = this.details['policies'];
    //   }

    // },error=>{
    //  console.log(error)
    // });

    this.databaseSummary.getAboutData().then(res=>{
        this.details=res;
        console.log(this.details)
        if(this.details['policies'].length!=0){
          this.policyDetail = this.details['policies'][0]['attribute_name_value'];  
        }else{
          this.policyDetail = this.details['policies'];
        }
     }).catch(err=>{console.log(err)})


    // this.settingService.myEmergencyHealthDetail().subscribe(res=>{
    //   let emergencyData=res['health_detail'];
      
    //   if(emergencyData.length!=0){
    //     this.healthDetailList = emergencyData[0]['attribute_name_value'];
    //     this.allhealthDetailData = emergencyData[0];
    //     this.alergiesList = this.healthDetailList['allergy'];
    //     this.currentMedicationList = this.healthDetailList['current_medication']
    //   }else{
    //     this.healthDetailList=[];
    //     this.allhealthDetailData=null;
    //     this.alergiesList = [];
    //     this.currentMedicationList = [];
    //   }
    // },error=>{
    //  console.log(error)
    // })

    this.databaseSummary.getHealthDeatails().then(res=>{
        let emergencyData=res['health_detail'];
        console.log(emergencyData)
        if(emergencyData.length!=0){
          this.healthDetailList = emergencyData[0]['attribute_name_value'];
          this.allhealthDetailData = emergencyData[0];
          this.alergiesList = this.healthDetailList['allergy'];
          this.currentMedicationList = this.healthDetailList['current_medication']
        }else{
          this.healthDetailList=[];
          this.allhealthDetailData=null;
          this.alergiesList = [];
          this.currentMedicationList = [];
        }
     }).catch(err=>{console.log(err)})

    
     // contact service
    this.databaseSummary.getEmergencyDeatails().then(res=>{
        this.contact_details = res;
        console.log(this.contact_details)
        this.careGiver_contact=res["caregivers"]     
        
        this.contact_limitation=this.contact_details.emergency_contact_count
          
        this.contactLength=this.contact_details['emergency_detail'];    
        for(let i=0;i<this.contact_details.emergency_contact_count;i++){
        this.contact_details.emergency_detail[i].firstleter=this.contact_details.emergency_detail[i].contact_name.charAt(0);
        if(this.contact_details.emergency_detail[i].user_type == 'Emergency'){
          this.info[0]['emergency'].push(this.contact_details.emergency_detail[i])           
        }
        else if(this.contact_details.emergency_detail[i].user_type == 'Doctor'){
          this.info[0]['doctor'].push(this.contact_details.emergency_detail[i])

        }
        
        }
        
        for(let i=0;i<this.contact_details['caregiver_count'];i++){
          this.careGiver_contact[i]['firstname']=this.careGiver_contact[i].name.charAt(0);
        }
        
        for(let i=0; i<this.info.length; i++){
        
            if(this.info[0].emergency.length != 0){
            this.emergency = true;
          }else{
            this.emergency = false;
          }
            if(this.info[0].doctor.length != 0){
            this.doctor = true;
          }else{
            this.doctor = false;
          } 
        }
     }).catch(err=>{console.log(err)})



    // this.settingService.contactDetails().subscribe(res=>{
    
    //  this.contact_details = res;
    //  this.careGiver_contact=res["caregivers"]     
     
    //  this.contact_limitation=this.contact_details.emergency_contact_count
      
    //   this.contactLength=this.contact_details['emergency_detail'];    
    //   for(let i=0;i<this.contact_details.emergency_contact_count;i++){
    //    this.contact_details.emergency_detail[i].firstleter=this.contact_details.emergency_detail[i].contact_name.charAt(0);
    //    if(this.contact_details.emergency_detail[i].user_type == 'Emergency'){
    //      this.info[0]['emergency'].push(this.contact_details.emergency_detail[i])           
    //    }
    //    else if(this.contact_details.emergency_detail[i].user_type == 'Doctor'){
    //      this.info[0]['doctor'].push(this.contact_details.emergency_detail[i])

    //    }
      
    //   }
      
    //   for(let i=0;i<this.contact_details['caregiver_count'];i++){
    //     this.careGiver_contact[i]['firstname']=this.careGiver_contact[i].name.charAt(0);
    //   }
      
    //   for(let i=0; i<this.info.length; i++){
       
    //       if(this.info[0].emergency.length != 0){
    //        this.emergency = true;
    //      }else{
    //        this.emergency = false;
    //      }
    //       if(this.info[0].doctor.length != 0){
    //        this.doctor = true;
    //      }else{
    //        this.doctor = false;
    //      } 
    //    }
    // },error=>{
    //   console.log(error)
    // })

    this.statusBar.backgroundColorByHexString('#483df6');

  }

  // async openUserModal() {
  //   const modal = await this.modalController.create({
  //     component: UserModalComponent,
  //     componentProps: { users: this.users },
  //   });

  //   modal.onDidDismiss()
  //     .then((data) => {
  //       //const user = data['data']; // Here's your selected user!
  //      this.ionViewWillEnter(); 
  //   });

  //   return await modal.present();
  // }
  
  editProfileDetails(){
    
    this.navigateProfile = {
      queryParams: {
        special: JSON.stringify(this.details)
      }
    }; 

    this.router.navigate(['/self-care-tabs/tabs/tab2/about-update'],this.navigateProfile)
  }

  /*async openUserModal() {
    const modal = await this.modalController.create({
      component: AboutPage,
      componentProps: { special: this.details },
    });

    modal.onDidDismiss()
      .then((data) => {
        const user = data['data']; // Here's your selected user!
    });

    return await modal.present();
  }*/
 
  previewData(){

    this.navigatePreview = {
      queryParams: {
        user_id:this.details['user_info']['user_uid']
      }
    }; 
    this.router.navigate(['/self-care-tabs/tabs/tab2/preview'],this.navigatePreview)
  }


// contact segment code

addContact(){
  if (this.contact_limitation == 3) {
    this.presentToast("Maximum 3 contacts allowed")
  }else{
    this.router.navigate(['/self-care-tabs/tabs/tab2/contact-add'])
  }
}

async deleteItem(id){


  const alert = await this.alertController.create({
    header: 'Contact',
    message: 'Are you sure want to delete contact?',
    mode: 'md',
    buttons: [
      {
        text: 'Confirm',
        handler: () => {
          console.log('Confirm Ok');
          // this.settingService.deleteData(id).subscribe(res=>{
          //      this.ionViewWillEnter();
          //      this.presentToast('Contact has been deleted successfully');
          // })
          this.database.deleteEmergencyContact(id).then(res=>{
            console.log(res)
            this.presentToast('Contact has been deleted successfully');
            this.ionViewWillEnter();
          }).catch(err=>{console.log(err)})
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

async RemoveCaregiver(id){
  const alert = await this.alertController.create({
      header: 'Contact',
      message: 'Are you sure want to delete?',
      mode: 'md',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Ok');
            // this.settingService.deleteCaregiver(id).subscribe(res=>{
            //      this.ionViewWillEnter();
            //      this.presentToast(' Your have removed Care Giver ');
            // })

            this.database.deleteCaregiverContact(id).then(res=>{
              console.log(res)
              this.presentToast(' Your have removed your Care Giver ');
              this.ionViewWillEnter();
            }).catch(err=>{console.log(err)})
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
 


  async presentToast(message:string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  // Health segment code
  updateHealth(){
       
       this.navigateHealth = {
        queryParams: {
          special: JSON.stringify(this.healthDetailList),
          data : JSON.stringify(this.allhealthDetailData)
        }
       };

       this.router.navigate(['/self-care-tabs/tabs/tab2/health-update'],this.navigateHealth)

  }

   onSegmentChanged(ev) {
    //awaitthis.slider.slideTo(this.selectedSegment);
  }

  // async slideChanged() {
  //   this.selectedSegment = await this.slider.getActiveIndex();
  // }
  
  imagedownload(path){
    const fileTransfer: FileTransferObject = this.transfer.create();

    //const url = path;
    fileTransfer.download(path, this.file.externalRootDirectory + 
      '/Download/' + "QR-Code.png").then((entry) => {
        this.presentToast('Download Successfully');
      console.log('download complete: ' + entry.toURL());  // I always enter here.
    }, (error) => {
      // handle error
      console.log("error!"); 
    });
  }

}
