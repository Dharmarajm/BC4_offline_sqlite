import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { careGiverService } from '../../care-giver-service/caregiver-service.service';
import { CgVitalFilterPage } from '../cg-vital-filters/cg-vital-filters.page';
import { DatePipe } from '@angular/common';  
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
 constructor(public datepipe: DatePipe, public modalController:ModalController, public service: careGiverService, public route:ActivatedRoute, public router: Router, private statusBar: StatusBar) {
       
 }

   ngOnInit() {
    this.records = [
      {
        name: '#',
        value: '#'
      },
      {
        name: '6am-9am',
        value: 'Early Morning'
      },
      {
        name: '9am-12pm',
        value: 'Mid Morning'
      },
      {
        name: '12pm-3pm',
        value: 'Afternoon'
      },
      {
        name: '3pm-6pmm',
        value: 'Early Evening'
      },
      {
        name: '6pm-9pm',
        value: 'Evening'
      },
      {
        name: 'and >9pm',
        value: 'Night'
      }
    ]
    this.records2 = ['#', 'Random', 'Fasting', 'Post Prandial']
    this.records_time = [{ "Name": "6am-9am" }, { "Name": "9am-12pm" }, { "Name": "12pm-3pm" }, { "Name": "3pm-6pm" }, { "Name": "6pm-9pm" }, { "Name": "and >9pm" }]
    this.records1 = [{ "Name": "HDL" }, { "Name": "LDL" }, { "Name": "Triglyceride" }, { "Name": "Total Count" }]
    // this.records2 = [{ "Name": "Random" }, { "Name": "Fasting" }, { "Name": "Post Prandial" }]
  }

  tmpResult = {}
  
  ionViewWillEnter() {
   this.date = new Date();
    this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    this.statusBar.backgroundColorByHexString('#60dc68');
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
    this.loader = true;
    this.user_id = localStorage.getItem("user_id");
    this.service.vitalEventListNew().subscribe(res => {
      this.parseResponse(res)
    });

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
          this.service.vitalfilter(data['data']).subscribe(res => {
            this.parseResponse(res)
          })
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