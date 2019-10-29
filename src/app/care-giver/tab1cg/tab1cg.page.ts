import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { environment } from '../../../environments/environment';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab1cg',
  templateUrl: 'tab1cg.page.html',
  styleUrls: ['tab1cg.page.scss']
})
export class Tab1cPage {
  pic:any;
  initialLogo:any;
  profile_pic:any; 
  tabBar:any; 
  loader:boolean=true;
  environment:any;
  caregiverImageStatus:boolean;
  show_details:any[]=[];
  constructor(private router: Router,public service: careGiverService,private statusBar: StatusBar) {
    this.environment = environment.ImageUrl;
  }
  
   ionViewWillEnter(){
    this.loader=true;
    let patient_id=localStorage.getItem("user_id");
  	this.service.setting().subscribe(res => {
      this.pic = res;
      let userInfo=this.pic['user_info'].name.charAt(0);
      if(this.pic['patient'].length!=0){
        let user_id =this.pic['patient'][0];
        let index=this.pic['patient'].findIndex(item=>item.id==patient_id);
        if(index==-1){
          localStorage.setItem("user_id",user_id['id']);
          localStorage.setItem("details",JSON.stringify(user_id));
        
          this.profile_pic =this.pic['patient'][0]['user_picture']['url'];
          this.initialLogo = this.pic['patient'][0].name.charAt(0);
          this.caregiverImageStatus=false;    
        }else{
          this.profile_pic=this.pic['patient'][index]['user_picture']['url']
          this.initialLogo = this.pic['patient'][index].name.charAt(0);
          this.caregiverImageStatus=false;
        }
      }else{
        this.profile_pic=this.pic['profile_pic'];
        this.initialLogo=userInfo;
        this.caregiverImageStatus=true;
      }
      
      
        
      // }  
      // }else{
      //   this.profile_pic=this.pic['profile_pic'];
      //   this.initialLogo=userInfo;
      //   this.caregiverImageStatus=true;
      // }
    })
    this.show_details=[];

    this.service.recentAppointment(patient_id).subscribe(res=>{
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

    //this.statusBar.backgroundColorByHexString('#483df6');
  } 
}