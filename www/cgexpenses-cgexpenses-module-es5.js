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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










var CgExpenseFiltersPage = /** @class */ (function () {
    function CgExpenseFiltersPage(toast, datepipe, modalController, fb, serv, router, statusBar, databaseSummary) {
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
    CgExpenseFiltersPage.prototype.ngOnInit = function () {
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
    };
    CgExpenseFiltersPage.prototype.changedate = function (from, end) {
        var _this = this;
        if (from != '' && end != '') {
            var type = 'expense';
            // this.serv.filtercheck(from,end,data).subscribe(res=>{
            // this.list_keys=res['events']
            // })
            this.databaseSummary.expenseDatefilter(this.user_id, from, end, type).then(function (res) {
                _this.list_keys = res['events'];
            }).catch(function (err) { console.log(err); });
        }
    };
    CgExpenseFiltersPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1');
        //this.tabBar.classList.remove("tab-selected");
        this.tabBar.style.display = 'none';
    };
    Object.defineProperty(CgExpenseFiltersPage.prototype, "f", {
        get: function () { return this.filter.controls; },
        enumerable: true,
        configurable: true
    });
    CgExpenseFiltersPage.prototype.checkbox = function (event, val) {
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
    CgExpenseFiltersPage.prototype.cancel = function () {
        this.filter.reset();
        this.modalController.dismiss();
    };
    CgExpenseFiltersPage.prototype.onSubmit = function (val) {
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
    };
    CgExpenseFiltersPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    CgExpenseFiltersPage.prototype.ionViewWillLeave = function () {
        // this.statusBar.backgroundColorByHexString('#483df6');
        // this.tabBar.style.display = 'flex';
        // this.tabBar.style.display = 'flex';
    };
    CgExpenseFiltersPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] }
    ]; };
    CgExpenseFiltersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cg-expense-filters-page',
            template: __webpack_require__(/*! raw-loader!./cg-expense-filters.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.html"),
            styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_3__["careGiverService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"]])
    ], CgExpenseFiltersPage);
    return CgExpenseFiltersPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cg-expense-filters/cg-expense-filters.page */ "./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












var CgExpenseAnalyticsPage = /** @class */ (function () {
    function CgExpenseAnalyticsPage(toast, modalController, service, datepipe, statusBar, databaseSummary) {
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
    CgExpenseAnalyticsPage.prototype.ngOnInit = function () {
    };
    CgExpenseAnalyticsPage.prototype.ionViewWillEnter = function () {
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
    };
    CgExpenseAnalyticsPage.prototype.datetoast = function () {
        this.presentToast('Use filter to get specific data');
    };
    CgExpenseAnalyticsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    CgExpenseAnalyticsPage.prototype.charts = function (name, value) {
        var _this = this;
        console.log(value);
        var xaxis_value = [];
        //console.log(xaxis_value);
        var yaxis_value = [];
        // console.log(yaxis_value);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("event_datetime")).subscribe(function (val) { return xaxis_value.push(_this.datepipe.transform(val, 'MMM dd')); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("value")).subscribe(function (val) { return yaxis_value.push([val]); });
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
    };
    CgExpenseAnalyticsPage.prototype.filterModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_8__["CgExpenseFiltersPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != undefined) {
                                _this.loader = true;
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
                                _this.databaseSummary.ExpenseViewSummary(data['from_date'], data['end_date'], 'expense', data['event_name'], 'view_analytics').then(function (res) {
                                    _this.chartres = res;
                                    _this.date = _this.chartres.end_date;
                                    _this.firstDay = _this.chartres.from_date;
                                    _this.chart_keys = Object.keys(_this.chartres.expense);
                                    console.log(_this.chart_keys);
                                    setTimeout(function () {
                                        _this.loader = false;
                                    }, 1500);
                                    setTimeout(function () {
                                        for (var _i = 0, _a = _this.chart_keys; _i < _a.length; _i++) {
                                            var i = _a[_i];
                                            _this.charts(i, _this.chartres.expense[i]);
                                        }
                                    }, 2000);
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CgExpenseAnalyticsPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.style.display = 'flex';
    };
    CgExpenseAnalyticsPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
    ]; };
    CgExpenseAnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cg-expense-view-analytics',
            template: __webpack_require__(/*! raw-loader!./cg-expense-view-analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.html"),
            styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
    ], CgExpenseAnalyticsPage);
    return CgExpenseAnalyticsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










var CgExpenseviewSummaryPage = /** @class */ (function () {
    function CgExpenseviewSummaryPage(toast, modalCtrl, toastController, alertController, service, statusBar, database, databaseSummary) {
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
    CgExpenseviewSummaryPage.prototype.ngOnInit = function () {
    };
    CgExpenseviewSummaryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
        this.databaseSummary.ExpenseViewSummary(this.from_date1, this.end_date1, 'expense', 'event_name', 'view_summary').then(function (res) {
            _this.view_all_expen = res;
            _this.from_date1 = _this.view_all_expen.from_date;
            _this.end_date1 = _this.view_all_expen.end_date;
            console.log(_this.view_all_expen, 'res');
            _this.expen_key = Object.keys(_this.view_all_expen.expense);
            _this.getChartValue = _this.expen_key.map(function (res) {
                console.log(res);
                var chartType = res.toString();
                var total = _this.view_all_expen.expense[chartType].reduce(function (sum, item) { return sum + item.value; }, 0);
                return total;
            });
            _this.loader = false;
            console.log(_this.getChartValue);
            console.log(_this.expen_key);
        })
            .catch(function (error) { console.log(error); });
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar1');
        //this.tabBar.classList.remove("tab-selected");
        this.tabBar.style.display = 'none';
    };
    CgExpenseviewSummaryPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    CgExpenseviewSummaryPage.prototype.toggle = function (i) {
        this.status = i === this.status ? -1 : i;
        console.log(this.status);
    };
    CgExpenseviewSummaryPage.prototype.openCalendar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, myCalendar, event, date, from_date, end_date;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            canBackwardsSelected: true,
                            pickMode: 'range',
                            color: 'danger',
                            title: ''
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModal"],
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
                        this.databaseSummary.ExpenseViewSummary(this.from_date1, this.end_date1, 'expense', 'event_name', 'view_summary').then(function (res) {
                            console.log(res);
                            _this.view_all_expen = res;
                            _this.expen_key = Object.keys(_this.view_all_expen.expense);
                            _this.getChartValue = _this.expen_key.map(function (res) {
                                console.log(res);
                                var chartType = res.toString();
                                var total = _this.view_all_expen.expense[chartType].reduce(function (sum, item) { return sum + item.value; }, 0);
                                return total;
                            });
                            console.log(_this.getChartValue);
                            console.log(_this.expen_key);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CgExpenseviewSummaryPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.style.display = 'flex';
    };
    CgExpenseviewSummaryPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"] }
    ]; };
    CgExpenseviewSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cg-expense-view-summary',
            template: __webpack_require__(/*! raw-loader!./cg-expense-view-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.html"),
            styles: [__webpack_require__(/*! ../cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"]])
    ], CgExpenseviewSummaryPage);
    return CgExpenseviewSummaryPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cgexpenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgexpenses.page */ "./src/app/care-giver/cgexpenses/cgexpenses.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _cg_expense_view_analytics_cg_expense_view_analytics_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cg-expense-view-analytics/cg-expense-view-analytics.page */ "./src/app/care-giver/cgexpenses/cg-expense-view-analytics/cg-expense-view-analytics.page.ts");
/* harmony import */ var _cg_expense_filters_cg_expense_filters_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cg-expense-filters/cg-expense-filters.page */ "./src/app/care-giver/cgexpenses/cg-expense-filters/cg-expense-filters.page.ts");
/* harmony import */ var _cg_expense_view_summary_cg_expense_view_summary_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cg-expense-view-summary/cg-expense-view-summary.page */ "./src/app/care-giver/cgexpenses/cg-expense-view-summary/cg-expense-view-summary.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
















var routes = [
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
var CgexpensesPageModule = /** @class */ (function () {
    function CgexpensesPageModule() {
    }
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
    return CgexpensesPageModule;
}());



/***/ }),

/***/ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss":
/*!************************************************************!*\
  !*** ./src/app/care-giver/cgexpenses/cgexpenses.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ffd32c;\n  --color: #ffffff; }\n  .btn:not(:last-child) {\n  margin-right: 16px; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-card {\n  height: 100%;\n  margin: 0;\n  border-radius: 5px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-card ion-card-content {\n    width: 100%; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-item-group {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group > .expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 75px;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .expand {\n  height: auto; }\n  .collapse {\n  height: 0;\n  padding: 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-text {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci9jZ2V4cGVuc2VzL2NnZXhwZW5zZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQTtFQXZCSSxpQkEwQnNCO0VBekJ0QixnQkF5QjJCO0VBdkI3QixpQkF1QmdDO0VBdEJoQywwQkFzQjRDO0VBckI1QyxnQkFxQmtEO0VBcEJsRCxvQkFvQjJEO0VBbkIzRCxjQW1Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQXpDRSxvQkErQ29CO0VBL0NwQixhQStDb0I7RUE5Q3BCLGlCQThDNEI7RUE3QzVCLHlCQTZDb0M7VUE3Q3BDLG1CQTZDb0M7RUE1Q3BDLHVCQTRDMkM7VUE1QzNDLHNCQTRDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUExREksZUE0RW9CO0lBM0VwQixnQkEyRXlCO0lBekUzQixpQkF5RThCO0lBeEU5QiwwQkF3RTBDO0lBdkUxQyxrQkF1RWtEO0lBdEVsRCxvQkFzRTJEO0lBckUzRCxjQXFFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNCdkI7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RUFDaEIsbUJBQWM7RUFDZCxzQkFBb0IsRUFBQTtFQU54QjtJRG9CSSxpQkNYc0I7SURZdEIsZ0JDWjJCO0lEYzdCLGlCQ2RnQztJRGVoQywwQkNmNEM7SURnQjVDLG1CQ2hCcUQ7SURpQnJELG9CQ2pCOEQ7SURrQjlELGNBaENrQjtJQ2VkLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQUt4QjtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlDQUF5QztFRGlCekMsb0JDaEJrQjtFRGdCbEIsYUNoQmtCO0VEaUJsQixpQkNqQjBCO0VEa0IxQix5QkNsQmtDO1VEa0JsQyxtQkNsQmtDO0VEbUJsQyx3QkNuQjBDO1VEbUIxQyx1QkNuQjBDLEVBQUE7RUFMNUM7SUFRSSxXQUFXLEVBQUE7RUFJZjtFRFJJLGlCQ1VvQjtFRFRwQixnQkNTeUI7RURQM0IsaUJDTzhCO0VETjlCLDBCQ00wQztFREwxQyxnQkNLZ0Q7RURKaEQsb0JDSXlEO0VESHpELGNBaENrQixFQUFBO0VDaUNwQjtJQUtNLFdBQVcsRUFBQTtFQUxqQjtFRFJJLGtCQ2tCcUI7RURqQnJCLGdCQ2lCMEI7RURmNUIsaUJDZStCO0VEZC9CLDBCQ2MyQztFRGIzQyxnQkNhaUQ7RURaakQsb0JDWTBEO0VEWDFELFdDV2dFLEVBQUE7RUFWbEU7RUFpQlUsY0Q5Q0ssRUFBQTtFQzZCZjtFQXVCVSxjRDdDTyxFQUFBO0VDc0JqQjtFQTZCVSxjRHZEVyxFQUFBO0VDMEJyQjtFRFNFLG9CQ3lCMEI7RUR6QjFCLGFDeUIwQjtFRHhCMUIsZUN3QmdDO0VEdkJoQyx5QkN1QndDO1VEdkJ4QyxtQkN1QndDO0VEdEJ4Qyx3QkNzQmdEO1VEdEJoRCx1QkNzQmdELEVBQUE7RUFsQ2xEO0VBeUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUEzQ3RCO0lBOENNLGNEL0VjO0lDZ0ZkLGFBQWEsRUFBQTtFQS9DbkI7SUFtRE0sY0QxRVU7SUMyRVYsYUFBYSxFQUFBO0VBS25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQ0FBMkMsRUFBQTtFQUg3QztJQU9NLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUyxFQUFBO0VBVGY7SUFjSSx5QkFBYTtJQUNiLDJCQUFlO0lBQ2YscUJBQWdCO0lBQ2hCLG1CQUFjO0lBQ2Qsc0JBQW9CLEVBQUE7RUFsQnhCO01EakVJLGVDc0ZvQjtNRHJGcEIsZ0JDcUZ5QjtNRG5GM0IsaUJDbUY4QjtNRGxGOUIsMEJDa0YwQztNRGpGMUMsaUJDaUZpRDtNRGhGakQsb0JDZ0YwRDtNRC9FMUQsY0MrRW1FO01BQy9ELGNBQWMsRUFBQTtFQXRCcEI7TURqRUksaUJDMkZzQjtNRDFGdEIsZ0JDMEYyQjtNRHhGN0IsaUJDd0ZnQztNRHZGaEMsMEJDdUY0QztNRHRGNUMsbUJDc0ZxRDtNRHJGckQsb0JDcUY4RDtNRHBGOUQsY0E1QmE7TUNpSFQscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQTdCekI7TURqRUksa0JDa0d1QjtNRGpHdkIsZ0JDaUc0QjtNRC9GOUIsaUJDK0ZpQztNRDlGakMsMEJDOEY2QztNRDdGN0MsbUJDNkZzRDtNRDVGdEQsb0JDNEYrRDtNRDNGL0QsY0FoQ2tCO01DNEhkLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUFwQ3pCO01EakVJLGlCQ3dHc0I7TUR2R3RCLGdCQ3VHMkI7TURyRzdCLGlCQ3FHZ0M7TURwR2hDLDBCQ29HNEM7TURuRzVDLG1CQ21HcUQ7TURsR3JELG9CQ2tHOEQ7TURqRzlELGNBaENrQjtNQ2tJZCxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLHFCQUFxQixFQUFBO0VBMUMzQjtNRGpFSSxlQytHb0I7TUQ5R3BCLGdCQzhHeUI7TUQ1RzNCLGlCQzRHOEI7TUQzRzlCLHFCQzJHcUM7TUQxR3JDLG1CQzBHOEM7TUR6RzlDLG9CQ3lHdUQ7TUR4R3ZELGNDd0dnRTtNQUM1RCxxQkFBcUI7TUFDckIscUJBQXFCLEVBQUE7RUFoRDNCO01Bb0RNLGtCQUFrQjtNQUNsQixtQkQzSVM7TUM0SVQscUJBQXFCO01Edkh2QixlQ3dIb0I7TUR2SHBCLGdCQ3VIeUI7TURySDNCLGlCQ3FIOEI7TURwSDlCLHFCQ29IcUM7TURuSHJDLGtCQ21INkM7TURsSDdDLG9CQ2tIc0Q7TURqSHRELGNDaUgrRCxFQUFBO0VBdkRqRTtRQTBEUSxXQUFXO1FBQ1gsNEJBQTRCO1FBQzVCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVMsRUFBQTtFQS9EakI7SURqRUksa0JDMklxQjtJRDFJckIsZ0JDMEkwQjtJRHhJNUIsaUJDd0krQjtJRHZJL0IsMEJDdUkyQztJRHRJM0MsbUJDc0lvRDtJRHJJcEQsb0JDcUk2RDtJRHBJN0QsV0NvSW1FO0lBQ2pFLGdCQUFRO0lBQ1IsMEJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWEsRUFBQTtFQWhGakI7TUFrRk0sb0JBQW9CLEVBQUE7RUFLMUI7RUFDRSxZQUFZLEVBQUE7RUFFZDtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUFHWjtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixrQ0FBMEI7RUFDMUIsZ0NBQXdCO0VBQ3hCLGtDQUEwQjtFQUMxQixrQkFBZ0I7RUR2S2hCLGVDd0trQjtFRHZLbEIsZ0JDdUt1QjtFRHJLekIsaUJDcUs0QjtFRHBLNUIsb0JDb0trQztFRG5LbEMsZ0JDbUt3QztFRGxLeEMsb0JDa0tpRDtFRGpLakQsY0FoQ2tCO0VDa01oQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFaZDtJQWdCTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isb0JBQWdCO0lBQ2hCLGtCQUFhO0lBQ2IsdUJBQWU7SUFDZixTQUFTLEVBQUE7RUFLZjtFRDlMSSxrQkMrTG1CO0VEOUxuQixnQkM4THdCO0VENUwxQixpQkM0TDZCO0VEM0w3QixvQkMyTG1DO0VEMUxuQyxnQkMwTHlDO0VEekx6QyxvQkN5TGtEO0VEeExsRCxjQ3dMMkQsRUFBQTtFQUc3RDtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lEbE1JLGlCQ3NNb0I7SURyTXBCLGdCQ3FNeUI7SURuTTNCLGlCQ21NOEI7SURsTTlCLG9CQ2tNb0M7SURqTXBDLGdCQ2lNMEM7SURoTTFDLG9CQ2dNbUQ7SUQvTG5ELGNBaENrQjtJQ2dPaEIsU0FBUyxFQUFBO0VBTGI7SUFTSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU8sRUFBQTtFQVhYO0lBZUksa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUFBO0VBaEJqQztNQW1CTSxpQkFBaUIsRUFBQTtFQW5CdkI7TUF1Qk0sZ0JBQWdCLEVBQUE7RUFLdEI7RUQ5TkksaUJDZ09vQjtFRC9OcEIsZ0JDK055QjtFRDdOM0IsaUJDNk44QjtFRDVOOUIsb0JDNE5vQztFRDNOcEMsZ0JDMk4wQztFRDFOMUMsb0JDME5tRDtFRHpObkQsY0FoQ2tCO0VDMFBoQixlQUFlO0VBQ2Ysa0JBQWdCO0VBQ2hCLGtCQUFnQjtFQUNoQixrQkFBZ0IsRUFBQTtFQU5wQjtJQVFNLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmUtZ2l2ZXIvY2dleHBlbnNlcy9jZ2V4cGVuc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXI6bm90KC5uby1iYWNrZ3JvdW5kKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmQzMmM7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlY2VjZWM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBoNSB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCgucHJvamVjdGlvbnMpIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAmLmxhc3Qge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkYWxlcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkZXhwZW5zZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYueWVhciB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRhcHBvaW50bWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5hbmFseXRpY3Mge1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wcm9qZWN0aW9ucyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTNlNTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDExcHg7XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBjb2xvcjogJHJlcG9ydDtcclxuICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtLWdyb3VwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgJiA+IC5leHBlbnNlX2NhcmR7XHJcbiAgICBzdmd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIHJpZ2h0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkYWxlcnQpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWxlcnQ7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsICNmZmZmZmYpO1xyXG5cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc3BhbntcclxuICAgICAgLy8gICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgIC8vICAgICAgICAgQGluY2x1ZGUgZm9udCgxNnB4LCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjZmZmZmZmKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxuICAudHJhbnNfYnRuIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC43NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxuICAgIC0tY29sb3I6ICNlYTRlNGU7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2VhNGU0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbjogLTFweCAycHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb2xsYXBzZSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcHJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmE1ZTYxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcbiAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG59XHJcblxyXG4uZGF0ZV9maWx0ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoMXtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWRhdGV0aW1le1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uX3Rvb2xze1xyXG4gIC50cmFuc19idG57XHJcbiAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBzdmd7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var CgexpensesPage = /** @class */ (function () {
    function CgexpensesPage(datepipe, statusBar, settingService) {
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.settingService = settingService;
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
    CgexpensesPage.prototype.ngOnInit = function () {
    };
    CgexpensesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
        this.settingService.main_chart(this.user_id).subscribe(function (res) {
            _this.main_chart = res;
            //console.log(this.main_chart.Lastmonth,this.main_chart.Currentmonth,this.main_chart.Year,'len')
            //this.Last_Mon_len = this.main_chart.Lastmonth.length;
            //console.log(this.Last_Mon_len)
            for (var i in _this.main_chart.Currentmonth) {
                //this.data.push(Object.values(this.main_chart.Currentmonth[i]))
                _this.currentMonthCat.push(i);
                var key = Object.values(_this.main_chart.Currentmonth[i]);
                console.log(key[0]);
                _this.data.push({
                    name: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    y: key[0].value,
                    drilldown: _this.datepipe.transform(key[0].event_datetime, 'MMM dd')
                });
                _this.drilldownData.push({
                    name: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    id: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    data: key[0].data
                });
            }
            console.log(_this.drilldownData);
            // let YearData = this.main_chart.Totalyear[0];
            // let getyearData= [{
            //   name: 'Total Spent',
            //   y: YearData['value']
            // }]
            // let yearData = {name:'Year',colorByPoint: true,data:getyearData, color:'#ffd32c'}
            // this.values.push(yearData)
            var hashdata = { name: 'Current Month', colorByPoint: true, data: _this.data, color: '#ffd32c' };
            _this.values.push(hashdata);
            _this.mainChart();
        });
        this.settingService.view_expenses_cal(this.user_id).subscribe(function (res) {
            _this.expense_val = res;
            console.log(Math.round(_this.expense_val.MonthProjection));
        });
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
    CgexpensesPage.prototype.mainChart = function () {
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
    };
    CgexpensesPage.prototype.cardClick = function (val) {
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
            for (var i in this.main_chart.Lastmonth) {
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
            for (var i in this.main_chart.Currentmonth) {
                //this.data.push(Object.values(this.main_chart.Currentmonth[i]))
                this.currentMonthCat.push(i);
                var key = Object.values(this.main_chart.Currentmonth[i]);
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
            for (var i in this.main_chart.Year) {
                console.log(Object.keys(this.main_chart.Year[i]));
                //this.data.push(Object.values(this.main_chart.Year[i]))
                this.currentMonthCat.push(i);
                var key = Object.values(this.main_chart.Year[i]);
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
    };
    CgexpensesPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    };
    CgexpensesPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"] }
    ]; };
    CgexpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cgexpenses',
            template: __webpack_require__(/*! raw-loader!./cgexpenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgexpenses/cgexpenses.page.html"),
            styles: [__webpack_require__(/*! ./cgexpenses.page.scss */ "./src/app/care-giver/cgexpenses/cgexpenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_2__["careGiverService"]])
    ], CgexpensesPage);
    return CgexpensesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cgexpenses-cgexpenses-module-es5.js.map