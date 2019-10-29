import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ToastController,AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-alert',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertPage implements OnInit {
  selectedSegment:string='first';
  alert_med_list:any[]=[];
  alert_vital_list:any[]=[];
  alert_general_list:any[]=[];
  med_per_page:number=1;
  vital_per_page:number=1;
  general_per_page:number=1;
  alert_med_scoll:any[]=[];
  alert_vital_scoll:any[]=[];
  alert_general_scoll:any[]=[];
  alertMedInput:any;
  alertVitalInput:any;
  alertGenInput:any;
  tabBar: any;
  medi_loader:boolean;
  vital_loader:boolean;
  general_loader:boolean;
  repeatOrder=[{'days':[{day:'Mon',checked:false}, {day:'Tue',checked:false}, {day:'Wed',checked:false},{day: 'Thu',checked:false},{ day:'Fri',checked:false},{day:'Sat',checked:false},{day:'Sun',checked:false}],
  'others':[{day:'1 mo.',checked:false},{day:'3 mo.',checked:false}]}];
  // {day:'6 mo.',checked:false},{day:'12 mo.',checked:false},,{day:'2 mo.',checked:false},
  constructor(public alertController:AlertController,public toastController: ToastController,private router: Router, public route:ActivatedRoute,public settingService: settingsService,public datepipe: DatePipe, private statusBar: StatusBar) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.specialsecond) {
        this.selectedSegment = params.specialsecond;
      }
    });

  }
  ngOnInit() {
  }
  vital(){
     //Vitals List api
     this.vital_per_page=1;
     this.vital_loader=true;
     this.settingService.commonDateEventList('alert_vital',this.vital_per_page).subscribe(res=>{
     this.vital_loader=false;
     this.alert_vital_list=res['event_list']; 
 })
  }
  general(){
    // general List api
    this.general_per_page=1;
    this.general_loader=true;
    this.settingService.commonDateEventList('alert_general',this.general_per_page).subscribe(res=>{
    this.general_loader=false;
    this.alert_general_list=res['event_list']; 
})
  }
  medication(){
    this.medi_loader=true 
    this.med_per_page=1;
    this.settingService.commonDateEventList('alert_medication',this.med_per_page).subscribe(res=>{
    this.medi_loader=false;
    this.alert_med_list=res['event_list']; 
    console.log(this.alert_med_list)
  })   
  }
  segmentChanged(event){
  this.selectedSegment=event;
  this.ionViewWillEnter();
  }
  ionViewWillEnter(){
    // Medication List api 
    this.statusBar.backgroundColorByHexString('#0e9bff');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");   
       if(this.selectedSegment=='first')
         this.medication();
       else if(this.selectedSegment=='second')
        this.vital();
       else if(this.selectedSegment=='third')
        this.general();
    
  }

  getDays(arr) {
    return arr.map((items) => items['day'] ? items['day']: items)
  }
  
  addMedication(){
  this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-medications'])
  }


  addVitals(){
    this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-vitals'])
  }

  addGeneral(){
    this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-general'])
  }

  async deleteItem(id,index,event_type,show){      
      const alert = await this.alertController.create({
        header: 'Alerts',
        message: 'Are you sure want to delete'+' '+show+' '+'Alert'+'?',
        mode: 'md',
        buttons: [
          {
            text: 'Confirm',
            handler: () => {
              this.settingService.commonDeleteEvent(id).subscribe(res => {
                console.log(res)
                if(event_type=='alert_medication'){
                  this.alert_med_list.splice(index,1)
                }else if(event_type=='alert_vital'){
                  this.alert_vital_list.splice(index,1)
                }else if(event_type=='alert_general'){
                  this.alert_general_list.splice(index,1)
                }
                this.presentToast("Record Deleted Successfully");
                
              }, error => {
                console.log(error)
              })
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

  SearchItem(event_type,event){
    let search:any=event.detail.value;
    this.settingService.commonDateEventSearchList(event_type,search).subscribe(res=>{
      console.log(res)
      if(event_type=='alert_medication'){
        this.med_per_page=1;
        this.alert_med_list=res['event_list'];  
      }else if(event_type=='alert_vital'){
        this.vital_per_page=1;
        this.alert_vital_list=res['event_list']; 
      }else{
        this.general_per_page=1;
        this.alert_general_list=res['event_list']; 
      }

    }, error=>{
         this.presentToast("Server slow, Please try again")
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  loadData1(event) {
    setTimeout(() => {
     
     this.med_per_page+=1;
    
     this.settingService.commonDateEventList("alert_medication",this.med_per_page).subscribe(res => {
         this.alert_med_scoll=res['event_list'];
         this.alert_med_scoll.map(item => this.alert_med_list.push(item));
        
         event.target.complete();
         if (this.med_per_page *10 !=this.alert_med_list.length){
            event.target.disabled = true;
         }
     },error=>{
        event.target.disabled = true;
     })
    }, 500);
   }

   loadData2(event) {
    setTimeout(() => {
     
     this.vital_per_page+=1;
     
     this.settingService.commonDateEventList("alert_vital",this.vital_per_page).subscribe(res => {
         this.alert_vital_scoll=res['event_list']; 
         this.alert_vital_scoll.map(item => this.alert_vital_list.push(item));
        
         event.target.complete();
         if (this.vital_per_page *10 !=this.alert_vital_list.length){
            event.target.disabled = true;
         }
     },error=>{
        event.target.disabled = true;
     })
    }, 500);
   }

   loadData3(event) {
    setTimeout(() => {
    
     this.general_per_page+=1;
    
     this.settingService.commonDateEventList("alert_general",this.general_per_page).subscribe(res => {
         this.alert_general_scoll=res['event_list']; 
         this.alert_general_scoll.map(item => this.alert_general_list.push(item));
        
         event.target.complete();
         if (this.general_per_page *10 !=this.alert_general_list.length){
            event.target.disabled = true;
         }
     },error=>{
        event.target.disabled = true;
     })
    }, 500);
   }
   
  editMedication(event){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        medi_alertData: JSON.stringify(event)
      }
    };
    this.alertMedInput='';
    this.alertVitalInput='';
    this.alertGenInput='';
    this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-medications'], navigationExtras)
  }

  editVital(event){
    let navigationExtra: NavigationExtras = {
      queryParams: {
        vital_alertData: JSON.stringify(event)
      }
    };
    this.alertMedInput='';
    this.alertVitalInput='';
    this.alertGenInput='';
    this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-vitals'], navigationExtra)
  }

   editGeneral(event){
    let navigationExtras1: NavigationExtras = {
      queryParams: {
        general_alertData: JSON.stringify(event)
      }
    };
    this.alertMedInput='';
    this.alertVitalInput='';
    this.alertGenInput='';
    this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-general'], navigationExtras1)
   }
   
  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }
  
}
