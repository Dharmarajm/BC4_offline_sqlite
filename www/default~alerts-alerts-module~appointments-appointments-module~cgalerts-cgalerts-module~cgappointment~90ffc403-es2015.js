(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-module~cgappointment~90ffc403"],{

/***/ "./src/app/sqlite-database/database_provider.ts":
/*!******************************************************!*\
  !*** ./src/app/sqlite-database/database_provider.ts ***!
  \******************************************************/
/*! exports provided: DataBaseSummaryProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseSummaryProvider", function() { return DataBaseSummaryProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.interface */ "./src/app/sqlite-database/database.interface.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database */ "./src/app/sqlite-database/database.ts");








/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let DataBaseSummaryProvider = class DataBaseSummaryProvider {
    constructor(http, databaseService) {
        this.http = http;
        this.databaseService = databaseService;
        console.log('Hello SettingProvider Provider');
    }
    getAll() {
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(_database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_CREDENTIALS"], []).then((data) => {
                let settings = [];
                for (let i = 0; i < data.rows.length; i++) {
                    settings.push({
                        id: data.rows.item(i).id,
                        email: data.rows.item(i).email,
                        password: data.rows.item(i).password
                    });
                }
                ;
                return settings;
            });
        });
    }
    getAllEvents(event_type, tab, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkEvent = yield this.checkEventType(event_type, tab, offset);
            let sqlEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlEventQuery, []).then((data) => {
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { count: data.rows.length, event_list: events };
                });
            });
        });
    }
    getAllEventsSearchList(event_type, search, additionType, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkEvent = yield this.checkEventTypeSearch(event_type, search, additionType, offset);
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { count: data.rows.length, event_list: events };
                });
            });
        });
    }
    filterVitalHistory(event_type, event_name, from_date, end_date, vital_page_offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkEvent = yield this.checkEventType(event_type, 'pagefilter', vital_page_offset, from_date, end_date, null, event_name);
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
            console.log(sqlSearchEventQuery);
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { count: data.rows.length, events: events };
                });
            });
        });
    }
    getVitalEvents(id, from_date, end_date, event_type, analytics, event_name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let checkEvent = yield this.checkEventType(event_type, 'filter', 0, from_date, end_date, analytics, event_name);
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
            console.log(sqlSearchEventQuery);
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    console.log(data);
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { count: data.rows.length, event_list: events };
                });
            });
        });
    }
    filterVitalEventNameList(id, from_date, end, type) {
        return this.getVitalEvents(id, from_date, end, type).then(response => {
            let data = response['event_list'];
            let value = [];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(person => person['event_name']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(group => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()))).subscribe(val => {
                console.log(val);
                if (val) {
                    value.push(val[0]['event_name']);
                }
            });
            return { events: value };
        });
    }
    expenseCalculation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE id='${user_id}'`;
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlUserQuery, []).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(data.rows.item(0));
                    let getUserData = data.rows.item(0);
                    let joinMonth = getUserData.created_at || null;
                    console.log(joinMonth);
                    let currentDate = new Date();
                    console.log(currentDate);
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
                    let no_of_months = (y * 12 + m) - (fy * 12 + fm);
                    console.log(no_of_months);
                    console.log(joinMonth != null, joinMonth <= setfirst_month, joinMonth, setfirst_month);
                    let CurrentMonthStart = currentMonth.toJSON();
                    console.log(CurrentMonthStart);
                    let CurrentMonthEnd = lastDate.toJSON();
                    console.log(CurrentMonthEnd);
                    let sqlCurrentMonthExpQuery = `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${CurrentMonthStart}') AND DATE('${CurrentMonthEnd}')))`;
                    console.log(sqlCurrentMonthExpQuery);
                    let getResponseOfMonthExp = yield this.expenseCalculateValue(sqlCurrentMonthExpQuery);
                    console.log(getResponseOfMonthExp);
                    let CurrentMonthExpense = getResponseOfMonthExp.rows.item(0)['SUM(value)'];
                    let firstDayOfYear = first_day.toJSON();
                    console.log(firstDayOfYear);
                    let lastDayofYear = lastDate.toJSON();
                    console.log(lastDayofYear);
                    let sqlCurrentYearExpQuery = `SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${firstDayOfYear}') AND DATE('${lastDayofYear}')))`;
                    console.log(sqlCurrentYearExpQuery);
                    let getResponseOfYearExp = yield this.expenseCalculateValue(sqlCurrentYearExpQuery);
                    let CurrentYearExpense = getResponseOfYearExp.rows.item(0)['SUM(value)'];
                    if (joinMonth != null && joinMonth <= setfirst_month) {
                        let projectionM = (CurrentYearExpense / no_of_months);
                        let MonthlyProjection = projectionM.toFixed(2);
                        let projectionY = (projectionM * 12);
                        let yearlyProjection = projectionY.toFixed(2);
                        return { CurrentMonth: CurrentMonthExpense, Yearly: CurrentYearExpense, status: true, MonthProjection: MonthlyProjection, YearlyProjection: yearlyProjection };
                    }
                    else {
                        return { CurrentMonth: CurrentMonthExpense, Yearly: CurrentYearExpense, status: false };
                    }
                }));
            });
        });
    }
    expenseCalculateValue(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(query, []).then((data) => {
                    return data;
                }).catch(e => { console.log(e); });
            });
        });
    }
    expense_cals_chart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let currentDate = new Date();
            var y = currentDate.getFullYear();
            let first_day = new Date(y, 0, 1);
            let last_day = currentDate;
            var m = currentDate.getMonth();
            let currentMonth = new Date(y, m, 1);
            let getAllYearData = yield this.getAllExpenses(first_day, last_day);
            let yearData = getAllYearData['event_list'];
            console.log(yearData);
            let getAllCurrentData = yield this.getAllExpenses(currentMonth, last_day);
            let MonthData = getAllCurrentData['event_list'];
            console.log(MonthData);
            let array = [];
            let dateobject = {};
            yield Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(MonthData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(person['event_datetime'], 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(group => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(group.key), group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(val => {
                let total = val[1].reduce((accumulator, sample) => {
                    return accumulator + Number(sample['value']);
                }, 0);
                return { event_datetime: val[0], data: val[1], value: total };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()).subscribe(res => {
                array = res;
                for (var i in array) {
                    let data = array[i]['data'];
                    let allArray = [];
                    const arrayreduce = Array.from(new Set(array[i]['data'].map(s => s.event_name))).map((name, index) => {
                        let total = array[i]['data'].reduce((accumulator, data1) => {
                            console.log(accumulator, data1);
                            if (data1.event_name == name && accumulator != undefined && accumulator != null) {
                                return accumulator + Number(data1['value']);
                            }
                            else {
                                return accumulator;
                            }
                        }, 0);
                        allArray.push([name, total]);
                    });
                    if (dateobject[array[i]['event_datetime']] == undefined) {
                        dateobject[array[i]['event_datetime']] = [];
                        dateobject[array[i]['event_datetime']].push({ data: allArray, event_datetime: array[i]['event_datetime'], value: array[i]['value'] });
                    }
                    else {
                        dateobject[array[i]['event_datetime']].push({ data: allArray, event_datetime: array[i]['event_datetime'], value: array[i]['value'] });
                    }
                }
                console.log(dateobject);
            });
            console.log(dateobject);
            let array1 = [];
            let yearObject = {};
            yield Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(yearData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(person['event_datetime'], 'MMMM', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(group => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(group.key), group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(val => {
                let total = val[1].reduce((accumulator, sample) => {
                    return accumulator + Number(sample['value']);
                }, 0);
                return { event_datetime: val[0], data: val[1], value: total };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()).subscribe(res => {
                array1 = res;
                for (var i in array1) {
                    let data = array1[i]['data'];
                    let allArray = [];
                    const arrayreduce = Array.from(new Set(array1[i]['data'].map(s => s.event_name))).map((name, index) => {
                        let total = array1[i]['data'].reduce((accumulator, data1) => {
                            console.log(accumulator, data1);
                            if (data1.event_name == name && accumulator != undefined && accumulator != null) {
                                return accumulator + Number(data1['value']);
                            }
                            else {
                                return accumulator;
                            }
                        }, 0);
                        allArray.push([name, total]);
                    });
                    if (yearObject[array1[i]['event_datetime']] == undefined) {
                        yearObject[array1[i]['event_datetime']] = [];
                        yearObject[array1[i]['event_datetime']].push({ data: allArray, event_datetime: array1[i]['event_datetime'], value: array1[i]['value'] });
                    }
                    else {
                        yearObject[array1[i]['event_datetime']].push({ data: allArray, event_datetime: array1[i]['event_datetime'], value: array1[i]['value'] });
                    }
                }
                console.log(yearObject);
            });
            console.log(yearObject);
            //   let value = [];
            //   const example = from(data).pipe(
            //   groupBy(person =>  person['event_name']),
            //   mergeMap(group => from(group).pipe(toArray()))
            //   ).subscribe(val => {
            //     console.log(val)
            //   })
            let totalValue = yield yearData.reduce((accum, hash) => {
                return accum + Number(hash['value']);
            }, 0);
            let total_year = [{ year: y, value: totalValue }];
            return { Currentmonth: dateobject, Totalyear: total_year, Year: yearObject };
        });
    }
    getAllExpenses(first_day, last_day) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let startDay = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(first_day, 'yyyy-MM-dd', 'en-US');
            let endDay = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(last_day, 'yyyy-MM-dd', 'en-US');
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + ` WHERE (event_type='expense' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDay}') AND DATE('${endDay}'))) ORDER BY event_datetime DESC`;
            console.log(sqlSearchEventQuery);
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    console.log(data);
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        console.log(data.rows.item(i));
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { count: data.rows.length, event_list: events };
                });
            });
        });
    }
    currentUserData(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let events = [];
            for (let i = 0; i < data.rows.length; i++) {
                let event_json = null;
                let eventAssetsJson = null;
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
            }
            return events;
        });
    }
    expenseDatefilter(id, from_date, end, type) {
        return this.getVitalEvents(id, from_date, end, type, 'expense').then(response => {
            let data = response['event_list'];
            let value = [];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(person => person['event_name']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(group => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()))).subscribe(val => {
                console.log(val);
                if (val) {
                    value.push(val[0]['event_name']);
                }
            });
            return { events: value };
        });
    }
    ExpenseViewSummary(from_date, end, type, event_name, analytics) {
        return this.getVitalEvents('1', from_date, end, type, analytics, event_name).then(response => {
            let data = response['event_list'];
            let fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(from_date, 'yyyy-MM-dd', 'en-US');
            let end_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(end, 'yyyy-MM-dd', 'en-US');
            let value = [];
            let vital = {};
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(person => person['event_name']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(group => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()))).subscribe(val => {
                console.log(val);
                vital[`${val[0]['event_name']}`] = val;
            });
            return { from_date: fromDate, end_date: end_date, expense: vital };
        });
    }
    vitalFilterAnalytics(id, paramsOfdata) {
        let params = paramsOfdata;
        return this.getVitalEvents(id, params['from_date'], params['end_date'], 'vital', 'analytics', params['event_name']).then(response => {
            console.log(response);
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
            for (let i in data) {
                let event_datetime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(data[i]['event_datetime'], 'yyyy-MM-dd', 'en-US');
                let event_category = data[i]['event_category'];
                let event_name = data[i]['event_name'];
                if (vitalList[`${event_name}`] == undefined) {
                    vitalList[`${event_name}`] = {};
                    vitalList[`${event_name}`][`${event_datetime}`] = {};
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] = [];
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);
                }
                else if (vitalList[`${event_name}`][`${event_datetime}`] == undefined) {
                    vitalList[`${event_name}`][`${event_datetime}`] = {};
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] = [];
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);
                }
                else if (vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] == undefined) {
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`] = [];
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);
                }
                else {
                    vitalList[`${event_name}`][`${event_datetime}`][`${event_category}`].push(data[i]);
                }
            }
            return vitalList;
        });
    }
    checkEventType(event, tab, offset, from_date, end_date, analytics, event_name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(from_date, end_date);
            let startDate = null;
            let endDate = null;
            if (from_date != undefined && end_date != undefined) {
                let string1 = from_date.toString();
                console.log(string1);
                let string2 = end_date.toString();
                console.log(string2);
                let Date1 = new Date(string1);
                console.log(Date1);
                let Date2 = new Date(string2);
                Date2.setDate(Date2.getDate() + 1);
                console.log(Date2);
                startDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(Date1, 'yyyy-MM-dd', 'en-US');
                console.log(startDate);
                endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(Date2, 'yyyy-MM-dd', 'en-US');
                console.log(endDate);
            }
            let eventQuery;
            let event_nameArray = null;
            if (event_name != null && event_name.length > 0 && typeof (event_name) == "object") {
                event_nameArray = event_name.map(x => `"${x}"`).toString();
            }
            let user_id = yield this.databaseService.getuserID();
            //let nowDate = new Date().toJSON()
            if (event == 'appointment' && tab == 'New') {
                return eventQuery = ` WHERE (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'appointment' && tab == 'history') {
                return eventQuery = ` WHERE (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'health_diary' || event == 'doc_visit') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'vital' && tab == 'New') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC`;
            }
            else if (event == 'vital' && tab == 'filter' && analytics != 'analytics') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray != null) {
                return eventQuery = ` WHERE (event_name IN (${event_nameArray}) AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray == null) {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'vital' && tab == 'pagefilter') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'expense' && analytics == 'expense') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'expense' && analytics == 'view_summary') {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'expense' && analytics == 'view_analytics' && event_nameArray != null) {
                return eventQuery = ` WHERE (event_name IN (${event_nameArray}) AND event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else if (event == 'expense' && analytics == 'view_analytics' && event_nameArray == null) {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}' AND (event_datetime BETWEEN DATE('${startDate}') AND DATE('${endDate}'))) ORDER BY event_datetime DESC`;
            }
            else {
                return eventQuery = ` WHERE (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`;
            }
        });
    }
    checkEventTypeSearch(event, search, type, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let eventSearchQuery;
            //let nowDate = new Date().toJSON()
            let user_id = yield this.databaseService.getuserID();
            if (event == 'appointment' && type == 'New') {
                return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'appointment' && type == 'history') {
                return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
            }
            else if (event == 'health_diary' || event == 'doc_visit') {
                return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`;
            }
            else {
                return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`;
            }
        });
    }
    getEnumMasters(name) {
        let sqlEnumQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_ENUMS"] + ` WHERE category_name='${name}'`;
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlEnumQuery, []).then((data) => {
                let Enums = [];
                for (let i = 0; i < data.rows.length; i++) {
                    Enums.push(data.rows.item(i).name);
                }
                ;
                return { count: data.rows.length, enum_masters: Enums };
            });
        });
    }
    diaryRecordFilter(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + ` WHERE (created_at BETWEEN DATE('${data["from_date"]}') AND DATE('${data["end_date"]}','+1 DAY')) AND (event_type='${data["event_type"]}' AND delete1='false' AND user_id='${user_id}') ORDER BY created_at DESC LIMIT 10 OFFSET 0`;
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    let events = [];
                    let eventAssetsJson = null;
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
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
                    }
                    ;
                    return { count: data.rows.length, event_list: events };
                });
            });
        });
    }
    getAboutData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let getQRcode = yield this.setQRcode();
            let sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + ` WHERE name='policy'`;
            let sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE (id='${user_id}' AND role_id=1)`; //(id='${user_id}' AND role_id=1)
            return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let healthData = [];
                let userData = [];
                yield database.executeSql(sqlHealthQuery, []).then((data1) => {
                    for (let i = 0; i < data1.rows.length; i++) {
                        let event_json = null;
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
                        });
                    }
                }).catch(res => {
                    console.log(res);
                });
                yield database.executeSql(sqlUserQuery, []).then((data2) => {
                    console.log(data2.rows);
                    for (let i = 0; i < data2.rows.length; i++) {
                        console.log(data2.rows.item(i));
                        let attribute_json = null;
                        if (data2.rows.item(i).user_picture != null) {
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
                        });
                    }
                }).catch(res => {
                    console.log(res);
                });
                return { policies: healthData, user_info: userData[0], qrcode_image: getQRcode };
            }));
        });
    }
    getHealthDeatails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //let user_id = await this.databaseService.getuserID(); 
            let sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + ` WHERE name='health'`;
            return this.databaseService.getDatabase().then((database) => {
                return database.executeSql(sqlHealthQuery, []).then((data) => {
                    let healthData = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
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
                        });
                    }
                    return { health_detail: healthData };
                }).catch(res => {
                    console.log(res);
                });
            });
        });
    }
    getEmergencyDeatails() {
        let sqlEmergeQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EMERGENCY_DATA"];
        let sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE (role_id=1 AND delete1='false')`;
        console.log(sqlUsersQuery);
        return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let emergencyContacts = [];
            let careGiverData = [];
            yield database.executeSql(sqlEmergeQuery, []).then((data) => {
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
            });
            yield database.executeSql(sqlUsersQuery, []).then((data1) => {
                for (let i = 0; i < data1.rows.length; i++) {
                    if (data1.rows.item(i).email != null) {
                        let attribute_json = null;
                        let user_option_json = null;
                        if (data1.rows.item(i).user_picture != null) {
                            attribute_json = JSON.parse(data1.rows.item(i).user_picture);
                        }
                        if (data1.rows.item(i).user_option != null) {
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
                            user_option: user_option_json,
                            active_status: data1.rows.item(i).active_status,
                            role_id: data1.rows.item(i).role_id,
                            created_at: data1.rows.item(i).created_at,
                            updated_at: data1.rows.item(i).updated_at,
                            delete1: data1.rows.item(i).delete1
                        });
                    }
                }
            });
            return { caregiver_count: careGiverData.length, caregivers: careGiverData, emergency_contact_count: emergencyContacts.length, emergency_detail: emergencyContacts };
        })).catch(res => {
            console.log(res);
        });
    }
    getAllUserPreviewData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let healthDetailData;
            let policyDetail;
            let emergency_data = yield this.getEmergencyDeatails();
            let aboutData = yield this.getAboutData();
            let healthData = yield this.getHealthDeatails();
            if (healthData['health_detail'].length > 0) {
                healthDetailData = healthData['health_detail'][0];
            }
            else {
                healthDetailData = null;
            }
            if (aboutData['policies'].length > 0) {
                policyDetail = aboutData['policies'][0];
            }
            else {
                policyDetail = null;
            }
            return { caregiver_contact: emergency_data['caregivers'], contacts: emergency_data['emergency_detail'], health_detail: healthDetailData, policy_details: policyDetail, user: aboutData['user_info'] };
        });
    }
    getPatients() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE (id='${user_id}' AND role_id=1)`;
            return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let userData = [];
                yield database.executeSql(sqlUserQuery, []).then((data2) => {
                    for (let i = 0; i < data2.rows.length; i++) {
                        let attribute_json = null;
                        let user_option_json = null;
                        if (data2.rows.item(i).user_picture != null) {
                            attribute_json = JSON.parse(data2.rows.item(i).user_picture);
                        }
                        if (data2.rows.item(i).user_option != null) {
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
                        });
                    }
                }).catch(res => {
                    console.log(res);
                });
                return { patients: userData };
            })).catch(res => {
                console.log(res);
            });
        });
    }
    getAllPatients() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE (role_id=1 AND delete1='false')`;
            //let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE id=${user_id} AND role_id=1`;
            return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let userData = [];
                yield database.executeSql(sqlUsersQuery, []).then((data2) => {
                    for (let i = 0; i < data2.rows.length; i++) {
                        if (data2.rows.item(i).email != null) {
                            let attribute_json = null;
                            let user_option_json = null;
                            if (data2.rows.item(i).user_picture != null) {
                                attribute_json = JSON.parse(data2.rows.item(i).user_picture);
                            }
                            if (data2.rows.item(i).user_option != null) {
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
                            });
                        }
                    }
                });
                return { patients: userData };
            }));
        });
    }
    getPicture_Show() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let emergency_data = yield this.getEmergencyDeatails();
            let aboutData = yield this.getAboutData();
            let getAllPatients = yield this.getPatients();
            return { caregiver: emergency_data['caregivers'], patient: getAllPatients['patients'], profile_pic: null, user_info: aboutData['user_info'] };
        });
    }
    getCaregiverData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_data = yield this.getProfileID();
            let sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE (role_id=2 AND delete1='false')`;
            return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let userData = [];
                yield database.executeSql(sqlUsersQuery, []).then((data2) => {
                    for (let i = 0; i < data2.rows.length; i++) {
                        if (data2.rows.item(i).email != null) {
                            let attribute_json = null;
                            let user_option_json = null;
                            if (data2.rows.item(i).user_picture != null) {
                                attribute_json = JSON.parse(data2.rows.item(i).user_picture);
                            }
                            if (data2.rows.item(i).user_option != null) {
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
                            });
                        }
                    }
                });
                return { user_info: userData[0] };
            }));
        });
    }
    getCurrentUserandPatientsList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let current_user = yield this.getCaregiverData();
            let patients_list = yield this.getAllPatients();
            return { user_info: current_user['user_info'], patient: patients_list['patients'] };
        });
    }
    getRecentAppointments(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let eventQuery = ` WHERE (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='${user_id}') ORDER BY event_datetime ASC LIMIT 4 OFFSET 0`;
            let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + eventQuery;
            return this.databaseService.getDatabase().then(database => {
                return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                    let events = [];
                    for (let i = 0; i < data.rows.length; i++) {
                        let event_json = null;
                        let eventAssetsJson = null;
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
                    }
                    ;
                    return { appointment_list: events };
                });
            });
        });
    }
    setQRcode() {
        let setQRcode = null;
        if (localStorage.getItem("qrcode") != undefined) {
            setQRcode = localStorage.getItem("qrcode");
        }
        return setQRcode;
    }
    getProfileID() {
        let profile_id = null;
        if (localStorage.getItem("profile_id") != undefined) {
            profile_id = localStorage.getItem("profile_id");
            return profile_id;
        }
        return profile_id;
    }
};
DataBaseSummaryProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] }
];
DataBaseSummaryProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"]])
], DataBaseSummaryProvider);



/***/ })

}]);
//# sourceMappingURL=default~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-module~cgappointment~90ffc403-es2015.js.map