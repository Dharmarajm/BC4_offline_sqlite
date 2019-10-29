import { Component, OnInit ,ViewChild} from '@angular/core';
import { UsermanagementService } from '../../../core/services/usermanagement.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx'
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {
  @ViewChild('mail', { static: true }) email_input;
  email:any;
  registerProgress:boolean=false;
  constructor(private toast: Toast,private keyboard: Keyboard, public userservice: UsermanagementService, public router:Router,public toastController: ToastController) { }

    ngOnInit() {
      
    }

  ionViewDidEnter(){
    this.email_input.setFocus();
  }
 
    next(mail){
      if(this.email!="" && this.email!=undefined && this.email!=null){
        this.registerProgress=true;
        let e_id:any=mail.toLowerCase();
         this.userservice.emailVerify(e_id).subscribe(res=>{
          this.keyboard.hide();
        let verify_details: any=res;
        console.log(verify_details)      
         this.registerProgress=false; 

        if(verify_details['status']== true){
            
            let navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(verify_details)
              }
            };
        
           this.presentToast('Verification code has been sent to your Email ID');
           this.router.navigate(['/step2'], navigationExtras)

        }
        else if(verify_details['status']== false){
        //alert("Enter Valid Email-ID")
        this.presentToast('Enter your valid Email ID')
        }
      },error=>{
        this.registerProgress=false;
      });

      }
      else{
        this.presentToast('Please enter your Email ID')
      }

    }

    async presentToast(message) {
      this.toast.show(message, '2000', 'bottom').subscribe(
        toast => { 
          console.log(toast); 
        });
    }

    


}
