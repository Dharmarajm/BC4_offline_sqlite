import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { ToastController,AlertController } from '@ionic/angular';
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Toast } from '@ionic-native/toast/ngx';


@Component({
  selector: 'app-cgprescriptions',
  templateUrl: './cgprescriptions.page.html',
  styleUrls: ['./cgprescriptions.page.scss'],
})
export class CgprescriptionsPage implements OnInit {
  
  tab_details: any;
  details: any;
  pres_page:number=1;
  prescribe_details:any[]=[];
  tabBar: any;
  prescribe_scroll:any[]=[];
  loader:boolean;
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  environmentUrl:any;
  public unsubscribeBackEvent: any;
  data_details:any[]=[];

  constructor(private toast:Toast,public alertController:AlertController,public toastController: ToastController,private router: Router, private statusBar: StatusBar,public settingService: careGiverService) { 
    this.environmentUrl=environment.ImageUrl;
  }

  ngOnInit(){

  } 
  ionViewWillEnter() {
    this.loader=true;
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.pres_page=1; 
    this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {      
        let data:any = res['event_list'];
        this.data_details=res['event_list'];      
           setInterval(() => {  
             this.loader=false;
           }, 2000);
        this.groupBy(data);
      
        
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
     }); 
  }

  groupBy(data){

      let records:any[]=data.map(item => ({
           id:item.id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_name: item.event_name,
           event_datetime:item.event_datetime,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
      }));

      let value = []
      const example = from(records).pipe(
        groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
        mergeMap(group => group.pipe(toArray()))
      ).subscribe(val => {
        console.log(val)
        if(val){
            let ff = { "created_at":val[0].event_datetime,"events" :val }
            value.push(ff);
        }
      })
      this.prescribe_details=value;
  }
 
 /*addPrescription(){
  
 this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions/add-prescription']);
}*/



/*async deletePrescription(id){
  console.log(id)
 const alert = await this.alertController.create({
      header: 'Prescriptions',
      message: 'Are you sure want to delete?',
      mode: 'ios',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.settingService.commonDeleteEvent(id).subscribe(res => {
              console.log(res)
              this.presentToast("Record Deleted Successfully");
              this.ionViewWillEnter();
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
}*/
  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  SearchItem(event){
    let search:any=event.detail.value
    console.log(event);
    this.settingService.commonDateEventSearchList('prescription',search).subscribe(res=>{
      console.log(res)
     let data:any = res['event_list'];
     this.data_details=res['event_list'];  
     this.groupBy(data)

    }, error=>{
         this.presentToast("Server slow, Please try again")
    })
  }

  loadData(event) {
     setTimeout(() => {
      console.log('Done');
      this.pres_page+=1;
      this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {
         let data:any[] = res['event_list'];
         let concat=this.data_details.concat(data);
          this.prescribe_scroll=concat.map(item => ({
           id:item.id,
           created_at: item.created_at,
           description: item.description,
           event_assets: item.event_assets,
           event_name: item.event_name,
           event_datetime:item.event_datetime,
           value: item.value,
           event_type: item.event_type,
           user_id: item.user_id,
           playing: false,
           progress: 0
          }));
          let value:any = []
          const example = from(this.prescribe_scroll).pipe(
            groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            mergeMap(group => group.pipe(toArray()))
          ).subscribe(val => {
            console.log(val)
            if(val){
                let ff: any = {}
                ff["created_at"] = val[0].event_datetime 
                ff["events"] = val
                value.push(ff);
            }
          })
          this.prescribe_scroll=value;
          //this.prescribe_scroll.map(item => this.prescribe_details.push(item));
          this.prescribe_details=this.prescribe_scroll;
          event.target.complete();
          if (this.pres_page *10 !=this.prescribe_details.length){
             event.target.disabled = true;
          }
      },error=>{
         event.target.disabled = true;
      })
     }, 500);
    }

    viewPrescription(view){
      if(this.prescribe_details.length != 0){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            viewprescription: JSON.stringify(view)
          }
        };
        this.router.navigate(['care-giver-tabs/tabsc/tab1c/cg-prescriptions/view-cg-prescription'], navigationExtras)
      }
    }

    ionViewWillLeave() {
      this.tabBar.classList.add("tab-selected");
      this.statusBar.backgroundColorByHexString('#483df6');
    }

}
