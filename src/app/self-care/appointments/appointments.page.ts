import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { settingsService } from '../self-common-service/settings/settings.service';
import { DatePipe } from '@angular/common';  
import { of,Subject, from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ToastController,AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';
import { async } from 'q';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  selectedSegment:any="future";
  show_details:any[]=[];
  display_details:any;
  per_page:number=1;
  per_page_limit:number=10;
  per_page_offset:number=0;
  appointmentData:any[]=[];
  appoint_details:any[]=[];
  loader:boolean;
  tabBar: any;
  getDate:any=this.datepipe.transform(new Date(),"dd MMM yyyy")
  history_details: any[]=[];
  completed_data: any[]=[];
  completepage: number=1;
  completepage_page_limit:number=10;
  completepage_offset:number=0;
  TodayDate:any;
  TommorrowDate:any;
  constructor(private toast: Toast,public alertController:AlertController,public toastController: ToastController,private router: Router, public route:ActivatedRoute,public service: settingsService,public datepipe: DatePipe, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider,private database: DatabaseProvider) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.specialsecond) {
        this.selectedSegment = params.specialsecond;
      }
    });
  }
    
    ngOnInit() {
    }

    
    ionViewWillEnter(){
      console.log('ionViewWillEnter')
      this.loader=true;
      this.statusBar.backgroundColorByHexString('#c7a254');
      this.tabBar = document.getElementById('myTabBar').childNodes[0];
      this.tabBar.classList.remove("tab-selected");
      
      let todayDate:any=new Date();
      this.TodayDate= this.datepipe.transform(todayDate,"dd MMM yyyy")
      let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
      this.TommorrowDate=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
      if(this.selectedSegment=='future')
        this.upcoming();
      else if(this.selectedSegment =='completed')
        this.Completed();
    }
    
    upcoming(){
      // this.service.commonAppointmentDateEventList('appointment',this.per_page).subscribe(res=>{
      //   console.log(res)
      //   this.show_details = res['event_list'];
      //   this.groupBy(this.show_details);
      // })
      this.per_page=1;
      this.per_page_offset=0;
      console.log("upcoming")
      this.databaseSummary.getAllEvents('appointment','New',this.per_page_offset).then(res=>{
        this.show_details = res['event_list'];
        console.log(this.show_details)
        this.groupBy(this.show_details);
      }).catch(err=>{console.log(err)})
      
    }
    
    Completed(){
      // this.service.completedAppointmentEventList('appointment',this.per_page).subscribe(res=>{
      //   console.log(res)
      //   this.history_details = res['event_list'];
      //   this.groupBy1(this.history_details);
      // })
      this.completepage=1;
      this.completepage_offset=0;
      console.log("Completed")
      this.databaseSummary.getAllEvents('appointment','history',this.completepage_offset).then(res=>{
        this.history_details = res['event_list'];
        console.log(this.history_details)
        this.groupBy1(this.history_details);
      }).catch(err=>{console.log(err)})
    }

    segmentChanged(event){
      console.log(event)
      this.selectedSegment=event;
      //this.ionViewWillEnter();
    }
    addPage(){
      this.router.navigate(["self-care-tabs/tabs/tab1/appointments/add-appointment"])
    }

    groupBy(data){

      let records:any[]=data.map(item => ({
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
      const example = from(records).pipe(
        groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
        mergeMap(group => group.pipe(toArray()))
      ).subscribe(val => {
        console.log(val)
        if(val){
          let todaydate:any=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
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
      });
      valueCurrent.map(item => valueOther.unshift(item));
      console.log(valueOther)
      this.display_details=valueOther;
      this.loader=false;
      console.log("upcomingC")
    }

    async deleteItem(id,show){
        const alert = await this.alertController.create({
          header: 'Appointments',
          message: 'Are you sure want to delete'+' '+show+' '+'Alert'+' '+'?',
          mode: 'md',
          buttons: [
            {
              text: 'Confirm',
              handler: () => {
                // this.service.commonDeleteEvent(id).subscribe(res => {
                //   console.log(res)
                //   this.ionViewWillEnter();
                //   this.presentToast("Record Deleted Successfully");
                // }, error => {
                //   console.log(error)
                // })
                this.database.deleteAnEvent(id).then(res=>{
                  this.ionViewWillEnter();
                  this.presentToast("Record Deleted Successfully");
                }).catch(err=>{console.log(err)})
                
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
      //   this.groupBy(this.show_details)
      // }, error=>{
      //     this.presentToast("Server slow, Please try again")
      // })
      this.databaseSummary.getAllEventsSearchList('appointment',search,'New',this.per_page_offset).then(res=>{
        this.show_details= res['event_list'];
        this.groupBy(this.show_details)
      }).catch(err=>{console.log(err)})

    }

    editDetails(view){
    
        let navigationExtras: NavigationExtras = {
          queryParams: {
            viewAppointment: JSON.stringify(view),
            check:'edit'
          }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/appointments/edit-appointment'], navigationExtras)
    }

    loadData(event) {
      setTimeout(() => {
      console.log('Done');
      this.per_page+=1;
      this.per_page_offset=this.per_page*10-10;
      let data:any[]=[];
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
      // this.service.commonAppointmentDateEventList("appointment",this.per_page).subscribe(res => {
      //     let data:any[] = res['event_list'];
      //     let concat=this.show_details.concat(data);
         
      //     this.appointmentData=concat.map(item => ({
      //       id:item.id,
      //       event_id: item.event_id,
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
            
      //       mapDate=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
            
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
      }, 500);
    }

    ionViewWillLeave() {
      this.statusBar.backgroundColorByHexString('#483df6');
      this.tabBar.classList.add("tab-selected");
    }
    
    completedSearchItem(event){
      let search:any=event.detail.value
      console.log(event);
       this.completepage=1;
       this.completepage_offset=0;
      // this.service.completedAppointmentSearchList('appointment',search).subscribe(res=>{
      //   console.log(res)
      //   this.history_details= res['event_list'];
      // this.groupBy1(this.history_details)
      // }, error=>{
      //     this.presentToast("Server slow, Please try again")
      // })

      this.databaseSummary.getAllEventsSearchList('appointment',search,'history',this.completepage_offset).then(res=>{
        this.history_details= res['event_list'];
        this.groupBy1(this.history_details)
      }).catch(err=>{console.log(err)})
    }

    groupBy1(data){

      let records:any[]=data.map(item => ({
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
      console.log("completedC")
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
        // this.service.completedAppointmentEventList("appointment",this.completepage).subscribe(res => {
        //     let data:any[] = res['event_list'];
        //     let concat=this.history_details.concat(data);
        //     this.appointmentData=concat.map(item => ({
        //       id:item.id,
        //       event_id: item.event_id,
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


        }, 500);
    }
}   
