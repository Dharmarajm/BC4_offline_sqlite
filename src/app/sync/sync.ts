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
            .then(()=>this.updateImageDeletion())
            .then(()=>{
              this.getTotalEnumMasters();
              this.getAllEvents();
              this.awaitAllUsersTableData();
            })
    }

    async updateImageDeletion(){
      let sqlEventQuery = `SELECT * FROM events WHERE (event_type='alert_medication' AND event_type='report' AND event_type='prescription' AND delete1='false')`
      this.getDatabase().then((database)=>{
         database.executeSql(sqlEventQuery, []).then(async (data) => {
          for (let i = 0; i < data.rows.length; i++) {
            let event_json:any = null;
            let eventAssetsJson:any = null;

            if (data.rows.item(i).event_options != null) {
              event_json = JSON.parse(data.rows.item(i).event_options);
            }
            if (data.rows.item(i).event_assets != null) {
                eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
            }

            let index = [];
            for(let i in event_json['localImagePath']){
              if(event_json['localImagePath'][i]['delete']=='true'){
                index.push(i);
              }
            }
            let event_id = data.rows.item(i).event_id;
            if(index.length>0){
              let user_id = await this.getuserID();
              let params = { "index":index,"id":user_id }
              this.deleteEventImages(params).subscribe((responseList) => {
                 console.log(responseList)
                 for(let j in index){
                  event_json['localImagePath'].splice(index[i],1);
                  eventAssetsJson.splice(index[i],1);
                 }
                 let sql = `UPDATE events SET event_options = ?, event_assets = ? WHERE event_id = ?`;
                 let createEventData = [JSON.stringify(event_json),JSON.stringify(eventAssetsJson),event_id]
                 this.commonUpdateAndDeleteEvent(sql,createEventData);
              },err=>{
                
              })
            }
            
          }
        }) 
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
           this.allEvents = responseList[0]['events'];
           database.executeSql(`SELECT * FROM events`, []).then(async(data) => {
              let length = data.rows.length;
              if(length>0){
                console.log('if')
                for (let i = 0; i < data.rows.length; i++) {
                  let rowData = data.rows.item(i);
                  if(data.rows.item(i).id == null){
                     console.log('null',data.rows.item(i).id)
                     this.createSingleEventData(rowData); 
                  }else{
                    if(data.rows.item(i).delete1=='true'){
                      console.log('delete',data.rows.item(i).delete1)
                       this.deleteSingleEventData(rowData);  
                    }else{
                      let findindex = this.allEvents.indexOf(res=>res.id==data.rows.item(i).id)
                      let sql = `UPDATE events SET id = ?, event_name = ?, description = ?, value = ?, event_datetime = ?, event_type = ?, event_category = ?, event_assets = ?, event_options = ?, user_id = ?, created_at = ?, updated_at = ?, delete1 = ? WHERE event_id = ?`;
                      if(findindex!=-1 && this.allEvents[findindex]['updated_at'] > data.rows.item(i).updated_at){
                        let createEventData = [this.allEvents[findindex]["id"],this.allEvents[findindex]["event_name"],this.allEvents[findindex]["description"],this.allEvents[findindex]["value"],this.allEvents[findindex]["event_datetime"],this.allEvents[findindex]["event_type"],this.allEvents[findindex]["event_category"],JSON.stringify(this.allEvents[findindex]["event_assets"]),JSON.stringify(this.allEvents[findindex]["event_options"]),this.allEvents[findindex]["user_id"],this.allEvents[findindex]["created_at"],this.allEvents[findindex]["updated_at"],false,rowData['event_id']]      
                        //database.executeSql(sql, createEventData)
                        this.commonUpdateAndDeleteEvent(sql,createEventData);
                      }else if(findindex!=-1 && this.allEvents[findindex]['updated_at'] < data.rows.item(i).updated_at){
                        this.updateSingleEventData(rowData); 
                      }
                    }
                  }
                } 
              }else{  
                console.log('else')
                let sql = `INSERT INTO events VALUES (?,NULL,?,?,?,?,?,?,?,?,?,?,?,?)`;
                
                for(let i in this.allEvents) {
                  console.log(this.allEvents[i])
                  let event_optionsURI = this.allEvents[i]["event_options"];
                  let event_assets_URI = this.allEvents[i]["event_assets"];
                  let setGlobalURI = await this.getLocalAssets(event_optionsURI,event_assets_URI);
                  if(setGlobalURI.length>0){
                    event_optionsURI["localImagePath"] = setGlobalURI;
                  }
                  let createEventData = [this.allEvents[i]["id"],this.allEvents[i]["event_name"],this.allEvents[i]["description"],this.allEvents[i]["value"],this.allEvents[i]["event_datetime"],this.allEvents[i]["event_type"],this.allEvents[i]["event_category"],JSON.stringify(this.allEvents[i]["event_assets"]),JSON.stringify(event_optionsURI),this.allEvents[i]["user_id"],this.allEvents[i]["created_at"],this.allEvents[i]["updated_at"],false]
                  //database.executeSql(sql, createEventData)
                  this.commonUpdateAndDeleteEvent(sql,createEventData);
                }
              } 
           })
        })
      })  
    }

    getLocalAssets(events_options,events_assets){
      let localAssets = events_options;
      console.log(localAssets)
      let globalassets = events_assets;
      console.log(globalassets)
      let getGlobalURIs = [];
      console.log(globalassets.length>0)
      if(globalassets.length>0 && localAssets!=null){
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
                let profile_id = localStorage.getItem("profile_id");     
                database.executeSql(`SELECT * FROM emergency_details`, []).then((data) => {
                  let length = data.rows.length;
                  console.log(length)
                  if(length>0){
                    //let emergencyContacts = [];
                    for (let i = 0; i < data.rows.length; i++) {
                      let rowData = data.rows.item(i);
                      if(data.rows.item(i).id==null && profile_id == data.rows.item(i).user_id){
                         this.updateSingleEmergencyDetail(rowData); 
                      }else{
                        if(data.rows.item(i).delete1=='true' && profile_id == data.rows.item(i).user_id){
                           this.deleteSingleEmergencyDetail(rowData);  
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
                    this.getEmergencyContacts(this.responseData1);
                  }
                },error=>{
                  console.log(error,'emergencyerror')
                })

                database.executeSql(`SELECT * FROM health_details`, []).then((data) => {
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
                      let index = this.responseData2.findIndex(res=>res.id==data.rows.item(i).id);
                      console.log(index);
                      if(data.rows.item(i).id==null && data.rows.item(i).name == "health" && profile_id == data.rows.item(i).user_id || data.rows.item(i).updated_at > this.responseData2[index]['updated_at'] && data.rows.item(i).name == "health" && profile_id == data.rows.item(i).user_id){
                         this.createSingleHealthDetail(rowData); 
                      }else if(data.rows.item(i).updated_at < this.responseData2[index]['updated_at'] && data.rows.item(i).name == "health" && profile_id == data.rows.item(i).user_id){
                          this.createSingleHealthDetail(this.responseData2[index]);        
                      }  
                         
                    }
                    //await this.getHealthDetails(healthData);      
                  }else{
                     this.getHealthDetails(this.responseData2); 
                  }
                },error=>{
                  console.log(error,'healtherror');
                })
                
                database.executeSql(`SELECT * FROM users`, []).then(async (data) => {
                  let length = data.rows.length;
                  console.log(length)
                  
                  if(length>0){
                    for (let i = 0; i < data.rows.length; i++) {
                      let rowData = data.rows.item(i);
                      if(data.rows.item(i).delete1 == 'true' && data.rows.item(i).role_id == 2){
                        this.deleteUsersData(rowData);  
                      }else if(data.rows.item(i).delete1 == 'true' && data.rows.item(i).role_id == 1){
                        this.deletePatientData(rowData);  
                      }else{
                        let getHealthData = await this.getUserPolicy();
                        let assigngetUserData = getHealthData['policies'];
                        let healthData = assigngetUserData[0] 
                        let findindex = this.responseData3.indexOf(res=>res.id==data.rows.item(i).id)
                        let sql = `UPDATE users SET name = ?, email = ?, password = ?, mobile_no = ?, address = ?, country = ?, blood_group = ?, age = ?, user_uid = ?, forgot_password_code = ?, user_picture = ?, active_status = ?, role_id = ?, created_at = ?, updated_at = ?, delete1 = ? WHERE id = ?`;
                        if(findindex!=-1 && this.responseData3[findindex]['updated_at'] > data.rows.item(i).updated_at){
                          let createEventData = [this.responseData3[findindex]["name"],this.responseData3[findindex]["email"],this.responseData3[findindex]["password"],this.responseData3[findindex]["mobile_no"],this.responseData3[findindex]["address"],this.responseData3[findindex]["country"],this.responseData3[findindex]["blood_group"],this.responseData3[findindex]["age"],this.responseData3[findindex]["user_uid"],this.responseData3[findindex]["forgot_password_code"],JSON.stringify(this.responseData3[findindex]["user_picture"]),this.responseData3[findindex]["active_status"],this.responseData3[findindex]["role_id"],this.responseData3[findindex]["created_at"],this.responseData3[findindex]["updated_at"],false,this.responseData3[findindex]["id"]]      
                          this.commonUpdateAndDeleteEvent(sql,createEventData);
                        }else if(findindex!=-1 && this.responseData3[findindex]['updated_at'] < data.rows.item(i).updated_at && profile_id == data.rows.item(i).id || healthData['id']==null && findindex!=-1 && profile_id == data.rows.item(i).id){
                          let profile_picture = JSON.parse(data.rows.item(i).user_picture);
                          if(profile_picture['url']!=null && profile_picture['toUpdate']==true){
                            let localPath = profile_picture;
                            let params = { localURL: profile_picture['localURL'],
                                           cdvFilePath: profile_picture['cdvFilePath'],
                                           toUpdate: false
                                          }
                            let requestUrl = `users/profile_picture`;
                            let uploadStatus = await this.uploadImage(localPath,params,requestUrl);
                            if(uploadStatus["status"]==true){
                              let updateEventOptions = profile_picture;
                              updateEventOptions["url"] = uploadStatus["url"];
                              updateEventOptions["toUpdate"] = false;
                              
                              let sql = `UPDATE users SET user_picture = ? WHERE id = ?`
                              let id  = data.rows.item(i).id;
                              let createEventData = [JSON.stringify(updateEventOptions),id];
                              this.commonUpdateAndDeleteEvent(sql,createEventData); 
                            }
                          }
                          this.updateUsersData(rowData,healthData);
                        }
                      }  
                    }  
                      
                  }else {
                    
                    this.getUsersData(this.responseData3); 
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
     this.insertEmergencyData(data).subscribe((responseList)=>{ 
       let response = responseList[0];
       let sql = `UPDATE emergency_details SET id = ?, created_at = ?, updated_at = ? WHERE emergency_id = ?`;
       let createEventData = [response["id"],response["created_at"],response["updated_at"],rowData["emergency_id"]]
       this.commonUpdateAndDeleteEvent(sql,createEventData)
     })
    }

    async deleteSingleEmergencyDetail(rowData){
      console.log(rowData)
      this.deleteEmergencyData(rowData["id"]).subscribe((responseList)=>{ 
        //let response = responseList[0];
        console.log(responseList)
        let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
        let createEventData = [rowData["emergency_id"]]
        this.commonUpdateAndDeleteEvent(sql,createEventData);
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

    createSingleHealthDetail(rowData){
      let data = { attribute_name_value: rowData['attribute_name_value'] };
      this.updateHealthData(data).subscribe((responseList)=>{ 
        let response = responseList[0]['health_detail'];
        let sql = `UPDATE health_details SET id = ?, attribute_name_value = ?, created_at = ?, updated_at = ? WHERE health_id = ?`;
        let createEventData = [response["id"],response["attribute_name_value"],response["created_at"],response["updated_at"],rowData["health_id"]]
        this.commonUpdateAndDeleteEvent(sql,createEventData)
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
      console.log(rowData);
      let data = { event_name: rowData["event_name"], description: rowData["description"], event_datetime: rowData["event_datetime"], event_type: rowData["event_type"], event_category: rowData["event_category"], event_options: JSON.parse(rowData["event_options"]), value: rowData["value"] };
      console.log(data)
      this.insertEventData(data).subscribe((responseList)=>{
        let response = responseList[0]['event'];
        let sql = `UPDATE events SET id = ?, created_at = ?, updated_at = ? WHERE event_id = ?`
        let createEventData = [response["id"],response["created_at"],response["updated_at"],rowData["event_id"]]
        this.commonUpdateAndDeleteEvent(sql,createEventData).then(async (res)=>{
          console.log(rowData["event_options"])  
          console.log(res)
          if(res["event_id"]!=undefined && rowData["event_options"]["localImagePath"]!=undefined && rowData["event_options"]["localImagePath"]!=null){
            
            let localImagePath = rowData["event_options"]["localImagePath"];

            for(var i in localImagePath){
              if(localImagePath[i]["globalURI"]!=null){
                let params = { "id":response["id"] }
                let requestUrl = `events/update_image`;
                let uploadStatus = await this.uploadImage(localImagePath[i],params,requestUrl)
                if(uploadStatus["status"]==true){
                  let updateEventOptions = rowData["event_options"];
                  updateEventOptions["localImagePath"][i]["globalURI"] = uploadStatus["url"]
                  let sql = `UPDATE events SET event_options = ? WHERE event_id = ?`
                  let createEventData = [sql,[JSON.stringify(updateEventOptions),res["event_id"]]];
                  this.commonUpdateAndDeleteEvent(sql,createEventData);   
                }
              }
            }
           }
        })
      })
     }

     async updateSingleEventData(rowData){
      let data = { event_name: rowData["event_name"], description: rowData["description"], event_datetime: rowData["event_datetime"], event_type: rowData["event_type"], event_category: rowData["event_category"], event_options: JSON.parse(rowData["event_options"]), value: rowData["value"]};
      this.updateEventData(rowData["id"],data).subscribe((responseList)=>{
        let response = responseList[0]['event'];
        let sql = `UPDATE events SET created_at = ?, updated_at = ? WHERE event_id = ?`
        let createEventData = [response["created_at"],response["updated_at"],rowData["event_id"]]
        this.commonUpdateAndDeleteEvent(sql,createEventData);
      })
     }
 
     async deleteSingleEventData(rowData){
       this.deleteEventData(rowData["id"]).subscribe((responseList)=>{ 
         //let response = responseList[0];
         let sql = `DELETE FROM events WHERE event_id = ?`;
         let createEventData = [rowData["event_id"]]
         this.commonUpdateAndDeleteEvent(sql,createEventData);
       })
      }
      
      
      async updateUsersData(rowData,healthData) {
        let data = { policy: { 
                              attribute_name_value: {
                                                      mediclaim_policy : healthData['attribute_name_value']["mediclaim_policy"] , 
                                                      policy_issuer: healthData['attribute_name_value']["policy_issuer"] 
                                                    }  
                              },
                     user:{ 
                      age: rowData['age'],
                      blood_group: rowData['blood_group']
                     } 
                    } 
          this.updateUserAndHealthData(data).subscribe((responseList)=>{
            let response = responseList[0];
            let policies = response['policies'];
            let userData = response['user'];  
            let sql = `UPDATE health_details SET id = ?, attribute_name_value = ?, created_at = ?, updated_at = ? WHERE health_id = ?`
            let createEventData = [policies["id"],policies["attribute_name_value"],policies["created_at"],policies["updated_at"],healthData["health_id"]];
            this.commonUpdateAndDeleteEvent(sql,createEventData);
            let sql1 = `UPDATE users SET age = ?, blood_group = ?, created_at = ?, updated_at = ? WHERE id = ?`
            let createEventData1 = [userData["age"],userData["blood_group"],userData["created_at"],userData["updated_at"],userData["id"]];
            this.commonUpdateAndDeleteEvent(sql1,createEventData1);
          })
       }

       async getUserPolicy(){
        return this.sqlite.create({
          name: DATA_BASE_NAME,
          location: 'default'
        }).then((db: SQLiteObject) => {
          let sqlHealthQuery = `SELECT * FROM health_details WHERE name='policy'`;
          let healthData = [];
          db.executeSql(sqlHealthQuery, []).then((data1) => {
            for (let i = 0; i < data1.rows.length; i++) {
              let event_json:any = null;
              if (data1.rows.item(i).attribute_name_value != '') {
                  event_json = JSON.parse(data1.rows.item(i).attribute_name_value);
              }  
              healthData.push({ 
                  id: data1.rows.item(i).id, 
                  health_id: data1.rows.item(i).health_id, 
                  name: data1.rows.item(i).name, 
                  attribute_name_value: event_json, 
                  user_id: data1.rows.item(i).user_id, 
                  created_at: data1.rows.item(i).created_at, 
                  updated_at: data1.rows.item(i).updated_at 
              })  
            }
          })
          return { policies: healthData };
        })    
       }

      deleteUsersData(rowData){
        this.deleteCareGiver(rowData["id"]).subscribe((responseList)=>{ 
          console.log(responseList)
          let sql = `DELETE FROM users WHERE id = ?`;
          let createEventData = [rowData["id"]]
          this.commonUpdateAndDeleteEvent(sql,createEventData);
        })
      }

      deletePatientData(rowData){
        this.deletePatientFromCaregiver(rowData["id"]).subscribe((responseList)=>{ 
          console.log(responseList)
          let sql = `DELETE FROM users WHERE id = ?`;
          let createEventData = [rowData["id"]]
          this.commonUpdateAndDeleteEvent(sql,createEventData);
          let sql1 = `DELETE FROM events WHERE user_id = ?`;
          let createEventData1 = [rowData["id"]];
          this.commonUpdateAndDeleteEvent(sql1,createEventData1);
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

      public updateHealthData(data): Observable<any[]> {
        let response1 = this.http.post(`health_details`,data);
        return forkJoin([response1]); 
      }

      public updateUserAndHealthData(data): Observable<any[]> {
        let response1 = this.http.post(`health_details/about_update`,data);
        return forkJoin([response1]); 
      }

      async uploadImage(localfile,params,requestMethods){
        const fileTransfer: FileTransferObject = this.transfer.create();
    
        let data = params;
        

        let options: FileUploadOptions = {
        fileKey: 'event_assets',
        fileName: localfile["fileName"],
        mimeType: 'multipart/form-data',
        params:data,
        chunkedMode: false,
        headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        }
        let getUrl:any; 
        fileTransfer.upload(localfile["cdvFilePath"],environment.apiUrl+requestMethods,options).then(res=>{
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

      deleteEventImages(data){
        let response1 = this.http.post(`events/delete_image`,data);
        return forkJoin([response1]);
      }

      deleteCareGiver(id) {
        let response1 = this.http.get(`emergency_details/caregiver_delete?cg_id=`+id);
        return forkJoin([response1]); 
      }

      deletePatientFromCaregiver(id){
        let response1 = this.http.get(`users/patient_delete?patient_id=`+id);
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
