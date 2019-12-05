(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgvitals-cgvitals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n    <ion-title>Vital Analytics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\r\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\r\n      <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"datetoast()\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          {{ firstDay | date:\"dd MMM yyyy\" }} - {{ date | date:\"dd MMM yyyy\" }}\r\n        </ion-button>\r\n    <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" (click)=\"filterModal()\">\r\n      <svg id=\"Group_470\" data-name=\"Group 470\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17.967\" height=\"13.02\" viewBox=\"0 0 17.967 13.02\"> <rect id=\"Rectangle_494\" data-name=\"Rectangle 494\" width=\"17.967\" height=\"2.083\" transform=\"translate(0)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_495\" data-name=\"Rectangle 495\" width=\"11.717\" height=\"2.083\" transform=\"translate(3.125 3.645)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_496\" data-name=\"Rectangle 496\" width=\"8.072\" height=\"2.083\" transform=\"translate(4.947 7.291)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_497\" data-name=\"Rectangle 497\" width=\"3.906\" height=\"2.083\" transform=\"translate(7.03 10.936)\" fill=\"#2c2c2c\"/> </svg>\r\n      Filter\r\n    </ion-button>\r\n  </ion-toolbar>\r\n  \r\n  <div class=\"ion-padding\" *ngIf=\"!loader\">\r\n\r\n    <div class=\"analytics\" *ngFor=\"let types of tmpResult | keyvalue\">\r\n        <h3 class=\"ion-text-center\">{{ types.key }}</h3>\r\n        <div  class=\"analytics_table\">\r\n          <table >\r\n            <thead>\r\n              <tr *ngIf=\"types.key !== 'Blood Glucose' && types.key !== 'HbA1c'\">\r\n                <th *ngFor=\"let food_time of records\">{{food_time.name}}</th>\r\n              </tr>\r\n              <tr *ngIf=\"types.key === 'Blood Glucose' || types.key === 'HbA1c'\">\r\n                  <th *ngFor=\"let food_time of records2\">{{food_time}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"types.key !== 'Blood Glucose' && types.key !== 'HbA1c'\">\r\n              <tr *ngFor=\"let record of types.value\">\r\n                <td *ngFor=\"let food_time of records\">{{record[food_time.name]}}</td>\r\n              </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"types.key === 'Blood Glucose' || types.key === 'HbA1c'\">\r\n                <tr *ngFor=\"let record of types.value\">\r\n                  <td *ngFor=\"let food_time of records2\">{{record[food_time]}}</td>\r\n                </tr>\r\n              </tbody>\r\n          </table>\r\n        </div>\r\n      </div>  \r\n  \r\n  <div class=\"analytics\" *ngFor=\"let keyName of vitalEventListkey\" >\r\n    \r\n        <div *ngIf=\"keyName == 'Cholesterol'\">\r\n        <h3 class=\"ion-text-center\">{{keyName}}</h3>\r\n        <div  class=\"analytics_table\">\r\n          <table >\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th *ngFor=\"let food_time of records1\">{{food_time.Name}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let data of vitalEventListVal[keyName] | keyvalue\">\r\n                <td>{{data.key | date:\"MMM dd\" }}</td>\r\n                <td >\r\n                      <p *ngFor=\"let date of data['value'] | keyvalue\">\r\n                          {{ date['value'][date['value'].length-1]['event_options']['value1'] }}\r\n                      </p>\r\n                  </td>\r\n                  <td>\r\n                      <p *ngFor=\"let date of data['value'] | keyvalue\">\r\n                          {{ date['value'][date['value'].length-1]['event_options']['value2'] }}\r\n                      </p>\r\n                  </td> <td >\r\n                      <p *ngFor=\"let date of data['value'] | keyvalue\">\r\n                          {{ date['value'][date['value'].length-1]['event_options']['value3'] }}\r\n                      </p>\r\n                  </td> <td >\r\n                      <p *ngFor=\"let date of data['value'] | keyvalue\">\r\n                          {{ date['value'][date['value'].length-1]['event_options']['value4'] }}\r\n                      </p>\r\n                  </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      </div>\r\n</div>\r\n    \r\n  <div *ngIf=\"vitalEventListkey.length == 0 && !loader\" class=\"no_record\">\r\n    <div>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\r\n      <h2>No Record Found</h2>\r\n    </div>\r\n  </div>\r\n<div class=\"ion-padding\" *ngIf=\"loader\">\r\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\r\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\r\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\r\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\r\n</div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Filter Vitals</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" (ionChange)=\"changedate(filter.value.from_date,filter.value.end_date)\">\r\n  <form [formGroup]=\"filter\" (ngSubmit)=\"onSubmit(filter)\">\r\n    <ion-text>Date Filter</ion-text>\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <h1>From Date </h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.from_date.invalid,'ion-touched': submitted && f.from_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [max]='todaydate' formControlName=\"from_date\" placeholder=\"--:--\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n          <h6>(Set From Date)</h6>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <h1>To Date</h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.end_date.invalid,'ion-touched': submitted && f.end_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [max]=\"todaydate\" formControlName=\"end_date\" placeholder=\"-- --- ----\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n          <h6>(Set To Date)</h6>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n    <ion-text *ngIf=\"list_keys.length!=0\">Choose vitals for display</ion-text>\r\n    <ion-list class=\"ion-padding-bottom\">\r\n      <ion-item button *ngFor=\"let key of list_keys\">\r\n        <ion-label>\r\n          <h3>{{key}}</h3>\r\n        </ion-label>\r\n        <ion-checkbox (ionChange)=\"checkbox($event,key)\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    \r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n      <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\r\n        Apply\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n    <ion-title>Vital Readings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar class=\"action_tools\">\r\n    <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"openCalendar()\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n      {{from_date1 | date:\"dd MMM yyyy\"}} - {{end_date1 | date:\"dd MMM yyyy\"}}\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"previous_list\" *ngIf=\"event_name=='Blood Pressure'\">\r\n    <h4>{{event_name}}</h4>\r\n        <ion-list class=\"ion-no-padding\" *ngFor=\"let view of vital_reading;let i=index\">\r\n            <ion-list-header>\r\n              <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\r\n        </ion-list-header>\r\n     <ion-item *ngFor=\"let data of view['events']\">\r\n      <span>{{data?.event_datetime | date:'HH:mm'}} | {{data?.event_category || 'No Food Time' }}</span>\r\n      <ion-label>\r\n        <h5>\r\n          <span *ngIf=\"data?.value1\">BP: {{data?.value1}}</span>\r\n          <span *ngIf=\"data?.value2\">/{{data?.value2}}</span>\r\n        </h5>\r\n        <h5 *ngIf=\"data?.value3\">PR: {{data?.value3}}</h5>\r\n        <!-- <h5 *ngIf=\"data?.value4\">{{data?.value4}}</h5> -->\r\n        <p>{{data?.description}}</p>\r\n        </ion-label>\r\n                    \r\n      </ion-item>\r\n     </ion-list>\r\n    </div>\r\n\r\n    <div class=\"previous_list\" *ngIf=\"event_name=='Cholesterol'\">\r\n      <h4>{{event_name}}</h4>\r\n          <ion-list class=\"ion-no-padding\" *ngFor=\"let view of vital_reading;let i=index\">\r\n              <ion-list-header>\r\n                <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\r\n          </ion-list-header>\r\n       <ion-item *ngFor=\"let data of view['events']\">\r\n        <span>{{data?.event_datetime | date:'HH:mm'}} | {{data?.event_category || 'No Food Time' }}</span>\r\n        <ion-label>\r\n          <h5 *ngIf=\"data?.value1\">HDL: {{data?.value1}}</h5>\r\n          <h5 *ngIf=\"data?.value2\">LDL: {{data?.value2}}</h5>\r\n          <h5 *ngIf=\"data?.value3\">TG: {{data?.value3}}</h5>\r\n          <h5 *ngIf=\"data?.value4\">TC: {{data?.value4}}</h5>\r\n          <p>{{data?.description}}</p>\r\n          </ion-label>\r\n                       \r\n        </ion-item>\r\n       </ion-list>\r\n      </div>\r\n\r\n      <div class=\"previous_list\" *ngIf=\"event_name=='Blood Glucose'\">\r\n        <h4>{{event_name}}</h4>\r\n            <ion-list class=\"ion-no-padding\" *ngFor=\"let view of vital_reading;let i=index\">\r\n                <ion-list-header>\r\n                  <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\r\n            </ion-list-header>\r\n         <ion-item *ngFor=\"let data of view['events']\">\r\n          <span>{{data?.event_datetime | date:'HH:mm'}} | {{data?.event_category || 'No Food Time' }}</span>\r\n          <ion-label>\r\n            <h5 *ngIf=\"data?.value1\">BG: {{data?.value1}}</h5>\r\n            <h5 *ngIf=\"data?.value2\">HbA1c: {{data?.value2}}</h5>\r\n            <p>{{data?.description}}</p>\r\n            </ion-label>\r\n           \r\n                        \r\n          </ion-item>\r\n         </ion-list>\r\n        </div>\r\n\r\n        <div class=\"previous_list\" *ngIf=\"event_name!='Blood Pressure' && event_name!='Blood Glucose' && event_name!='Cholesterol'\">\r\n          <h4>{{event_name}}</h4>\r\n              <ion-list class=\"ion-no-padding\" *ngFor=\"let view of vital_reading;let i=index\">\r\n                  <ion-list-header>\r\n                    <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\r\n              </ion-list-header>\r\n           <ion-item *ngFor=\"let data of view['events']\">\r\n            <span>{{data?.event_datetime | date:'HH:mm'}} | {{data?.event_category || 'No Food Time' }}</span>\r\n            <ion-label>\r\n              <h5 *ngIf=\"data?.value1\">{{data?.value1}}</h5>\r\n              <h5 *ngIf=\"data?.value2\">{{data?.value2}}</h5>\r\n              <h5 *ngIf=\"data?.value3\">{{data?.value3}}</h5>\r\n              <h5 *ngIf=\"data?.value4\">{{data?.value4}}</h5>\r\n              <p>{{data?.description}}</p>\r\n              </ion-label>\r\n                          \r\n            </ion-item>\r\n           </ion-list>\r\n          </div>\r\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"scroll($event)\">\r\n      <ion-infinite-scroll-content\r\n         loadingSpinner=\"bubbles\"\r\n         loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n    \r\n  <div *ngIf=\"vital_reading.length == 0\" class=\"no_record\">\r\n    <div>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\r\n      <h3>No Record Found</h3>\r\n      \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cgvitals.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgvitals/cgvitals.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n   <ion-back-button slot=\"start\" defaultHref=\"care-giver-tabs/tabsc/tab1c\"></ion-back-button>\n    <ion-title>Vitals</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n    <!-- <ion-searchbar (ionChange)=\"SearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar> -->\n    <ion-buttons slot=\"start\" color=\"secondary\">\n      <ion-button class=\"btn\" [routerLink]=\"['/care-giver-tabs/tabsc/tab1c/cg-vitals/cg-analytics']\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.7\" height=\"15.7\" viewBox=\"0 0 15.7 15.7\"> <g id=\"fluctuation\" transform=\"translate(0.1 0.1)\"> <g id=\"Group_187\" data-name=\"Group 187\" transform=\"translate(0.258 10.592)\"> <g id=\"Group_186\" data-name=\"Group 186\"> <path id=\"Path_689\" data-name=\"Path 689\" d=\"M10.327,328H8.26A.258.258,0,0,0,8,328.26H8v4.392a.258.258,0,0,0,.258.258h2.067a.258.258,0,0,0,.258-.258h0V328.26A.258.258,0,0,0,10.327,328Zm-.258,4.392H8.519v-3.875h1.55Z\" transform=\"translate(-8.002 -328.002)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> <g id=\"Group_189\" data-name=\"Group 189\" transform=\"translate(9.558 8.525)\"> <g id=\"Group_188\" data-name=\"Group 188\"> <path id=\"Path_690\" data-name=\"Path 690\" d=\"M298.327,264H296.26a.258.258,0,0,0-.258.258h0v6.458a.258.258,0,0,0,.258.258h2.067a.258.258,0,0,0,.258-.258h0V264.26A.258.258,0,0,0,298.327,264Zm-.258,6.458h-1.55v-5.942h1.55Z\" transform=\"translate(-296.002 -264.002)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> <g id=\"Group_191\" data-name=\"Group 191\" transform=\"translate(6.458 9.817)\"> <g id=\"Group_190\" data-name=\"Group 190\"> <path id=\"Path_691\" data-name=\"Path 691\" d=\"M202.327,304H200.26a.258.258,0,0,0-.258.258h0v5.167a.258.258,0,0,0,.258.258h2.067a.258.258,0,0,0,.258-.258h0V304.26A.258.258,0,0,0,202.327,304Zm-.258,5.167h-1.55v-4.65h1.55Z\" transform=\"translate(-200.002 -304.002)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> <g id=\"Group_193\" data-name=\"Group 193\" transform=\"translate(3.358 6.717)\"> <g id=\"Group_192\" data-name=\"Group 192\"> <path id=\"Path_692\" data-name=\"Path 692\" d=\"M106.327,208H104.26a.258.258,0,0,0-.258.258h0v8.267a.258.258,0,0,0,.258.258h2.067a.258.258,0,0,0,.258-.258h0V208.26A.258.258,0,0,0,106.327,208Zm-.258,8.267h-1.55v-7.75h1.55Z\" transform=\"translate(-104.002 -208.002)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> <g id=\"Group_195\" data-name=\"Group 195\" transform=\"translate(12.658 11.883)\"> <g id=\"Group_194\" data-name=\"Group 194\"> <path id=\"Path_693\" data-name=\"Path 693\" d=\"M394.327,368H392.26a.258.258,0,0,0-.258.258h0v3.1a.258.258,0,0,0,.258.258h2.067a.258.258,0,0,0,.258-.258h0v-3.1A.258.258,0,0,0,394.327,368Zm-.258,3.1h-1.55v-2.583h1.55Z\" transform=\"translate(-392.002 -368.002)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> <g id=\"Group_197\" data-name=\"Group 197\"> <g id=\"Group_196\" data-name=\"Group 196\"> <path id=\"Path_694\" data-name=\"Path 694\" d=\"M15.439,5.663a.257.257,0,0,0-.057-.049l-1.033-.664a.258.258,0,0,0-.4.217v.517h-.9L11.066,2.7a.268.268,0,0,0-.43,0L7.8,6.951,4.888.156A.255.255,0,0,0,4.647,0a.258.258,0,0,0-.237.164L1.117,8.525H0v.517H1.293a.258.258,0,0,0,.24-.164L4.661.938,7.514,7.593a.258.258,0,0,0,.452.042l2.885-4.328L12.7,6.085a.258.258,0,0,0,.215.115h1.033v.517a.258.258,0,0,0,.426.2l1.033-.886A.258.258,0,0,0,15.439,5.663Zm-.971.492V5.64l.343.221Z\" transform=\"translate(-0.001 0)\" fill=\"#2c2c2c\" stroke=\"#2c2c2c\" stroke-width=\"0.2\"/> </g> </g> </g> </svg>\n        Analytics\n      </ion-button>\n    </ion-buttons> \n    <ion-chip slot=\"end\" *ngIf=\"profile_details!=undefined\">\n      <ion-label>{{user_name}}</ion-label>\n      <ion-avatar>\n          <span *ngIf=\"profile_pic == null\">{{logoinitial}}</span>\n          <img *ngIf=\"profile_pic != null\" [src]=\"environmentUrl+profile_pic\">\n        \n      </ion-avatar>\n    </ion-chip>\n  </ion-toolbar>\n \n    \n  <ion-note class=\"ion-padding-start\">Note:<span>&nbsp;Last 7 data points</span></ion-note>\n  <div class=\"ion-padding\" >\n    <ion-item-group class=\"expense_card\" *ngFor=\"let vital of vital_details | keyvalue\">\n      <ion-item button (click)=\"toggle(vital.key)\" *ngIf=\"vital.key == 'Blood Pressure'\">\n          <h4>{{vital.key}}</h4>           \n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': vital.key === status1, 'collapse': vital.key != status1}\" *ngIf=\"vital.key == 'Blood Pressure'\">\n        <ion-item *ngFor=\"let data of vital.value\"  (click)=\"history_view(vital.key)\">\n          <ion-avatar>\n            {{data?.event_datetime|date:'dd'}}\n            <br>\n            {{data?.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <!-- <div *ngIf=\"vital.key == 'Blood Pressure'\"> -->\n            <span><h3 *ngIf=\"data?.event_options['value1']\">BP: {{data?.event_options['value1']}}/</h3>\n            <h3 *ngIf=\"data?.event_options['value2']\">{{data?.event_options['value2']}}</h3><br>\n            <h3 *ngIf=\"data?.event_options['value3']\">PR: {{data?.event_options['value3']}}</h3></span>\n            <p>{{data?.event_category\t}}</p>\n            <!-- </div> -->\n          </ion-label>        \n        </ion-item>     \n      </ion-list>\n\n\n      <ion-item button (click)=\"toggle(vital.key)\" *ngIf=\"vital.key == 'Cholesterol'\">\n          <h4>{{vital.key}}</h4>           \n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': vital.key === status1, 'collapse': vital.key != status1}\" *ngIf=\"vital.key == 'Cholesterol'\">\n        <ion-item *ngFor=\"let data of vital.value\"  (click)=\"history_view(vital.key)\">\n          <ion-avatar>\n            {{data?.event_datetime|date:'dd'}}\n            <br>\n            {{data?.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <div *ngIf=\"vital.key == 'Cholesterol'\">\n            <span><h3 *ngIf=\"data?.event_options['value1']\">HDL: {{data?.event_options['value1']}}</h3>&nbsp;\n            <h3 *ngIf=\"data?.event_options['value2']\">LDL: {{data?.event_options['value2']}}</h3>&nbsp;\n            <h3 *ngIf=\"data?.event_options['value3']\">TG: {{data?.event_options['value3']}}</h3>&nbsp;<br>\n            <h3 *ngIf=\"data?.event_options['value4']\">TC: {{data?.event_options['value4']}}</h3></span>\n            <p>{{data?.event_category\t}}</p>\n            </div>\n          </ion-label>        \n        </ion-item>     \n      </ion-list>\n\n      \n\n      <ion-item button (click)=\"toggle(vital.key)\" *ngIf=\"vital.key == 'Blood Glucose'\">\n          <h4>{{vital.key}}</h4>           \n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': vital.key === status1, 'collapse': vital.key != status1}\" *ngIf=\"vital.key == 'Blood Glucose'\">\n        <ion-item *ngFor=\"let data of vital.value\"  (click)=\"history_view(vital.key)\">\n          <ion-avatar>\n            {{data?.event_datetime|date:'dd'}}\n            <br>\n            {{data?.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <div *ngIf=\"vital.key == 'Blood Glucose'\">\n            <span>\n            <h3 *ngIf=\"data?.event_options['value1']\">BG: {{data?.event_options['value1']}}</h3><br>\n            <h3 *ngIf=\"data?.event_options['value2']\">HbA1c: {{data?.event_options['value2']}}</h3></span>\n            \n            <p>{{data?.event_category\t}}</p>\n            </div>\n          </ion-label>        \n        </ion-item>     \n      </ion-list>\n\n\n      <ion-item button (click)=\"toggle(vital.key)\" *ngIf=\"vital.key != 'Blood Pressure' && vital.key != 'Cholesterol' && vital.key != 'Blood Glucose'\">\n          <h4>{{vital.key}}</h4>           \n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': vital.key === status1, 'collapse': vital.key != status1}\" *ngIf=\"vital.key != 'Blood Pressure' && vital.key != 'Cholesterol' && vital.key != 'Blood Glucose'\">\n        <ion-item *ngFor=\"let data of vital.value\"  (click)=\"history_view(vital.key)\">\n          <ion-avatar>\n            {{data?.event_datetime|date:'dd'}}\n            <br>\n            {{data?.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <div *ngIf=\"vital.key != 'Blood Pressure' && vital.key != 'Cholesterol' && vital.key != 'Blood Glucose'\">\n            <span><h3 *ngIf=\"data?.event_options['value1']\">{{data?.event_options['value1']}}</h3>&nbsp;\n            <h3 *ngIf=\"data?.event_options['value2']\">{{data?.event_options['value2']}}</h3>&nbsp;\n            <h3 *ngIf=\"data?.event_options['value3']\">{{data?.event_options['value3']}}</h3>&nbsp;\n            <h3 *ngIf=\"data?.event_options['value4']\">{{data?.event_options['value4']}}</h3></span>\n            <p>{{data?.event_category\t}}</p>\n            </div>\n          </ion-label>        \n        </ion-item>     \n      </ion-list>\n\n    </ion-item-group>\n  </div>\n\n  <div *ngIf=\"vital_keys.length == 0 && !status\" class=\"no_record\">\n      <div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n        <h3>No Record Found</h3>\n      </div>\n  </div>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n  \n\n  <ion-list *ngIf=\"status\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.ts ***!
  \***********************************************************************************/
/*! exports provided: CgVitalAnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVitalAnalyticsPage", function() { return CgVitalAnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _cg_vital_filters_cg_vital_filters_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cg-vital-filters/cg-vital-filters.page */ "./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










var CgVitalAnalyticsPage = /** @class */ (function () {
    function CgVitalAnalyticsPage(toast, datepipe, modalController, service, route, router, statusBar, databaseSummary) {
        this.toast = toast;
        this.datepipe = datepipe;
        this.modalController = modalController;
        this.service = service;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.loader = false;
        this.status = -1;
        this.records = [];
        this.records1 = [];
        this.records2 = [];
        this.records_time = [];
        this.vitalEventListkey = [];
        this.objectKeys = Object.keys;
        this.isExist = {
            'Blood Pressure': {
                bloodPressure: false,
                pulseRate: false
            },
            'Blood Glucose': {
                bloodGlucose: false,
                hba1c: false
            }
        };
        this.tmpResult = {};
        this.filterTerms = {};
        this.filterModal();
    }
    CgVitalAnalyticsPage.prototype.ngOnInit = function () {
        this.records = [
            {
                name: '#',
                value: '#'
            },
            {
                name: '6-9 am',
                value: '6-9 am'
            },
            {
                name: '9-12 pm',
                value: '9-12 pm'
            },
            {
                name: '12-3 pm',
                value: '12-3 pm'
            },
            {
                name: '3-6 pm',
                value: '3-6 pm'
            },
            {
                name: '6-9 pm',
                value: '6-9 pm'
            },
            {
                name: '>9 pm',
                value: '>9 pm'
            }
        ];
        this.records2 = ['#', 'Random', 'Fasting', 'Post Prandial'];
        this.records_time = [{ "Name": "6-9 am" }, { "Name": "9-12 pm" }, { "Name": "12-3 pm" }, { "Name": "3-6 pm" }, { "Name": "6-9 pm" }, { "Name": ">9 pm" }];
        this.records1 = [{ "Name": "HDL" }, { "Name": "LDL" }, { "Name": "Triglyceride" }, { "Name": "Total Count" }];
        // this.records2 = [{ "Name": "Random" }, { "Name": "Fasting" }, { "Name": "Post Prandial" }]
    };
    CgVitalAnalyticsPage.prototype.ionViewWillEnter = function () {
        // this.date = new Date();
        // this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.statusBar.backgroundColorByHexString('#60dc68');
        this.tabBar = document.getElementById('myTabBar1');
        this.tabBar.style.display = 'none';
        // this.loader = true;
        // this.user_id = localStorage.getItem("user_id");
        // this.service.vitalEventListNew().subscribe(res => {
        //   this.parseResponse(res)
        // });
    };
    CgVitalAnalyticsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    CgVitalAnalyticsPage.prototype.datetoast = function () {
        this.presentToast('Use filter to get specific data');
    };
    CgVitalAnalyticsPage.prototype.filterModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cg_vital_filters_cg_vital_filters_page__WEBPACK_IMPORTED_MODULE_4__["CgVitalFilterPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != undefined) {
                                _this.date = data.data.end_date;
                                _this.firstDay = data.data.from_date;
                                _this.loader = true;
                                data['event_name'] = data.data.event_name;
                                // this.service.vitalfilter(data['data']).subscribe(res => {
                                //   this.parseResponse(res)
                                // })
                                _this.databaseSummary.vitalFilterAnalytics(_this.user_id, data['data']).then(function (res) {
                                    _this.parseResponse(res);
                                }).catch(function (err) { console.log(err); });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CgVitalAnalyticsPage.prototype.parseResponse = function (res) {
        this.tmpResult = {};
        console.log(res);
        for (var _i = 0, _a = Object.keys(res); _i < _a.length; _i++) {
            var type = _a[_i];
            for (var _b = 0, _c = Object.keys(res[type]); _b < _c.length; _b++) {
                var date = _c[_b];
                if (type === 'Blood Glucose') {
                    this.date_val = this.datepipe.transform(date, "MMM d");
                    var rec = {};
                    rec['#'] = rec['#'] || this.date_val;
                    var flag = false;
                    for (var _d = 0, _e = this.records2; _d < _e.length; _d++) {
                        var records = _e[_d];
                        if (res[type][date][records]) {
                            var objKeys = Object.keys(res[type][date][records][0]['event_options']);
                            if (objKeys.includes('value1')) {
                                this.tmpResult[type] = this.tmpResult[type] || [];
                                rec[records] = rec[records] || '';
                                rec[records] = res[type][date][records][0]['event_options']['value1'];
                                flag = true;
                            }
                        }
                        else {
                            rec[records] = rec[records] || '';
                        }
                    }
                    if (flag) {
                        this.tmpResult[type].push(rec);
                    }
                    rec = {};
                    rec['#'] = rec['#'] || '';
                    rec['#'] = rec['#'] || this.date_val;
                    flag = false;
                    for (var _f = 0, _g = this.records2; _f < _g.length; _f++) {
                        var records = _g[_f];
                        if (res[type][date][records]) {
                            var objKeys = Object.keys(res[type][date][records][0]['event_options']);
                            if (objKeys.includes('value2')) {
                                this.tmpResult['HbA1c'] = this.tmpResult['HbA1c'] || [];
                                rec[records] = rec[records] || '';
                                rec[records] = res[type][date][records][0]['event_options']['value2'];
                                flag = true;
                            }
                        }
                        else {
                            rec[records] = rec[records] || '';
                        }
                    }
                    if (flag) {
                        this.tmpResult['HbA1c'].push(rec);
                    }
                }
                else {
                    if (type === 'Body Temperature' || type === 'Oxygen Saturation') {
                        var rec = {};
                        this.date_val = this.datepipe.transform(date, "MMM d");
                        rec['#'] = rec['#'] || this.date_val;
                        this.tmpResult[type] = this.tmpResult[type] || [];
                        for (var _h = 0, _j = this.records; _h < _j.length; _h++) {
                            var records = _j[_h];
                            if (res[type][date][records['value']]) {
                                rec[records['name']] = rec[records['name']] || '';
                                rec[records['name']] = res[type][date][records['value']][0]['event_options']['value1'];
                            }
                            else {
                                rec[records['name']] = rec[records['name']] || '';
                            }
                        }
                        this.tmpResult[type].push(rec);
                    }
                    else {
                        if (type === 'Blood Pressure') {
                            var rec = {};
                            var flag = false;
                            this.date_val = this.datepipe.transform(date, "MMM d");
                            rec['#'] = rec['#'] || this.date_val;
                            for (var _k = 0, _l = this.records; _k < _l.length; _k++) {
                                var records = _l[_k];
                                if (res[type][date][records['value']]) {
                                    var tmpKeys = Object.keys(res[type][date][records['value']][0]['event_options']);
                                    if (tmpKeys.includes('value1') && tmpKeys.includes('value2')) {
                                        this.tmpResult[type] = this.tmpResult[type] || [];
                                        rec[records['name']] = rec[records['name']] || '';
                                        rec[records['name']] = res[type][date][records['value']][0]['event_options']['value1'] + "/" + res[type][date][records['value']][0]['event_options']['value2'];
                                        flag = true;
                                    }
                                }
                                else {
                                    rec[records['name']] = rec[records['name']] || '';
                                }
                            }
                            if (flag) {
                                this.tmpResult[type].push(rec);
                            }
                            rec = {};
                            rec['#'] = rec['#'] || '';
                            rec['#'] = rec['#'] || this.date_val;
                            flag = false;
                            for (var _m = 0, _o = this.records; _m < _o.length; _m++) {
                                var records = _o[_m];
                                if (res[type][date][records['value']]) {
                                    var tmpKeys = Object.keys(res[type][date][records['value']][0]['event_options']);
                                    if (tmpKeys.includes('value3')) {
                                        this.tmpResult['Pulse Rate'] = this.tmpResult['Pulse Rate'] || [];
                                        rec[records['name']] = rec[records['name']] || '';
                                        rec[records['name']] = res[type][date][records['value']][0]['event_options']['value3'];
                                        flag = true;
                                    }
                                }
                                else {
                                    rec[records['name']] = rec[records['name']] || '';
                                }
                            }
                            if (flag) {
                                this.tmpResult['Pulse Rate'].push(rec);
                            }
                        }
                        else {
                            // if (res[type][date][records['value']]) {
                            // }
                        }
                    }
                }
            }
        }
        console.log(this.tmpResult);
        this.vitalEventListVal = res;
        this.loader = false;
        this.vitalEventListkey = Object.keys(this.vitalEventListVal);
    };
    CgVitalAnalyticsPage.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
    };
    CgVitalAnalyticsPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] }
    ]; };
    CgVitalAnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cg-vital-analytics',
            template: __webpack_require__(/*! raw-loader!./cg-vital-analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.html"),
            styles: [__webpack_require__(/*! ../cgvitals.page.scss */ "./src/app/care-giver/cgvitals/cgvitals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"]])
    ], CgVitalAnalyticsPage);
    return CgVitalAnalyticsPage;
}());



/***/ }),

/***/ "./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.ts ***!
  \*******************************************************************************/
/*! exports provided: CgVitalFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVitalFilterPage", function() { return CgVitalFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");









var CgVitalFilterPage = /** @class */ (function () {
    function CgVitalFilterPage(toast, datepipe, fb, modalController, service, statusBar, databaseSummary) {
        this.toast = toast;
        this.datepipe = datepipe;
        this.fb = fb;
        this.modalController = modalController;
        this.service = service;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.list_keys = [];
        this.checkarray = [];
        this.submitted = false;
    }
    CgVitalFilterPage.prototype.ngOnInit = function () {
        this.todaydate = new Date().toISOString();
        this.filter = this.fb.group({
            'from_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'end_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'event_name': ['']
        });
        this.user_id = localStorage.getItem("user_id");
        // this.service.vitalEventListNew().subscribe(res=>{    	
        // this.listvalues =res;
        // this.list_keys = Object.keys(this.listvalues); 
        // }); 
    };
    CgVitalFilterPage.prototype.changedate = function (from, end) {
        var _this = this;
        if (from != '' && end != '') {
            var type = 'vital';
            //   this.service.filtercheck(from,end,data).subscribe(res=>{
            //   this.list_keys=res['events']
            // })
            this.databaseSummary.filterVitalEventNameList(this.user_id, from, end, type).then(function (res) {
                _this.list_keys = res['events'];
            }).catch(function (err) { console.log(err); });
        }
    };
    Object.defineProperty(CgVitalFilterPage.prototype, "f", {
        get: function () { return this.filter.controls; },
        enumerable: true,
        configurable: true
    });
    CgVitalFilterPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#60dc68');
        this.tabBar = document.getElementById('myTabBar1');
        this.tabBar.style.display = 'none';
    };
    CgVitalFilterPage.prototype.checkbox = function (event, val) {
        if (event.detail.checked) {
            this.checkarray.push(val);
        }
        else if (event.detail.checked == false) {
            var index = this.checkarray.indexOf(val);
            if (index !== -1) {
                this.checkarray.splice(index, 1);
            }
        }
    };
    CgVitalFilterPage.prototype.cancel = function () {
        this.filter.reset();
        this.modalController.dismiss();
    };
    CgVitalFilterPage.prototype.onSubmit = function (val) {
        this.submitted = true;
        if (this.filter.valid) {
            this.filter.patchValue({
                'event_name': this.checkarray,
            });
            this.modalController.dismiss(val.value);
        }
        else {
            this.presentToast('Please Enter Mandatory Fields');
        }
    };
    CgVitalFilterPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    CgVitalFilterPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"] }
    ]; };
    CgVitalFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cg-vital-filters',
            template: __webpack_require__(/*! raw-loader!./cg-vital-filters.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.html"),
            styles: [__webpack_require__(/*! ../cgvitals.page.scss */ "./src/app/care-giver/cgvitals/cgvitals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"]])
    ], CgVitalFilterPage);
    return CgVitalFilterPage;
}());



/***/ }),

/***/ "./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.ts ***!
  \*****************************************************************************/
/*! exports provided: cgvitalreading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cgvitalreading", function() { return cgvitalreading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");














var cgvitalreading = /** @class */ (function () {
    function cgvitalreading(modalCtrl, toast, datepipe, service, route, router, toastController, alertController, statusBar, database, databaseSummary) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.datepipe = datepipe;
        this.service = service;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.page = 1;
        this.count = 10;
        this.previous_data = [];
        this.vital_reading = [];
        this.vital_scroll = [];
        this.vital_page_offset = 0;
        this.route.queryParams.subscribe(function (params) {
            _this.event_name = params.data;
            _this.user_id = localStorage.getItem("user_id");
            // this.service.reading_history(this.event_name,this.page,this.count).subscribe(res=>{
            //   this.previous_data=res['events']
            //   this.groupBy(this.previous_data)
            // })
        });
    }
    cgvitalreading.prototype.ngOnInit = function () {
    };
    cgvitalreading.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#60dc68');
        this.tabBar = document.getElementById('myTabBar1');
        this.tabBar.style.display = 'none';
        this.end_date1 = new Date();
        var y = this.end_date1.getFullYear();
        var m = this.end_date1.getMonth();
        this.from_date1 = new Date(y, m, 1);
        this.vital_page_offset = 0;
        this.filterHistory();
    };
    cgvitalreading.prototype.filterHistory = function () {
        var _this = this;
        this.databaseSummary.filterVitalHistory('vital', this.event_name, this.from_date1, this.end_date1, this.vital_page_offset).then(function (res) {
            _this.previous_data = res['events'];
            _this.groupBy(_this.previous_data);
        }).catch(function (err) { console.log(err); });
    };
    cgvitalreading.prototype.groupBy = function (data) {
        var records = data.map(function (item) { return ({
            id: item.id,
            description: item.description,
            event_name: item.event_name,
            event_category: item.event_category,
            event_datetime: item.event_datetime,
            event_type: item.event_type,
            value1: item.event_options.value1,
            value2: item.event_options.value2,
            value3: item.event_options.value3,
            value4: item.event_options.value4,
        }); });
        var value = [];
        var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["toArray"])()); })).subscribe(function (val) {
            if (val) {
                var ff = { "created_at": val[0].event_datetime, "events": val };
                value.push(ff);
            }
        });
        this.vital_reading = value;
    };
    cgvitalreading.prototype.openCalendar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, myCalendar, event, date, from_date, end_date;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            canBackwardsSelected: true,
                            pickMode: 'range',
                            color: 'secondary',
                            title: ''
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModal"],
                                componentProps: { options: options }
                            })];
                    case 1:
                        myCalendar = _a.sent();
                        myCalendar.present();
                        return [4 /*yield*/, myCalendar.onDidDismiss()];
                    case 2:
                        event = _a.sent();
                        date = event.data;
                        from_date = date.from.dateObj;
                        end_date = date.to.dateObj;
                        this.from_date1 = from_date;
                        this.end_date1 = end_date;
                        // this.service.filterReading(this.event_name,this.page,this.count,from_date,end_date).subscribe(res=>{
                        // let filter=res['events']
                        // this.groupBy(filter)      
                        // });
                        this.vital_page_offset = 0;
                        this.filterHistory();
                        return [2 /*return*/];
                }
            });
        });
    };
    cgvitalreading.prototype.scroll = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.page += 1;
            _this.vital_page_offset = _this.page * 10 - 10;
            //       this.service.reading_history(this.event_name,this.page,this.count).subscribe(res=>{
            //         let data=res['events'];
            //         let concat= this.previous_data.concat(data);
            //         this.previous_data=concat;
            //         let records:any[]=this.previous_data.map(item => ({
            //           id:item.id,
            //           description: item.description,
            //           event_name: item.event_name,
            //           event_category:item.event_category,
            //           event_datetime:item.event_datetime,
            //           event_type: item.event_type,
            //           value1:item.event_options.value1,
            //           value2: item.event_options.value2,
            //           value3: item.event_options.value3,
            //           value4: item.event_options.value4,
            //      }));
            //      let value = []
            //     const example = from(records).pipe(
            //    groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            //    mergeMap(group => group.pipe(toArray()))
            //  ).subscribe(val => {
            //    if(val){
            //        let ff = { "created_at":val[0].event_datetime,"events" :val }
            //        value.push(ff);
            //    }
            //  })
            //  this.vital_scroll=value;
            //           this.vital_reading=this.vital_scroll;
            //           event.target.complete();
            //           if (this.page *10 !=this.vital_reading.length){
            //              event.target.disabled = true;
            //           }
            //       },error=>{
            //          event.target.disabled = true;
            //       }) 
            _this.databaseSummary.filterVitalHistory('vital', _this.event_name, _this.from_date1, _this.end_date1, _this.vital_page_offset).then(function (res) {
                var event = res['events'];
                var merge = _this.previous_data.concat(event);
                _this.previous_data = merge;
                _this.groupBy(merge);
                event.target.complete();
                if (_this.page * 10 != _this.vital_reading.length) {
                    event.target.disabled = true;
                }
            }).catch(function (err) {
                event.target.disabled = true;
                console.log(err);
            });
        }, 500);
    };
    cgvitalreading.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                });
                return [2 /*return*/];
            });
        });
    };
    cgvitalreading.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#60dc68');
        this.tabBar.style.display = 'flex';
    };
    cgvitalreading.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__["DataBaseSummaryProvider"] }
    ]; };
    cgvitalreading = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cgvital-reading',
            template: __webpack_require__(/*! raw-loader!./cgvital-reading.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.html"),
            styles: [__webpack_require__(/*! ../cgvitals.page.scss */ "./src/app/care-giver/cgvitals/cgvitals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__["DataBaseSummaryProvider"]])
    ], cgvitalreading);
    return cgvitalreading;
}());



/***/ }),

/***/ "./src/app/care-giver/cgvitals/cgvitals.module.ts":
/*!********************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cgvitals.module.ts ***!
  \********************************************************/
/*! exports provided: CgvitalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgvitalsPageModule", function() { return CgvitalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cgvitals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgvitals.page */ "./src/app/care-giver/cgvitals/cgvitals.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _cg_vital_analytics_cg_vital_analytics_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cg-vital-analytics/cg-vital-analytics.page */ "./src/app/care-giver/cgvitals/cg-vital-analytics/cg-vital-analytics.page.ts");
/* harmony import */ var _cg_vital_filters_cg_vital_filters_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cg-vital-filters/cg-vital-filters.page */ "./src/app/care-giver/cgvitals/cg-vital-filters/cg-vital-filters.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _cgvital_reading_cgvital_reading_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cgvital-reading/cgvital-reading.page */ "./src/app/care-giver/cgvitals/cgvital-reading/cgvital-reading.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
















var routes = [
    {
        path: '',
        component: _cgvitals_page__WEBPACK_IMPORTED_MODULE_6__["CgvitalsPage"]
    },
    {
        path: 'cg-analytics',
        component: _cg_vital_analytics_cg_vital_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CgVitalAnalyticsPage"]
    },
    {
        path: 'cg-filter',
        component: _cg_vital_filters_cg_vital_filters_page__WEBPACK_IMPORTED_MODULE_9__["CgVitalFilterPage"]
    },
    {
        path: 'cgvital-reading',
        component: _cgvital_reading_cgvital_reading_page__WEBPACK_IMPORTED_MODULE_11__["cgvitalreading"]
    }
];
var CgvitalsPageModule = /** @class */ (function () {
    function CgvitalsPageModule() {
    }
    CgvitalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cgvitals_page__WEBPACK_IMPORTED_MODULE_6__["CgvitalsPage"], _cg_vital_analytics_cg_vital_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CgVitalAnalyticsPage"], _cg_vital_filters_cg_vital_filters_page__WEBPACK_IMPORTED_MODULE_9__["CgVitalFilterPage"], _cgvital_reading_cgvital_reading_page__WEBPACK_IMPORTED_MODULE_11__["cgvitalreading"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]],
        })
    ], CgvitalsPageModule);
    return CgvitalsPageModule;
}());



/***/ }),

/***/ "./src/app/care-giver/cgvitals/cgvitals.page.scss":
/*!********************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cgvitals.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #60dc68;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-item-group.expense_card {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group.expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group.expense_card ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group.expense_card ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group.expense_card ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group.expense_card ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group.expense_card ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 0;\n      white-space: pre-wrap;\n      word-break: break-all;\n      display: inline-block; }\n  ion-item-group.expense_card ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group.expense_card ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group.expense_card ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group.expense_card .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group.expense_card .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  ion-item-group.expense_card .expand {\n    height: auto; }\n  ion-item-group.expense_card .collapse {\n    height: 0;\n    padding: 0; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item:last-child {\n    --border-color: transparent; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-list ion-item h3 + ion-chip {\n      margin-left: 0; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list ion-item ion-chip {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: 1.5;\n    color: #ffffff;\n    background-color: #0e9bff;\n    height: 25px; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form {\n  padding-bottom: 60px; }\n  form ion-item {\n    --background: transparent;\n    --border-color: #ECECEC;\n    --highlight-color-focused: #483df6;\n    --highlight-color-valid: #483df6;\n    --highlight-color-invalid: #ea4e4e;\n    --padding-start: 0;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin-bottom: 10px; }\n  form ion-item ion-label {\n      --color: #bcbbcf; }\n  form ion-item ion-button {\n      position: absolute;\n      top: 16px;\n      right: 0;\n      width: 42px;\n      min-height: 42px;\n      --background: transprent;\n      --border-radius: 50%;\n      --box-shadow: none;\n      --ripple-color: #fa5e61;\n      margin: 0; }\n  form ion-item.units {\n      --padding-end: 60px;\n      --inner-padding-end: 0;\n      overflow: visible; }\n  form ion-item.units span {\n        position: absolute;\n        right: -55px;\n        bottom: 10px; }\n  form ion-item.units div {\n        width: 100%; }\n  .action_tools ion-searchbar + ion-buttons {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n  .action_tools ion-searchbar + ion-buttons ion-button:not(:last-child) {\n    margin: 0 5px; }\n  .category {\n  padding: 16px 16px 0; }\n  .category h5 {\n    margin-top: 0;\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .category p {\n    margin-top: 0;\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .category + form {\n    padding-bottom: 16px; }\n  .previous_list h4 {\n  font-size: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  padding: 16px;\n  margin: 0; }\n  .previous_list ion-item {\n  --border-color: transparent;\n  border-left: 1px dashed #ddd;\n  margin: 0 32px;\n  padding: 16px 0;\n  --inner-padding-end: 16px;\n  overflow: visible; }\n  .previous_list ion-item ion-button {\n    right: -32px; }\n  .previous_list ion-item h5 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #0e9bff;\n    margin-top: 10px;\n    white-space: pre-wrap;\n    word-break: break-all; }\n  .previous_list ion-item p {\n    white-space: pre-wrap;\n    word-break: break-all;\n    margin: 0; }\n  .previous_list ion-item > span {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #B0B0B9;\n    position: absolute;\n    top: 0;\n    left: -32px;\n    z-index: 1;\n    background-color: #fff; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-text {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8B9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .analytics {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .analytics:not(:last-child) {\n    margin-bottom: 30px; }\n  .analytics h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0;\n    padding: 10px; }\n  .analytics ion-button {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: left;\n    line-height: inherit;\n    color: none;\n    margin: 0;\n    --color: #483df6;\n    --border-radius: 0; }\n  .analytics .analytics_table {\n    overflow-y: hidden;\n    overflow-x: auto;\n    max-height: 200px;\n    border-bottom: 1px solid #f1f1f5; }\n  .analytics .analytics_table table {\n      width: 100%; }\n  .analytics .analytics_table.expand {\n      max-height: unset; }\n  .analytics .analytics_table.collapse {\n      max-height: 200px; }\n  .analytics .analytics_table th {\n      font-size: 0.9rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: nowrap;\n      padding: 0.75rem 0.25rem;\n      background-color: #f1f1f5;\n      border-right: 1px solid #ddd; }\n  .analytics .analytics_table td {\n      font-size: 0.85rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding: 0.75rem 0.25rem; }\n  .analytics .analytics_table thead tr th:first-child {\n      position: -webkit-sticky;\n      position: sticky;\n      left: 0;\n      background-color: #e5e5ec;\n      text-align: center; }\n  .analytics .analytics_table tbody tr td {\n      border-right: 1px solid #ddd; }\n  .analytics .analytics_table tbody tr td p {\n        font-size: 0.85rem;\n        font-weight: 400;\n        letter-spacing: 0;\n        text-transform: none;\n        text-align: left;\n        line-height: inherit;\n        color: #2c2c2c;\n        margin: 0; }\n  .analytics .analytics_table tbody tr td p:empty {\n          text-align: center;\n          display: none; }\n  .analytics .analytics_table tbody tr td p:empty:not(:first-child) {\n            display: none; }\n  .analytics .analytics_table tbody tr td p:empty:after {\n            content: '-'; }\n  .analytics .analytics_table tbody tr td p span {\n          white-space: nowrap; }\n  .analytics .analytics_table tbody tr td:first-child {\n        position: -webkit-sticky;\n        position: sticky;\n        left: 0;\n        background-color: #e5e5ec;\n        white-space: nowrap;\n        font-size: 0.85rem;\n        font-weight: 500;\n        letter-spacing: 0;\n        text-transform: none;\n        text-align: center;\n        line-height: inherit;\n        color: #2c2c2c; }\n  .analytics .analytics_table tbody tr:nth-child(even) {\n      background-color: #f1f1f5; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-buttons ion-button.btn:not(:last-child) {\n  margin-right: 16px; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 0px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci9jZ3ZpdGFscy9jZ3ZpdGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBO0VBdkJJLGlCQTBCc0I7RUF6QnRCLGdCQXlCMkI7RUF2QjdCLGlCQXVCZ0M7RUF0QmhDLDBCQXNCNEM7RUFyQjVDLGdCQXFCa0Q7RUFwQmxELG9CQW9CMkQ7RUFuQjNELGNBbUJvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBekNFLG9CQStDb0I7RUEvQ3BCLGFBK0NvQjtFQTlDcEIsaUJBOEM0QjtFQTdDNUIseUJBNkNvQztVQTdDcEMsbUJBNkNvQztFQTVDcEMsdUJBNEMyQztVQTVDM0Msc0JBNEMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTFESSxlQTRFb0I7SUEzRXBCLGdCQTJFeUI7SUF6RTNCLGlCQXlFOEI7SUF4RTlCLDBCQXdFMEM7SUF2RTFDLGtCQXVFa0Q7SUF0RWxELG9CQXNFMkQ7SUFyRTNELGNBcUVvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJQWlD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RG9CakIsZUNuQmdCO0VEb0JoQixnQkNwQnFCO0VEc0J2QixpQkN0QjBCO0VEdUIxQixxQkN2QmlDO0VEd0JqQyxtQkN4QjBDO0VEeUIxQyxvQkN6Qm1EO0VEMEJuRCxXQzFCeUQsRUFBQTtFQUUzRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkNBQTJDLEVBQUE7RUFIN0M7SUFNSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVMsRUFBQTtFQVJiO0lBWUkseUJBQWE7SUFDYiwyQkFBZTtJQUNmLHFCQUFnQjtJQUNoQixtQkFBYztJQUNkLHNCQUFvQixFQUFBO0VBaEJ4QjtNRGlCSSxlQ0VvQjtNRERwQixnQkNDeUI7TURDM0IsaUJDRDhCO01ERTlCLDBCQ0YwQztNREcxQyxpQkNIaUQ7TURJakQsb0JDSjBEO01ESzFELGNDTG1FO01BQy9ELGNBQWMsRUFBQTtFQXBCcEI7TURpQkksaUJDT3NCO01ETnRCLGdCQ00yQjtNREo3QixpQkNJZ0M7TURIaEMsMEJDRzRDO01ERjVDLG1CQ0VxRDtNRERyRCxvQkNDOEQ7TURBOUQsY0E1QmE7TUM2QlQscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQTNCekI7TURpQkksa0JDY3VCO01EYnZCLGdCQ2E0QjtNRFg5QixpQkNXaUM7TURWakMsMEJDVTZDO01EVDdDLG1CQ1NzRDtNRFJ0RCxvQkNRK0Q7TURQL0QsY0FoQ2tCO01Dd0NkLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUFsQ3pCO01EaUJJLGlCQ29Cc0I7TURuQnRCLGdCQ21CMkI7TURqQjdCLGlCQ2lCZ0M7TURoQmhDLDBCQ2dCNEM7TURmNUMsbUJDZXFEO01EZHJELG9CQ2M4RDtNRGI5RCxjQWhDa0I7TUM4Q2QsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIscUJBQXFCLEVBQUE7RUF6QzNCO01EaUJJLGVDa0NvQjtNRGpDcEIsZ0JDaUN5QjtNRC9CM0IsaUJDK0I4QjtNRDlCOUIscUJDOEJxQztNRDdCckMsbUJD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S3NCO0VEL0p0QixpQkMrSjhCO0VEOUo5Qix5QkM4SnNDO1VEOUp0QyxtQkM4SnNDO0VEN0p0QyxxQkM2SmdEO1VEN0poRCx5QkM2SmdELEVBQUE7RUFIbEQ7SUFNVSxhQUFhLEVBQUE7RUFNdkI7RUFDRSxvQkFBb0IsRUFBQTtFQUR0QjtJQUlJLGFBQWE7SUQ5TGIsaUJDK0xvQjtJRDlMcEIsZ0JDOEx5QjtJRDVMM0IsaUJDNEw4QjtJRDNMOUIsb0JDMkxvQztJRDFMcEMsZ0JDMEwwQztJRHpMMUMsb0JDeUxtRDtJRHhMbkQsY0FoQ2tCLEVBQUE7RUNtTnBCO0lBUUksYUFBWTtJRGxNWixlQ21Na0I7SURsTWxCLGdCQ2tNdUI7SURoTXpCLGlCQ2dNNEI7SUQvTDVCLG9CQytMa0M7SUQ5TGxDLGdCQzhMd0M7SUQ3THhDLG9CQzZMaUQ7SUQ1TGpELGNBaENrQixFQUFBO0VDbU5wQjtJQWFJLG9CQUFvQixFQUFBO0VBSXhCO0VEM01JLGlCQzhNb0I7RUQ3TXBCLGdCQzZNeUI7RUQzTTNCLGlCQzJNOEI7RUQxTTlCLG9CQzBNb0M7RUR6TXBDLGdCQ3lNMEM7RUR4TTFDLG9CQ3dNbUQ7RUR2TW5ELGNBaENrQjtFQ3dPaEIsYUFBYTtFQUNiLFNBQVMsRUFBQTtFQUxiO0VBUUksMkJBQWU7RUFDZiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7RUFickI7SUFnQk0sWUFBWSxFQUFBO0VBaEJsQjtJRDNNSSxpQkMrTnNCO0lEOU50QixnQkM4TjJCO0lENU43QixpQkM0TmdDO0lEM05oQyxvQkMyTnNDO0lEMU50QyxnQkMwTjRDO0lEek41QyxvQkN5TnFEO0lEeE5yRCxjQTVCYTtJQ3FQVCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQixFQUFBO0VBdkIzQjtJQTBCTSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFNBQVMsRUFBQTtFQTVCZjtJRDNNSSxlQzJPb0I7SUQxT3BCLGdCQzBPeUI7SUR4TzNCLGlCQ3dPOEI7SUR2TzlCLG9CQ3VPb0M7SUR0T3BDLGdCQ3NPMEM7SURyTzFDLG9CQ3FPbUQ7SURwT25ELGNDb080RDtJQUN4RCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCLEVBQUE7RUFPNUI7RUR2UEksaUJDeVBvQjtFRHhQcEIsZ0JDd1B5QjtFRHRQM0IsaUJDc1A4QjtFRHJQOUIsMEJDcVAwQztFRHBQMUMsZ0JDb1BnRDtFRG5QaEQsb0JDbVB5RDtFRGxQekQsY0FoQ2tCLEVBQUE7RUNnUnBCO0lBS00sV0FBVyxFQUFBO0VBTGpCO0VEdlBJLGtCQ2lRcUI7RURoUXJCLGdCQ2dRMEI7RUQ5UDVCLGlCQzhQK0I7RUQ3UC9CLDBCQzZQMkM7RUQ1UDNDLGdCQzRQaUQ7RUQzUGpELG9CQzJQMEQ7RUQxUDFELFdDMFBnRSxFQUFBO0VBVmxFO0VBaUJVLGNEN1JLLEVBQUE7RUM0UWY7RUF1QlUsY0Q1Uk8sRUFBQTtFQ3FRakI7RUE2QlUsY0R0U1csRUFBQTtFQ3lRckI7RUR0T0Usb0JDd1EwQjtFRHhRMUIsYUN3UTBCO0VEdlExQixlQ3VRZ0M7RUR0UWhDLHlCQ3NRd0M7VUR0UXhDLG1CQ3NRd0M7RURyUXhDLHdCQ3FRZ0Q7VURyUWhELHVCQ3FRZ0QsRUFBQTtFQWxDbEQ7RUF5Q0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQTNDdEI7SUE4Q00sY0Q5VGM7SUMrVGQsYUFBYSxFQUFBO0VBL0NuQjtJQW1ETSxjRHpUVTtJQzBUVixhQUFhLEVBQUE7RUFLbkI7RURoVEksZUNpVGdCO0VEaFRoQixnQkNnVHFCO0VEOVN2QixpQkM4UzBCO0VEN1MxQixvQkM2U2dDO0VENVNoQyxnQkM0U3NDO0VEM1N0QyxvQkMyUytDO0VEMVMvQyxjQzBTd0QsRUFBQTtFQUcxRDtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lEcFRJLGlCQ3dUb0I7SUR2VHBCLGdCQ3VUeUI7SURyVDNCLGlCQ3FUOEI7SURwVDlCLG9CQ29Ub0M7SURuVHBDLGdCQ21UMEM7SURsVDFDLG9CQ2tUbUQ7SURqVG5E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QWhDa0I7SUN3ZWhCLFNBQVMsRUFBQTtFQUxiO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPLEVBQUE7RUFYWDtJQWVJLGtCQUFrQjtJQUNsQiw2QkFBNkIsRUFBQTtFQWhCakM7TUFtQk0saUJBQWlCLEVBQUE7RUFuQnZCO01BdUJNLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZS1naXZlci9jZ3ZpdGFscy9jZ3ZpdGFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmN2Y2ZmY7XHJcbiAgLS1jb2xvcjogIzJjMmMyYztcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBAaW5jbHVkZSBmb250KDEycHgsIDYwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG59XHJcbmlvbi1pdGVtLWdyb3VwLmV4cGVuc2VfY2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gIHN2Z3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgcmlnaHQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRhbGVydCk7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgIC8vICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgLy8gICAmOjphZnRlcntcclxuICAgICAgLy8gICAgIGNvbnRlbnQ6ICcsJztcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGFsZXJ0O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAjZmZmZmZmKTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNwYW57XHJcbiAgICAgIC8vICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAvLyAgICAgICAgIEBpbmNsdWRlIGZvbnQoMTZweCwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgI2ZmZmZmZik7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRyYW5zX2J0biB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmV4cGFuZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgJiArIGlvbi1jaGlwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIGlvbi1jaGlwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCAxLjUsICR3aGl0ZSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhbGVydDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudHJhbnNfYnRuIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC43NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxuICAgIC0tY29sb3I6ICNlYTRlNGU7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2VhNGU0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbjogLTFweCAycHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRUNFQ0VDO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogI2VhNGU0ZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6ICNiY2JiY2Y7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwcmVudDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICNmYTVlNjE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnVuaXRzIHtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogNjBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTU1cHg7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFjdGlvbl90b29scyB7XHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAmICsgaW9uLWJ1dHRvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBmbGV4LWVuZCk7XHJcblxyXG4gICAgICBpb24tYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnl7XHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XHJcblxyXG4gIGg1e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICB9XHJcbiAgcHtcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgfVxyXG5cclxuICAmICsgZm9ybXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByZXZpb3VzX2xpc3R7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuNXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBpb24taXRlbXtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICByaWdodDogLTMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDV7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRhbGVydCk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gc3BhbntcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICNCMEIwQjkpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogLTMycHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1yb3cge1xyXG4gIGg1IHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBub25lKTtcclxuICB9XHJcblxyXG4gICY6bm90KC5wcm9qZWN0aW9ucykge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICYubGFzdCB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRhbGVydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRleHBlbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi55ZWFyIHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGFwcG9pbnRtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFuYWx5dGljcyB7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnByb2plY3Rpb25zIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlM2U1O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTFweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxuICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAkcmVwb3J0O1xyXG4gICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRleHR7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICM4QjkzOTgpO1xyXG59XHJcblxyXG4uZGF0ZV9maWx0ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoMXtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW5hbHl0aWNze1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLS1jb2xvcjogIzQ4M2RmNjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLmFuYWx5dGljc190YWJsZXtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWY1O1xyXG4gICAgXHJcbiAgICB0YWJsZXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5leHBhbmQge1xyXG4gICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgICYuY29sbGFwc2Uge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICB0aHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgdGhlYWR7XHJcbiAgICAgIHRye1xyXG4gICAgICAgIHRoe1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlYztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5e1xyXG4gICAgICB0cntcclxuICAgICAgICB0ZHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG4gICAgICAgICAgLy8gJjplbXB0eXtcclxuICAgICAgICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLy8gICAmOmFmdGVye1xyXG4gICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICctJztcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAmOmVtcHR5e1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJy0nO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZWM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWY1O1xyXG4gICAgICAgICAgLy8gdGQ6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uX3Rvb2xze1xyXG4gIC50cmFuc19idG57XHJcbiAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBzdmd7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYnV0dG9ucyBpb24tYnV0dG9uLmJ0bjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5kYXRlX2ZpbHRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGgxe1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZGF0ZXRpbWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2RkZDtcclxuXHJcbiAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/care-giver/cgvitals/cgvitals.page.ts":
/*!******************************************************!*\
  !*** ./src/app/care-giver/cgvitals/cgvitals.page.ts ***!
  \******************************************************/
/*! exports provided: CgvitalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgvitalsPage", function() { return CgvitalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");











var CgvitalsPage = /** @class */ (function () {
    function CgvitalsPage(datepipe, service, route, router, alertController, statusBar, databaseSummary) {
        this.datepipe = datepipe;
        this.service = service;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.status = true;
        this.status1 = -1;
        this.data_details = [];
        this.vital_keys = [];
        this.environmentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ImageUrl;
    }
    CgvitalsPage.prototype.ngOnInit = function () {
    };
    CgvitalsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.statusBar.backgroundColorByHexString('#60dc68');
        this.tabBar = document.getElementById('myTabBar1').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.status = true;
        // this.service.vitalEventList().subscribe(res=>{
        //   this.status = false;
        //   this.vital_details=res;
        //   this.vital_keys = Object.keys(this.vital_details); 
        // })  
        this.databaseSummary.getAllEvents('vital', 'New', 7).then(function (res) {
            console.log(res);
            var data = res['event_list'];
            _this.groupBy(data);
        }).catch(function (err) { console.log(err); });
        this.profile_details = JSON.parse(localStorage.getItem("details"));
        if (this.profile_details != undefined) {
            console.log(this.profile_details);
            this.logoinitial = this.profile_details.name.charAt(0);
            this.profile_pic = this.profile_details.profile_pic;
            if (this.profile_details.profile_pic == null) {
                this.profile_pic = null;
            }
            this.user_name = this.profile_details.name;
        }
    };
    CgvitalsPage.prototype.groupBy = function (data) {
        var records = data.map(function (item) { return ({
            id: item.id,
            event_id: item.event_id,
            created_at: item.created_at,
            description: item.description,
            event_category: item.event_category,
            event_assets: item.event_assets,
            event_options: item.event_options,
            event_name: item.event_name,
            event_datetime: item.event_datetime,
            value: item.value,
            event_type: item.event_type,
            user_id: item.user_id
        }); });
        var value = {};
        var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (person) { return person.event_name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()); })).subscribe(function (val) {
            if (val) {
                if (val.length > 7) {
                    val.length = 7;
                }
                ;
                value["" + val[0]['event_name']] = val;
            }
        });
        this.vital_details = value;
        this.vital_keys = Object.keys(this.vital_details);
        this.status = false;
    };
    CgvitalsPage.prototype.history_view = function (event) {
        var navigationExtras = {
            queryParams: {
                data: event
            }
        };
        this.router.navigate(['/care-giver-tabs/tabsc/tab1c/cg-vitals/cgvital-reading'], navigationExtras);
    };
    CgvitalsPage.prototype.toggle = function (key) {
        var index = this.vital_keys.indexOf(key);
        this.status1 = this.vital_keys[index] === this.status1 ? -1 : this.vital_keys[index];
    };
    CgvitalsPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    };
    CgvitalsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__["DataBaseSummaryProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('width', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CgvitalsPage.prototype, "elementWidth", void 0);
    CgvitalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cgvitals',
            template: __webpack_require__(/*! raw-loader!./cgvitals.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgvitals/cgvitals.page.html"),
            styles: [__webpack_require__(/*! ./cgvitals.page.scss */ "./src/app/care-giver/cgvitals/cgvitals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__["DataBaseSummaryProvider"]])
    ], CgvitalsPage);
    return CgvitalsPage;
}());



/***/ })

}]);
//# sourceMappingURL=cgvitals-cgvitals-module-es5.js.map