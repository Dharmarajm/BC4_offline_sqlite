import { Component, OnInit, ViewChild} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { ToastController, AlertController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core'
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})

export class HealthPage implements OnInit {
  @ViewChild('medication', { static: true }) medication_input;
  @ViewChild('alergy_name', { static: true }) alergies_input;
  data1: any;
  medication_name: any;
  autopopulate:boolean = false;
  autopopulate2:boolean = false;
  health:FormGroup;
  getAllIds:any;
  medicationChiptest:any[]=[];
  
  alergyChiptest:any[]=[]
  tabBar:any;
  allHealthData:any;
  diabetes_medications=["Insulin","Tablets"];
  add_alert: any;
  constructor(public alertController: AlertController,private toast: Toast,public router:Router,public route:ActivatedRoute,private fb: FormBuilder,public service:settingsService,public toastController: ToastController,private changeRef: ChangeDetectorRef,public database: DatabaseProvider) { 
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
    this.route.queryParams.subscribe(params => {
      console.log(JSON.parse(params['special']))
      console.log(JSON.parse(params['data']))
      this.allHealthData=JSON.parse(params['special']);
      this.getAllIds = JSON.parse(params['data']);
      // this.medicationChiptest = this.allHealthData['current_medication'] || [];
      // this.alergyChiptest = this.allHealthData['allergy'] || [];
      // if(this.allHealthData['current_medication']==undefined){
      //    this.medicationChiptest=[];
      // }else if(this.allHealthData['current_medication']==undefined){
      //    this.alergyChiptest=[];   
      // }
    })
  }

  ngOnInit() {
    this.changeRef.detectChanges();
    let heart_condition:string;
    let pacemaker:string;
    if(this.allHealthData['heart_condition']=='Pacemaker'){
       heart_condition = 'Yes';
       pacemaker = 'Yes';
    }else if(this.allHealthData['heart_condition']=='Tablets'){
       heart_condition = 'Yes';
       pacemaker = 'No';
    }else{
       heart_condition = 'No';
       pacemaker = 'No';
    }
    
    let diabetes:string;
    let diabetes_through:string;
    if(this.allHealthData['diabetes']=='Insulin'){
       diabetes = 'Yes';
       diabetes_through = 'Insulin';
    }else if(this.allHealthData['diabetes']=='Tablets'){
       diabetes = 'Yes';
       diabetes_through = 'Tablets';
    }else{
       diabetes = 'No';
       diabetes_through = 'Insulin';
    }
     
    this.health = this.fb.group({
      "allergies": [this.allHealthData['allergy']],
      "heart_conditions":[heart_condition],
      "pacemaker" : [pacemaker ],
      "diabetes": [diabetes],
      "diabetes_medication": [diabetes_through],
      "bloodpressure":[this.allHealthData['blood_pressure'] || 'Normal'],
      "implant":[this.allHealthData['implants'] || '', [Validators.maxLength(20)]],
      "cancer":[this.allHealthData['cancer'] || 'No'],
      "curent_medication":[this.allHealthData['current_medication']],
      "recent_surgeries": [this.allHealthData['recent_surgeries'] || '']
    });
    
    //this.alergies_input.setFocus();
   
  }

  ionViewDidEnter(){
    //this.alergies_input.setFocus();
  }
  
  save(val){
      
      let heart_conditions="No"
      if(val["heart_conditions"]=="Yes"){
          heart_conditions="Yes"; 
         if(val["pacemaker"]=="Yes"){
           heart_conditions="Pacemaker";
         }
      }else{
        heart_conditions="No"; 
      }
      
      let diabetes="No"
      if(val["diabetes"]=="Yes"){
         diabetes="Yes"; 
         if(val["diabetes_medication"]=="Insulin"){
           diabetes="Insulin";
         }else if(val["diabetes_medication"]=="Tablets"){
           diabetes="Tablets";
         }
      }else{
        diabetes="No"; 
      }
      
      let id:any = null;
      let created_at:any = null;
      if(this.getAllIds!=null){
        id = this.getAllIds['id'];
        created_at = this.getAllIds['created_at'];
      }

      let data={
         "id": id,  
         "attribute_name_value":{
                    "allergy":val["allergies"],
                    "heart_condition":heart_conditions,
                    "diabetes":diabetes,
                    "blood_pressure":val["bloodpressure"],
                    "implants":val["implant"],
                    "cancer":val["cancer"],
                    "current_medication":val["curent_medication"],
                    "recent_surgeries":val["recent_surgeries"]   
         },
         "name":"health",
         "created_at": created_at
      }; 
       this.addconfirmation(data);
     
  }

  async addconfirmation(data){
    console.log(data  )
    this.add_alert = await this.alertController.create({
      header: 'Health',
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
            // this.service.myEmergencyHealthUpdate(data).subscribe(res=>{
            //   this.presentToast('Health data updated successfully')
            //   this.router.navigate(['self-care-tabs/tabs/tab2'],{skipLocationChange: true })
            // },error=>{
     
            // })
            let primary_id:any=null;
            if(this.getAllIds!=null){
              primary_id=this.getAllIds['health_id'];
            }
            this.database.updateHealthData(data,primary_id).then(res=>{
              console.log(data,primary_id)
              console.log(res)
              this.presentToast('Health data updated successfully')
              this.router.navigate(['self-care-tabs/tabs/tab2'],{skipLocationChange: true })  
            }).catch(err=>{console.log(err)})
          }
        }
      ]
    });
    await this.add_alert.present();
  }

  medication_select(val:any){
    console.log(val)
    this.medicationChiptest.push(val);
    
    this.health.value["curent_medication"]="";  
    this.medication_input.value="";
    this.medication_input.setFocus();
    this.autopopulate2 = false;
  }

  alergyselect(val:any){
    console.log(val)
    this.alergyChiptest.push(val);
    this.health.value["allergies"]="";
    this.alergies_input.value="";
    this.alergies_input.setFocus();
    this.autopopulate = false;
  }

  Input_medication(value: any){
    this.medication_name = value;
    this.autopopulate2 = true;
  }
  
  Input_alergy(value: any){
   
    this.data1 = value;
    this.autopopulate = true;
  }

  deleteMedicationChip(index:number){
    this.medicationChiptest.splice(index,1)
  }

  deleteAlergyChip(index:number){
    this.alergyChiptest.splice(index,1);
  }

  async presentToast(message:string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

  ionViewWillLeave(){
     this.tabBar.style.display = 'flex'; 
  }

  close(){
    this.router.navigate(['self-care-tabs/tabs/tab2'],{skipLocationChange: true })
  }

  // _keyPress(event: any) {
  //      if (condition) {
  //        // code...
  //      }
  //   }
}
