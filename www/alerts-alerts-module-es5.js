(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alerts-alerts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-general/add-general.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/add-general/add-general.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Add General Alert</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <form [formGroup]=\"other_alert_form\" *ngIf=\"other_alert_form\" (ngSubmit)=\"validateBeforeSubmit(other_alert_form.value)\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n        <ion-row >    \r\n          <ion-col size=\"6\">\r\n            <div class=\"date_filter\">\r\n              <h1>Time</h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_time.invalid,'ion-touched': submitted && f.event_time.invalid }\">\r\n              <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\" placeholder=\"--:--\"></ion-datetime>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\"><g transform=\"translate(0.25 0.25)\"><path d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\" transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\" transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\" transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\" transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/></g></svg>\r\n          </ion-item>\r\n        </div>          \r\n      </ion-col>       \r\n      <ion-col size=\"6\">\r\n        <div class=\"date_filter\">\r\n          <h1>Date</h1>\r\n          <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_datetime.invalid,'ion-touched': submitted && f.event_datetime.invalid }\">\r\n            <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\" placeholder=\"-- --- ----\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n        \r\n        <ion-grid>\r\n          <ion-row class=\"repeat\">\r\n            <ion-col size=\"6\">\r\n              <ion-item button>\r\n                <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n                <ion-label>Repeat</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4\" offset=\"2\" *ngIf=\"other_alert_form.value.remainder_repeat==true\">\r\n              <ion-item>\r\n                <ion-label>Choose Repeat</ion-label>\r\n                <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n                    <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                    <ion-select-option  value=\"others\">Others</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_days\" *ngIf=\"other_alert_form.value.repeat_category=='days' && other_alert_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let days of repeatOrder[0][other_alert_form.value.repeat_category]\">\r\n              <ion-item button>\r\n                <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n                <ion-label>{{days.day}}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_others\" *ngIf=\"other_alert_form.value.repeat_category=='others' && other_alert_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let others of repeatOrder[0][other_alert_form.value.repeat_category]\">\r\n              <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n                <ion-item button>\r\n                  <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                  <ion-label>{{others.day}}</ion-label>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <!-- <label>\r\n            <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n            Repeat\r\n        </label>   -->\r\n        \r\n        <!-- <ion-item *ngIf=\"addform.value.remainder_repeat==false\">\r\n            <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n                <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                <ion-select-option  value=\"others\">Others</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>{{showoptions['days']}}\r\n        <ion-item *ngIf=\"addform.value.event_category=='days'\">\r\n            <span *ngFor=\"let day of showoptions[0]['days']\"></span>\r\n            <p>{{day}}</p>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"addform.value.event_category=='others'\">\r\n            <span *ngFor=\"let other of showoptions[0]['others']\"></span>\r\n            <p>{{other}}</p>\r\n        </ion-item> -->\r\n        <!-- <ion-grid class=\"date_grid\">\r\n            <ion-row>\r\n             <ion-col size=\"6\">\r\n                \r\n                <ion-label>Before Meal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"meal\"></ion-radio>\r\n                </ion-item>\r\n             </ion-col>\r\n             <ion-col size=\"6\">\r\n                 <ion-item>\r\n                    <ion-label>After Meal</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"meal\" checked></ion-radio>     \r\n                 </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n        </ion-grid> -->\r\n        <!-- <ion-item *ngIf=\"other_alert_form.value.remainder_repeat==true\">\r\n          <ion-label position=\"floating\">Choose Repeat</ion-label>\r\n          <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n              <ion-select-option  value=\"days\">Days</ion-select-option>\r\n              <ion-select-option  value=\"others\">Others</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>  -->\r\n        <!-- <label *ngIf=\"other_alert_form.value.repeat_category=='days' && other_alert_form.value.remainder_repeat==true\">\r\n            <p *ngFor=\"let days of repeatOrder[0][other_alert_form.value.repeat_category]\">\r\n            {{days.day}}\r\n            <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n            &nbsp;</p>\r\n        </label> -->\r\n        <!-- <label *ngIf=\"other_alert_form.value.repeat_category=='others' && other_alert_form.value.remainder_repeat==true\">        \r\n              \r\n              <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n                <ion-item *ngFor=\"let others of repeatOrder[0][other_alert_form.value.repeat_category]\">\r\n                  <ion-label>{{others.day}}</ion-label>\r\n                  <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n        </label> -->\r\n        <ion-radio-group formControlName=\"meal\" [value]=\"initialMeal\">\r\n          <ion-item>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"before_meal\"></ion-radio>\r\n            <ion-label>Before Meal</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"after_meal\"></ion-radio>\r\n            <ion-label>After Meal</ion-label>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        \r\n        <ion-item\r\n          [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n          <ion-label position=\"floating\">General alert</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n        </ion-item>\r\n      <div class=\"footer\">\r\n        <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\"> \r\n          Cancel\r\n        </ion-button>\r\n        <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-medications/add-medications.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/add-medications/add-medications.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Add Medication Alert</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n\r\n<ion-content  class=\"ion-padding\">\r\n  <form class=\"footerform\" [formGroup]=\"addform\" *ngIf=addform (ngSubmit)=\"addDeatils(addform.value)\">\r\n      <ion-card button (click)=\"AddImage()\" *ngIf=\"store_photos.length==0\" class=\"medic_img ion-no-margin ion-margin-top ion-margin-bottom\">\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\r\n            <p>Add Medication Photos</p>\r\n          </ion-card-content>\r\n      </ion-card>\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom medic_img\" *ngIf=\"store_photos.length!=0\">\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let file of store_photos; let i=index\">\r\n          <ion-card class=\"has_image\">\r\n            <ion-card-content>\r\n              <img [src]=\"file\">\r\n            </ion-card-content>\r\n            <ion-button color=\"tertiary\" (click)=\"removeImage(i)\">\r\n              <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card button (click)=\"AddImage()\">\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\">\r\n                <g transform=\"translate(0.5 -5.5)\">\r\n                  <path\r\n                    d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\"\r\n                    transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                  <path\r\n                    d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\"\r\n                    transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                  <path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\"\r\n                    transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                </g>\r\n              </svg>\r\n              <p>Add More</p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row >    \r\n        <ion-col size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <h1>Time1</h1>\r\n         <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_time.invalid,'ion-touched': submitted && f.event_time.invalid }\">\r\n          <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\"  placeholder=\"--:--\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n            <g transform=\"translate(0.25 0.25)\">\r\n              <path\r\n                d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n            </g>\r\n          </svg>\r\n        </ion-item>\r\n        <h6>(Set Time)</h6>\r\n      </div>          \r\n    </ion-col>       \r\n    <ion-col size=\"6\">\r\n      <div class=\"date_filter\">\r\n        <h1>Date</h1>\r\n        <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_datetime.invalid,'ion-touched': submitted && f.event_datetime.invalid }\">\r\n          <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\" placeholder=\"-- --- ----\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\">\r\n            <path\r\n              d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\"\r\n              fill=\"#ea4e4e\" />\r\n            <g transform=\"translate(3.117 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(16.242 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(3.117 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(3.117 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(16.242 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n              </svg>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div *ngIf=\"addform.value.time_repeat==true\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n          <ion-row >    \r\n              <ion-col size=\"6\">\r\n                <div class=\"date_filter\">\r\n                  <h1>Time2</h1>\r\n               <ion-item >\r\n                <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time1\"  placeholder=\"--:--\"></ion-datetime>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n                  <g transform=\"translate(0.25 0.25)\">\r\n                    <path\r\n                      d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                      transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                      transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                      transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                      transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                  </g>\r\n                </svg>\r\n              </ion-item>\r\n              <h6>(Set Time)</h6>\r\n            </div>          \r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n              <div class=\"date_filter\">\r\n                <h1>Time3</h1>\r\n             <ion-item >\r\n              <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time2\"  placeholder=\"--:--\"></ion-datetime>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n                <g transform=\"translate(0.25 0.25)\">\r\n                  <path\r\n                    d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                    transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                  <path\r\n                    d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                    transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                  <path\r\n                    d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                    transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                  <path\r\n                    d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                    transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                </g>\r\n              </svg>\r\n            </ion-item>\r\n            <h6>(Set Time)</h6>\r\n          </div>          \r\n        </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  \r\n      <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n        <ion-row >    \r\n          <ion-col size=\"6\">\r\n            <div class=\"date_filter\">\r\n              <h1>Time4</h1>\r\n           <ion-item>\r\n            <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time3\"  placeholder=\"--:--\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n              <g transform=\"translate(0.25 0.25)\">\r\n                <path\r\n                  d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                  transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                <path\r\n                  d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                  transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                <path\r\n                  d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                  transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                <path\r\n                  d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                  transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              </g>\r\n            </svg>\r\n          </ion-item>\r\n          <h6>(Set Time)</h6>\r\n        </div>          \r\n      </ion-col>    \r\n      </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <ion-grid>\r\n      <ion-row class=\"repeat\">\r\n        <ion-col size=\"6\">\r\n          <ion-item button>\r\n            <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)=\"repeatCheck($event)\"></ion-checkbox>\r\n            <ion-label>Repeat</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\" offset=\"2\" *ngIf=\"addform.value.remainder_repeat==true\">\r\n          <ion-item>\r\n            <ion-label>Change to Select</ion-label>\r\n            <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\"\r\n              (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n              <ion-select-option  value=\"others\">Schedule As</ion-select-option>\r\n              <ion-select-option  value=\"days\">Specific Days</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"repeat_days\" *ngIf=\"addform.value.event_category=='days' && addform.value.remainder_repeat==true\">\r\n        <ion-col *ngFor=\"let days of repeatOrder[0][addform.value.event_category]\">\r\n          <ion-item button>\r\n            <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n            <ion-label>{{days.day}}</ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row >\r\n      <ion-note *ngIf=\"addform.value.event_category=='days' && addform.value.remainder_repeat==true\"><span>Note:</span>&nbsp;Selecct Days of Week by clicking on text</ion-note>\r\n\r\n      <ion-row class=\"repeat_others\" *ngIf=\"addform.value.event_category=='others' && addform.value.remainder_repeat==true\">\r\n        <ion-col *ngFor=\"let others of repeatOrder[0][addform.value.event_category]\">\r\n          <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n            <ion-item button>\r\n              <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n              <ion-label class=\"label_text\">{{others.day}}</ion-label>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n      </ion-row>\r\n       <ion-note *ngIf=\"addform.value.event_category=='others' && addform.value.remainder_repeat==true\"><span>Note:</span>&nbsp;Change schedule by clicking on text above</ion-note> \r\n\r\n    </ion-grid>\r\n    \r\n\r\n    <ion-radio-group formControlName=\"meals\" [value]=\"initialMeal\">\r\n      <ion-item>\r\n        <ion-radio type=\"radio\" value=\"before_meal\"></ion-radio>\r\n        <ion-label>Before Meal</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-radio type=\"radio\" value=\"after_meal\"></ion-radio>\r\n        <ion-label>After Meal</ion-label>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n\r\n    <ion-item\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.medicine_type.invalid,'ion-touched': submitted && f.medicine_type.invalid }\">\r\n      <ion-label position=\"floating\">Tablet/Syrup/Injection</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"medicine_type\" (ionChange)=\"valueSet($event)\">\r\n        <ion-select-option *ngFor=\"let medicine of medicine_option\" [value]=\"medicine\">{{medicine}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"addform.value.medicine_type ==='Tablet'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.quantity.invalid,'ion-touched': submitted && f.quantity.invalid }\">\r\n      <ion-label position=\"floating\">Add Quantity In Hand</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"quantity\" (keypress)=\"_keyPress($event)\"></ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"addform.value.medicine_type=='Tablet'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.dossage.invalid,'ion-touched': submitted && f.dossage.invalid }\">\r\n      <ion-label position=\"floating\">Dosage</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"dossage\" (ionChange)=\"otherCheck($event)\">\r\n        <ion-select-option *ngFor=\"let doss of dossage_option\" [value]=\"doss\">{{doss}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"addform.value.medicine_type=='Syrup'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.dossage.invalid,'ion-touched': submitted && f.dossage.invalid }\">\r\n      <ion-label position=\"floating\">Dosage</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"dossage\" (ionChange)=\"otherCheck($event)\">\r\n        <ion-select-option *ngFor=\"let doss of dossage_option1\" [value]=\"doss\">{{doss}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"addform.value.dossage=='Others'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.unit.invalid,'ion-touched': submitted && f.unit.invalid }\">\r\n      <ion-label position=\"floating\">Other Dosage</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"unit\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\">\r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Add Vital Alert</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <form [formGroup]=\"vital_alert_form\" *ngIf=\"vital_alert_form\" (ngSubmit)=\"validateBeforeSubmit(vital_alert_form.value)\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n        <ion-row >    \r\n          <ion-col size=\"6\">\r\n            <div class=\"date_filter\">\r\n              <h1>Time</h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_time.invalid,'ion-touched': submitted && f.event_time.invalid }\">\r\n              <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\" placeholder=\"--:--\"></ion-datetime>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\"><g transform=\"translate(0.25 0.25)\"><path d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\" transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\" transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\" transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\" transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/></g></svg>\r\n          </ion-item>\r\n        </div>          \r\n      </ion-col>       \r\n      <ion-col size=\"6\">\r\n        <div class=\"date_filter\">\r\n          <h1>Date</h1>\r\n          <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_datetime.invalid,'ion-touched': submitted && f.event_datetime.invalid }\">\r\n            <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\" placeholder=\"-- --- ----\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n        \r\n        <ion-grid>\r\n          <ion-row class=\"repeat\">\r\n            <ion-col size=\"6\">\r\n              <ion-item button>\r\n                <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n                <ion-label>Repeat</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4\" offset=\"2\" *ngIf=\"vital_alert_form.value.remainder_repeat==true\">\r\n              <ion-item>\r\n                  <ion-label>Choose Repeat</ion-label>\r\n                <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n                    <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                    <ion-select-option  value=\"others\">Others</ion-select-option>\r\n                </ion-select>\r\n              </ion-item> \r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_days\" *ngIf=\"vital_alert_form.value.repeat_category=='days' && vital_alert_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let days of repeatOrder[0][vital_alert_form.value.repeat_category]\">\r\n              <ion-item button>\r\n                <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n                <ion-label>{{days.day}}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_others\" *ngIf=\"vital_alert_form.value.repeat_category=='others' && vital_alert_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let others of repeatOrder[0][vital_alert_form.value.repeat_category]\">\r\n              <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n                <ion-item button>\r\n                  <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                  <ion-label>{{others.day}}</ion-label>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <!-- <label>\r\n          <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n          Repeat\r\n        </label>   -->\r\n        \r\n        <!-- <ion-item *ngIf=\"addform.value.remainder_repeat==false\">\r\n            <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n                <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                <ion-select-option  value=\"others\">Others</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>{{showoptions['days']}}\r\n        <ion-item *ngIf=\"addform.value.event_category=='days'\">\r\n            <span *ngFor=\"let day of showoptions[0]['days']\"></span>\r\n            <p>{{day}}</p>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"addform.value.event_category=='others'\">\r\n            <span *ngFor=\"let other of showoptions[0]['others']\"></span>\r\n            <p>{{other}}</p>\r\n        </ion-item> -->\r\n        <!-- <ion-grid class=\"date_grid\">\r\n            <ion-row>\r\n             <ion-col size=\"6\">\r\n                \r\n                <ion-label>Before Meal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"meal\"></ion-radio>\r\n                </ion-item>\r\n             </ion-col>\r\n             <ion-col size=\"6\">\r\n                 <ion-item>\r\n                    <ion-label>After Meal</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"meal\" checked></ion-radio>     \r\n                 </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n        </ion-grid> -->\r\n        <!-- <label *ngIf=\"vital_alert_form.value.repeat_category=='days' && vital_alert_form.value.remainder_repeat==true\">\r\n            <p *ngFor=\"let days of repeatOrder[0][vital_alert_form.value.repeat_category]\">\r\n            {{days.day}}\r\n            <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n            &nbsp;</p>\r\n        </label>\r\n        <label *ngIf=\"vital_alert_form.value.repeat_category=='others' && vital_alert_form.value.remainder_repeat==true\">\r\n          <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n            <ion-item *ngFor=\"let others of repeatOrder[0][vital_alert_form.value.repeat_category]\">\r\n              <ion-label>{{others.day}}</ion-label>\r\n              <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </label> -->\r\n        \r\n        <ion-radio-group formControlName=\"meal\" [value]=\"initialMeal\">\r\n            <ion-item button>\r\n              <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"before_meal\"></ion-radio>\r\n              <ion-label>Before Meal</ion-label>\r\n            </ion-item>\r\n            <ion-item button>\r\n              <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"after_meal\"></ion-radio>\r\n              <ion-label>After Meal</ion-label>\r\n            </ion-item>\r\n            <!-- <ion-label>Before Meal</ion-label>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"before_meal\"></ion-radio>\r\n            <ion-label>After Meal</ion-label>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"after_meal\"></ion-radio> -->\r\n        </ion-radio-group>\r\n        \r\n        \r\n      <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n        <ion-label position=\"floating\">Choose Vitals</ion-label>\r\n        <ion-select okText=\"ok\" cancelText=\"cancel\" formControlName=\"event_name\">\r\n          <ion-select-option *ngFor=\"let vital of vital_options\" [value]=\"vital\">{{vital}}</ion-select-option>\r\n        </ion-select>\r\n\t\t  </ion-item>\r\n      <div class=\"footer\">\r\n        <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\"> \r\n          Cancel\r\n        </ion-button>\r\n        <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/alerts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/alerts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header\">\n\t<ion-toolbar>\n\t <!--  <ion-back-button slot=\"start\"></ion-back-button> -->\n\t  <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n\t  <ion-title>Alerts</ion-title>\n\t  <ion-buttons slot=\"end\">\n\t\t<ion-button>\n\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t  </ion-buttons>\n\t</ion-toolbar>\n  </ion-header>                     \n\n<ion-content>\n\n\t<ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged(selectedSegment)\">\n\t\t<ion-segment-button value=\"first\">\n\t\t  Medications\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"second\"  (click)=\"vital()\">\n\t\t  Vitals\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"third\" (click)=\"general()\">\n\t\t  General\n\t\t</ion-segment-button>\n\t  </ion-segment>\n\n\n\t  <ng-container *ngIf=\"selectedSegment=='first'\">\n\n\t\t<ion-toolbar class=\"action_tools\" *ngIf=\"medi_loader\">\n\t\t\t\t<ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t<ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t</ion-toolbar>\n\n\t    <ion-toolbar class=\"action_tools\" *ngIf=\"!medi_loader\">\n\t\t\t<ion-searchbar (ionChange)=\"SearchItem('alert_medication',$event)\" slot=\"start\" [(ngModel)]=\"alertMedInput\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n\t\t\t<ion-buttons slot=\"end\" color=\"secondary\">\n\t\t\t\t<ion-button class=\"btn\" (click)=\"addMedication()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t\tAdd\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n\t\t<div *ngIf=\"!medi_loader && alert_med_list.length != 0\">\n\t\t\t<ion-list>\n\t\t\t\t<!-- <ion-list-header>\n\t\t\t\t\t<ion-label>{{event.event_name}}</ion-label>\n\t\t\t\t\t<span>Last modified {{event.updated_at | date:\"dd-MM-yyyy\" }}</span>\n\t\t\t\t</ion-list-header> -->\n\t\t\t\t<ion-item button *ngFor=\"let event of alert_med_list;let i=index\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h4 (click)=\"editMedication(event)\">{{event?.event_name}}</h4>\n\t\t\t\t\t\t<ion-note color=\"primary\" *ngIf=\"event['event_options']['medicine_type']=='Tablet'\" (click)=\"editMedication(event)\">{{event?.value}} units</ion-note>\n\t\t\t\t\t\t<p (click)=\"editMedication(event)\"><small>Last modified {{event?.updated_at | date:\"dd-MM-yyyy\" }}</small></p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t<ion-label text-wrap>\n\t\t\t\t\t<h3 (click)=\"editMedication(event)\">{{event?.event_datetime | date:\"HH:mm\"}}</h3>\n\t\t\t\t\t<p (click)=\"editMedication(event)\" *ngIf=\"event?.event_options['remainder_repeat']==true\">\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t<span *ngFor=\"let day of repeatOrder[0][event.event_options['repeat_category']]\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"getDays(event['event_options']['repeat_value']).includes(day.day)\" [ngStyle]=\"{'color':'blue'}\">{{day.day}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!getDays(event['event_options']['repeat_value']).includes(day.day)\">{{day.day}}</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p (click)=\"editMedication(event)\" *ngIf=\"event?.event_options['remainder_repeat']==false\">\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{event?.event_datetime | date:\"dd MMM, yyyy\"}}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</p>\n\t\t\t\t\t<ion-button class=\"trans_btn\" (click)=\"deleteItem(event,i,'alert_medication',event['event_options']['medicine_type'])\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n\t\t\t\t\tDelete\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData1($event)\" *ngIf=\"med_per_page *10 == alert_med_list.length\">\n\t\t\t\t<ion-infinite-scroll-content\n\t\t\t\tloadingSpinner=\"bubbles\"\n\t\t\t\tloadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n\t\t</div>\n\t\t  <div *ngIf=\"alert_med_list.length == 0 && !medi_loader\" class=\"no_record\">\n\t\t\t<div>\n\t\t\t   <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t   <h3>No Record Found</h3>\n\t\t\t   <p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n\t\t\t</div>\n\t\t </div>\n\t\t  \n\t\t  <ion-list *ngIf=\"medi_loader\">\n\t\t\t\t<ion-list-header>\n\t\t\t\t  <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t</ion-list-header>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t  </ion-list>\n\t  </ng-container>\n\n\n\n\t  <ng-container *ngIf=\"selectedSegment=='second'\">\n\n\t\t<ion-toolbar class=\"action_tools\" *ngIf=\"vital_loader\">\n\t\t\t\t<ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t<ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t</ion-toolbar>\n\t\t<ion-toolbar class=\"action_tools\" *ngIf=\"!vital_loader\">\n\t\t\t<ion-searchbar (ionChange)=\"SearchItem('alert_vital',$event)\" slot=\"start\" [(ngModel)]=\"alertVitalInput\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n\t\t\t<ion-buttons slot=\"end\" color=\"secondary\">\n\t\t\t\t<ion-button class=\"btn\" (click)=\"addVitals()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t\tAdd\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n\t\t<div *ngIf=\"!vital_loader && alert_vital_list.length != 0\">\n\t\t\t<ion-list>\n\t\t\t\t<!-- <ion-list-header>\n\t\t\t\t<ion-label>{{event.event_name}}</ion-label>\n\t\t\t\t<span>Last modified {{event.updated_at | date:\"dd-MM-yyyy\" }}</span>\n\t\t\t\t</ion-list-header> -->\n\t\t\t\t<ion-item button *ngFor=\"let event of alert_vital_list;let i=index\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h4 (click)=\"editVital(event)\">{{event?.event_name}}</h4>\n\t\t\t\t\t\t<p (click)=\"editVital(event)\"><small>Last modified {{event?.updated_at | date:\"dd-MM-yyyy\" }}</small></p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-label text-wrap>\n\t\t\t\t\t\t<h3 (click)=\"editVital(event)\">{{event?.event_datetime | date:\"HH:mm\"}}</h3>\n\t\t\t\t\t\t<p (click)=\"editVital(event)\" *ngIf=\"event?.event_options['remainder_repeat']==true\">\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let day of repeatOrder[0][event.event_options['repeat_category']]\">\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"getDays(event['event_options']['repeat_value']).includes(day.day)\" [ngStyle]=\"{'color':'blue'}\">{{day.day}}</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!getDays(event['event_options']['repeat_value']).includes(day.day)\">{{day.day}}</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p (click)=\"editVital(event)\" *ngIf=\"event?.event_options['remainder_repeat']==false\">\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t {{event?.event_datetime | date:\"dd MMM, yyyy\"}}\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<ion-button class=\"trans_btn\" (click)=\"deleteItem(event,i,'alert_vital',event.event_name)\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData2($event)\" *ngIf=\"vital_per_page *10 == alert_vital_list.length\">\n\t\t\t\t<ion-infinite-scroll-content\n\t\t\t\tloadingSpinner=\"bubbles\"\n\t\t\t\tloadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n\t\t</div>\n\t\t<div *ngIf=\"alert_vital_list.length == 0 && !vital_loader\" class=\"no_record\">\n\t\t\t<div>\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t<h3>No Record Found</h3>\n\t\t\t<p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ion-list *ngIf=\"vital_loader\">\n\t\t\t<ion-list-header>\n\t\t\t\t<ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t</ion-list-header>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t  </ng-container>\n\t  \n\t \n\t  \n\n\t  <ng-container *ngIf=\"selectedSegment=='third'\">\n\n\t\t<ion-toolbar class=\"action_tools\" *ngIf=\"general_loader\">\n\t\t\t\t<ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t<ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t</ion-toolbar>\n\t\t<ion-toolbar class=\"action_tools\" *ngIf=\"!general_loader\">\n\t\t\t<ion-searchbar (ionChange)=\"SearchItem('alert_general',$event)\" slot=\"start\" [(ngModel)]=\"alertGenInput\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n\t\t\t<ion-buttons slot=\"end\" color=\"secondary\">\n\t\t\t\t<ion-button class=\"btn\" (click)=\"addGeneral()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t\tAdd\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n\t\t<div  *ngIf=\"!general_loader && alert_general_list.length != 0\">\n\t\t\t<ion-list>\n\t\t\t\t<!-- <ion-list-header>\n\t\t\t\t\t<ion-label>{{event.event_name}}</ion-label>\n\t\t\t\t\t<span>Last modified {{event.updated_at | date:\"dd-MM-yyyy\" }}</span>\n\t\t\t\t</ion-list-header> -->\n\t\t\t\t<ion-item button *ngFor=\"let event of alert_general_list;let i=index\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<h4 (click)=\"editGeneral(event)\">{{event?.event_name}}</h4>\n\t\t\t\t\t\t<p (click)=\"editGeneral(event)\"><small>Last modified {{event?.updated_at | date:\"dd-MM-yyyy\" }}</small></p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-label text-wrap>\n\t\t\t\t\t\t<h3 (click)=\"editGeneral(event)\">{{event?.event_datetime | date:\"HH:mm\"}}</h3>\n\t\t\t\t\t\t<p (click)=\"editGeneral(event)\" *ngIf=\"event?.event_options['remainder_repeat']==true\">\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t<span *ngFor=\"let day of repeatOrder[0][event.event_options['repeat_category']]\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"getDays(event['event_options']['repeat_value']).includes(day.day)\" [ngStyle]=\"{'color':'blue'}\">{{day.day}}</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!getDays(event['event_options']['repeat_value']).includes(day.day)\">{{day.day}}</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p (click)=\"editGeneral(event)\" *ngIf=\"event?.event_options['remainder_repeat']==false\">\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t  {{event?.event_datetime | date:\"dd MMM, yyyy\"}}\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<ion-button class=\"trans_btn\" (click)=\"deleteItem(event,i,'alert_general',event.event_name)\">\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n\t\t\t\t\t\tDelete\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData3($event)\" *ngIf=\"general_per_page *10 == alert_general_list.length\">\n\t\t\t\t<ion-infinite-scroll-content\n\t\t\t\tloadingSpinner=\"bubbles\"\n\t\t\t\tloadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n\t\t</div>\n\t\t<div *ngIf=\"alert_general_list.length == 0 && !general_loader\" class=\"no_record\">\n\t\t\t<div>\n\t\t\t   <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t   <h3>No Record Found</h3>\n\t\t\t   <p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<ion-list *ngIf=\"general_loader\">\n\t\t\t\t<ion-list-header>\n\t\t\t\t  <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n\t\t\t\t</ion-list-header>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t  <ion-label>\n\t\t\t\t\t<h3>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n\t\t\t\t\t</p>\n\t\t\t\t  </ion-label>\n\t\t\t\t</ion-item>\n\t\t\t  </ion-list>\n\t    </ng-container>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-general/edit-general.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/edit-general/edit-general.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-padding-start\">Edit General Alert</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <form class=\"footerform\" [formGroup]=\"other_alert_edit_form\" *ngIf=\"other_alert_edit_form\" (ngSubmit)=\"validateBeforeSubmit(other_alert_edit_form.value)\">\r\n        <ion-grid class=\"date_grid\">\r\n         <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\"><g transform=\"translate(0.25 0.25)\"><path d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\" transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\" transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\" transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\" transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/></g></svg>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-col>\r\n         </ion-row>\r\n        </ion-grid>\r\n        \r\n        <!-- <ion-item >\r\n            <ion-label>Repeat</ion-label>\r\n            <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (click)='repeatCheck($event)'></ion-checkbox>\r\n        </ion-item>   -->\r\n        <ion-grid>\r\n          <ion-row class=\"repeat\">\r\n            <ion-col size=\"6\">\r\n              <ion-item button>\r\n                <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n                <ion-label>Repeat</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4\" offset=\"2\" *ngIf=\"other_alert_edit_form.value.remainder_repeat==true\">\r\n              <ion-item>\r\n                <ion-label>Choose Repeat</ion-label>\r\n                <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n                    <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                    <ion-select-option  value=\"others\">Others</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_days\" *ngIf=\"other_alert_edit_form.value.repeat_category=='days' && other_alert_edit_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let days of repeatOrder[0][other_alert_edit_form.value.repeat_category]\">\r\n              <ion-item button>\r\n                <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n                <ion-label>{{days.day}}</ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"repeat_others\" *ngIf=\"other_alert_edit_form.value.repeat_category=='others' && other_alert_edit_form.value.remainder_repeat==true\">\r\n            <ion-col *ngFor=\"let others of repeatOrder[0][other_alert_edit_form.value.repeat_category]\">\r\n              <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n                <ion-item button>\r\n                  <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                  <ion-label>{{others.day}}</ion-label>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <!-- <label>\r\n            <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)='repeatCheck($event)'></ion-checkbox>\r\n            Repeat\r\n        </label>   -->\r\n        \r\n        <!-- <ion-item *ngIf=\"addform.value.remainder_repeat==false\">\r\n            <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n                <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                <ion-select-option  value=\"others\">Others</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>{{showoptions['days']}}\r\n        <ion-item *ngIf=\"addform.value.event_category=='days'\">\r\n            <span *ngFor=\"let day of showoptions[0]['days']\"></span>\r\n            <p>{{day}}</p>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"addform.value.event_category=='others'\">\r\n            <span *ngFor=\"let other of showoptions[0]['others']\"></span>\r\n            <p>{{other}}</p>\r\n        </ion-item> -->\r\n        <!-- <ion-grid class=\"date_grid\">\r\n            <ion-row>\r\n             <ion-col size=\"6\">\r\n                \r\n                <ion-label>Before Meal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"meal\"></ion-radio>\r\n                </ion-item>\r\n             </ion-col>\r\n             <ion-col size=\"6\">\r\n                 <ion-item>\r\n                    <ion-label>After Meal</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"meal\" checked></ion-radio>     \r\n                 </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n        </ion-grid> -->\r\n        <!-- <ion-item *ngIf=\"other_alert_edit_form.value.remainder_repeat==true\">\r\n            <ion-label position=\"floating\">Choose Repeat</ion-label>\r\n            <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n                <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                <ion-select-option  value=\"others\">Others</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>  -->\r\n          <!-- <label *ngIf=\"other_alert_edit_form.value.repeat_category=='days' && other_alert_edit_form.value.remainder_repeat==true\">\r\n              <p *ngFor=\"let days of repeatOrder[0][other_alert_edit_form.value.repeat_category]\">\r\n              {{days.day}}\r\n              <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n              &nbsp;</p>\r\n          </label> -->\r\n          <!-- <label *ngIf=\"other_alert_edit_form.value.repeat_category=='others' && other_alert_edit_form.value.remainder_repeat==true\">        \r\n                \r\n                <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n                  <ion-item *ngFor=\"let others of repeatOrder[0][other_alert_edit_form.value.repeat_category]\">\r\n                    <ion-label>{{others.day}}</ion-label>\r\n                    <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n          </label> -->\r\n          \r\n          <ion-radio-group formControlName=\"meal\" [value]=\"initialMeal\">\r\n            <ion-item>\r\n              <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"before_meal\"></ion-radio>\r\n              <ion-label>Before Meal</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"after_meal\"></ion-radio>\r\n              <ion-label>After Meal</ion-label>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        \r\n        \r\n        <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n\t\t\t<ion-label position=\"floating\">Other alert</ion-label>\r\n\t\t\t<ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n\t\t</ion-item>\r\n      <div class=\"footer\">\r\n        <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\"> \r\n          Cancel\r\n        </ion-button>\r\n        <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-medications/edit-medications.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/edit-medications/edit-medications.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-padding-start\">Edit Medication Alert</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n<form class=\"footerform\" [formGroup]=\"editform\" *ngIf=\"editform && renderForm\" (ngSubmit)=\"editDeatils(editform.value)\">\r\n    <ion-card button (click)=\"AddImage()\" *ngIf=\"edit_all_image.length==0\" class=\"medic_img ion-no-margin ion-margin-top ion-margin-bottom\">\r\n        <ion-card-content class=\"ion-text-center\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\r\n          <p>Add Medication Photos</p>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n<ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom medic_img\" *ngIf=\"edit_all_image.length!=0\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" *ngFor=\"let img of edit_all_image; let i=index\">\r\n      <ion-card class=\"has_image\">\r\n        <ion-card-content>\r\n          <img *ngIf=\"!isNetwork && !img.delete || img.globalURI==null && !img.delete\" [src]=\"webview.convertFileSrc(img.localURI)\">\r\n          <img *ngIf=\"isNetwork && !img.delete && img.globalURI!=null\" [src]=\"img.globalURI\">\r\n        </ion-card-content>\r\n        <ion-button color=\"tertiary\" (click)=\"removeImg(i,img,originalArray)\">\r\n          <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n        </ion-button>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <ion-card button (click)=\"AddImage()\">\r\n            <ion-card-content class=\"ion-text-center\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\">\r\n                <g transform=\"translate(0.5 -5.5)\">\r\n                  <path\r\n                    d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\"\r\n                    transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                  <path\r\n                    d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\"\r\n                    transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                  <path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\"\r\n                    transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\" />\r\n                </g>\r\n              </svg>\r\n              <p>Add More</p>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-grid class=\"date_grid\">\r\n        <ion-row>\r\n            <ion-col size=\"6\">\r\n                <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\"></ion-datetime>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n                  <g transform=\"translate(0.25 0.25)\">\r\n                    <path\r\n                      d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                      transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                      transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                      transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                    <path\r\n                      d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                      transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n                  </g>\r\n                </svg>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                  <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\">\r\n                    <path\r\n                      d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\"\r\n                      fill=\"#ea4e4e\" />\r\n                    <g transform=\"translate(3.117 9.434)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(6.398 9.434)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(9.68 9.434)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(12.961 9.434)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(16.242 9.434)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(3.117 12.715)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(6.398 12.715)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(9.68 12.715)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(12.961 12.715)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(3.117 15.996)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(6.398 15.996)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(9.68 15.996)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(12.961 15.996)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                    <g transform=\"translate(16.242 12.715)\">\r\n                      <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n                    </g>\r\n                  </svg>\r\n                </ion-col>\r\n          <!-- <ion-col size=\"6\">\r\n            <ion-datetime display-format=\"DD MMM YYYY\"  [min]=\"todaydate\"  formControlName=\"event_datetime\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-col> -->\r\n        </ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid>\r\n    <ion-row class=\"repeat\">\r\n      <ion-col size=\"6\">\r\n        <ion-item button>\r\n          <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)=\"repeatCheck($event)\"></ion-checkbox>\r\n          <ion-label>Repeat</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\" offset=\"2\" *ngIf=\"editform.value.remainder_repeat==true\">\r\n        <ion-item>\r\n          <ion-label>Choose Repeat</ion-label>\r\n          <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\"\r\n            (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n            <ion-select-option value=\"days\">Days</ion-select-option>\r\n            <ion-select-option value=\"others\">Others</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"repeat_days\" *ngIf=\"editform.value.event_category=='days' && editform.value.remainder_repeat==true\">\r\n      <ion-col *ngFor=\"let days of repeatOrder[0][editform.value.event_category]\">\r\n        <ion-item button>\r\n          <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n          <ion-label>{{days.day}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"repeat_others\" *ngIf=\"editform.value.event_category=='others' && editform.value.remainder_repeat==true\">\r\n      <ion-col *ngFor=\"let others of repeatOrder[0][editform.value.event_category]\">\r\n        <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n          <ion-item button>\r\n            <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n            <ion-label>{{others.day}}</ion-label>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-radio-group formControlName=\"meals\" [value]=\"initialMeal\">\r\n      <ion-item>\r\n        <ion-radio type=\"radio\" value=\"before_meal\"></ion-radio>\r\n        <ion-label>Before Meal</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-radio type=\"radio\" value=\"after_meal\"></ion-radio>\r\n        <ion-label>After Meal</ion-label>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n\r\n    <ion-item\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.medicine_type.invalid,'ion-touched': submitted && f.medicine_type.invalid }\">\r\n      <ion-label position=\"floating\">Tablet/Syrup/Injection</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"medicine_type\" (ionChange)=\"valueSet($event)\">\r\n        <ion-select-option *ngFor=\"let medicine of medicine_option\" [value]=\"medicine\">{{medicine}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"editform.value.medicine_type=='Tablet'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.quantity.invalid,'ion-touched': submitted && f.quantity.invalid }\">\r\n      <ion-label position=\"floating\">Add Quantity</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"quantity\" (keypress)=\"_keyPress($event)\"></ion-input>\r\n    </ion-item>\r\n    <p *ngIf=\"editform.value.medicine_type=='Tablet'\">Total quantity: {{edit_details?.value || '0'}}</p>\r\n    <ion-item\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.dossage.invalid,'ion-touched': submitted && f.dossage.invalid }\">\r\n      <ion-label position=\"floating\">Dossage</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"dossage\" (ionChange)=\"otherCheck($event)\">\r\n        <ion-select-option *ngFor=\"let doss of dossage_option\" [value]=\"doss\">{{doss}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"editform.value.dossage=='Others'\"\r\n      [ngClass]=\"{ 'ion-invalid': submitted && f.unit.invalid,'ion-touched': submitted && f.unit.invalid }\">\r\n      <ion-label position=\"floating\">Other Dossage</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"unit\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\">\r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n        Save\r\n      </button>\r\n    </div>\r\n\r\n\r\n<!-- <label>\r\n    <ion-checkbox [checked]=\"status\" formControlName=\"remainder_repeat\" (ionChange)=\"repeatCheck($event)\"></ion-checkbox>\r\n    Repeat\r\n</label> \r\n  <ion-item *ngIf=\"editform.value.remainder_repeat==true\">\r\n      <ion-label position=\"floating\">Choose Repeat</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n          <ion-select-option  value=\"days\">Days</ion-select-option>\r\n          <ion-select-option  value=\"others\">Others</ion-select-option>\r\n      </ion-select>\r\n    </ion-item> \r\n    <label *ngIf=\"editform.value.event_category=='days' && editform.value.remainder_repeat==true\">\r\n        <p *ngFor=\"let days of repeatOrder[0][editform.value.event_category]\">\r\n        {{days.day}}\r\n        <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n        &nbsp;</p>\r\n    </label>\r\n    <label *ngIf=\"editform.value.event_category=='others' && editform.value.remainder_repeat==true\">        \r\n          \r\n          <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n            <ion-item *ngFor=\"let others of repeatOrder[0][editform.value.event_category]\">\r\n              <ion-label>{{others.day}}</ion-label>\r\n              <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n    </label>\r\n    <ion-radio-group formControlName=\"meals\" [value]=\"initialMeal\">\r\n      <ion-label>Before Meal</ion-label>\r\n      <ion-radio type=\"radio\" value=\"before_meal\"></ion-radio>\r\n      <ion-label>After Meal</ion-label>\r\n      <ion-radio type=\"radio\" value=\"after_meal\"></ion-radio>\r\n    </ion-radio-group>\r\n  \r\n  <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.medicine_type.invalid,'ion-touched': submitted && f.medicine_type.invalid }\">\r\n        <ion-label position=\"floating\">Tablet/Syrup/injection</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"medicine_type\" (ionChange)=\"valueSet($event)\">\r\n          <ion-select-option *ngFor=\"let medicine of medicine_option\" [value]=\"medicine\">{{medicine}}</ion-select-option>\r\n      </ion-select>\r\n  </ion-item>\r\n  <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"editform.value.medicine_type=='Tablet'\" [ngClass]=\"{ 'ion-invalid': submitted && f.quantity.invalid,'ion-touched': submitted && f.quantity.invalid }\">\r\n        <ion-label position=\"floating\">Add Quantity</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"quantity\" (keypress)=\"_keyPress($event)\"></ion-input>\r\n  </ion-item>\r\n  <div>Total quantity:{{edit_details?.value}}</div>\r\n  <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.dossage.invalid,'ion-touched': submitted && f.dossage.invalid }\">\r\n        <ion-label position=\"floating\">Dossage</ion-label>\r\n        <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"dossage\" (ionChange)=\"otherCheck($event)\">\r\n            <ion-select-option *ngFor=\"let doss of dossage_option\" [value]=\"doss\">{{doss}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"editform.value.dossage=='Others'\" [ngClass]=\"{ 'ion-invalid': submitted && f.unit.invalid,'ion-touched': submitted && f.unit.invalid }\">\r\n            <ion-label position=\"floating\">Other Dossage</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"unit\"></ion-input>\r\n      </ion-item>\r\n\r\n  <ion-item>\r\n        <ion-label position=\"floating\">Description</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n  </ion-item>\r\n\r\n  <div> \r\n        <ion-button expand=\"block\" color=\"secondary\" (click)=\"cancel()\" [disabled]=Progress> \r\n          Cancel\r\n        </ion-button>\r\n        <ion-button type=\"submit\" color=\"secondary\" expand=\"block\" [disabled]=Progress>\r\n          Save\r\n        </ion-button>\r\n      </div> -->\r\n</form>\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-padding-start\">Edit Vital Alert</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <form class=\"footerform\"  [formGroup]=\"vital_edit_form\" *ngIf=\"vital_edit_form\" (ngSubmit)=\"validateBeforeSubmit(vital_edit_form.value)\">\r\n      <ion-grid class=\"date_grid\">\r\n       <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\"><g transform=\"translate(0.25 0.25)\"><path d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\" transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\" transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\" transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\" transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/></g></svg>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n        </ion-col>\r\n       </ion-row>\r\n      </ion-grid>\r\n      \r\n      <ion-grid>\r\n        <ion-row class=\"repeat\">\r\n          <ion-col size=\"6\">\r\n            <ion-item button>\r\n              <ion-checkbox formControlName=\"remainder_repeat\" [checked]=\"status\" (ionChange)=\"repeatCheck($event)\"></ion-checkbox>\r\n              <ion-label>Repeat</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"4\" offset=\"2\" *ngIf=\"vital_edit_form.value.remainder_repeat==true\">\r\n            <ion-item>\r\n              <ion-label>Choose Repeat</ion-label>\r\n              <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n                  <ion-select-option  value=\"days\">Days</ion-select-option>\r\n                  <ion-select-option  value=\"others\">Others</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"repeat_days\" *ngIf=\"vital_edit_form.value.repeat_category=='days' && vital_edit_form.value.remainder_repeat==true\">\r\n          <ion-col *ngFor=\"let days of repeatOrder[0][vital_edit_form.value.repeat_category]\">\r\n            <ion-item button>\r\n              <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n              <ion-label>{{days.day}}</ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"repeat_others\" *ngIf=\"vital_edit_form.value.repeat_category=='others' && vital_edit_form.value.remainder_repeat==true\">\r\n          <ion-col *ngFor=\"let others of repeatOrder[0][vital_edit_form.value.repeat_category]\">\r\n            <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n              <ion-item button>\r\n                <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n                <ion-label>{{others.day}}</ion-label>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- <label>\r\n          <ion-checkbox formControlName=\"remainder_repeat\" [checked]=\"status\" (ionChange)=\"repeatCheck($event)\"></ion-checkbox>\r\n          Repeat\r\n      </label>   -->\r\n      \r\n      <!-- <ion-item *ngIf=\"addform.value.remainder_repeat==false\">\r\n          <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n              <ion-select-option  value=\"days\">Days</ion-select-option>\r\n              <ion-select-option  value=\"others\">Others</ion-select-option>\r\n          </ion-select>\r\n      </ion-item>{{showoptions['days']}}\r\n      <ion-item *ngIf=\"addform.value.event_category=='days'\">\r\n          <span *ngFor=\"let day of showoptions[0]['days']\"></span>\r\n          <p>{{day}}</p>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"addform.value.event_category=='others'\">\r\n          <span *ngFor=\"let other of showoptions[0]['others']\"></span>\r\n          <p>{{other}}</p>\r\n      </ion-item> -->\r\n      <!-- <ion-grid class=\"date_grid\">\r\n          <ion-row>\r\n           <ion-col size=\"6\">\r\n              \r\n              <ion-label>Before Meal</ion-label>\r\n              <ion-radio slot=\"start\" value=\"meal\"></ion-radio>\r\n              </ion-item>\r\n           </ion-col>\r\n           <ion-col size=\"6\">\r\n               <ion-item>\r\n                  <ion-label>After Meal</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"meal\" checked></ion-radio>     \r\n               </ion-item>\r\n           </ion-col>\r\n          </ion-row>\r\n      </ion-grid> -->\r\n      <!-- <ion-item *ngIf=\"vital_edit_form.value.remainder_repeat==true\">\r\n        <ion-label position=\"floating\">Choose Repeat</ion-label>\r\n        <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"repeat_category\" (ionChange)='repeatCategChange($event)' [value]=\"repeatType\">\r\n            <ion-select-option  value=\"days\">Days</ion-select-option>\r\n            <ion-select-option  value=\"others\">Others</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>  -->\r\n      <!-- <label *ngIf=\"vital_edit_form.value.repeat_category=='days' && vital_edit_form.value.remainder_repeat==true\">\r\n          <p *ngFor=\"let days of repeatOrder[0][vital_edit_form.value.repeat_category]\">\r\n          {{days.day}}\r\n          <ion-checkbox name=\"{{days.day}}\" [checked]=\"days.checked\" [(ngModel)]=\"days.checked\" [ngModelOptions]=\"{standalone: true}\" (ionChange)='repeatDayCheck(days,days.checked)'></ion-checkbox>\r\n          &nbsp;</p>\r\n      </label> -->\r\n      <!-- <label *ngIf=\"vital_edit_form.value.repeat_category=='others' && vital_edit_form.value.remainder_repeat==true\">        \r\n            \r\n            <ion-radio-group (ionChange)=\"checkValue($event)\" [value]=\"defaultMonth\">\r\n              <ion-item *ngFor=\"let others of repeatOrder[0][vital_edit_form.value.repeat_category]\">\r\n                <ion-label>{{others.day}}</ion-label>\r\n                <ion-radio type=\"radio\" slot=\"start\" name=\"month\" [value]=\"others.day\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n      </label> -->\r\n      \r\n      <ion-radio-group formControlName=\"meal\" [value]=\"initialMeal\">\r\n          <ion-item>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"before_meal\"></ion-radio>\r\n            <ion-label>Before Meal</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio  type=\"radio\" slot=\"start\" name=\"mealTime\" value=\"after_meal\"></ion-radio>\r\n            <ion-label>After Meal</ion-label>\r\n          </ion-item>\r\n      </ion-radio-group>\r\n      \r\n      \r\n      <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n    <ion-label position=\"floating\">Choose Vitals</ion-label>\r\n    <ion-select okText=\"ok\" cancelText=\"cancel\" formControlName=\"event_name\">\r\n        <ion-select-option *ngFor=\"let vital of vital_options\" [value]=\"vital\">{{vital}}</ion-select-option>\r\n          </ion-select>\r\n  </ion-item>\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\"> \r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./src/app/self-care/alerts/add-general/add-general.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/self-care/alerts/add-general/add-general.page.ts ***!
  \******************************************************************/
/*! exports provided: AddOthersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOthersPage", function() { return AddOthersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");











var AddOthersPage = /** @class */ (function () {
    function AddOthersPage(platform, toast, localNotifications, alertController, datepipe, service, fb, route, router, statusBar, database) {
        this.platform = platform;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.datepipe = datepipe;
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.database = database;
        this.submitted = false;
        this.Progress = false;
        this.status = false;
        this.repeatType = 'days';
        this.initialMeal = 'before_meal';
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false }, { day: '12 mo.', dayCode: 12, checked: false }] }];
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
    }
    AddOthersPage.prototype.ngOnInit = function () {
    };
    AddOthersPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.todaydate = new Date().toISOString();
        this.other_alert_form = this.fb.group({
            event_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_type: ['alert_general'],
            meal: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remainder_repeat: [this.status],
            repeat_category: [this.repeatType]
        });
    };
    Object.defineProperty(AddOthersPage.prototype, "f", {
        get: function () { return this.other_alert_form.controls; },
        enumerable: true,
        configurable: true
    });
    AddOthersPage.prototype.validateBeforeSubmit = function (form) {
        console.log(form);
        this.submitted = true;
        if (form.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        if (this.other_alert_form.invalid) {
            return;
        }
        else {
            var new1 = new Date(form.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(form.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var data = {
                event_name: form.event_name,
                event_datetime: event_dateTime,
                event_type: form.event_type,
                event_options: {
                    meal: form.meal,
                    remainder_repeat: form.remainder_repeat,
                    repeat_category: form.repeat_category,
                    repeat_value: this.repeatValue
                }
            };
            console.log(data);
            this.addconfirmation(form, data);
        }
    };
    AddOthersPage.prototype.addconfirmation = function (form, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alerts',
                                message: 'Are you sure to submit' + ' ' + (form.event_name).bold() + ' ' + 'Alert' + '?',
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
                                            _this.Progress = true;
                                            // this.service.commonPost(data).subscribe(res=>{
                                            //   let getData:any=res;
                                            //   let getEventId:any=res['event']['id'];
                                            //   console.log(this.repeatValue)
                                            //   let repeatAlarmValue=[];
                                            //   let getDate = new Date(form.event_datetime)
                                            //   let getTime:any = new Date(form.event_time)
                                            //   let getHours = getTime.getHours();
                                            //   let getMinutes = getTime.getMinutes();
                                            //   let getSeconds = getTime.getSeconds();
                                            //   let getMilliseconds = getTime.getMilliseconds();
                                            //   getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
                                            //   let repeatHours = getDate.getHours();
                                            //   console.log(repeatHours)
                                            //   let repeatMinutes = getDate.getMinutes();
                                            //   console.log(repeatMinutes)
                                            //   if(form.remainder_repeat==true){
                                            //     if(form.repeat_category=='days'){
                                            //         repeatAlarmValue=this.repeatValue.map((res,index)=>{
                                            //           let ID:any=getEventId+''+Number(index+1);
                                            //           console.log(ID)
                                            //           this.localNotifications.schedule({
                                            //             id: ID,
                                            //             title: form.event_name,
                                            //             text: 'General Alert',
                                            //             trigger: {
                                            //               count: 1,
                                            //               every:{ weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes  } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                                            //             },
                                            //             data: { secret:getEventId },
                                            //             lockscreen:true,
                                            //             vibrate: true,
                                            //             priority: 2,
                                            //             foreground: true,
                                            //             sound: null       
                                            //           })
                                            //           this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);       
                                            //         })
                                            //     }else if(form.repeat_category=='others'){
                                            //        this.Progress=false;
                                            //        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                            //     }
                                            //     console.log(repeatAlarmValue)
                                            //   }else{
                                            //     let ID:any=getEventId+''+1;
                                            //     this.localNotifications.schedule({
                                            //                     id: ID,
                                            //                     title: form.event_name,
                                            //                     text: 'General Alert',
                                            //                     trigger: {at: new Date(getDate.getTime())},
                                            //                     data: { secret:getEventId },
                                            //                     lockscreen:true,
                                            //                     vibrate: true,
                                            //                     priority: 2,
                                            //                     foreground: true,
                                            //                     sound: null    
                                            //                   })
                                            //                   this.router.navigate(['self-care-tabs/tabs/tab1/alerts']); 
                                            //   }
                                            // },error=>{
                                            //   this.Progress=false;
                                            // });
                                            _this.database.createAnEvent(data).then(function (res) {
                                                var getData = res;
                                                var getEventId = res['event_id'];
                                                console.log(_this.repeatValue);
                                                var repeatAlarmValue = [];
                                                var getDate = new Date(form.event_datetime);
                                                var getTime = new Date(form.event_time);
                                                var getHours = getTime.getHours();
                                                var getMinutes = getTime.getMinutes();
                                                var getSeconds = getTime.getSeconds();
                                                var getMilliseconds = getTime.getMilliseconds();
                                                getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
                                                var repeatHours = getDate.getHours();
                                                console.log(repeatHours);
                                                var repeatMinutes = getDate.getMinutes();
                                                console.log(repeatMinutes);
                                                if (form.remainder_repeat == true) {
                                                    if (form.repeat_category == 'days') {
                                                        repeatAlarmValue = _this.repeatValue.map(function (res, index) {
                                                            var ID = getEventId + '' + Number(index + 1);
                                                            console.log(ID);
                                                            _this.localNotifications.schedule({
                                                                id: ID,
                                                                title: form.event_name,
                                                                text: 'General Alert',
                                                                trigger: {
                                                                    count: 1,
                                                                    every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                                                                },
                                                                data: { secret: getEventId },
                                                                lockscreen: true,
                                                                vibrate: true,
                                                                priority: 2,
                                                                foreground: true,
                                                                sound: null
                                                            });
                                                            _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                        });
                                                    }
                                                    else if (form.repeat_category == 'others') {
                                                        _this.Progress = false;
                                                        _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                    }
                                                    console.log(repeatAlarmValue);
                                                }
                                                else {
                                                    var ID = getEventId + '' + 1;
                                                    _this.localNotifications.schedule({
                                                        id: ID,
                                                        title: form.event_name,
                                                        text: 'General Alert',
                                                        trigger: { at: new Date(getDate.getTime()) },
                                                        data: { secret: getEventId },
                                                        lockscreen: true,
                                                        vibrate: true,
                                                        priority: 2,
                                                        foreground: true,
                                                        sound: null
                                                    });
                                                    _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                }
                                            }).catch(function (error) {
                                                _this.Progress = false;
                                            });
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
    AddOthersPage.prototype.scheduleNotifications = function (data, boolean) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    AddOthersPage.prototype.checkValue = function (event) {
        console.log(event);
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        //console.log(others,index,event.detail.checked)
        // for(var i in this.repeatOrder[0]['others']){
        //   console.log(i)
        //   if(i==index){
        //    // this.repeatOrder[0]['others'][i]['checked']=true;
        //     console.log(this.repeatOrder[0]['others'][i]['checked'])
        //   }else{
        //     this.repeatOrder[0]['others'][i]['checked']=false;
        //     console.log(this.repeatOrder[0]['others'][i]['checked'])
        //   }  
        // }
        // this.repeatValue=[];
        // this.repeatValue.push(others)
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    AddOthersPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    AddOthersPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
    };
    AddOthersPage.prototype.repeatCheck = function (event) {
        //this.defaultMonth= '1 mo.';
        this.status = event.detail.checked;
        console.log();
        if (this.other_alert_form['value']['repeat_category'] != undefined && this.other_alert_form['value']['repeat_category'] != null && this.other_alert_form['value']['repeat_category'] != '') {
            this.repeatType = this.other_alert_form['value']['repeat_category'];
            // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
            //   this.repeatValue.push(this.defaultMonth);
            // }
        }
        else {
            this.repeatType = 'days';
            this.other_alert_form['value']['repeat_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    AddOthersPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    AddOthersPage.prototype.cancel = function () {
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    AddOthersPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    AddOthersPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] }
    ]; };
    AddOthersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-general',
            template: __webpack_require__(/*! raw-loader!./add-general.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-general/add-general.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"]])
    ], AddOthersPage);
    return AddOthersPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/add-medications/add-medications.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/self-care/alerts/add-medications/add-medications.page.ts ***!
  \**************************************************************************/
/*! exports provided: AddMedicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicationPage", function() { return AddMedicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");



















var AddMedicationPage = /** @class */ (function () {
    function AddMedicationPage(camera, actionSheetController, toast, localNotifications, file, fb, transfer, imagePicker, webview, sanitizer, alertController, router, route, service, datepipe, statusBar, database, databaseSummary) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.file = file;
        this.fb = fb;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.service = service;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.store_photos = [];
        this.fileuri = [];
        this.status = false;
        this.medicine_option = [];
        this.dossage_option = [];
        this.initialMeal = 'before_meal';
        this.repeatType = 'days';
        this.submitted = false;
        this.repeate_days = [];
        this.Progress = false;
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false },
                ] }];
        // {day:'6 mo.',dayCode: 6,checked:false},{day:'12 mo.',dayCode: 12,checked:false}
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
    }
    AddMedicationPage.prototype.ngOnInit = function () { };
    AddMedicationPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.dossage_option = ['0.5 tablet', '1 tablet', '1.5 tablet', '2 tablet', '1 tsp', '1.5 tsp', 'Others'];
        this.medicine_option = ['Tablet', 'Syrup', 'Injection'];
        this.todaydate = new Date().toISOString();
        this.addform = this.fb.group({
            event_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            event_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            event_category: [this.repeatType, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            remainder_repeat: [this.status],
            medicine_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            dossage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            quantity: [''],
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            description: [],
            meals: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            unit: ['']
        });
    };
    AddMedicationPage.prototype.valueSet = function (data) {
        this.selectedVital = data.detail.value;
        this.submitted = false;
        if (data.detail.value == "Tablet") {
            this.addform.controls['dossage'].reset();
            this.addform.controls['event_name'].reset();
            var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required];
            this.addform.controls['quantity'].setValidators(validators);
            this.addform.updateValueAndValidity();
            this.addform.controls['quantity'].updateValueAndValidity();
        }
        else if (data.detail.value == "Syrup") {
            this.addform.controls['event_name'].reset();
            this.addform.controls['dossage'].reset();
            this.addform.controls['quantity'].clearValidators();
            this.addform.updateValueAndValidity();
            this.addform.controls['quantity'].updateValueAndValidity();
        }
        else if (data.detail.value == "Injection") {
            this.addform.controls['dossage'].reset();
            this.addform.controls['quantity'].clearValidators();
            this.addform.updateValueAndValidity();
            this.addform.controls['quantity'].updateValueAndValidity();
        }
    };
    Object.defineProperty(AddMedicationPage.prototype, "f", {
        get: function () { return this.addform.controls; },
        enumerable: true,
        configurable: true
    });
    //  selectedDays(event){
    //    console.log(event.detail.value)
    //    this.repeate_days.push(event.detail.value)
    //    console.log(this.repeate_days)
    // }
    AddMedicationPage.prototype.addDeatils = function (val) {
        this.submitted = true;
        console.log(this.addform.valid);
        if (this.store_photos.length == 0) {
            this.presentToast("Please add your Medication image");
            return;
        }
        else if (this.addform.value.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        else if (this.addform.valid) {
            if (val.dossage == "Others") {
                val.dossage = val.unit;
                console.log(val.dossage);
            }
            var new1 = new Date(val.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(val.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var medi_details = {
                event_name: val.event_name, event_datetime: event_dateTime, value: val.quantity, description: val.description, event_type: "alert_medication",
                event_options: {
                    meal: val.meals, remainder_repeat: val.remainder_repeat, repeat_category: val.event_category, repeat_value: this.repeatValue, medicine_type: val.medicine_type, dossage: val.dossage
                }
            };
            this.addconfirmation(val, medi_details);
        }
    };
    AddMedicationPage.prototype.addconfirmation = function (val, medi_details) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alert',
                                message: 'Are you sure to submit' + ' ' + (val.event_name).bold() + ' ' + '?',
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
                                            _this.Progress = true;
                                            // this.service.commonPost(medi_details).subscribe(res=>{
                                            //   let getData:any=res;
                                            //   this.getEventId=res['event']['id'];
                                            //   this.assignSchedule(val)
                                            // })
                                            console.log(medi_details);
                                            _this.database.createAnEvent(medi_details).then(function (res) {
                                                var getData = res;
                                                _this.getEventId = res['event_id'];
                                                _this.assignSchedule(val, medi_details);
                                            }).catch(function (error) {
                                                console.log(error);
                                                _this.Progress = false;
                                            });
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
    AddMedicationPage.prototype.assignSchedule = function (val, medi_data) {
        var _this = this;
        var repeatAlarmValue = [];
        var getDate = new Date(val.event_datetime);
        var getTime = new Date(val.event_time);
        var getHours = getTime.getHours();
        var gettMinutes = getTime.getMinutes();
        var getSeconds = getTime.getSeconds();
        var getMilliseconds = getTime.getMilliseconds();
        getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
        var repeatHours = getDate.getHours();
        var repeatMinutes = getDate.getMinutes();
        if (val.remainder_repeat == true) {
            if (val.event_category == 'days') {
                repeatAlarmValue = this.repeatValue.map(function (res, index) {
                    var ID = _this.getEventId + '' + Number(index + 1);
                    _this.localNotifications.schedule({
                        id: ID,
                        title: val.event_name,
                        icon: 'assets/img/play1.png',
                        attachments: ["assets/img/play1.png"],
                        text: 'Medication Alert',
                        trigger: {
                            count: 1,
                            every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                        },
                        data: { secret: _this.getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null,
                        actions: [
                            { id: 'yes', title: 'Yes' },
                            { id: 'no', title: 'No' }
                        ]
                    });
                });
                if (this.fileuri.length > 0) {
                    this.sample(this.getEventId, medi_data);
                }
                else {
                    this.Progress = false;
                    this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                }
                //  this.scheduleNotifications(repeatAlarmValue,this.getEventId);
            }
            else if (val.event_category == 'others') {
                var date = new Date().getUTCMonth();
                var monthValue = Number(this.repeatValue[0].charAt(0));
                console.log(monthValue);
                // let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
                // if(monthValue == 3){
                //    this.localNotifications.schedule({
                //       id: uniqueTime,
                //       title: val.event_name,
                //       icon:'assets/img/ico.png',
                //       attachments:[this.store_photos[0]],
                //       text: 'You just got notified :)',
                //       trigger: {
                //         count: 1,
                //         every:{ quarter:date, hour: repeatHours, minute: repeatMinutes },
                //       },
                //       data: { secret:this.getEventId },
                //       lockscreen:true,
                //       vibrate: true,
                //       priority: 2,
                //       foreground: true,
                //       sound: null
                //     })
                //     if(this.fileuri.length >0){
                //       this.sample(this.getEventId);
                //      }else{
                //       this.Progress=false;
                //       this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                //      }
                // }else if(monthValue == 1){
                // this.localNotifications.schedule({
                //       id: uniqueTime,
                //       title: val.event_name,
                //       icon:'assets/img/ico.png',
                //       attachments:[this.store_photos[0]],
                //       text: 'You just got notified :)',
                //       trigger: {
                //         count: 1,
                //         every:{  weekOfMonth:date, hour: repeatHours, minute: repeatMinutes  },
                //       },
                //       data: { secret:this.getEventId },
                //       lockscreen:true,
                //       vibrate: true,
                //       priority: 2,
                //       foreground: true,
                //       sound: null
                //     })
                //     if(this.fileuri.length >0){
                //       this.sample(this.getEventId);
                //      }else{
                //       this.Progress=false;
                //       this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                //      }
                // }
            }
        }
        else {
            var ID = this.getEventId + '' + 1;
            this.localNotifications.schedule({
                id: ID,
                title: val.event_name,
                icon: 'assets/img/ico.png',
                attachments: [this.notify_image],
                text: 'Medication Alert',
                trigger: { at: new Date(getDate.getTime()) },
                data: { secret: this.getEventId },
                lockscreen: true,
                vibrate: true,
                priority: 2,
                foreground: true,
                sound: null
            });
            if (this.fileuri.length > 0) {
                this.sample(this.getEventId, medi_data);
            }
            else {
                this.Progress = false;
                this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
            }
        }
    };
    AddMedicationPage.prototype.scheduleNotifications = function (data, getEventId) {
        if (data != 'test') {
            this.localNotifications.schedule(data);
        }
        if (this.fileuri.length > 0) {
            this.sample(this.getEventId);
        }
        else {
            this.Progress = false;
            this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
        }
    };
    AddMedicationPage.prototype.otherCheck = function (event) {
        if (event.detail.value == 'Others') {
            var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required];
            this.addform.controls['unit'].setValidators(validators);
            this.addform.updateValueAndValidity();
            this.addform.controls['unit'].updateValueAndValidity();
        }
        else {
            this.addform.controls['unit'].clearValidators();
            this.addform.updateValueAndValidity();
            this.addform.controls['unit'].updateValueAndValidity();
        }
    };
    AddMedicationPage.prototype.checkValue = function (event) {
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    AddMedicationPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    AddMedicationPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
    };
    AddMedicationPage.prototype.repeatCheck = function (event) {
        //this.defaultMonth= '1 mo.';
        this.status = event.detail.checked;
        console.log();
        if (this.addform['value']['event_category'] != undefined && this.addform['value']['event_category'] != null && this.addform['value']['event_category'] != '') {
            this.repeatType = this.addform['value']['event_category'];
            // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
            //   this.repeatValue.push(this.defaultMonth);
            // }
        }
        else {
            this.repeatType = 'days';
            this.addform['value']['event_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    //}
    AddMedicationPage.prototype.sample = function (event_id, medi_data) {
        // const fileTransfer: FileTransferObject = this.transfer.create();
        var _this = this;
        // let data={id:event_id}
        //  for(var i=0;i<this.fileuri.length;i++){
        // console.log("inside loop test");
        // let options: FileUploadOptions = {
        //  fileKey: 'event_assets',
        //  fileName: this.fileuri[i].fileName,
        //  mimeType: 'multipart/form-data',
        //  params:data,
        //  chunkedMode: false,
        //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        // }
        //   fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
        //     console.log(i)
        //     console.log(this.fileuri.length-i)
        //     console.log(this.fileuri.length)
        //     if(this.fileuri.length-i ==0){
        //       this.Progress=false;
        //      this.presentToast('Medication added successfully');
        //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],{skipLocationChange: true });
        //    }else{
        //    }
        //   },error=>{
        //     this.Progress=false;
        //     this.presentToast("File upload doesn't completed succesfully")
        //     console.log(error)
        //   })   
        //  }
        var data = medi_data;
        data['event_options']['localImagePath'] = this.fileuri;
        this.database.updateAnEventImage(event_id, data).then(function (res) {
            console.log(res);
            _this.Progress = false;
            _this.router.navigate(['self-care-tabs/tabs/tab1/alerts'], { skipLocationChange: true });
        })
            .catch(function (error) {
            _this.Progress = false;
            console.log(error);
        });
    };
    AddMedicationPage.prototype.selectimage = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 3,
            quality: 100,
            width: 600,
            height: 600,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.notify_image = results[0];
                _this.store_photos.push(_this.webview.convertFileSrc(results[i]));
                console.log(_this.store_photos, 'webviewuri');
                _this.localFilePath = results[i];
                _this.file.resolveLocalFilesystemUrl(results[i]).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    console.log(fileMeta);
                    _this.audioFileName = fileMeta.name;
                    _this.cdvFilePath = fileMeta['localURL'];
                    _this.fileuri.push({ "localURI": _this.localFilePath, "globalURI": null, "cdvFilePath": _this.cdvFilePath, "fileName": _this.audioFileName, "delete": false });
                    console.log(_this.fileuri, 'fileuri');
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddMedicationPage.prototype.AddImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Gallery',
                                    role: 'image',
                                    icon: 'image',
                                    handler: function () {
                                        _this.selectimage();
                                        console.log('camera clicked');
                                    }
                                }, {
                                    text: 'camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture();
                                        console.log('gallery clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddMedicationPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.store_photos.push(_this.webview.convertFileSrc(imageData));
            console.log(_this.store_photos, 'webviewuri');
            _this.localFilePath = imageData;
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                return new Promise(function (resolve, reject) {
                    fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                });
            }).then(function (fileMeta) {
                console.log(fileMeta);
                _this.audioFileName = fileMeta.name;
                _this.cdvFilePath = fileMeta['localURL'];
                _this.fileuri.push({ "localURI": _this.localFilePath, "globalURI": null, "cdvFilePath": _this.cdvFilePath, "fileName": _this.audioFileName, "delete": false });
                console.log(_this.fileuri, 'fileuri');
            });
        }, function (err) {
            // Handle error
        });
    };
    AddMedicationPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    AddMedicationPage.prototype.removeImage = function (i) {
        this.store_photos.splice(i, 1);
        // if(this.store_photos.length==0){
        //   this.active=false;
        //   }
    };
    AddMedicationPage.prototype.cancel = function () {
        this.addform.reset();
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    AddMedicationPage.prototype._keyPress = function (event) {
        var pattern = /([\d]+)/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    };
    AddMedicationPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    AddMedicationPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_14__["Toast"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__["DataBaseSummaryProvider"] }
    ]; };
    AddMedicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-medications',
            template: __webpack_require__(/*! raw-loader!./add-medications.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-medications/add-medications.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_14__["Toast"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__["DataBaseSummaryProvider"]])
    ], AddMedicationPage);
    return AddMedicationPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.ts ***!
  \****************************************************************************/
/*! exports provided: AddVitalsAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVitalsAlertPage", function() { return AddVitalsAlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












var AddVitalsAlertPage = /** @class */ (function () {
    function AddVitalsAlertPage(toast, localNotifications, alertController, datepipe, service, fb, route, router, statusBar, database, databaseSummary) {
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.datepipe = datepipe;
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.submitted = false;
        this.Progress = false;
        this.status = false;
        this.repeatType = 'days';
        this.initialMeal = 'before_meal';
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false }, { day: '6 mo.', dayCode: 6, checked: false }, { day: '12 mo.', dayCode: 12, checked: false }] }];
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
    }
    AddVitalsAlertPage.prototype.ngOnInit = function () {
    };
    AddVitalsAlertPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.todaydate = new Date().toISOString();
        this.vital_alert_form = this.fb.group({
            event_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_type: ['alert_vital'],
            meal: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remainder_repeat: [this.status],
            repeat_category: [this.repeatType]
        });
        // this.service.vitalReading().subscribe(res => {
        //   this.vital_options = res['enum_masters'];
        // })
        this.databaseSummary.getEnumMasters('vital').then(function (res) {
            _this.vital_options = res['enum_masters'];
        })
            .catch(function (error) { console.log(error); });
    };
    Object.defineProperty(AddVitalsAlertPage.prototype, "f", {
        get: function () { return this.vital_alert_form.controls; },
        enumerable: true,
        configurable: true
    });
    AddVitalsAlertPage.prototype.validateBeforeSubmit = function (form) {
        console.log(form);
        this.submitted = true;
        if (form.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        if (this.vital_alert_form.invalid) {
            return;
        }
        else {
            var repeatOrder = this.repeatOrder[0];
            var new1 = new Date(form.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(form.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var data = {
                event_name: form.event_name,
                event_datetime: event_dateTime,
                event_type: form.event_type,
                event_options: {
                    meal: form.meal,
                    remainder_repeat: form.remainder_repeat,
                    repeat_category: form.repeat_category,
                    repeat_value: this.repeatValue
                }
            };
            console.log(data);
            this.addconfirmation(form, data);
        }
    };
    AddVitalsAlertPage.prototype.addconfirmation = function (form, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alert',
                                message: 'Are you sure to submit' + ' ' + (form.event_name).bold() + ' ' + '?',
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
                                            _this.Progress = true;
                                            //   this.service.commonPost(data).subscribe(res=>{
                                            //     let getData:any=res;
                                            //     let getEventId:any=res['event']['id'];
                                            //     console.log(this.repeatValue)
                                            //     let repeatAlarmValue=[];
                                            //     let getDate = new Date(form.event_datetime)
                                            //     let getTime:any = new Date(form.event_time)
                                            //     let getHours = getTime.getHours();
                                            //     let gettMinutes = getTime.getMinutes();
                                            //     let getSeconds = getTime.getSeconds();
                                            //     let getMilliseconds = getTime.getMilliseconds();
                                            //     getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
                                            //     let repeatHours = getDate.getHours();
                                            //     let repeatMinutes = getDate.getMinutes();
                                            //     if(form.remainder_repeat==true){
                                            //       if(form.repeat_category=='days'){
                                            //           repeatAlarmValue=this.repeatValue.map((res,index)=>{
                                            //             let ID:any=getEventId+''+Number(index+1);
                                            //       this.localNotifications.schedule({
                                            //             id: ID,
                                            //             title: form.event_name,
                                            //             text: 'Vital Alert',
                                            //             trigger: {
                                            //               count: 1,
                                            //               every:{ weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                                            //             },
                                            //             data: { secret:getEventId },
                                            //             lockscreen:true,
                                            //             vibrate: true,
                                            //             priority: 2,
                                            //             foreground: true,
                                            //             sound: null
                                            //           })
                                            //         })
                                            //               this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
                                            //       }else if(form.repeat_category=='others'){
                                            //         this.Progress=false;
                                            //         this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
                                            //       }
                                            //     }else{
                                            //       let ID:any=getEventId+''+1;
                                            //       this.localNotifications.schedule({
                                            //                       id: ID,
                                            //                       title: form.event_name,
                                            //                       text: 'Vital Alert',
                                            //                       trigger: {at: new Date(getDate.getTime())},
                                            //                       data: { secret:getEventId },
                                            //                       lockscreen:true,
                                            //                       vibrate: true,
                                            //                       priority: 2,
                                            //                       foreground: true,
                                            //                       sound: null
                                            //                     })
                                            //           this.router.navigate(['self-care-tabs/tabs/tab1/alerts']) 
                                            //     }
                                            // },error=>{
                                            //   this.Progress=false;
                                            // });
                                            _this.database.createAnEvent(data).then(function (res) {
                                                var getData = res;
                                                var getEventId = res['event_id'];
                                                console.log(_this.repeatValue);
                                                var repeatAlarmValue = [];
                                                var getDate = new Date(form.event_datetime);
                                                var getTime = new Date(form.event_time);
                                                var getHours = getTime.getHours();
                                                var gettMinutes = getTime.getMinutes();
                                                var getSeconds = getTime.getSeconds();
                                                var getMilliseconds = getTime.getMilliseconds();
                                                getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
                                                var repeatHours = getDate.getHours();
                                                var repeatMinutes = getDate.getMinutes();
                                                if (form.remainder_repeat == true) {
                                                    if (form.repeat_category == 'days') {
                                                        repeatAlarmValue = _this.repeatValue.map(function (res, index) {
                                                            var ID = getEventId + '' + Number(index + 1);
                                                            _this.localNotifications.schedule({
                                                                id: ID,
                                                                title: form.event_name,
                                                                text: 'Vital Alert',
                                                                trigger: {
                                                                    count: 1,
                                                                    every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                                                                },
                                                                data: { secret: getEventId },
                                                                lockscreen: true,
                                                                vibrate: true,
                                                                priority: 2,
                                                                foreground: true,
                                                                sound: null
                                                            });
                                                        });
                                                        _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                    }
                                                    else if (form.repeat_category == 'others') {
                                                        _this.Progress = false;
                                                        _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                    }
                                                }
                                                else {
                                                    var ID = getEventId + '' + 1;
                                                    _this.localNotifications.schedule({
                                                        id: ID,
                                                        title: form.event_name,
                                                        text: 'Vital Alert',
                                                        trigger: { at: new Date(getDate.getTime()) },
                                                        data: { secret: getEventId },
                                                        lockscreen: true,
                                                        vibrate: true,
                                                        priority: 2,
                                                        foreground: true,
                                                        sound: null
                                                    });
                                                    _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                                                }
                                            }).catch(function (error) { console.log(error); });
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
    AddVitalsAlertPage.prototype.scheduleNotifications = function (data, boolean) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    AddVitalsAlertPage.prototype.checkValue = function (event) {
        console.log(event);
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    AddVitalsAlertPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    AddVitalsAlertPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
    };
    AddVitalsAlertPage.prototype.repeatCheck = function (event) {
        this.status = event.detail.checked;
        if (this.vital_alert_form['value']['repeat_category'] != undefined && this.vital_alert_form['value']['repeat_category'] != null && this.vital_alert_form['value']['repeat_category'] != '') {
            this.repeatType = this.vital_alert_form['value']['repeat_category'];
        }
        else {
            this.repeatType = 'days';
            this.vital_alert_form['value']['repeat_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    AddVitalsAlertPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    AddVitalsAlertPage.prototype.cancel = function () {
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    AddVitalsAlertPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    AddVitalsAlertPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
    ]; };
    AddVitalsAlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vitals-alert',
            template: __webpack_require__(/*! raw-loader!./add-vitals-alert.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
    ], AddVitalsAlertPage);
    return AddVitalsAlertPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/alerts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/self-care/alerts/alerts.module.ts ***!
  \***************************************************/
/*! exports provided: AlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alerts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts.page */ "./src/app/self-care/alerts/alerts.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_medications_add_medications_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-medications/add-medications.page */ "./src/app/self-care/alerts/add-medications/add-medications.page.ts");
/* harmony import */ var _edit_medications_edit_medications_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-medications/edit-medications.page */ "./src/app/self-care/alerts/edit-medications/edit-medications.page.ts");
/* harmony import */ var _add_vitals_alert_add_vitals_alert_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-vitals-alert/add-vitals-alert.page */ "./src/app/self-care/alerts/add-vitals-alert/add-vitals-alert.page.ts");
/* harmony import */ var _edit_vitals_alert_edit_vitals_alert_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-vitals-alert/edit-vitals-alert.page */ "./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.ts");
/* harmony import */ var _add_general_add_general_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-general/add-general.page */ "./src/app/self-care/alerts/add-general/add-general.page.ts");
/* harmony import */ var _edit_general_edit_general_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-general/edit-general.page */ "./src/app/self-care/alerts/edit-general/edit-general.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
























var routes = [
    {
        path: '',
        component: _alerts_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"],
    },
    {
        path: 'add-medications',
        component: _add_medications_add_medications_page__WEBPACK_IMPORTED_MODULE_8__["AddMedicationPage"],
    },
    {
        path: 'edit-medications',
        component: _edit_medications_edit_medications_page__WEBPACK_IMPORTED_MODULE_9__["EditMedicationPage"],
    },
    {
        path: 'add-vitals',
        component: _add_vitals_alert_add_vitals_alert_page__WEBPACK_IMPORTED_MODULE_10__["AddVitalsAlertPage"],
    },
    {
        path: 'edit-vitals',
        component: _edit_vitals_alert_edit_vitals_alert_page__WEBPACK_IMPORTED_MODULE_11__["EditVitalsAlertPage"],
    },
    {
        path: 'add-general',
        component: _add_general_add_general_page__WEBPACK_IMPORTED_MODULE_12__["AddOthersPage"],
    },
    {
        path: 'edit-general',
        component: _edit_general_edit_general_page__WEBPACK_IMPORTED_MODULE_13__["EditOthersPage"],
    }
];
var AlertPageModule = /** @class */ (function () {
    function AlertPageModule() {
    }
    AlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alerts_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"], _add_medications_add_medications_page__WEBPACK_IMPORTED_MODULE_8__["AddMedicationPage"], _edit_medications_edit_medications_page__WEBPACK_IMPORTED_MODULE_9__["EditMedicationPage"], _add_vitals_alert_add_vitals_alert_page__WEBPACK_IMPORTED_MODULE_10__["AddVitalsAlertPage"],
                _edit_vitals_alert_edit_vitals_alert_page__WEBPACK_IMPORTED_MODULE_11__["EditVitalsAlertPage"], _add_general_add_general_page__WEBPACK_IMPORTED_MODULE_12__["AddOthersPage"], _edit_general_edit_general_page__WEBPACK_IMPORTED_MODULE_13__["EditOthersPage"]],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["ImagePicker"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__["WebView"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__["Toast"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__["Camera"],
                _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__["LocalNotifications"],
                _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_21__["DataBaseSummaryProvider"]
            ]
        })
    ], AlertPageModule);
    return AlertPageModule;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/alerts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/self-care/alerts/alerts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #0e9bff;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h4 {\n    font-size: 1.1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  ion-list ion-item h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list ion-item p span:not(:last-child) {\n      margin-right: 2px; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-card {\n  box-shadow: none;\n  border: 1px solid #d8dbde;\n  max-height: 120px;\n  min-height: 120px;\n  height: 100%; }\n  ion-card:not(.ion-no-margin) {\n    margin: 0; }\n  ion-card:not(.has_image) {\n    --background: transparent;\n    border: 1px dashed #9e9fa0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-card:not(.has_image) p {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-card ion-card-content {\n    padding: 0;\n    height: 100%; }\n  ion-card ion-card-content img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      background-color: #d8dbde; }\n  ion-card ion-button {\n    --padding-end: 0;\n    --padding-start: 0;\n    --border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0;\n    position: absolute;\n    bottom: 6px;\n    right: 6px; }\n  .edit {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: #483df6;\n  margin: 0;\n  height: auto; }\n  .edit svg {\n    margin: 1px 2px 0 0; }\n  .pres_detail {\n  padding: 0 16px; }\n  .pres_detail h4 {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: unset;\n    line-height: inherit;\n    color: #2c2c2c;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n  .pres_detail h4 span:last-child {\n      font-size: 12px; }\n  .pres_detail p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 4px; }\n  ion-slides {\n  --bullet-background: #484848; }\n  ion-slides ion-img {\n    height: calc(100vh - 235px);\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 40px;\n    width: 100%;\n    background-color: #dddddd; }\n  ion-grid:not(.medic_img) {\n  padding: 0; }\n  ion-grid:not(.medic_img) ion-row ion-col {\n    padding: 0; }\n  ion-grid:not(.medic_img) ion-row ion-col .date_filter {\n      margin-right: 10px; }\n  ion-grid:not(.medic_img) ion-row ion-col ion-item {\n      --border-color:transparent;\n      margin-bottom: 0;\n      --inner-padding-end: 0; }\n  ion-grid:not(.medic_img) ion-row ion-col ion-item ion-checkbox {\n        --border-radius: 0px;\n        margin: 0; }\n  ion-grid:not(.medic_img) ion-row ion-col ion-item ion-radio {\n        margin: 0; }\n  ion-grid:not(.medic_img) ion-row ion-col ion-item ion-label {\n        --color: #2c2c2c; }\n  ion-grid:not(.medic_img) ion-row ion-col ion-select {\n      max-width: 100%;\n      width: 100%;\n      text-align: right; }\n  ion-grid:not(.medic_img) ion-row.repeat ion-item ion-checkbox + ion-label {\n    margin-left: 10px; }\n  ion-grid:not(.medic_img) ion-row.repeat_days ion-col {\n    width: 14.28%;\n    max-width: 14.28%; }\n  ion-grid:not(.medic_img) ion-row.repeat_others ion-col {\n    width: 20%;\n    max-width: 20%; }\n  ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item {\n    margin: 0;\n    width: 100%; }\n  ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-checkbox, ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-radio {\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      position: absolute; }\n  ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-checkbox + ion-label, ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-radio + ion-label {\n        --color: #d2d2d2;\n        left: 0;\n        right: 0;\n        margin: 0;\n        height: 100%;\n        position: absolute;\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-checkbox.checkbox-checked + ion-label, ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-checkbox.radio-checked + ion-label, ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-radio.checkbox-checked + ion-label, ion-grid:not(.medic_img) ion-row:not(:first-child) ion-item ion-radio.radio-checked + ion-label {\n        --color: #483df6;\n        font-weight: 500; }\n  .medic_img + .date_grid {\n  margin: 16px -16px 20px; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px;\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2FsZXJ0cy9hbGVydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEQTtFQXhCSSxpQkEyQnNCO0VBMUJ0QixnQkEwQjJCO0VBeEI3QixpQkF3QmdDO0VBdkJoQywwQkF1QjRDO0VBdEI1QyxnQkFzQmtEO0VBckJsRCxvQkFxQjJEO0VBcEIzRCxjQW9Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQTFDRSxvQkFnRG9CO0VBaERwQixhQWdEb0I7RUEvQ3BCLGlCQStDNEI7RUE5QzVCLHlCQThDb0M7VUE5Q3BDLG1CQThDb0M7RUE3Q3BDLHVCQTZDMkM7VUE3QzNDLHNCQTZDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUEzREksZUE2RW9CO0lBNUVwQixnQkE0RXlCO0lBMUUzQixpQkEwRThCO0lBekU5QiwwQkF5RTBDO0lBeEUxQyxrQkF3RWtEO0lBdkVsRCxvQkF1RTJEO0lBdEUzRCxjQXNFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNCdkI7SUFpQ1EsaUJBQWlCLEVBQUE7RUFqQ3pCO0lBdUNRLGlCQUFpQixFQUFBO0VBTXpCO0VBQ0UsU0FBUztFQUNULDBDQUEwQyxFQUFBO0VBRzVDO0VBN0dJLGVBOEdnQjtFQTdHaEIsZ0JBNkdxQjtFQTNHdkIsaUJBMkcwQjtFQTFHMUIsMEJBMEdzQztFQXpHdEMsa0JBeUc4QztFQXhHOUMsb0JBd0d1RDtFQXZHdkQsV0F1RzZEO0VBQzdELGdCQUFRO0VBQ1IseUJBQWlCLEVBQUE7RUFIbkI7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFRSSxxQkFBYTtJQUNiLGdEQUF3QztJQUF4Qyx3Q0FBd0MsRUFBQTtFQVQ1QztNQVlRLGFBQWEsRUFBQTtFQVpyQjtJQWxHRSxxQkFvSHlCO0lBbkh6QixtQkFtSGdDO0lBbEhoQyxxQkFrSHlDLEVBQUE7RUFsQjNDO01Bc0JVLGVBQWUsRUFBQTtFQU96QjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGlDQUFxQjtFQUNyQiwrQkFBbUI7RUFDbkIsMkJBQWU7RUFDZixxQkFBZ0I7RUFDaEIscUJBQWU7RUFDZixtQkFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQVE7RUFDUiwwQkFBa0I7RUFDbEIsWUFBVTtFQUNWLHFCQUFpQjtFQUNqQixtQkFBYztFQUNkLHFCQUFnQjtFQUNoQixrQkFBYztFQUNkLHVCQUFlLEVBQUE7RUFHakI7O0VBRUUscUJBQWdCO0VBQ2hCLDJDQUFhO0VBQ2IscUJBQWlCO0VBQ2pCLG1CQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUF2S1AsZUF3S2dCO0VBdktoQixnQkF1S3FCO0VBckt2QixpQkFxSzBCO0VBcEsxQiwwQkFvS3NDO0VBbkt0QyxrQkFtSzhDO0VBbEs5QyxvQkFrS3VEO0VBakt2RCxXQWlLNkQsRUFBQTtFQVYvRDs7SUFhSSxpQkFBaUIsRUFBQTtFQWJyQjs7TUFlTSxhQUFhLEVBQUE7RUFLbkI7RUFDRSx5QkFBeUI7RUFuTHZCLGVBb0xnQjtFQW5MaEIsZ0JBbUxxQjtFQWpMdkIsaUJBaUwwQjtFQWhMMUIsMEJBZ0xzQztFQS9LdEMsa0JBK0s4QztFQTlLOUMsb0JBOEt1RDtFQTdLdkQsY0E2S2dFO0VBbktoRSxvQkFvS2tCO0VBcEtsQixhQW9La0I7RUFuS2xCLGlCQW1LMEI7RUFsSzFCLHlCQWtLa0M7VUFsS2xDLG1CQWtLa0M7RUFqS2xDLHdCQWlLMEM7VUFqSzFDLHVCQWlLMEMsRUFBQTtFQUc1QztFQUNFLHlDQUF5QztFQUN6QyxtQkF0TmE7RUF1TmIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBO0VBTFo7SUF4TEksZUFnTWtCO0lBL0xsQixnQkErTHVCO0lBN0x6QixpQkE2TDRCO0lBNUw1QiwwQkE0THdDO0lBM0x4QyxrQkEyTGdEO0lBMUxoRCxpQkEwTHNEO0lBekx0RCxXQXlMNEQ7SUFDMUQsZ0JBQVE7SUFDUiwwQkFBa0I7SUFDbEIsd0JBQWdCO0lBQ2hCLGtDQUEwQjtJQUMxQix1QkFBbUI7SUFDbkIsbUJBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWE7RUFDYixxQkFBaUI7RUFDakIsbUJBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxVQUFVLEVBQUE7RUFQWjtJQVVJLGVBQWUsRUFBQTtFQVZuQjtNQWFNLHFCQUFhO01BQ2IsK0JBQXVCO01BQ3ZCLDZCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsZ0JBQVE7TUFDUiwwQkFBa0IsRUFBQTtFQWxCeEI7SUEzTUksZUFrT2tCO0lBak9sQixnQkFpT3VCO0lBL056QixpQkErTjRCO0lBOU41QiwwQkE4TndDO0lBN054QyxtQkE2TmlEO0lBNU5qRCxvQkE0TjBEO0lBM04xRCxXQTJOZ0U7SUFDOUQseUJBQWE7SUFDYixnQkFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQixFQUFBO0VBN0J2QjtNQWdDTSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQW5DN0I7TUF1Q00sV0FBVztNQUNYLFlBQVk7TUFuUGQsZUFvUG9CO01BblBwQixnQkFtUHlCO01BalAzQixpQkFpUDhCO01BaFA5QixxQkFnUHFDO01BL09yQyxtQkErTzhDO01BOU85QyxvQkE4T3VEO01BN092RCxXQTZPNkQsRUFBQTtFQXpDL0Q7SUE4Q0kscUJBQWE7SUFDYiw4QkFBc0I7SUFDdEIsNkJBQXFCO0lBQ3JCLGdCQUFRO0lBQ1IscUJBQWE7SUFDYiw0QkFBb0I7SUFDcEIsd0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUF4UGQsaUJBeVBxQjtJQXhQckIsbUJBd1A0QjtJQXZQNUIscUJBdVBxQyxFQUFBO0VBekR2QztNQTRETSx5QkFBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLHlCQUF3QjtjQUF4Qix3QkFBd0I7TUF4UTFCLGVBeVFvQjtNQXhRcEIsZ0JBd1F5QjtNQXRRM0IsaUJBc1E4QjtNQXJROUIscUJBcVFxQztNQXBRckMsbUJBb1E4QztNQW5ROUMsb0JBbVF1RDtNQWxRdkQsV0FrUTZELEVBQUE7RUE5RC9EO01Ba0VNLGNBQWMsRUFBQTtFQWxFcEI7TUFzRU0sb0JBQWE7TUFBYixhQUFhLEVBQUE7RUF0RW5CO01BMkVNLG1DQUEyQjtNQUEzQiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLDBCQUFzQjtNQUN0Qix5Q0FBeUM7TUE5UTdDLGlCQStRdUI7TUE5UXZCLG1CQThROEI7TUE3UTlCLHFCQXpDYSxFQUFBO0VBdU9mO1FBa0ZRLGFBQWEsRUFBQTtFQWxGckI7UUFzRlEsYUFBYSxFQUFBO0VBZ0JyQjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQVEsRUFBQTtFQUlaO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBSVo7RUFFRSxnQkFBUTtFQUVSLGtCQUFhO0VBQ2IsaUJBQVk7RUFwVVYsZUFxVWdCO0VBcFVoQixnQkFvVXFCO0VBbFV2QixpQkFrVTBCO0VBalUxQixxQkFpVWlDO0VBaFVqQyxrQkFnVXlDO0VBL1R6QyxvQkErVGtEO0VBOVRsRCxXQThUd0QsRUFBQTtFQUcxRDtFQUNFLG9CQUFvQixFQUFBO0VBR3RCO0VBM1RFLG9CQTRUa0I7RUE1VGxCLGFBNFRrQjtFQTNUbEIsaUJBMlQwQjtFQTFUMUIseUJBMFRrQztVQTFUbEMsbUJBMFRrQztFQXpUbEMsdUJBeVR5QztVQXpUekMsc0JBeVR5QztFQUN6QywwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVUsRUFBQTtFQVBaO0lBVUksU0FBUztJQUNULGtCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWE7SUF6VmIsZUEwVmtCO0lBelZsQixnQkF5VnVCO0lBdlZ6QixpQkF1VjRCO0lBdFY1QiwwQkFzVndDO0lBclZ4QyxrQkFxVmdEO0lBcFZoRCxvQkFvVnlEO0lBblZ6RCxXQW1WK0Q7SUFDN0QsWUFBWSxFQUFBO0VBZmhCO01Ba0JNLHFCQUFhO01BQ2IsK0JBQXVCO01BQ3ZCLDZCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsZ0JBQVE7TUFDUiwwQkFBa0IsRUFBQTtFQXZCeEI7TUEwQk0sa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtFQTNCbEI7UUE1VUksZUF5V3NCO1FBeFd0QixnQkF3VzJCO1FBdFc3QixpQkFzV2dDO1FBcldoQywwQkFxVzRDO1FBcFc1QyxrQkFvV29EO1FBbldwRCxvQkFtVzZEO1FBbFc3RCxjQWtXc0U7UUFDaEUsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlLEVBQUE7RUFuQ3ZCO1FBdUNVLGlCQUFpQixFQUFBO0VBdkMzQjtRQTRDVSxnQkFBZ0IsRUFBQTtFQTVDMUI7UUFpRFUsZUFBZSxFQUFBO0VBakR6QjtJQXdESSxhQUFhLEVBQUE7RUFJakI7RUFDRSxnQkFBUTtFQUNSLHdCQUFnQjtFQUNoQixtQkFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFHbkI7RUFoWUUsb0JBdVlvQjtFQXZZcEIsYUF1WW9CO0VBdFlwQixlQXNZMEI7RUFyWTFCLHlCQXFZa0M7VUFyWWxDLG1CQXFZa0M7RUFwWWxDLHVCQW9ZeUM7VUFwWXpDLHNCQW9ZeUMsRUFBQTtFQVAzQztJQVVNLDJCQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFYdEI7TUFjUSxnQkFBUSxFQUFBO0VBU2hCO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBO0VBRjFCO0lBSUksVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBTHRCO01BU1EsV0FBVztNQUNYLFVBQVU7TUFDVix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWSxFQUFBO0VBZnBCO01BeGFJLGlCQTJic0I7TUExYnRCLGdCQTBiMkI7TUF4YjdCLGlCQXdiZ0M7TUF2YmhDLG9CQXVic0M7TUF0YnRDLGtCQXNiOEM7TUFyYjlDLG9CQXFidUQ7TUFwYnZELGNBbENrQjtNQTRDbEIsb0JBMmFzQjtNQTNhdEIsYUEyYXNCO01BMWF0QixpQkEwYThCO01BemE5Qix5QkF5YXNDO2NBemF0QyxtQkF5YXNDO01BeGF0Qyx1QkF3YTZDO2NBeGE3QyxzQkF3YTZDO01BQ3pDLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7RUF0QmxCO01BeUJNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUyxFQUFBO0VBS2Y7RUFDRSxZQUFZLEVBQUE7RUFHZDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUE3YmxCLG9CQThia0I7RUE5YmxCLGFBOGJrQjtFQTdibEIsaUJBNmIwQjtFQTViMUIseUJBNGJrQztVQTVibEMsbUJBNGJrQztFQTNibEMsd0JBMmIwQztVQTNiMUMsdUJBMmIwQyxFQUFBO0VBSDVDO0lBNWNJLGtCQWtkcUI7SUFqZHJCLGdCQWlkMEI7SUEvYzVCLGlCQStjK0I7SUE5Yy9CLDBCQThjMkM7SUE3YzNDLGtCQTZjbUQ7SUE1Y25ELG9CQTRjNEQ7SUEzYzVELGNBbENrQixFQUFBO0VBdWVwQjtJQTVjSSxrQkFzZHFCO0lBcmRyQixnQkFxZDBCO0lBbmQ1QixpQkFtZCtCO0lBbGQvQiwwQkFrZDJDO0lBamQzQyxrQkFpZG1EO0lBaGRuRCxvQkFnZDREO0lBL2M1RCxjQStjcUU7SUFDbkUsWUFBWSxFQUFBO0VBWGhCO01BYU0sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUFLekI7RUFDRSxjQUFjO0VBQ2QseUJBemZjO0VBMGZkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkE5ZmMsRUFBQTtFQXVmaEI7SUFqZUksaUJBMmVvQjtJQTFlcEIsZ0JBMGV5QjtJQXhlM0IsaUJBd2U4QjtJQXZlOUIsMEJBdWUwQztJQXRlMUMsa0JBc2VrRDtJQXJlbEQsb0JBcWUyRDtJQXBlM0QsY0FsQ2tCO0lBdWdCaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFkckI7TUFnQk0seUNBQXlDLEVBQUE7RUFoQi9DO0lBb0JJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUF0QnBCO0lBeUJJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixVQUFVLEVBQUE7RUFyQ2Q7SUF3Q0ksY0FBYyxFQUFBO0VBR2xCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsVUFBVTtJQUNWLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBUHhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsVUFBVTtJQUNWLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBR3hCO0VBQ0UscUJBQWEsRUFBQTtFQURmO0lBR0ksbUVBQWE7SUFDYiwyQkFBZTtJQUNmLG1CQUFlO0lBQ2YsZ0JBQVE7SUFDUixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRLEVBQUE7RUFWWjtNQXRoQkksaUJBa2lCc0I7TUFqaUJ0QixnQkFpaUIyQjtNQS9oQjdCLGlCQStoQmdDO01BOWhCaEMsb0JBOGhCc0M7TUE3aEJ0QyxpQkE2aEI2QztNQTVoQjdDLG9CQTRoQnNEO01BM2hCdEQsY0EyaEIrRCxFQUFBO0VBWmpFO0lBZ0JJLFlBQVksRUFBQTtFQWhCaEI7SUFtQkksb0lBQXVFO0lBQXZFLDBFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVLEVBQUE7RUExQmQ7TUF0aEJJLGlCQWtqQnNCO01BampCdEIsZ0JBaWpCMkI7TUEvaUI3QixpQkEraUJnQztNQTlpQmhDLG9CQThpQnNDO01BN2lCdEMsZ0JBNmlCNEM7TUE1aUI1QyxvQkE0aUJxRDtNQTNpQnJELGNBMmlCOEQ7TUFDMUQsU0FBUyxFQUFBO0VBN0JmO01BdGhCSSxpQkFzakJzQjtNQXJqQnRCLGdCQXFqQjJCO01BbmpCN0IsaUJBbWpCZ0M7TUFsakJoQyxvQkFrakJzQztNQWpqQnRDLGdCQWlqQjRDO01BaGpCNUMsb0JBZ2pCcUQ7TUEvaUJyRCxjQStpQjhEO01BQzFELFNBQVMsRUFBQTtFQUlmO0VBR00sMkJBQWUsRUFBQTtFQUhyQjtFQVlJLFVBQVUsRUFBQTtFQVpkO0lBU1EsdUJBQWUsRUFBQTtFQU12QjtFQUlRLHVCQUFlLEVBQUE7RUFRdkI7RUFFRSxnQkFBZ0IsRUFBQTtFQUZsQjtJQUlJLFNBQVM7SUFDVCxrQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFhO0lBN2xCYixlQThsQmtCO0lBN2xCbEIsZ0JBNmxCdUI7SUEzbEJ6QixpQkEybEI0QjtJQTFsQjVCLDBCQTBsQndDO0lBemxCeEMsa0JBeWxCZ0Q7SUF4bEJoRCxvQkF3bEJ5RDtJQXZsQnpELFdBdWxCK0Q7SUFDN0QsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQVZsQjtJQWFJLHFCQUFhO0lBQ2IsK0JBQXVCO0lBQ3ZCLDZCQUFxQjtJQUNyQiwyQkFBbUI7SUFDbkIsZ0JBQVE7SUFDUiwwQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFFBQVEsRUFBQTtFQUpWO0lBTUkseUJBQWE7SUFDYiwyQkFBZTtJQUNmLG1CQUFlO0lBQ2YsZ0JBQVEsRUFBQTtFQUlaO0VBQ0UscUJBQWE7RUFDYixrQkFBa0IsRUFBQTtFQUZwQjtJQXpuQkksaUJBNm5Cb0I7SUE1bkJwQixnQkE0bkJ5QjtJQTFuQjNCLGlCQTBuQjhCO0lBem5COUIsMEJBeW5CMEM7SUF4bkIxQyxrQkF3bkJrRDtJQXZuQmxELG9CQXVuQjJEO0lBdG5CM0QsY0FuQ2E7SUEwcEJYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQVQzQjtJQXpuQkksZUFxb0JrQjtJQXBvQmxCLGdCQW9vQnVCO0lBbG9CekIsaUJBa29CNEI7SUFqb0I1QixvQkFpb0JrQztJQWhvQmxDLGdCQWdvQndDO0lBL25CeEMsb0JBK25CaUQ7SUE5bkJqRCxjQW5DYTtJQWtxQlgsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFFakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFuQmY7SUFzQkksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7SUFsb0JkLG9CQW1vQm9CO0lBbm9CcEIsYUFtb0JvQjtJQWxvQnBCLGlCQWtvQjRCO0lBam9CNUIseUJBaW9Cb0M7WUFqb0JwQyxtQkFpb0JvQztJQWhvQnBDLHdCQWdvQjRDO1lBaG9CNUMsdUJBZ29CNEMsRUFBQTtFQTNCOUM7TUE2Qk0sVUFBVSxFQUFBO0VBN0JoQjtJQWlDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1Isb0JBQW9CLEVBQUE7RUFyQ3hCO01BZ0RNLGNBQWMsRUFBQTtFQzFzQnBCO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBSVo7RUFDRSxxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RURxQmpCLGVDcEJnQjtFRHFCaEIsZ0JDckJxQjtFRHVCdkIsaUJDdkIwQjtFRHdCMUIscUJDeEJpQztFRHlCakMsbUJDekIwQztFRDBCMUMsb0JDMUJtRDtFRDJCbkQsV0MzQnlELEVBQUE7RUFHM0Q7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURpQkksaUJDUnNCO0lEU3RCLGdCQ1QyQjtJRFc3QixpQkNYZ0M7SURZaEMsMEJDWjRDO0lEYTVDLG1CQ2JxRDtJRGNyRCxvQkNkOEQ7SURlOUQsY0FsQ2tCO0lDb0JkLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFaekI7SURpQkksaUJDRHNCO0lERXRCLGdCQ0YyQjtJREk3QixpQkNKZ0M7SURLaEMsMEJDTDRDO0lETTVDLG1CQ05xRDtJRE9yRCxvQkNQOEQ7SURROUQsY0FsQ2tCLEVBQUE7RUNVcEI7SURpQkksZUNHb0I7SURGcEIsZ0JDRXlCO0lEQTNCLGlCQ0E4QjtJREM5QixxQkNEcUM7SURFckMsbUJDRjhDO0lERzlDLG9CQ0h1RDtJREl2RCxjQ0pnRTtJQUM1RCxlQUFlLEVBQUE7RUFyQnJCO01Bd0JRLGlCQUFpQixFQUFBO0VBeEJ6QjtFRGlCSSxrQkNZcUI7RURYckIsZ0JDVzBCO0VEVDVCLGlCQ1MrQjtFRFIvQiwwQkNRMkM7RURQM0MsbUJDT29EO0VETnBELG9CQ002RDtFREw3RCxXQ0ttRTtFQUNqRSxnQkFBUTtFQUNSLDBCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhLEVBQUE7RUFuQ2pCO0lBcUNNLG9CQUFvQixFQUFBO0VBSzFCO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLGtDQUEwQjtFQUMxQixnQ0FBd0I7RUFDeEIsa0NBQTBCO0VBQzFCLGtCQUFnQjtFRGhDaEIsZUNpQ2tCO0VEaENsQixnQkNnQ3VCO0VEOUJ6QixpQkM4QjRCO0VEN0I1QixvQkM2QmtDO0VENUJsQyxnQkM0QndDO0VEM0J4QyxvQkMyQmlEO0VEMUJqRCxjQWxDa0I7RUM2RGhCLG1CQUFtQixFQUFBO0VBVHZCO0lBWU0sZ0JBQVEsRUFBQTtFQVpkO0lBZ0JNLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQWE7SUFDYixvQkFBZ0I7SUFDaEIsa0JBQWE7SUFDYix1QkFBZTtJQUNmLFNBQVMsRUFBQTtFQUtmO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtFQUxkO0lBUUksU0FBUyxFQUFBO0VBUmI7SUFZSSx5QkFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFmdkI7TUR2REksZUN3RW9CO01EdkVwQixnQkN1RXlCO01EckUzQixpQkNxRThCO01EcEU5QixxQkNvRXFDO01EbkVyQyxtQkNtRThDO01EbEU5QyxvQkNrRXVEO01EakV2RCxjQ2lFZ0UsRUFBQTtFQWpCbEU7SUFzQkksVUFBVTtJQUNWLFlBQVksRUFBQTtFQXZCaEI7TUEwQk0sWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7RUE1Qi9CO0lBaUNJLGdCQUFjO0lBQ2Qsa0JBQWdCO0lBQ2hCLG9CQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUlkO0VEcEdJLGlCQ3FHa0I7RURwR2xCLGdCQ29HdUI7RURsR3pCLGlCQ2tHNEI7RURqRzVCLHFCQ2lHbUM7RURoR25DLGtCQ2dHMkM7RUQvRjNDLG9CQytGb0Q7RUQ5RnBELGNBL0JlO0VDOEhmLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFIZDtJQU1JLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lEOUdJLGVDa0hrQjtJRGpIbEIsZ0JDaUh1QjtJRC9HekIsaUJDK0c0QjtJRDlHNUIscUJDOEdtQztJRDdHbkMsaUJDNkcwQztJRDVHMUMsb0JDNEdtRDtJRDNHbkQsY0FsQ2tCO0lBNENsQixvQkNrR29CO0lEbEdwQixhQ2tHb0I7SURqR3BCLGVDaUcwQjtJRGhHMUIseUJDZ0drQztZRGhHbEMsbUJDZ0drQztJRC9GbEMseUJDK0ZpRDtZRC9GakQsOEJDK0ZpRDtJQUkvQyxTQUFTLEVBQUE7RUFUYjtNQU9NLGVBQWUsRUFBQTtFQVByQjtJRDlHSSxlQzJIa0I7SUQxSGxCLGdCQzBIdUI7SUR4SHpCLGlCQ3dINEI7SUR2SDVCLHFCQ3VIbUM7SUR0SG5DLG1CQ3NINEM7SURySDVDLG9CQ3FIcUQ7SURwSHJELGNDb0g4RDtJQUM1RCxlQUFlLEVBQUE7RUFHbkI7RUFDRSw0QkFBb0IsRUFBQTtFQUR0QjtJQUlJLDJCQUEyQjtJQUMzQixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCLEVBQUE7RUFHN0I7RUFDRSxVQUFVLEVBQUE7RUFEWjtJQUlNLFVBQVUsRUFBQTtFQUpoQjtNQU1VLGtCQUFpQixFQUFBO0VBTjNCO01BU1EsMEJBQWU7TUFDZixnQkFBZ0I7TUFDaEIsc0JBQW9CLEVBQUE7RUFYNUI7UUFjVSxvQkFBZ0I7UUFDaEIsU0FBUyxFQUFBO0VBZm5CO1FBa0JVLFNBQVMsRUFBQTtFQWxCbkI7UUFxQlUsZ0JBQVEsRUFBQTtFQXJCbEI7TUF5QlEsZUFBZTtNQUNmLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtFQTNCekI7SUFtQ1ksaUJBQWlCLEVBQUE7RUFuQzdCO0lBMkNRLGFBQWE7SUFDYixpQkFBaUIsRUFBQTtFQTVDekI7SUFrRFEsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQW5EdEI7SUF5RFEsU0FBUztJQUNULFdBQVcsRUFBQTtFQTFEbkI7TUE0RFUsV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO01BQ1Ysa0JBQWtCLEVBQUE7RUEvRDVCO1FBa0VZLGdCQUFRO1FBQ1IsT0FBTztRQUNQLFFBQVE7UUFDUixTQUFTO1FBQ1QsWUFBWTtRQUNaLGtCQUFrQjtRRGhNNUIsb0JDaU00QjtRRGpNNUIsYUNpTTRCO1FEaE01QixpQkNnTW9DO1FEL0xwQyx5QkMrTDRDO2dCRC9MNUMsbUJDK0w0QztRRDlMNUMsd0JDOExvRDtnQkQ5THBELHVCQzhMb0QsRUFBQTtFQXhFdEQ7UUE0RVksZ0JBQVE7UUFDUixnQkFBZ0IsRUFBQTtFQU81QjtFQUNFLHVCQUF1QixFQUFBO0VBR3pCO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SURsT0ksaUJDc09vQjtJRHJPcEIsZ0JDcU95QjtJRG5PM0IsaUJDbU84QjtJRGxPOUIsb0JDa09vQztJRGpPcEMsZ0JDaU8wQztJRGhPMUMsb0JDZ09tRDtJRC9ObkQsY0FsQ2tCO0lDa1FoQixTQUFTLEVBQUE7RUFMYjtJQVNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTyxFQUFBO0VBWFg7SUFlSSxrQkFBa0I7SUFDbEIsNkJBQTZCLEVBQUE7RUFoQmpDO01BbUJNLGlCQUFpQixFQUFBO0VBbkJ2QjtNQXVCTSxnQkFBZ0I7TUFDaEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL2FsZXJ0cy9hbGVydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG4kbXktZ3JleS1ibHVlIDogI2VhNGU0ZTtcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgLy8gaW9uLWl0ZW17XG4gIC8vICAgaW9uLWxhYmVse1xuICAvLyAgICAgLS1jb2xvcjogIzdiN2I3YjtcbiAgLy8gICB9XG4gIC8vIH1cbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMxYzFjMWM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBkYzY4O1xuICAgICAgcGFkZGluZzogMXB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGU5YmZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNmZmO1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA2MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgc3Bhbjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgbWluLWhlaWdodDogNDJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3ByZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXJpcHBsZS1jb2xvcjogI2ZhNWU2MTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGJkZTtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICY6bm90KC5pb24tbm8tbWFyZ2luKXtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICY6bm90KC5oYXNfaW1hZ2UpIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzllOWZhMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYmRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAkcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbjogMXB4IDJweCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJlc19kZXRhaWx7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICBoNHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgdW5zZXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcclxuICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzQ4NDg0ODtcclxuICBcclxuICBpb24taW1nIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbn1cclxuaW9uLWdyaWQ6bm90KC5tZWRpY19pbWcpe1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaW9uLXJvd3tcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC5kYXRlX2ZpbHRlcntcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBcclxuICAgICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yYWRpb3tcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1zZWxlY3QgeyBcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJlcGVhdHtcclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgaW9uLWNoZWNrYm94e1xyXG4gICAgICAgICAgJiArIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZXBlYXRfZGF5c3tcclxuICAgICAgaW9uLWNvbHtcclxuICAgICAgICB3aWR0aDogMTQuMjglO1xyXG4gICAgICAgIG1heC13aWR0aDogMTQuMjglO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZXBlYXRfb3RoZXJze1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW9uLWNoZWNrYm94LCBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG4gICAgICAgICAgJiArIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICNkMmQyZDI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgJi5jaGVja2JveC1jaGVja2VkICsgaW9uLWxhYmVsLCAmLnJhZGlvLWNoZWNrZWQgKyBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjNDgzZGY2O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubWVkaWNfaW1nICsgLmRhdGVfZ3JpZHtcclxuICBtYXJnaW46IDE2cHggLTE2cHggMjBweDtcclxufVxyXG5cclxuLmRhdGVfZmlsdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/self-care/alerts/alerts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/self-care/alerts/alerts.page.ts ***!
  \*************************************************/
/*! exports provided: AlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPage", function() { return AlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");









var AlertPage = /** @class */ (function () {
    // {day:'6 mo.',checked:false},{day:'12 mo.',checked:false},,{day:'2 mo.',checked:false},
    function AlertPage(alertController, toastController, router, route, settingService, datepipe, statusBar, databaseSummary, database) {
        var _this = this;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.settingService = settingService;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.database = database;
        this.selectedSegment = 'first';
        this.alert_med_list = [];
        this.alert_vital_list = [];
        this.alert_general_list = [];
        this.med_per_page = 1;
        this.vital_per_page = 1;
        this.general_per_page = 1;
        this.alert_med_scoll = [];
        this.alert_vital_scoll = [];
        this.alert_general_scoll = [];
        this.repeatOrder = [{ 'days': [{ day: 'Mon', checked: false }, { day: 'Tue', checked: false }, { day: 'Wed', checked: false }, { day: 'Thu', checked: false }, { day: 'Fri', checked: false }, { day: 'Sat', checked: false }, { day: 'Sun', checked: false }],
                'others': [{ day: '1 mo.', checked: false }, { day: '3 mo.', checked: false }] }];
        this.route.queryParams.subscribe(function (params) {
            if (params && params.specialsecond) {
                _this.selectedSegment = params.specialsecond;
            }
        });
    }
    AlertPage.prototype.ngOnInit = function () {
    };
    AlertPage.prototype.vital = function () {
        var _this = this;
        //Vitals List api
        this.vital_per_page = 1;
        this.vital_per_page_offset = 0;
        this.vital_loader = true;
        //  this.settingService.commonDateEventList('alert_vital',this.vital_per_page).subscribe(res=>{
        //  this.vital_loader=false;
        //  this.alert_vital_list=res['event_list']; 
        // })
        this.databaseSummary.getAllEvents('alert_vital', 'New', this.vital_per_page_offset).then(function (res) {
            _this.vital_loader = false;
            _this.alert_vital_list = res['event_list'];
        }).catch(function (err) { console.log(err); });
    };
    AlertPage.prototype.general = function () {
        var _this = this;
        // general List api
        this.general_per_page = 1;
        this.general_per_page_offset = 0;
        this.general_loader = true;
        // this.settingService.commonDateEventList('alert_general',this.general_per_page).subscribe(res=>{
        // this.general_loader=false;
        // this.alert_general_list=res['event_list']; 
        // })
        this.databaseSummary.getAllEvents('alert_general', 'New', this.general_per_page_offset).then(function (res) {
            _this.general_loader = false;
            _this.alert_general_list = res['event_list'];
        }).catch(function (err) { console.log(err); });
    };
    AlertPage.prototype.medication = function () {
        var _this = this;
        this.medi_loader = true;
        this.med_per_page = 1;
        this.med_per_page_offset = 0;
        // this.settingService.commonDateEventList('alert_medication',this.med_per_page).subscribe(res=>{
        // this.medi_loader=false;
        // this.alert_med_list=res['event_list']; 
        // console.log(this.alert_med_list)
        // })
        this.databaseSummary.getAllEvents('alert_medication', 'New', this.med_per_page_offset).then(function (res) {
            _this.medi_loader = false;
            _this.alert_med_list = res['event_list'];
            console.log(_this.alert_med_list);
        }).catch(function (err) { console.log(err); });
    };
    AlertPage.prototype.segmentChanged = function (event) {
        this.selectedSegment = event;
        this.ionViewWillEnter();
    };
    AlertPage.prototype.ionViewWillEnter = function () {
        // Medication List api 
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        if (this.selectedSegment == 'first')
            this.medication();
        else if (this.selectedSegment == 'second')
            this.vital();
        else if (this.selectedSegment == 'third')
            this.general();
    };
    AlertPage.prototype.getDays = function (arr) {
        return arr.map(function (items) { return items['day'] ? items['day'] : items; });
    };
    AlertPage.prototype.addMedication = function () {
        this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-medications']);
    };
    AlertPage.prototype.addVitals = function () {
        this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-vitals']);
    };
    AlertPage.prototype.addGeneral = function () {
        this.router.navigate(['/self-care-tabs/tabs/tab1/alerts/add-general']);
    };
    AlertPage.prototype.deleteItem = function (id, index, event_type, show) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerts',
                            message: 'Are you sure want to delete' + ' ' + show + ' ' + 'Alert' + '?',
                            mode: 'md',
                            buttons: [
                                {
                                    text: 'Confirm',
                                    handler: function () {
                                        // this.settingService.commonDeleteEvent(id).subscribe(res => {
                                        //   console.log(res)
                                        //   if(event_type=='alert_medication'){
                                        //     this.alert_med_list.splice(index,1)
                                        //   }else if(event_type=='alert_vital'){
                                        //     this.alert_vital_list.splice(index,1)
                                        //   }else if(event_type=='alert_general'){
                                        //     this.alert_general_list.splice(index,1)
                                        //   }
                                        //   this.presentToast("Record Deleted Successfully");
                                        // }, error => {
                                        //   console.log(error)
                                        // })
                                        _this.database.deleteAnEvent(id).then(function (res) {
                                            if (event_type == 'alert_medication') {
                                                _this.alert_med_list.splice(index, 1);
                                            }
                                            else if (event_type == 'alert_vital') {
                                                _this.alert_vital_list.splice(index, 1);
                                            }
                                            else if (event_type == 'alert_general') {
                                                _this.alert_general_list.splice(index, 1);
                                            }
                                            _this.presentToast("Record Deleted Successfully");
                                        }).catch(function (err) { console.log(err); });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.SearchItem = function (event_type, event) {
        var _this = this;
        var search = event.detail.value;
        // this.settingService.commonDateEventSearchList(event_type,search).subscribe(res=>{
        //   console.log(res)
        //   if(event_type=='alert_medication'){
        //     this.med_per_page=1;
        //     this.alert_med_list=res['event_list'];  
        //   }else if(event_type=='alert_vital'){
        //     this.vital_per_page=1;
        //     this.alert_vital_list=res['event_list']; 
        //   }else{
        //     this.general_per_page=1;
        //     this.alert_general_list=res['event_list']; 
        //   }
        // }, error=>{
        //      this.presentToast("Server slow, Please try again")
        // })
        var offset = 0;
        this.databaseSummary.getAllEventsSearchList(event_type, search, 'New', offset).then(function (res) {
            if (event_type == 'alert_medication') {
                _this.med_per_page = 1;
                _this.med_per_page_offset = 0;
                _this.alert_med_list = res['event_list'];
            }
            else if (event_type == 'alert_vital') {
                _this.vital_per_page = 1;
                _this.vital_per_page_offset = 0;
                _this.alert_vital_list = res['event_list'];
            }
            else {
                _this.general_per_page = 1;
                _this.general_per_page_offset = 0;
                _this.alert_general_list = res['event_list'];
            }
        }).catch(function (err) { console.log(err); });
    };
    AlertPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertPage.prototype.loadData1 = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.med_per_page += 1;
            _this.med_per_page_offset = _this.med_per_page * 10 - 10;
            //  this.settingService.commonDateEventList("alert_medication",this.med_per_page).subscribe(res => {
            //      this.alert_med_scoll=res['event_list'];
            //      this.alert_med_scoll.map(item => this.alert_med_list.push(item));
            //      event.target.complete();
            //      if (this.med_per_page *10 !=this.alert_med_list.length){
            //         event.target.disabled = true;
            //      }
            //  },error=>{
            //     event.target.disabled = true;
            //  })
            _this.databaseSummary.getAllEvents('alert_medication', 'New', _this.med_per_page_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.alert_med_scoll = res['event_list'];
                    this.alert_med_scoll.map(function (item) { return _this.alert_med_list.push(item); });
                    event.target.complete();
                    if (this.med_per_page * 10 != this.alert_med_list.length) {
                        event.target.disabled = true;
                    }
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                console.log(err);
                event.target.disabled = true;
            });
        }, 500);
    };
    AlertPage.prototype.loadData2 = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.vital_per_page += 1;
            _this.vital_per_page_offset = _this.vital_per_page * 10 - 10;
            //  this.settingService.commonDateEventList("alert_vital",this.vital_per_page).subscribe(res => {
            //      this.alert_vital_scoll=res['event_list']; 
            //      this.alert_vital_scoll.map(item => this.alert_vital_list.push(item));
            //      event.target.complete();
            //      if (this.vital_per_page *10 !=this.alert_vital_list.length){
            //         event.target.disabled = true;
            //      }
            //  },error=>{
            //     event.target.disabled = true;
            //  })
            _this.databaseSummary.getAllEvents('alert_vital', 'New', _this.vital_per_page_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.alert_vital_scoll = res['event_list'];
                    this.alert_vital_scoll.map(function (item) { return _this.alert_vital_list.push(item); });
                    event.target.complete();
                    if (this.vital_per_page * 10 != this.alert_vital_list.length) {
                        event.target.disabled = true;
                    }
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                console.log(err);
                event.target.disabled = true;
            });
        }, 500);
    };
    AlertPage.prototype.loadData3 = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.general_per_page += 1;
            _this.general_per_page_offset = _this.general_per_page * 10 - 10;
            //  this.settingService.commonDateEventList("alert_general",this.general_per_page).subscribe(res => {
            //      this.alert_general_scoll=res['event_list']; 
            //      this.alert_general_scoll.map(item => this.alert_general_list.push(item));
            //      event.target.complete();
            //      if (this.general_per_page *10 !=this.alert_general_list.length){
            //         event.target.disabled = true;
            //      }
            //  },error=>{
            //     event.target.disabled = true;
            //  })
            _this.databaseSummary.getAllEvents('alert_general', 'New', _this.general_per_page_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.alert_general_scoll = res['event_list'];
                    this.alert_general_scoll.map(function (item) { return _this.alert_general_list.push(item); });
                    event.target.complete();
                    if (this.general_per_page * 10 != this.alert_general_list.length) {
                        event.target.disabled = true;
                    }
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                console.log(err);
                event.target.disabled = true;
            });
        }, 500);
    };
    AlertPage.prototype.editMedication = function (event) {
        var navigationExtras = {
            queryParams: {
                medi_alertData: JSON.stringify(event)
            }
        };
        this.alertMedInput = '';
        this.alertVitalInput = '';
        this.alertGenInput = '';
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-medications'], navigationExtras);
    };
    AlertPage.prototype.editVital = function (event) {
        var navigationExtra = {
            queryParams: {
                vital_alertData: JSON.stringify(event)
            }
        };
        this.alertMedInput = '';
        this.alertVitalInput = '';
        this.alertGenInput = '';
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-vitals'], navigationExtra);
    };
    AlertPage.prototype.editGeneral = function (event) {
        var navigationExtras1 = {
            queryParams: {
                general_alertData: JSON.stringify(event)
            }
        };
        this.alertMedInput = '';
        this.alertVitalInput = '';
        this.alertGenInput = '';
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts/edit-general'], navigationExtras1);
    };
    AlertPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    };
    AlertPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__["DataBaseSummaryProvider"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_5__["DatabaseProvider"] }
    ]; };
    AlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alerts.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/alerts.page.html"),
            styles: [__webpack_require__(/*! ./alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__["DataBaseSummaryProvider"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_5__["DatabaseProvider"]])
    ], AlertPage);
    return AlertPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/edit-general/edit-general.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/self-care/alerts/edit-general/edit-general.page.ts ***!
  \********************************************************************/
/*! exports provided: EditOthersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOthersPage", function() { return EditOthersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");











var EditOthersPage = /** @class */ (function () {
    function EditOthersPage(toast, localNotifications, alertController, toastController, datepipe, service, fb, route, router, statusBar, database) {
        var _this = this;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.toastController = toastController;
        this.datepipe = datepipe;
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.database = database;
        this.submitted = false;
        this.Progress = false;
        this.status = false;
        this.repeatType = 'days';
        this.initialMeal = 'before_meal';
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false }, { day: '6 mo.', dayCode: 6, checked: false }, { day: '12 mo.', dayCode: 12, checked: false }] }];
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
        this.NotifyRepeat = false;
        this.Originalvalue = [];
        this.route.queryParams.subscribe(function (params) {
            if (params && params.general_alertData) {
                _this.getAllDatas = JSON.parse(params.general_alertData);
                var duplicateData = JSON.parse(params.general_alertData);
                if (_this.getAllDatas['event_options']['remainder_repeat'] == true) {
                    _this.NotifyRepeat = true;
                    _this.repeatType = _this.getAllDatas['event_options']['repeat_category'];
                    _this.initialRepeatType = _this.getAllDatas['event_options']['repeat_category'];
                    _this.repeatValue = duplicateData['event_options']['repeat_value'];
                    _this.Originalvalue = _this.getAllDatas['event_options']['repeat_value'];
                    if (_this.getAllDatas['event_options']['repeat_category'] == 'others') {
                        _this.defaultMonth = _this.repeatValue[0];
                    }
                    else {
                        for (var i in _this.repeatOrder[0]['days']) {
                            var index = _this.repeatValue.findIndex(function (days) {
                                return days.day == _this.repeatOrder[0]['days'][i]['day'];
                            });
                            if (index > -1) {
                                _this.repeatOrder[0]['days'][i]['checked'] = true;
                            }
                        }
                    }
                }
                _this.NotifyRepeat = false;
                _this.status = _this.getAllDatas['event_options']['remainder_repeat'];
                _this.initialMeal = _this.getAllDatas['event_options']['meal'];
                _this.NotifyRepeat = _this.getAllDatas['event_options']['remainder_repeat'];
                console.log(_this.getAllDatas);
                console.log(_this.repeatValue, _this.Originalvalue);
            }
        });
    }
    EditOthersPage.prototype.ngOnInit = function () {
    };
    EditOthersPage.prototype.ionViewWillEnter = function () {
        this.todaydate = this.getAllDatas['event_datetime'];
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        // this.service.vitalReading().subscribe(res => {
        // this.vital_options = res['enum_masters'];
        // })
        this.other_alert_edit_form = this.fb.group({
            event_datetime: [this.getAllDatas['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_time: [this.getAllDatas['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_name: [this.getAllDatas['event_name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_type: ['alert_general'],
            meal: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remainder_repeat: [this.status],
            repeat_category: [this.repeatType]
        });
    };
    Object.defineProperty(EditOthersPage.prototype, "f", {
        get: function () { return this.other_alert_edit_form.controls; },
        enumerable: true,
        configurable: true
    });
    EditOthersPage.prototype.validateBeforeSubmit = function (form) {
        console.log(form);
        this.submitted = true;
        if (form.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        if (this.other_alert_edit_form.invalid) {
            return;
        }
        else {
            var new1 = new Date(form.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(form.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var data = {
                event_name: form.event_name,
                event_datetime: event_dateTime,
                event_type: form.event_type,
                event_options: {
                    meal: form.meal,
                    remainder_repeat: form.remainder_repeat,
                    repeat_category: form.repeat_category,
                    repeat_value: this.repeatValue
                }
            };
            this.addconfirmation(form, data);
        }
    };
    EditOthersPage.prototype.addconfirmation = function (form, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alert',
                                message: 'Are you sure to submit' + ' ' + (form.event_name).bold() + ' ' + 'Alert' + '?',
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
                                            _this.Progress = true;
                                            //   this.service.commonUpdatePost(this.getAllDatas['id'],data).subscribe(res=>{
                                            //     let getData:any=res;
                                            //     let getEventId:any=this.getAllDatas['id']
                                            //     console.log(this.repeatValue.length,this.Originalvalue.length)
                                            //     console.log(this.NotifyRepeat==true , this.repeatValue.length<this.Originalvalue.length)
                                            //     if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){
                                            //       let cancelArray=[];  
                                            //       console.log(cancelArray)
                                            //       for(var i in this.Originalvalue){
                                            //         if(+i>this.repeatValue.length-1){
                                            //           let ID:any=getEventId+''+Number(+i+1);
                                            //           cancelArray.push(ID)
                                            //         }
                                            //       }
                                            //       console.log(cancelArray)
                                            //         this.assignOrCancelNotifications(cancelArray,form,getEventId);
                                            //     }else{
                                            //       console.log(getData)
                                            //       this.assignSchedule(form,getEventId);
                                            //     }
                                            // },error=>{
                                            //   this.Progress=false;
                                            // });
                                            _this.database.updateAnEvent(_this.getAllDatas['event_id'], data).then(function (res) {
                                                var getData = res;
                                                var getEventId = _this.getAllDatas['event_id'];
                                                console.log(_this.repeatValue.length, _this.Originalvalue.length);
                                                console.log(_this.NotifyRepeat == true, _this.repeatValue.length < _this.Originalvalue.length);
                                                if (_this.NotifyRepeat == true && _this.repeatValue.length < _this.Originalvalue.length) {
                                                    var cancelArray = [];
                                                    console.log(cancelArray);
                                                    for (var i in _this.Originalvalue) {
                                                        if (+i > _this.repeatValue.length - 1) {
                                                            var ID = getEventId + '' + Number(+i + 1);
                                                            cancelArray.push(ID);
                                                        }
                                                    }
                                                    console.log(cancelArray);
                                                    _this.assignOrCancelNotifications(cancelArray, form, getEventId);
                                                }
                                                else {
                                                    console.log(getData);
                                                    _this.assignSchedule(form, getEventId);
                                                }
                                            }).catch(function (error) {
                                                console.log(error);
                                                _this.Progress = false;
                                            });
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
    EditOthersPage.prototype.assignSchedule = function (form, getEventId) {
        var _this = this;
        console.log(this.repeatValue);
        var repeatAlarmValue = [];
        var getDate = new Date(form.event_datetime);
        var getTime = new Date(form.event_time);
        var getHours = getTime.getHours();
        var gettMinutes = getTime.getMinutes();
        var getSeconds = getTime.getSeconds();
        var getMilliseconds = getTime.getMilliseconds();
        getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
        var repeatHours = getDate.getHours();
        var repeatMinutes = getDate.getMinutes();
        if (form.remainder_repeat == true) {
            if (form.repeat_category == 'days') {
                repeatAlarmValue = this.repeatValue.map(function (res, index) {
                    var ID = getEventId + '' + Number(index + 1);
                    _this.localNotifications.schedule({
                        id: ID,
                        title: form.event_name,
                        text: 'General Alert',
                        trigger: {
                            count: 1,
                            every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                        },
                        data: { secret: getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null
                    });
                    _this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                });
                // this.scheduleNotifications(repeatAlarmValue,true);
            }
            else if (form.repeat_category == 'others') {
                this.Progress = false;
                this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                // let monthValue=Number(this.repeatValue[0].charAt(0));
                // let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
                // repeatAlarmValue.push(
                //   {
                //     id: uniqueTime,
                //     title: form.event_name,
                //     text: 'You just got notified :)',
                //     lockscreen:true,
                //     trigger: {
                //       count: 1,
                //       every:{ week: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                //     },
                //     data: { secret:getEventId },
                //     foreground: true,
                //     //autoClear: true, 
                //     sound: null,             
                //     //vibrate: true,
                //   }
                // )
            }
        }
        else {
            var ID = getEventId + '' + 1;
            this.localNotifications.schedule({
                id: ID,
                title: form.event_name,
                text: 'General Alert',
                trigger: { at: new Date(getDate.getTime()) },
                data: { secret: getEventId },
                lockscreen: true,
                vibrate: true,
                priority: 2,
                foreground: true,
                sound: null
            });
            this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
        }
    };
    EditOthersPage.prototype.scheduleNotifications = function (data, boolean) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    EditOthersPage.prototype.assignOrCancelNotifications = function (cancelArray, val, getEventId) {
        var _this = this;
        this.localNotifications.cancel(cancelArray).then(function (res) {
            console.log(res);
            _this.assignSchedule(val, getEventId);
        });
    };
    EditOthersPage.prototype.checkValue = function (event) {
        console.log(event);
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    EditOthersPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    EditOthersPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
        console.log(this.Originalvalue);
    };
    EditOthersPage.prototype.repeatCheck = function (event) {
        //this.defaultMonth= '1 mo.';
        this.status = event.detail.checked;
        if (this.other_alert_edit_form['value']['repeat_category'] != undefined && this.other_alert_edit_form['value']['repeat_category'] != null && this.other_alert_edit_form['value']['repeat_category'] != '') {
            this.repeatType = this.other_alert_edit_form['value']['repeat_category'];
            // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
            //   this.repeatValue.push(this.defaultMonth);
            // }
        }
        else {
            this.repeatType = 'days';
            this.other_alert_edit_form['value']['repeat_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    EditOthersPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    EditOthersPage.prototype.cancel = function () {
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    EditOthersPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    EditOthersPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] }
    ]; };
    EditOthersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-general',
            template: __webpack_require__(/*! raw-loader!./edit-general.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-general/edit-general.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"]])
    ], EditOthersPage);
    return EditOthersPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/edit-medications/edit-medications.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/self-care/alerts/edit-medications/edit-medications.page.ts ***!
  \****************************************************************************/
/*! exports provided: EditMedicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMedicationPage", function() { return EditMedicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");





















var EditMedicationPage = /** @class */ (function () {
    function EditMedicationPage(toast, camera, actionSheetController, localNotifications, alertController, toastController, router, route, service, datepipe, file, fb, transfer, imagePicker, webview, sanitizer, statusBar, database, databaseSummary, networkProvider) {
        var _this = this;
        this.toast = toast;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.service = service;
        this.datepipe = datepipe;
        this.file = file;
        this.fb = fb;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.networkProvider = networkProvider;
        this.store_photos = [];
        this.fileuri = [];
        this.dossage_option = ['0.5 tablet', '1 tablet', '1.5 tablet', '2 tablet', '1 tsp', '1.5 tsp', 'Others'];
        this.medicine_option = ['Tablet', 'Syrup', 'Injection'];
        this.submitted = false;
        this.Progress = false;
        this.repeatType = 'days';
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false },
                ] }];
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
        this.edit_all_image = [];
        this.originalArray = [];
        this.spliceIndexArray = [];
        this.renderForm = false;
        this.NotifyRepeat = false;
        this.Originalvalue = [];
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].ImageUrl;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.medi_alertData) {
                _this.edit_details = JSON.parse(params.medi_alertData);
                _this.edit_options = _this.edit_details;
                var duplicateData = JSON.parse(params.medi_alertData);
                if (_this.edit_details['event_options']['remainder_repeat'] == true) {
                    _this.repeatType = _this.edit_details['event_options']['repeat_category'];
                    _this.repeatValue = duplicateData['event_options']['repeat_value'];
                    _this.Originalvalue = _this.edit_details['event_options']['repeat_value'];
                    if (_this.edit_details['event_options']['repeat_category'] == 'others') {
                        _this.defaultMonth = _this.repeatValue[0];
                    }
                    else {
                        for (var i in _this.repeatOrder[0]['days']) {
                            var index = _this.repeatValue.findIndex(function (days) {
                                return days.day == _this.repeatOrder[0]['days'][i]['day'];
                            });
                            if (index > -1) {
                                _this.repeatOrder[0]['days'][i]['checked'] = true;
                            }
                        }
                    }
                }
                console.log(_this.edit_details);
                console.log(_this.edit_details.id);
                _this.initialValue = _this.edit_details['event_name'];
                _this.initialMeal = _this.edit_details['event_options']['meal'];
                console.log(_this.initialValue);
                _this.status = _this.edit_details['event_options']['remainder_repeat'];
                _this.NotifyRepeat = _this.edit_details['event_options']['remainder_repeat'];
                console.log(_this.repeatValue, _this.Originalvalue);
            }
        });
    }
    EditMedicationPage.prototype.ngOnInit = function () { };
    EditMedicationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.todaydate = this.edit_details['event_datetime'];
        this.renderForm = false;
        var getIndex = this.dossage_option.findIndex(function (res) { return res == _this.edit_details['event_options']['dossage']; });
        console.log(getIndex);
        if (getIndex == -1) {
            this.assignDossageOption = 'Others';
            this.unitValue = this.edit_details['event_options']['dossage'];
        }
        else {
            this.assignDossageOption = this.edit_details['event_options']['dossage'];
        }
        this.editform = this.fb.group({
            event_time: [this.edit_details['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            event_datetime: [this.edit_details['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            event_category: [this.edit_details['event_options']['repeat_category'], [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            remainder_repeat: [this.status],
            medicine_type: [this.edit_details['event_options']['medicine_type'], [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            dossage: [this.assignDossageOption, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            quantity: [''],
            event_name: [this.initialValue, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            description: [this.edit_details['description']],
            meals: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required]],
            unit: [this.unitValue]
        });
        this.initialValidator(this.edit_details['event_options']['medicine_type'], getIndex);
        // this.edit_all_image=[];
        // this.originalArray=[];
        // this.fileuri=[];
        // this.spliceIndexArray=[];
        // let assets = this.edit_details.event_assets;
        //   console.log(this.edit_all_image)
        //   for(var i in assets){
        //     let mapUrl=this.environment+assets[i]["url"]
        //     this.edit_all_image.push({"uri":mapUrl});
        //     this.originalArray.push({"uri":mapUrl})   
        // }
        this.edit_all_image = [];
        this.originalArray = [];
        this.fileuri = [];
        this.spliceIndexArray = [];
        var localAssets = this.edit_details["event_options"];
        var globalassets = this.edit_details["event_assets"];
        if (this.networkProvider.isNetworkOnline) {
            this.isNetwork = true;
        }
        else {
            this.isNetwork = false;
        }
        for (var i in localAssets["localImagePath"]) {
            var mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"], "globalURI": null, "cdvFilePath": localAssets["localImagePath"][i]["cdvFilePath"], "fileName": localAssets["localImagePath"][i]["fileName"], "delete": localAssets["localImagePath"][i]["delete"] };
            if (globalassets != null) {
                if (globalassets.length > i) {
                    var globeURL = globalassets[i]["url"];
                    mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
                }
            }
            console.log(mapUrl);
            this.edit_all_image.push(mapUrl);
            this.originalArray.push(mapUrl);
        }
        console.log(this.edit_all_image);
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    };
    EditMedicationPage.prototype.valueSet = function (data) {
        this.selectedVital = data.detail.value;
        this.submitted = false;
        if (data.detail.value == "Tablet") {
            this.editform.controls['dossage'].reset();
            this.editform.controls['event_name'].reset();
            var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required];
            // this.editform.controls['quantity'].setValidators(validators);
            // this.editform.updateValueAndValidity();
            // this.editform.controls['quantity'].updateValueAndValidity();
        }
        else if (data.detail.value == "Syrup") {
            this.editform.controls['event_name'].reset();
            this.editform.controls['dossage'].reset();
            //this.editform.controls['quantity'].clearValidators();
            this.editform.updateValueAndValidity();
            //this.editform.controls['quantity'].updateValueAndValidity(); 
        }
        else if (data.detail.value == "Injection") {
            this.editform.controls['dossage'].reset();
            //this.editform.controls['quantity'].clearValidators();
            this.editform.updateValueAndValidity();
            //this.editform.controls['quantity'].updateValueAndValidity(); 
        }
    };
    EditMedicationPage.prototype.initialValidator = function (data, index) {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required];
        if (data == "Tablet") {
            // this.editform.controls['quantity'].setValidators(validators);
            // this.editform.updateValueAndValidity();
            // this.editform.controls['quantity'].updateValueAndValidity();
        }
        if (index == -1) {
            this.editform.controls['unit'].setValidators(validators);
            this.editform.updateValueAndValidity();
            this.editform.controls['unit'].updateValueAndValidity();
        }
        this.renderForm = true;
    };
    Object.defineProperty(EditMedicationPage.prototype, "f", {
        get: function () {
            return this.editform.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditMedicationPage.prototype.editDeatils = function (val) {
        this.submitted = true;
        console.log(val);
        if (this.edit_all_image.length == 0) {
            this.presentToast("Please add your Medication image");
        }
        else if (this.editform.value.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        else if (this.editform.valid) {
            if (val.dossage == "Others") {
                val.dossage = val.unit;
                console.log(val.dossage);
            }
            var new1 = new Date(val.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(val.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var medi_details = {
                event_name: val.event_name,
                event_datetime: event_dateTime,
                value: Number(val.quantity) + Number(this.edit_details['value']),
                description: val.description,
                event_type: "alert_medication",
                event_options: {
                    meal: val.meals,
                    remainder_repeat: val.remainder_repeat,
                    repeat_category: val.event_category,
                    repeat_value: this.repeatValue,
                    medicine_type: val.medicine_type,
                    dossage: val.dossage
                }
            };
            this.addconfirmation(val, medi_details);
        }
    };
    EditMedicationPage.prototype.addconfirmation = function (val, medi_details) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alert',
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
                                            _this.Progress = true;
                                            // this.service.commonUpdatePost(this.edit_details['id'],medi_details).subscribe(res=>{
                                            //   let getData:any=res;
                                            //  this.getEventId=this.edit_details['id'];
                                            //   if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){            
                                            //     let cancelArray=[];  
                                            //     for(var i in this.Originalvalue){
                                            //       if(+i>this.repeatValue.length-1){
                                            //         let ID:any=this.getEventId+''+Number(+i+1);
                                            //         cancelArray.push(ID)
                                            //       }
                                            //     }
                                            //       this.assignOrCancelNotifications(cancelArray,val,this.getEventId);           
                                            //   }else{
                                            //     this.assignSchedule(val);
                                            //   }               
                                            // },error=>{
                                            // })
                                            _this.database.updateAnEvent(_this.edit_details['event_id'], medi_details).then(function (res) {
                                                var getData = res;
                                                _this.getEventId = _this.edit_details['event_id'];
                                                if (_this.NotifyRepeat == true && _this.repeatValue.length < _this.Originalvalue.length) {
                                                    var cancelArray = [];
                                                    for (var i in _this.Originalvalue) {
                                                        if (+i > _this.repeatValue.length - 1) {
                                                            var ID = _this.getEventId + '' + Number(+i + 1);
                                                            cancelArray.push(ID);
                                                        }
                                                    }
                                                    _this.assignOrCancelNotifications(cancelArray, val, _this.getEventId, medi_details);
                                                }
                                                else {
                                                    _this.assignSchedule(val, medi_details);
                                                }
                                            }).catch(function (error) {
                                                console.log(error);
                                                _this.Progress = false;
                                            });
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
    EditMedicationPage.prototype.assignSchedule = function (val, medi_details) {
        var _this = this;
        var repeatAlarmValue = [];
        var getDate = new Date(val.event_datetime);
        var getTime = new Date(val.event_time);
        var getHours = getTime.getHours();
        var gettMinutes = getTime.getMinutes();
        var getSeconds = getTime.getSeconds();
        var getMilliseconds = getTime.getMilliseconds();
        getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
        var repeatHours = getDate.getHours();
        var repeatMinutes = getDate.getMinutes();
        if (val.remainder_repeat == true) {
            if (val.event_category == 'days') {
                repeatAlarmValue = this.repeatValue.map(function (res, index) {
                    var ID = _this.getEventId + '' + Number(index + 1);
                    console.log(ID);
                    _this.localNotifications.schedule({
                        id: ID,
                        title: val.event_name,
                        attachments: _this.store_photos,
                        text: 'Medication Alert',
                        trigger: {
                            count: 1,
                            every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                        },
                        data: { secret: _this.getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null
                    });
                });
                // if(this.spliceIndexArray.length>0){ 
                //   console.log('delete')
                //   this.deleteImage(medi_details);
                // }else if(this.fileuri.length >0){ 
                //   console.log('fileuri')
                //   let event_id=this.getEventId;
                //   this.sample(event_id,medi_details); 
                // }else{
                //   this.Progress=false;
                //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                // }
                this.deleteImage(medi_details);
                //this.scheduleNotifications(repeatAlarmValue,getEventId);
            }
            else if (val.event_category == 'others') {
                // this.scheduleNotifications("test",getEventId); 
                var data = new Date();
                var monthValue = Number(this.repeatValue[0].charAt(0));
                console.log(monthValue);
                var uniqueTime = new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
                if (monthValue == 3) {
                    this.localNotifications.schedule({
                        id: uniqueTime,
                        title: val.event_name,
                        attachments: this.store_photos,
                        text: 'You just got notified :)',
                        trigger: {
                            count: 1,
                            every: { quarter: data.getUTCMonth(), hour: repeatHours, minute: repeatMinutes },
                        },
                        data: { secret: this.getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null
                    });
                    this.deleteImage(medi_details);
                    // if(this.spliceIndexArray.length>0){ 
                    //   console.log('delete')
                    //   this.deleteImage(medi_details);
                    // }else if(this.fileuri.length >0){ 
                    //   console.log('fileuri')
                    //   let event_id=this.getEventId;
                    //   this.sample(event_id,medi_details); 
                    // }else{
                    //   this.Progress=false;
                    //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                    // }
                    // this.scheduleNotifications(repeatAlarmValue,getEventId);
                }
                else if (monthValue == 1) {
                    this.localNotifications.schedule({
                        id: uniqueTime,
                        title: val.event_name,
                        attachments: this.store_photos,
                        text: 'You just got notified :)',
                        trigger: {
                            count: 1,
                            every: { month: data.getUTCMonth(), hour: repeatHours, minute: repeatMinutes },
                        },
                        data: { secret: this.getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null
                    });
                    this.deleteImage(medi_details);
                    // if(this.spliceIndexArray.length>0){ 
                    //   console.log('delete')
                    //   this.deleteImage(medi_details);
                    // }else if(this.fileuri.length >0){
                    //   console.log('fileuri') 
                    //   let event_id=this.getEventId;
                    //   this.sample(event_id,medi_details); 
                    // }else{
                    //   this.Progress=false;
                    //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
                    // }
                    // this.scheduleNotifications(repeatAlarmValue,getEventId);
                }
            }
        }
        else {
            var ID = this.getEventId + '' + 1;
            console.log(ID);
            var data = new Date();
            this.localNotifications.schedule({
                id: ID,
                title: val.event_name,
                attachments: this.store_photos,
                text: 'Medication Alert',
                trigger: { at: new Date(getDate.getTime()) },
                data: { secret: this.getEventId },
                lockscreen: true,
                vibrate: true,
                priority: 2,
                foreground: true,
                sound: null
            });
            // if(this.spliceIndexArray.length>0){
            //   console.log('delete') 
            //   this.deleteImage(medi_details);
            // }else if(this.fileuri.length >0){ 
            //   console.log('fileuri') 
            //   let event_id=this.getEventId;
            //   this.sample(event_id,medi_details); 
            // }else{
            //   this.Progress=false;
            //   this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
            // }
            this.deleteImage(medi_details);
            //  this.scheduleNotifications(repeatAlarmValue,getEventId); 
        }
    };
    // scheduleNotifications(data,getEventId){
    //   if(data!='test'){
    //     this.localNotifications.schedule(data);
    //   }
    //   if(this.spliceIndexArray.length>0){ 
    //     this.deleteImage();
    //   }else if(this.fileuri.length >0){ 
    //   let event_id:any=this.edit_details['id'];
    //     this.sample(event_id); 
    //   }else{
    //     this.Progress=false;
    //     this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
    //   }
    // }
    EditMedicationPage.prototype.assignOrCancelNotifications = function (cancelArray, val, getEventId, medi_details) {
        var _this = this;
        this.localNotifications.cancel(cancelArray).then(function (res) {
            console.log(res);
            _this.assignSchedule(val, medi_details);
        });
    };
    EditMedicationPage.prototype.otherCheck = function (event) {
        if (event.detail.value == 'Others') {
            var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required];
            this.editform.controls['unit'].setValidators(validators);
            this.editform.updateValueAndValidity();
            this.editform.controls['unit'].updateValueAndValidity();
        }
        else {
            this.editform.controls['unit'].clearValidators();
            this.editform.updateValueAndValidity();
            this.editform.controls['unit'].updateValueAndValidity();
        }
    };
    EditMedicationPage.prototype.checkValue = function (event) {
        console.log(event);
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    EditMedicationPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    EditMedicationPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
    };
    EditMedicationPage.prototype.repeatCheck = function (event) {
        //this.defaultMonth= '1 mo.';
        this.status = event.detail.checked;
        if (this.editform['value']['event_category'] != undefined && this.editform['value']['event_category'] != null && this.editform['value']['event_category'] != '') {
            this.repeatType = this.editform['value']['event_category'];
            // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
            //   this.repeatValue.push(this.defaultMonth);
            // }
        }
        else {
            this.repeatType = 'days';
            this.editform['value']['event_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    EditMedicationPage.prototype.sample = function (event_id, medi_details) {
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // let data={id:event_id}
        //  for(var i=0;i<this.fileuri.length;i++){
        // let options: FileUploadOptions = {
        //  fileKey: 'event_assets',
        //  fileName: this.fileuri[i].fileName,
        //  mimeType: 'multipart/form-data',
        //  params:data,
        //  chunkedMode: false,
        //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        // }
        //   fileTransfer.upload(this.fileuri[i].uri,environment.apiUrl+'events/update_image',options).then(res=>{
        var _this = this;
        //    if(this.fileuri.length-i ==0){
        //     this.Progress=false;
        //      this.presentToast('Prescription added successfully');
        //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],{skipLocationChange: true });
        //    }else{
        //    }
        //   },error=>{
        //     this.Progress=false;
        //   console.log(error)
        //   })  
        //   }
        var data = medi_details;
        data['event_options']['localImagePath'] = this.edit_all_image;
        console.log(event_id, data);
        this.database.updateAnEventImage(event_id, data).then(function (res) {
            console.log(res);
            _this.Progress = false;
            _this.router.navigate(['self-care-tabs/tabs/tab1/alerts'], { skipLocationChange: true });
        })
            .catch(function (error) {
            _this.Progress = false;
            console.log(error);
        });
    };
    EditMedicationPage.prototype.selectimage = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 3,
            quality: 100,
            width: 600,
            height: 600,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                //this.edit_all_image.push({"uri":this.webview.convertFileSrc(results[i])});
                _this.localFilePath = results[i];
                _this.file.resolveLocalFilesystemUrl(results[i]).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    console.log(fileMeta);
                    _this.audioFileName = fileMeta.name;
                    _this.cdvFilePath = fileMeta['localURL'];
                    _this.edit_all_image.push({ "localURI": _this.localFilePath, "globalURI": null, "cdvFilePath": _this.cdvFilePath, "fileName": _this.audioFileName, "delete": false });
                    _this.fileuri.push({ "uri": _this.cdvFilePath, "fileName": _this.audioFileName });
                    console.log(_this.fileuri, 'fileuri');
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditMedicationPage.prototype.AddImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Gallery',
                                    role: 'image',
                                    icon: 'image',
                                    handler: function () {
                                        _this.selectimage();
                                        console.log('camera clicked');
                                    }
                                }, {
                                    text: 'camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture();
                                        console.log('gallery clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditMedicationPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //this.edit_all_image.push({"uri":this.webview.convertFileSrc(imageData)});
            console.log(_this.edit_all_image, 'webviewuri');
            _this.localFilePath = imageData;
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                return new Promise(function (resolve, reject) {
                    fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                });
            }).then(function (fileMeta) {
                console.log(fileMeta);
                _this.audioFileName = fileMeta.name;
                _this.cdvFilePath = fileMeta['localURL'];
                _this.edit_all_image.push({ "localURI": _this.localFilePath, "globalURI": null, "cdvFilePath": _this.cdvFilePath, "fileName": _this.audioFileName, "delete": false });
                _this.fileuri.push({ "uri": _this.cdvFilePath, "fileName": _this.audioFileName });
                console.log(_this.fileuri, 'fileuri');
            });
        }, function (err) {
            // Handle error
        });
    };
    EditMedicationPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    EditMedicationPage.prototype.cancel = function () {
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    EditMedicationPage.prototype.deleteImage = function (medi_details) {
        // let delete_detail={"index":this.spliceIndexArray,"id":this.edit_details["id"]};
        // this.service.deleteImage(delete_detail).subscribe(res=>{
        //     console.log(res)    
        //     if(this.fileuri.length >0){ 
        //       
        //        this.sample(event_id); 
        //     }else{
        //      this.Progress=false;
        //      this.router.navigate(['self-care-tabs/tabs/tab1/alerts'],);
        //     }   
        // })
        var event_id = this.getEventId;
        console.log(event_id, 'deleteImage');
        this.sample(event_id, medi_details);
    };
    EditMedicationPage.prototype.removeImg = function (index, image, originalArray) {
        // let result = originalArray.some(el=>el.uri === image.uri);
        // if(result==true){
        //     var index1 = this.originalArray.findIndex(p => p.uri == image.uri)
        //     this.spliceIndexArray.push(index1);
        //     this.edit_all_image.splice(index,1);
        // }else{
        //   this.edit_all_image.splice(index,1);
        //   let fileResult = this.fileuri.some(el=>el.uri === image.uri);
        //   if(fileResult==true){
        //    var index1 = this.fileuri.findIndex(p => p.uri == image.uri)
        //     this.fileuri.splice(index1,1);
        //   }
        // }
        var result = originalArray.some(function (el) { return el.localURI === image.localURI; });
        //let result1 = originalArray.some(el=>el.globalURI === image.globalURI);
        if (result == true && image.globalURI != null) {
            var index1 = this.originalArray.findIndex(function (p) { return p.localURI == image.localURI && p.globalURI == image.globalURI; });
            this.spliceIndexArray.push(index1);
            this.edit_all_image[index1]["delete"] = true;
        }
        else {
            this.edit_all_image.splice(index, 1);
            var fileResult = this.fileuri.some(function (el) { return el.localURI === image.localURI; });
            if (fileResult == true) {
                var index1 = this.fileuri.findIndex(function (p) { return p.localURI == image.localURI; });
                this.fileuri.splice(index1, 1);
            }
        }
        console.log(this.edit_all_image);
        console.log(this.fileuri);
    };
    EditMedicationPage.prototype._keyPress = function (event) {
        var pattern = /([\d]+)/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    };
    EditMedicationPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    EditMedicationPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ActionSheetController"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"] },
        { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__["NetworkService"] }
    ]; };
    EditMedicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-medications',
            template: __webpack_require__(/*! raw-loader!./edit-medications.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-medications/edit-medications.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ActionSheetController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__["NetworkService"]])
    ], EditMedicationPage);
    return EditMedicationPage;
}());



/***/ }),

/***/ "./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.ts ***!
  \******************************************************************************/
/*! exports provided: EditVitalsAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVitalsAlertPage", function() { return EditVitalsAlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












var EditVitalsAlertPage = /** @class */ (function () {
    function EditVitalsAlertPage(toast, localNotifications, alertController, toastController, datepipe, service, fb, route, router, statusBar, database, databaseSummary) {
        var _this = this;
        this.toast = toast;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.toastController = toastController;
        this.datepipe = datepipe;
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.submitted = false;
        this.Progress = false;
        this.repeatType = 'days';
        this.initialMeal = 'before_meal';
        this.repeatOrder = [{ 'days': [{ day: 'Mon', dayCode: 1, checked: false }, { day: 'Tue', dayCode: 2, checked: false }, { day: 'Wed', dayCode: 3, checked: false }, { day: 'Thu', dayCode: 4, checked: false }, { day: 'Fri', dayCode: 5, checked: false }, { day: 'Sat', dayCode: 6, checked: false }, { day: 'Sun', dayCode: 0, checked: false }],
                'others': [{ day: '1 mo.', dayCode: 1, checked: false }, { day: '3 mo.', dayCode: 3, checked: false }, { day: '6 mo.', dayCode: 6, checked: false }, { day: '12 mo.', dayCode: 12, checked: false }] }];
        this.repeatValue = [];
        this.defaultMonth = '1 mo.';
        this.NotifyRepeat = false;
        this.Originalvalue = [];
        this.route.queryParams.subscribe(function (params) {
            if (params && params.vital_alertData) {
                _this.getAllDatas = JSON.parse(params.vital_alertData);
                var duplicateData = JSON.parse(params.vital_alertData);
                if (_this.getAllDatas['event_options']['remainder_repeat'] == true) {
                    _this.repeatType = _this.getAllDatas['event_options']['repeat_category'];
                    _this.repeatValue = duplicateData['event_options']['repeat_value'];
                    _this.Originalvalue = _this.getAllDatas['event_options']['repeat_value'];
                    if (_this.getAllDatas['event_options']['repeat_category'] == 'others') {
                        _this.defaultMonth = _this.repeatValue[0];
                    }
                    else {
                        for (var i in _this.repeatOrder[0]['days']) {
                            var index = _this.repeatValue.findIndex(function (days) {
                                return days.day == _this.repeatOrder[0]['days'][i]['day'];
                            });
                            if (index > -1) {
                                _this.repeatOrder[0]['days'][i]['checked'] = true;
                            }
                        }
                    }
                }
                _this.status = _this.getAllDatas['event_options']['remainder_repeat'];
                _this.NotifyRepeat = _this.getAllDatas['event_options']['remainder_repeat'];
                _this.initialMeal = _this.getAllDatas['event_options']['meal'];
                console.log(_this.getAllDatas);
                console.log(_this.repeatValue, _this.Originalvalue);
            }
        });
    }
    EditVitalsAlertPage.prototype.ngOnInit = function () {
    };
    EditVitalsAlertPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.todaydate = this.getAllDatas['event_datetime'];
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        // this.service.vitalReading().subscribe(res => {
        //   this.vital_options = res['enum_masters'];
        // })
        this.databaseSummary.getEnumMasters('vital').then(function (res) {
            _this.vital_options = res['enum_masters'];
        })
            .catch(function (error) { console.log(error); });
        this.vital_edit_form = this.fb.group({
            event_datetime: [this.getAllDatas['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_time: [this.getAllDatas['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_name: [this.getAllDatas['event_name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            event_type: ['alert_vital'],
            meal: [this.initialMeal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remainder_repeat: [this.status],
            repeat_category: [this.repeatType]
        });
    };
    Object.defineProperty(EditVitalsAlertPage.prototype, "f", {
        get: function () { return this.vital_edit_form.controls; },
        enumerable: true,
        configurable: true
    });
    EditVitalsAlertPage.prototype.validateBeforeSubmit = function (form) {
        this.submitted = true;
        if (form.remainder_repeat == true && this.repeatValue.length == 0) {
            this.presentToast('Choose one repeat options');
            return;
        }
        if (this.vital_edit_form.invalid) {
            return;
        }
        else {
            var new1 = new Date(form.event_time);
            var gethours = new1.getHours();
            var getMinutes = new1.getMinutes();
            var new2 = new Date(form.event_datetime);
            new2.setHours(gethours);
            new2.setMinutes(getMinutes);
            var event_dateTime = new2.toJSON();
            var data = {
                event_name: form.event_name,
                event_datetime: event_dateTime,
                event_type: form.event_type,
                event_options: {
                    meal: form.meal,
                    remainder_repeat: form.remainder_repeat,
                    repeat_category: form.repeat_category,
                    repeat_value: this.repeatValue
                }
            };
            this.addconfirmation(form, data);
        }
    };
    EditVitalsAlertPage.prototype.addconfirmation = function (form, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alert',
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
                                            _this.Progress = true;
                                            //   this.service.commonUpdatePost(this.getAllDatas['id'],data).subscribe(res=>{
                                            //     let getData:any=res;
                                            //     let getEventId:any=this.getAllDatas['id']           
                                            //     if(this.NotifyRepeat==true && this.repeatValue.length<this.Originalvalue.length){
                                            //       let cancelArray=[];  
                                            //       for(var i in this.Originalvalue){
                                            //         if(+i>this.repeatValue.length-1){
                                            //           let ID:any=getEventId+''+Number(+i+1);
                                            //           cancelArray.push(ID)
                                            //         }
                                            //       }
                                            //         this.assignOrCancelNotifications(cancelArray,form,getEventId);             
                                            //     }else{
                                            //       this.assignSchedule(form,getEventId);
                                            //     }          
                                            // },error=>{
                                            //   this.Progress=false;
                                            // });
                                            _this.database.updateAnEvent(_this.getAllDatas['event_id'], data).then(function (res) {
                                                var getData = res;
                                                var getEventId = _this.getAllDatas['event_id'];
                                                if (_this.NotifyRepeat == true && _this.repeatValue.length < _this.Originalvalue.length) {
                                                    var cancelArray = [];
                                                    for (var i in _this.Originalvalue) {
                                                        if (+i > _this.repeatValue.length - 1) {
                                                            var ID = getEventId + '' + Number(+i + 1);
                                                            cancelArray.push(ID);
                                                        }
                                                    }
                                                    _this.assignOrCancelNotifications(cancelArray, form, getEventId);
                                                }
                                                else {
                                                    _this.assignSchedule(form, getEventId);
                                                }
                                            }).catch(function (error) {
                                                console.log(error);
                                                _this.Progress = false;
                                            });
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
    EditVitalsAlertPage.prototype.assignSchedule = function (form, getEventId) {
        var _this = this;
        console.log(this.repeatValue);
        var repeatAlarmValue = [];
        var getDate = new Date(form.event_datetime);
        var getTime = new Date(form.event_time);
        var getHours = getTime.getHours();
        var gettMinutes = getTime.getMinutes();
        var getSeconds = getTime.getSeconds();
        var getMilliseconds = getTime.getMilliseconds();
        getDate.setHours(getHours, gettMinutes, getSeconds, getMilliseconds);
        var repeatHours = getDate.getHours();
        var repeatMinutes = getDate.getMinutes();
        if (form.remainder_repeat == true) {
            if (form.repeat_category == 'days') {
                repeatAlarmValue = this.repeatValue.map(function (res, index) {
                    var ID = getEventId + '' + Number(index + 1);
                    _this.localNotifications.schedule({
                        id: ID,
                        title: form.event_name,
                        text: 'Vital Alert',
                        trigger: {
                            count: 1,
                            every: { weekday: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                        },
                        data: { secret: getEventId },
                        lockscreen: true,
                        vibrate: true,
                        priority: 2,
                        foreground: true,
                        sound: null
                    });
                });
                this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                // this.scheduleNotifications(repeatAlarmValue,true);
            }
            else if (form.repeat_category == 'others') {
                this.Progress = false;
                this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
                // let monthValue=Number(this.repeatValue[0].charAt(0));
                // let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds();
                // repeatAlarmValue.push(
                //   {
                //     id: uniqueTime,
                //     title: form.event_name,
                //     text: 'You just got notified :)',
                //     lockscreen:true,
                //     trigger: {
                //       count: 1,
                //       every:{ week: res.dayCode, hour: repeatHours, minute: repeatMinutes } //{ every: { month: 4, day: 24, hour: 9, minute: 0 } }
                //     },
                //     data: { secret:getEventId },
                //     foreground: true,
                //     //autoClear: true, 
                //     sound: null,             
                //     //vibrate: true,
                //   }
                // )
            }
        }
        else {
            var ID = getEventId + '' + 1;
            this.localNotifications.schedule({
                id: ID,
                title: form.event_name,
                text: 'Vital Alert',
                trigger: { at: new Date(getDate.getTime()) },
                data: { secret: getEventId },
                lockscreen: true,
                vibrate: true,
                priority: 2,
                foreground: true,
                sound: null
            });
            this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
            //this.scheduleNotifications(repeatAlarmValue,false); 
        }
    };
    EditVitalsAlertPage.prototype.scheduleNotifications = function (data, boolean) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    EditVitalsAlertPage.prototype.assignOrCancelNotifications = function (cancelArray, val, getEventId) {
        var _this = this;
        this.localNotifications.cancel(cancelArray).then(function (res) {
            console.log(res);
            _this.assignSchedule(val, getEventId);
        });
    };
    EditVitalsAlertPage.prototype.checkValue = function (event) {
        console.log(event);
        this.repeatValue = [];
        this.repeatValue.push(event.detail.value);
        this.defaultMonth = event.detail.value;
        console.log(this.repeatValue);
    };
    EditVitalsAlertPage.prototype.repeatCategChange = function (event) {
        this.repeatValue = [];
        if (event.detail.value == 'days') {
            //this.repeatValue=[];
            for (var i in this.repeatOrder[0]['days']) {
                this.repeatOrder[0]['days'][i]['checked'] = false;
            }
        }
        else {
            this.defaultMonth = '1 mo.';
            this.repeatValue.push(this.defaultMonth);
        }
        console.log(this.repeatValue);
    };
    EditVitalsAlertPage.prototype.repeatDayCheck = function (day, checked) {
        console.log(day, checked);
        var index = this.repeatValue.findIndex(function (days) {
            return days.day == day.day;
        });
        console.log(index);
        console.log(checked == true);
        if (checked == true) {
            if (index == -1) {
                this.repeatValue.push(day);
            }
        }
        else {
            if (index > -1) {
                this.repeatValue.splice(index, 1);
            }
        }
        console.log(this.repeatValue);
    };
    EditVitalsAlertPage.prototype.repeatCheck = function (event) {
        //this.defaultMonth= '1 mo.';
        this.status = event.detail.checked;
        if (this.vital_edit_form['value']['repeat_category'] != undefined && this.vital_edit_form['value']['repeat_category'] != null && this.vital_edit_form['value']['repeat_category'] != '') {
            this.repeatType = this.vital_edit_form['value']['repeat_category'];
            // if(this.status==true && this.vital_alert_form['value']['repeat_category']=='others'){
            //   this.repeatValue.push(this.defaultMonth);
            // }
        }
        else {
            this.repeatType = 'days';
            this.vital_edit_form['value']['repeat_category'] = this.repeatType;
        }
        console.log(this.repeatValue);
    };
    EditVitalsAlertPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    EditVitalsAlertPage.prototype.cancel = function () {
        this.router.navigate(['self-care-tabs/tabs/tab1/alerts']);
    };
    EditVitalsAlertPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#0e9bff');
        this.tabBar.style.display = 'flex';
    };
    EditVitalsAlertPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
    ]; };
    EditVitalsAlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-vitals-alrt',
            template: __webpack_require__(/*! raw-loader!./edit-vitals-alert.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/alerts/edit-vitals-alert/edit-vitals-alert.page.html"),
            styles: [__webpack_require__(/*! ../alerts.page.scss */ "./src/app/self-care/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
    ], EditVitalsAlertPage);
    return EditVitalsAlertPage;
}());



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



/***/ })

}]);
//# sourceMappingURL=alerts-alerts-module-es5.js.map