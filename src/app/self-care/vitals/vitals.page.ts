import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { settingsService } from '../self-common-service/settings/settings.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { of,from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { DatePipe } from '@angular/common';  
import { AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.page.html',
  styleUrls: ['./vitals.page.scss'],
})
export class VitalsPage implements OnInit {
  @ViewChild('width', { static: true }) elementWidth: ElementRef;

  vital_details:any;
  scroll_details:any;
  tabBar: any;
  status: boolean = true;
  private el: HTMLElement;
  width:any;
  vital_keys:any[]=[]
  status1: any = -1;
  user_id: string;
 
  constructor(public datepipe: DatePipe, public service: settingsService, public route:ActivatedRoute,public router: Router, public alertController:AlertController, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) { }

  ngOnInit() { }

 ionViewWillEnter(){
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    this.status=true;
    this.user_id = localStorage.getItem("user_id");
    
    // this.service.vitalEventList(this.user_id).subscribe(res=>{
    // this.status = false;
    // this.vital_details=res;
    // this.vital_keys = Object.keys(this.vital_details); 
    // })
    
    this.databaseSummary.getAllEvents('vital','New',7).then(res=>{
      console.log(res)
      let data = res['event_list'];
      this.groupBy(data);
     
    }).catch(err=>{console.log(err)})
    
    
  }

  groupBy(data){

    let records:any[] = data.map(item => ({
      id:item.id,
      event_id: item.event_id,
      created_at: item.created_at,
      description: item.description,
      event_category : item.event_category,
      event_assets: item.event_assets,
      event_options: item.event_options,
      event_name: item.event_name,
      event_datetime:item.event_datetime,
      value: item.value,
      event_type: item.event_type,
      user_id: item.user_id
    }));

    let value = {};
    const example = from(records).pipe(
      groupBy(person =>  person.event_name),
      mergeMap(group => group.pipe(toArray()))
    ).subscribe(val => {
      if(val){
        if(val.length > 7){
          val.length = 7; 
        };
        value[`${val[0]['event_name']}`]=val;
      }  
    })
    
    this.vital_details = value;
    this.vital_keys = Object.keys(this.vital_details);
    this.status = false;
}
  
 history_view(event){
  let navigationExtras: NavigationExtras = {
      queryParams: {
      data: event
    }
  }; 
 this.router.navigate(['/self-care-tabs/tabs/tab1/vitals/vital-reading'], navigationExtras)
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
