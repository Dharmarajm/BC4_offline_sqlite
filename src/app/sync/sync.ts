import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NetworkService } from '../network-connectivity/network-service';
import { SQL_SELECT_ALL_ENUMS } from '../sqlite-database/database.interface';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { from, Observable, forkJoin  } from 'rxjs';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const DATA_BASE_NAME = 'BCared4.db';

@Injectable()
export class syncProvider {
  ready: Promise<void>;
  enumResponseData:any[];
  responseData1:any[];
  responseData2:any[];
  responseData3:any[];
  responseData4:any[];
  responseData5:any
  isNetworkOnline:boolean;
    constructor(public http: HttpClient,public sqlite: SQLite, private platform: Platform,public network: NetworkService) {
      console.log('Hello SettingProvider Provider');
      //this.initiateSync();
    }

    async initiateSync() {
      
      this.ready = this.platform.ready()
            .then(() => this.getTotalEnumMasters())
            .then(() => this.awaitAllUsersTableData())
    }

    async getTotalEnumMasters(){
          
            this.isNetworkOnline = true
            
            //if(this.isNetworkOnline == true){
            
              this.getDatabase().then((database)=>{
                
                let length = database.executeSql(SQL_SELECT_ALL_ENUMS,[]).then(data=>{
                  return data.rows.length
                });
                
                this.requestDataFromEnumMasters().subscribe(async (responseList) => {
                  
                  this.enumResponseData = responseList[0]["enum_masters"];
                  if (this.enumResponseData.length != await length) {
                    let sql1 = `DELETE FROM enum_masters`;
                    database.executeSql(sql1, []);
                    for (let i in this.enumResponseData) {
                      console.log(this.enumResponseData[i]);
                      let sql2 = `INSERT INTO enum_masters VALUES (?,?,?,?,?)`;
                      database.executeSql(sql2, [
                        this.enumResponseData[i]["id"],
                        this.enumResponseData[i]["name"],
                        this.enumResponseData[i]["category_name"],
                        this.enumResponseData[i]["created_at"],
                        this.enumResponseData[i]["updated_at"]
                      ]).then(res => {
                        console.log(res, 'enum');
                      }, error => {
                        console.log(error, 'errorenum');
                      });
                    }
                    ;
                  }
                })
              })
              
      
              
              // await this.http.get(`enum_masters`).subscribe((res)=>{
              //       let EnumData = res["enum_masters"];
              //       console.log(EnumData)
                    
              //       console.log(length)
              //       console.log(EnumData.length!=length)
              //       if(EnumData.length!=length) {
              //           let sql1 = `DELETE FROM enum_masters`;
                        
              //           await db.executeSql(sql1,[]);
              //           for (let i in  EnumData) {
              //               console.log(EnumData[i])
              //               let sql2 = `INSERT INTO enum_masters VALUES (?,?,?,?,?)`;
              //               await db.executeSql(sql2,[
              //                   EnumData[i]["id"],
              //                   EnumData[i]["name"],
              //                   EnumData[i]["category_name"],
              //                   EnumData[i]["created_at"],
              //                   EnumData[i]["updated_at"]
              //               ]).then(res=>{
              //                 console.log(res,'enum');
              //               },error=>{
              //                 console.log(error,'errorenum');
              //               });  
              //           };
                              
              //       }
              //   },error=>{
              //      console.log(error)
              //   }) 
           // }
    }

    async awaitAllUsersTableData(){
      
      this.isNetworkOnline = true
     
        //if(this.isNetworkOnline == true){  
          
           this.getDatabase().then((database)=>{
            
            this.requestDataFromMultipleSources().subscribe((responseList)=>{
              
                this.responseData1 = responseList[0]["emergency_contacts"]
                this.responseData2 = responseList[1]["health_detail"];
                this.responseData3 = responseList[2]["users"]; 
                this.responseData4 = responseList[3]["user_associations"];
                this.responseData5 = responseList[4]["qrcode_image"];
                console.log(responseList)
                
                localStorage.setItem("qrcode",this.responseData5);     
                database.executeSql(`SELECT * FROM emergency_details`, []).then(async(data) => {
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
                        delete: data.rows.item(i).delete
                      });
                    }
                    //await this.getEmergencyContacts(emergencyContacts); 
                  }else{
                    await this.getEmergencyContacts(this.responseData1);
                  }
                },error=>{
                  console.log(error,'emergencyerror')
                })

                database.executeSql(`SELECT * FROM health_details`, []).then(async(data) => {
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
                    await this.getHealthDetails(this.responseData2); 
                  }
                },error=>{
                  console.log(error,'healtherror')
                })
                
                database.executeSql(`SELECT * FROM users`, []).then(async(data) => {
                  let length = data.rows.length;
                  console.log(length)
                  
                  if(length>0){
                    
                      
                  }else {
                    
                    await this.getUsersData(this.responseData3); 
                  }
                },error=>{
                  console.log(error,'userserror')
                })

                if(this.responseData4.length!=0){
                    let sql4 = `DELETE FROM user_associations`;
                    database.executeSql(sql4,[]);
                    let data4 = [this.responseData4[0]["id"],this.responseData4[0]["patient_id"],this.responseData4[0]["caregiver_id"],this.responseData4[0]["nick_name"],this.responseData4[0]["created_at"],this.responseData4[0]["updated_at"]]
                    let sqlData4 = `INSERT INTO user_associations VALUES (?,?,?,?,?,?)`;
                    database.executeSql(sqlData4,data4).then(res=>{
                     console.log(res,'user_associate')
                    },error=>{
                     console.log(error,'userassociateerror')
                    }); 
                }

            })
           })
            
        //}   
    }

    async getEmergencyContacts(response){
      this.getDatabase().then((database)=>{
        let sql1 = `DELETE FROM emergency_details`;
        database.executeSql(sql1,[]);
        for(let i in response){
            let data1 = [
                response[i]["id"],
                response[i]["emergency_id"],
                response[i]["contact_name"],
                response[i]["emergency_no"],
                response[i]["user_type"],
                response[i]["user_id"],
                response[i]["created_at"],
                response[i]["updated_at"],
                false
            ]
            let sqlData1 = `INSERT INTO emergency_details VALUES (?,NULL,?,?,?,?,?,?,?)`;
            database.executeSql(sqlData1,data1).then(res=>{
              console.log(res)
            });  
        } 
      })
      
    }

    async getHealthDetails(response){
      this.getDatabase().then((database)=>{
        let sql2 = `DELETE FROM health_details`;
        database.executeSql(sql2,[]);

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
          database.executeSql(sqlData2,data2).then(res=>{
            console.log(res)
          });
        }
      })
      
      
    }

    async getUsersData(response){
      this.getDatabase().then((database)=>{
        let sql3 = `DELETE FROM users`;
        database.executeSql(sql3,[]);
        
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
            response[i]["updated_at"],
            false
          ];
          let sqlData3 = `INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
          database.executeSql(sqlData3,data3).then(res=>{
            console.log(res);
          }); 
        } 
      })
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
        let response5 = this.http.get(`health_details/about`);
       
        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        return forkJoin([response1, response2, response3, response4, response5]);
    }
    
    public requestDataFromEnumMasters(): Observable<any[]> {
      
      let response1 = this.http.get(`enum_masters`);

      // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
      return forkJoin([response1]);
    }
}
