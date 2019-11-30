import { Component, OnInit } from '@angular/core';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup,} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';



@Component({
  selector: 'app-add-vitals',
  templateUrl: './add-vitals.page.html',
  styleUrls: ['../vitals.page.scss']
})
export class AddVitalsPage implements OnInit {
  vitalform: FormGroup
  vital_options: any;
  food_options: any[]=[];
  todaydate: any;
  todaytime: any;
  showunit: any;
  vital_keys: any;
  vital_details: any;
  vital_data: any;
  tabBar: any;
  Progress: boolean = false;
  showBackdrop: boolean = false;
  submitted:boolean=false;
  selectedVital:any="";
  year:any;
  public myIndex: number = 0;
  add_alert:any;
  alert:any;
  name: any;
  valueMap = {
    'Body Temperature': [
      {name: 'Body Temperature', value: 'value1',required:true},
    ],
    'Blood Pressure': [
      {name: 'Systolic (Upper Value)',  value: 'value1',required:false},
      {name: 'Diastolic (Lower value)', value: 'value2',required:false},
      {name: 'Pulse Rate',  value: 'value3',required:false},
    ],
    'Blood Glucose': [
      {name: 'Blood Glucose',  value: 'value1',required:false},
      {name: 'HbA1c',  value: 'value2',required:false},
    ],
    'Oxygen Saturation': [
      {name: 'Oxygen Saturation', value: 'value1',required:true},
    ],
    'Cholesterol':  [
      {name: 'HDL',  value: 'value1',required:false},
      {name: 'LDL',  value: 'value2',required:false},
      {name: 'Triglycerides',  value: 'value3',required:false},
      {name: 'Total Count',  value: 'value4',required:false},
    ],
    'Others': [
      {name: 'Measurement 1', value: 'value1',required:false},
      {name: 'Measurement 2', value: 'value2',required:false},
      {name: 'Measurement 3', value: 'value3',required:false},
      {name: 'Measurement 4', value: 'value4',required:false},
    ]
  }
  vital_post: {
  "event_name": any; "event_options": {}; "event_category": any;
  "event_datetime": string; "event_type": string; "description": any;
  };
  

  constructor(private toast: Toast,public alertController: AlertController, public toastController: ToastController, public datepipe: DatePipe, public service: settingsService, private fb: FormBuilder, public route: ActivatedRoute, public router: Router, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
   
    
   }

  ngOnInit(){}

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
    this.todaydate = new Date().toISOString();
    this.year= new Date().getFullYear()

    this.vitalform = this.fb.group({
      event_datetime: ['', [Validators.required]],
      event_time: ['', [Validators.required]],
      event_name: ['', [Validators.required]],
      food_time: ['', [Validators.required]],
      description: [''],
      others: [''],
      value1: [''],
      value2: [''],
      value3: [''],
      value4: ['']
     }); 

    // this.service.vitalReading().subscribe(res => {

    //   this.vital_options = res['enum_masters']

    //   this.vital_keys = this.vital_options;
    //   this.vital_keys.push('Others')

    // })

    this.databaseSummary.getEnumMasters('vital').then((res)=>{
      this.vital_options = res['enum_masters']

      this.vital_keys = this.vital_options;
      this.vital_keys.push('Others')
    })
    .catch(error=>{ console.log(error) });

    this.vitalform.controls['event_name'].valueChanges.subscribe((eventName)=>{
      this.submitted=false; 
      this.selectedVital=eventName;
      for(var i=0;i<4;i++){
        let plus=i+1;
        let data=('value'+plus).toString();
        this.vitalform.controls[data].reset();
      }
      this.vitalform.controls['others'].clearValidators();
      this.vitalform.updateValueAndValidity();
      this.vitalform.controls['others'].updateValueAndValidity();
      this.ForInitialValidate(eventName);
    });
 
  }
  
  ForInitialValidate(eventName){
    const validators = [ Validators.required ];
    switch (eventName){
      case "Body Temperature":
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();
        break;
      case "Blood Pressure":
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value2'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.controls['value2'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();
        break;
      case "Blood Glucose":
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value2'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.controls['value2'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();
        break;
      case "Oxygen Saturation":
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();       
        break;
      case "Cholesterol":
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value2'].setValidators(validators);
        this.vitalform.controls['value3'].setValidators(validators);
        this.vitalform.controls['value4'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.controls['value2'].updateValueAndValidity();
        this.vitalform.controls['value3'].updateValueAndValidity();
        this.vitalform.controls['value4'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();
        break;
      case "Others":
        this.vitalform.controls['others'].setValidators(validators);
        this.vitalform.controls['value1'].setValidators(validators);
        this.vitalform.controls['value2'].setValidators(validators);
        this.vitalform.controls['value3'].setValidators(validators);
        this.vitalform.controls['value4'].setValidators(validators);
        this.vitalform.controls['value1'].updateValueAndValidity();
        this.vitalform.controls['value2'].updateValueAndValidity();
        this.vitalform.controls['value3'].updateValueAndValidity();
        this.vitalform.controls['value4'].updateValueAndValidity();
        this.vitalform.controls['others'].updateValueAndValidity();
        this.vitalform.updateValueAndValidity();
        break;
    }
  }

  controlValidate(controlName,eventName){
    const validators = [ Validators.required ];
    
    let value1=this.vitalform.controls['value1'].value;
    let value2=this.vitalform.controls['value2'].value;
    let value3=this.vitalform.controls['value3'].value;
    let value4=this.vitalform.controls['value4'].value;
    switch (eventName){
      case "Body Temperature":
        break;
      case "Blood Pressure":       
        // if(value1!=null && value1!="" && value2!=null && value2!="" || value3!=null && value3!="" ){         
        //   this.vitalform.controls['value1'].clearValidators();
        //   this.vitalform.controls['value2'].clearValidators();
        //   this.vitalform.controls['value1'].updateValueAndValidity();
        //   this.vitalform.controls['value2'].updateValueAndValidity();
        //   this.vitalform.updateValueAndValidity();        
        // }else {
        //   this.ForInitialValidate(eventName)
        // }        
        break;
      case "Blood Glucose":
        if(value1!=null && value1!="" || value2!=null && value2!=""){
          this.vitalform.controls['value1'].clearValidators();
          this.vitalform.controls['value2'].clearValidators();
          this.vitalform.controls['value1'].updateValueAndValidity();
          this.vitalform.controls['value2'].updateValueAndValidity();
          this.vitalform.updateValueAndValidity();
          
        }else{          
          this.ForInitialValidate(eventName)
        }
        break;
      case "Oxygen Saturation":
        break;
      case "Cholesterol":
        if(value1!=null && value1!="" || value2!=null && value2!="" || value3!=null && value3!="" || value4!=null && value4!=""){
          this.vitalform.controls['value1'].clearValidators();
          this.vitalform.controls['value2'].clearValidators();
          this.vitalform.controls['value3'].clearValidators();
          this.vitalform.controls['value4'].clearValidators();
          this.vitalform.controls['value1'].updateValueAndValidity();
          this.vitalform.controls['value2'].updateValueAndValidity();
          this.vitalform.controls['value3'].updateValueAndValidity();
          this.vitalform.controls['value4'].updateValueAndValidity();
          this.vitalform.updateValueAndValidity();
         
        }else{
          
          this.ForInitialValidate(eventName)
        }
       
        break;
      case "Others":
        if(value1!=null && value1!="" || value2!=null && value2!="" || value3!=null && value3!="" || value4!=null && value4!=""){
          this.vitalform.controls['value1'].clearValidators();
          this.vitalform.controls['value2'].clearValidators();
          this.vitalform.controls['value3'].clearValidators();
          this.vitalform.controls['value4'].clearValidators();
          this.vitalform.controls['value1'].updateValueAndValidity();
          this.vitalform.controls['value2'].updateValueAndValidity();
          this.vitalform.controls['value3'].updateValueAndValidity();
          this.vitalform.controls['value4'].updateValueAndValidity();
          this.vitalform.updateValueAndValidity();
          
        }else{          
          this.ForInitialValidate(eventName)
        }
        this.vitalform.controls['others'].setValidators(validators);
        
        this.vitalform.updateValueAndValidity();
        this.vitalform.controls['others'].updateValueAndValidity();
        break;
    }
  }

  getControlValidate(i){
    console.log(i)
    let index=Number(i)+Number(1);
    let fieldName='value'+index.toString();
    this.controlValidate(fieldName,this.selectedVital)
  }

  get f(){return this.vitalform.controls }

  

  vitalDetails(val) {
    console.log(val.event_name)
    let options = {};
    let event_name = val['event_name'];

    let index=this.vital_keys.findIndex(event =>event== val['event_name']);
    console.log(index)
    for(var i in this.valueMap[event_name]){
      let index=Number(i)+Number(1);
      let fieldName='value'+index.toString();
      console.log(fieldName)
      //let unitName = this.valueMap[event_name][i]['SF'];
      // if(val[fieldName]!='' && val[fieldName]!=null && val[fieldName]!=undefined ){
      //   options[fieldName]=unitName+' : '+val[fieldName]+' '+this.valueMap[event_name][i].unit;
      // }
      if(val[fieldName]!='' && val[fieldName]!=null && val[fieldName]!=undefined ){
        options[fieldName]=val[fieldName];
      }
    } 


    //let date=this.datepipe.transform(val.event_datetime,"dd MMM yyyy")
    //let time=this.datepipe.transform(val.event_time,"HH:mm:ss")

    let new1 = new Date(val.event_time);
    let gethours = new1.getHours();
    let getMinutes = new1.getMinutes();

    let new2 = new Date(val.event_datetime);
    new2.setHours(gethours)
    new2.setMinutes(getMinutes)
    let event_dateTime = new2.toJSON();
      this.name = val['event_name'];
    if(val['event_name']=='Others'){
      this.name=val['others'];
    }
    //options['food_time']= val.food_time;
      this.vital_post = {  "event_name": this.name,
                  "event_options":options,
                  "event_category":val.food_time,
                  //"value":val.value+" "+this.showunit,
                  "event_datetime":event_dateTime,
                  "event_type": "vital",
                  "description":val.description   
              }
          this.addconfirmation();
    
  }




  valueSet(val) {   
    let selectVital=val.detail.value   
    if(selectVital == "Blood Glucose" || selectVital == "Cholesterol" ){
        // this.service.vitalFoodTime2().subscribe(res => {
        //   this.food_options = res['enum_masters']
        // })
        this.getEnumMasters('food_time_1');
    } else if(selectVital == "Blood Pressure" || selectVital == "Body Temperature" || selectVital == "Oxygen Saturation"){
        // this.service.vitalFoodTime1().subscribe(res => {
        // this.food_options = res['enum_masters']
        // console.log(this.food_options)
        // })
        this.getEnumMasters('food_time_2');
    }
    else{
      this.food_options=["None","Morning", "Afternoon", "Evening", "Night"]
    }
  }

  getEnumMasters(category){
    this.databaseSummary.getEnumMasters(category).then((res)=>{
      this.food_options = res['enum_masters']
    })
    .catch(error=>{ console.log(error) });
  }

  validateBeforeSubmit(form) {
    this.submitted=true;     
    let eventName=this.vitalform['value']['event_name'];
//     for (const key in this.vitalform.controls) {
//       this.vitalform.get(key).clearValidators();
//       this.vitalform.get(key).updateValueAndValidity();
//  }
      if (this.vitalform['value']['event_name'] == "Body Temperature") {
        delete this.vitalform.value['value2'];
        delete this.vitalform.value['value3'];
        delete this.vitalform.value['value4'];
      } else if (this.vitalform['value']['event_name'] == "Blood Pressure") {
        let val1=this.vitalform.controls['value1'].value || null;
        let val2=this.vitalform.controls['value2'].value || null;
        let val3=this.vitalform.controls['value3'].value || null;
        if(val1==null&&val2==null&&val3!==null){
          this.vitalform.controls['value3'].setValidators(Validators.required);
          this.vitalform.controls['value1'].clearValidators();
          this.vitalform.controls['value2'].clearValidators();
         
        }
        else if(((val1!==null&&val2==null) || (val1==null&&val2!==null))&&(val3==null||val3!==null)){
          this.vitalform.controls['value1'].setValidators(Validators.required);
          this.vitalform.controls['value2'].setValidators(Validators.required);
          this.vitalform.controls['value3'].clearValidators();
         
        }
        else if(val1!==null&&val2!==null&&val3==null){
          this.vitalform.controls['value1'].setValidators(Validators.required);
          this.vitalform.controls['value2'].setValidators(Validators.required);
          this.vitalform.controls['value3'].clearValidators();
         
        }
        else if(val1!==null&&val2!==null&&val3!==null){
          this.vitalform.controls['value1'].setValidators(Validators.required);
          this.vitalform.controls['value2'].setValidators(Validators.required);
          this.vitalform.controls['value3'].setValidators(Validators.required);
          
        }
        //delete this.vitalform.value['value3'];
        delete this.vitalform.value['value4'];
      }
      else if(this.vitalform['value']['event_name'] == "Blood Glucose"){
        delete this.vitalform.value['value3'];
        delete this.vitalform.value['value4'];
      }else if(this.vitalform['value']['event_name'] == "Oxygen Saturation"){
        delete this.vitalform.value['value2'];
        delete this.vitalform.value['value3'];
        delete this.vitalform.value['value4'];
      }else if(this.vitalform['value']['event_name'] == "Cholesterol"){
        
      }
      this.vitalform.controls['value1'].updateValueAndValidity({emitEvent:false, onlySelf:true});
      this.vitalform.controls['value2'].updateValueAndValidity({emitEvent:false, onlySelf:true});
      this.vitalform.controls['value3'].updateValueAndValidity({emitEvent:false, onlySelf:true});
      this.vitalform.updateValueAndValidity({emitEvent:false, onlySelf:true});

      if(this.vitalform.invalid){
        this.presentToast("Please scroll to enter mandatory fields")
        return;
      }
      this.vitalDetails(form);
    
}


validateAllFormFields(formGroup: FormGroup) {  
  Object.keys(formGroup.controls).forEach(control => {
     this.vitalform.controls[control].markAsTouched();
   });
 }


 async presentToast(message: string) {
   this.toast.show(message, '4000', 'center').subscribe(
     toast => { 
       console.log(toast); 
     });
 }

async addconfirmation(){
  this.add_alert = await this.alertController.create({
    header: 'Vitals',
    message: 'Are you sure to submit'+' '+ (this.name).bold()+' '+'?',
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
          // this.service.vitalCommonPost(this.vital_post).subscribe(res=>{
          //   this.Progress=false;  
          //   this.vital_details=res;
          //   this.presentAlert();   
          // });
          
          this.database.createAnVitalEvent(this.vital_post).then((res)=>{
            console.log(res)
            this.Progress=false;  
            //this.vital_details=res;
            this.presentAlert();  
          })

        }
      }
    ]
  });
  await this.add_alert.present();
}

  async presentAlert() {
    this.alert = await this.alertController.create({
      header: 'Vitals',
      message: 'Do you want to set alert for'+' '+(this.name).bold()+' '+'?',
      mode: 'md',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            //this.vitalform.reset();
            let navigationExtras: NavigationExtras = {
              queryParams: {
                specialsecond: 'second'
              }
            };
            this.router.navigate(['/self-care-tabs/tabs/tab1/alerts'], navigationExtras);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.vitalform.reset();
            this.router.navigate(['/self-care-tabs/tabs/tab1/vitals'])
          }
        }
      ]
    });
    await this.alert.present();
  }
  
  ionViewWillLeave() {
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar.style.display = 'flex';
    this.alert.dismiss();
    this.add_alert.dismiss();
  }

  _keyPress(event: any,eventName:any) {
   console.log(event,eventName);
   if(eventName!="Systolic/Diastolic"){
    const pattern = /([/\d]+)/;
    let inputChar = String.fromCharCode(event.charCode);

    if (event.charCode != 0) {
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
   }   
  }
  
  cancel() {
    this.router.navigate(['/self-care-tabs/tabs/tab1/vitals'])
  }

}