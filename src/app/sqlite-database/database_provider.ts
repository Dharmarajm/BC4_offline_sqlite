import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQL_SELECT_ALL_CREDENTIALS, Setting, SQL_SELECT_ALL_EVENTS, events, SQL_SELECT_ALL_ENUMS, enum_masters, SQL_SELECT_ALL_HEALTH_DETAILS, SQL_SELECT_ALL_USERS,SQL_SELECT_ALL_EMERGENCY_DATA  } from './database.interface'
import { of,from ,zip } from 'rxjs';

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
        console.log(checkEvent);
        let sqlEventQuery = SQL_SELECT_ALL_EVENTS+checkEvent;
        console.log(sqlEventQuery)
        
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
                console.log(data.rows.length,events)
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
               
                if(val){
                 value.push(val[0]['event_name']); 
                }  
             
            })

            return { events : value }

        })
    }


    async expenseCalculation(){
        let user_id = await this.databaseService.getuserID();
        let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE id='${user_id}'`
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlUserQuery, []).then(async (data) => {
                
                let getUserData = data.rows.item(0);
                let joinMonth =  getUserData.created_at || null;
                
                let currentDate = new Date();
                
                var y = currentDate.getFullYear();
                var m = currentDate.getMonth();
                let lastDate = currentDate;
                lastDate.setDate(lastDate.getDate() + 1);
                let getfirst_month = new Date(y, 0, 31);
                let setfirst_month = getfirst_month.toJSON();
                let currentMonth = new Date(y, m, 1);
                let first_day = new Date(y, 0, 1);
                var fy = first_day.getFullYear();
                var fm = first_day.getMonth();
                let no_of_months = ( y * 12 + m) - ( fy * 12 + fm)

                let CurrentMonthStart = currentMonth.toJSON();
                
                let CurrentMonthEnd = lastDate.toJSON();
                 
                let sqlCurrentMonthExpQuery =  `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${CurrentMonthStart}') AND DATE('${CurrentMonthEnd}')))`
                
                let getResponseOfMonthExp = await this.expenseCalculateValue(sqlCurrentMonthExpQuery);
                
                let CurrentMonthExpense = getResponseOfMonthExp.rows.item(0)['SUM(value)']
                
                let firstDayOfYear = first_day.toJSON();
               
                let lastDayofYear = lastDate.toJSON();
                
                let sqlCurrentYearExpQuery = `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${firstDayOfYear}') AND DATE('${lastDayofYear}')))`
               
                let getResponseOfYearExp = await this.expenseCalculateValue(sqlCurrentYearExpQuery);
                let CurrentYearExpense = getResponseOfYearExp.rows.item(0)['SUM(value)']
                if(joinMonth!=null && joinMonth <= setfirst_month){
                    
                    let projectionM = (CurrentYearExpense / no_of_months)
                    let MonthlyProjection = projectionM.toFixed(2);
                    let projectionY = (projectionM * 12)
                    let yearlyProjection = projectionY.toFixed(2);

                    return { CurrentMonth : CurrentMonthExpense, Yearly: CurrentYearExpense, status: true , MonthProjection: MonthlyProjection,YearlyProjection: yearlyProjection};
                }else{
                 
                    return { CurrentMonth : CurrentMonthExpense, Yearly: CurrentYearExpense, status: false };   
                }

                
                
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
      let currentDate = new Date();
      var y = currentDate.getFullYear();
      let first_day = new Date(y, 0, 1);
      let last_day = currentDate;
      var m = currentDate.getMonth();
      let currentMonth = new Date(y, m, 1);
      let getAllYearData = await this.getAllExpenses(first_day,last_day);
      let yearData = getAllYearData['event_list'];
      
      let getAllCurrentData = await this.getAllExpenses(currentMonth,last_day);
      let MonthData = getAllCurrentData['event_list'];
      
     let array = [];
     let dateobject = {};
     await from(MonthData).pipe(
     groupBy(person => formatDate(person['event_datetime'], 'yyyy-MM-dd', 'en-US')),
     mergeMap(group => zip(of(group.key),group.pipe(toArray()))),
     map(val => {
    
        let total = val[1].reduce( ( accumulator, sample ) => { // reduce the stream
            return accumulator + Number(sample['value']);
        }, 0);
        return {event_datetime:val[0],data:val[1],value :total};
     }),
     toArray()
     ).subscribe(res=>{
        
            array = res;
            
            
            for(var i in array){
            
                let data = array[i]['data']
                let allArray = [];
                const arrayreduce = Array.from(new Set(array[i]['data'].map(s=>s.event_name))).map((name,index)=>{
                    
                    let total = array[i]['data'].reduce((accumulator,data1) => {
                    
                    if(data1.event_name == name && accumulator !=undefined && accumulator !=null){
                        return accumulator + Number(data1['value'])
                    }else{
                        return accumulator;
                    }
                    },0)
                    
                
                    allArray.push([name,total])
                    
                    
                })
                
                if(dateobject[array[i]['event_datetime']]==undefined){
                    dateobject[array[i]['event_datetime']]=[]; 
                    dateobject[array[i]['event_datetime']].push({data: allArray, event_datetime:array[i]['event_datetime'], value:array[i]['value'] });
                }else{
                    dateobject[array[i]['event_datetime']].push({data: allArray, event_datetime:array[i]['event_datetime'], value:array[i]['value'] });
                }
            }

    });
   
    let array1 = [];
    let yearObject = {};

    await from(yearData).pipe(
        groupBy(person => formatDate(person['event_datetime'], 'MMMM', 'en-US')),
        mergeMap(group => zip(of(group.key),group.pipe(toArray()))),
        map(val => {
       
           let total = val[1].reduce( ( accumulator, sample ) => { // reduce the stream
               return accumulator + Number(sample['value']);
           }, 0);
           return {event_datetime:val[0],data:val[1],value :total};
        }),
        toArray()
        ).subscribe(res=>{
           
            array1 = res;
               
               
               for(var i in array1){
               
                   let data = array1[i]['data']
                   let allArray = [];
                   const arrayreduce = Array.from(new Set(array1[i]['data'].map(s=>s.event_name))).map((name,index)=>{
                       
                       let total = array1[i]['data'].reduce((accumulator,data1) => {
                      
                       if(data1.event_name == name && accumulator !=undefined && accumulator !=null){
                           return accumulator + Number(data1['value'])
                       }else{
                           return accumulator;
                       }
                       },0)
                       
                   
                       allArray.push([name,total])
                       
                       
                   })
                   if(yearObject[array1[i]['event_datetime']]==undefined){
                     yearObject[array1[i]['event_datetime']]=[];
                     yearObject[array1[i]['event_datetime']].push({data: allArray, event_datetime:array1[i]['event_datetime'],value:array1[i]['value']})
                   }else{
                     yearObject[array1[i]['event_datetime']].push({data: allArray, event_datetime:array1[i]['event_datetime'],value:array1[i]['value']})
                   }
                   
               
               }

   
       });
    //   let value = [];
    //   const example = from(data).pipe(
    //   groupBy(person =>  person['event_name']),
    //   mergeMap(group => from(group).pipe(toArray()))
    //   ).subscribe(val => {
    //     console.log(val)
    //   })
        let totalValue = await yearData.reduce((accum,hash)=>{
            return accum + Number(hash['value'])
        },0)
      let total_year = [{ year:y,value: totalValue}]
      return { Currentmonth : dateobject, Totalyear: total_year, Year: yearObject };
    }

    async getAllExpenses(first_day,last_day){
        let user_id = await this.databaseService.getuserID();
        let startDay = formatDate(first_day, 'yyyy-MM-dd', 'en-US');
        let lastDay = last_day.toString();
        let endDay = new Date(lastDay);
        endDay.setDate(endDay.getDate() + 1);
        let EndDayOfCurrent = endDay.toJSON()
        let sqlSearchEventQuery = SQL_SELECT_ALL_EVENTS+` WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDay}') AND DATE('${EndDayOfCurrent}'))) ORDER BY event_datetime DESC`
       
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
                
                vital[`${val[0]['event_name']}`]=val;
            })

            return { from_date : fromDate ,end_date: end_date, expense:  vital} 
        })
    }

    vitalFilterAnalytics(id,paramsOfdata){
        let params = paramsOfdata;
        return this.getVitalEvents(id,params['from_date'],params['end_date'],'vital','analytics',params['event_name']).then(response => {
            
            let data = response['event_list'];
            
            // let value = {}
            // const example = from(data).pipe(
            //     groupBy(person =>  person['event_name']),  //,person =>  person.event_category
            //     mergeMap(group => group.pipe(toArray())),
            //     mergeMap((array) => {// Take each from above array and group each array by manDate
            //       return from(array).pipe(groupBy(
            //         val => formatDate(val['event_datetime'], 'yyyy-MM-dd', 'en-US'),
            //         ),
            //         mergeMap(group => {
            //           return group.pipe(toArray()); // return the group values as Arrays
            //         })
            //       );
            //     }),
            //     mergeMap((array) => {// Take each from above array and group each array by manDate
            //       return from(array).pipe(groupBy(
            //         val => val['event_category'],
            //         ),
            //         mergeMap(group => {
            //           return group.pipe(toArray()); // return the group values as Arrays
            //         })
            //       );
            //     }),map((val) => {  //For each array returned , calculate the sum and map it to the Object you wanted
                 
            //       return { event_name: val[0]['event_name'], date: val[0]['event_datetime'], event_category: val[0]['event_category'], data:val }
            //     })
            //   ).subscribe(val => {
               
            //    console.log(val,"test")
            //      let event_name = `${val['event_name']}`;
            //      let date = formatDate(val.date, 'yyyy-MM-dd', 'en-US');
            //      let event_category = val.event_category;
                
            //      value[`${event_name}`][`${date}`][`${event_category}`] = val['data'];
            //   })
            let vitalList = {};
            for(let i in data){
                
                  let event_datetime = formatDate(data[i]['event_datetime'], 'yyyy-MM-dd', 'en-US');
                  let event_category = data[i]['event_category'];
                  let event_name = data[i]['event_name'];
                  if(vitalList[`${event_name}`]==undefined){
                    vitalList[`${event_name}`] = {};
                    vitalList[`${event_name}`][`${event_datetime}`]={};
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] = []
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);
                  }else if(vitalList[`${event_name}`][`${event_datetime}`]==undefined){
                    vitalList[`${event_name}`][`${event_datetime}`]={};
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] = []
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]); 
                  }else if(vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`]==undefined){
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`]=[]
                   
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);   
                  }else{
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]); 
                  }
                       
          
            }

            return vitalList;
  
          })
    }

    async checkEventType(event,tab,offset,from_date?,end_date?,analytics?,event_name?) {
        
        let startDate = null;
        let endDate = null;
        if(from_date!=undefined && end_date!=undefined){
            let string1 = from_date.toString();
            
            let string2 = end_date.toString();
            
            let Date1 = new Date(string1);
            
            let Date2 = new Date(string2);
            Date2.setDate(Date2.getDate() + 1);
            
            startDate = formatDate(Date1, 'yyyy-MM-dd', 'en-US');
            
            endDate = formatDate(Date2, 'yyyy-MM-dd', 'en-US');
            
        }
    
        let eventQuery:any;
        let event_nameArray = null;
        if(event_name!=null && event_name.length>0 && typeof(event_name)=="object"){
            event_nameArray = event_name.map(x=>`"${x}"`).toString();
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
        }else if(event=='vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray!=null){
            return eventQuery= ` WHERE (event_name IN (${event_nameArray}) AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray==null){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='vital' && tab == 'pagefilter'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`
        }else if(event=='expense' && analytics == 'expense'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_summary'){
            return eventQuery= ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_analytics' && event_nameArray!=null){
            return eventQuery= ` WHERE (event_name IN (${event_nameArray}) AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`
        }else if(event=='expense' && analytics == 'view_analytics' && event_nameArray==null){
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

    async getAboutData() {
        let user_id = await this.databaseService.getuserID(); 
        let getQRcode = await this.setQRcode();
        let sqlHealthQuery = SQL_SELECT_ALL_HEALTH_DETAILS+` WHERE name='policy'`;
        let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE (id='${user_id}' AND role_id=1)`; //(id='${user_id}' AND role_id=1)
        return this.databaseService.getDatabase().then(async (database) => {
            
            let healthData=[];
            let userData=[];
            
            await database.executeSql(sqlHealthQuery, []).then((data1) => {
              for (let i = 0; i < data1.rows.length; i++) {
                console.log(data1.rows.item(i))
                debugger;
                let event_json:any = null;
                if (data1.rows.item(i).attribute_name_value != '' && data1.rows.item(i).attribute_name_value != null) {
                   
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
              return healthData;
            })

            // let await1 = new Promise(resolve => {
            //     database.executeSql(sqlHealthQuery, []).then((data1) => {
            //         for (let i = 0; i < data1.rows.length; i++) {
            //             console.log(data1.rows.item(i))
                
            //             let event_json:any = null;
            //             if (data1.rows.item(i).attribute_name_value != '' && data1.rows.item(i).attribute_name_value != null) {
                            
            //                 event_json = JSON.parse(data1.rows.item(i).attribute_name_value);
            //             }
                            
            //             healthData.push({ 
            //                 id: data1.rows.item(i).id, 
            //                 health_id: data1.rows.item(i).health_id, 
            //                 name: data1.rows.item(i).name, 
            //                 attribute_name_value: event_json, 
            //                 user_id: data1.rows.item(i).user_id, 
            //                 created_at: data1.rows.item(i).created_at, 
            //                 updated_at: data1.rows.item(i).updated_at 
            //             });
                        
            //             if((data1.rows.length-1)==i){
            //                 setTimeout(()=>{
            //                     resolve('Hello from a Promise!');  
            //                 },500)
            //             }
            //         }
            //     })
            // });
           
            let await2 = await database.executeSql(sqlUserQuery, []).then((data2) => {
              
              for (let i = 0; i < data2.rows.length; i++) {
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
              return userData;
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
       let sqlEmergeQuery = SQL_SELECT_ALL_EMERGENCY_DATA+` WHERE delete1='false'`;
       let sqlUsersQuery = SQL_SELECT_ALL_USERS+` WHERE (role_id=2 AND delete1='false')`;
       
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
