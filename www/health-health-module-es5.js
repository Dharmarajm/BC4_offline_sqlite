(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-health-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/tab2/health/health.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/tab2/health/health.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-padding-start\">Update Health Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  \n  <form class=\"footerform\" [formGroup]=\"health\" *ngIf=\"health\" (ngSubmit)=\"save(health.value)\">\n    <ion-list>\n      <ion-item-group class=\"alergies\">\n        <ion-item>\n          <ion-label position=\"floating\">Allergies</ion-label>\n          <ion-input formControlName=\"allergies\" type=\"text\" #alergy_name></ion-input> \n          <!-- #alergy (keyup)=\"Input_alergy($event.target.value)\" -->\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label position=\"floating\">Allergies</ion-label>\n          <ion-input formControlName=\"allergies\" type=\"text\" #alergy_name (keyup)=\"Input_alergy($event.target.value)\"></ion-input>\n        </ion-item> -->\n        <!-- <ion-item button class=\"autocomplete\" (click)=\"alergyselect(data1)\" *ngIf=\"autopopulate && data1!=''\">\n          <ion-label color=\"primary\" class=\"select\">{{data1}}</ion-label>\n          <ion-note color=\"primary\" slot=\"end\">Select</ion-note>\n        </ion-item>\n        \n        <ion-chip #chip1 mode=\"md\" *ngFor=\"let ship of alergyChiptest; let i=index\">\n          <ion-label>{{ship}}</ion-label>\n          <ion-icon name=\"close\" (click)=\"deleteAlergyChip(i)\"></ion-icon>\n        </ion-chip> -->\n      </ion-item-group>\n      <ion-item>\n        <ion-label position=\"floating\">Heart Condition</ion-label>\n        <ion-select formControlName=\"heart_conditions\">\n          <ion-select-option value='Yes'>Yes</ion-select-option>\n          <ion-select-option value='No'>No</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf=\"health.value['heart_conditions']=='Yes'\">\n      <ion-label position=\"floating\">PaceMacker</ion-label>\n      <ion-select formControlName=\"pacemaker\">\n        <ion-select-option value='Yes'>Yes</ion-select-option>\n        <ion-select-option value='No'>No</ion-select-option>\n      </ion-select>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Diabetes</ion-label>\n        <ion-select formControlName=\"diabetes\">\n          <ion-select-option value='Yes'>Yes</ion-select-option>\n          <ion-select-option value='No'>No</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf=\"health.value['diabetes']=='Yes'\">\n        <ion-label position=\"floating\">Diabetes Medication through</ion-label>\n        <ion-select formControlName=\"diabetes_medication\">\n          <ion-select-option *ngFor=\"let diabetes of diabetes_medications\" [value]=\"diabetes\">{{diabetes}}</ion-select-option>\n          \n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Blood Pressure</ion-label>\n        <ion-select formControlName=\"bloodpressure\">\n          <ion-select-option value='High'>High</ion-select-option>\n          <ion-select-option value='Normal'>Normal</ion-select-option>\n          <ion-select-option value='Low'>Low</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Implant</ion-label>\n        <ion-input maxlength=\"25\" formControlName=\"implant\" type=\"text\" #alergy></ion-input>\n      </ion-item>\n      <p>{{'Only 25 characters allowed' | translate}}</p>\n      <ion-item>\n        <ion-label position=\"floating\">Cancer</ion-label>\n        <ion-select formControlName=\"cancer\">\n          <ion-select-option value='Yes'>Yes</ion-select-option>\n          <ion-select-option value='No'>No</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item-group class=\"medication\">\n        <ion-item>\n          <ion-label position=\"floating\">Current Medication</ion-label>\n          <ion-input formControlName=\"curent_medication\" type=\"text\" #medication></ion-input>\n        </ion-item>\n        <!-- <ion-item button class=\"autocomplete\" (click)=\"medication_select(medication_name)\" *ngIf=\"autopopulate2 && medication_name!=''\">\n          <ion-label color=\"primary\" class=\"select\">{{medication_name}}</ion-label>\n          <ion-note color=\"primary\" slot=\"end\">Select</ion-note>\n        </ion-item>\n        <ion-chip #chip mode=\"md\" *ngFor=\"let medication of medicationChiptest; let i=index\">\n          <ion-label>{{medication}}</ion-label>\n          <ion-icon name=\"close\" (click)=\"deleteMedicationChip(i)\"></ion-icon>\n        </ion-chip> -->\n      </ion-item-group>\n      <ion-item>\n        <ion-label position=\"floating\">Recent Surgeries</ion-label>\n        <ion-textarea formControlName=\"recent_surgeries\"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <div class=\"footer\">\n      <ion-button expand=\"block\" (click)=\"close()\">\n        Cancel\n      </ion-button>\n      <button color=\"secondary\" class=\"btn_submit\">\n        Save\n      </button>\n    </div>\n  </form>\n</ion-content>\n\n\n\n<!-- <ion-footer>\n    <ion-button>Cancel</ion-button>\n    <ion-button (click)=\"save()\">Save</ion-button>\n  </ion-toolbar>\n</ion-footer> -->"

/***/ }),

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

/***/ "./src/app/self-care/tab2/health/health.module.ts":
/*!********************************************************!*\
  !*** ./src/app/self-care/tab2/health/health.module.ts ***!
  \********************************************************/
/*! exports provided: HealthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthPageModule", function() { return HealthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _health_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health.page */ "./src/app/self-care/tab2/health/health.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");










var routes = [
    {
        path: '',
        component: _health_page__WEBPACK_IMPORTED_MODULE_6__["HealthPage"]
    }
];
var HealthPageModule = /** @class */ (function () {
    function HealthPageModule() {
    }
    HealthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_health_page__WEBPACK_IMPORTED_MODULE_6__["HealthPage"]],
            providers: [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"]]
        })
    ], HealthPageModule);
    return HealthPageModule;
}());



/***/ }),

/***/ "./src/app/self-care/tab2/health/health.page.scss":
/*!********************************************************!*\
  !*** ./src/app/self-care/tab2/health/health.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  ion-list ion-item.icon {\n    --padding-end: 40px;\n    overflow: visible; }\n  ion-list ion-item ion-label:not(.select) {\n    --color: #bcbbcf; }\n  ion-list ion-item p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n  ion-list ion-item-group {\n  margin-bottom: 10px; }\n  ion-list ion-item-group ion-item:first-child {\n    margin-bottom: 0; }\n  ion-list ion-item-group ion-item:last-child {\n    --border-width: 0 0 1px; }\n  ion-list ion-item-group ion-item.autocomplete {\n    --border-width: 0 !important;\n    --border-style: unset;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n    --padding-start: 16px !important; }\n  ion-chip {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  padding: 5px 15px;\n  height: 24px;\n  margin: 10px 4px; }\n  ion-chip ion-icon {\n    font-size: 14px; }\n  form p {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-top: 0px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL3RhYjIvaGVhbHRoL2hlYWx0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRBO0VBeEJJLGlCQTJCc0I7RUExQnRCLGdCQTBCMkI7RUF4QjdCLGlCQXdCZ0M7RUF2QmhDLDBCQXVCNEM7RUF0QjVDLGdCQXNCa0Q7RUFyQmxELG9CQXFCMkQ7RUFwQjNELGNBb0JvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBMUNFLG9CQWdEb0I7RUFoRHBCLGFBZ0RvQjtFQS9DcEIsaUJBK0M0QjtFQTlDNUIseUJBOENvQztVQTlDcEMsbUJBOENvQztFQTdDcEMsdUJBNkMyQztVQTdDM0Msc0JBNkMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTNESSxlQTZFb0I7SUE1RXBCLGdCQTRFeUI7SUExRTNCLGlCQTBFOEI7SUF6RTlCLDBCQXlFMEM7SUF4RTFDLGtCQXdFa0Q7SUF2RWxELG9CQXVFMkQ7SUF0RTNELGNBc0VvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJQWlD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LCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcbiRteS1ncmV5LWJsdWUgOiAjZWE0ZTRlO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodCwgJGxldHRlciwgJHRyYW5zZm9ybSwgJGFsaWduLCAkbGluZV9oZWlnaHQsICRmbl9jb2xvcikge1xuICBmb250OiB7XG4gICAgc2l6ZTogJHNpemU7XG4gICAgd2VpZ2h0OiAkd2VpZ2h0O1xuICB9XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgdGV4dC1hbGlnbjogJGFsaWduO1xuICBsaW5lLWhlaWdodDogJGxpbmVfaGVpZ2h0O1xuICBjb2xvcjogJGZuX2NvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR3aWR0aCwgJHN0eWxlLCAkYnJjb2xvcikge1xuICBib3JkZXItd2lkdGg6ICR3aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3R5bGU7XG4gIGJvcmRlci1jb2xvcjogJGJyY29sb3I7XG59XG5cbkBtaXhpbiBmbGV4KCRmbGV4LCAkd3JhcCwgJGFsaWduLCAkanVzdGlmeSkge1xuICBkaXNwbGF5OiAkZmxleDtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbn1cblxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICAvLyBpb24taXRlbXtcbiAgLy8gICBpb24tbGFiZWx7XG4gIC8vICAgICAtLWNvbG9yOiAjN2I3YjdiO1xuICAvLyAgIH1cbiAgLy8gfVxuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzFjMWMxYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGRjNjg7XG4gICAgICBwYWRkaW5nOiAxcHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAmLmljb24ge1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWw6bm90KC5zZWxlY3QpIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIG5vbmUsIGluaGVyaXQsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1pdGVte1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAxcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYXV0b2NvbXBsZXRlIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiB1bnNldDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNoaXAge1xyXG4gIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDRweDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuZm9ybXtcclxuICBwIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC43NXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/self-care/tab2/health/health.page.ts":
/*!******************************************************!*\
  !*** ./src/app/self-care/tab2/health/health.page.ts ***!
  \******************************************************/
/*! exports provided: HealthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthPage", function() { return HealthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");









var HealthPage = /** @class */ (function () {
    function HealthPage(alertController, toast, router, route, fb, service, toastController, changeRef, database) {
        var _this = this;
        this.alertController = alertController;
        this.toast = toast;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.toastController = toastController;
        this.changeRef = changeRef;
        this.database = database;
        this.autopopulate = false;
        this.autopopulate2 = false;
        this.medicationChiptest = [];
        this.alergyChiptest = [];
        this.diabetes_medications = ["Insulin", "Tablets"];
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.route.queryParams.subscribe(function (params) {
            console.log(JSON.parse(params['special']));
            console.log(JSON.parse(params['data']));
            _this.allHealthData = JSON.parse(params['special']);
            _this.getAllIds = JSON.parse(params['data']);
            // this.medicationChiptest = this.allHealthData['current_medication'] || [];
            // this.alergyChiptest = this.allHealthData['allergy'] || [];
            // if(this.allHealthData['current_medication']==undefined){
            //    this.medicationChiptest=[];
            // }else if(this.allHealthData['current_medication']==undefined){
            //    this.alergyChiptest=[];   
            // }
        });
    }
    HealthPage.prototype.ngOnInit = function () {
        this.changeRef.detectChanges();
        var heart_condition;
        var pacemaker;
        if (this.allHealthData['heart_condition'] == 'Pacemaker') {
            heart_condition = 'Yes';
            pacemaker = 'Yes';
        }
        else if (this.allHealthData['heart_condition'] == 'Tablets') {
            heart_condition = 'Yes';
            pacemaker = 'No';
        }
        else {
            heart_condition = 'No';
            pacemaker = 'No';
        }
        var diabetes;
        var diabetes_through;
        if (this.allHealthData['diabetes'] == 'Insulin') {
            diabetes = 'Yes';
            diabetes_through = 'Insulin';
        }
        else if (this.allHealthData['diabetes'] == 'Tablets') {
            diabetes = 'Yes';
            diabetes_through = 'Tablets';
        }
        else {
            diabetes = 'No';
            diabetes_through = 'Insulin';
        }
        this.health = this.fb.group({
            "allergies": [this.allHealthData['allergy']],
            "heart_conditions": [heart_condition],
            "pacemaker": [pacemaker],
            "diabetes": [diabetes],
            "diabetes_medication": [diabetes_through],
            "bloodpressure": [this.allHealthData['blood_pressure'] || 'Normal'],
            "implant": [this.allHealthData['implants'] || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            "cancer": [this.allHealthData['cancer'] || 'No'],
            "curent_medication": [this.allHealthData['current_medication']],
            "recent_surgeries": [this.allHealthData['recent_surgeries'] || '']
        });
        //this.alergies_input.setFocus();
    };
    HealthPage.prototype.ionViewDidEnter = function () {
        //this.alergies_input.setFocus();
    };
    HealthPage.prototype.save = function (val) {
        var heart_conditions = "No";
        if (val["heart_conditions"] == "Yes") {
            heart_conditions = "Yes";
            if (val["pacemaker"] == "Yes") {
                heart_conditions = "Pacemaker";
            }
        }
        else {
            heart_conditions = "No";
        }
        var diabetes = "No";
        if (val["diabetes"] == "Yes") {
            diabetes = "Yes";
            if (val["diabetes_medication"] == "Insulin") {
                diabetes = "Insulin";
            }
            else if (val["diabetes_medication"] == "Tablets") {
                diabetes = "Tablets";
            }
        }
        else {
            diabetes = "No";
        }
        var id = null;
        var created_at = null;
        if (this.getAllIds != null) {
            id = this.getAllIds['id'];
            created_at = this.getAllIds['created_at'];
        }
        var data = {
            "id": id,
            "attribute_name_value": {
                "allergy": val["allergies"],
                "heart_condition": heart_conditions,
                "diabetes": diabetes,
                "blood_pressure": val["bloodpressure"],
                "implants": val["implant"],
                "cancer": val["cancer"],
                "current_medication": val["curent_medication"],
                "recent_surgeries": val["recent_surgeries"]
            },
            "name": "health",
            "created_at": created_at
        };
        this.addconfirmation(data);
    };
    HealthPage.prototype.addconfirmation = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(data);
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Health',
                                message: 'Are you sure to submit?',
                                mode: 'md',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Edit'
                                    },
                                    {
                                        text: 'Submit',
                                        role: 'submit',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // this.service.myEmergencyHealthUpdate(data).subscribe(res=>{
                                            //   this.presentToast('Health data updated successfully')
                                            //   this.router.navigate(['self-care-tabs/tabs/tab2'],{skipLocationChange: true })
                                            // },error=>{
                                            // })
                                            var primary_id = null;
                                            if (_this.getAllIds != null) {
                                                primary_id = _this.getAllIds['health_id'];
                                            }
                                            _this.database.updateHealthData(data, primary_id).then(function (res) {
                                                console.log(data, primary_id);
                                                console.log(res);
                                                _this.presentToast('Health data updated successfully');
                                                _this.router.navigate(['self-care-tabs/tabs/tab2'], { skipLocationChange: true });
                                            }).catch(function (err) { console.log(err); });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        _a.add_alert = _b.sent();
                        return [4 /*yield*/, this.add_alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HealthPage.prototype.medication_select = function (val) {
        console.log(val);
        this.medicationChiptest.push(val);
        this.health.value["curent_medication"] = "";
        this.medication_input.value = "";
        this.medication_input.setFocus();
        this.autopopulate2 = false;
    };
    HealthPage.prototype.alergyselect = function (val) {
        console.log(val);
        this.alergyChiptest.push(val);
        this.health.value["allergies"] = "";
        this.alergies_input.value = "";
        this.alergies_input.setFocus();
        this.autopopulate = false;
    };
    HealthPage.prototype.Input_medication = function (value) {
        this.medication_name = value;
        this.autopopulate2 = true;
    };
    HealthPage.prototype.Input_alergy = function (value) {
        this.data1 = value;
        this.autopopulate = true;
    };
    HealthPage.prototype.deleteMedicationChip = function (index) {
        this.medicationChiptest.splice(index, 1);
    };
    HealthPage.prototype.deleteAlergyChip = function (index) {
        this.alergyChiptest.splice(index, 1);
    };
    HealthPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    HealthPage.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
    };
    HealthPage.prototype.close = function () {
        this.router.navigate(['self-care-tabs/tabs/tab2'], { skipLocationChange: true });
    };
    HealthPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('medication', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HealthPage.prototype, "medication_input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alergy_name', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HealthPage.prototype, "alergies_input", void 0);
    HealthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-health',
            template: __webpack_require__(/*! raw-loader!./health.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/tab2/health/health.page.html"),
            styles: [__webpack_require__(/*! ./health.page.scss */ "./src/app/self-care/tab2/health/health.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"]])
    ], HealthPage);
    return HealthPage;
}());



/***/ })

}]);
//# sourceMappingURL=health-health-module-es5.js.map