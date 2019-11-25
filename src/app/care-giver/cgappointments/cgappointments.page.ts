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
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-cgappointments',
  templateUrl: './cgappointments.page.html',
  styleUrls: ['./cgappointments.page.scss'],
})
export class CgappointmentsPage implements OnInit {
  
  selectedSegment:any="future";
  show_details:any[]=[];
  display_details:any;
  per_page:number=1;
  per_page_offset:number=0;

  appointmentData:any[]=[];
  appoint_details:any[]=[];
  loader:boolean;
  tabBar: any;
  getDate:any=this.datepipe.transform(new Date(),"dd MMM yyyy")
  history_details: any;
  completed_data: any[];
  completepage: number=1;
  TodayDate:any;
  TommorrowDate:any;
  environmentUrl:any;
  profile_details:any;
  logoinitial: any;
  profile_pic: any;
  user_name: any;
  completepage_offset:number=0;


  constructor(private toast: Toast, public alertController:AlertController,public toastController: ToastController,private router: Router, public route:ActivatedRoute,public service: careGiverService,public datepipe: DatePipe, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) {
    this.environmentUrl=environment.ImageUrl;
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loader=true;
    this.statusBar.backgroundColorByHexString('#c7a254');
    this.tabBar = document.getElementById('myTabBar1').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
    
    // this.service.commonAppointmentDateEventList('appointment',this.per_page).subscribe(res=>{
    //   console.log(res)
    //   this.show_details = res['event_list'];
    //   this.groupBy(this.show_details);
    // })

    // this.service.completedAppointmentEventList('appointment',this.per_page).subscribe(res=>{
    //   console.log(res)
    //   this.history_details = res['event_list'];
    //   this.groupBy1(this.history_details);
    // })

    if(this.selectedSegment=='future')
    this.cgUpcoming();
  else if(this.selectedSegment =='completed')
    this.cgCompleted();

    let todayDate:any=new Date();
    this.TodayDate= this.datepipe.transform(todayDate,"dd MMM yyyy")
    let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
    this.TommorrowDate=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
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

  cgUpcoming(){
    // this.service.commonAppointmentDateEventList('appointment',this.per_page).subscribe(res=>{
    //   console.log(res)
    //   this.show_details = res['event_list'];
    //   this.groupBy(this.show_details);
    // })
    this.per_page=1;
    this.per_page_offset=0;
    console.log("upcoming")
     // For DB Connect
    this.databaseSummary.getAllEvents('appointment','New',this.per_page_offset).then(res=>{
      this.show_details = res['event_list'];
      console.log(this.show_details)
      this.groupBy(this.show_details);
    }).catch(err=>{console.log(err)})
    
  }
  
  cgCompleted(){
    // this.service.completedAppointmentEventList('appointment',this.per_page).subscribe(res=>{
    //   console.log(res)
    //   this.history_details = res['event_list'];
    //   this.groupBy1(this.history_details);
    // })
    this.completepage=1;
    this.completepage_offset=0;
    console.log("Completed")
     // For DB Connect
    this.databaseSummary.getAllEvents('appointment','history',this.completepage_offset).then(res=>{
      this.history_details = res['event_list'];
      console.log(this.history_details)
      this.groupBy1(this.history_details);
    }).catch(err=>{console.log(err)})
  }


  segmentChanged(event){
    console.log(event)
    this.selectedSegment=event;
  }

  groupBy(data){

    let records:any[]=data.map(item => ({
        id:item.id,
        created_at: item.created_at,
        description: item.description,
        event_name: item.event_name,
        event_datetime:item.event_datetime,
        event_category:item.event_category,
        value: item.value,
        event_type: item.event_type,
        reminder:item['event_options']['reminder'],
        appointment_fixed:item['event_options']['appointment_fixed']
    }));

    let valueOther = [];
    let valueCurrent = [];
    const example = from(records).pipe(
      groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
      mergeMap(group => group.pipe(toArray()))
    ).subscribe(val => {
      console.log(val)
      if(val){
        let todaydate:any=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
        console.log(this.getDate+1==todaydate)
        console.log(this.getDate+1,todaydate)
        let mapDate:any;
        let todayDate:any=new Date(); 
        let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
        let mapTomorrowDate:any=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
        console.log(mapTomorrowDate,todaydate)
        // if(this.getDate==todaydate){           
        //   mapDate="Today"
        // }else if(mapTomorrowDate==todaydate){            
        //   mapDate="Tommorrow"
        // }else{
          mapDate=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
        // }
        let ff = { "created_at":mapDate,"events" :val };
        if(mapDate!='Today' && mapDate!="Tommorrow"){
          valueOther.push(ff);
        }else{
          valueCurrent.push(ff)
        }
        }
    });
    console.log(valueOther)
    console.log(valueCurrent)
    valueCurrent.map(item => valueOther.unshift(item));
    console.log(valueOther)
    this.display_details=valueOther;
    this.loader=false;
    console.log(this.display_details)
  }


  
  groupBy1(data){

    let records:any[]=data.map(item => ({
        id:item.id,
        created_at: item.created_at,
        description: item.description,
        event_name: item.event_name,
        event_datetime:item.event_datetime,
        event_category:item.event_category,
        value: item.value,
        event_type: item.event_type,
        reminder:item['event_options']['reminder'],
        appointment_fixed:item['event_options']['appointment_fixed']
    }));

    let valueCurrent = [];
    const example = from(records).pipe(
      groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
      mergeMap(group => group.pipe(toArray()))
    ).subscribe(val => {
      console.log(val)
      if(val){
        let ff = { "created_at":val[0].event_datetime,"events" :val };        
        valueCurrent.push(ff)      
    }
  });
    this.completed_data=valueCurrent;
    this.loader=false;
    console.log(this.completed_data)
    
}

  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  SearchItem(event){
    let search:any=event.detail.value
    console.log(event);
    this.per_page=1;
    this.per_page_offset=0;
    // this.service.commonAppointmentSearchList('appointment',search).subscribe(res=>{
    //   console.log(res)
    //   this.show_details= res['event_list'];
    // this.groupBy(this.show_details)
    // }, error=>{
    //     this.presentToast("Server slow, Please try again")
    // })
 // For DB Connect
    this.databaseSummary.getAllEventsSearchList('appointment',search,'New',this.per_page_offset).then(res=>{
      this.show_details= res['event_list'];
      this.groupBy(this.show_details)
    }).catch(err=>{console.log(err)}) 
  }

  loadData(event) {
    setTimeout(() => {
    console.log('Done');
    this.per_page+=1;
    this.per_page_offset=this.per_page*10-10;
    let data:any[]=[];
     // For DB Connect
    this.databaseSummary.getAllEvents('appointment','New',this.per_page_offset).then(async(res)=>{
        data = res['event_list'];
        console.log(data,'load1')
        let concat= await this.show_details.concat(data);
       
        this.appointmentData= await concat.map(item => ({
          id:item.id,
          event_id: item.event_id,
          created_at: item.created_at,
          description: item.description,
          event_name: item.event_name,
          event_datetime:item.event_datetime,
          event_category:item.event_category,
          value: item.value,
          event_type: item.event_type,
          reminder:item['event_options']['reminder'],
          appointment_fixed:item['event_options']['appointment_fixed']
        }));
        let valueOther = [];
        let valueCurrent = [];
        console.log(this.appointmentData)
        const example = from(this.appointmentData).pipe(
          groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
          mergeMap(group => group.pipe(toArray()))
        ).subscribe(val => {
        console.log(val)
        if(val){
          let todaydate:any=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
          console.log(this.getDate+1==todaydate)
          console.log(this.getDate+1,todaydate)
          let mapDate:any;
          let todayDate:any=new Date(); 
          let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
          let mapTomorrowDate:any=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
          console.log(mapTomorrowDate,todaydate)
          
          mapDate=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
          
          let ff = { "created_at":mapDate,"events" :val };
          if(mapDate!='Today' && mapDate!="Tommorrow"){
            valueOther.push(ff);
          }else{
            valueCurrent.push(ff)
          }
        }
      })

        valueCurrent.map(item => valueOther.unshift(item));
        this.appointmentData=valueOther;
        this.appointmentData.map(item => this.display_details.push(item));
        console.log(this.display_details,"data")
        event.target.complete();
        if (this.per_page *10 !=this.display_details.length){
            event.target.disabled = true;
        }
    }).catch(err=>{console.log(err)})
  }, 500);
    // this.service.commonAppointmentDateEventList("appointment",this.per_page).subscribe(res => {
    //     let data:any[] = res['event_list'];
    //     let concat=this.show_details.concat(data);
       
    //     this.appointmentData=concat.map(item => ({
    //       id:item.id,
    //       created_at: item.created_at,
    //       description: item.description,
    //       event_name: item.event_name,
    //       event_datetime:item.event_datetime,
    //       event_category:item.event_category,
    //       value: item.value,
    //       event_type: item.event_type,
    //       reminder:item['event_options']['reminder'],
    //       appointment_fixed:item['event_options']['appointment_fixed']
    //     }));
    //     let valueOther = [];
    //     let valueCurrent = [];
    //     console.log(this.appointmentData)
    //     const example = from(this.appointmentData).pipe(
    //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
    //       mergeMap(group => group.pipe(toArray()))
    //     ).subscribe(val => {
    //     console.log(val)
    //     if(val){
    //       let todaydate:any=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
    //       console.log(this.getDate+1==todaydate)
    //       console.log(this.getDate+1,todaydate)
    //       let mapDate:any;
    //       let todayDate:any=new Date(); 
    //       let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
    //       let mapTomorrowDate:any=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
    //       console.log(mapTomorrowDate,todaydate)
    //       // if(this.getDate==todaydate){           
    //       //   mapDate="Today"
    //       // }else if(mapTomorrowDate==todaydate){            
    //       //   mapDate="Tommorrow"
    //       // }else{
    //         mapDate=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
    //       // }
    //       let ff = { "created_at":mapDate,"events" :val };
    //       if(mapDate!='Today' && mapDate!="Tommorrow"){
    //         valueOther.push(ff);
    //       }else{
    //         valueCurrent.push(ff)
    //       }
    //     }
    //   })

    //     valueCurrent.map(item => valueOther.unshift(item));
    //     this.appointmentData=valueOther;
    //     this.appointmentData.map(item => this.display_details.push(item));
    //     console.log(this.display_details,"data")
    //     event.target.complete();
    //     if (this.per_page *10 !=this.display_details.length){
    //         event.target.disabled = true;
    //     }
    // },error=>{
    //     event.target.disabled = true;
    // })
   
  }

  completedSearchItem(event){
    let search:any=event.detail.value
    console.log(event);
    this.completepage=1;
    this.completepage_offset=0;
    // For DB Connect
    this.databaseSummary.getAllEventsSearchList('appointment',search,'history',this.completepage_offset).then(res=>{
      this.history_details= res['event_list'];
      this.groupBy1(this.history_details)
    }).catch(err=>{console.log(err)})
  }

  loadData1(event){
    setTimeout(() => {
      
      console.log('Done');
      this.completepage+=1;
      this.completepage_offset=this.completepage*10-10;
      console.log(this.completepage_offset);
      let data:any[]=[];
      this.databaseSummary.getAllEvents('appointment','history',this.completepage_offset).then(async(res)=>{
            data = res['event_list'];
            console.log(data,'load1')
            let concat = await this.history_details.concat(data);
            this.appointmentData= await concat.map(item => ({
              id:item.id,
              event_id: item.event_id,
              created_at: item.created_at,
              description: item.description,
              event_name: item.event_name,
              event_datetime:item.event_datetime,
              event_category:item.event_category,
              value: item.value,
              event_type: item.event_type,
              reminder:item['event_options']['reminder'],
              appointment_fixed:item['event_options']['appointment_fixed']
            }));
            let valueOther = [];
            console.log(this.appointmentData)
            const example = from(this.appointmentData).pipe(
              groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
              mergeMap(group => group.pipe(toArray()))
            ).subscribe(val => {
            console.log(val)
            if(val){  
              let ff = { "created_at":val[0].event_datetime,"events" :val };
              valueOther.push(ff) 
              console.log(valueOther)          
            }
          })
            this.completed_data=valueOther;
            event.target.complete();
            if (this.completepage *10 !=this.completed_data.length){
                event.target.disabled = true;
            }
      }).catch(err=>{console.log(err)})
      }, 500);


      // console.log('Done');
      // this.completepage+=1;
      // this.service.completedAppointmentEventList("appointment",this.completepage).subscribe(res => {
      //     let data:any[] = res['event_list'];
      //     let concat=this.history_details.concat(data);
      //     this.appointmentData=concat.map(item => ({
      //       id:item.id,
      //       created_at: item.created_at,
      //       description: item.description,
      //       event_name: item.event_name,
      //       event_datetime:item.event_datetime,
      //       event_category:item.event_category,
      //       value: item.value,
      //       event_type: item.event_type,
      //       reminder:item['event_options']['reminder'],
      //       appointment_fixed:item['event_options']['appointment_fixed']
      //     }));
      //     let valueOther = [];
      //     console.log(this.appointmentData)
      //     const example = from(this.appointmentData).pipe(
      //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
      //       mergeMap(group => group.pipe(toArray()))
      //     ).subscribe(val => {
      //     console.log(val)
      //     if(val){  
      //       let ff = { "created_at":val[0].event_datetime,"events" :val };
      //       valueOther.push(ff) 
      //       console.log(valueOther)          
      //     }
      //   })
      //     this.completed_data=valueOther;
      //     event.target.complete();
      //     if (this.completepage *10 !=this.completed_data.length){
      //         event.target.disabled = true;
      //     }
      // },error=>{
      //     event.target.disabled = true;
      // })
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#483df6');
    this.tabBar.classList.add("tab-selected");
  }

}
