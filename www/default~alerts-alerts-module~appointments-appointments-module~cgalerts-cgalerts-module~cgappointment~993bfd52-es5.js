(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-module~cgappointment~993bfd52"],{

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
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database */ "./src/app/sqlite-database/database.ts");





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
    DataBaseSummaryProvider.prototype.getVitalEvents = function (event_type, search, additionType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var checkEvent, sqlSearchEventQuery;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkEventType(event_type, search, additionType)];
                    case 1:
                        checkEvent = _a.sent();
                        sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + checkEvent;
                        return [2 /*return*/, this.databaseService.getDatabase().then(function (database) {
                                return database.executeSql(sqlSearchEventQuery, []).then(function (data) {
                                    console.log(data, "vital");
                                    for (var i = 0; i < data.rows.length; i++) {
                                        console.log(data.rows.item(i));
                                    }
                                });
                            })];
                }
            });
        });
    };
    DataBaseSummaryProvider.prototype.checkEventType = function (event, tab, offset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var eventQuery, user_id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.databaseService.getuserID()];
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
                        if (event == 'vital') {
                            return [2 /*return*/, eventQuery = " WHERE (event_type='" + event + "' AND delete1='false' AND user_id='" + user_id + "') ORDER BY event_datetime DESC"];
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
                                        if (data1.rows.item(i).user_picture != null) {
                                            attribute_json = JSON.parse(data1.rows.item(i).user_picture);
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
        { type: _database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"] }
    ]; };
    DataBaseSummaryProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"]])
    ], DataBaseSummaryProvider);
    return DataBaseSummaryProvider;
}());



/***/ })

}]);
//# sourceMappingURL=default~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-module~cgappointment~993bfd52-es5.js.map