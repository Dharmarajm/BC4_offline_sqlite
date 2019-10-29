import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsermanagementService } from '../../core/services/usermanagement.service';

@Component({
	selector: 'app-offers',
	templateUrl: 'offers.page.html',
	styleUrls: ['../main/main.page.scss'],
})
export class OffersPage {
	offer_list:any;
	user_profile:any;
	prefill:any;
	value:any;
	constructor(public modalController: ModalController, public user_service: UsermanagementService) {
		this.user_service.offerAmt().subscribe(res=>{
			this.offer_list=res['offers']
			console.log(this.offer_list)
		})
	 }

	ngOnInit() {


	}

	select(offer) {
		this.user_profile=JSON.parse(localStorage.getItem("userdata"))
		this.prefill=this.user_profile['patient']['id']
		this.user_service.couponAmt(this.prefill,offer['id']).subscribe(res=>{
			console.log(res)
			let data:any=res
			this.value=offer;
			this.value['amount']=data['amount'];
			console.log(this.value)	
			
			this.modalController.dismiss(this.value);
		})
	}

	close() {
		this.modalController.dismiss('data');
	}
}
