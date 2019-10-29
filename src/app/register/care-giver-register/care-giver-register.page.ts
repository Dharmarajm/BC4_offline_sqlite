import { Component , ViewChild} from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl, ValidatorFn  } from '@angular/forms';
import { UsermanagementService } from '../../core/services/usermanagement.service';
//import { NavController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { TermsConditionsPage } from '../../login/terms-conditions/terms-conditions.page'
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-care-giver-register',
  templateUrl: 'care-giver-register.page.html',
  styleUrls: ['../main/main.page.scss'],
})
export class careGiverRegisterPage {
  @ViewChild('unique_id', { static: true }) unique_identification;
  giverForm: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  id: any;
  value: any;
  language:any;
  checkStatus:boolean=false;
  registerProgress:boolean=false;
  submitted:boolean=false;

  constructor(private toast: Toast, public modalController: ModalController, private fb: FormBuilder,private router:Router,public user_service: UsermanagementService,private translate: TranslateService,public navCtrl: NavController) { 
   // this.language=localStorage.getItem('language');
   // console.log(this.language,'ss');
    this.translate.use('en');    
  }

ionViewDidEnter(){
    this.unique_identification.setFocus();
  }

  ngOnInit() {
     
     this.giverForm=this.fb.group({
      'user_uid':  ['',[Validators.required]], 
    	'name':      ['',[Validators.required]],
    	'mobile_no': ['',[Validators.required,Validators.minLength(10)]],
      'password':  ['',[Validators.required, Validators.minLength(8)]],
      'password1': ['', [Validators.required, Validators.minLength(8),this.equalto('password')]],
      'email':     ['',[Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])]],
      'role_id':   [2,[]],
      'checkStatus':[this.checkStatus,[Validators.pattern('true')]]
     });
      this.giverForm.controls['user_uid'].valueChanges.subscribe(val=>{     
       this.id=val;  
     });

  }

  get f(){return this.giverForm.controls }

  care_giverId(){
           
    this.user_service.verify_CGId(this.id).subscribe(res=>{
          let value:any=res["message"];
          if(value=='false'){
            this.presentToast('Enter valid UID')
           
          }
    }, error=>{
      if(error.status==401){
        this.presentToast('Enter valid UID')        
      }
      else if(error.status==422){
        this.presentToast('The patient already have two caregivers')  
      }
    });
      
  }

  

  CareGiverDetail(giver_detail){
    console.log(giver_detail)
    this.submitted=true;
    if(this.giverForm.valid){
      this.registerProgress=true;
      
      let data:any=giver_detail['email'].toLowerCase();
      let value:any={'email':data,'user_uid':giver_detail['user_uid'],'name':giver_detail['name'],'mobile_no':giver_detail['mobile_no'],'password':giver_detail['password'],'role_id':2,}

      this.user_service.CGdetails(value).subscribe(res=>{
       this.registerProgress=false; 
       this.presentToast('You have registered successfully') 
      
       this.router.navigate(['/login']);

      },error=>{
        this.registerProgress=false;
        if(error.status==401){
         this.presentToast('UID not valid')   
         
        }
       
        console.log(error)
      });
    }
    // else if(this.giverForm.value["user_uid"]==''){
    //     this.presentToast('Please enter your UID')
    // }else if(this.giverForm.value["mobile_no"]==''){
    //     this.presentToast('Please enter your Mobile No')
    // }else if(this.giverForm.value["name"]==''){
    //     this.presentToast('Please enter your name')
    // }else if(this.giverForm.value["email"]==''){
    //     this.presentToast('Please enter your email')
    // }else if(this.giverForm.value["password"]=='' || this.giverForm.value["password1"]==''){
    //     this.presentToast('Please enter the password')
    // }else if(this.giverForm.value["password"]!=this.giverForm.value["password1"]){
    //     this.presentToast("Password doesn't match")
    // }
    else if(this.giverForm.value["checkStatus"]==false){
         this.presentToast("Please agree terms and conditions")
        
    }
    // else{
    //     this.presentToast('Please fill all the mandatory fields')
    // }
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

    async presentToast(message) {
      this.toast.show(message, '2000', 'bottom').subscribe(
        toast => { 
          console.log(toast); 
        });
      
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

    goToterms(){
      this.router.navigate(['/terms_conditions']);  
    }

}
