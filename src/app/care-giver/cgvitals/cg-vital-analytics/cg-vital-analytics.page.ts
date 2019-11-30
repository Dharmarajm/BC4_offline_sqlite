import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { CgVitalFilterPage } from '../cg-vital-filters/cg-vital-filters.page';
import { DatePipe } from '@angular/common';  
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-cg-vital-analytics',
  templateUrl: './cg-vital-analytics.page.html',
  styleUrls: ['../cgvitals.page.scss']
})
export class CgVitalAnalyticsPage implements OnInit {
data:any;
user_id:any;
tabBar: any;
loader:boolean=false;
date:any;
firstDay:any;
status: any = -1;
keys:any;
records:any[]=[];
records1:any[]=[];
records2:any[]=[];
records_time:any[]=[];
vitalEventListkey:any[]=[];
vitalEventListVal:any;
key_blood_gl: any;
key_blood: any;
blood_val1: any;
blood_val2: any;
date_val:any;
objectKeys = Object.keys
isExist = {
  'Blood Pressure': {
    bloodPressure: false,
    pulseRate: false
  },
  'Blood Glucose': {
    bloodGlucose: false,
    hba1c: false
  }
}
 constructor(private toast: Toast,public datepipe: DatePipe, public modalController:ModalController, public service: careGiverService, public route:ActivatedRoute, public router: Router, private statusBar: StatusBar,private databaseSummary: DataBaseSummaryProvider) {
     this.filterModal();  
 }

   ngOnInit() {
    this.records = [
      {
        name: '#',
        value: '#'
      },
      {
        name: '6-9 am',
        value: '6-9 am'
      },
      {
        name: '9-12 pm',
        value: '9-12 pm'
      },
      {
        name: '12-3 pm',
        value: '12-3 pm'
      },
      {
        name: '3-6 pm',
        value: '3-6 pm'
      },
      {
        name: '6-9 pm',
        value: '6-9 pm'
      },
      {
        name: '>9 pm',
        value: '>9 pm'
      }
    ]
    this.records2 = ['#', 'Random', 'Fasting', 'Post Prandial']
    this.records_time = [{ "Name": "6-9 am" }, { "Name": "9-12 pm" }, { "Name": "12-3 pm" }, { "Name": "3-6 pm" }, { "Name": "6-9 pm" }, { "Name": ">9 pm" }]
    this.records1 = [{ "Name": "HDL" }, { "Name": "LDL" }, { "Name": "Triglyceride" }, { "Name": "Total Count" }]
    // this.records2 = [{ "Name": "Random" }, { "Name": "Fasting" }, { "Name": "Post Prandial" }]
  }

  tmpResult = {}
  
  ionViewWillEnter() {
    // this.date = new Date();
    // this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
    // this.loader = true;
    // this.user_id = localStorage.getItem("user_id");
    // this.service.vitalEventListNew().subscribe(res => {
    //   this.parseResponse(res)
    // });

 }
 async presentToast(message: string) {
  this.toast.show(message, '4000', 'center').subscribe(
    toast => { 
      console.log(toast); 
    });
}
 datetoast(){
  this.presentToast('Use filter to get specific data')   
}
  async filterModal(){
   const modal = await this.modalController.create({
          component: CgVitalFilterPage,
        });
    modal.onDidDismiss()
      .then((data) => {
         if (data['data'] != undefined) {
          this.date = data.data.end_date;
          this.firstDay = data.data.from_date;
          this.loader = true;
          data['event_name'] = data.data.event_name;
          // this.service.vitalfilter(data['data']).subscribe(res => {
          //   this.parseResponse(res)
          // })

          this.databaseSummary.vitalFilterAnalytics(this.user_id, data['data']).then(res=>{
            this.parseResponse(res);
          }).catch(err=>{console.log(err)})
        }
      });
        return await modal.present();
}
    filterTerms = {}


  parseResponse(res) {
    this.tmpResult = {}
      console.log(res)
      for (let type of Object.keys(res)) {
        for (let date of Object.keys(res[type]))
          if (type === 'Blood Glucose') {
            this.date_val =this.datepipe.transform(date,"MMM d");
            let rec = {}
            rec['#'] = rec['#'] || this.date_val
            let flag = false
            for (let records of this.records2) {
              if (res[type][date][records]) {
                let objKeys = Object.keys(res[type][date][records][0]['event_options'])
                if (objKeys.includes('value1')) {
                  this.tmpResult[type] = this.tmpResult[type] || [];
                  rec[records] = rec[records] || ''
                  rec[records] = res[type][date][records][0]['event_options']['value1']
                  flag = true
                }
              } else {
                rec[records] = rec[records] || ''
              }
            }
            if (flag) {
              this.tmpResult[type].push(rec)
            }
            rec = {}
            rec['#'] = rec['#'] || ''
            rec['#'] = rec['#'] || this.date_val
            flag = false
            for (let records of this.records2) {
              if (res[type][date][records]) {
                let objKeys = Object.keys(res[type][date][records][0]['event_options'])
                if (objKeys.includes('value2')) {
                  this.tmpResult['HbA1c'] = this.tmpResult['HbA1c'] || [];
                  rec[records] = rec[records] || ''
                  rec[records] = res[type][date][records][0]['event_options']['value2']
                  flag = true
                }
              } else {
                rec[records] = rec[records] || ''
              }
            }
            if (flag) {
              this.tmpResult['HbA1c'].push(rec)
            }
          } else {
            if (type === 'Body Temperature' || type === 'Oxygen Saturation') {
              let rec = {}
              this.date_val =this.datepipe.transform(date,"MMM d");
              rec['#'] = rec['#'] || this.date_val
              this.tmpResult[type] = this.tmpResult[type] || [];
              for (let records of this.records) {
                if (res[type][date][records['value']]) {
                  rec[records['name']] = rec[records['name']] || ''
                  rec[records['name']] = res[type][date][records['value']][0]['event_options']['value1']
                } else {
                  rec[records['name']] = rec[records['name']] || ''
                }
              }
              this.tmpResult[type].push(rec)
            } else {

              if (type === 'Blood Pressure') {
                let rec = {}
                let flag = false
                this.date_val =this.datepipe.transform(date,"MMM d");
                rec['#'] = rec['#'] || this.date_val
                for (let records of this.records) {
                  if (res[type][date][records['value']]) {
                    let tmpKeys = Object.keys(res[type][date][records['value']][0]['event_options'])
                    if (tmpKeys.includes('value1') && tmpKeys.includes('value2')) {
                      this.tmpResult[type] = this.tmpResult[type] || [];
                      rec[records['name']] = rec[records['name']] || ''
                      rec[records['name']] = `${res[type][date][records['value']][0]['event_options']['value1']}/${res[type][date][records['value']][0]['event_options']['value2']}`
                      flag = true
                    }
                  } else {
                    rec[records['name']] = rec[records['name']] || ''
                  }
                }
                if (flag) {
                  this.tmpResult[type].push(rec)
                }
                rec = {}
                rec['#'] = rec['#'] || ''
                rec['#'] = rec['#'] || this.date_val
                flag = false
                for (let records of this.records) {
                  if (res[type][date][records['value']]) {
                    let tmpKeys = Object.keys(res[type][date][records['value']][0]['event_options'])
                    if (tmpKeys.includes('value3')) {
                      this.tmpResult['Pulse Rate'] = this.tmpResult['Pulse Rate'] || [];
                      rec[records['name']] = rec[records['name']] || ''
                      rec[records['name']] = res[type][date][records['value']][0]['event_options']['value3']
                      flag = true
                    }
                  } else {
                    rec[records['name']] = rec[records['name']] || ''
                  }
                }
                if (flag){
                  this.tmpResult['Pulse Rate'].push(rec)
                }
              } else {
                // if (res[type][date][records['value']]) {
                // }
              }
            }
          }
      }
      console.log(this.tmpResult)
      this.vitalEventListVal = res;
      this.loader = false;
      this.vitalEventListkey = Object.keys(this.vitalEventListVal);
  }

  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
  }

}