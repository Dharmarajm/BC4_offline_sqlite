import { Component } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform,ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
// import { Autostart } from '@ionic-native/autostart/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Network } from '@ionic-native/network/ngx';
//import { Gesture } from '@ionic/angular/gestures/gesture';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NetworkService } from './network-connectivity/network-service';
import { of,from, Observable, forkJoin } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //public unsubscribeBackEvent: any;

  public counter = 0;
  patientList:any;
  test:any={}
  routesubscribe:any;
    constructor(
    public http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    public toastController: ToastController,
    private location: Location,
    private androidPermissions: AndroidPermissions,
    // private autostart: Autostart,
    private screenOrientation: ScreenOrientation,
    public network: Network,
    private networkProvider: NetworkService,
    public localNotifications:LocalNotifications
    // private keyboard: Keyboard
  ) {
    this.initializeBackButtonCustomHandler();
    this.initializeApp();
    this.statusBar.backgroundColorByHexString('#483df6');
  } 

  ngOnInit() {
    var array1 = ["ab", "xyz", "qr", "pqrs"],
    array2 = ["ab", "def", "lmno", "def", "qr", "pqrs"],
    unique = array1.filter(v => array2.indexOf(v) == -1);
    
    console.log(unique);
    // this.getAllEventsList().subscribe((responseList)=>{
    //   console.log(responseList)
    //  })
    //this.getUserIdFromCareGiver();
    this.groupBy();

  }

  // getPatientsList(){
  //   let response1 = this.http.get(`users/patient_list`);
  //   return forkJoin([response1]);
  // }

  // getUserIdFromCareGiver(){
  //    this.getPatientsList().subscribe((responseList)=>{
  //     this.patientList = responseList;
  //     let userIds = []
  //     for(let i in this.patientList[0]['patient']){
  //       alert(i)
  //       userIds.push(this.patientList[0]['patient'][i]['id'])  
  //       console.log(userIds)
  //     }
  //     console.log(userIds)
  //   })
  // }
  
  groupBy(data?){
    data = [{
      id: 1,
      event_id: 1,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "6-9 pm",
      event_options: {value1: "10"},
      event_name: "Oxygen Saturation",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 11,
      event_id: 11,
      created_at : "2019-11-28T05:18:13.345Z",
      updated_at: "2019-11-27T04:51:36.551Z", 
      description: "test",
      event_category : "6-9 pm",
      event_options: {value1: "10"},
      event_name: "Oxygen Saturation",
      event_datetime:"2019-11-27T05:18:13.345Z" 
    },{
      id: 2,
      event_id: 2,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "10", value2: "20"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 3,
      event_id: 3,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "12-3 pm",
      event_options: {value1: "10"},
      event_name: "Oxygen Saturation",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 4,
      event_id: 4,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 5,
      event_id: 5,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 6,
      event_id: 6,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z"  
    },{
      id: 7,
      event_id: 7,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 8,
      event_id: 8,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 9,
      event_id: 9,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 10,
      event_id: 10,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 11,
      event_id: 11,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    },{
      id: 12,
      event_id: 12,
      created_at : "2019-11-28T04:51:36.551Z",
      updated_at: "2019-11-28T04:51:36.551Z", 
      description: "test",
      event_category : "Fasting",
      event_options: {value1: "20", value2: "30"},
      event_name: "Blood Glucose",
      event_datetime:"2019-11-28T04:51:36.551Z" 
    }];
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

    
    
    // const example = from(records).pipe(
    //   groupBy(person =>  person.event_name),  //,person =>  person.event_category
    //   mergeMap(group => group.pipe(toArray())),
    //   mergeMap((array) => {// Take each from above array and group each array by manDate
    //     return from(array).pipe(groupBy(
    //       val => formatDate(val.event_datetime, 'yyyy-MM-dd', 'en-US'),
    //       ),
    //       mergeMap(group => {
    //         return group.pipe(toArray()); // return the group values as Arrays
    //       })
    //     );
    //   }),
    //   mergeMap((array) => {// Take each from above array and group each array by manDate
    //     return from(array).pipe(groupBy(
    //       val => val.event_category,
    //       ),
    //       mergeMap(group => {
    //         return group.pipe(toArray()); // return the group values as Arrays
    //       })
    //     );
    //   }),map((val) => {  //For each array returned , calculate the sum and map it to the Object you wanted
       
    //     return { event_name: val[0].event_name, date: val[0].event_datetime, event_category: val[0].event_category, data:val }
    //   })
    // ).subscribe(val => {
    //   console.log(val)
    //   let event_name = `${val['event_name']}`;
    //   let date = formatDate(val.date, 'yyyy-MM-dd', 'en-US');
    //   let event_category = val.event_category;
      
    //   this.test[`${event_name}`][`${date}`][`${event_category}`] = val['data'];
    // })
    let vitalList = {}
    for(var i in records){
        let event_datetime = formatDate(records[i]['event_datetime'], 'yyyy-MM-dd', 'en-US');
        let event_category = records[i]['event_category'];
        let event_name = records[i]['event_name'];
        if(vitalList[event_name][event_datetime][event_category].length==undefined){
            vitalList[event_name][event_datetime][event_category] = [];
            
        }
        vitalList[event_name][event_datetime][event_category].push(records[i]);     

    }

    console.log(vitalList)
    
}

  initializeApp() {
    this.initializeBackButtonCustomHandler();
    this.platform.ready().then(() => {
    this.splashScreen.hide();
    // this.autostart.enable();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        
       this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
       );
      let permissions:any[]=[this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS,this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,this.androidPermissions.PERMISSION.READ_CONTACTS,this.androidPermissions.PERMISSION.WRITE_CONTACTS,this.androidPermissions.PERMISSION.RECORD_AUDIO]
        this.androidPermissions.requestPermissions(permissions);
      
     

      // watch network for a connection
      this.network.onConnect().subscribe(async() => {
        //this.database.isNetworkOnline=true;
        this.networkProvider.isNetworkOnline=true;
        alert(this.networkProvider.isNetworkOnline)
        //await this.synchronize.initiateSync();
      });

      this.network.onDisconnect().subscribe(async() => {       
        //this.database.isNetworkOnline=false;
        this.networkProvider.isNetworkOnline=false;
        alert(this.networkProvider.isNetworkOnline)
      });

      this.localNotifications.on('click').subscribe(notification => {
        let path=notification.text;
        if(path=="General Alert"){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            specialsecond: 'third'
          }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],navigationExtras)   
      }  
      if(path=="Vital Alert"){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            specialsecond: 'second'
          }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],navigationExtras)   
      }   
      if(path=="Medication Alert"){
        let navigationExtras: NavigationExtras = {
          queryParams: {
            specialsecond: 'first'
          }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],navigationExtras)   
      }  if(path == 'Appointment')    {   
        let navigationExtras: NavigationExtras = {
          queryParams: {
            specialsecond: 'completed'
          }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/appointments'],navigationExtras)      
    }         
       })
    });
  }

  async presentToast() {
   const toast = await this.toastController.create({
     message: "Press again to exit",
     duration: 2000,
   });
  toast.present();
 }

  ngOnDestroy() {
 }

//  getAllEventsList(){
//   let response1 = this.http.get(`users/user_data`);
//   return forkJoin([response1]);
//  }


 
  initializeBackButtonCustomHandler(): void {
    this.platform.ready().then(() => {
      document.addEventListener("backbutton", () => {
      //   this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999,()=> {
      if(this.router.url == "/" || this.router.url == "/self-care-tabs/tabs/tab1" || this.router.url == "/care-giver-tabs/tabsc/tab1c" || this.router.url == "/care-giver-tabs/tabsc/tab2c" || this.router.url == "/care-giver-tabs/tabsc/tab3c" || this.router.url == "/login" || this.router.url =="/self-care-tabs/tabs/tab2" ||this.router.url =="/self-care-tabs/tabs/tab3"){
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 2000)
        }else {
          navigator['app'].exitApp();
          }
        }
      });
    })
  }
  
}
