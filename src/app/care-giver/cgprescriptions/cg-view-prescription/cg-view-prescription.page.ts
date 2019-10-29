import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CgImageModalPage } from '../cg-image-modal/cg-image-modal.page';
import { IonSlides } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cg-view-prescription',
  templateUrl: './cg-view-prescription.page.html',
  styleUrls: ['../cgprescriptions.page.scss']
})
export class CgViewPrescriptionPage implements OnInit {
  tabBar: any;
  data: any;
  view_all_image:any;
  environment:any;
  // viewloader:boolean;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private statusBar: StatusBar,private route: ActivatedRoute, private router: Router, public modalController: ModalController) {
    //this.viewloader=true;
    this.environment = environment.ImageUrl;
    console.log(this.environment);
    this.route.queryParams.subscribe(params => {
        
        if (params && params.viewprescription) {
          this.data = JSON.parse(params.viewprescription);
          this.view_all_image = this.data.event_assets;
          console.log(this.view_all_image);
          // this.viewloader=false;
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
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#978ad2');
    this.tabBar.style.display = 'flex';
  }

  async viewImage(source) {
    console.log(source);
    const modal = await this.modalController.create({
      component: CgImageModalPage,
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

}
