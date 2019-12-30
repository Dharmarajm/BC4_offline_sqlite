(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgexpenses-cgexpenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Filter Expenses</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"filter\" (ngSubmit)=\"onSubmit(filter)\">\r\n    <ion-text>Date Filter</ion-text>\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\" (ionChange)=\"changedate(filter.value.from_date,filter.value.end_date)\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <!-- <ion-label position=\"floating\">From Date</ion-label> -->\r\n            <h1>From Date</h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.from_date.invalid,'ion-touched': submitted && f.from_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [max]='todaydate' formControlName=\"from_date\" placeholder=\"--:--\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n          <h6>(Set From Date)</h6>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <!-- <ion-label position=\"floating\">To Date</ion-label> -->\r\n            <h1>To Date</h1>\r\n            <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.end_date.invalid,'ion-touched': submitted && f.end_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [max]='todaydate' formControlName=\"end_date\" placeholder=\"-- --- ----\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          </div>\r\n          <h6>(Set To Date)</h6>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-text *ngIf=\"list_keys.length!=0\">Choose expense heads for analysis</ion-text>\r\n    <ion-list class=\"ion-padding-bottom\">\r\n      <ion-item *ngFor=\"let key of list_keys\">\r\n        <ion-label>\r\n          <h3>{{key}}</h3>\r\n        </ion-label>\r\n        <ion-checkbox (ionChange)=\"checkbox($event, key)\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n      <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\r\n        Apply\r\n      </ion-button>\r\n    </div>\r\n    <!-- <ion-button (click)=\"cancel()\" color=\"primary\">Cancel</ion-button>\r\n    <ion-button type=\"submit\" color=\"primary\">Filter</ion-button> -->\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expenses Analytics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n  <!-- <ion-item>\n  <h5>From date:{{firstDay | date:\"dd MMM yyyy\"}}</h5> \n  <h5>To date:{{date | date:\"dd MMM yyyy\"}}</h5>\n  </ion-item> -->\n\t<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"datetoast()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n      {{firstDay | date:\"dd MMM yyyy\"}} - {{date | date:\"dd MMM yyyy\"}}\n    </ion-button>\n\t\t<ion-button class=\"btn\" slot=\"end\" color=\"secondary\" (click)=\"filterModal()\">\n        <svg id=\"Group_470\" data-name=\"Group 470\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17.967\" height=\"13.02\" viewBox=\"0 0 17.967 13.02\"> <rect id=\"Rectangle_494\" data-name=\"Rectangle 494\" width=\"17.967\" height=\"2.083\" transform=\"translate(0)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_495\" data-name=\"Rectangle 495\" width=\"11.717\" height=\"2.083\" transform=\"translate(3.125 3.645)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_496\" data-name=\"Rectangle 496\" width=\"8.072\" height=\"2.083\" transform=\"translate(4.947 7.291)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_497\" data-name=\"Rectangle 497\" width=\"3.906\" height=\"2.083\" transform=\"translate(7.03 10.936)\" fill=\"#2c2c2c\"/> </svg>\n\t\t\tFilter\n    </ion-button>\n    <!-- <ion-button color=\"primary\" (click)=\"filterModal()\">Filter</ion-button> -->\n  </ion-toolbar>\n  <div class=\"ion-padding-top ion-padding-bottom\" *ngIf=\"!loader\">\n    <div *ngFor=\"let i of chart_keys\"> \n        <div id=\"{{i}}\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"chart_keys.length == 0 && !loader\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n    </div>\n  </div>\n <div *ngIf=\"loader\">\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n</div>\n <!-- <ion-list *ngIf=\"loader\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expenses</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!loader\">\n\t<ion-toolbar class=\"action_tools\">\n    <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"openCalendar()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n      {{from_date1 | date:\"dd MMM yyyy\"}} - {{end_date1 | date:\"dd MMM yyyy\"}}\n    </ion-button>\n  </ion-toolbar>\n  <ion-note class=\"ion-padding\">Note:<span></span>&nbsp;Click calendar to change date range</ion-note>\n  <div  class=\"ion-padding\">\n    <ion-item-group *ngFor = \"let event of expen_key;let i=index;\">\n      <ion-item class=\"expense_card\" button (click)=\"toggle(i)\">\n        <ion-label>\n          <h4>{{event}}</h4>\n          <h5>&#8377;&nbsp;{{getChartValue[i]}}</h5>\n          <ion-text>Last updated: {{view_all_expen.expense[event][view_all_expen.expense[event].length-1]['updated_at'] | date : \"dd MMM,y\"}}</ion-text>\n        </ion-label>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': i === status, 'collapse': i != status}\">\n          <!-- [ngClass]=\"status ? 'expand' : 'collapse'\"  -->\n          <!-- [ngClass]=\"{'expand': collapse === event, 'collapse': collapse != event}\" -->\n        <ion-item *ngFor = \"let key of view_all_expen.expense[event]\">\n          <ion-avatar>\n            {{key.event_datetime|date:'dd'}}\n            <br>\n            {{key.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <h3>&#8377;&nbsp;{{key.value}}</h3>\n            <p>{{key.description}}</p>\n          </ion-label>\n          <!-- <ion-button class=\"trans_btn\" (click)=\"delete(key.id)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button> -->\n        </ion-item>\n      </ion-list>\n      <!-- <div *ngFor = \"let key of view_all_expen[event]\">\n        {{key.event_datetime | date:'dd/MMM'}}\n        {{key.value}}\n        {{key.description}}\n        <ion-button (click)=\"delete(key.id)\">Delete</ion-button>\n      </div> -->\n    </ion-item-group>\n  </div>\n  <div *ngIf=\"expen_key.length == 0\" class=\"no_record\">\n\t\t<div>\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t<h3>No Record Found</h3>\n\t\t\t<!-- <p>Add your record to know your day to day activity</p>\n      <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button> -->\n\t\t</div>\n  </div>\n  </div>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    \n  \n    <ion-list *ngIf=\"loader\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cgexpenses.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgexpenses/cgexpenses.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n\t<ion-toolbar>\n\t  <ion-back-button slot=\"start\" defaultHref=\"/care-giver-tabs/tabsc/tab1c\"></ion-back-button>\n\t  <ion-title>Expenses</ion-title>\n\t  <ion-buttons slot=\"end\">\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t  </ion-buttons>\n\t</ion-toolbar>\n  </ion-header>\n  <ion-content>\n\t  <ion-toolbar class=\"action_tools\">\n\t\t  <ion-button class=\"btn\" slot=\"start\" color=\"secondary\" routerLink=\"/care-giver-tabs/tabsc/tab1c/cg-expenses/cg-expense-view-summary\" *ngIf=\" main_chart?.Currentmonth?.length != 0\">\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.411\" height=\"11.601\" viewBox=\"0 0 15.411 11.601\"><g transform=\"translate(0 -7.434)\"><path d=\"M24.994,47.431H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -28.601)\"/><path d=\"M24.994,28.6H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -14.597)\"/><path d=\"M24.994,9.769H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -0.593)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 7.434)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 12.201)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 16.969)\"/></g></svg>\n\t\t\t  View All\n\t\t  </ion-button>\n\t\t  <!-- <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t  Add\n\t\t  </ion-button> -->\n\t\t  <ion-chip slot=\"end\" *ngIf=\"profile_details!=undefined\">\n\t\t\t  <ion-label>{{user_name}}</ion-label>\n\t\t\t  <ion-avatar>\n\t\t\t\t  <span *ngIf=\"profile_pic == null\">{{logoinitial}}</span>\n\t\t\t\t  <img *ngIf=\"profile_pic != null\" [src]=\"environmentUrl+profile_pic\">\n\t\t\t\t  \n\t\t\t  </ion-avatar>\n\t\t  </ion-chip>\n\t  </ion-toolbar>\n\t  <div *ngIf=\"main_chart?.Currentmonth?.length == 0\" class=\"no_record\">\n\t\t  <div>\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t  <h3>No Record Found</h3>\n\t\t\t  <!-- <p>Add your record to know your day to day activity</p>\n\t\t\t  <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t\t  Add\n\t\t\t  </ion-button> -->\n\t\t  </div>\n\t  </div>\n\t  <div id=\"expense_chart\"></div>\n\t  <ion-grid *ngIf=\"main_chart?.Currentmonth?.length != 0\">\n\t\t  <ion-row>\n\t\t\t  <!-- <ion-col class=\"last\" size=\"6\" [hidden]=\"Last_Mon_len == 0\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('LM');\" [ngStyle]=\"{'background-color': lastMonthColor}\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': lastMonthColor == '#0e9bff' ? '#fff' : ''}\">Last Month</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': lastMonthColor == '#0e9bff' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.LastMonth}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col> -->\n\t\t\t  <ion-col class=\"current\" size=\"6\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('CM');\" [ngStyle]=\"{'background-color': currentMonthColor}\" >\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': currentMonthColor == '#ffd32c' ? '#fff' : ''}\">Current Month</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': currentMonthColor == '#ffd32c' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.CurrentMonth}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col class=\"year\" size=\"6\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('Year');\" [ngStyle]=\"{'background-color': yearColor}\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': yearColor == '#c7a254' ? '#fff' : ''}\">Yearly</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': yearColor == '#c7a254' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.Yearly}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col class=\"analytics\" size=\"6\">\n\t\t\t\t  <ion-card routerLink=\"/care-giver-tabs/tabsc/tab1c/cg-expenses/cg-expense-analytics\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 class=\"ion-text-center\">\n\t\t\t\t\t\t\t  View Analytics\n\t\t\t\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"13.357\" viewBox=\"0 0 19 13.357\"> <path id=\"left-arrow\" d=\"M6.2.2a.674.674,0,1,1,.957.948L2.3,6H18.32a.674.674,0,0,1,.68.67.683.683,0,0,1-.68.68H2.3L7.155,12.2a.687.687,0,0,1,0,.957.671.671,0,0,1-.957,0l-6-6a.675.675,0,0,1,0-.948Z\" transform=\"translate(19 13.357) rotate(180)\" fill=\"#2c2c2c\"/> </svg>\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t  </ion-row>\n\t\t  <ion-row class=\"projections\">\n\t\t\t  <ion-col size=\"6\" *ngIf=\"expense_val?.status==true\">\n\t\t\t\t  <h5>Monthly Projections</h5>\n\t\t\t\t  <h4>&#8377;&nbsp;{{expense_val?.MonthProjection || '0'}}</h4>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"6\" *ngIf=\"expense_val?.status==true\">\n\t\t\t\t  <h5>Yearly Projections</h5>\n\t\t\t\t  <h4>&#8377;&nbsp;{{expense_val?.YearlyProjection || '0'}}</h4>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"12\" *ngIf=\"expense_val?.status==false\">\n\t\t\t\t  <ion-note> <span>Note:</span><br> Monthly and Yearly projections calculated and shown from next January </ion-note>\n\t\t\t  </ion-col>\n\t\t  </ion-row>\n\t  </ion-grid>\n\t  <!-- <ion-card>\n\t\t  <ion-card-header>\n\t\t\t  <ion-card-subtitle>Month Projections</ion-card-subtitle>\n\t\t\t  <ion-card-title>&#8377;{{expense_val?.MonthProjection}}</ion-card-title>\n\t\t\t  <ion-card-subtitle>Yearly Projections</ion-card-subtitle>\n\t\t\t  <ion-card-title>&#8377;{{expense_val?.YearlyProjection}}</ion-card-title>\n\t\t  </ion-card-header>\n\t  </ion-card> -->\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts ***!
  \*************************************************************************************/
/*! exports provided: CgExpenseFiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExpenseFiltersPage", function() { return CgExpenseFiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










let CgExpenseFiltersPage = class CgExpenseFiltersPage {
    constructor(toast, datepipe, modalController, fb, serv, router, statusBar, databaseSummary) {
        this.toast = toast;
        this.datepipe = datepipe;
        this.modalController = modalController;
        this.fb = fb;
        this.serv = serv;
        this.router = router;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.list_keys = [];
        this.checkarray = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.todaydate = new Date().toISOString();
        this.filter = this.fb.group({
            'from_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'end_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'event_name': ['']
        });
        this.user_id = localStorage.getItem("user_id");
        // this.serv.chartrepeat(this.user_id).subscribe(res=>{
        // this.listvalues =res;
        // this.list_keys = Object.keys(this.listvalues); 
        // }); 
    }
    changedate(from, end) {
        if (from != '' && end != '') {
            let type = 'expense';
            // this.serv.filtercheck(from,end,data).subscribe(res=>{
            // this.list_keys=res['events']
            // })
            this.databaseSummary.expenseDatefilter(this.user_id, from, end, type).then(res => {
                this.list_keys = res['events'];
            }).catch(err => { console.log(err); });
        }
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1');
        //this.tabBar.classList.remove("tab-selected");
        this.tabBar.style.display = 'none';
    }
    get f() { return this.filter.controls; }
    checkbox(event, val) {
        if (event.detail.checked) {
            this.checkarray.push(val);
        }
        else if (event.detail.checked == false) {
            const index = this.checkarray.indexOf(val);
            if (index !== -1) {
                this.checkarray.splice(index, 1);
            }
        }
    }
    cancel() {
        this.filter.reset();
        this.modalController.dismiss();
    }
    onSubmit(val) {
        this.submitted = true;
        if (this.filter.valid) {
            this.filter.patchValue({
                'event_name': this.checkarray,
            });
            //console.log(this.filter)
            this.modalController.dismiss(val.value);
        }
        else {
            this.presentToast('Please Enter Mandatory Fields');
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '4000', 'center').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    ionViewWillLeave() {
        // this.statusBar.backgroundColorByHexString('#483df6');
        // this.tabBar.style.display = 'flex';
        // this.tabBar.style.display = 'flex';
    }
};
CgExpenseFiltersPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] }
];
CgExpenseFiltersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cg-expense-filters-page',
        template: __webpack_require__(/*! raw-loader!./cg-expense-filters.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.html"),
        styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"]])
], CgExpenseFiltersPage);



/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: CgExpenseAnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExpenseAnalyticsPage", function() { return CgExpenseAnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cg-expense-filters/cg-expense-filters.page */ "./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












let CgExpenseAnalyticsPage = class CgExpenseAnalyticsPage {
    constructor(toast, modalController, service, datepipe, statusBar, databaseSummary) {
        this.toast = toast;
        this.modalController = modalController;
        this.service = service;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.chart_keys = [];
        this.loader = false;
        this.filterModal();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.date = new Date();
        // this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        // this.loader=true;
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1');
        //this.tabBar.classList.remove("tab-selected");
        this.tabBar.style.display = 'none';
        this.user_id = localStorage.getItem("user_id");
        // this.service.chartrepeat(this.user_id).subscribe(res=>{          
        //  this.chartres =res;
        //  console.log(this.chartres,'chart')
        //  this.chart_keys = Object.keys(this.chartres);
        //  setTimeout(() => {
        //   this.loader=false;
        //  },1500)
        //  setTimeout(() => {
        //   for(let i of this.chart_keys){
        //     this.charts(i,this.chartres[i]);
        //   }        
        //  }, 2000); 
        // });
    }
    datetoast() {
        this.presentToast('Use filter to get specific data');
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '4000', 'center').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    charts(name, value) {
        console.log(value);
        let xaxis_value = [];
        //console.log(xaxis_value);
        let yaxis_value = [];
        // console.log(yaxis_value);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("event_datetime")).subscribe(val => xaxis_value.push(this.datepipe.transform(val, 'MMM dd')));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("value")).subscribe(val => yaxis_value.push([val]));
        this.yaxis_total = [{
                name: name,
                data: yaxis_value,
                colorByPoint: true,
                color: '#ffd32c'
            }];
        highcharts__WEBPACK_IMPORTED_MODULE_5__["chart"](name, {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: "container",
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            title: {
                text: name
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b> </span><br>',
                pointFormat: '<span style="color:{point.color}">Total Spent</span>: <b>{point.y:.2f} Rs</b><br/>'
            },
            xAxis: {
                categories: xaxis_value
            },
            yAxis: {
                title: {
                    text: 'Rupees'
                }
            },
            series: this.yaxis_total,
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            lang: {
                noData: "No data found"
            },
            noData: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#303030'
                }
            }
        });
    }
    filterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_8__["CgExpenseFiltersPage"],
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data['data'] != undefined) {
                    this.loader = true;
                    data['event_type'] = 'expense';
                    // this.service.filterChart(data['data']).subscribe(res=>{         
                    //       this.chartres =res;
                    //       this.date=this.chartres.end_date;
                    //       this.firstDay=this.chartres.from_date;
                    //       this.chart_keys = Object.keys(this.chartres.expense); 
                    //       console.log(this.chart_keys)
                    //       setTimeout(() => {
                    //        this.loader=false;
                    //       },1500)
                    //       setTimeout(() => {
                    //        for(let i of this.chart_keys){         
                    //          this.charts(i,this.chartres.expense[i]);
                    //        }
                    //       }, 2000); 
                    // })
                    this.databaseSummary.ExpenseViewSummary(data['from_date'], data['end_date'], 'expense', data['event_name'], 'view_analytics').then((res) => {
                        this.chartres = res;
                        this.date = this.chartres.end_date;
                        this.firstDay = this.chartres.from_date;
                        this.chart_keys = Object.keys(this.chartres.expense);
                        console.log(this.chart_keys);
                        setTimeout(() => {
                            this.loader = false;
                        }, 1500);
                        setTimeout(() => {
                            for (let i of this.chart_keys) {
                                this.charts(i, this.chartres.expense[i]);
                            }
                        }, 2000);
                    });
                }
            });
            return yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.style.display = 'flex';
    }
};
CgExpenseAnalyticsPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
];
CgExpenseAnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cg-expense-view-analytics',
        template: __webpack_require__(/*! raw-loader!./cg-expense-view-analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.html"),
        styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
], CgExpenseAnalyticsPage);



/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: CgExpenseviewSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExpenseviewSummaryPage", function() { return CgExpenseviewSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










let CgExpenseviewSummaryPage = class CgExpenseviewSummaryPage {
    constructor(toast, modalCtrl, toastController, alertController, service, statusBar, database, databaseSummary) {
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.service = service;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.expen_key = [];
        this.status = -1;
        this.loader = true;
        this.getChartValue = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.user_id = localStorage.getItem("user_id");
        this.from_date1 = new Date();
        this.from_date1.setDate(this.from_date1.getDate() - 30);
        this.end_date1 = new Date();
        // this.service.view_expenses(this.user_id).subscribe(res =>{
        // this.view_all_expen = res;
        // this.from_date1= this.view_all_expen.from_date 
        // this.end_date1= this.view_all_expen.end_date
        // console.log(this.view_all_expen,'res')  
        // this.expen_key = Object.keys(this.view_all_expen.expense);
        // this.getChartValue=this.expen_key.map(res=>{
        //   console.log(res)
        //   let chartType=res.toString();       
        //   const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
        //   return total
        //   });
        //   this.loader=false;
        //  console.log(this.getChartValue)
        //  console.log(this.expen_key);
        // })
        this.databaseSummary.ExpenseViewSummary(this.from_date1, this.end_date1, 'expense', 'event_name', 'view_summary').then((res) => {
            this.view_all_expen = res;
            this.from_date1 = this.view_all_expen.from_date;
            this.end_date1 = this.view_all_expen.end_date;
            console.log(this.view_all_expen, 'res');
            this.expen_key = Object.keys(this.view_all_expen.expense);
            this.getChartValue = this.expen_key.map(res => {
                console.log(res);
                let chartType = res.toString();
                const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + Number(item.value), 0);
                return total;
            });
            this.loader = false;
            console.log(this.getChartValue);
            console.log(this.expen_key);
        })
            .catch(error => { console.log(error); });
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1');
        //this.tabBar.classList.remove("tab-selected");
        this.tabBar.style.display = 'none';
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '4000', 'center').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    toggle(i) {
        this.status = i === this.status ? -1 : i;
        console.log(this.status);
    }
    openCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                canBackwardsSelected: true,
                pickMode: 'range',
                color: 'danger',
                title: ''
            };
            const myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModal"],
                componentProps: { options }
            });
            myCalendar.present();
            const event = yield myCalendar.onDidDismiss();
            const date = event.data;
            const from_date = date.from.dateObj;
            const end_date = date.to.dateObj;
            this.from_date1 = from_date;
            this.end_date1 = end_date;
            // this.service.filterAmount(from_date,end_date,this.user_id).subscribe(res=>{
            //   console.log(res)
            //   this.view_all_expen=res
            //   this.expen_key = Object.keys(this.view_all_expen.expense);
            //   this.getChartValue=this.expen_key.map(res=>{
            //   console.log(res)
            //   let chartType=res.toString();       
            //   const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
            //   return total  
            //   });
            //   console.log(this.getChartValue)
            //   console.log(this.expen_key);
            // })
            this.databaseSummary.ExpenseViewSummary(this.from_date1, this.end_date1, 'expense', 'event_name', 'view_summary').then((res) => {
                console.log(res);
                this.view_all_expen = res;
                this.expen_key = Object.keys(this.view_all_expen.expense);
                this.getChartValue = this.expen_key.map(res => {
                    console.log(res);
                    let chartType = res.toString();
                    const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);
                    return total;
                });
                console.log(this.getChartValue);
                console.log(this.expen_key);
            });
        });
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.style.display = 'flex';
    }
};
CgExpenseviewSummaryPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"] }
];
CgExpenseviewSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cg-expense-view-summary',
        template: __webpack_require__(/*! raw-loader!./cg-expense-view-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.html"),
        styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"]])
], CgExpenseviewSummaryPage);



/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cgexpenses.module.ts":
/*!************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cgexpenses.module.ts ***!
  \************************************************************/
/*! exports provided: CgexpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgexpensesPageModule", function() { return CgexpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cgexpenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgexpenses.page */ "./src/app/care-giver/cgexpenses/cgexpenses.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _cg_expense_view_analytics_cg_expense_view_analytics_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cg-expense-view-analytics/cg-expense-view-analytics.page */ "./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.ts");
/* harmony import */ var _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cg-expense-filters/cg-expense-filters.page */ "./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts");
/* harmony import */ var _cg_expense_view_summary_cg_expense_view_summary_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cg-expense-view-summary/cg-expense-view-summary.page */ "./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
















const routes = [
    {
        path: '',
        component: _cgexpenses_page__WEBPACK_IMPORTED_MODULE_6__["CgexpensesPage"]
    }, {
        path: 'cg-expense-analytics',
        component: _cg_expense_view_analytics_cg_expense_view_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CgExpenseAnalyticsPage"]
    },
    {
        path: 'cg-expense-view-summary',
        component: _cg_expense_view_summary_cg_expense_view_summary_page__WEBPACK_IMPORTED_MODULE_10__["CgExpenseviewSummaryPage"]
    },
    {
        path: 'cg-expense-filter',
        component: _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_9__["CgExpenseFiltersPage"]
    }
];
let CgexpensesPageModule = class CgexpensesPageModule {
};
CgexpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_cgexpenses_page__WEBPACK_IMPORTED_MODULE_6__["CgexpensesPage"], _cg_expense_view_analytics_cg_expense_view_analytics_page__WEBPACK_IMPORTED_MODULE_8__["CgExpenseAnalyticsPage"], _cg_expense_view_summary_cg_expense_view_summary_page__WEBPACK_IMPORTED_MODULE_10__["CgExpenseviewSummaryPage"], _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_9__["CgExpenseFiltersPage"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]]
    })
], CgexpensesPageModule);



/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss":
/*!************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cgexpenses.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ffd32c;\n  --color: #ffffff; }\n  .btn:not(:last-child) {\n  margin-right: 16px; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-card {\n  height: 100%;\n  margin: 0;\n  border-radius: 5px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-card ion-card-content {\n    width: 100%; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-item-group {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group > .expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 75px;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .expand {\n  height: auto; }\n  .collapse {\n  height: 0;\n  padding: 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-text {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci9jZ2V4cGVuc2VzL2NnZXhwZW5zZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEQTtFQXhCSSxpQkEyQnNCO0VBMUJ0QixnQkEwQjJCO0VBeEI3QixpQkF3QmdDO0VBdkJoQywwQkF1QjRDO0VBdEI1QyxnQkFzQmtEO0VBckJsRCxvQkFxQjJEO0VBcEIzRCxjQW9Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQTFDRSxvQkFnRG9CO0VBaERwQixhQWdEb0I7RUEvQ3BCLGlCQStDNEI7RUE5QzVCLHlCQThDb0M7VUE5Q3BDLG1CQThDb0M7RUE3Q3BDLHVCQTZDMkM7VUE3QzNDLHNCQTZDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUEzREksZUE2RW9CO0lBNUVwQixnQkE0RXlCO0lBMUUzQixpQkEwRThCO0lBekU5QiwwQkF5RTBDO0lBeEUxQyxrQkF3RWtEO0lBdkVsRCxvQkF1RTJEO0lBdEUzRCxjQXNFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNCdkI7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O01BZ0RNLGNBQWMsRUFBQTtFQzFzQnBCO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBSVo7RUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxzQkFBb0IsRUFBQTtFQU54QjtJRHNCSSxpQkNic0I7SURjdEIsZ0JDZDJCO0lEZ0I3QixpQkNoQmdDO0lEaUJoQywwQkNqQjRDO0lEa0I1QyxtQkNsQnFEO0lEbUJyRCxvQkNuQjhEO0lEb0I5RCxjQWxDa0I7SUNlZCxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFLeEI7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQix5Q0FBeUM7RURtQnpDLG9CQ2xCa0I7RURrQmxCLGFDbEJrQjtFRG1CbEIsaUJDbkIwQjtFRG9CMUIseUJDcEJrQztVRG9CbEMsbUJDcEJrQztFRHFCbEMsd0JDckIwQztVRHFCMUMsdUJDckIwQyxFQUFBO0VBTDVDO0lBUUksV0FBVyxFQUFBO0VBSWY7RUROSSxpQkNRb0I7RURQcEIsZ0JDT3lCO0VETDNCLGlCQ0s4QjtFREo5QiwwQkNJMEM7RURIMUMsZ0JDR2dEO0VERmhELG9CQ0V5RDtFRER6RCxjQWxDa0IsRUFBQTtFQ2lDcEI7SUFLTSxXQUFXLEVBQUE7RUFMakI7RUROSSxrQkNnQnFCO0VEZnJCLGdCQ2UwQjtFRGI1QixpQkNhK0I7RURaL0IsMEJDWTJDO0VEWDNDLGdCQ1dpRDtFRFZqRCxvQkNVMEQ7RURUMUQsV0NTZ0UsRUFBQTtFQVZsRTtFQWlCVSxjRDlDSyxFQUFBO0VDNkJmO0VBdUJVLGNEN0NPLEVBQUE7RUNzQmpCO0VBNkJVLGNEdkRXLEVBQUE7RUMwQnJCO0VEV0Usb0JDdUIwQjtFRHZCMUIsYUN1QjBCO0VEdEIxQixlQ3NCZ0M7RURyQmhDLHlCQ3FCd0M7VURyQnhDLG1CQ3FCd0M7RURwQnhDLHdCQ29CZ0Q7VURwQmhELHVCQ29CZ0QsRUFBQTtFQWxDbEQ7RUF5Q0ksNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQTNDdEI7SUE4Q00sY0QvRWM7SUNnRmQsYUFBYSxFQUFBO0VBL0NuQjtJQW1ETSxjRDFFVTtJQzJFVixhQUFhLEVBQUE7RUFLbkI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQyxFQUFBO0VBSDdDO0lBT00sa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTLEVBQUE7RUFUZjtJQWNJLHlCQUFhO0lBQ2IsMkJBQWU7SUFDZixxQkFBZ0I7SUFDaEIsbUJBQWM7SUFDZCxzQkFBb0IsRUFBQTtFQWxCeEI7TUQvREksZUNvRm9CO01EbkZwQixnQkNtRnlCO01EakYzQixpQkNpRjhCO01EaEY5QiwwQkNnRjBDO01EL0UxQyxpQkMrRWlEO01EOUVqRCxvQkM4RTBEO01EN0UxRCxjQzZFbUU7TUFDL0QsY0FBYyxFQUFBO0VBdEJwQjtNRC9ESSxpQkN5RnNCO01EeEZ0QixnQkN3RjJCO01EdEY3QixpQkNzRmdDO01EckZoQywwQkNxRjRDO01EcEY1QyxtQkNvRnFEO01EbkZyRCxvQkNtRjhEO01EbEY5RCxjQTlCYTtNQ2lIVCxxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLG1CQUFtQixFQUFBO0VBN0J6QjtNRC9ESSxrQkNnR3VCO01EL0Z2QixnQkMrRjRCO01EN0Y5QixpQkM2RmlDO01ENUZqQywwQkM0RjZDO01EM0Y3QyxtQkMyRnNEO01EMUZ0RCxvQkMwRitEO01EekYvRCxjQWxDa0I7TUM0SGQscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQXBDekI7TUQvREksaUJDc0dzQjtNRHJHdEIsZ0JDcUcyQjtNRG5HN0IsaUJDbUdnQztNRGxHaEMsMEJDa0c0QztNRGpHNUMsbUJDaUdxRDtNRGhHckQsb0JDZ0c4RDtNRC9GOUQsY0FsQ2tCO01Da0lkLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIscUJBQXFCLEVBQUE7RUExQzNCO01EL0RJLGVDNkdvQjtNRDVHcEIsZ0JDNEd5QjtNRDFHM0IsaUJDMEc4QjtNRHpHOUIscUJDeUdxQztNRHhHckMsbUJDd0c4QztNRHZHOUMsb0JDdUd1RDtNRHRHdkQsY0NzR2dFO01BQzVELHFCQUFxQjtNQUNyQixxQkFBcUIsRUFBQTtFQWhEM0I7TUFvRE0sa0JBQWtCO01BQ2xCLG1CRDNJUztNQzRJVCxxQkFBcUI7TURySHZCLGVDc0hvQjtNRHJIcEIsZ0JDcUh5QjtNRG5IM0IsaUJDbUg4QjtNRGxIOUIscUJDa0hxQztNRGpIckMsa0JDaUg2QztNRGhIN0Msb0JDZ0hzRDtNRC9HdEQsY0MrRytELEVBQUE7RUF2RGpFO1FBMERRLFdBQVc7UUFDWCw0QkFBNEI7UUFDNUIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUyxFQUFBO0VBL0RqQjtJRC9ESSxrQkN5SXFCO0lEeElyQixnQkN3STBCO0lEdEk1QixpQkNzSStCO0lEckkvQiwwQkNxSTJDO0lEcEkzQyxtQkNvSW9EO0lEbklwRCxvQkNtSTZEO0lEbEk3RCxXQ2tJbUU7SUFDakUsZ0JBQVE7SUFDUiwwQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYSxFQUFBO0VBaEZqQjtNQWtGTSxvQkFBb0IsRUFBQTtFQUsxQjtFQUNFLFlBQVksRUFBQTtFQUVkO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTtFQUdaO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLGtDQUEwQjtFQUMxQixnQ0FBd0I7RUFDeEIsa0NBQTBCO0VBQzFCLGtCQUFnQjtFRHJLaEIsZUNzS2tCO0VEcktsQixnQkNxS3VCO0VEbkt6QixpQkNtSzRCO0VEbEs1QixvQkNrS2tDO0VEaktsQyxnQkNpS3dDO0VEaEt4QyxvQkNnS2lEO0VEL0pqRCxjQWxDa0I7RUNrTWhCLG1CQUFtQixFQUFBO0VBVHZCO0lBWU0sZ0JBQVEsRUFBQTtFQVpkO0lBZ0JNLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQWE7SUFDYixvQkFBZ0I7SUFDaEIsa0JBQWE7SUFDYix1QkFBZTtJQUNmLFNBQVMsRUFBQTtFQUtmO0VENUxJLGtCQzZMbUI7RUQ1TG5CLGdCQzRMd0I7RUQxTDFCLGlCQzBMNkI7RUR6TDdCLG9CQ3lMbUM7RUR4TG5DLGdCQ3dMeUM7RUR2THpDLG9CQ3VMa0Q7RUR0TGxELGNDc0wyRCxFQUFBO0VBRzdEO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SURoTUksaUJDb01vQjtJRG5NcEIsZ0JDbU15QjtJRGpNM0IsaUJDaU04QjtJRGhNOUIsb0JDZ01vQztJRC9McEMsZ0JDK0wwQztJRDlMMUMsb0JDOExtRDtJRDdMbkQsY0FsQ2tCO0lDZ09oQixTQUFTLEVBQUE7RUFMYjtJQVNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTyxFQUFBO0VBWFg7SUFlSSxrQkFBa0I7SUFDbEIsNkJBQTZCLEVBQUE7RUFoQmpDO01BbUJNLGlCQUFpQixFQUFBO0VBbkJ2QjtNQXVCTSxnQkFBZ0IsRUFBQTtFQUt0QjtFRDVOSSxpQkM4Tm9CO0VEN05wQixnQkM2TnlCO0VEM04zQixpQkMyTjhCO0VEMU45QixvQkMwTm9DO0VEek5wQyxnQkN5TjBDO0VEeE4xQyxvQkN3Tm1EO0VEdk5uRCxjQWxDa0I7RUMwUGhCLGVBQWU7RUFDZixrQkFBZ0I7RUFDaEIsa0JBQWdCO0VBQ2hCLGtCQUFnQixFQUFBO0VBTnBCO0lBUU0saUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZS1naXZlci9jZ2V4cGVuc2VzL2NnZXhwZW5zZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG4kbXktZ3JleS1ibHVlIDogI2VhNGU0ZTtcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgLy8gaW9uLWl0ZW17XG4gIC8vICAgaW9uLWxhYmVse1xuICAvLyAgICAgLS1jb2xvcjogIzdiN2I3YjtcbiAgLy8gICB9XG4gIC8vIH1cbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMxYzFjMWM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBkYzY4O1xuICAgICAgcGFkZGluZzogMXB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZkMzJjO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5idG46bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgaDUge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIG5vbmUpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLnByb2plY3Rpb25zKSB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgJi5sYXN0IHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGFsZXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGV4cGVuc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnllYXIge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkYXBwb2ludG1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuYW5hbHl0aWNzIHtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgY2VudGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucHJvamVjdGlvbnMge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUzZTU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMXB4O1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG4gICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6ICRyZXBvcnQ7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbS1ncm91cCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICYgPiAuZXhwZW5zZV9jYXJke1xyXG4gICAgc3Zne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCBjYXBpdGFsaXplLCByaWdodCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGFsZXJ0KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGFsZXJ0O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAjZmZmZmZmKTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNwYW57XHJcbiAgICAgIC8vICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAvLyAgICAgICAgIEBpbmNsdWRlIGZvbnQoMTZweCwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgI2ZmZmZmZik7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRyYW5zX2J0biB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uY29sbGFwc2Uge1xyXG4gIGhlaWdodDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgbWluLWhlaWdodDogNDJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3ByZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXJpcHBsZS1jb2xvcjogI2ZhNWU2MTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIEBpbmNsdWRlIGZvbnQoMC43NXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxufVxyXG5cclxuLmRhdGVfZmlsdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbl90b29sc3tcclxuICAudHJhbnNfYnRue1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgc3Zne1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cgexpenses.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cgexpenses.page.ts ***!
  \**********************************************************/
/*! exports provided: CgexpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgexpensesPage", function() { return CgexpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");







let CgexpensesPage = class CgexpensesPage {
    constructor(datepipe, statusBar, settingService, databaseSummary) {
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.settingService = settingService;
        this.databaseSummary = databaseSummary;
        this.currentMonthCat = [];
        this.values = [];
        this.data = [];
        // currentMonthCatlm:any=[];
        this.datalm = [];
        this.lastMonthColor = "#fff";
        this.currentMonthColor = "#ffd32c";
        this.yearColor = "#fff";
        this.drilldownData = [];
        this.environmentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ImageUrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.user_id = localStorage.getItem("user_id");
        this.currentMonthCat = [];
        this.values = [];
        this.data = [];
        console.log(this.values, 'length');
        var hashdata;
        this.lastMonthColor = "#fff";
        this.currentMonthColor = "#ffd32c";
        this.yearColor = "#fff";
        // this.settingService.main_chart(this.user_id).subscribe(res => {
        //   this.main_chart = res;
        //   for (let i in this.main_chart.Currentmonth) {
        //     this.currentMonthCat.push(i);
        //     let key:any = Object.values(this.main_chart.Currentmonth[i])
        //     this.data.push({
        //       name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
        //       y: key[0].value,
        //       drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
        //     })
        //     this.drilldownData.push({
        //       name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
        //       id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
        //       data: key[0].data
        //     })
        //   }
        //   console.log(this.drilldownData)
        //   let hashdata={name:'Current Month',colorByPoint: true,data:this.data, color:'#ffd32c'};
        //   this.values.push(hashdata)
        //   this.mainChart();
        // })
        this.databaseSummary.expense_cals_chart().then(res => {
            this.main_chart = res;
            console.log(this.Last_Mon_len);
            for (let i in this.main_chart.Currentmonth) {
                this.currentMonthCat.push(i);
                let key = Object.values(this.main_chart.Currentmonth[i]);
                console.log(key[0]);
                this.data.push({
                    name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    y: key[0].value,
                    drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
                });
                this.drilldownData.push({
                    name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    data: key[0].data
                });
            }
            console.log(this.drilldownData);
            let hashdata = { name: 'Current Month', colorByPoint: true, data: this.data, color: '#ffd32c' };
            this.values.push(hashdata);
            this.mainChart();
        });
        this.databaseSummary.expenseCalculation().then(res => {
            this.expense_val = res;
        });
        // this.settingService.view_expenses_cal(this.user_id).subscribe(res =>{
        //   this.expense_val = res;
        //   console.log(Math.round(this.expense_val.MonthProjection));
        // });
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
    }
    mainChart() {
        console.log(this.values);
        var myChart = Highcharts.chart('expense_chart', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                panning: true,
                panKey: 'shift'
            },
            title: {
                text: null
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                // crosshairs: true,
                // shared: true,
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b> </span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} Rs</b><br/>'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Rupees'
                }
            },
            series: this.values,
            drilldown: {
                drillUpButton: {
                    position: {
                        verticalAlign: 'top',
                        align: 'right',
                        x: 0,
                        y: -10,
                    }
                },
                series: this.drilldownData
            },
            lang: {
                noData: "No data found",
                drillUpText: '<< Back',
            },
            noData: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#303030'
                }
            }
        });
    }
    cardClick(val) {
        var hashdata = {};
        this.data = [];
        this.currentMonthCat = [];
        this.values = [];
        if (val == 'LM') {
            this.lastMonthColor = "#0e9bff";
            this.currentMonthColor = "#fff";
            this.yearColor = "#fff";
            // for (var i = 0; i < this.main_chart.Lastmonth.length; i++) {
            //   this.data.push(Number(this.main_chart.Lastmonth[i].value))
            //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Lastmonth[i].event_datetime, 'MMM dd'));
            // }
            for (let i in this.main_chart.Lastmonth) {
                this.data.push(Object.values(this.main_chart.Lastmonth[i]));
                this.currentMonthCat.push(i);
            }
            hashdata = { name: 'Last Month', colorByPoint: true, data: this.data, color: '#0e9bff' };
            this.values.push(hashdata);
            this.mainChart();
        }
        else if (val == 'CM') {
            this.currentMonthColor = "#ffd32c";
            this.lastMonthColor = "#fff";
            this.yearColor = "#fff";
            // for (var i = 0; i < this.main_chart.Currentmonth.length; i++) {
            //   this.data.push(Number(this.main_chart.Currentmonth[i].value))
            //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Currentmonth[i].event_datetime, 'MMM dd'));
            // } 
            for (let i in this.main_chart.Currentmonth) {
                //this.data.push(Object.values(this.main_chart.Currentmonth[i]))
                this.currentMonthCat.push(i);
                let key = Object.values(this.main_chart.Currentmonth[i]);
                console.log(key[0]);
                this.data.push({
                    name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    y: key[0].value,
                    drilldown: this.datepipe.transform(key[0].event_datetime, 'MMM dd')
                });
                this.drilldownData.push({
                    id: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    name: this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    data: key[0].data
                });
            }
            // let YearData = this.main_chart.Totalyear[0];
            // let getyearData= [{
            //   name: 'Total Spent',
            //   y: YearData['value']
            // }]
            // let yearData = {name:'Year',colorByPoint: true,data:getyearData, color:'#ffd32c'}
            // this.values.push(yearData)
            hashdata = { name: 'Current Month', colorByPoint: true, data: this.data, color: '#ffd32c' };
            this.values.push(hashdata);
            this.mainChart();
        }
        else if (val == 'Year') {
            this.yearColor = "#c7a254";
            this.lastMonthColor = "#fff";
            this.currentMonthColor = "#fff";
            // for (var i = 0; i < this.main_chart.Year.length; i++) {
            //   this.data.push(Number(this.main_chart.Year[i].value))
            //   this.currentMonthCat.push(this.datepipe.transform(this.main_chart.Year[i].event_datetime, 'MMM dd'));
            // }
            for (let i in this.main_chart.Year) {
                console.log(Object.keys(this.main_chart.Year[i]));
                //this.data.push(Object.values(this.main_chart.Year[i]))
                this.currentMonthCat.push(i);
                let key = Object.values(this.main_chart.Year[i]);
                console.log(key[0]);
                this.data.push({
                    name: key[0].event_datetime,
                    y: key[0].value,
                    drilldown: key[0].event_datetime
                });
                this.drilldownData.push({
                    id: key[0].event_datetime,
                    name: key[0].event_datetime,
                    data: key[0].data
                });
            }
            hashdata = { name: 'Year', colorByPoint: true, data: this.data, color: '#c7a254' };
            this.values.push(hashdata);
            this.mainChart();
        }
        // // console.log(this.values) 
        // this.ngOnInit();  
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    }
};
CgexpensesPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__["DataBaseSummaryProvider"] }
];
CgexpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cgexpenses',
        template: __webpack_require__(/*! raw-loader!./cgexpenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cgexpenses.page.html"),
        styles: [__webpack_require__(/*! ./cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_6__["DataBaseSummaryProvider"]])
], CgexpensesPage);



/***/ })

}]);
//# sourceMappingURL=cgexpenses-cgexpenses-module-es2015.js.map