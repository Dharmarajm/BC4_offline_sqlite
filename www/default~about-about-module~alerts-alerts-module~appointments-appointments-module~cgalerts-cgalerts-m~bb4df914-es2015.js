(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-m~bb4df914"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
const DATA_BASE_NAME = 'BCared4.db';
var user_type;
(function (user_type) {
    user_type[user_type["Emergency"] = 1] = "Emergency";
    user_type[user_type["Doctor"] = 2] = "Doctor";
    user_type[user_type["Care Giver"] = 3] = "Care Giver";
})(user_type || (user_type = {}));
let DatabaseProvider = class DatabaseProvider {
    constructor(sqlite, platform, syncProvide) {
        this.sqlite = sqlite;
        this.platform = platform;
        this.syncProvide = syncProvide;
        this.Oninit();
    }
    Oninit() {
        console.log('Oninit');
        //console.log(user_type[3])
        this.ready = this.platform.ready()
            .then(() => this.initializeDatabase())
            .then(() => this.bootstrapTables());
    }
    initializeDatabase() {
        console.log('initialize');
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            let sqlTable1 = `CREATE TABLE IF NOT EXISTS emergency_details(id INTEGER,emergency_id INTEGER PRIMARY KEY AUTOINCREMENT,contact_name TEXT DEFAULT NULL,emergency_no TEXT DEFAULT NULL,user_type TEXT,user_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)`;
            db.executeSql(sqlTable1, []);
            // .then((res)=>{
            //    console.log(res,'emergencysuccess')
            // }).catch(err=>{console.log(err,'emergencyerror')});
            let sqlTable2 = `CREATE TABLE IF NOT EXISTS enum_masters(id INTEGER,name TEXT,category_name TEXT,created_at DATETIME,updated_at DATETIME)`;
            db.executeSql(sqlTable2, []);
            let sqlTable4 = `CREATE TABLE IF NOT EXISTS health_details(id INTEGER,health_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,attribute_name_value TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME)`;
            db.executeSql(sqlTable4, []);
            let sqlTable5 = `CREATE TABLE IF NOT EXISTS users(id INTEGER,name TEXT,email TEXT,password TEXT DEFAULT NULL,mobile_no TEXT DEFAULT NULL,address TEXT DEFAULT NULL,country TEXT DEFAULT NULL,blood_group TEXT DEFAULT NULL,age INTEGER DEFAULT NULL,user_uid TEXT,forgot_password_code TEXT DEFAULT NULL,user_picture TEXT DEFAULT NULL,user_option TEXT DEFAULT NULL,active_status TEXT,role_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)`; //userRecord_id INTEGER PRIMARY KEY AUTOINCREMENT
            db.executeSql(sqlTable5, []);
            let sqlTable6 = `CREATE TABLE IF NOT EXISTS user_associations(id INTEGER,patient_id INTEGER,caregiver_id INTEGER,nick_name TEXT DEFAULT NULL,created_at DATETIME,updated_at DATETIME)`;
            db.executeSql(sqlTable6, []);
            let sqlTable3 = `CREATE TABLE IF NOT EXISTS events(id INTEGER,event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name TEXT,description TEXT,value TEXT DEFAULT NULL,event_datetime INTEGER,event_type TEXT,event_category TEXT,event_assets TEXT DEFAULT NULL,event_options TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)`;
            db.executeSql(sqlTable3, [])
                .then(() => {
                let sqlTableIndex = `CREATE INDEX IF NOT EXISTS event_index on events(event_type, event_datetime, created_at)`;
                db.executeSql(sqlTableIndex, []);
            });
        });
    }
    bootstrapTables() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('bootstrap');
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                return db.executeSql(`SELECT * FROM enum_masters`, []).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log('bootstrap1');
                    //   if(data.rows.length==0){
                    //    await this.getTotalEnumMasters(db);
                    //   }
                    //   let user_id = await this.getuserID();
                    //   if(user_id!=undefined){
                    //     await this.awaitAllUsersTableData(db);
                    //   }
                    yield this.syncProvide.initiateSync();
                }));
            });
        });
    }
    getDatabase() {
        return this.ready.then(() => {
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                return db;
            });
        });
    }
    createAnEvent(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `INSERT INTO events VALUES (NULL,NULL,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let createEventData = [data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], JSON.stringify(data["event_assets"]), JSON.stringify(data["event_options"]), user_id, new Date().toJSON(), new Date().toJSON(), false];
                return db.executeSql(sql, createEventData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    createAnVitalEvent(getData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //let user_id = await this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let event_type = getData['event_type'];
                let event_name = getData['event_name'];
                let event_datetime = getData['event_datetime'];
                let event_category = getData['event_category'];
                let sqlSearchEventQuery = `SELECT * FROM events WHERE (event_type='${event_type}' AND event_name='${event_name}' AND event_category='${event_category}' AND DATE(event_datetime)=DATE('${event_datetime}') AND delete1='false')`;
                return db.executeSql(sqlSearchEventQuery, []).then((data) => {
                    for (let i = 0; i < data.rows.length; i++) {
                    }
                    if (data.rows.length > 0) {
                        let passData = data.rows.item(0);
                        getData['id'] = passData['id'];
                        return this.updateAnEvent(passData['event_id'], getData);
                    }
                    else {
                        return this.createAnEvent(getData);
                    }
                }).catch(res => {
                });
            });
        });
    }
    updateAnEvent(id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `UPDATE events SET id = ?, event_name = ?, description = ?, value = ?, event_datetime = ?, event_type = ?, event_category = ?, event_assets = ?, event_options = ?, user_id = ?, created_at = ?, updated_at = ?, delete1 = ? WHERE event_id = ?`;
                let updateEventData = [data["id"], data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], JSON.stringify(data["event_assets"]), JSON.stringify(data["event_options"]), user_id, data["created_at"], new Date().toJSON(), false, id];
                return db.executeSql(sql, updateEventData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    updateAnEventImage(id, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `UPDATE events SET event_options = ? WHERE event_id = ?`;
                let updateEventImageData = [JSON.stringify(data["event_options"]), id];
                return db.executeSql(sql, updateEventImageData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    deleteAnEvent(event) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            if (event["id"] == null) {
                let sql = `DELETE FROM events WHERE event_id = ?`;
                return db.executeSql(sql, [event["event_id"]]).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            }
            else {
                let sql = `UPDATE events SET delete1 = ? WHERE event_id = ?`;
                return db.executeSql(sql, [true, event["event_id"]]).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            }
        });
    }
    updateUserAndPolicyData(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            let user_data = data['user'];
            let policy_data = data['policy'];
            policy_data["name"] = "policy";
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let sql = `UPDATE users SET age = ?, blood_group = ?, updated_at = ?  WHERE id = ? AND role_id = ?`;
                let updateUserData = [user_data['age'], user_data['blood_group'], new Date().toJSON(), user_id, 1];
                yield db.executeSql(sql, updateUserData);
                yield db.executeSql(`SELECT * FROM health_details WHERE name='${policy_data['name']}'`, []).then((data) => {
                    if (data.rows.length > 0) {
                        let id = data.rows.item(0).health_id;
                        return this.updateHealthData(policy_data, id);
                    }
                    else {
                        return this.updateHealthData(policy_data);
                    }
                }, error => {
                });
            }), error => {
            });
        });
    }
    updateUserData(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //let user_id = await this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `UPDATE users SET name = ?, email = ?, mobile_no = ?, updated_at = ? WHERE id = ? AND role_id = ?`;
                let updateUserData = [data['name'], data['email'], data['mobile_no'], new Date().toJSON(), data['id'], data['role_id']];
                db.executeSql(sql, updateUserData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    updateUserImage(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `UPDATE users SET user_picture = ? WHERE id = ?`;
                let updateEventImageData = [JSON.stringify(data), user_id];
                return db.executeSql(sql, updateEventImageData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    addPatient(value, patientAddData) {
        let data = value['user_uid'];
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            let sql = `SELECT * FROM users WHERE user_uid='${data}'`;
            return db.executeSql(sql, []).then((data) => {
                let length = data.rows.length;
                if (length == 0) {
                    let attribute_json = JSON.stringify(patientAddData["user_picture"]);
                    let user_option_json = JSON.parse(patientAddData['user_option']);
                    let data3 = [
                        patientAddData["id"],
                        patientAddData["name"],
                        patientAddData["email"],
                        patientAddData["password"],
                        patientAddData["mobile_no"],
                        patientAddData["address"],
                        patientAddData["country"],
                        patientAddData["blood_group"],
                        patientAddData["age"],
                        patientAddData["user_uid"],
                        patientAddData["forgot_password_code"],
                        attribute_json,
                        user_option_json,
                        patientAddData["active_status"],
                        patientAddData["role_id"],
                        patientAddData["created_at"],
                        patientAddData["updated_at"],
                        false
                    ];
                    let sqlData3 = `INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    return db.executeSql(sqlData3, data3).then(row => {
                        return { id: row.insertId };
                    }, error => {
                        return error;
                    });
                }
                else {
                    return;
                }
            });
        });
    }
    createEmergencyContacts(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                let sql = `INSERT INTO emergency_details VALUES (NULL,NULL,?,?,?,?,?,?,?)`;
                let createEventData = [data["contact_name"], data["emergency_no"], user_type[data["user_type"]], user_id, new Date().toJSON(), new Date().toJSON(), false];
                return db.executeSql(sql, createEventData).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    deleteEmergencyContact(event) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            //let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
            if (event["id"] == null) {
                let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
                return db.executeSql(sql, [event["emergency_id"]]).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            }
            else {
                let sql = `UPDATE emergency_details SET delete1 = ? WHERE emergency_id = ?`;
                return db.executeSql(sql, [true, event["emergency_id"]]).then((row) => {
                    return { event_id: row.insertId };
                }).catch(res => {
                    return res;
                });
            }
        });
    }
    deletePatientFromCareGiver(id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            let sql = `UPDATE users SET delete1 = ? WHERE id = ?`;
            return db.executeSql(sql, [true, id]).then((row) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let sql1 = `DELETE FROM events WHERE user_id = ?`;
                let createEventData1 = [id];
                yield db.executeSql(sql1, createEventData1);
                return { event_id: row.insertId };
            })).catch(res => {
                return res;
            });
        });
    }
    deleteCaregiverContact(id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            let sql = `UPDATE users SET delete1 = ? WHERE id = ?`;
            return db.executeSql(sql, [true, id]).then((row) => {
                return { event_id: row.insertId };
            }).catch(res => {
                return res;
            });
        });
    }
    updateHealthData(data, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user_id = yield this.getuserID();
            return this.sqlite.create({
                name: DATA_BASE_NAME,
                location: 'default'
            }).then((db) => {
                return db.executeSql(`SELECT * FROM health_details WHERE name='${data['name']}'`, []).then((getData) => {
                    let sqlQuery;
                    let healthData;
                    if (getData.rows.length > 0) {
                        sqlQuery = `UPDATE health_details SET id = ?, name = ?, attribute_name_value = ?, user_id = ?, created_at = ?, updated_at = ? WHERE health_id = ?`;
                        healthData = [data["id"], data["name"], JSON.stringify(data["attribute_name_value"]), user_id, data["created_at"], new Date().toJSON(), id];
                    }
                    else {
                        sqlQuery = `INSERT INTO health_details VALUES (NULL,NULL,?,?,?,?,?)`;
                        healthData = [data["name"], JSON.stringify(data["attribute_name_value"]), user_id, new Date().toJSON(), new Date().toJSON()];
                    }
                    return db.executeSql(sqlQuery, healthData).then((row) => {
                        return { event_id: row.insertId };
                    }).catch(res => {
                        return res;
                    });
                }).catch(res => {
                    return res;
                });
            });
        });
    }
    deleteDataFromTable() {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then((db) => {
            for (let i in _database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_TABLES"]) {
                let sql = `DELETE FROM ${_database_interface__WEBPACK_IMPORTED_MODULE_3__["SQL_TABLES"][i]}`;
                db.executeSql(sql, []);
            }
        });
    }
    getuserID() {
        let user_id = null;
        if (localStorage.getItem("user_id") != undefined) {
            user_id = localStorage.getItem("user_id");
            return user_id;
        }
        return user_id;
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
DatabaseProvider.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _sync_sync__WEBPACK_IMPORTED_MODULE_5__["syncProvider"] }
];
DatabaseProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _sync_sync__WEBPACK_IMPORTED_MODULE_5__["syncProvider"]])
], DatabaseProvider);



/***/ })

}]);
//# sourceMappingURL=default~about-about-module~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-m~bb4df914-es2015.js.map