import { Component, OnInit,Input, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';  
import {  AlertController } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cgvitals',
  templateUrl: './cgvitals.page.html',
  styleUrls: ['./cgvitals.page.scss'],
})
export class CgvitalsPage implements OnInit {
  
  @ViewChild('width',{ static: true }) elementWidth: ElementRef;
  vital_details:any;
  scroll_details:any;
  tabBar: any;
  status: boolean = true;
  status1: any = -1;
  data_details:any[]=[];
  private el: HTMLElement;
  width:any;
  profile_details:any;
  logoinitial:any;
  profile_pic:any;
  user_name:any;
  environmentUrl:any;
  vital_keys:any[]=[];
  constructor(public datepipe: DatePipe, public service: careGiverService, public route:ActivatedRoute,public router: Router, public alertController:AlertController, private statusBar: StatusBar) { 
    this.environmentUrl=environment.ImageUrl;
  }

  ngOnInit(){
    
  }
  
 ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.status=true;
    this.service.vitalEventList().subscribe(res=>{
    this.status = false;
    this.vital_details=res;
    this.vital_keys = Object.keys(this.vital_details); 
      })    

    this.profile_details=JSON.parse(localStorage.getItem("details"));
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
  
  history_view(event){
    let navigationExtras: NavigationExtras = {
        queryParams: {
        data: event
      }
    }; 
   this.router.navigate(['/care-giver-tabs/tabsc/tab1c/cg-vitals/cgvital-reading'], navigationExtras)
    }

    toggle(key: any){
      let index=this.vital_keys.indexOf(key);
      this.status1 = this.vital_keys[index] === this.status1 ? -1 : this.vital_keys[index];
   }
  
   ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
      }

}