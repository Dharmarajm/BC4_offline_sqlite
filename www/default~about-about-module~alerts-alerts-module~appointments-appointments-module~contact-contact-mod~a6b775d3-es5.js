(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~alerts-alerts-module~appointments-appointments-module~contact-contact-mod~a6b775d3"],{

/***/ "./src/app/self-care/self-common-service/settings/settings.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/self-care/self-common-service/settings/settings.service.ts ***!
  \****************************************************************************/
/*! exports provided: settingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsService", function() { return settingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var settingsService = /** @class */ (function () {
    function settingsService(http) {
        this.http = http;
    }
    settingsService.prototype.relatedto = function () {
        return this.http.get("enum_masters?category_name=health_diary");
    };
    settingsService.prototype.aboutUpdate = function (detail) {
        return this.http.post("health_details/about_update", detail);
    };
    settingsService.prototype.aboutDetail = function () {
        return this.http.get("health_details/about");
    };
    settingsService.prototype.getPreview = function (id) {
        return this.http.get("users/user_details?user_uid=" + id);
    };
    settingsService.prototype.setting = function () {
        return this.http.get("users/picture_show");
    };
    settingsService.prototype.editprofile = function (val, id) {
        return this.http.put("users/" + id, val);
    };
    settingsService.prototype.sendimage = function (val) {
        return this.http.post("users/profile_picture", val);
    };
    settingsService.prototype.contactDetails = function () {
        return this.http.get("emergency_details");
    };
    settingsService.prototype.addContacts = function (user_details) {
        return this.http.post("emergency_details", user_details);
    };
    settingsService.prototype.deleteData = function (id) {
        return this.http.delete("emergency_details/" + id);
    };
    settingsService.prototype.deleteCaregiver = function (id) {
        return this.http.get("emergency_details/caregiver_delete?cg_id=" + id);
    };
    settingsService.prototype.commonEventList = function (event_type, page) {
        return this.http.get("events?event_type=" + event_type + "&&order=DESC&&sort=created_at&&per_page=10&&page=" + page);
    };
    settingsService.prototype.commonDateEventList = function (event_type, page) {
        return this.http.get("events?event_type=" + event_type + "&&order=DESC&&sort=event_datetime&&per_page=10&&page=" + page);
    };
    settingsService.prototype.commonAppointmentDateEventList = function (event_type, page) {
        return this.http.get("events?event_type=" + event_type + "&&order=ASC&&sort=event_datetime&&per_page=10&&page=" + page);
    };
    settingsService.prototype.commonEventSearchList = function (event_type, search) {
        return this.http.get("events?event_type=" + event_type + "&&search=" + search + "&&order=DESC&&sort=created_at");
    };
    settingsService.prototype.commonDateEventSearchList = function (event_type, search) {
        return this.http.get("events?event_type=" + event_type + "&&search=" + search + "&&order=DESC&&sort=event_datetime");
    };
    settingsService.prototype.commonAppointmentSearchList = function (event_type, search) {
        return this.http.get("events?event_type=" + event_type + "&&search=" + search + "&&order=ASC&&sort=event_datetime");
    };
    settingsService.prototype.commonVitalList = function (event_type, page) {
        return this.http.get("events?event_type=" + event_type + "&&order=DESC&&sort=event_datetime&&per_page=10&&page=" + page);
    };
    settingsService.prototype.commonVitalSearchList = function (event_type, search) {
        return this.http.get("events?event_type=" + event_type + "&&search=" + search + "&&order=DESC&&sort=event_datetime");
    };
    settingsService.prototype.commonDeleteEvent = function (id) {
        return this.http.delete("events/" + id);
    };
    settingsService.prototype.commonPost = function (record) {
        return this.http.post("events", record);
    };
    settingsService.prototype.vitalCommonPost = function (record) {
        return this.http.post("events/vital_update", record);
    };
    settingsService.prototype.commonUpdatePost = function (id, record) {
        return this.http.put("events/" + id, record);
    };
    settingsService.prototype.myEmergencyHealthDetail = function () {
        return this.http.get("health_details");
    };
    settingsService.prototype.myEmergencyHealthUpdate = function (data) {
        return this.http.post("health_details", data);
    };
    settingsService.prototype.myEmergencyPreview = function () {
        return this.http.get("users/preview");
    };
    settingsService.prototype.reportType = function () {
        return this.http.get("enum_masters?category_name=report");
    };
    settingsService.prototype.deleteImage = function (data) {
        return this.http.post("events/delete_image", data);
    };
    settingsService.prototype.vitaldelete = function (data) {
        return this.http.put("events/vital_delete", data);
    };
    settingsService.prototype.vitalReading = function () {
        return this.http.get("enum_masters?category_name=vital");
    };
    settingsService.prototype.vitalFoodTime = function () {
        return this.http.get("enum_masters?category_name=food_time");
    };
    settingsService.prototype.view_expenses = function (id) {
        return this.http.get("events/expense_list?user_id=" + id);
    };
    settingsService.prototype.event_view_delete = function (id) {
        return this.http.delete("events/" + id);
    };
    settingsService.prototype.event_add_option = function () {
        return this.http.get("enum_masters?category_name=spent_place");
    };
    settingsService.prototype.event_add = function (value) {
        return this.http.post("events", value);
    };
    settingsService.prototype.view_expenses_cal = function (id) {
        return this.http.get("events/expense_calculation?user_id=" + id);
    };
    settingsService.prototype.chartrepeat = function (id) {
        return this.http.get("events/expense_chart?user_id=" + id);
    };
    settingsService.prototype.main_chart = function (id) {
        return this.http.get("events/expense_cals_chart?user_id=" + id);
    };
    settingsService.prototype.filterChart = function (id, data) {
        return this.http.post("events/expense_chart_filter?user_id=" + id, data);
    };
    settingsService.prototype.filterAmount = function (from, to, id) {
        return this.http.get("events/expense_list?from_date=" + from + "&&end_date=" + to + "&&user_id=" + id);
    };
    settingsService.prototype.Appointmentdropdown = function () {
        return this.http.get("enum_masters?category_name=appointment");
    };
    settingsService.prototype.appointmentDetails = function (data) {
        return this.http.post("events", data);
    };
    settingsService.prototype.EditDetails = function (id, data) {
        return this.http.put("events/" + id, data);
    };
    settingsService.prototype.recentAppointment = function (id) {
        return this.http.get("events/appointment_list?user_id=" + id);
    };
    settingsService.prototype.record_filter = function (data) {
        console.log(data);
        return this.http.post("events/diary_recording?", data);
    };
    settingsService.prototype.completedAppointmentEventList = function (event_type, page) {
        return this.http.get("events?event_type=" + event_type + "&&tab=history&&order=DESC&&sort=event_datetime&&per_page=10&&page=" + page);
    };
    settingsService.prototype.completedAppointmentSearchList = function (event_type, search) {
        return this.http.get("events?event_type=" + event_type + "&&search=" + search + "&&tab=history&&order=DESC&&sort=event_datetime");
    };
    settingsService.prototype.vitalFoodTime1 = function () {
        return this.http.get("enum_masters?category_name=food_time_1");
    };
    settingsService.prototype.vitalFoodTime2 = function () {
        return this.http.get("enum_masters?category_name=food_time_2");
    };
    settingsService.prototype.vitalEventListNew = function (id) {
        return this.http.get("events/vitals_list1?user_id=" + id);
    };
    settingsService.prototype.reading_history = function (event, id, page, count) {
        return this.http.get("events/vital_history?event_name=" + event + "&&user_id=" + id + "&&page=" + page + "&&per_page=" + count);
    };
    settingsService.prototype.filterReading = function (event, id, page, count, from, end) {
        return this.http.get("events/vital_history?event_name=" + event + "&&user_id=" + id + "&&page=" + page + "&&per_page=" + count + "&&from_date=" + from + "&&end_date=" + end);
    };
    settingsService.prototype.vitalEventList = function (id) {
        return this.http.get("events/vital_names_list?user_id=" + id);
    };
    settingsService.prototype.vitalfilter = function (id, data) {
        return this.http.post("events/vitals_list1?user_id=" + id, data);
    };
    settingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    settingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], settingsService);
    return settingsService;
}());



/***/ }),

/***/ "./src/app/sqlite-database/database.ts":
/*!*********************************************!*\
  !*** ./src/app/sqlite-database/database.ts ***!
  \*********************************************/
/*! exports provided: DatabaseProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseProvider", function() { return DatabaseProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database.interface */ "./src/app/sqlite-database/database.interface.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _sync_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sync/sync */ "./src/app/sync/sync.ts");





//import { NetworkService } from '../network-connectivity/network-service';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DATA_BASE_NAME = 'BCared4.db';
var user_type;
(function (user_type) {
    user_type[user_type["Emergency"] = 1] = "Emergency";
    user_type[user_type["Doctor"] = 2] = "Doctor";
    user_type[user_type["Care Giver"] = 3] = "Care Giver";
})(user_type || (user_type = {}));
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite, platform, syncProvide) {
        this.sqlite = sqlite;
        this.platform = platform;
        this.syncProvide = syncProvide;
        this.Oninit();
    }
    DatabaseProvider.prototype.Oninit = function () {
        var _this = this;
        console.log('Oninit');
        //console.log(user_type[3])
        this.ready = this.platform.ready()
            .then(function () { return _this.initializeDatabase(); })
            .then(function () { return _this.bootstrapTables(); });
    };
    DatabaseProvider.prototype.initializeDatabase = function () {
        var _this = this;
        console.log('initialize');
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var sqlTable1, sqlTable2, sqlTable4, sqlTable5, sqlTable6, sqlTable3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sqlTable1 = "CREATE TABLE IF NOT EXISTS emergency_details(id INTEGER,emergency_id INTEGER PRIMARY KEY AUTOINCREMENT,contact_name TEXT DEFAULT NULL,emergency_no TEXT DEFAULT NULL,user_type TEXT,user_id INTEGER,created_at DATETIME,updated_at DATETIME,delete BOOLEAN)";
                        return [4 /*yield*/, db.executeSql(sqlTable1, [])];
                    case 1:
                        _a.sent();
                        sqlTable2 = "CREATE TABLE IF NOT EXISTS enum_masters(id INTEGER,name TEXT,category_name TEXT,created_at DATETIME,updated_at DATETIME)";
                        return [4 /*yield*/, db.executeSql(sqlTable2, [])];
                    case 2:
                        _a.sent();
                        sqlTable4 = "CREATE TABLE IF NOT EXISTS health_details(id INTEGER,health_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,attribute_name_value TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME)";
                        return [4 /*yield*/, db.executeSql(sqlTable4, [])];
                    case 3:
                        _a.sent();
                        sqlTable5 = "CREATE TABLE IF NOT EXISTS users(id INTEGER,name TEXT,email TEXT,password TEXT DEFAULT NULL,mobile_no TEXT DEFAULT NULL,address TEXT DEFAULT NULL,country TEXT DEFAULT NULL,blood_group TEXT DEFAULT NULL,age INTEGER DEFAULT NULL,user_uid TEXT,forgot_password_code TEXT DEFAULT NULL,user_picture TEXT DEFAULT NULL,active_status TEXT,role_id INTEGER,created_at DATETIME,updated_at DATETIME,delete BOOLEAN)";
                        return [4 /*yield*/, db.executeSql(sqlTable5, [])];
                    case 4:
                        _a.sent();
                        sqlTable6 = "CREATE TABLE IF NOT EXISTS user_associations(id INTEGER,patient_id INTEGER,caregiver_id INTEGER,nick_name TEXT DEFAULT NULL,created_at DATETIME,updated_at DATETIME)";
                        return [4 /*yield*/, db.executeSql(sqlTable6, [])];
                    case 5:
                        _a.sent();
                        sqlTable3 = "CREATE TABLE IF NOT EXISTS events(id INTEGER,event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name TEXT,description TEXT,value TEXT DEFAULT NULL,event_datetime INTEGER,event_type TEXT,event_category TEXT,event_assets TEXT DEFAULT NULL,event_options TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME,sync BOOLEAN)";
                        return [4 /*yield*/, db.executeSql(sqlTable3, [])
                                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sqlTableIndex;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sqlTableIndex = "CREATE INDEX IF NOT EXISTS event_index on events(event_type, event_datetime, created_at)";
                                            return [4 /*yield*/, db.executeSql(sqlTableIndex, [])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DatabaseProvider.prototype.bootstrapTables = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('bootstrap');
                return [2 /*return*/, this.sqlite.create({
                        name: DATA_BASE_NAME,
                        location: 'default'
                    }).then(function (db) {
                        return db.executeSql("SELECT * FROM enum_masters", []).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('bootstrap1');
                                        //   if(data.rows.length==0){
                                        //    await this.getTotalEnumMasters(db);
                                        //   }
                                        //   let user_id = await this.getuserID();
                                        //   if(user_id!=undefined){
                                        //     await this.awaitAllUsersTableData(db);
                                        //   }
                                        return [4 /*yield*/, this.syncProvide.initiateSync()];
                                    case 1:
                                        //   if(data.rows.length==0){
                                        //    await this.getTotalEnumMasters(db);
                                        //   }
                                        //   let user_id = await this.getuserID();
                                        //   if(user_id!=undefined){
                                        //     await this.awaitAllUsersTableData(db);
                                        //   }
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    DatabaseProvider.prototype.getDatabase = function () {
        var _this = this;
        return this.ready.then(function () {
            return _this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then(function (db) {
                return db;
            });
        });
    };
    DatabaseProvider.prototype.createAnEvent = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                var sql = "INSERT INTO events VALUES (NULL,NULL,?,?,?,?,?,?,?,?,?,?,?,?)";
                                var createEventData = [data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], data["event_assets"], JSON.stringify(data["event_options"]), user_id, new Date().toJSON(), new Date().toJSON(), false];
                                return db.executeSql(sql, createEventData).then(function (row) {
                                    return { event_id: row.insertId };
                                }).catch(function (res) {
                                    return res;
                                });
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.updateAnEvent = function (id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                var sql = "UPDATE events SET id = ?, event_name = ?, description = ?, value = ?, event_datetime = ?, event_type = ?, event_category = ?, event_assets = ?, event_options = ?, user_id = ?, created_at = ?, updated_at = ?, sync = ? WHERE event_id = ?";
                                var updateEventData = [data["id"], data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], data["event_assets"], JSON.stringify(data["event_options"]), user_id, data["created_at"], new Date().toJSON(), false, id];
                                return db.executeSql(sql, updateEventData).then(function (row) {
                                    return { event_id: row.insertId };
                                }).catch(function (res) {
                                    return res;
                                });
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.updateAnEventImage = function (id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.sqlite.create({
                        name: DATA_BASE_NAME,
                        location: 'default'
                    }).then(function (db) {
                        var sql = "UPDATE events SET event_options = ? WHERE event_id = ?";
                        var updateEventImageData = [JSON.stringify(data["event_options"]), id];
                        return db.executeSql(sql, updateEventImageData).then(function (row) {
                            return { event_id: row.insertId };
                        }).catch(function (res) {
                            return res;
                        });
                    })];
            });
        });
    };
    DatabaseProvider.prototype.deleteAnEvent = function (id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sql = "DELETE FROM events WHERE event_id = ?";
            return db.executeSql(sql, [id]).then(function (row) {
                return { event_id: row.insertId };
            }).catch(function (res) {
                return res;
            });
        });
    };
    DatabaseProvider.prototype.updateUserAndPolicyData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id, user_data, policy_data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        user_data = data['user'];
                        policy_data = data['policy'];
                        policy_data["name"] = "policy";
                        console.log(policy_data);
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sql, updateUserData;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sql = "UPDATE users SET age = ?, blood_group = ? WHERE id = ? AND role_id = ?";
                                            updateUserData = [user_data['age'], user_data['blood_group'], user_id, 1];
                                            return [4 /*yield*/, db.executeSql(sql, updateUserData)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, db.executeSql("SELECT * FROM health_details WHERE name='" + policy_data['name'] + "'", []).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var id;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                        console.log(data);
                                                        if (data.rows.length > 0) {
                                                            id = data.rows.item(0).health_id;
                                                            console.log(policy_data, id);
                                                            this.updateHealthData(policy_data, id);
                                                        }
                                                        else {
                                                            console.log(policy_data);
                                                            this.updateHealthData(policy_data);
                                                        }
                                                        return [2 /*return*/];
                                                    });
                                                }); }, function (error) {
                                                    console.log(error);
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                console.log(error);
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.updateUserData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var sql, updateUserData;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sql = "UPDATE users SET name = ?, email = ?, mobile_no = ? WHERE id = ? AND role_id = ?";
                                            updateUserData = [data['name'], data['email'], data['mobile_no'], user_id, 1];
                                            return [4 /*yield*/, db.executeSql(sql, updateUserData).then(function (row) {
                                                    return { event_id: row.insertId };
                                                }).catch(function (res) {
                                                    return res;
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    DatabaseProvider.prototype.updateUserImage = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                var sql = "UPDATE users SET user_picture = ? WHERE id = ?";
                                var updateEventImageData = [JSON.stringify(data), user_id];
                                return db.executeSql(sql, updateEventImageData).then(function (row) {
                                    return { event_id: row.insertId };
                                }).catch(function (res) {
                                    return res;
                                });
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.createEmergencyContacts = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                var sql = "INSERT INTO emergency_details VALUES (NULL,NULL,?,?,?,?,?,?,?)";
                                var createEventData = [data["contact_name"], data["emergency_no"], user_type[data["user_type"]], user_id, new Date().toJSON(), new Date().toJSON(), false];
                                return db.executeSql(sql, createEventData).then(function (row) {
                                    return { event_id: row.insertId };
                                }).catch(function (res) {
                                    return res;
                                });
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.deleteEmergencyContact = function (id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sql = "DELETE FROM emergency_details WHERE emergency_id = ?";
            return db.executeSql(sql, [id]).then(function (row) {
                return { event_id: row.insertId };
            }).catch(function (res) {
                return res;
            });
        });
    };
    DatabaseProvider.prototype.deleteCaregiverContact = function (id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sql = "UPDATE users SET delete = ? WHERE id = ?";
            return db.executeSql(sql, [true, id]).then(function (row) {
                return { event_id: row.insertId };
            }).catch(function (res) {
                return res;
            });
        });
    };
    DatabaseProvider.prototype.updateHealthData = function (data, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user_id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                return db.executeSql("SELECT * FROM health_details WHERE name='" + data['name'] + "'", []).then(function (getData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var sqlQuery, healthData;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        console.log(data);
                                        if (getData.rows.length > 0) {
                                            sqlQuery = "UPDATE health_details SET id = ?, name = ?, attribute_name_value = ?, user_id = ?, created_at = ?, updated_at = ? WHERE health_id = ?";
                                            healthData = [data["id"], data["name"], JSON.stringify(data["attribute_name_value"]), user_id, data["created_at"], new Date().toJSON(), id];
                                        }
                                        else {
                                            sqlQuery = "INSERT INTO health_details VALUES (NULL,NULL,?,?,?,?,?)";
                                            healthData = [data["name"], JSON.stringify(data["attribute_name_value"]), user_id, new Date().toJSON(), new Date().toJSON()];
                                        }
                                        console.log(sqlQuery);
                                        console.log(healthData);
                                        return [2 /*return*/, db.executeSql(sqlQuery, healthData).then(function (row) {
                                                console.log(row);
                                                return { event_id: row.insertId };
                                            }).catch(function (res) {
                                                console.log(res);
                                                return res;
                                            })];
                                    });
                                }); }).catch(function (res) {
                                    console.log(res);
                                    return res;
                                });
                            })];
                }
            });
        });
    };
    DatabaseProvider.prototype.deleteDataFromTable = function () {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            for (var i in _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_TABLES"]) {
                var sql = "DELETE FROM " + _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_TABLES"][i];
                db.executeSql(sql, []);
            }
        });
    };
    DatabaseProvider.prototype.getuserID = function () {
        var user_id = null;
        if (localStorage.getItem("user_id") != undefined) {
            user_id = localStorage.getItem("user_id");
            return user_id;
        }
        return user_id;
    };
    DatabaseProvider.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _sync_sync__WEBPACK_IMPORTED_MODULE_5__["syncProvider"] }
    ]; };
    DatabaseProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _sync_sync__WEBPACK_IMPORTED_MODULE_5__["syncProvider"]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());



/***/ })

}]);
//# sourceMappingURL=default~about-about-module~alerts-alerts-module~appointments-appointments-module~contact-contact-mod~a6b775d3-es5.js.map