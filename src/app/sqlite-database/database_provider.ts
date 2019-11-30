import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQL_SELECT_ALL_CREDENTIALS, Setting, SQL_SELECT_ALL_EVENTS, events, SQL_SELECT_ALL_ENUMS, enum_masters, SQL_SELECT_ALL_HEALTH_DETAILS, SQL_SELECT_ALL_USERS,SQL_SELECT_ALL_EMERGENCY_DATA  } from './database.interface'
import { of,from } from 'rxjs';
import { concatMap, groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { DatabaseProvider } from './database';
/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataBaseSummaryProvider {

  constructor(public http: HttpClient,private databaseService: DatabaseProvider) {
    console.log('Hello SettingProvider Provider');
  }

    getAll(): Promise<Setting[]> {
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(SQL_SELECT_ALL_CREDENTIALS, []).then((data) => {
                let settings: Setting[] = [];
                for (let i = 0; i < data.rows.length; i++) {
                    settings.push({
                        id: data.rows.item(i).id,
                        email: data.rows.item(i).email,
                        password: data.rows.item(i).password
                    });
                };
                return settings;
            });
        });
    }

    async getAllEvents(event_type,tab,offset): Promise<any> {
        let checkEvent = await this.checkEventType(event_type,tab,offset);
        let sqlEventQuery = SQL_SELECT_ALL_EVENTS+checkEvent;
        
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id:data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id:data.rows.item(i).user_id,
                        delete1:data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count:data.rows.length,event_list:events};
            })
        })
    }

    async getAllEventsSearchList(event_type,search,additionType,offset): Promise<any> {
        let checkEvent = await this.checkEventTypeSearch(event_type,search,additionType,offset);
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+checkEvent;
        
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id: data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id: data.rows.item(i).user_id,
                        delete1: data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count:data.rows.length,event_list:events };
            })
        })
    }

    async filterVitalHistory(event_type,event_name,from_date,end_date,vital_page_offset): Promise<any> {
        let checkEvent = await this.checkEventType(event_type,'pagefilter',vital_page_offset,from_date,end_date,null,event_name);
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+checkEvent;

        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id:data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id:data.rows.item(i).user_id,
                        delete1:data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count:data.rows.length,events:events};
            })
        })        

    }

    async getVitalEvents(id,from_date,end_date,event_type,analytics?,event_name?): Promise<any> {
        let checkEvent = await this.checkEventType(event_type,'filter',0,from_date,end_date,analytics,event_name);
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+checkEvent;

        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id:data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id:data.rows.item(i).user_id,
                        delete1:data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count:data.rows.length,event_list:events};
            })
        })        

    }



    filterVitalEventNameList(id,from_date,end,type){
        return this.getVitalEvents(id,from_date,end,type).then(response => {
          let data = response['event_list'];
          
            let value = [];
            const example = from(data).pipe(
            groupBy(person =>  person['event_name']),
            mergeMap(group => from(group).pipe(toArray()))
            ).subscribe(val => {
                console.log(val)
                if(val){
                 value.push(val[0]['event_name']); 
                }  
             
            })

            return { events : value }

        })
    }


    async expenseCalculation(){
        let user_id = await this.databaseService.getuserID();
        let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE (id='${user_id}'`
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlUserQuery, []).then(async (data) => {
                
                let getUserData = await this.currentUserData(data);
                let joinMonth =  getUserData[0].created_at || null;
                let currentDate = new Date();
                var y = currentDate.getFullYear();
                var m = currentDate.getMonth();
                let first_month = new Date(y, 0, 31);
                let currentMonth = new Date(y, m, 1);
                let first_day = new Date(y, 0, 1);
                var fy = first_day.getFullYear();
                var fm = first_day.getMonth();
                let no_of_months = ( y * 12 + m) - ( fy * 12 + fm)
                if(joinMonth!=null && joinMonth <= first_month){
                let sqlCurrentMonthExpQuery =  `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${currentMonth.toJSON()}') AND DATE('${currentDate.toJSON()}')))`
                let getResponseOfMonthExp = await this.expenseCalculateValue(sqlCurrentMonthExpQuery);
                console.log(getResponseOfMonthExp)
                for(var i in getResponseOfMonthExp.rows.length){
                    console.log(getResponseOfMonthExp.rows.item(i))
                }
                let sqlCurrentYearExpQuery = `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${first_day.toJSON()}') AND DATE('${currentDate.toJSON()}')))`
                let getResponseOfYearExp = await this.expenseCalculateValue(sqlCurrentYearExpQuery);
                console.log(getResponseOfYearExp)

                for(var i in getResponseOfYearExp.rows.length){
                    console.log(getResponseOfYearExp.rows.item(i))
                }
                }

                
                return { CurrentMonth : "", Yearly: "", status: "" };
            })
            
        })
        
    }

    async expenseCalculateValue(query){
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(query, []).then((data) => {
              return data;
            }).catch(e=>{console.log(e)})
        })        
    }

    async expense_cals_chart(){
      let getAllEventsData = await this.getAllExpenses();
      let data = getAllEventsData['event_list'];
      
      let value = [];
      const example = from(data).pipe(
      groupBy(person =>  person['event_name']),
      mergeMap(group => from(group).pipe(toArray()))
      ).subscribe(val => {
        console.log(val)
      })

      return { Currentmonth : '', Totalyear: '', Year: '' };
    }

    async getAllExpenses(){
        let user_id = await this.databaseService.getuserID();
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+` WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}')`
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id:data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id:data.rows.item(i).user_id,
                        delete1:data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count:data.rows.length,event_list:events};
            })
        })        
    }



    async currentUserData(data){
        let events: events[] = [];
        for (let i = 0; i < data.rows.length; i++) { 
                let event_json:any = null;
                let eventAssetsJson:any = null;
                if (data.rows.item(i).event_options != null) {
                    event_json = JSON.parse(data.rows.item(i).event_options);
                }
                if (data.rows.item(i).event_assets != null) {
                    eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                }
            events.push({
                id: data.rows.item(i).id,
                event_id:data.rows.item(i).event_id,
                event_name: data.rows.item(i).event_name,
                description: data.rows.item(i).description,
                value: data.rows.item(i).value,
                event_datetime: data.rows.item(i).event_datetime,
                event_type: data.rows.item(i).event_type,
                event_category: data.rows.item(i).event_category,
                event_assets: eventAssetsJson,
                event_options: event_json,
                user_id:data.rows.item(i).user_id,
                delete1:data.rows.item(i).delete1,
                created_at: data.rows.item(i).created_at,
                updated_at: data.rows.item(i).updated_at
            });
        }
     
     return events;
    }

    expenseDatefilter(id,from_date,end,type){
        return this.getVitalEvents(id,from_date,end,type,'expense').then(response => {
            let data = response['event_list'];

            let value = [];
            const example = from(data).pipe(
            groupBy(person =>  person['event_name']),
            mergeMap(group => from(group).pipe(toArray()))
            ).subscribe(val => {
                console.log(val)
                if(val){
                 value.push(val[0]['event_name']); 
                }  
             
            })

            return { events : value }
        })    
    }

    ExpenseViewSummary(from_date,end,type,event_name?,analytics?){
        return this.getVitalEvents('1',from_date,end,type,analytics,event_name).then(response => {
            let data = response['event_list'];
            let fromDate =  formatDate(from_date, 'yyyy-MM-dd', 'en-US');
            let end_date =  formatDate(end, 'yyyy-MM-dd', 'en-US');
            let value = [];
            let vital = {}
            const example = from(data).pipe(
            groupBy(person =>  person['event_name']),
            mergeMap(group => from(group).pipe(toArray()))
            ).subscribe(val => {
                console.log(val)
                vital[`${val[0]['event_name']}`]=val;
            })

            return { from_date : fromDate ,end_date: end_date, expense:  vital} 
        })
    }

    vitalFilterAnalytics(id,data){
        let params = data;
        return this.getVitalEvents(id,params['from_date'],params['end_date'],'vital','analytics',params['event_name']).then(response => {
            let data = response['event_list'];
            
            let value = {}
            const example = from(data).pipe(
                groupBy(person =>  person['event_name']),  //,person =>  person.event_category
                mergeMap(group => group.pipe(toArray())),
                mergeMap((array) => {// Take each from above array and group each array by manDate
                  return from(array).pipe(groupBy(
                    val => formatDate(val['event_datetime'], 'yyyy-MM-dd', 'en-US'),
                    ),
                    mergeMap(group => {
                      return group.pipe(toArray()); // return the group values as Arrays
                    })
                  );
                }),
                mergeMap((array) => {// Take each from above array and group each array by manDate
                  return from(array).pipe(groupBy(
                    val => val['event_category'],
                    ),
                    mergeMap(group => {
                      return group.pipe(toArray()); // return the group values as Arrays
                    })
                  );
                }),map((val) => {  //For each array returned , calculate the sum and map it to the Object you wanted
                 
                  return { event_name: val[0]['event_name'], date: val[0]['event_datetime'], event_category: val[0]['event_category'], data:val }
                })
              ).subscribe(val => {
               
               console.log(val,"test")
                 let event_name = `${val['event_name']}`;
                 let date = formatDate(val.date, 'yyyy-MM-dd', 'en-US');
                 let event_category = val.event_category;
                
                 value[`${event_name}`][`${date}`][`${event_category}`] = val['data'];
              })
  
              return value;
  
          })
    }

    async checkEventType(event,tab,offset,from_date?,end_date?,analytics?,event_name?) {
        console.log(from_date,end_date)
        let startDate = from_date.toJSON() || null;
        let endDate = end_date.toJSON() || null;
        let eventQuery:any;
        let event_nameArray = null;
        if(event_name!=null && event_name.length>0){
            event_nameArray = event_name.toString();
        }
        
        let user_id = await this.databaseService.getuserID();
        //let nowDate = new Date().toJSON()
        if(event=='appointment' && tab=='New'){
            return eventQuery= ` WHERE (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`      
        }else if(event=='appointment' && tab=='history'){
            return eventQuery= ` WHERE (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`
        }else if(event=='health_diary' || event=='doc_visit'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`
        }else if(event=='vital' && tab == 'New'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'filter' && analytics != 'analytics'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'filter' && analytics == 'analytics' && event_name.length!=0){
            return eventQuery= ` WHERE (event_name IN ('${event_nameArray}') AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'filter' && analytics == 'analytics' && event_name.length==0){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'pagefilter'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`
        }else if(event=='expense' && analytics == 'expense'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_summary'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_analytics' && event_name.length!=0){
            return eventQuery= ` WHERE (event_name IN ('${event_nameArray}') AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_analytics' && event_name.length==0){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else{
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`
        }
        
    }

    async checkEventTypeSearch(event,search,type,offset) {
        let eventSearchQuery:any;
        //let nowDate = new Date().toJSON()
        let user_id = await this.databaseService.getuserID();
        if(event=='appointment' && type=='New'){
            
            return eventSearchQuery= ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`
            
        }else if(event=='appointment' && type=='history'){
            
            return eventSearchQuery= ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`
        }else if(event=='health_diary' || event=='doc_visit'){
            return eventSearchQuery= ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`
        }else{
            return eventSearchQuery= ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`
        }
        
    }

    getEnumMasters(name): Promise<any> {
        let sqlEnumQuery = SQL_SELECT_ALL_ENUMS+` WHERE category_name='${name}'`;
        
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlEnumQuery, []).then((data) => {
                
                let Enums = [];
               
                for (let i = 0; i < data.rows.length; i++) {
                    Enums.push(data.rows.item(i).name);
                };
                
                return { count: data.rows.length, enum_masters: Enums };
            })
        })
    }

    async diaryRecordFilter(data): Promise<any> {
        let user_id = await this.databaseService.getuserID();
      let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+` WHERE (created_at BETWEEN DATE('${data["from_date"]}') AND DATE('${data["end_date"]}','+1 DAY')) AND (event_type='${data["event_type"]}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET 0`;
        
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                let eventAssetsJson:any = null;

                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }

                    events.push({
                        id: data.rows.item(i).id,
                        event_id: data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id: data.rows.item(i).user_id,
                        delete1: data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { count: data.rows.length, event_list: events };
            })
        })     
    }

    async getAboutData(): Promise<any> {
        let user_id = await this.databaseService.getuserID(); 
        let getQRcode = await this.setQRcode();
        let sqlHealthQuery = SQL_SELECT_ALL_HEALTH_DETAILS+` WHERE name='policy'`;
        let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE (id='${user_id}' AND role_id=1)`; //(id='${user_id}' AND role_id=1)
        return this.databaseService.getDatabase().then(async (database) => {
            
            let healthData=[];
            let userData=[];

            await database.executeSql(sqlHealthQuery, []).then((data1) => {
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
            }).catch(res=>{
                console.log(res)
            })
           
            await database.executeSql(sqlUserQuery, []).then((data2) => {
              console.log(data2.rows)
              for (let i = 0; i < data2.rows.length; i++) {
                  console.log(data2.rows.item(i))
                let attribute_json:any = null;                    
                if(data2.rows.item(i).user_picture!=null){
                  attribute_json = JSON.parse(data2.rows.item(i).user_picture);    
                }  
                  
                userData.push({ 
                    id: data2.rows.item(i).id,
                    name: data2.rows.item(i).name,
                    email: data2.rows.item(i).email,
                    password: data2.rows.item(i).password,
                    mobile_no: data2.rows.item(i).mobile_no,
                    address: data2.rows.item(i).address,
                    country: data2.rows.item(i).country,
                    blood_group: data2.rows.item(i).blood_group,
                    age: data2.rows.item(i).age,
                    user_uid: data2.rows.item(i).user_uid,
                    forgot_password_code: data2.rows.item(i).forgot_password_code,
                    user_picture: attribute_json,
                    active_status: data2.rows.item(i).active_status,
                    role_id: data2.rows.item(i).role_id,
                    created_at: data2.rows.item(i).created_at,
                    updated_at: data2.rows.item(i).updated_at,
                    delete1: data2.rows.item(i).delete1
                })  
              }
            }).catch(res=>{
                console.log(res)
            })

            return { policies: healthData, user_info: userData[0], qrcode_image: getQRcode };

        })
    }

    async getHealthDeatails(): Promise<any> {
       //let user_id = await this.databaseService.getuserID(); 
       let sqlHealthQuery = SQL_SELECT_ALL_HEALTH_DETAILS+` WHERE name='health'`;
       return this.databaseService.getDatabase().then((database) => {
         return database.executeSql(sqlHealthQuery, []).then((data) => {
            let healthData=[];
            for (let i = 0; i < data.rows.length; i++) {
                let event_json:any = null;
                if (data.rows.item(i).attribute_name_value != '') {
                    event_json = JSON.parse(data.rows.item(i).attribute_name_value);
                }  
                healthData.push({ 
                    id: data.rows.item(i).id, 
                    health_id: data.rows.item(i).health_id, 
                    name: data.rows.item(i).name, 
                    attribute_name_value: event_json, 
                    user_id: data.rows.item(i).user_id, 
                    created_at: data.rows.item(i).created_at, 
                    updated_at: data.rows.item(i).updated_at 
                })  
            }

            return { health_detail: healthData };
         }).catch(res=>{
            console.log(res)
        })  
       })
    }

    getEmergencyDeatails(): Promise<any> {
       let sqlEmergeQuery = SQL_SELECT_ALL_EMERGENCY_DATA;
       let sqlUsersQuery = SQL_SELECT_ALL_USERS+` WHERE (role_id=1 AND delete1='false')`;
       console.log(sqlUsersQuery)
       return this.databaseService.getDatabase().then(async (database) => {
        let emergencyContacts = []; 
        let careGiverData=[];
        await database.executeSql(sqlEmergeQuery, []).then((data) => {
            for (let i = 0; i < data.rows.length; i++) {
                emergencyContacts.push({
                id: data.rows.item(i).id,
                emergency_id: data.rows.item(i).emergency_id,
                contact_name: data.rows.item(i).contact_name,
                emergency_no: data.rows.item(i).emergency_no,
                user_type: data.rows.item(i).user_type,
                user_id: data.rows.item(i).user_id,
                created_at: data.rows.item(i).created_at,
                updated_at: data.rows.item(i).updated_at,
                delete1: data.rows.item(i).delete1
                });
            } 
         })
         await database.executeSql(sqlUsersQuery, []).then((data1) => {
            for (let i = 0; i < data1.rows.length; i++) {
              if(data1.rows.item(i).email!=null){ 
                let attribute_json:any = null;
                let user_option_json:any = null;                    
                if(data1.rows.item(i).user_picture!=null){
                  attribute_json = JSON.parse(data1.rows.item(i).user_picture);  
                }
                if(data1.rows.item(i).user_option!=null){
                    user_option_json = JSON.parse(data1.rows.item(i).user_option);  
                  }
                careGiverData.push({
                    id: data1.rows.item(i).id,
                    name: data1.rows.item(i).name,
                    email: data1.rows.item(i).email,
                    password: data1.rows.item(i).password,
                    mobile_no: data1.rows.item(i).mobile_no,
                    address: data1.rows.item(i).address,
                    country: data1.rows.item(i).country,
                    blood_group: data1.rows.item(i).blood_group,
                    age: data1.rows.item(i).age,
                    user_uid: data1.rows.item(i).user_uid,
                    forgot_password_code: data1.rows.item(i).forgot_password_code,
                    user_picture: attribute_json,
                    user_option : user_option_json,
                    active_status: data1.rows.item(i).active_status,
                    role_id: data1.rows.item(i).role_id,
                    created_at: data1.rows.item(i).created_at,
                    updated_at: data1.rows.item(i).updated_at,
                    delete1: data1.rows.item(i).delete1
                });
              } 
            } 
         })
         
         return { caregiver_count: careGiverData.length ,caregivers: careGiverData,emergency_contact_count: emergencyContacts.length,emergency_detail: emergencyContacts };  
       }).catch(res=>{
        console.log(res)
       })
    }

    async getAllUserPreviewData(){
       let healthDetailData:any;
       let policyDetail:any; 
       let emergency_data = await this.getEmergencyDeatails();
       let aboutData = await this.getAboutData();
       let healthData = await this.getHealthDeatails();
       
       if(healthData['health_detail'].length>0){
          healthDetailData = healthData['health_detail'][0];  
       }else{
          healthDetailData=null
       }
       if(aboutData['policies'].length>0){
          policyDetail = aboutData['policies'][0]
       }else{
          policyDetail = null; 
       }  
       return { caregiver_contact: emergency_data['caregivers'], contacts: emergency_data['emergency_detail'], health_detail: healthDetailData, policy_details: policyDetail,user: aboutData['user_info']}

    }

    async getPatients(){
        let user_id = await this.databaseService.getuserID();
        let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE (id='${user_id}' AND role_id=1)`;
        return this.databaseService.getDatabase().then(async (database) => {
          let userData=[];   
          await database.executeSql(sqlUserQuery, []).then((data2) => {
            for (let i = 0; i < data2.rows.length; i++) {
              
                let attribute_json:any = null;      
                let user_option_json:any = null;              
                if(data2.rows.item(i).user_picture!=null){
                  attribute_json = JSON.parse(data2.rows.item(i).user_picture); 
                } 
                if(data2.rows.item(i).user_option!=null){
                    user_option_json = JSON.parse(data2.rows.item(i).user_option);  
                } 
              userData.push({ 
                  id: data2.rows.item(i).id,
                  name: data2.rows.item(i).name,
                  email: data2.rows.item(i).email,
                  password: data2.rows.item(i).password,
                  mobile_no: data2.rows.item(i).mobile_no,
                  address: data2.rows.item(i).address,
                  country: data2.rows.item(i).country,
                  blood_group: data2.rows.item(i).blood_group,
                  age: data2.rows.item(i).age,
                  user_uid: data2.rows.item(i).user_uid,
                  forgot_password_code: data2.rows.item(i).forgot_password_code,
                  user_picture: attribute_json,
                  user_option : user_option_json,
                  active_status: data2.rows.item(i).active_status,
                  role_id: data2.rows.item(i).role_id,
                  created_at: data2.rows.item(i).created_at,
                  updated_at: data2.rows.item(i).updated_at,
                  delete1: data2.rows.item(i).delete1
              })  
            }
          }).catch(res=>{
            console.log(res)
          })
          return { patients: userData };
        }).catch(res=>{
            console.log(res)
        })  
    }

    async getAllPatients(){
        let user_id = await this.databaseService.getuserID();
        let sqlUsersQuery = SQL_SELECT_ALL_USERS+` WHERE (role_id=1 AND delete1='false')`;
        //let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE id=${user_id} AND role_id=1`;
        return this.databaseService.getDatabase().then(async (database) => {
          let userData=[];   
          await database.executeSql(sqlUsersQuery, []).then((data2) => {
            for (let i = 0; i < data2.rows.length; i++) {
             if(data2.rows.item(i).email!=null){                
             
                let attribute_json:any = null;                    
                let user_option_json:any = null;              
                if(data2.rows.item(i).user_picture!=null){
                  attribute_json = JSON.parse(data2.rows.item(i).user_picture); 
                } 
                if(data2.rows.item(i).user_option!=null){
                    user_option_json = JSON.parse(data2.rows.item(i).user_option);  
                }
              userData.push({ 
                  id: data2.rows.item(i).id,
                  name: data2.rows.item(i).name,
                  email: data2.rows.item(i).email,
                  password: data2.rows.item(i).password,
                  mobile_no: data2.rows.item(i).mobile_no,
                  address: data2.rows.item(i).address,
                  country: data2.rows.item(i).country,
                  blood_group: data2.rows.item(i).blood_group,
                  age: data2.rows.item(i).age,
                  user_uid: data2.rows.item(i).user_uid,
                  forgot_password_code: data2.rows.item(i).forgot_password_code,
                  user_picture: attribute_json,
                  user_option: user_option_json,
                  active_status: data2.rows.item(i).active_status,
                  role_id: data2.rows.item(i).role_id,
                  created_at: data2.rows.item(i).created_at,
                  updated_at: data2.rows.item(i).updated_at,
                  delete1: data2.rows.item(i).delete1
              })
             }   
            }
          })
          return { patients: userData };
        })   
    }

    async getPicture_Show(){
       
        let emergency_data = await this.getEmergencyDeatails();
        let aboutData = await this.getAboutData();
        let getAllPatients = await this.getPatients();

        return { caregiver: emergency_data['caregivers'],patient: getAllPatients['patients'],profile_pic: null,user_info: aboutData['user_info'] };
 
    }

    async getCaregiverData() {
        let user_data = await this.getProfileID();
        let sqlUsersQuery = SQL_SELECT_ALL_USERS+` WHERE (role_id=2 AND delete1='false')`;
        return this.databaseService.getDatabase().then(async (database) => {
            let userData=[];   
            await database.executeSql(sqlUsersQuery, []).then((data2) => {
                for (let i = 0; i < data2.rows.length; i++) {
                    if(data2.rows.item(i).email!=null){                
                        
                        let attribute_json:any = null;                    
                        let user_option_json:any = null;              
                        if(data2.rows.item(i).user_picture!=null){
                        attribute_json = JSON.parse(data2.rows.item(i).user_picture); 
                        } 
                        if(data2.rows.item(i).user_option!=null){
                            user_option_json = JSON.parse(data2.rows.item(i).user_option);  
                        }
                        userData.push({ 
                            id: data2.rows.item(i).id,
                            name: data2.rows.item(i).name,
                            email: data2.rows.item(i).email,
                            password: data2.rows.item(i).password,
                            mobile_no: data2.rows.item(i).mobile_no,
                            address: data2.rows.item(i).address,
                            country: data2.rows.item(i).country,
                            blood_group: data2.rows.item(i).blood_group,
                            age: data2.rows.item(i).age,
                            user_uid: data2.rows.item(i).user_uid,
                            forgot_password_code: data2.rows.item(i).forgot_password_code,
                            user_picture: attribute_json,
                            user_option : user_option_json,
                            active_status: data2.rows.item(i).active_status,
                            role_id: data2.rows.item(i).role_id,
                            created_at: data2.rows.item(i).created_at,
                            updated_at: data2.rows.item(i).updated_at,
                            delete1: data2.rows.item(i).delete1
                        })
                    }   
                }
            })
            return { user_info: userData[0] };
        })
    }


    async getCurrentUserandPatientsList(){
        let current_user = await this.getCaregiverData();
        let patients_list = await this.getAllPatients();

        return { user_info: current_user['user_info'] , patient: patients_list['patients'] }
    }

    async getRecentAppointments(event){
        let user_id = await this.databaseService.getuserID(); 
        let eventQuery= ` WHERE (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 4 OFFSET 0`      
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+eventQuery;
        
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events: events[] = [];
                
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json:any = null;
                    let eventAssetsJson:any = null;
                    if (data.rows.item(i).event_options != null) {
                        event_json = JSON.parse(data.rows.item(i).event_options);
                    }
                    if (data.rows.item(i).event_assets != null) {
                        eventAssetsJson = JSON.parse(data.rows.item(i).event_assets);
                    }
                    events.push({
                        id: data.rows.item(i).id,
                        event_id: data.rows.item(i).event_id,
                        event_name: data.rows.item(i).event_name,
                        description: data.rows.item(i).description,
                        value: data.rows.item(i).value,
                        event_datetime: data.rows.item(i).event_datetime,
                        event_type: data.rows.item(i).event_type,
                        event_category: data.rows.item(i).event_category,
                        event_assets: eventAssetsJson,
                        event_options: event_json,
                        user_id: data.rows.item(i).user_id,
                        delete1: data.rows.item(i).delete1,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });  
                };
                return { appointment_list:events };
            })
        })
    }

    setQRcode(){
        let setQRcode = null;
        if(localStorage.getItem("qrcode")!=undefined){
            setQRcode = localStorage.getItem("qrcode");
        }
        return setQRcode;
    }

    getProfileID(){
        let profile_id:any=null;
        if(localStorage.getItem("profile_id")!=undefined){
            profile_id=localStorage.getItem("profile_id");
            return profile_id;
        }
        
        return profile_id
    }
}
