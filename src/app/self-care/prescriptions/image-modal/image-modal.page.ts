import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../../environments/environment';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['../prescriptions.page.scss']
})
export class ImageModalPage implements OnInit {
  image_details:any;
  image:any;
  environment:any;
  
  slideOpts = {
    centeredSlides: 'true'
};
  constructor( public modalController: ModalController, public navParams: NavParams, private statusBar: StatusBar,private webview: WebView) {
    this.environment = environment.ImageUrl;
    this.image=this.webview.convertFileSrc(this.navParams.get('imgSource'));
     this.image_details=this.navParams.get('imgDetails')
     console.log(this.image_details);
      
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#000000');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#978ad2');
  }

}