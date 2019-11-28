import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['../vitals.page.scss']
})
export class FilterPage implements OnInit {
todaydate:any;
filter:FormGroup;
list_keys:any[]=[];
user_id:any;
listvalues:any;
tabBar: any;
checkarray:any[]=[];
year:any;
submitted:boolean=false;

  constructor(private toast: Toast,public datepipe: DatePipe,private fb: FormBuilder,public modalController:ModalController, public service: settingsService, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) { }

   ngOnInit(){
   
      this.todaydate=new Date().toISOString();
      this.year= new Date().getFullYear()
   	  this.filter = this.fb.group({
   		'from_date' :  ['',[Validators.required]],
   		'end_date' :    ['',[Validators.required]],
   		'event_name':['']   	  
   	})
   	  this.user_id = localStorage.getItem("user_id");
      // this.service.vitalEventListNew(this.user_id).subscribe(res=>{    	
      // this.listvalues =res;
      // this.list_keys = Object.keys(this.listvalues); 
      // console.log( this.list_keys)
      // }); 
    }
    ionViewWillEnter() {
      this.statusBar.backgroundColorByHexString('#60dc68');
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
    }
    get f(){return this.filter.controls }

    changedate(from,end){
     console.log(from,end,'data')
      if(from!=''&& end!=''){
      let type='vital'
        //  this.service.filterbox(this.user_id,from,end,type).subscribe(res=>{
        //  console.log(res)
        //  this.list_keys=res['events']
        //  })
        this.databaseSummary.filterVitalEventNameList(this.user_id,from,end,type).then(res=>{
          this.list_keys=res['events'] 
        }).catch(err=>{console.log(err)})
        
      }
    }

  checkbox(event, val){ 
    	if (event.detail.checked) {
            this.checkarray.push(val)
    	}else if(event.detail.checked == false){
        	const index: number = this.checkarray.indexOf(val);
            if (index !== -1) {
               this.checkarray.splice(index, 1);
            }
    	}
    	
    }

  cancel(){
    	this.filter.reset();
    	this.modalController.dismiss();
    }

  onSubmit(val){
    this.submitted=true;
      console.log(val)
      if(this.filter.valid){
        	this.filter.patchValue({
          'event_name': this.checkarray,
        });
       this.modalController.dismiss(val.value);
    }else{
      this.presentToast('Please Enter Mandatory Fields')
    }
  }

  async presentToast(message: string) {
    this.toast.show(message, '4000', 'center').subscribe(
      toast => { 
        console.log(toast); 
      });
  }

}