import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['../vitals.page.scss']
})
export class FilterPage implements OnInit {
todaydate:any;
filter:FormGroup;
list_keys:any;
user_id:any;
listvalues:any;
tabBar: any;
checkarray:any[]=[];
year:any;
  constructor(public datepipe: DatePipe,private fb: FormBuilder,public modalController:ModalController, public service: settingsService, private statusBar: StatusBar) { }

   ngOnInit(){
   
       this.todaydate=new Date().toISOString();
       this.year= new Date().getFullYear()
   	  this.filter = this.fb.group({
   		'from_date' :  [this.todaydate,[Validators.required]],
   		'end_date' :    [this.todaydate,[Validators.required]],
   		'event_name':['',[Validators.required]]   	  
   	})
   	  this.user_id = localStorage.getItem("user_id");
      this.service.vitalEventListNew(this.user_id).subscribe(res=>{    	
      this.listvalues =res;
      this.list_keys = Object.keys(this.listvalues); 
      }); 
    }
    ionViewWillEnter() {
      this.statusBar.backgroundColorByHexString('#60dc68');
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
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
        	this.filter.patchValue({
          'event_name': this.checkarray,
        });
       this.modalController.dismiss(val.value);
    }
    ionViewWillLeave() {
    }

}