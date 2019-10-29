import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CgReportModalPage } from '../cg-report-modal/cg-report-modal.page';
import { IonSlides } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cg-view-report',
  templateUrl: './cg-view-report.page.html',
  styleUrls: ['../cgreports.page.scss']
})
export class CgViewReportPage implements OnInit {
  tabBar: any;
  data: any;
  view_all_image:any;
  environment:any;

  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  
  constructor(private statusBar: StatusBar,private route: ActivatedRoute, private router: Router, public modalController: ModalController) { 
   this.environment = environment.ImageUrl;
   console.log(this.environment);
   this.route.queryParams.subscribe(params => {
    // console.log(params);
      if (params && params.viewReport) {
        this.data = JSON.parse(params.viewReport);
        this.view_all_image = this.data.event_assets;
        console.log(this.view_all_image);
      }
   });
  }
   
  ngOnInit() {
  }

 
  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ea4e4e');
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
  }

  slidesDidLoad(slides: IonSlides) {
  //  slides.startAutoplay();
  }

  async viewImage(source,data) {
    const modal = await this.modalController.create({
      component: CgReportModalPage,
      componentProps: {
        imgSource: source,
        imgDetails: data
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
  }
}
