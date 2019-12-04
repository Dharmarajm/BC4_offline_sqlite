import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'filters-page',
  templateUrl: 'filter.page.html',
  styleUrls: ['../expenses.page.scss']
})
export class FiltersPage {
    
    filter:FormGroup;
    user_id:any;
    listvalues:any;
    list_keys:any[]=[];
    checkarray:any=[];
    todaydate:any;
    tabBar: any;
    year:any;
    submitted:boolean=false;

    constructor(private toast: Toast,public datepipe:DatePipe, public modalController:ModalController, private fb: FormBuilder, public serv: settingsService, public router:Router, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) { }

    ngOnInit(){
       this.todaydate=new Date().toISOString();
       this.year= new Date().getFullYear()
       this.filter = this.fb.group({
       'from_date' :  ['',[Validators.required]],
       'end_date' :    ['',[Validators.required]],
       'event_name':['']       
     })
   	  this.user_id = localStorage.getItem("user_id");
    
    }
    get f(){return this.filter.controls }

    changedate(from,end){
      if(from!='' && end !=''){
      let type='expense'
      // this.serv.filterbox(this.user_id,from,end,type).subscribe(res=>{
      // this.list_keys =res['events']
      // })

      this.databaseSummary.expenseDatefilter(this.user_id,from,end,type).then(res=>{
        console.log(res)
        this.list_keys=res['events'] 
      }).catch(err=>{console.log(err)})
     }
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
      this.submitted=true;
      if(this.filter.valid){
    	this.filter.patchValue({
          'event_name': this.checkarray,
        });
       this.modalController.dismiss(val.value);
    }else{
      this.presentToast('Please Enter Mandatory Fields')
    }
  }

    ionViewWillLeave() {
      //this.statusBar.backgroundColorByHexString('#ffd32c');
      //this.tabBar.style.display = 'flex';
    }

    async presentToast(message: string) {
      this.toast.show(message, '4000', 'center').subscribe(
        toast => { 
          console.log(toast); 
        });
    }
}