import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { IonSlides } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { environment } from '../../../../environments/environment';
import { NetworkService } from '../../../network-connectivity/network-service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.page.html',
  styleUrls: ['../prescriptions.page.scss']
})
export class ViewPrescriptionPage implements OnInit {
  tabBar: any;
  data: any;
  view_all_image:any[]=[];
  environment:any;
  isNetwork:boolean;
  // viewloader:boolean;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(public sanitizer: DomSanitizer,private webview: WebView,private statusBar: StatusBar,private route: ActivatedRoute, private router: Router, public modalController: ModalController,private networkProvider: NetworkService) {
    //this.viewloader=true;
    this.environment = environment.ImageUrl;
    console.log(this.environment);
    if(this.networkProvider.isNetworkOnline){
      this.isNetwork = true;
    }else{
        this.isNetwork = false;
    }
    
    this.route.queryParams.subscribe(params => {
        console.log(params)
        this.view_all_image=[];
        if (params && params.viewprescription) {
          this.data = JSON.parse(params.viewprescription);
          let localAssets = this.data["event_options"];
          let globalassets = this.data["event_assets"];
          for(let i in localAssets["localImagePath"]){
            let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"],"globalURI": null,"cdvFilePath":localAssets["localImagePath"][i]["cdvFilePath"],"fileName":localAssets["localImagePath"][i]["fileName"],"delete":localAssets["localImagePath"][i]["delete"] };
            if(globalassets!=null){
              if(globalassets.length>i){
                let globeURL = this.environment+globalassets[i]["url"]
                mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
              }
            }
            
            this.view_all_image.push(mapUrl)
          }
        }
    });     
  }

  slidesDidLoad(slides: IonSlides) {
  }    //slides.startAutoplay();


  ngOnInit() {


    //let images:any=["../../../../assets/img/login-logo.png","../../../../assets/img/ico.png"]
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar.style.display = 'flex';
  }

  async viewImage(source) {
    console.log(source);
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        imgSource: source,
        imgDetails: this.data
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

editDetails(){ 
   let navigation: NavigationExtras = {
      queryParams: {
        edit: JSON.stringify(this.data)
      }
    };
   this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions/edit-prescription'], navigation);

}

}
