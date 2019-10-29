import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { IonSlides } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { DatabaseProvider } from '../../sqlite-database/database'
//import { Platform} from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pic:any;
  initialLogo:any;
  profile_pic:any;
  tabBar:any;
  user_id:any;
  loader:boolean=true;
  show_details:any[]=[];
  JSON:any;
  constructor( public service: settingsService,private router: Router,private statusBar: StatusBar,public sanitizer: DomSanitizer,public database: DatabaseProvider) {
    this.JSON = JSON;
  }
    ionViewWillEnter(){
      this.loader=true;
      this.database.Oninit();
    	this.service.setting().subscribe(res => {
        this.pic = res;
        if(this.pic.profile_pic != null){
          this.profile_pic = this.sanitizer.bypassSecurityTrustResourceUrl(this.pic.profile_pic);  
        }else{
          this.profile_pic = null;
        }

        
        this.initialLogo = this.pic.user_info.name.charAt(0);
        
      })
      this.show_details=[];
      this.user_id = localStorage.getItem("user_id");
      this.service.recentAppointment(this.user_id).subscribe(res=>{
        let data=res['appointment_list'];
        for(let i=0;i<data.length;i++){
          console.log(i)
          this.show_details.push(data[i])
          if(i==3){
            break;
          }
        }
        this.loader=false;
        console.log(this.show_details)        
      },error=>{
        this.loader=false;
      })
      this.statusBar.backgroundColorByHexString('#483df6');
    }  
  // test(){
  //  this.router.navigate(['/self-care-tabs/tabs/tab1/health-diary']);
  // }


 /* ionViewDidEnter()
  { 
   this.subscription = this.platform.backButton.subscribe(()=>{ navigator['app'].exitApp(); });
  } */
}
