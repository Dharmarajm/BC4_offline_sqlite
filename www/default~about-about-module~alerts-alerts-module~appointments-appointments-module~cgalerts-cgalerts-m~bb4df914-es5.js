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
        console.log('initialize');
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sqlTable1 = "CREATE TABLE IF NOT EXISTS emergency_details(id INTEGER,emergency_id INTEGER PRIMARY KEY AUTOINCREMENT,contact_name TEXT DEFAULT NULL,emergency_no TEXT DEFAULT NULL,user_type TEXT,user_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)";
            db.executeSql(sqlTable1, []);
            // .then((res)=>{
            //    console.log(res,'emergencysuccess')
            // }).catch(err=>{console.log(err,'emergencyerror')});
            var sqlTable2 = "CREATE TABLE IF NOT EXISTS enum_masters(id INTEGER,name TEXT,category_name TEXT,created_at DATETIME,updated_at DATETIME)";
            db.executeSql(sqlTable2, []);
            var sqlTable4 = "CREATE TABLE IF NOT EXISTS health_details(id INTEGER,health_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,attribute_name_value TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME)";
            db.executeSql(sqlTable4, []);
            var sqlTable5 = "CREATE TABLE IF NOT EXISTS users(id INTEGER,name TEXT,email TEXT,password TEXT DEFAULT NULL,mobile_no TEXT DEFAULT NULL,address TEXT DEFAULT NULL,country TEXT DEFAULT NULL,blood_group TEXT DEFAULT NULL,age INTEGER DEFAULT NULL,user_uid TEXT,forgot_password_code TEXT DEFAULT NULL,user_picture TEXT DEFAULT NULL,user_option TEXT DEFAULT NULL,active_status TEXT,role_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)"; //userRecord_id INTEGER PRIMARY KEY AUTOINCREMENT
            db.executeSql(sqlTable5, []);
            var sqlTable6 = "CREATE TABLE IF NOT EXISTS user_associations(id INTEGER,patient_id INTEGER,caregiver_id INTEGER,nick_name TEXT DEFAULT NULL,created_at DATETIME,updated_at DATETIME)";
            db.executeSql(sqlTable6, []);
            var sqlTable3 = "CREATE TABLE IF NOT EXISTS events(id INTEGER,event_id INTEGER PRIMARY KEY AUTOINCREMENT,event_name TEXT,description TEXT,value TEXT DEFAULT NULL,event_datetime INTEGER,event_type TEXT,event_category TEXT,event_assets TEXT DEFAULT NULL,event_options TEXT DEFAULT NULL,user_id INTEGER,created_at DATETIME,updated_at DATETIME,delete1 BOOLEAN)";
            db.executeSql(sqlTable3, [])
                .then(function () {
                var sqlTableIndex = "CREATE INDEX IF NOT EXISTS event_index on events(event_type, event_datetime, created_at)";
                db.executeSql(sqlTableIndex, []);
            });
        });
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
                                var createEventData = [data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], JSON.stringify(data["event_assets"]), JSON.stringify(data["event_options"]), user_id, new Date().toJSON(), new Date().toJSON(), false];
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
    DatabaseProvider.prototype.createAnVitalEvent = function (getData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //let user_id = await this.getuserID();
                return [2 /*return*/, this.sqlite.create({
                        name: DATA_BASE_NAME,
                        location: 'default'
                    }).then(function (db) {
                        var event_type = getData['event_type'];
                        var event_name = getData['event_name'];
                        var event_datetime = getData['event_datetime'];
                        var event_category = getData['event_category'];
                        var sqlSearchEventQuery = "SELECT * FROM events WHERE (event_type='" + event_type + "' AND event_name='" + event_name + "' AND event_category='" + event_category + "' AND DATE(event_datetime)=DATE('" + event_datetime + "') AND delete1='false')";
                        return db.executeSql(sqlSearchEventQuery, []).then(function (data) {
                            console.log(data);
                            for (var i = 0; i < data.rows.length; i++) {
                                console.log(data.rows.item(i));
                            }
                            if (data.rows.length > 0) {
                                var passData = data.rows.item(0);
                                getData['id'] = passData['id'];
                                return _this.updateAnEvent(passData['event_id'], getData);
                            }
                            else {
                                console.log(getData);
                                return _this.createAnEvent(getData);
                            }
                        }).catch(function (res) {
                            console.log(res);
                        });
                    })];
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
                                var sql = "UPDATE events SET id = ?, event_name = ?, description = ?, value = ?, event_datetime = ?, event_type = ?, event_category = ?, event_assets = ?, event_options = ?, user_id = ?, created_at = ?, updated_at = ?, delete1 = ? WHERE event_id = ?";
                                var updateEventData = [data["id"], data["event_name"], data["description"], data["value"], data["event_datetime"], data["event_type"], data["event_category"], JSON.stringify(data["event_assets"]), JSON.stringify(data["event_options"]), user_id, data["created_at"], new Date().toJSON(), false, id];
                                console.log(data);
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
    DatabaseProvider.prototype.deleteAnEvent = function (event) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            if (event["id"] == null) {
                var sql = "DELETE FROM events WHERE event_id = ?";
                return db.executeSql(sql, [event["event_id"]]).then(function (row) {
                    return { event_id: row.insertId };
                }).catch(function (res) {
                    return res;
                });
            }
            else {
                var sql = "UPDATE events SET delete1 = ? WHERE event_id = ?";
                return db.executeSql(sql, [true, event["event_id"]]).then(function (row) {
                    return { event_id: row.insertId };
                }).catch(function (res) {
                    return res;
                });
            }
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
                                            sql = "UPDATE users SET age = ?, blood_group = ?, updated_at = ?  WHERE id = ? AND role_id = ?";
                                            updateUserData = [user_data['age'], user_data['blood_group'], new Date().toJSON(), user_id, 1];
                                            return [4 /*yield*/, db.executeSql(sql, updateUserData)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, db.executeSql("SELECT * FROM health_details WHERE name='" + policy_data['name'] + "'", []).then(function (data) {
                                                    console.log(data);
                                                    if (data.rows.length > 0) {
                                                        var id = data.rows.item(0).health_id;
                                                        console.log(policy_data, id);
                                                        return _this.updateHealthData(policy_data, id);
                                                    }
                                                    else {
                                                        console.log(policy_data);
                                                        return _this.updateHealthData(policy_data);
                                                    }
                                                }, function (error) {
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //let user_id = await this.getuserID();
                return [2 /*return*/, this.sqlite.create({
                        name: DATA_BASE_NAME,
                        location: 'default'
                    }).then(function (db) {
                        var sql = "UPDATE users SET name = ?, email = ?, mobile_no = ?, updated_at = ? WHERE id = ? AND role_id = ?";
                        var updateUserData = [data['name'], data['email'], data['mobile_no'], new Date().toJSON(), data['id'], data['role_id']];
                        db.executeSql(sql, updateUserData).then(function (row) {
                            return { event_id: row.insertId };
                        }).catch(function (res) {
                            return res;
                        });
                    })];
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
    DatabaseProvider.prototype.deleteEmergencyContact = function (event) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            //let sql = `DELETE FROM emergency_details WHERE emergency_id = ?`;
            if (event["id"] == null) {
                var sql = "DELETE FROM emergency_details WHERE emergency_id = ?";
                return db.executeSql(sql, [event["emergency_id"]]).then(function (row) {
                    return { event_id: row.insertId };
                }).catch(function (res) {
                    return res;
                });
            }
            else {
                var sql = "UPDATE emergency_details SET delete1 = ? WHERE emergency_id = ?";
                return db.executeSql(sql, [true, event["emergency_id"]]).then(function (row) {
                    return { event_id: row.insertId };
                }).catch(function (res) {
                    return res;
                });
            }
        });
    };
    DatabaseProvider.prototype.deletePatientFromCareGiver = function (id) {
        var _this = this;
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sql = "UPDATE users SET delete1 = ? WHERE id = ?";
            return db.executeSql(sql, [true, id]).then(function (row) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var sql1, createEventData1;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sql1 = "DELETE FROM events WHERE user_id = ?";
                            createEventData1 = [id];
                            return [4 /*yield*/, db.executeSql(sql1, createEventData1)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { event_id: row.insertId }];
                    }
                });
            }); }).catch(function (res) {
                return res;
            });
        });
    };
    DatabaseProvider.prototype.deleteCaregiverContact = function (id) {
        return this.sqlite.create({
            name: DATA_BASE_NAME,
            location: 'default'
        }).then(function (db) {
            var sql = "UPDATE users SET delete1 = ? WHERE id = ?";
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
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getuserID()];
                    case 1:
                        user_id = _a.sent();
                        return [2 /*return*/, this.sqlite.create({
                                name: DATA_BASE_NAME,
                                location: 'default'
                            }).then(function (db) {
                                return db.executeSql("SELECT * FROM health_details WHERE name='" + data['name'] + "'", []).then(function (getData) {
                                    var sqlQuery;
                                    var healthData;
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
                                    return db.executeSql(sqlQuery, healthData).then(function (row) {
                                        console.log(row);
                                        return { event_id: row.insertId };
                                    }).catch(function (res) {
                                        console.log(res);
                                        return res;
                                    });
                                }).catch(function (res) {
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
    DatabaseProvider.prototype.getProfileID = function () {
        var profile_id = null;
        if (localStorage.getItem("profile_id") != undefined) {
            profile_id = localStorage.getItem("profile_id");
            return profile_id;
        }
        return profile_id;
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
//# sourceMappingURL=default~about-about-module~alerts-alerts-module~appointments-appointments-module~cgalerts-cgalerts-m~bb4df914-es5.js.map