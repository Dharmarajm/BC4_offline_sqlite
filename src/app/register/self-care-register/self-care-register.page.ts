import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl,ValidatorFn,AbstractControl } from '@angular/forms';
import { UsermanagementService } from '../../core/services/usermanagement.service';
import { NavController,ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TermsConditionsPage } from '../../login/terms-conditions/terms-conditions.page';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
	selector: 'app-self-care-register',
	templateUrl: 'self-care-register.page.html',
	styleUrls: ['../main/main.page.scss'],
})
export class selfCareRegisterPage {
	 @ViewChild('name_auto', { static: true }) name_focus ;
	detailForm: FormGroup
	showBackdrop: boolean = false;
	checkStatus:boolean=false;
	registerProgress:boolean=false;
	submitted:boolean=false;

	constructor(private toast: Toast, private translate: TranslateService,public modalController: ModalController, private router: Router, private fb: FormBuilder, public user_service: UsermanagementService, public toastController: ToastController) { 
      this.translate.use('en');
	}

	ngOnInit() {
		
		this.detailForm = this.fb.group({
			'name': ['', [Validators.required]],
			'email': ['', [Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
			])]],
			'mobile_no': ['', [Validators.required,Validators.minLength(10)]],
			'address': ['', [Validators.required]],
			'country': ['', [Validators.required]],
			'care_name': ['', []],
			'care_mobile': ['', [Validators.minLength(10)]],
			'password': ['', [Validators.required, Validators.minLength(8)]],
			'password1': ['', [Validators.required, Validators.minLength(8),this.equalto('password')]],
			'checkStatus':[this.checkStatus,[Validators.pattern('true')]]

		});
	}
	get f(){return this.detailForm.controls }


	ionViewDidEnter(){
     this.name_focus.setFocus();
  }

	self_detail(detail) {
		this.submitted=true;
	  if(this.detailForm.valid){
	  	this.registerProgress=true;
	  	let id:any=detail['email'].toLowerCase()
	  	 let data = {
			"user": {
				'name': detail.name,
				'email': id,
				'password': detail.password,
				'password1': detail.password1,
				'mobile_no': detail.mobile_no,
				'address': detail.address,
				'country': detail.country,
				'blood_group': '',
				'age': '',
				'role_id': 1
			},
			"caregiver": {
				'name': detail.care_name,
				'mobile_no': detail.care_mobile,
				'role_id': 2
			}
		}


		this.user_service.care_detail(data).subscribe(res => {
			
			this.registerProgress=false;
			let user_details=res;
			localStorage.setItem("userdata",JSON.stringify(user_details))
            this.presentToast('You have registered successfully')  
			this.router.navigate(['register/self-care-offer-payment']);
		},error=>{
			this.registerProgress=false;
			this.presentToast(error["error"]["error"])
		});
	  }
	  
	//   else if(this.detailForm.value["name"]==''){
    //       this.presentToast('Please enter your name')
	//   }else if(this.detailForm.value["email"]==''){
    //       this.presentToast('Please enter your email')
	//   }else if(this.detailForm.value["password"]=='' || this.detailForm.value["password1"]==''){
    //       this.presentToast('Please enter the password')
	//   }else if(this.detailForm.value["password"]!=this.detailForm.value["password1"]){
    //       this.presentToast("Password doesn't match")
	//   }
	  else if(this.detailForm.value["checkStatus"]==false){
          this.presentToast("Please agree terms and conditions")
	  }
	//   else{
	  	
	//   	   this.presentToast('Please fill all the mandatory fields')
	//   }	
		
		//this.router.navigate(['register/self-care-payment']);

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

    goToterms(){
	  this.router.navigate(['/terms_conditions']); 
    }
}
