import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { Validators, FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-cg-vital-filters',
  templateUrl: './cg-vital-filters.page.html',
  styleUrls: ['../cgvitals.page.scss']
})
export class CgVitalFilterPage implements OnInit {
todaydate:any;
filter:FormGroup;
list_keys:any;
listvalues:any;
tabBar: any;
checkarray:any[]=[];
list_keyValue:any;
  constructor(public datepipe: DatePipe,private fb: FormBuilder,public modalController:ModalController, public service: careGiverService, private statusBar: StatusBar) { }

   ngOnInit(){
   
   	  this.todaydate=new Date().toISOString();
   	  this.filter = this.fb.group({
   		'from_date' :  [this.todaydate,[Validators.required]],
   		'end_date' :    [this.todaydate,[Validators.required]],
   		'event_name':['',[Validators.required]]   	  
   	})
   	  
      this.service.vitalEventListNew().subscribe(res=>{    	
      this.listvalues =res;
      this.list_keys = Object.keys(this.listvalues); 
      
      }); 
    }
    ionViewWillEnter() {
      this.statusBar.backgroundColorByHexString('#60dc68');
      this.tabBar = document.getElementById('myTabBar1')
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