import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'filters-page',
  templateUrl: 'filter.page.html',
  styleUrls: ['../expenses.page.scss']
})
export class FiltersPage {
    
    filter:FormGroup;
    user_id:any;
    listvalues:any;
    list_keys:any;
    checkarray:any=[];
    todaydate:any;
    tabBar: any;
    year:any;
    constructor(public datepipe:DatePipe, public modalController:ModalController, private fb: FormBuilder, public serv: settingsService, public router:Router, private statusBar: StatusBar) { }

    ngOnInit(){
       this.todaydate=new Date().toISOString();
       this.year= new Date().getFullYear()
       this.filter = this.fb.group({
       'from_date' :  [this.todaydate,[Validators.required]],
       'end_date' :    [this.todaydate,[Validators.required]],
       'event_name':['',[Validators.required]]       
     })
   	  this.user_id = localStorage.getItem("user_id");
      this.serv.chartrepeat(this.user_id).subscribe(res=>{
       
      this.listvalues =res;
      this.list_keys = Object.keys(this.listvalues); 
      
      }); 
    }
    ionViewWillEnter() {
      this.statusBar.backgroundColorByHexString('#ffd32c');
      this.tabBar = document.getElementById('myTabBar');
      this.tabBar.style.display = 'none';
    }
    checkbox(event, val){    
    	if(event.detail.checked) {
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
	    //console.log(this.filter)
       this.modalController.dismiss(val.value);
    }

    ionViewWillLeave() {
      //this.statusBar.backgroundColorByHexString('#ffd32c');
      //this.tabBar.style.display = 'flex';
    }

}