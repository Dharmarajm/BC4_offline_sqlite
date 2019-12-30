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

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #60dc68;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-item-group.expense_card {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group.expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group.expense_card ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group.expense_card ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group.expense_card ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group.expense_card ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group.expense_card ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 0;\n      white-space: pre-wrap;\n      word-break: break-all;\n      display: inline-block; }\n  ion-item-group.expense_card ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group.expense_card ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group.expense_card ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group.expense_card .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group.expense_card .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  ion-item-group.expense_card .expand {\n    height: auto; }\n  ion-item-group.expense_card .collapse {\n    height: 0;\n    padding: 0; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item:last-child {\n    --border-color: transparent; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-list ion-item h3 + ion-chip {\n      margin-left: 0; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list ion-item ion-chip {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: 1.5;\n    color: #ffffff;\n    background-color: #0e9bff;\n    height: 25px; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form {\n  padding-bottom: 60px; }\n  form ion-item {\n    --background: transparent;\n    --border-color: #ECECEC;\n    --highlight-color-focused: #483df6;\n    --highlight-color-valid: #483df6;\n    --highlight-color-invalid: #ea4e4e;\n    --padding-start: 0;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin-bottom: 10px; }\n  form ion-item ion-label {\n      --color: #bcbbcf; }\n  form ion-item ion-button {\n      position: absolute;\n      top: 16px;\n      right: 0;\n      width: 42px;\n      min-height: 42px;\n      --background: transprent;\n      --border-radius: 50%;\n      --box-shadow: none;\n      --ripple-color: #fa5e61;\n      margin: 0; }\n  form ion-item.units {\n      --padding-end: 60px;\n      --inner-padding-end: 0;\n      overflow: visible; }\n  form ion-item.units span {\n        position: absolute;\n        right: -55px;\n        bottom: 10px; }\n  form ion-item.units div {\n        width: 100%; }\n  .action_tools ion-searchbar + ion-buttons {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n  .action_tools ion-searchbar + ion-buttons ion-button:not(:last-child) {\n    margin: 0 5px; }\n  .category {\n  padding: 16px 16px 0; }\n  .category h5 {\n    margin-top: 0;\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .category p {\n    margin-top: 0;\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .category + form {\n    padding-bottom: 16px; }\n  .previous_list h4 {\n  font-size: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  padding: 16px;\n  margin: 0; }\n  .previous_list ion-item {\n  --border-color: transparent;\n  border-left: 1px dashed #ddd;\n  margin: 0 32px;\n  padding: 16px 0;\n  --inner-padding-end: 16px;\n  overflow: visible; }\n  .previous_list ion-item ion-button {\n    right: -32px; }\n  .previous_list ion-item h5 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #0e9bff;\n    margin-top: 10px;\n    white-space: pre-wrap;\n    word-break: break-all; }\n  .previous_list ion-item p {\n    white-space: pre-wrap;\n    word-break: break-all;\n    margin: 0; }\n  .previous_list ion-item > span {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #B0B0B9;\n    position: absolute;\n    top: 0;\n    left: -32px;\n    z-index: 1;\n    background-color: #fff; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-text {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8B9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .analytics {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .analytics:not(:last-child) {\n    margin-bottom: 30px; }\n  .analytics h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0;\n    padding: 10px; }\n  .analytics ion-button {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: left;\n    line-height: inherit;\n    color: none;\n    margin: 0;\n    --color: #483df6;\n    --border-radius: 0; }\n  .analytics .analytics_table {\n    overflow-y: hidden;\n    overflow-x: auto;\n    max-height: 200px;\n    border-bottom: 1px solid #f1f1f5; }\n  .analytics .analytics_table table {\n      width: 100%; }\n  .analytics .analytics_table.expand {\n      max-height: unset; }\n  .analytics .analytics_table.collapse {\n      max-height: 200px; }\n  .analytics .analytics_table th {\n      font-size: 0.9rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: nowrap;\n      padding: 0.75rem 0.25rem;\n      background-color: #f1f1f5;\n      border-right: 1px solid #ddd; }\n  .analytics .analytics_table td {\n      font-size: 0.85rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding: 0.75rem 0.25rem; }\n  .analytics .analytics_table thead tr th:first-child {\n      position: -webkit-sticky;\n      position: sticky;\n      left: 0;\n      background-color: #e5e5ec;\n      text-align: center; }\n  .analytics .analytics_table tbody tr td {\n      border-right: 1px solid #ddd; }\n  .analytics .analytics_table tbody tr td p {\n        font-size: 0.85rem;\n        font-weight: 400;\n        letter-spacing: 0;\n        text-transform: none;\n        text-align: left;\n        line-height: inherit;\n        color: #2c2c2c;\n        margin: 0; }\n  .analytics .analytics_table tbody tr td p:empty {\n          text-align: center;\n          display: none; }\n  .analytics .analytics_table tbody tr td p:empty:not(:first-child) {\n            display: none; }\n  .analytics .analytics_table tbody tr td p:empty:after {\n            content: '-'; }\n  .analytics .analytics_table tbody tr td p span {\n          white-space: nowrap; }\n  .analytics .analytics_table tbody tr td:first-child {\n        position: -webkit-sticky;\n        position: sticky;\n        left: 0;\n        background-color: #e5e5ec;\n        white-space: nowrap;\n        font-size: 0.85rem;\n        font-weight: 500;\n        letter-spacing: 0;\n        text-transform: none;\n        text-align: center;\n        line-height: inherit;\n        color: #2c2c2c; }\n  .analytics .analytics_table tbody tr:nth-child(even) {\n      background-color: #f1f1f5; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-buttons ion-button.btn:not(:last-child) {\n  margin-right: 16px; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 0px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci9jZ3ZpdGFscy9jZ3ZpdGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRBO0VBeEJJLGlCQTJCc0I7RUExQnRCLGdCQTBCMkI7RUF4QjdCLGlCQXdCZ0M7RUF2QmhDLDBCQXVCNEM7RUF0QjVDLGdCQXNCa0Q7RUFyQmxELG9CQXFCMkQ7RUFwQjNELGNBb0JvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBMUNFLG9CQWdEb0I7RUFoRHBCLGFBZ0RvQjtFQS9DcEIsaUJBK0M0QjtFQTlDNUIseUJBOENvQztVQTlDcEMsbUJBOENvQztFQTdDcEMsdUJBNkMyQztVQTdDM0Msc0JBNkMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTNESSxlQTZFb0I7SUE1RXBCLGdCQTRFeUI7SUExRTNCLGlCQTBFOEI7SUF6RTlCLDBCQXlFMEM7SUF4RTFDLGtCQXdFa0Q7SUF2RWxELG9CQXVFMkQ7SUF0RTNELGNBc0VvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJQWlD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RE0sY0FBYyxFQUFBO0VDMXNCcEI7RUFFSSxxQkFBYTtFQUNiLGdCQUFRLEVBQUE7RUFHWjtFQUNFLHFCQUFhO0VBQ2IsZ0JBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFRHNCakIsZUNyQmdCO0VEc0JoQixnQkN0QnFCO0VEd0J2QixpQkN4QjBCO0VEeUIxQixxQkN6QmlDO0VEMEJqQyxtQkMxQjBDO0VEMkIxQyxvQkMzQm1EO0VENEJuRCxXQzVCeUQsRUFBQTtFQUUzRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkNBQTJDLEVBQUE7RUFIN0M7SUFNSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVMsRUFBQTtFQVJiO0lBWUkseUJBQWE7SUFDYiwyQkFBZTtJQUNmLHFCQUFnQjtJQUNoQixtQkFBYztJQUNkLHNCQUFvQixFQUFBO0VBaEJ4QjtNRG1CSSxlQ0FvQjtNRENwQixnQkNEeUI7TURHM0IsaUJDSDhCO01ESTlCLDBCQ0owQztNREsxQyxpQkNMaUQ7TURNakQsb0JDTjBEO01ETzFELGNDUG1FO01BQy9ELGNBQWMsRUFBQTtFQXBCcEI7TURtQkksaUJDS3NCO01ESnRCLGdCQ0kyQjtNREY3QixpQkNFZ0M7TUREaEMsMEJDQzRDO01EQTVDLG1CQ0FxRDtNRENyRCxvQkNEOEQ7TURFOUQsY0E5QmE7TUM2QlQscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQTNCekI7TURtQkksa0JDWXVCO01EWHZCLGdCQ1c0QjtNRFQ5QixpQkNTaUM7TURSakMsMEJDUTZDO01EUDdDLG1CQ09zRDtNRE50RCxvQkNNK0Q7TURML0QsY0FsQ2tCO01Dd0NkLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUFsQ3pCO01EbUJJLGlCQ2tCc0I7TURqQnRCLGdCQ2lCMkI7TURmN0IsaUJDZWdDO01EZGhDLDBCQ2M0QztNRGI1QyxtQkNhcUQ7TURackQsb0JDWThEO01EWDlELGNBbENrQjtNQzhDZCxnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixxQkFBcUIsRUFBQTtFQXpDM0I7TURtQkksZUNnQ29CO01EL0JwQixnQkMrQnlCO01EN0IzQixpQkM2QjhCO01ENUI5QixxQkM0QnFDO01EM0JyQyxtQkMyQjhDO01EMUI5QyxvQkMwQnVEO01EekJ2RCxjQ3lCZ0U7TUFDNUQscUJBQXFCO01BQ3JCLHFCQUFxQixFQUFBO0VBckQzQjtNQXlETSxrQkFBa0I7TUFDbEIsbUJEOURTO01DK0RULHFCQUFxQjtNRHhDdkIsZUN5Q29CO01EeENwQixnQkN3Q3lCO01EdEMzQixpQkNzQzhCO01EckM5QixxQkNxQ3FDO01EcENyQyxrQkNvQzZDO01EbkM3QyxvQkNtQ3NEO01EbEN0RCxjQ2tDK0QsRUFBQTtFQTVEakU7UUErRFEsV0FBVztRQUNYLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTLEVBQUE7RUFwRWpCO0lEbUJJLGtCQzREcUI7SUQzRHJCLGdCQzJEMEI7SUR6RDVCLGlCQ3lEK0I7SUR4RC9CLDBCQ3dEMkM7SUR2RDNDLG1CQ3VEb0Q7SUR0RHBELG9CQ3NENkQ7SURyRDdELFdDcURtRTtJQUNqRSxnQkFBUTtJQUNSLDBCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFyRmpCO01BdUZNLG9CQUFvQixFQUFBO0VBdkYxQjtJQTJGSSxZQUFZLEVBQUE7RUEzRmhCO0lBOEZJLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFJZDtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxzQkFBb0IsRUFBQTtFQU54QjtJQVNNLDJCQUFlLEVBQUE7RUFUckI7SURoRkksaUJDNkZzQjtJRDVGdEIsZ0JDNEYyQjtJRDFGN0IsaUJDMEZnQztJRHpGaEMsMEJDeUY0QztJRHhGNUMsbUJDd0ZxRDtJRHZGckQsb0JDdUY4RDtJRHRGOUQsY0FsQ2tCO0lDeUhkLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQWZ4QjtNQWtCUSxjQUFjLEVBQUE7RUFsQnRCO0lEaEZJLGVDdUdvQjtJRHRHcEIsZ0JDc0d5QjtJRHBHM0IsaUJDb0c4QjtJRG5HOUIscUJDbUdxQztJRGxHckMsbUJDa0c4QztJRGpHOUMsb0JDaUd1RDtJRGhHdkQsY0NnR2dFO0lBQzVELGVBQWUsRUFBQTtFQXhCckI7SURoRkksZUMyR29CO0lEMUdwQixnQkMwR3lCO0lEeEczQixpQkN3RzhCO0lEdkc5QixxQkN1R3FDO0lEdEdyQyxtQkNzRzhDO0lEckc5QyxnQkNxR21EO0lEcEduRCxjQW5DYTtJQ3dJVCx5QkRuSVM7SUNvSVQsWUFBWSxFQUFBO0VBN0JsQjtFRGhGSSxrQkNpSHFCO0VEaEhyQixnQkNnSDBCO0VEOUc1QixpQkM4RytCO0VEN0cvQiwwQkM2RzJDO0VENUczQyxtQkM0R29EO0VEM0dwRCxvQkMyRzZEO0VEMUc3RCxXQzBHbUU7RUFDakUsZ0JBQVE7RUFDUiwwQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYSxFQUFBO0VBdkNqQjtJQXlDTSxvQkFBb0IsRUFBQTtFQUsxQjtFQUNFLG9CQUFvQixFQUFBO0VBRHRCO0lBSUkseUJBQWE7SUFDYix1QkFBZTtJQUNmLGtDQUEwQjtJQUMxQixnQ0FBd0I7SUFDeEIsa0NBQTBCO0lBQzFCLGtCQUFnQjtJRHZJaEIsZUN3SWtCO0lEdklsQixnQkN1SXVCO0lEckl6QixpQkNxSTRCO0lEcEk1QixvQkNvSWtDO0lEbklsQyxnQkNtSXdDO0lEbEl4QyxvQkNrSWlEO0lEaklqRCxjQWxDa0I7SUNvS2hCLG1CQUFtQixFQUFBO0VBWHZCO01BY00sZ0JBQVEsRUFBQTtFQWRkO01Ba0JNLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsd0JBQWE7TUFDYixvQkFBZ0I7TUFDaEIsa0JBQWE7TUFDYix1QkFBZTtNQUNmLFNBQVMsRUFBQTtFQTNCZjtNQStCTSxtQkFBYztNQUNkLHNCQUFvQjtNQUNwQixpQkFBaUIsRUFBQTtFQWpDdkI7UUFtQ1Esa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZLEVBQUE7RUFyQ3BCO1FBeUNRLFdBQVcsRUFBQTtFQUtuQjtFRDNKRSxvQkM4SnNCO0VEOUp0QixhQzhKc0I7RUQ3SnRCLGlCQzZKOEI7RUQ1SjlCLHlCQzRKc0M7VUQ1SnRDLG1CQzRKc0M7RUQzSnRDLHFCQzJKZ0Q7VUQzSmhELHlCQzJKZ0QsRUFBQTtFQUhsRDtJQU1VLGFBQWEsRUFBQTtFQU12QjtFQUNFLG9CQUFvQixFQUFBO0VBRHRCO0lBSUksYUFBYTtJRDVMYixpQkM2TG9CO0lENUxwQixnQkM0THlCO0lEMUwzQixpQkMwTDhCO0lEekw5QixvQkN5TG9DO0lEeExwQyxnQkN3TDBDO0lEdkwxQyxvQkN1TG1EO0lEdExuRCxjQWxDa0IsRUFBQTtFQ21OcEI7SUFRSSxhQUFZO0lEaE1aLGVDaU1rQjtJRGhNbEIsZ0JDZ011QjtJRDlMekIsaUJDOEw0QjtJRDdMNUIsb0JDNkxrQztJRDVMbEMsZ0JDNEx3QztJRDNMeEMsb0JDMkxpRDtJRDFMakQsY0FsQ2tCLEVBQUE7RUNtTnBCO0lBYUksb0JBQW9CLEVBQUE7RUFJeEI7RUR6TUksaUJDNE1vQjtFRDNNcEIsZ0JDMk15QjtFRHpNM0IsaUJDeU04QjtFRHhNOUIsb0JDd01vQztFRHZNcEMsZ0JDdU0wQztFRHRNMUMsb0JDc01tRDtFRHJNbkQsY0FsQ2tCO0VDd09oQixhQUFhO0VBQ2IsU0FBUyxFQUFBO0VBTGI7RUFRSSwyQkFBZTtFQUNmLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUFvQjtFQUNwQixpQkFBaUIsRUFBQTtFQWJyQjtJQWdCTSxZQUFZLEVBQUE7RUFoQmxCO0lEek1JLGlCQzZOc0I7SUQ1TnRCLGdCQzROMkI7SUQxTjdCLGlCQzBOZ0M7SUR6TmhDLG9CQ3lOc0M7SUR4TnRDLGdCQ3dONEM7SUR2TjVDLG9CQ3VOcUQ7SUR0TnJELGNBOUJhO0lDcVBULGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIscUJBQXFCLEVBQUE7RUF2QjNCO0lBMEJNLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsU0FBUyxFQUFBO0VBNUJmO0lEek1JLGVDeU9vQjtJRHhPcEIsZ0JDd095QjtJRHRPM0IsaUJDc084QjtJRHJPOUIsb0JDcU9vQztJRHBPcEMsZ0JDb08wQztJRG5PMUMsb0JDbU9tRDtJRGxPbkQsY0NrTzREO0lBQ3hELGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0IsRUFBQTtFQU81QjtFRHJQSSxpQkN1UG9CO0VEdFBwQixnQkNzUHlCO0VEcFAzQixpQkNvUDhCO0VEblA5QiwwQkNtUDBDO0VEbFAxQyxnQkNrUGdEO0VEalBoRCxvQkNpUHlEO0VEaFB6RCxjQWxDa0IsRUFBQTtFQ2dScEI7SUFLTSxXQUFXLEVBQUE7RUFMakI7RURyUEksa0JDK1BxQjtFRDlQckIsZ0JDOFAwQjtFRDVQNUIsaUJDNFArQjtFRDNQL0IsMEJDMlAyQztFRDFQM0MsZ0JDMFBpRDtFRHpQakQsb0JDeVAwRDtFRHhQMUQsV0N3UGdFLEVBQUE7RUFWbEU7RUFpQlUsY0Q3UkssRUFBQTtFQzRRZjtFQXVCVSxjRDVSTyxFQUFBO0VDcVFqQjtFQTZCVSxjRHRTVyxFQUFBO0VDeVFyQjtFRHBPRSxvQkNzUTBCO0VEdFExQixhQ3NRMEI7RURyUTFCLGVDcVFnQztFRHBRaEMseUJDb1F3QztVRHBReEMsbUJDb1F3QztFRG5ReEMsd0JDbVFnRDtVRG5RaEQsdUJDbVFnRCxFQUFBO0VBbENsRDtFQXlDSSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBM0N0QjtJQThDTSxjRDlUYztJQytUZCxhQUFhLEVBQUE7RUEvQ25CO0lBbURNLGNEelRVO0lDMFRWLGFBQWEsRUFBQTtFQUtuQjtFRDlTSSxlQytTZ0I7RUQ5U2hCLGdCQzhTcUI7RUQ1U3ZCLGlCQzRTMEI7RUQzUzFCLG9CQzJTZ0M7RUQxU2hDLGdCQzBTc0M7RUR6U3RDLG9CQ3lTK0M7RUR4Uy9DLGNDd1N3RCxFQUFBO0VBRzFEO0VBQ0Usa0JB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QixFQUFBO0VBRHBCO0lEeGNJLGlCQzRjb0I7SUQzY3BCLGdCQzJjeUI7SUR6YzNCLGlCQ3ljOEI7SUR4YzlCLG9CQ3djb0M7SUR2Y3BDLGdCQ3VjMEM7SUR0YzFDLG9CQ3NjbUQ7SURyY25ELGNBbENrQjtJQ3dlaEIsU0FBUyxFQUFBO0VBTGI7SUFTSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU8sRUFBQTtFQVhYO0lBZUksa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUFBO0VBaEJqQztNQW1CTSxpQkFBaUIsRUFBQTtFQW5CdkI7TUF1Qk0sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJlLWdpdmVyL2Nndml0YWxzL2Nndml0YWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuJG15LWdyZXktYmx1ZSA6ICNlYTRlNGU7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIC8vIGlvbi1pdGVte1xuICAvLyAgIGlvbi1sYWJlbHtcbiAgLy8gICAgIC0tY29sb3I6ICM3YjdiN2I7XG4gIC8vICAgfVxuICAvLyB9XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjMWMxYzFjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGM2ODtcbiAgICAgIHBhZGRpbmc6IDFweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhcjpub3QoLm5vLWJhY2tncm91bmQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNmZmO1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA2MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxufVxyXG5pb24taXRlbS1ncm91cC5leHBlbnNlX2NhcmQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICBzdmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIHJpZ2h0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkYWxlcnQpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAvLyAmOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgIC8vICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIC8vICAgICBjb250ZW50OiAnLCc7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhbGVydDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgI2ZmZmZmZik7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzcGFue1xyXG4gICAgICAvLyAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgLy8gICAgICAgICBAaW5jbHVkZSBmb250KDE2cHgsIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICNmZmZmZmYpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5leHBhbmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuY29sbGFwc2Uge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlY2VjZWM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICYgKyBpb24tY2hpcHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2hpcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgMS41LCAkd2hpdGUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWxlcnQ7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRyYW5zX2J0biB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0VDRUNFQztcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcHJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmE1ZTYxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi51bml0cyB7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDYwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC01NXB4O1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5hY3Rpb25fdG9vbHMge1xyXG4gIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgJiArIGlvbi1idXR0b25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgZmxleC1lbmQpO1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhdGVnb3J5e1xyXG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xyXG5cclxuICBoNXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgJiArIGZvcm17XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcmV2aW91c19saXN0e1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIGg0e1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjVyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgcmlnaHQ6IC0zMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg1e1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkYWxlcnQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IHNwYW57XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAjQjBCMEI5KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IC0zMnB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5pb24tcm93IHtcclxuICBoNSB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCgucHJvamVjdGlvbnMpIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAmLmxhc3Qge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkYWxlcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkZXhwZW5zZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYueWVhciB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRhcHBvaW50bWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5hbmFseXRpY3Mge1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wcm9qZWN0aW9ucyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTNlNTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDExcHg7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBjb2xvcjogJHJlcG9ydDtcclxuICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gIEBpbmNsdWRlIGZvbnQoMTJweCwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAjOEI5Mzk4KTtcclxufVxyXG5cclxuLmRhdGVfZmlsdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFuYWx5dGljc3tcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgaDN7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBub25lKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC0tY29sb3I6ICM0ODNkZjY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5hbmFseXRpY3NfdGFibGV7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmNTtcclxuICAgIFxyXG4gICAgdGFibGV7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYuZXhwYW5kIHtcclxuICAgICAgbWF4LWhlaWdodDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAmLmNvbGxhcHNlIHtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGh7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWY1O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbTtcclxuICAgIH1cclxuICAgIHRoZWFke1xyXG4gICAgICB0cntcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZWM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0Ym9keXtcclxuICAgICAgdHJ7XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICAgICAgIC8vICY6ZW1wdHl7XHJcbiAgICAgICAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC8vICAgJjphZnRlcntcclxuICAgICAgICAgIC8vICAgICBjb250ZW50OiAnLSc7XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgJjplbXB0eXtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWVjO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmNTtcclxuICAgICAgICAgIC8vIHRkOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbl90b29sc3tcclxuICAudHJhbnNfYnRue1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgc3Zne1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbi5idG46bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uZGF0ZV9maWx0ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoMXtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZGQ7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

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