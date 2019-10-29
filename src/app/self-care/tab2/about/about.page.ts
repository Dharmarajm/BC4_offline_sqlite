import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @ViewChild('bloodgroup', { static: true }) bloodgroup;
  update:FormGroup
  update_details:any;
  policy:any;
  getUpdateData:any;
  getPolicyData:any;
  tabBar:any;
  mediClaim:any;
  policyIssuer:any;
  add_alert: any;
  constructor(public alertController: AlertController,private toast: Toast,private router: Router, private fb: FormBuilder, public userservice: settingsService, public route:ActivatedRoute,public toastController: ToastController,public database: DatabaseProvider) {
    /*let data = this.navParams.get('special');
     this.getUpdateData=data['user_info'];
     this.getPolicyData=data['policies'][0]['attribute_name_value']; */
   
    this.route.queryParams.subscribe(params => {
      
      this.update_details=JSON.parse(params['special']);
      
      this.getUpdateData=this.update_details['user_info'];
      if(this.update_details['policies'].length!=0){
        this.getPolicyData=this.update_details['policies'][0]['attribute_name_value'];
        this.mediClaim=this.getPolicyData['mediclaim_policy'];
        this.policyIssuer=this.getPolicyData['policy_issuer'];
      }else{
        this.mediClaim="";
        this.policyIssuer="";
      }
    });

    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';

   }

  ngOnInit() {
   this.update=this.fb.group({
     'blood_group':[this.getUpdateData['blood_group'],[Validators.required]],
     'age':[this.getUpdateData['age'],[Validators.required]],
     'mediclaim_policy':[this.mediClaim],
     'policy_issuer':[this.policyIssuer]
   })

  }

ionViewDidEnter(){
    this.bloodgroup.setFocus();
  }

updateValues(update){ 
    if( this.update.valid){
     let data:any=  {"user": {"blood_group":update.blood_group,"age": update.age},
                    "policy":{ "attribute_name_value":{
                           "mediclaim_policy": update.mediclaim_policy,
                           "policy_issuer": update.policy_issuer}}}                                                                                                                      
           this.addconfirmation(data)
    }else{
           this.presentToast('Please enter the values')
    }
  }
  async addconfirmation(data){
    this.add_alert = await this.alertController.create({
      header: 'About',
      message: 'Are you sure to submit?',
      mode: 'md',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Edit'      
        },
        {
          text: 'Submit',
          role: 'submit',
          cssClass: 'secondary',
          handler: () => {
            //   this.userservice.aboutUpdate(data).subscribe(res=>{          
            //     this.presentToast('Emergency Details updated successfully');  
            //     this.router.navigate(['/self-care-tabs/tabs/tab2'],{skipLocationChange: true })
            //  });
            this.database.updateUserAndPolicyData(data).then(res=>{
              this.presentToast('Emergency Details updated successfully');  
              this.router.navigate(['/self-care-tabs/tabs/tab2'],{skipLocationChange: true }) 
            }).catch(err=>{console.log(err)})
          }
        }
      ]
    });
    await this.add_alert.present();
  }

   async presentToast(message) {
      this.toast.show(message, '2000', 'bottom').subscribe(
        toast => { 
          console.log(toast); 
        });
    }

    close(){
     this.router.navigate(['/self-care-tabs/tabs/tab2'],{skipLocationChange: true })
    }

    ionViewWillLeave(){
     this.tabBar.style.display = 'flex'; 
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
