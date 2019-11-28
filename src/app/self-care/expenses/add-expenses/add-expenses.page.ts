import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { AlertController } from '@ionic/angular';
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.page.html',
  styleUrls: ['../expenses.page.scss']
})
export class addExpensesPage {
    myForm: FormGroup;
    Addmore:any;
    Options_res:any;
    total_option:any;
    tabBar: any;
    Progress:boolean=false;
    showBackdrop: boolean = false;
    submitted:boolean=false;
    todaydate:any;
    year:any;
    add_alert: any;
    constructor(public alertController:AlertController,private toast: Toast,public toastController: ToastController, public router:Router,public event: settingsService,private fb: FormBuilder, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) { }
  
    ngOnInit() {
      this.todaydate=new Date().toISOString();
      this.year= new Date().getFullYear()
      this.myForm=this.fb.group({
        'event_name':   ['',[Validators.required]], 
        'value':        ['',[Validators.required]],
        'others':       [''],
        'event_datetime': [this.todaydate,[Validators.required]],
        'description':   [''],
        'event_type':["expense"] 	
        });
        // this.event.event_add_option().subscribe(res =>{
        //   this.Options_res =res;
        //   this.total_option =this.Options_res.enum_masters;
          
        //   this.total_option.push("Others")
        // })
        
      //offline database code for listing spent on type
        this.databaseSummary.getEnumMasters('spent_place').then((res)=>{
          this.Options_res =res;
          this.total_option =this.Options_res.enum_masters;
          
          this.total_option.push("Others")
        })
        .catch(error=>{ console.log(error) });
    }

    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    }

    Change(c){
    
      this.Addmore = c;
      if (this.Addmore != "Others") {
        this.myForm.controls['others'].clearValidators();
        this.myForm.updateValueAndValidity();
        this.myForm.controls['others'].updateValueAndValidity();
        this.myForm.value.others = "";
      }else{
        this.submitted=false;
        const validators = [ Validators.required ];
        this.myForm.controls['others'].setValidators(validators);
        this.myForm.updateValueAndValidity();
        this.myForm.controls['others'].updateValueAndValidity();
      }
    }

    onCancel(){
    }

    get f(){return this.myForm.controls }

    onSubmit(val){
      this.submitted=true;
      if(this.myForm.valid){
        this.addconfirmation();  
      }   
    }
    async addconfirmation(){
      this.add_alert = await this.alertController.create({
        header: 'Expenses',
        message: 'Are you sure to submit'+' '+ (this.myForm.value.event_name).bold()+' '+'expenses'+'?',
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
              this.Progress=true;

              // this.event.event_add(this.myForm.value).subscribe(res =>{
              //   this.Progress=false;
              //   this.router.navigate(['/self-care-tabs/tabs/tab1/expenses']);
              // })
              
              //offline database code for add the expense
              this.database.createAnEvent(this.myForm.value).then((res)=>{
                this.Progress=false;
                this.router.navigate(['/self-care-tabs/tabs/tab1/expenses']);
              })
            }
          }
        ]
      });
      await this.add_alert.present();
    }

  cancel(){
    this.myForm.reset;
    this.router.navigate(['self-care-tabs/tabs/tab1/expenses'],{skipLocationChange: true })
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


    ionViewWillLeave() {
      this.statusBar.backgroundColorByHexString('#ffd32c');
      this.tabBar.style.display = 'flex';
    }


  async presentToast(message: string) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }


  }
  