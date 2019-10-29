import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../../../../environments/environment';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.page.html',
  styleUrls: ['../reports.page.scss']
})
export class ReportModalPage implements OnInit {
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
    this.statusBar.backgroundColorByHexString('#ea4e4e');
  }

}


