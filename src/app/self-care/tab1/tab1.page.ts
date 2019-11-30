import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { environment } from '../../../environments/environment'
import { IonSlides } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
import { NetworkService } from '../../network-connectivity/network-service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

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
  environment:any;
  loader:boolean=true;
  show_details:any[]=[];
  JSON:any;
  isNetwork:boolean;

  constructor( public service: settingsService,private router: Router,private statusBar: StatusBar,public sanitizer: DomSanitizer,private database: DatabaseProvider,private databaseSummary:DataBaseSummaryProvider,private networkProvider: NetworkService,private webview: WebView) {
    this.JSON = JSON;
    this.environment = environment.ImageUrl;
  }
    ionViewWillEnter(){
      this.loader=true;
      this.database.Oninit();
    	// this.service.setting().subscribe(res => {
      //   this.pic = res;
      //   if(this.pic.profile_pic != null){
      //     this.profile_pic = this.sanitizer.bypassSecurityTrustResourceUrl(this.pic.profile_pic);  
      //   }else{
      //     this.profile_pic = null;
      //   }

        
      //   this.initialLogo = this.pic.user_info.name.charAt(0);
        
      // })

      this.databaseSummary.getPicture_Show().then(res=>{
        this.pic = res;
        let globalURL=null
        let localURL=null;
        if(this.pic['user_info']['user_picture']!=null && this.pic['user_info']['user_picture']['url'] != null){
          let source = this.pic['user_info']['user_picture']['url']
          let gurl = source.includes("file:///");
          if(gurl==true){
           globalURL = this.webview.convertFileSrc(source);
          }else{
           let byPassURL = this.environment+source;
           globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(byPassURL);  
          }  
        }
        // else if(this.pic['user_info']['user_option']!=null){
        //   let source = this.webview.convertFileSrc(this.pic['user_info']['user_option']['localURL']); 
        //   localURL = source;
        // }
        else{
          let source = this.webview.convertFileSrc(this.pic['user_info']['user_picture']['localURL']); 
          localURL = source;
        }
        
        if(this.networkProvider.isNetworkOnline){
          this.isNetwork = true;
          this.profile_pic = globalURL!=null ? globalURL : localURL 
        }else{
          this.isNetwork = false;
          this.profile_pic = localURL || null; 
        }
        console.log(this.profile_pic)
        this.initialLogo = this.pic.user_info.name.charAt(0); 
      })

      this.show_details=[];
      this.user_id = localStorage.getItem("user_id");
      // this.service.recentAppointment(this.user_id).subscribe(res=>{
      //   let data=res['appointment_list'];
      //   for(let i=0;i<data.length;i++){
      //     console.log(i)
      //     this.show_details.push(data[i])
      //     if(i==3){
      //       break;
      //     }
      //   }
      //   this.loader=false;
      //   console.log(this.show_details)        
      // },error=>{
      //   this.loader=false;
      // })
      this.databaseSummary.getRecentAppointments('appointment').then(res=>{
        let data=res['appointment_list'];
        for(let i=0;i<data.length;i++){
          console.log(i)
          this.show_details.push(data[i])
          if(i==3){
            break;
          }
        }
        this.loader=false;
      }).catch(err=>{
        console.log(err);
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
