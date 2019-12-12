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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.interface */ "./src/app/sqlite-database/database.interface.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database */ "./src/app/sqlite-database/database.ts");








/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataBaseSummaryProvider = /** @class */ (function () {
    function DataBaseSummaryProvider(http, databaseService) {
        this.http = http;
        this.databaseService = databaseService;
        console.log('Hello SettingProvider Provider');
    }
    DataBaseSummaryProvider.prototype.getAll = function () {
        return this.databaseService.getDatabase().then(function (database) {
            return database.executeSql(_database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_CREDENTIALS"], []).then(function (data) {
                var settings = [];
                for (var i = 0; i < data.rows.length; i++) {
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
    };
    DataBaseSummaryProvider.prototype.getAllEvents = function (event_type, tab, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkEvent, sqlEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkEventType(event_type, tab, offset)];
                    case 1:
                        checkEvent = _a.sent();
                        sqlEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlEventQuery, []).then(function (data) {
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getAllEventsSearchList = function (event_type, search, additionType, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkEvent, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkEventTypeSearch(event_type, search, additionType, offset)];
                    case 1:
                        checkEvent = _a.sent();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.filterVitalHistory = function (event_type, event_name, from_date, end_date, vital_page_offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkEvent, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkEventType(event_type, 'pagefilter', vital_page_offset, from_date, end_date, null, event_name)];
                    case 1:
                        checkEvent = _a.sent();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
                        console.log(sqlSearchEventQuery);
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getVitalEvents = function (id, from_date, end_date, event_type, analytics, event_name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkEvent, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkEventType(event_type, 'filter', 0, from_date, end_date, analytics, event_name)];
                    case 1:
                        checkEvent = _a.sent();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
                        console.log(sqlSearchEventQuery);
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    console.log(data);
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.filterVitalEventNameList = function (id, from_date, end, type) {
        return this.getVitalEvents(id, from_date, end, type).then(function (response) {
            var data = response['event_list'];
            var value = [];
            var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return person['event_name']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()); })).subscribe(function (val) {
                console.log(val);
                if (val) {
                    value.push(val[0]['event_name']);
                }
            });
            return { events: value };
        });
    };
    DataBaseSummaryProvider.prototype.expenseCalculation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, sqlUserQuery;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + (" WHERE id='" + user_id + "'");
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlUserQuery, []).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var getUserData, joinMonth, currentDate, y, m, lastDate, getfirst_month, setfirst_month, currentMonth, first_day, fy, fm, no_of_months, CurrentMonthStart, CurrentMonthEnd, sqlCurrentMonthExpQuery, getResponseOfMonthExp, CurrentMonthExpense, firstDayOfYear, lastDayofYear, sqlCurrentYearExpQuery, getResponseOfYearExp, CurrentYearExpense, projectionM, MonthlyProjection, projectionY, yearlyProjection;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log(data.rows.item(0));
                                                getUserData = data.rows.item(0);
                                                joinMonth = getUserData.created_at || null;
                                                console.log(joinMonth);
                                                currentDate = new Date();
                                                console.log(currentDate);
                                                y = currentDate.getFullYear();
                                                m = currentDate.getMonth();
                                                lastDate = currentDate;
                                                lastDate.setDate(lastDate.getDate() + 1);
                                                getfirst_month = new Date(y, 0, 31);
                                                setfirst_month = getfirst_month.toJSON();
                                                currentMonth = new Date(y, m, 1);
                                                first_day = new Date(y, 0, 1);
                                                fy = first_day.getFullYear();
                                                fm = first_day.getMonth();
                                                no_of_months = (y * 12 + m) - (fy * 12 + fm);
                                                console.log(no_of_months);
                                                console.log(joinMonth != null, joinMonth <= setfirst_month, joinMonth, setfirst_month);
                                                CurrentMonthStart = currentMonth.toJSON();
                                                console.log(CurrentMonthStart);
                                                CurrentMonthEnd = lastDate.toJSON();
                                                console.log(CurrentMonthEnd);
                                                sqlCurrentMonthExpQuery = "SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + CurrentMonthStart + "') AND DATE('" + CurrentMonthEnd + "')))";
                                                console.log(sqlCurrentMonthExpQuery);
                                                return [4 /*yield*/, this.expenseCalculateValue(sqlCurrentMonthExpQuery)];
                                            case 1:
                                                getResponseOfMonthExp = _a.sent();
                                                console.log(getResponseOfMonthExp);
                                                CurrentMonthExpense = getResponseOfMonthExp.rows.item(0)['SUM(value)'];
                                                firstDayOfYear = first_day.toJSON();
                                                console.log(firstDayOfYear);
                                                lastDayofYear = lastDate.toJSON();
                                                console.log(lastDayofYear);
                                                sqlCurrentYearExpQuery = "SELECT SUM(value) FROM events WHERE (event_type='expense' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + firstDayOfYear + "') AND DATE('" + lastDayofYear + "')))";
                                                console.log(sqlCurrentYearExpQuery);
                                                return [4 /*yield*/, this.expenseCalculateValue(sqlCurrentYearExpQuery)];
                                            case 2:
                                                getResponseOfYearExp = _a.sent();
                                                CurrentYearExpense = getResponseOfYearExp.rows.item(0)['SUM(value)'];
                                                if (joinMonth != null && joinMonth <= setfirst_month) {
                                                    projectionM = (CurrentYearExpense / no_of_months);
                                                    MonthlyProjection = projectionM.toFixed(2);
                                                    projectionY = (projectionM * 12);
                                                    yearlyProjection = projectionY.toFixed(2);
                                                    return [2 /*return*/, { CurrentMonth: CurrentMonthExpense, Yearly: CurrentYearExpense, status: true, MonthProjection: MonthlyProjection, YearlyProjection: yearlyProjection }];
                                                }
                                                else {
                                                    return [2 /*return*/, { CurrentMonth: CurrentMonthExpense, Yearly: CurrentYearExpense, status: false }];
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.expenseCalculateValue = function (query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                        return database.executeSql(query, []).then(function (data) {
                            return data;
                        }).catch(function (e) { console.log(e); });
                    })];
            });
        });
    };
    DataBaseSummaryProvider.prototype.expense_cals_chart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentDate, y, first_day, last_day, m, currentMonth, getAllYearData, yearData, getAllCurrentData, MonthData, array, dateobject, array1, yearObject, totalValue, total_year;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = new Date();
                        y = currentDate.getFullYear();
                        first_day = new Date(y, 0, 1);
                        last_day = currentDate;
                        m = currentDate.getMonth();
                        currentMonth = new Date(y, m, 1);
                        return [4 /*yield*/, this.getAllExpenses(first_day, last_day)];
                    case 1:
                        getAllYearData = _a.sent();
                        yearData = getAllYearData['event_list'];
                        console.log(yearData);
                        return [4 /*yield*/, this.getAllExpenses(currentMonth, last_day)];
                    case 2:
                        getAllCurrentData = _a.sent();
                        MonthData = getAllCurrentData['event_list'];
                        console.log(MonthData);
                        array = [];
                        dateobject = {};
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(MonthData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(person['event_datetime'], 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(group.key), group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])())); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (val) {
                                var total = val[1].reduce(function (accumulator, sample) {
                                    return accumulator + Number(sample['value']);
                                }, 0);
                                return { event_datetime: val[0], data: val[1], value: total };
                            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()).subscribe(function (res) {
                                array = res;
                                var _loop_1 = function () {
                                    var data = array[i]['data'];
                                    var allArray = [];
                                    var arrayreduce = Array.from(new Set(array[i]['data'].map(function (s) { return s.event_name; }))).map(function (name, index) {
                                        var total = array[i]['data'].reduce(function (accumulator, data1) {
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
                                };
                                for (var i in array) {
                                    _loop_1();
                                }
                                console.log(dateobject);
                            })];
                    case 3:
                        _a.sent();
                        console.log(dateobject);
                        array1 = [];
                        yearObject = {};
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(yearData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(person['event_datetime'], 'MMMM', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(group.key), group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])())); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (val) {
                                var total = val[1].reduce(function (accumulator, sample) {
                                    return accumulator + Number(sample['value']);
                                }, 0);
                                return { event_datetime: val[0], data: val[1], value: total };
                            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()).subscribe(function (res) {
                                array1 = res;
                                var _loop_2 = function () {
                                    var data = array1[i]['data'];
                                    var allArray = [];
                                    var arrayreduce = Array.from(new Set(array1[i]['data'].map(function (s) { return s.event_name; }))).map(function (name, index) {
                                        var total = array1[i]['data'].reduce(function (accumulator, data1) {
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
                                };
                                for (var i in array1) {
                                    _loop_2();
                                }
                                console.log(yearObject);
                            })];
                    case 4:
                        _a.sent();
                        console.log(yearObject);
                        return [4 /*yield*/, yearData.reduce(function (accum, hash) {
                                return accum + Number(hash['value']);
                            }, 0)];
                    case 5:
                        totalValue = _a.sent();
                        total_year = [{ year: y, value: totalValue }];
                        return [2 /*return*/, { Currentmonth: dateobject, Totalyear: total_year, Year: yearObject }];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getAllExpenses = function (first_day, last_day) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, startDay, lastDay, endDay, EndDayOfCurrent, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        startDay = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(first_day, 'yyyy-MM-dd', 'en-US');
                        lastDay = last_day.toString();
                        endDay = new Date(lastDay);
                        endDay.setDate(endDay.getDate() + 1);
                        EndDayOfCurrent = endDay.toJSON();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + (" WHERE (event_type='expense' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDay + "') AND DATE('" + EndDayOfCurrent + "'))) ORDER BY event_datetime DESC");
                        console.log(sqlSearchEventQuery);
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    console.log(data);
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        console.log(data.rows.item(i));
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.currentUserData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var events, i, event_json, eventAssetsJson;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                events = [];
                for (i = 0; i < data.rows.length; i++) {
                    event_json = null;
                    eventAssetsJson = null;
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
                return [2 /*return*/, events];
            });
        });
    };
    DataBaseSummaryProvider.prototype.expenseDatefilter = function (id, from_date, end, type) {
        return this.getVitalEvents(id, from_date, end, type, 'expense').then(function (response) {
            var data = response['event_list'];
            var value = [];
            var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return person['event_name']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()); })).subscribe(function (val) {
                console.log(val);
                if (val) {
                    value.push(val[0]['event_name']);
                }
            });
            return { events: value };
        });
    };
    DataBaseSummaryProvider.prototype.ExpenseViewSummary = function (from_date, end, type, event_name, analytics) {
        return this.getVitalEvents('1', from_date, end, type, analytics, event_name).then(function (response) {
            var data = response['event_list'];
            var fromDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(from_date, 'yyyy-MM-dd', 'en-US');
            var end_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(end, 'yyyy-MM-dd', 'en-US');
            var value = [];
            var vital = {};
            var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return person['event_name']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()); })).subscribe(function (val) {
                console.log(val);
                vital["" + val[0]['event_name']] = val;
            });
            return { from_date: fromDate, end_date: end_date, expense: vital };
        });
    };
    DataBaseSummaryProvider.prototype.vitalFilterAnalytics = function (id, paramsOfdata) {
        var params = paramsOfdata;
        return this.getVitalEvents(id, params['from_date'], params['end_date'], 'vital', 'analytics', params['event_name']).then(function (response) {
            console.log(response);
            var data = response['event_list'];
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
            var vitalList = {};
            for (var i in data) {
                var event_datetime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(data[i]['event_datetime'], 'yyyy-MM-dd', 'en-US');
                var event_category = data[i]['event_category'];
                var event_name = data[i]['event_name'];
                if (vitalList["" + event_name] == undefined) {
                    vitalList["" + event_name] = {};
                    vitalList["" + event_name]["" + event_datetime] = {};
                    vitalList["" + event_name]["" + event_datetime]["" + event_category] = [];
                    vitalList["" + event_name]["" + event_datetime]["" + event_category].push(data[i]);
                }
                else if (vitalList["" + event_name]["" + event_datetime] == undefined) {
                    vitalList["" + event_name]["" + event_datetime] = {};
                    vitalList["" + event_name]["" + event_datetime]["" + event_category] = [];
                    vitalList["" + event_name]["" + event_datetime]["" + event_category].push(data[i]);
                }
                else if (vitalList["" + event_name]["" + event_datetime]["" + event_category] == undefined) {
                    vitalList["" + event_name]["" + event_datetime]["" + event_category] = [];
                    vitalList["" + event_name]["" + event_datetime]["" + event_category].push(data[i]);
                }
                else {
                    vitalList["" + event_name]["" + event_datetime]["" + event_category].push(data[i]);
                }
            }
            return vitalList;
        });
    };
    DataBaseSummaryProvider.prototype.checkEventType = function (event, tab, offset, from_date, end_date, analytics, event_name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var startDate, endDate, string1, string2, Date1, Date2, eventQuery, event_nameArray, user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(from_date, end_date);
                        startDate = null;
                        endDate = null;
                        if (from_date != undefined && end_date != undefined) {
                            string1 = from_date.toString();
                            console.log(string1);
                            string2 = end_date.toString();
                            console.log(string2);
                            Date1 = new Date(string1);
                            console.log(Date1);
                            Date2 = new Date(string2);
                            Date2.setDate(Date2.getDate() + 1);
                            console.log(Date2);
                            startDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(Date1, 'yyyy-MM-dd', 'en-US');
                            console.log(startDate);
                            endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(Date2, 'yyyy-MM-dd', 'en-US');
                            console.log(endDate);
                        }
                        event_nameArray = null;
                        if (event_name != null && event_name.length > 0 && typeof (event_name) == "object") {
                            event_nameArray = event_name.map(function (x) { return "\"" + x + "\""; }).toString();
                        }
                        return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        //let nowDate = new Date().toJSON()
                        if (event == 'appointment' && tab == 'New') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime ASC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'appointment' && tab == 'history') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime ASC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'health_diary' || event == 'doc_visit') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY created_at DESC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'vital' && tab == 'New') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'vital' && tab == 'filter' && analytics != 'analytics') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray != null) {
                            return [2 /*return*/, eventQuery = " WHERE (event_name IN (" + event_nameArray + ") AND event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'vital' && tab == 'filter' && analytics == 'analytics' && event_nameArray == null) {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'vital' && tab == 'pagefilter') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'expense' && analytics == 'expense') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'expense' && analytics == 'view_summary') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'expense' && analytics == 'view_analytics' && event_nameArray != null) {
                            return [2 /*return*/, eventQuery = " WHERE (event_name IN (" + event_nameArray + ") AND event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else if (event == 'expense' && analytics == 'view_analytics' && event_nameArray == null) {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "' AND (event_datetime BETWEEN DATE('" + startDate + "') AND DATE('" + endDate + "'))) ORDER BY event_datetime DESC"];
                        }
                        else {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime DESC LIMIT 10 OFFSET " + offset];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.checkEventTypeSearch = function (event, search, type, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var eventSearchQuery, user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        if (event == 'appointment' && type == 'New') {
                            return [2 /*return*/, eventSearchQuery = " WHERE ((event_name LIKE '%" + search + "%') OR (description LIKE '%" + search + "%') OR (event_category LIKE '%" + search + "%')) AND (event_type='" + event + "' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime ASC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'appointment' && type == 'history') {
                            return [2 /*return*/, eventSearchQuery = " WHERE ((event_name LIKE '%" + search + "%') OR (description LIKE '%" + search + "%') OR (event_category LIKE '%" + search + "%')) AND (event_type='" + event + "' AND DATETIME(event_datetime)<DATETIME('now') AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime ASC LIMIT 10 OFFSET " + offset];
                        }
                        else if (event == 'health_diary' || event == 'doc_visit') {
                            return [2 /*return*/, eventSearchQuery = " WHERE ((event_name LIKE '%" + search + "%') OR (description LIKE '%" + search + "%') OR (event_category LIKE '%" + search + "%')) AND (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY created_at DESC LIMIT 10 OFFSET " + offset];
                        }
                        else {
                            return [2 /*return*/, eventSearchQuery = " WHERE ((event_name LIKE '%" + search + "%') OR (description LIKE '%" + search + "%') OR (event_category LIKE '%" + search + "%')) AND (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime DESC LIMIT 10 OFFSET " + offset];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getEnumMasters = function (name) {
        var sqlEnumQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_ENUMS"] + (" WHERE category_name='" + name + "'");
        return this.databaseService.getDatabase().then(function (database) {
            return database.executeSql(sqlEnumQuery, []).then(function (data) {
                var Enums = [];
                for (var i = 0; i < data.rows.length; i++) {
                    Enums.push(data.rows.item(i).name);
                }
                ;
                return { count: data.rows.length, enum_masters: Enums };
            });
        });
    };
    DataBaseSummaryProvider.prototype.diaryRecordFilter = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + (" WHERE (created_at BETWEEN DATE('" + data["from_date"] + "') AND DATE('" + data["end_date"] + "','+1 DAY')) AND (event_type='" + data["event_type"] + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY created_at DESC LIMIT 10 OFFSET 0");
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    var events = [];
                                    var eventAssetsJson = null;
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getAboutData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, getQRcode, sqlHealthQuery, sqlUserQuery;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [4 /*yield*/, this.setQRcode()];
                    case 2:
                        getQRcode = _a.sent();
                        sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + " WHERE name='policy'";
                        sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + (" WHERE (id='" + user_id + "' AND role_id=1)");
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var healthData, userData;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            healthData = [];
                                            userData = [];
                                            return [4 /*yield*/, database.executeSql(sqlHealthQuery, []).then(function (data1) {
                                                    for (var i = 0; i < data1.rows.length; i++) {
                                                        var event_json = null;
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
                                                }).catch(function (res) {
                                                    console.log(res);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, database.executeSql(sqlUserQuery, []).then(function (data2) {
                                                    console.log(data2.rows);
                                                    for (var i = 0; i < data2.rows.length; i++) {
                                                        console.log(data2.rows.item(i));
                                                        var attribute_json = null;
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
                                                }).catch(function (res) {
                                                    console.log(res);
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/, { policies: healthData, user_info: userData[0], qrcode_image: getQRcode }];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getHealthDeatails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sqlHealthQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + " WHERE name='health'";
                return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                        return database.executeSql(sqlHealthQuery, []).then(function (data) {
                            var healthData = [];
                            for (var i = 0; i < data.rows.length; i++) {
                                var event_json = null;
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
                        }).catch(function (res) {
                            console.log(res);
                        });
                    })];
            });
        });
    };
    DataBaseSummaryProvider.prototype.getEmergencyDeatails = function () {
        var _this = this;
        var sqlEmergeQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EMERGENCY_DATA"];
        var sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + " WHERE (role_id=1 AND delete1='false')";
        console.log(sqlUsersQuery);
        return this.databaseService.getDatabase().then(function (database) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var emergencyContacts, careGiverData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emergencyContacts = [];
                        careGiverData = [];
                        return [4 /*yield*/, database.executeSql(sqlEmergeQuery, []).then(function (data) {
                                for (var i = 0; i < data.rows.length; i++) {
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
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, database.executeSql(sqlUsersQuery, []).then(function (data1) {
                                for (var i = 0; i < data1.rows.length; i++) {
                                    if (data1.rows.item(i).email != null) {
                                        var attribute_json = null;
                                        var user_option_json = null;
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
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { caregiver_count: careGiverData.length, caregivers: careGiverData, emergency_contact_count: emergencyContacts.length, emergency_detail: emergencyContacts }];
                }
            });
        }); }).catch(function (res) {
            console.log(res);
        });
    };
    DataBaseSummaryProvider.prototype.getAllUserPreviewData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var healthDetailData, policyDetail, emergency_data, aboutData, healthData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmergencyDeatails()];
                    case 1:
                        emergency_data = _a.sent();
                        return [4 /*yield*/, this.getAboutData()];
                    case 2:
                        aboutData = _a.sent();
                        return [4 /*yield*/, this.getHealthDeatails()];
                    case 3:
                        healthData = _a.sent();
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
                        return [2 /*return*/, { caregiver_contact: emergency_data['caregivers'], contacts: emergency_data['emergency_detail'], health_detail: healthDetailData, policy_details: policyDetail, user: aboutData['user_info'] }];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getPatients = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, sqlUserQuery;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + (" WHERE (id='" + user_id + "' AND role_id=1)");
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var userData;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            userData = [];
                                            return [4 /*yield*/, database.executeSql(sqlUserQuery, []).then(function (data2) {
                                                    for (var i = 0; i < data2.rows.length; i++) {
                                                        var attribute_json = null;
                                                        var user_option_json = null;
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
                                                }).catch(function (res) {
                                                    console.log(res);
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { patients: userData }];
                                    }
                                });
                            }); }).catch(function (res) {
                                console.log(res);
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getAllPatients = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, sqlUsersQuery;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + " WHERE (role_id=1 AND delete1='false')";
                        //let sqlUserQuery = SQL_SELECT_ALL_USERS+` WHERE id=${user_id} AND role_id=1`;
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var userData;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            userData = [];
                                            return [4 /*yield*/, database.executeSql(sqlUsersQuery, []).then(function (data2) {
                                                    for (var i = 0; i < data2.rows.length; i++) {
                                                        if (data2.rows.item(i).email != null) {
                                                            var attribute_json = null;
                                                            var user_option_json = null;
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
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { patients: userData }];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getPicture_Show = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var emergency_data, aboutData, getAllPatients;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmergencyDeatails()];
                    case 1:
                        emergency_data = _a.sent();
                        return [4 /*yield*/, this.getAboutData()];
                    case 2:
                        aboutData = _a.sent();
                        return [4 /*yield*/, this.getPatients()];
                    case 3:
                        getAllPatients = _a.sent();
                        return [2 /*return*/, { caregiver: emergency_data['caregivers'], patient: getAllPatients['patients'], profile_pic: null, user_info: aboutData['user_info'] }];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getCaregiverData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_data, sqlUsersQuery;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProfileID()];
                    case 1:
                        user_data = _a.sent();
                        sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + " WHERE (role_id=2 AND delete1='false')";
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var userData;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            userData = [];
                                            return [4 /*yield*/, database.executeSql(sqlUsersQuery, []).then(function (data2) {
                                                    for (var i = 0; i < data2.rows.length; i++) {
                                                        if (data2.rows.item(i).email != null) {
                                                            var attribute_json = null;
                                                            var user_option_json = null;
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
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, { user_info: userData[0] }];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getCurrentUserandPatientsList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var current_user, patients_list;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCaregiverData()];
                    case 1:
                        current_user = _a.sent();
                        return [4 /*yield*/, this.getAllPatients()];
                    case 2:
                        patients_list = _a.sent();
                        return [2 /*return*/, { user_info: current_user['user_info'], patient: patients_list['patients'] }];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.getRecentAppointments = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, eventQuery, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        eventQuery = " WHERE (event_type='" + event + "' AND DATETIME(event_datetime)>=DATETIME('now') AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime ASC LIMIT 4 OFFSET 0";
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + eventQuery;
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    var events = [];
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var event_json = null;
                                        var eventAssetsJson = null;
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
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.setQRcode = function () {
        var setQRcode = null;
        if (localStorage.getItem("qrcode") != undefined) {
            setQRcode = localStorage.getItem("qrcode");
        }
        return setQRcode;
    };
    DataBaseSummaryProvider.prototype.getProfileID = function () {
        var profile_id = null;
        if (localStorage.getItem("profile_id") != undefined) {
            profile_id = localStorage.getItem("profile_id");
            return profile_id;
        }
        return profile_id;
    };
    DataBaseSummaryProvider.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] }
    ]; };
    DataBaseSummaryProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"]])
    ], DataBaseSummaryProvider);
    return DataBaseSummaryProvider;
}());



/***/ })

}]);
//# sourceMappingURL=default~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-module~cgappointment~90ffc403-es5.js.map