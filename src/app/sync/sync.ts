import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NetworkService } from '../network-connectivity/network-service';
import { SQL_SELECT_ALL_ENUMS } from '../sqlite-database/database.interface';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { from, Observable, forkJoin  } from 'rxjs';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../environments/environment'
import { DomSanitizer} from '@angular/platform-browser';

/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const DATA_BASE_NAME = 'BCared4.db';

@Injectable()
export class syncProvider {
  ready: Promise<void>;
  allEvents:any[];
  enumResponseData:any[];
  responseData1:any[];
  responseData2:any[];
  responseData3:any[];
  responseData4:any[];
  responseData5:any
  patientList:any[];
  isNetworkOnline:boolean;
  environment:any;
  getGlobalPath:any;

    constructor(public sanitizer: DomSanitizer,private transfer: FileTransfer,public http: HttpClient,public sqlite: SQLite, private platform: Platform,public network: NetworkService) {
      console.log('Hello SettingProvider Provider');
      //this.initiateSync();
    }

    async initiateSync() {
      
      this.ready = this.platform.ready()
            // .then(() => this.getTotalEnumMasters())
            // .then(() => this.awaitAllUsersTableData())
            .then(()=>{
              this.getAllEvents();
              this.getTotalEnumMasters();
              this.awaitAllUsersTableData();
            })
    }

    async getTotalEnumMasters(){
          
            this.isNetworkOnline = true
            
            //if(this.isNetworkOnline == true){
            
              this.getDatabase().then((database)=>{
                
                let length = database.executeSql(SQL_SELECT_ALL_ENUMS,[]).then(data=>{
                  return data.rows.length
                });
                
                this.requestDataFromEnumMasters().subscribe(async(responseList) => {
                  
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

    async getAllEvents(){
      let getUserIds = await this.getUserIdForEvents();
      this.getDatabase().then((database)=>{
        this.getAllEventsList(getUserIds).subscribe((responseList)=>{
           console.log(responseList);
           this.allEvents = responseList['events'];
           database.executeSql(`SELECT * FROM events`, []).then(async(data) => {
              let length = data.rows.length;
              if(length>0){
                for (let i = 0; i < data.rows.length; i++) {
                  let rowData = data.rows.item(i);
                  if(data.rows.item(i).id==null){
                    await this.createSingleEventData(rowData); 
                  }else{
                    if(data.rows.item(i).delete1=='true'){
                      await this.deleteSingleEventData(rowData);  
                    }else{
                    }
                  }
                } 
              }else{  
                let sql = `INSERT INTO events VALUES (?,NULL,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let setGlobalURI = await this.getLocalAssets();
                for(let i in this.allEvents) {
                  let event_optionsURI = JSON.parse(this.allEvents["event_options"]);
                  if(setGlobalURI.length>0){
                    event_optionsURI["localImagePath"] = setGlobalURI;
                  }
                  let createEventData = [this.allEvents["id"],this.allEvents["event_name"],this.allEvents["description"],this.allEvents["value"],this.allEvents["event_datetime"],this.allEvents["event_type"],this.allEvents["event_category"],JSON.stringify(this.allEvents["event_assets"]),JSON.stringify(event_optionsURI),this.allEvents["user_id"],this.allEvents["created_at"],this.allEvents["updated_at"],false]
                  database.executeSql(sql, createEventData)
                  await this.commonUpdateAndDeleteEvent(sql,createEventData);
                }
              } 
           })
        })
      })  
    }

    getLocalAssets(){
      let localAssets = this.allEvents["event_options"];
      let globalassets = this.allEvents["event_assets"];
      let getGlobalURIs = [] 
      if(globalassets.length>0){
        for(let i in localAssets["localImagePath"]){
          let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"],"globalURI": null,"cdvFilePath":localAssets["localImagePath"][i]["cdvFilePath"],"fileName":localAssets["localImagePath"][i]["fileName"],"delete":localAssets["localImagePath"][i]["delete"] };
          if(globalassets!=null){
            if(globalassets.length>i){
              let globeURL = this.environment+globalassets[i]["url"];
              mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
            }
          }
          getGlobalURIs.push(mapUrl);
        }
        return getGlobalURIs;
      }

      return getGlobalURIs;
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
                    //let emergencyContacts = [];
                    for (let i = 0; i < data.rows.length; i++) {
                      let rowData = data.rows.item(i);
                      if(data.rows.item(i).id==null){
                        await this.updateSingleEmergencyDetail(rowData); 
                      }else{
                        if(data.rows.item(i).delete1=='true'){
                          await this.deleteSingleEmergencyDetail(rowData);  
                        }else{
                          // let index = this.responseData1.findIndex(res=>res.id==data.rows.item(i).id);
                          // console.log(index);
                          // if(data.rows.item(i).updated_at>this.responseData1[index]['updated_at']){

                          // }   
                        }
                      }
                      // emergencyContacts.push({
                      //   id: data.rows.item(i).id,
                      //   contact_name: data.rows.item(i).contact_name,
                      //   emergency_no: data.rows.item(i).emergency_no,
                      //   user_type: data.rows.item(i).user_type,
                      //   user_id: data.rows.item(i).user_id,
                      //   created_at: data.rows.item(i).created_at,
                      //   updated_at: data.rows.item(i).updated_at,
                      //   delete1: data.rows.item(i).delete1
                      // });

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
                      let rowData = data.rows.item(i);
                      // let attribute_json = JSON.parse(data.rows.item(i).attribute_name_value);

                      // healthData.push({
                      //   id: data.rows.item(i).id,
                      //   health_id: data.rows.item(i).health_id,
                      //   name: data.rows.item(i).name,
                      //   attribute_name_value: attribute_json,
                      //   user_id: data.rows.item(i).user_id,
                      //   created_at: data.rows.item(i).created_at,
                      //   updated_at: data.rows.item(i).updated_at,
                      // });
                      if(data.rows.item(i).id==null){
                        await this.updateSingleHealthDetail(rowData); 
                      }else{
                        let index = this.responseData2.findIndex(res=>res.id==data.rows.item(i).id);
                        console.log(index);
                        if(data.rows.item(i).updated_at>this.responseData2[index]['updated_at']){
                          
                        }        
                      }  
                         
                    }
                    //await this.getHealthDetails(healthData);      
                  }else{
                    await this.getHealthDetails(this.responseData2); 
                  }
                },error=>{
                  console.log(error,'healtherror');
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
      this.getDatabase().then((database)=> {
        let sql1 = `DELETE FROM emergency_details`;
        database.executeSql(sql1,[]);
        for(let i in response){
            let data1 = [
                response[i]["id"],
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

    async updateSingleEmergencyDetail(rowData){
     let data = { "contact_name": rowData["contact_name"], "emergency_no": rowData["emergency_no"], "user_type": rowData["user_type"] };
     this.insertEmergencyData(data).subscribe(async (responseList)=>{ 
       let response = responseList[0];
       let sql = `UPDATE emergency_details SET id = ?, created_at = ?, updated_at = ? WHERE emergency_id = ?`;
       let createEventData = [response["id"],response["created_at"],response["updated_at"],rowData["emergency_id"]]
       await this.commonUpdateAndDeleteEvent(sql,createEventData)
     })
    }

    async deleteSingleEmergencyDetail(rowData){
      this.deleteEmergencyData(rowData["id"]).subscribe(async (responseList)=>{ 
        //let response = responseList[0];
        let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
        let createEventData = [rowData["emergency_id"]]
        await this.commonUpdateAndDeleteEvent(sql,createEventData);
      })
     }

    public insertEmergencyData(data): Observable<any[]> {
      let response1 = this.http.post(`emergency_details`,data);
      return forkJoin([response1]); 
    }

    public deleteEmergencyData(id): Observable<any[]> {
      let response1 = this.http.delete(`emergency_details/`+id);
      return forkJoin([response1]); 
    }

    updateSingleHealthDetail(rowData){
      let data = { "contact_name": rowData["contact_name"], "emergency_no": rowData["emergency_no"], "user_type": rowData["user_type"] };
      this.insertEmergencyData(data).subscribe(async (responseList)=>{ 
        let response = responseList[0];
        let sql = `UPDATE emergency_details SET id = ?, created_at = ?, updated_at = ? WHERE emergency_id = ?`;
        let createEventData = [response["id"],response["created_at"],response["updated_at"],rowData["emergency_id"]]
        await this.commonUpdateAndDeleteEvent(sql,createEventData)
      }) 
    }

    commonUpdateAndDeleteEvent(sql,updateEventData){
      return this.sqlite.create({
        name: DATA_BASE_NAME,
        location: 'default'
      }).then((db: SQLiteObject) => {
        return db.executeSql(sql,updateEventData).then((row: any)=>{
          return { event_id:row.insertId }
        }).catch(res=>{
            return res;
        })
      })  
    }

    async createSingleEventData(rowData){
      let data = { event_name: rowData["event_name"], description: rowData["description"], event_datetime: rowData["event_datetime"], event_type: rowData["event_type"], event_category: rowData["event_category"], event_options: JSON.parse(rowData["event_options"]), value: rowData["value"]};
      this.insertEventData(data).subscribe(async (responseList)=>{ 
        let response = responseList[0]['event'];
        let sql = `UPDATE events SET id = ?, created_at = ?, updated_at = ? WHERE event_id = ?`
        let createEventData = [response["id"],response["created_at"],response["updated_at"],rowData["event_id"]]
        await this.commonUpdateAndDeleteEvent(sql,createEventData).then(async (res)=>{
          console.log(rowData["event_options"])  
          if(res["event_id"]!=undefined && rowData["event_options"]["localImagePath"]!=undefined && rowData["event_options"]["localImagePath"]!=null){
            
            let localImagePath = rowData["event_options"]["localImagePath"];

            for(var i in localImagePath){
              if(localImagePath[i]["globalURI"]!=null){
                let uploadStatus = await this.uploadImage(localImagePath[i],response["id"])
                if(uploadStatus["status"]==true){
                  let updateEventOptions = rowData["event_options"];
                  updateEventOptions["localImagePath"][i]["globalURI"] = uploadStatus["url"]
                  let sql = `UPDATE events SET event_options = ? WHERE event_id = ?`
                  let createEventData = [sql,[JSON.stringify(updateEventOptions),res["event_id"]]];
                  await this.commonUpdateAndDeleteEvent(sql,createEventData);   
                }
              }
            }
           }
        })
      })
     }

     async updateSingleEventData(rowData){
      let data = {};
      this.updateEventData(rowData["id"],data).subscribe(async (responseList)=>{
        //let response = responseList[0];
        let sql = `DELETE FROM events WHERE event_id = ?`;
        let createEventData = [rowData["emergency_id"]]
        await this.commonUpdateAndDeleteEvent(sql,createEventData);
      })
     }
 
     async deleteSingleEventData(rowData){
       this.deleteEventData(rowData["id"]).subscribe(async (responseList)=>{ 
         //let response = responseList[0];
         let sql = `DELETE FROM events WHERE event_id = ?`;
         let createEventData = [rowData["event_id"]]
         await this.commonUpdateAndDeleteEvent(sql,createEventData);
       })
      }

      public insertEventData(data): Observable<any[]> {
        let response1 = this.http.post(`events`,data);
        return forkJoin([response1]); 
      }

      public updateEventData(id,record): Observable<any[]> {
        let response1 = this.http.put(`events/`+id,record);
        return forkJoin([response1]); 
      }
  
      public deleteEventData(id): Observable<any[]> {
        let response1 = this.http.delete(`events/`+id);
        return forkJoin([response1]); 
      }

      async uploadImage(localfile,event_id){
        const fileTransfer: FileTransferObject = this.transfer.create();
    
        let data = { "id":event_id };
        

        let options: FileUploadOptions = {
        fileKey: 'event_assets',
        fileName: localfile["fileName"],
        mimeType: 'multipart/form-data',
        params:data,
        chunkedMode: false,
        headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        }
        let getUrl:any; 
        fileTransfer.upload(localfile["cdvFilePath"],environment.apiUrl+'events/update_image',options).then(res=>{
          getUrl = res["response"];
          return { url: getUrl,status: true }
        },error=>{
          return { url: getUrl,status: false }
        })
      }
  


      getAllEventsList(Ids){
        let response1 = this.http.get(`events/event_list?user_id=`+Ids);
        return forkJoin([response1]);
      }

      getPatientsList(){
        let response1 = this.http.get(`users/patient_list`);
        return forkJoin([response1]);
      }

      async getUserIdForEvents(){
        let user_id = null;
        if(localStorage.getItem("role_id")=='1'){
          user_id = localStorage.getItem("user_id");
          return user_id;
        }else{
          user_id = await this.getUserIdFromCareGiver();
          return user_id;
        }
      }

      getUserIdFromCareGiver(){
        return this.getPatientsList().subscribe((responseList)=>{
          this.patientList = responseList;
          let userIds = []
          for(let i in this.patientList['patient']){
            userIds.push(this.patientList['patient'][i]['id'])  
          }
          return userIds
        })
      }


}
