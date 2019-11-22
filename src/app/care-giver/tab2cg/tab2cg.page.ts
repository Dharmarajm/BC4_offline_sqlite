import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { careGiverService } from '../care-giver-service/caregiver-service.service';
import { AlertController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { NetworkService } from '../../network-connectivity/network-service';
import { DatabaseProvider } from '../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@Component({
  selector: 'app-tab2cg',
  templateUrl: 'tab2cg.page.html',
  styleUrls: ['tab2cg.page.scss']
})
export class Tab2cPage {
  patient_total:any;
  list:any[]=[];
  details:any[]=[];
  patient_details:any;
  user_uid:any;
  environment:any;
  isNetwork:boolean;

  constructor(private toast: Toast,public router:Router,public toastController: ToastController,private fb: FormBuilder,
    public ser_add :careGiverService,private statusBar: StatusBar, public alertController: AlertController,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider,private networkProvider: NetworkService) {
    this.environment = environment.ImageUrl;
  }
  ngOnInit() {
   
  
  }

  ionViewWillEnter(){
    this.user_uid=localStorage.getItem("user_id")
    console.log(this.user_uid)

    //  this.ser_add.patient_list().subscribe(res =>{
    //     this.patient_total = res;  
    //     console.log(this.patient_total)
    //     let data:any = this.patient_total.patient;
    //     this.list=data.map(item=>({
    //       user_uid:item.user_uid,
    //       name:item.name,
    //       checked:false,
    //       id:item.id,
    //       profile_pic:item['user_picture'].url,
    //       nameAt:item.name.charAt(0)
    //      }));
     
    //     let index = this.list.findIndex(index=>index.id==this.user_uid);
    //     if(index>-1){
    //       this.list[index].checked=true;  
    //     } 
    //  })
     this.databaseSummary.getAllPatients().then(res=>{
        this.patient_total = res;
        let data = this.patient_total['patients'];
        if(this.networkProvider.isNetworkOnline){
          this.isNetwork = true;
        }else{
          this.isNetwork = false;
        }
        this.list = data.map(item=>{
            let sourceurl;
            if(this.isNetwork==true){
              sourceurl = item['user_picture']['url'];
            }else{
              sourceurl = null;
            }
            return {
              user_uid:item.user_uid,
              name:item.name,
              checked:false,
              id:item.id,
              profile_pic: sourceurl,
              nameAt:item.name.charAt(0)
            }
        });
      
        let index = this.list.findIndex(index=>index.id==this.user_uid);
        if(index>-1){
          this.list[index].checked=true;  
        }   
     }).catch(err=>{console.log(err)})   
     this.statusBar.backgroundColorByHexString('#483df6');
  }


  list_value(event,id,user_id,index){
    for(var i in  this.list){
      if(event==true){
         if(i!=index){
           this.list[i].checked=false;
         }else{
           this.list[i].checked=true;
          //  this.ser_add.togglecheck(id).subscribe(res=>{
          //    console.log(res)
          //    let data:any=res
          //     this.patient_details=user_id;
          //  })
         } 
      }
    }
 
  }

  ionViewWillLeave(){
    let findId = this.list.findIndex(index=>index.checked==true);
    console.log(findId)
    if(findId>-1){
      console.log("hi")
      let user_id=this.list[findId];
      console.log(user_id)
      localStorage.setItem("user_id",user_id['id']);
      localStorage.setItem("details",JSON.stringify(user_id));
      
    }else{
      localStorage.removeItem('user_id');
      localStorage.removeItem("details");
    }
  }
  
  // RemovePatient(id){
  //   this.ser_add.removePatient(id).subscribe(res=>{
  //     console.log()
  //   })
  // }
  async RemovePatient(id){
    const alert = await this.alertController.create({
        header: 'Contact',
        message: 'Are you sure want to delete?',
        mode: 'md',
        buttons: [
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirm Ok');
              // this.ser_add.removePatient(id).subscribe(res=>{
              //      this.ionViewWillEnter();
              //      this.presentToast('Patient has been deleted successfully');
              // })
              this.database.deletePatientFromCareGiver(id).then(res=>{
                this.ionViewWillEnter();
                this.presentToast('Patient has been deleted successfully');
              })
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }
        ]
      });
     await alert.present();
  
  }
  
  async presentToast(message:string) {
     this.toast.show(message, '2000', 'bottom').subscribe(
      toast => { 
        console.log(toast); 
      });
  }
}
