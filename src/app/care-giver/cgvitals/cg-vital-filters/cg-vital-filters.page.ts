import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-cg-vital-filters',
  templateUrl: './cg-vital-filters.page.html',
  styleUrls: ['../cgvitals.page.scss']
})
export class CgVitalFilterPage implements OnInit {
todaydate:any;
filter:FormGroup;
list_keys:any[]=[];
listvalues:any;
tabBar: any;
checkarray:any[]=[];
list_keyValue:any;
submitted:boolean=false;
user_id:any;

  constructor(private toast: Toast,public datepipe: DatePipe,private fb: FormBuilder,public modalController:ModalController, public service: careGiverService, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) { }

   ngOnInit(){
   
   	  this.todaydate=new Date().toISOString();
   	  this.filter = this.fb.group({
   		'from_date' :  ['',[Validators.required]],
   		'end_date' :    ['',[Validators.required]],
   		'event_name':['']   	  
       })
       
      this.user_id = localStorage.getItem("user_id");
   	  
      // this.service.vitalEventListNew().subscribe(res=>{    	
      // this.listvalues =res;
      // this.list_keys = Object.keys(this.listvalues); 
      
      // }); 
    }
    changedate(from,end){
      if(from!='' && end!=''){
        let type='vital'
        //   this.service.filtercheck(from,end,data).subscribe(res=>{
        //   this.list_keys=res['events']
        // })

        this.databaseSummary.filterVitalEventNameList(this.user_id,from,end,type).then(res=>{
          this.list_keys=res['events'] 
        }).catch(err=>{console.log(err)})
      }
  }
  get f(){return this.filter.controls }

    ionViewWillEnter() {
      this.statusBar.backgroundColorByHexString('#60dc68');
      this.tabBar = document.getElementById('myTabBar1')
      this.tabBar.style.display = 'none';
    }
    checkbox(event,val){ 
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
      if(this.filter.valid )  { 
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