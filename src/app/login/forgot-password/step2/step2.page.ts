import { Component, OnInit, ViewChild } from '@angular/core';
import { UsermanagementService } from '../../../core/services/usermanagement.service';
import { ActivatedRoute , Router, NavigationExtras} from '@angular/router';
import { NavController,ToastController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {
   @ViewChild('code', { static: true }) verify_input;
  user_id: any;
  emailDetails: any;
  verify_code:any;
  registerProgress:boolean=false;
  constructor(private toast: Toast,public userservice: UsermanagementService,  public route:ActivatedRoute, public router: Router,public navCtrl: NavController, public toastController: ToastController) { 
   this.route.queryParams.subscribe(params => {
    
    this.emailDetails=JSON.parse(params['special']);
    
  });
  }

  ngOnInit() {
    console.log("step2")
  }

ionViewDidEnter(){
    this.verify_input.setFocus();
  }
  

verify(code){
 if(code!="" && code!=undefined && code!=null){ 
  this.registerProgress=true;
  
  this.userservice.VerifyCode(code,this.emailDetails['user_id']).subscribe(res=>{
       
    this.registerProgress=false;    
    if(res['status'] == true){
      let navigationExtras: NavigationExtras = {
         queryParams: {
           user: res['user_id'],
         }
      };
      this.router.navigate(['/step3'],navigationExtras);
    }else if(res['status'] == false){
      this.presentToast("Please enter the valid code")
    }
  
  },error=>{
    this.registerProgress=false;
    
  });
 }else{
   this.presentToast('Please enter your valid code')
 } 

}

  resendCode(){
   this.userservice.emailVerify(this.emailDetails["email"]).subscribe(res=>{
      let verify_details: any=res;
      if(verify_details['status']== true){
        this.presentToast('Verification code has been sent');  
      }else{
        
      }
   })
  }

  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
}

}