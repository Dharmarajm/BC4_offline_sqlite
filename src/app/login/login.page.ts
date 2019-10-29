import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsermanagementService } from '../core/services/usermanagement.service';
import {TranslateService} from '@ngx-translate/core';
//import { Platform} from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
//import { Register } from '../register/main/main';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({  
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  //formSubmitted:boolean=false;
  submitted:boolean=false;
  show:boolean=false;
  User:any;
  @ViewChild('email_auto', { static: true }) email_focus ; 
  constructor(private keyboard: Keyboard,private toast: Toast, private fb: FormBuilder, private router: Router, public userservice: UsermanagementService, public navCtrl: NavController, private translate: TranslateService) { 
  this.translate.setDefaultLang('en');
   
    //const browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|fr|es/) ? browserLang : 'en');
  }
/*useLanguage(language: string) {
    this.translate.use(language);
}*/
  ngOnInit() {
     this.loginForm = this.fb.group({
         email: new FormControl('', Validators.compose([
         Validators.required,
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
         password: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(8)
         ])),
     });
  }
  get f(){return this.loginForm.controls }


  ionViewDidEnter(){
     this.email_focus.setFocus();
  }

  // ionViewDidLoad(){
  //   window.setTimeout(() => {
  //         this.myInput.setFocus();
  //   }, 600);
  // }

  translatetest(lang){
    
    this.translate.use(lang);
    let data=lang;
    
    localStorage.setItem('language',data);
    
  } 

  login_values(credentials){
    this.keyboard.hide();
    this.submitted=true
    console.log(credentials)
    let data:any=credentials['email'].toLowerCase();
    console.log(data)
    let value:any={'email':data,'password':credentials['password']}
    //this.formSubmitted=true;
    if(this.loginForm.valid){
       this.userservice.login_credential(value).subscribe(res=>{
        this.User = res;
        console.log(this.User)       
       if(this.User.error=="Need to subscription"){
        let dataValue:any={
           patient:{
             email:data
           }
        } 

        localStorage.setItem("userdata",JSON.stringify(dataValue));
        this.router.navigate(['/register/self-care-offer-payment']);
      }else{
      localStorage.setItem('user_id',this.User.user.id);
       let data:any=res["token"];
       let role:any=res["user"];
       let u_uid=role['user_uid']
       
       localStorage.setItem('token',data);
       console.log(data)
       localStorage.setItem('role_id',role["role_id"]);
       localStorage.setItem('user',u_uid);
       if(role["role_id"]==1){
         this.presentToast('You have Logged in successfully');
         this.router.navigate(['/self-care-tabs/tabs/tab1']);
       }else if(role["role_id"]==2){
         this.presentToast('You have Logged in successfully');
         this.router.navigate(['/care-giver-tabs/tabsc/tab1c']);
       }else{
         //alert("Invalid credentials");
         this.presentToast('Please enter the valid crendentials');
         this.loginForm.reset();
         localStorage.clear();
       }
        
    }},error=>{
    
      if(error.status==401){
       this.presentToast('Please enter the valid crendentials'); 
      }else{
        
      }
     })
    
   }
   else{
      this.presentToast('Please enter the valid crendentials'); 
   }
  
  }

  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  _keyPress(event: any) {
      const pattern = /^[a-z0-9_@./#&+-]*$/
      let inputChar = String.fromCharCode(event.charCode);
      
      if(event.charCode!=0){
        if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
        }
      }
    }
  // register(){
  //   this.navCtrl.push(Register);
  // }


    /*ionViewDidEnter()
  { 
   this.subscription = this.platform.backButton.subscribe(()=>{ navigator['app'].exitApp(); });
  } */
  ngOnDestroy(){
    this.loginForm.reset();
  }
}
