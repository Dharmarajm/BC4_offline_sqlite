import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { DatePipe } from '@angular/common';  
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ToastController,AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../environments/environment';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from 'src/app/sqlite-database/database_provider';
import { DatabaseProvider } from 'src/app/sqlite-database/database';


@Component({
  selector: 'app-cgalerts',
  templateUrl: './cgalerts.page.html',
  styleUrls: ['./cgalerts.page.scss'],
})
export class CgalertsPage implements OnInit {

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
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  environmentUrl:any;
  medi_loader:boolean=true;
  vital_loader:boolean=true;
  general_loader:boolean=true;
  general_per_page_offset:number;
  med_per_page_offset:number;
  vital_per_page_offset:number;



  repeatOrder=[{'days':[{day:'Mon',checked:false}, {day:'Tue',checked:false}, {day:'Wed',checked:false},{day: 'Thu',checked:false},{ day:'Fri',checked:false},{day:'Sat',checked:false},{day:'Sun',checked:false}],
  'others':[{day:'1 mo.',checked:false},{day:'2 mo.',checked:false},{day:'3 mo.',checked:false},{day:'6 mo.',checked:false},{day:'12 mo.',checked:false}]}];
  
  constructor(private toast: Toast, public alertController:AlertController,public toastController: ToastController,private router: Router, public route:ActivatedRoute,public settingService: careGiverService,public datepipe: DatePipe, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) {
    this.environmentUrl=environment.ImageUrl;
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // Medication List api
    this.statusBar.backgroundColorByHexString('#0e9bff');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
   
      this.medi_loader=true 
      this.med_per_page=1;
      this.med_per_page_offset=0;
      // this.settingService.commonDateEventList('alert_medication',this.med_per_page).subscribe(res=>{
      //   this.medi_loader=false;
      //   this.alert_med_list=res['event_list']; 
      //   console.log(this.alert_med_list)
      // })
      // For DB Connection
      this.databaseSummary.getAllEvents('alert_medication','New',this.med_per_page_offset).then(res=>{
        this.medi_loader=false;
        this.alert_med_list=res['event_list']; 
        console.log(this.alert_med_list)
      }).catch(err=>{console.log(err)})   
   
     //Vitals List api
        this.vital_per_page=1;
        this.vital_per_page_offset=0;

        this.vital_loader=true;
      //   this.settingService.commonDateEventList('alert_vital',this.vital_per_page).subscribe(res=>{
      //   this.vital_loader=false;
      //   this.alert_vital_list=res['event_list']; 
      // })
// For DB Connection
      this.databaseSummary.getAllEvents('alert_vital','New',this.vital_per_page_offset).then(res=>{
        this.vital_loader=false;
        this.alert_vital_list=res['event_list']; 
      }).catch(err=>{console.log(err)})
 

    // general List DB Connection
      this.general_per_page=1;
      this.general_per_page_offset=0;
      this.general_loader=true;
      // this.settingService.commonDateEventList('alert_general',this.general_per_page).subscribe(res=>{
      //   this.general_loader=false;
      //   this.alert_general_list=res['event_list']; 
      // })

// For DB Connection
      
      this.databaseSummary.getAllEvents('alert_general','New',this.general_per_page_offset).then(res=>{
        this.general_loader=false;
        this.alert_general_list=res['event_list'];
      }).catch(err=>{console.log(err)})

// Need to update
      this.profile_details=JSON.parse(localStorage.getItem("details"));
      console.log(this.profile_details)
      if(this.profile_details!= undefined){
        console.log(this.profile_details)
        this.logoinitial=this.profile_details.name.charAt(0);
        this.profile_pic=this.environmentUrl+this.profile_details.profile_pic;
        if(this.profile_details.profile_pic==null){
          this.profile_pic=null;  
        }
        this.user_name=this.profile_details.name;
      }

  
  }

  getDays(arr) {
    return arr.map((items) => items['day'] ? items['day']: items)
  }

  SearchItem(event_type,event){
    let search:any=event.detail.value;
    let offset:number = 0;

    // this.settingService.commonDateEventSearchList(event_type,search).subscribe(res=>{
    //   console.log(res)
    //   if(event_type=='alert_medication'){
    //     this.med_per_page=1;
    //     this.alert_med_list=res['event_list'];  
    //   }else if(event_type=='alert_vital'){
    //     this.vital_per_page=1;
    //     this.alert_vital_list=res['event_list']; 
    //   }else{
    //     this.general_per_page=1;
    //     this.alert_general_list=res['event_list']; 
    //   }

    // }, error=>{
    //      this.presentToast("Server slow, Please try again")
    // })

    this.databaseSummary.getAllEventsSearchList(event_type,search,'New',offset).then(res=>{
      
      if(event_type=='alert_medication'){
        this.med_per_page=1;
        this.med_per_page_offset=0;
        this.alert_med_list=res['event_list'];  
      }else if(event_type=='alert_vital'){
        this.vital_per_page=1;
        this.vital_per_page_offset=0;
        this.alert_vital_list=res['event_list']; 
      }else{
        this.general_per_page=1;
        this.general_per_page_offset=0;
        this.alert_general_list=res['event_list']; 
      }
    }).catch(err=>{console.log(err)})
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
      this.med_per_page_offset=this.med_per_page*10-10;
    
    //  this.settingService.commonDateEventList("alert_medication",this.med_per_page).subscribe(res => {
    //      this.alert_med_scoll=res['event_list'];
    //      this.alert_med_scoll.map(item => this.alert_med_list.push(item));
        
    //      event.target.complete();
    //      if (this.med_per_page *10 !=this.alert_med_list.length){
    //         event.target.disabled = true;
    //      }
    //  },error=>{
    //     event.target.disabled = true;
    //  })
    // }, 500);
    this.databaseSummary.getAllEvents('alert_medication','New',this.med_per_page_offset).then(async(res)=>{
      this.alert_med_scoll=res['event_list'];
      this.alert_med_scoll.map(item => this.alert_med_list.push(item));
    
      event.target.complete();
      if (this.med_per_page *10 !=this.alert_med_list.length){
        event.target.disabled = true;
      }    
    }).catch(err=>{
      console.log(err)
      event.target.disabled = true;
    })
  }, 500);

   }

   loadData2(event) {
    setTimeout(() => {
     
      this.vital_per_page+=1;
      this.vital_per_page_offset=this.vital_per_page*10-10;
     
      this.databaseSummary.getAllEvents('alert_vital','New',this.vital_per_page_offset).then(async(res)=>{
        this.alert_vital_scoll=res['event_list']; 
        this.alert_vital_scoll.map(item => this.alert_vital_list.push(item));
      
        event.target.complete();
        if (this.vital_per_page *10 !=this.alert_vital_list.length){
          event.target.disabled = true;
        }   
      }).catch(err=>{
        console.log(err)
        event.target.disabled = true; 
      })
  
      }, 500);
   }

   loadData3(event) {
    setTimeout(() => {
    
      this.general_per_page+=1;
      this.general_per_page_offset=this.general_per_page*10-10;
    
      this.databaseSummary.getAllEvents('alert_general','New',this.general_per_page_offset).then(async(res)=>{
        this.alert_general_scoll=res['event_list']; 
        this.alert_general_scoll.map(item => this.alert_general_list.push(item));
      
        event.target.complete();
        if (this.general_per_page *10 !=this.alert_general_list.length){
          event.target.disabled = true;
        }
      }).catch(err=>{
        console.log(err);
        event.target.disabled = true;
      })
    }, 500);
   }
   
   ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }
  

}
