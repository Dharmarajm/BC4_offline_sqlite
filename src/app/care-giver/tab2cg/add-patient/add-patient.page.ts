import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['../tab2cg.page.scss']
})
export class addPatientPage {
    myForm: FormGroup;
    tabBar: any;
    constructor(private database: DatabaseProvider,private toast: Toast,public router:Router,public toastController: ToastController,private fb: FormBuilder,public ser_add :careGiverService) { }
    ngOnInit() {
        this.myForm=this.fb.group({
          //'nick_name':['',[Validators.required]], 
          'user_uid':['',[Validators.required]]
          });
      }
      
      ionViewWillEnter() {
        this.tabBar = document.getElementById('myTabBar1');
        this.tabBar.style.display = 'none';
      }

      onSubmit(value){
        // if(this.myForm.value.name =="")
        // {
        //   this.presentToast("Please enter the name")
        // }else 
        if(this.myForm.value.user_uid == "")
        {
          this.presentToast("Please enter the UID")
        }
       
        if(this.myForm.valid){
          console.log(this.myForm.value)
          debugger;
          this.ser_add.add_care_giver(value).subscribe(async res =>{
            let patientDataFromAdd = res['patient_detail'];
            await this.database.addPatient(this.myForm.value,patientDataFromAdd);
            console.log(res)
            this.router.navigate(['/care-giver-tabs/tabsc/tab2c']);
          },error=>{
            if(error.status == 401){
              this.presentToast("Please enter valid UID")
            }
            else if(error.status == 422){
              this.presentToast("The patient already have two caregivers") 
            }
          })
      }
    
      }
      
      cancel(){
        this.router.navigate(['/care-giver-tabs/tabsc/tab2c']);
        this.myForm.reset()
      }


      async presentToast(message: string) {
        this.toast.show(message, '2000', 'bottom').subscribe(
          toast => { 
            console.log(toast); 
          });
      }

      ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
      }
}
    