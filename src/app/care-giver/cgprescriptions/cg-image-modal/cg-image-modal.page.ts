import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cg-image-modal',
  templateUrl: './cg-image-modal.page.html',
  styleUrls: ['../cgprescriptions.page.scss']
})
export class CgImageModalPage implements OnInit {
  image_details:any;
  image:any;
  environment:any;
  
  slideOpts = {
    centeredSlides: 'true'
};
  constructor( public modalController: ModalController, public navParams: NavParams) {
    this.environment = environment.ImageUrl;
    this.image=this.navParams.get('imgSource')
     this.image_details=this.navParams.get('imgDetails')
     console.log(this.image_details);
      
   }

  ngOnInit() {
  }


  closeModal() {
    this.modalController.dismiss();
}

}