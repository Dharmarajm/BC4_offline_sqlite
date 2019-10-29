(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~appointments-appointments-module~doc-visits-doc-visits-module~health-diary-health-diary-modu~5524b6e2"],{

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
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database */ "./src/app/sqlite-database/database.ts");





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
                        if (data.rows.item(i).skills != '') {
                            event_json = JSON.parse(data.rows.item(i).event_options);
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
                            event_assets: data.rows.item(i).event_assets,
                            event_options: event_json,
                            user_id: data.rows.item(i).user_id,
                            sync: data.rows.item(i).sync,
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
                        if (data.rows.item(i).skills != '') {
                            event_json = JSON.parse(data.rows.item(i).event_options);
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
                            event_assets: data.rows.item(i).event_assets,
                            event_options: event_json,
                            user_id: data.rows.item(i).user_id,
                            sync: data.rows.item(i).sync,
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
    checkEventType(event, tab, offset) {
        let eventQuery;
        //let nowDate = new Date().toJSON()
        if (event == 'appointment' && tab == 'New') {
            return eventQuery = ` WHERE (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now')) ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
        }
        else if (event == 'appointment' && tab == 'history') {
            return eventQuery = ` WHERE (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now')) ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
        }
        else if (event == 'health_diary' || event == 'doc_visit') {
            return eventQuery = ` WHERE event_type='${event}' ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`;
        }
        else {
            return eventQuery = ` WHERE event_type='${event}' ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`;
        }
    }
    checkEventTypeSearch(event, search, type, offset) {
        let eventSearchQuery;
        //let nowDate = new Date().toJSON()
        if (event == 'appointment' && type == 'New') {
            return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)>=DATETIME('now')) ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
        }
        else if (event == 'appointment' && type == 'history') {
            return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND (event_type='${event}' AND DATETIME(event_datetime)<DATETIME('now')) ORDER BY event_datetime ASC LIMIT 10 OFFSET ${offset}`;
        }
        else if (event == 'health_diary' || event == 'doc_visit') {
            return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND event_type='${event}' ORDER BY created_at DESC LIMIT 10 OFFSET ${offset}`;
        }
        else {
            return eventSearchQuery = ` WHERE ((event_name LIKE '%${search}%') OR (description LIKE '%${search}%') OR (event_category LIKE '%${search}%')) AND event_type='${event}' ORDER BY event_datetime DESC LIMIT 10 OFFSET ${offset}`;
        }
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
        let sqlSearchEventQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EVENTS"] + ` WHERE (created_at BETWEEN DATE('${data["from_date"]}') AND DATE('${data["end_date"]}','+1 DAY')) AND event_type='${data["event_type"]}' ORDER BY created_at DESC LIMIT 10 OFFSET 0`;
        return this.databaseService.getDatabase().then(database => {
            return database.executeSql(sqlSearchEventQuery, []).then((data) => {
                let events = [];
                for (let i = 0; i < data.rows.length; i++) {
                    let event_json = null;
                    if (data.rows.item(i).skills != '') {
                        event_json = JSON.parse(data.rows.item(i).event_options);
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
                        event_assets: data.rows.item(i).event_assets,
                        event_options: event_json,
                        user_id: data.rows.item(i).user_id,
                        sync: data.rows.item(i).sync,
                        created_at: data.rows.item(i).created_at,
                        updated_at: data.rows.item(i).updated_at
                    });
                }
                ;
                return { count: data.rows.length, event_list: events };
            });
        });
    }
    getAboutData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.databaseService.getuserID();
            let sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + ` WHERE name='policy'`;
            let sqlUserQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE id=${user_id} AND role_id=1`;
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
                });
                yield database.executeSql(sqlUserQuery, []).then((data2) => {
                    for (let i = 0; i < data2.rows.length; i++) {
                        let attribute_json = JSON.parse(data2.rows.item(i).user_picture);
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
                            updated_at: data2.rows.item(i).updated_at
                        });
                    }
                });
                return { policies: healthData, user_info: userData[0], qrcode_image: null };
            }));
        });
    }
    getHealthDeatails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //let user_id = await this.databaseService.getuserID(); 
            let sqlHealthQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_HEALTH_DETAILS"] + ` WHERE name='health'`;
            return this.databaseService.getDatabase().then((database) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                });
            }));
        });
    }
    getEmergencyDeatails() {
        let sqlEmergeQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_EMERGENCY_DATA"];
        let sqlUsersQuery = _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_SELECT_ALL_USERS"] + ` WHERE role_id=2`;
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
                    });
                }
            });
            yield database.executeSql(sqlUsersQuery, []).then((data1) => {
                for (let i = 0; i < data1.rows.length; i++) {
                    if (data1.rows.item(i).email != null) {
                        let attribute_json = JSON.parse(data1.rows.item(i).user_picture);
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
                            updated_at: data1.rows.item(i).updated_at
                        });
                    }
                }
            });
            return { caregiver_count: careGiverData.length, caregivers: careGiverData, emergency_contact_count: emergencyContacts.length, emergency_detail: emergencyContacts };
        }));
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
};
DataBaseSummaryProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"] }
];
DataBaseSummaryProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _database__WEBPACK_IMPORTED_MODULE_4__["DatabaseProvider"]])
], DataBaseSummaryProvider);



/***/ })

}]);
//# sourceMappingURL=default~appointments-appointments-module~doc-visits-doc-visits-module~health-diary-health-diary-modu~5524b6e2-es2015.js.map