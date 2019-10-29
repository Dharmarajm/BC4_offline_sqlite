import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NetworkService } from '../network-connectivity/network-service';
import { SQL_TABLES,SQL_SELECT_ALL_ENUMS } from '../sqlite-database/database.interface';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { from, Observable, forkJoin  } from 'rxjs';
import { async } from 'q';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const DATA_BASE_NAME = 'vCare4U.db';

@Injectable()
export class syncProvider {
  ready: Promise<void>;
  responseData1:any[];
  responseData2:any[];
  responseData3:any[];
  responseData4:any[];
  isNetworkOnline:boolean;
    constructor(public http: HttpClient,public sqlite: SQLite, private platform: Platform,public network: NetworkService) {
      console.log('Hello SettingProvider Provider');
    }

    initiateSync(){
       this.ready = this.platform.ready()
            .then(() => this.getTotalEnumMasters())
            .then(() => this.awaitAllUsersTableData()) 
    }

    async getTotalEnumMasters(){
      alert('test');
        
            console.log(this.network.isNetworkOnline)
            this.isNetworkOnline = true
            console.log(this.isNetworkOnline)
            
            if(this.isNetworkOnline == true){
              let db = await this.getDatabase();
                await this.http.get(`enum_masters`).subscribe(async(res)=>{
                    let EnumData = res["enum_masters"];
                    let length = await db.executeSql(SQL_SELECT_ALL_ENUMS,[]).then(data=>{
                      return data.rows.length
                    })
                    if(EnumData.length!=length){ //&& status==true
                        let sql1 = `DELETE FROM enum_masters`;
                        
                        db.executeSql(sql1,[]);
                        for (let i in  EnumData) {
                            console.log(EnumData[i])
                            let sql2 = `INSERT INTO enum_masters VALUES (?,?,?,?,?)`;
                            db.executeSql(sql2,[
                                EnumData[i]["id"],
                                EnumData[i]["name"],
                                EnumData[i]["category_name"],
                                EnumData[i]["created_at"],
                                EnumData[i]["updated_at"]
                            ]);  
                        };
                              
                    }
                },error=>{
                   console.log(error)
                }) 
            }
    }

    async awaitAllUsersTableData(){
      console.log(this.network.isNetworkOnline)
      this.isNetworkOnline = true
      console.log(this.isNetworkOnline)
        if(this.isNetworkOnline == true){  
            
            await this.requestDataFromMultipleSources().subscribe(async(responseList)=>{
                
                this.responseData1 = responseList[0]["emergency_contacts"]
                this.responseData2 = responseList[1]["health_detail"];
                this.responseData3 = responseList[2]["users"]; 
                this.responseData4 = responseList[3]["user_associations"];
                
                console.log(responseList)
                let db = await this.getDatabase();

                db.executeSql(`SELECT * FROM emergency_details`, []).then(async(data) => {
                  let length = data.rows.length;
                  console.log(length)
                  if(length>0){
                    let emergencyContacts = [];
                    for (let i = 0; i < data.rows.length; i++) {
                      emergencyContacts.push({
                        id: data.rows.item(i).id,
                        contact_name: data.rows.item(i).contact_name,
                        emergency_no: data.rows.item(i).emergency_no,
                        user_type: data.rows.item(i).user_type,
                        user_id: data.rows.item(i).user_id,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at,
                      });
                    }
                    //await this.getEmergencyContacts(emergencyContacts); 
                  }else{
                    this.getEmergencyContacts(this.responseData1);
                  }
                })

                db.executeSql(`SELECT * FROM health_details`, []).then(async(data) => {
                  let length = data.rows.length;
                  console.log(length)
                  if(length>0){
                    let healthData = [];
                    for (let i = 0; i < data.rows.length; i++) {
                      let attribute_json = JSON.parse(data.rows.item(i).attribute_name_value);

                      healthData.push({
                        id: data.rows.item(i).id,
                        health_id: data.rows.item(i).health_id,
                        name: data.rows.item(i).name,
                        attribute_name_value: attribute_json,
                        user_id: data.rows.item(i).user_id,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at,
                      });
                    }
                    //await this.getHealthDetails(healthData);      
                  }else{
                    this.getHealthDetails(this.responseData2); 
                  }
                })
                
                db.executeSql(`SELECT * FROM users`, []).then(async(data) => {
                  let length = data.rows.length;
                  console.log(length)
                  if(length>0 && data.rows.item(0).updated_at>this.responseData3['updated_at']){
                    
                      
                  }else {
                    
                    this.getUsersData(this.responseData3); 
                  }
                })

                if(this.responseData4.length!=0){
                    let sql4 = `DELETE FROM user_associations`;
                    db.executeSql(sql4,[]);
                    let data4 = [this.responseData4[0]["id"],this.responseData4[0]["patient_id"],this.responseData4[0]["caregiver_id"],this.responseData4[0]["nick_name"],this.responseData4[0]["created_at"],this.responseData4[0]["updated_at"]]
                    let sqlData4 = `INSERT INTO user_associations VALUES (?,?,?,?,?,?)`;
                    db.executeSql(sqlData4,data4); 
                }

            })
        }   
    }

    async getEmergencyContacts(response){
      let db = await this.getDatabase();
      let sql1 = `DELETE FROM emergency_details`;
      await db.executeSql(sql1,[]);
      for(let i in response){
          let data1 = [
              response[i]["id"],
              response[i]["emergency_id"],
              response[i]["contact_name"],
              response[i]["emergency_no"],
              response[i]["user_type"],
              response[i]["user_id"],
              response[i]["created_at"],
              response[i]["updated_at"]
          ]
          let sqlData1 = `INSERT INTO emergency_details VALUES (?,NULL,?,?,?,?,?,?)`;
          await db.executeSql(sqlData1,data1).then(res=>{
            console.log(res)
          });  
      }
    }

    async getHealthDetails(response){
      let db = await this.getDatabase();
      
      let sql2 = `DELETE FROM health_details`;
      await db.executeSql(sql2,[]);

      for(let i in response){
        let attribute_json = JSON.stringify(response[i]["attribute_name_value"]);
        let data2 = [
            response[i]["id"],
            response[i]["name"],
            attribute_json,
            response[i]["user_id"],
            response[i]["created_at"],
            response[i]["updated_at"]
        ]
        let sqlData2 = `INSERT INTO health_details VALUES (?,NULL,?,?,?,?,?)`;
        await db.executeSql(sqlData2,data2).then(res=>{
          console.log(res)
        });
      }
    }

    async getUsersData(response){

      let db = await this.getDatabase();
      
      let sql3 = `DELETE FROM users`;
      await db.executeSql(sql3,[]);
      
      for (let i in response) {
        let attribute_json = JSON.stringify(response[i]["user_picture"]);
        let data3 = [
          response[i]["id"],
          response[i]["name"],
          response[i]["email"],
          response[i]["password"],
          response[i]["mobile_no"],
          response[i]["address"],
          response[i]["country"],
          response[i]["blood_group"],
          response[i]["age"],
          response[i]["user_uid"],
          response[i]["forgot_password_code"],
          attribute_json,
          response[i]["active_status"],
          response[i]["role_id"],
          response[i]["created_at"],
          response[i]["updated_at"]
        ];
        let sqlData3 = `INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        await db.executeSql(sqlData3,data3).then(res=>{
          console.log(res);
        }); 
      }
    }

    getDatabase() {
        return this.ready.then(() => {
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db: SQLiteObject) => {
                return db;
            })
        });
    }

    getuserID(){
        let user_id:any=null;
        if(localStorage.getItem("user_id")!=undefined){
            user_id=localStorage.getItem("user_id");
            return user_id;
        }
        
        return user_id
    }


    public requestDataFromMultipleSources(): Observable<any[]> {
        let user_id = localStorage.getItem("user_id")
        let response1 = this.http.get(`emergency_details/emergency_contacts`);
        let response2 = this.http.get(`health_details`);
        let response3 = this.http.get(`users/user_data`);
        let response4 = this.http.get(`users/user_associations`);
       
        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        return forkJoin([response1, response2, response3,response4]);
    }

}
