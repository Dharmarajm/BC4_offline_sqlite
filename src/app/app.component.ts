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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //public unsubscribeBackEvent: any;

  public counter = 0;
  routesubscribe:any;
    constructor(
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
        //await this.synchronize.initiateSync();
      });

      this.network.onDisconnect().subscribe(async() => {       
        //this.database.isNetworkOnline=false;
        this.networkProvider.isNetworkOnline=false;
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
