import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OffersPage } from '../offers/offers.page';

declare var RazorpayCheckout: any; 

@Component({
  selector: 'app-self-care-payment',
  templateUrl: 'self-care-payment.page.html',
  styleUrls: ['../main/main.page.scss'],
})
export class selfCarePaymentPage {
  paymentAmount: number = 500;
  
  currencyIcon: string = '$';
  razor_key = 'rzp_test_D4jgfSRripvke9';
  cardDetails: any = {};
  constructor(private router: Router, public modalController: ModalController) {}


payment(){
  this.router.navigate(['register/payment-success']);
     /*this.navCtrl.navigateBack('/final-registration');*/

  // var options = {
  //     key: this.razor_key,
  //     description: 'Credits towards consultation',
  //     /*image: 'https://i.imgur.com/3g7nmJC.png',*/
  //     currency: "INR",
  //     amount: this.paymentAmount * 100,
  //     name: 'BC4',
  //     prefill: {
  //       email: 'adhvik@gmail.com',
  //       contact: '9621323231',
  //       name: 'adhvik'
  //     },
  //     theme: {
  //       color: '#F37254'
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         alert('dismissed')
  //       }
  //     }
  //   };

// var successCallback = function(success) {
//   //alert('payment_id: ' + success.razorpay_payment_id)
  
//   var orderId = success.razorpay_order_id;
//   var signature = success.razorpay_signature;
//   this.router.navigate(['register/payment-success'])
// }

// var cancelCallback = function(error) {
  
//   //alert(error.description + ' (Error '+error.code+')')
// }

//   RazorpayCheckout.open(options, successCallback, cancelCallback);

}

  async coupon() {
    const modal = await this.modalController.create({
      component: OffersPage,
      mode: "md"
    });
    return await modal.present();
  }
}