import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReportModalPage } from '../report-modal/report-modal.page';
import { IonSlides } from '@ionic/angular';
import { environment } from '../../../../environments/environment';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NetworkService } from '../../../network-connectivity/network-service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.page.html',
  styleUrls: ['../reports.page.scss']
})
export class ViewReportPage implements OnInit {
  tabBar: any;
  data: any;
  view_all_image:any;
  environment:any;
  isNetwork:boolean;

  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  
  constructor(public sanitizer: DomSanitizer,private webview: WebView,private statusBar: StatusBar,private route: ActivatedRoute, private router: Router, public modalController: ModalController,private networkProvider: NetworkService) { 
   this.environment = environment.ImageUrl;

    if(this.networkProvider.isNetworkOnline){
      this.isNetwork = true;
    }else{
        this.isNetwork = false;
    }

   console.log(this.environment);
   this.route.queryParams.subscribe(params => {
   
      this.view_all_image=[];
      // if (params && params.viewReport) {
      //   this.data = JSON.parse(params.viewReport);
      //   this.view_all_image = this.data.event_assets;
      //   console.log(this.view_all_image);
      // }

      if (params && params.viewReport) {
        this.data = JSON.parse(params.viewReport);
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
   
  ngOnInit() {
  }

 
  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ea4e4e');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }

  slidesDidLoad(slides: IonSlides) {
  //  slides.startAutoplay();
  }

  async viewImage(source,data) {
    const modal = await this.modalController.create({
      component: ReportModalPage,
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
   this.router.navigate(['self-care-tabs/tabs/tab1/reports/edit-report'], navigation);

  }

  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
    this.tabBar = document.getElementById('myTabBar').childNodes[0];
    this.tabBar.classList.remove("tab-selected");
  }
}
