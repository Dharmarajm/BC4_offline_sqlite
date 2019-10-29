import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OffersPage } from '../offers/offers.page';
import { UsermanagementService } from '../../core/services/usermanagement.service';

declare var RazorpayCheckout: any; 

@Component({
  selector: 'app-self-care-off-payment',
  templateUrl: 'self-care-off-payment.page.html',
  styleUrls: ['../main/main.page.scss'],
})
export class selfCareOfferPaymentPage {
  
  user_profile:any; 
  cardDetails: any = {};
  prefill:any;
  pay_amount:any;
  offer_details:any={};
  status:boolean=false;
  currencyIcon: string = '$';
  razor_key = 'rzp_test_09tj2MBCJaCXh6';
  constructor(private router: Router, public modalController: ModalController,public user_service: UsermanagementService) {
   
    this.user_profile=JSON.parse(localStorage.getItem("userdata"))
    console.log(this.user_profile)
    this.prefill=this.user_profile['patient'];
    this.user_service.user_data(this.prefill.email).subscribe(res=>{
      console.log(res)
      let data=res['authentication'][0];
      let dataAuth={
        patient:data
      }
      
      localStorage.setItem("userdata",JSON.stringify(dataAuth));  
      this.user_profile=JSON.parse(localStorage.getItem("userdata"));
      this.prefill=this.user_profile['patient'];
    })
    
    this.user_service.subscriptionAmt().subscribe(res=>{
    this.pay_amount=res;
    console.log(this.pay_amount)
    })
  }
  

  payment(){
      // this.router.navigate(['/register/payment-success']);
      /*this.navCtrl.navigateBack('/final-registration');*/
    let payAmount:number;  
    if(this.status==true){
        payAmount=this.offer_details.amount;
    }else{
      payAmount= this.pay_amount;
    }
    var options = {
        key: this.razor_key,
        description: 'Credits towards consultation',
        /*image: 'https://i.imgur.com/3g7nmJC.png',*/
        currency: "INR",
        amount: payAmount * 100,
        name: 'BC4',
        prefill: {
          email: this.prefill.email,
          contact: this.prefill.mobile_no,
          name: this.prefill.name
        },
        theme: {
          color: '#F37254'
        },
        modal: {
          ondismiss: function () {
            alert('dismissed')
          }
        }
      };

    

    var successCallback = (success)=> {
      
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
     this.makePayment( success.razorpay_payment_id); 
    }

   
    var cancelCallback = function(error) {
      console.log(error.description + ' (Error '+error.code+')')
    }

    //RazorpayCheckout.open(options,successCallback,cancelCallback)
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
  }

  

  makePayment(payment){
    
    var paymentId = payment;
    
    let data={
      "payment_id":paymentId,
      "user_id":this.prefill['id'],
      "offer_id":this.offer_details['id'] || null
    }
   
    this.user_service.selfPayment(data).subscribe(res=>{
      console.log(this.pay_amount);
      this.router.navigate(['register/payment-success']);
    },error=>{
      alert('Failed to update your payment,Please contact administrator')
    })
    
  }
       

  async coupon() {
    const modal = await this.modalController.create({
      component: OffersPage,
      mode: "md"
    });
    modal.onDidDismiss().then((data) => {
       let offerData=data.data 
      
       console.log(offerData)
       if(offerData!='data'){
        this.status=true
        this.offer_details=offerData;
        
        console.log(this.offer_details);  
       }
    })
    return await modal.present();
  }
}