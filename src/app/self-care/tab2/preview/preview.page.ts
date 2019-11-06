import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';
import { NetworkService } from '../../../network-connectivity/network-service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.scss']
})
export class previewPage implements OnInit {
  previewData:any;
  user_uid:any;
  Contactinfo:any=[{'doctor':[],'emergency':[],'care_giver':[]}];

  emergency:boolean=false;
  care_giver:boolean=false;
  doctor:boolean=false;
  healthDetailList:any;
  alergiesList:any[]=[];
  currentMedicationList:any[]=[];
  healthDetails:any;
  policyDetail:any;
  user:any;
  tabBar:any;
  initialLogo:any;
  profile_image:any;
  isNetwork:boolean;

  constructor(public sanitizer: DomSanitizer,private webview: WebView,public modalController: ModalController,public service: settingsService,private changeRef: ChangeDetectorRef,private databaseSummary: DataBaseSummaryProvider,private networkProvider: NetworkService) { 
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }
  
  ngOnInit(){
    this.changeRef.detectChanges();
  }

  ionViewWillEnter() {
    // this.service.myEmergencyPreview().subscribe(res=>{
    //    this.previewData=res;
    //    this.initialLogo=this.previewData['user'].name.charAt(0);
    //    this.profile_image=this.previewData['profile_picture']
      
    //    this.healthDetails=this.previewData['health_detail'];
       
    //    if(this.healthDetails!=null){
    //      this.alergiesList = this.healthDetails['attribute_name_value']['allergy']  || [];
    //      this.currentMedicationList = this.healthDetails['attribute_name_value']['current_medication'] || [];
    //    }else{
    //      this.alergiesList=[];
    //      this.currentMedicationList=[];
    //    }


    //    this.user = this.previewData['user'];
    //    this.policyDetail = this.previewData['policy_details'];
       
    //     for(let i=0;i<this.previewData['contacts'].length;i++){
           
    //      this.previewData['contacts'][i].firstleter=this.previewData['contacts'][i].contact_name.charAt(0);
    //      if(this.previewData['contacts'][i].user_type == 'Emergency'){
    //        this.Contactinfo[0]['emergency'].push(this.previewData['contacts'][i])
             
    //      }
    //      else if(this.previewData['contacts'][i].user_type == 'Doctor'){
    //        this.Contactinfo[  0]['doctor'].push(this.previewData['contacts'][i])

    //      }
    //      else if(this.previewData['contacts'][i].user_type == 'Care Giver'){
    //         this.Contactinfo[0]['care_giver'].push(this.previewData['contacts'][i])

    //      }
    //     }

    //     for(let i=0; i<this.Contactinfo.length; i++){
        
    //       if(this.Contactinfo[0].care_giver.length != 0){
    //          this.care_giver=true
    //        }else{
    //          this.care_giver=false
    //        }
    //         if(this.Contactinfo[0].emergency.length != 0){
    //          this.emergency = true;
    //        }else{
    //          this.emergency = false;
    //        }
    //         if(this.Contactinfo[0].doctor.length != 0){
    //          this.doctor = true;
    //        }else{
    //          this.doctor = false;
    //        } 
    //    }


    // })

    this.databaseSummary.getAllUserPreviewData().then(res=>{
        this.previewData=res;
        console.log(this.previewData)
       this.initialLogo=this.previewData['user'].name.charAt(0);
       //this.profile_image=this.previewData['profile_picture']
       
       let globalURL=null;
       let localURL=null;
       if(this.previewData['user']['user_picture']['url'] != null){
         let source = this.previewData['user']['user_picture']['url'];
         globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(source);  
       }else{
         let source = this.webview.convertFileSrc(this.previewData['user']['user_picture']['localURL']); 
         localURL = source;
       }
       
       if(this.networkProvider.isNetworkOnline){
         this.isNetwork = true;
         this.profile_image = globalURL!=null ? globalURL : localURL 
       }else{
         this.isNetwork = false;
         this.profile_image = localURL || null; 
       }


       this.healthDetails=this.previewData['health_detail'];
       
       if(this.healthDetails!=null){
         this.alergiesList = this.healthDetails['attribute_name_value']['allergy']  || [];
         this.currentMedicationList = this.healthDetails['attribute_name_value']['current_medication'] || [];
       }else{
         this.alergiesList=[];
         this.currentMedicationList=[];
       }


       this.user = this.previewData['user'];
       this.policyDetail = this.previewData['policy_details'];
       
        for(let i=0;i<this.previewData['contacts'].length;i++){
           
         this.previewData['contacts'][i].firstleter=this.previewData['contacts'][i].contact_name.charAt(0);
         if(this.previewData['contacts'][i].user_type == 'Emergency'){
           this.Contactinfo[0]['emergency'].push(this.previewData['contacts'][i])
             
         }
         else if(this.previewData['contacts'][i].user_type == 'Doctor'){
           this.Contactinfo[  0]['doctor'].push(this.previewData['contacts'][i])

         }
         else if(this.previewData['contacts'][i].user_type == 'Care Giver'){
            this.Contactinfo[0]['care_giver'].push(this.previewData['contacts'][i])

         }
        }

        for(let i=0; i<this.Contactinfo.length; i++){
        
          if(this.Contactinfo[0].care_giver.length != 0){
             this.care_giver=true
           }else{
             this.care_giver=false
           }
            if(this.Contactinfo[0].emergency.length != 0){
             this.emergency = true;
           }else{
             this.emergency = false;
           }
            if(this.Contactinfo[0].doctor.length != 0){
             this.doctor = true;
           }else{
             this.doctor = false;
           } 
       }
     }).catch(err=>{console.log(err)})
  }

	close() {
		this.modalController.dismiss();
  }

  ionViewWillLeave(){
     this.tabBar.style.display = 'flex'; 
  }

}
