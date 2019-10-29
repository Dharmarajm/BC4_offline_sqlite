import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { SQL_TABLES } from './database.interface';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { from, Observable, forkJoin  } from 'rxjs';
//import { NetworkService } from '../network-connectivity/network-service';
import { syncProvider } from '../sync/sync'
import { async } from 'q';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const DATA_BASE_NAME = 'vCare4U.db';

enum user_type {
    "Emergency" = 1,
    "Doctor" = 2,
    "Care Giver" = 3
}

@Injectable({providedIn:'root'})
export class DatabaseProvider {
  
  database: SQLiteObject;
  ready: Promise<void>;
  isNetworkOnline:boolean;
  responseData1:any[];
  responseData2:any[];
  responseData3:any[];
  responseData4:any[]; 
  
    constructor(public http: HttpClient,public sqlite: SQLite, private platform: Platform,public syncProvide:syncProvider) {
        this.Oninit();   
    }

    Oninit(){
        console.log('Oninit')
        //console.log(user_type[3])
        this.ready = this.platform.ready()
            .then(() => this.initializeDatabase())
            .then(() => this.bootstrapTables())
    }

    initializeDatabase() {
        console.log('initialize')
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(async (db: SQLiteObject) => {
           let sqlTable1 = `CREATE TABLE IF NOT EXISTS emergency_details(id INTEGER,emergency_id INTEGER PRIMARY KEY AUTOINCREMENT,contact_name TEXT DEFAULT NULL,emergency_no TEXT DEFAULT NULL,user_type TEXT,user_id INTEGER,created_at DATETIME,updated_at DATETIME)`;
           await db.executeSql(sqlTable1, []);
           let sqlTable2 = `CREATE TABLE IF NOT EXISTS enum_masters(id INTEGER,name TEXT,category_name TEXT,created_at DATETIME,updated_at DATETIME)`;
           await db.executeSql(sqlTable2, []);
           
           let sqlTable4 = `CREATE TABLE IF NOT EXISTS health_details(id INTEGER,health_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,attribute_name_value TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME)`;
           await db.executeSql(sqlTable4, []);
           let sqlTable5 = `CREATE TABLE IF NOT EXISTS users(id INTEGER,name TEXT,email TEXT,password TEXT DEFAULT NULL,mobile_no TEXT DEFAULT NULL,address TEXT DEFAULT NULL,country TEXT DEFAULT NULL,blood_group TEXT DEFAULT NULL,age INTEGER DEFAULT NULL,user_uid TEXT,forgot_password_code TEXT DEFAULT NULL,user_picture TEXT DEFAULT NULL,active_status TEXT,role_id INTEGER,created_at DATETIME,updated_at DATETIME)`;  //userRecord_id INTEGER PRIMARY KEY AUTOINCREMENT
           await db.executeSql(sqlTable5, []);
           let sqlTable6 = `CREATE TABLE IF NOT EXISTS user_associations(id INTEGER,patient_id INTEGER,caregiver_id INTEGER,nick_name TEXT DEFAULT NULL,created_at DATETIME,updated_at DATETIME)`;
           await db.executeSql(sqlTable6, []);
           let sqlTable3 = `CREATE TABLE IF NOT EXISTS events(id INTEGER,event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name TEXT,description TEXT,value TEXT DEFAULT NULL,event_datetime INTEGER,event_type TEXT,event_category TEXT,event_assets TEXT DEFAULT NULL,event_options TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME,sync BOOLEAN)`;
           await db.executeSql(sqlTable3, [])
           .then(async() =>{
             let sqlTableIndex = `CREATE INDEX IF NOT EXISTS event_index on events(event_type, event_datetime, created_at)`;
             await db.executeSql(sqlTableIndex, []);  
           });

        })
    }

   async bootstrapTables(){
        console.log('bootstrap')
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            return db.executeSql(`SELECT * FROM enum_masters`, []).then(async (data) => {
            console.log('bootstrap1')
            //   if(data.rows.length==0){
            //    await this.getTotalEnumMasters(db);
            //   }
            //   let user_id = await this.getuserID();
            //   if(user_id!=undefined){
            //     await this.awaitAllUsersTableData(db);
            //   }
             await this.syncProvide.initiateSync();
            }) 
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

    async createAnEvent(data) {
        let user_id = await this.getuserID();
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            let sql = `INSERT INTO events VALUES (NULL,NULL,?,?,?,?,?,?,?,?,?,?,?,?)`;
            let createEventData = [data["event_name"],data["description"],data["value"],data["event_datetime"],data["event_type"],data["event_category"],data["event_assets"],JSON.stringify(data["event_options"]),user_id,new Date().toJSON(),new Date().toJSON(),false]
            return db.executeSql(sql,createEventData).then((row: any)=>{  
                return { event_id:row.insertId }
            }).catch(res=>{
                return res;
            });
        })
    }

    async updateAnEvent(id,data) {
        let user_id = await this.getuserID();
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            let sql = `UPDATE events SET id = ?, event_name = ?, description = ?, value = ?, event_datetime = ?, event_type = ?, event_category = ?, event_assets = ?, event_options = ?, user_id = ?, created_at = ?, updated_at = ?, sync = ? WHERE event_id = ?`;
            let updateEventData = [data["id"],data["event_name"],data["description"],data["value"],data["event_datetime"],data["event_type"],data["event_category"],data["event_assets"],JSON.stringify(data["event_options"]),user_id,data["created_at"],new Date().toJSON(),false,id]
            
            return db.executeSql(sql,updateEventData).then((row: any)=>{
                return { event_id:row.insertId }
            }).catch(res=>{
                return res;
            })
        })
    }

    async updateAnEventImage(id,data) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            let sql = `UPDATE events SET event_options = ? WHERE event_id = ?`;
            let updateEventImageData = [JSON.stringify(data["event_options"]),id]
            
            return db.executeSql(sql,updateEventImageData).then((row: any)=>{
                return { event_id:row.insertId }
            }).catch(res=>{
                return res;
            })
        })
    }

    deleteAnEvent(id){
       return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => { 
          let sql = `DELETE FROM events WHERE event_id = ?`;
          return db.executeSql(sql,[id]).then((row: any)=>{
            return { event_id:row.insertId }
         }).catch(res=>{
            return res;
         });
        })
    }

    async updateUserAndPolicyData(data){
      let user_id = await this.getuserID();
      let user_data = data['user'];
      let policy_data = data['policy'];
      policy_data["name"]="policy";
      return this.sqlite.create({
        name: DATA_BASE_NAME,
        location: 'default'
      }).then(async(db: SQLiteObject) => {
           
         let sql = `UPDATE users SET age = ?, blood_group = ? WHERE id = ? AND role_id = ?`;
         let updateUserData = [user_data['age'],user_data['blood_group'],user_id,1];
         await db.executeSql(sql,updateUserData);
         db.executeSql(`SELECT * FROM health_details WHERE name='${policy_data['name']}'`).then(async(data)=>{
           if(data.rows.length>0){
             let id = data.rows.item(0).health_id;
             this.updateHealthData(policy_data,id);
           }else{
             this.updateHealthData(policy_data);
           } 
         })
      })     
    }

    async createEmergencyContacts(data) {
        let user_id = await this.getuserID();
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            let sql = `INSERT INTO emergency_details VALUES (NULL,NULL,?,?,?,?,?,?)`;
            let createEventData = [data["contact_name"],data["emergency_no"],user_type[data["user_type"]],user_id,new Date().toJSON(),new Date().toJSON()]
            return db.executeSql(sql,createEventData).then((row: any)=>{  
                return { event_id:row.insertId }
            }).catch(res=>{
                return res;
            });
        })
    }

    deleteEmergencyContact(id){
       return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => { 
          let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
          return db.executeSql(sql,[id]).then((row: any)=>{
            return { event_id:row.insertId }
         }).catch(res=>{
            return res;
         });
        })
    }

    async updateHealthData(data?,id?) {
        let user_id = await this.getuserID();
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => {
            return db.executeSql(`SELECT * FROM health_details WHERE name='${data['name']}'`).then(async(data)=>{
              let sqlQuery:any;
              let healthData:any;

              if(data.rows.length>0){
                sqlQuery = `UPDATE health_details SET id = ?, name = ?, attribute_name_value = ?, user_id = ?, created_at = ?, updated_at = ? WHERE health_id = ?`;
                healthData = [data["id"],data["name"],JSON.stringify(data["attribute_name_value"]),user_id,data["created_at"],new Date().toJSON(),id]    
              }else{
                sqlQuery = `INSERT INTO health_details VALUES (NULL,NULL,?,?,?,?,?)`;
                healthData = [data["name"],JSON.stringify(data["attribute_name_value"]),user_id,new Date().toJSON(),new Date().toJSON()];
              }
              
              return db.executeSql(sqlQuery,healthData).then((row: any)=>{
                    return { event_id:row.insertId }
              }).catch(res=>{
                    return res;
              })
            }).catch(res=>{
                return res;
            })
        })
    }

    deleteDataFromTable(){
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db: SQLiteObject) => { 
           for(let i in SQL_TABLES){
            let sql = `DELETE FROM ${SQL_TABLES[i]}`;
            db.executeSql(sql,[]);
           } 
          
        })
    }

    getuserID(){
        let user_id:any=null;
        if(localStorage.getItem("user_id")!=undefined){
            user_id=localStorage.getItem("user_id");
            return user_id;
        }
        
        return user_id
    }

}