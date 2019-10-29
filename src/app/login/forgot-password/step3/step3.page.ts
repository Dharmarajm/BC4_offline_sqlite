import { Component, OnInit, ViewChild } from '@angular/core';
import { UsermanagementService } from '../../../core/services/usermanagement.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn,AbstractControl  } from '@angular/forms';
import { NavController,ToastController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {
   @ViewChild('pwd', { static: true }) password_verify;
  new_pwd:any;
  confirm_pwd: any;
  userData: any;
  user: FormGroup;
  registerProgress:boolean=false;
  submitted:boolean=false;

  constructor(private toast: Toast,public userservice: UsermanagementService, public route:ActivatedRoute, public router:Router, private fb: FormBuilder,public navCtrl: NavController, public toastController: ToastController) {
     this.route.queryParams.subscribe(params => {
       
      this.userData=params['user'];
     });
   }


  ngOnInit() {
    console.log("Step 3");

    this.user = new FormGroup({
     password: new FormControl('', [Validators.required,Validators.minLength(8)]),
     re_password: new FormControl('', [Validators.required,Validators.minLength(8),this.equalto('password')])
    });
  }

  get f(){return this.user.controls }

  ionViewDidEnter(){
    this.password_verify.setFocus();
  }

  equalto(field_name): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {

        let input = control.value;

        let isValid=control.root.value[field_name]==input
        if(!isValid){
        return { 'equalTo': {isValid} }
        }
        else{
        return null
        }
      }
  }

  updatePassword(val){
      this.submitted=true;
     if(this.user.valid) {
      let data:any={"password": val['password'],"user_id":this.userData};
      console.log(data,'datapwd')
      if(val['password'] == val['re_password'] ){
        this.registerProgress=true;
        this.userservice.pwdUpdate(data).subscribe(res=>{
            let pwdDetails=res;
            this.presentToast("Your password has been updated")
            this.registerProgress=false;
            this.router.navigate(['/login'])
          },error=>{
            this.registerProgress=false;
          });

      }else{
        //alert('Enter Correct Password')
        this.presentToast("your Password doesn't match")
      }
     }
    //  else{
    //    this.presentToast("Please enter password fields")
    //   }
     }              
  

    async presentToast(message) {
      this.toast.show(message, '2000', 'bottom').subscribe(
        toast => { 
          console.log(toast); 
        });
    }

    _keyPress(event: any) {
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
      
      if(event.charCode!=0){
        if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
        }
      }
    }


}
