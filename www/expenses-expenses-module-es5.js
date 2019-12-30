(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/add-expenses/add-expenses.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/expenses/add-expenses/add-expenses.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\"> \n\t<ion-toolbar>\n\t\t<ion-title class=\"ion-padding-start\">Add Expense</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\n\n<ion-content class=\"ion-padding\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n        <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\n          <ion-label position=\"floating\">Spent on</ion-label>\n            <ion-select formControlName=\"event_name\" (cancel)=\"onCancel()\" (ionChange)=\"Change($event.target.value)\">\n              <ion-select-option *ngFor=\"let val of total_option\" [value]=\"val\">{{val}}</ion-select-option>\n              <!-- <ion-select-option [value]=\"More\">Others</ion-select-option> -->\n            </ion-select>\n        </ion-item>\n        <ion-item *ngIf=\"myForm.value['event_name']=='Others'\" [ngClass]=\"{ 'ion-invalid': submitted && f.others.invalid,'ion-touched': submitted && f.others.invalid }\">\n          <ion-label position=\"floating\">Expenses Type Name(Others)</ion-label>\n          <ion-input type=\"text\" formControlName=\"others\"></ion-input>\n        </ion-item>\n        <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.value.invalid,'ion-touched': submitted && f.value.invalid }\">\n          <ion-label position=\"floating\">Amount</ion-label>\n          <ion-input type=\"tel\" formControlName=\"value\" (keypress)=\"_keyPress($event)\"></ion-input>\n        </ion-item>\n        <!-- <ion-input formControlName=\"value\" (keypress)=\"_keyPress($event)\" placeholder=\"Value\"></ion-input> -->\n      \n        <!-- <ion-item>\n         <ion-label position=\"floating\">DD MM YYYY</ion-label>\n         <ion-datetime displayFormat=\"DD MMM YYYY\" formControlName=\"event_datetime\"></ion-datetime>\n        </ion-item> -->\n        <ion-item button>\n          <ion-label position=\"floating\">Spent Date</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY\" [min]=\"year\" [max]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\n          <ion-button>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n          </ion-button>\n        </ion-item>\n        <ion-item>  \n          <ion-label position=\"floating\">Description</ion-label>\n          <ion-textarea formControlName=\"description\"></ion-textarea>\n        </ion-item>\n        <!-- <ion-input formControlName=\"description\" placeholder=\"Enter Input\"></ion-input> -->\n        <div class=\"footer\">\n          <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\">\n            Cancel\n          </ion-button>\n          <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\n            Save\n          </button>\n        </div>\n        <!-- <ion-button color=\"light\" (click)=\"cancel()\">Cancel</ion-button>\n        <ion-button type=\"submit\" color=\"success\">Save</ion-button> -->\n    </form>\n</ion-content>\n\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/expenses.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/expenses/expenses.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n\t<ion-toolbar>\n\t  <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n\t  <ion-title>Expenses</ion-title>\n\t  <ion-buttons slot=\"end\">\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t\t<ion-button>\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n\t\t</ion-button>\n\t  </ion-buttons>\n\t</ion-toolbar>\n  </ion-header>\n  <ion-content>\n\t  <ion-toolbar class=\"action_tools\">\n\t\t  <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/view-summary\" *ngIf=\" main_chart?.Currentmonth?.length != 0\">\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.411\" height=\"11.601\" viewBox=\"0 0 15.411 11.601\"><g transform=\"translate(0 -7.434)\"><path d=\"M24.994,47.431H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -28.601)\"/><path d=\"M24.994,28.6H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -14.597)\"/><path d=\"M24.994,9.769H14.689a.769.769,0,1,1,0-1.538H24.994a.769.769,0,0,1,0,1.538Z\" transform=\"translate(-10.352 -0.593)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 7.434)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 12.201)\"/><circle cx=\"1.033\" cy=\"1.033\" r=\"1.033\" transform=\"translate(0 16.969)\"/></g></svg>\n\t\t\t  View All\n\t\t  </ion-button>\n\t\t  <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t  Add\n\t\t  </ion-button>\n\t  </ion-toolbar>\n\t  <!-- <div *ngIf=\"main_chart?.Currentmonth?.length == 0\" class=\"no_record\">\n\t\t  <div>\n\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t  <h3>No Record Found</h3>\n\t\t\t   <p>Add your record to know your day to day activity</p>\n\t\t\t  <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\t\t  Add\n\t\t\t  </ion-button>\n\t\t  </div>\n\t  </div> -->\n\t  <div id=\"expense_chart\"></div>\n\t  <ion-grid>\n\t\t  <ion-row>\n\t\t\t  <!-- <ion-col class=\"last\" size=\"6\" [hidden]=\"Last_Mon_len == 0\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('LM');\" [ngStyle]=\"{'background-color': lastMonthColor}\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': lastMonthColor == '#0e9bff' ? '#fff' : ''}\">Last Month</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': lastMonthColor == '#0e9bff' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.LastMonth}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col> -->\n\t\t\t  <ion-col class=\"current\" size=\"6\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('CM');\" [ngStyle]=\"{'background-color': currentMonthColor}\" >\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': currentMonthColor == '#ffd32c' ? '#fff' : ''}\">Current Month</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': currentMonthColor == '#ffd32c' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.CurrentMonth || '0'}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col class=\"year\" size=\"6\">\n\t\t\t\t  <ion-card button (click)=\"cardClick('Year');\" [ngStyle]=\"{'background-color': yearColor}\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 [ngStyle]=\"{'color': yearColor == '#c7a254' ? '#fff' : ''}\">Year to Date</h5>\n\t\t\t\t\t\t  <h4 [ngStyle]=\"{'color': yearColor == '#c7a254' ? '#fff' : ''}\">&#8377;&nbsp;{{expense_val?.Yearly || '0'}}</h4>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col class=\"analytics\" size=\"6\">\n\t\t\t\t  <ion-card routerLink=\"/self-care-tabs/tabs/tab1/expenses/view-analytics\">\n\t\t\t\t\t  <ion-card-content>\n\t\t\t\t\t\t  <h5 class=\"ion-text-center\">\n\t\t\t\t\t\t\t  View Analytics\n\t\t\t\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"13.357\" viewBox=\"0 0 19 13.357\"> <path id=\"left-arrow\" d=\"M6.2.2a.674.674,0,1,1,.957.948L2.3,6H18.32a.674.674,0,0,1,.68.67.683.683,0,0,1-.68.68H2.3L7.155,12.2a.687.687,0,0,1,0,.957.671.671,0,0,1-.957,0l-6-6a.675.675,0,0,1,0-.948Z\" transform=\"translate(19 13.357) rotate(180)\" fill=\"#2c2c2c\"/> </svg>\n\t\t\t\t\t\t  </h5>\n\t\t\t\t\t  </ion-card-content>\n\t\t\t\t  </ion-card>\n\t\t\t  </ion-col>\n\t\t  </ion-row>\n\t\t  <ion-row class=\"projections\">\n\t\t\t  <ion-col size=\"6\" *ngIf=\"expense_val?.status==true\">\n\t\t\t\t  <h5>Monthly Projections</h5>\n\t\t\t\t  <h4>&#8377;&nbsp;{{expense_val?.MonthProjection || '0'}}</h4>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"6\" *ngIf=\"expense_val?.status==true\">\n\t\t\t\t  <h5>Yearly Projections</h5>\n\t\t\t\t  <h4>&#8377;&nbsp;{{expense_val?.YearlyProjection || '0'}}</h4>\n\t\t\t  </ion-col>\n\t\t\t  <ion-col size=\"12\" *ngIf=\"expense_val?.status==false\">\n\t\t\t\t  <ion-note> <span>Note:</span><br> Monthly and Yearly projections will be shown on next January onwards</ion-note>\n\t\t\t  </ion-col>\n\t\t  </ion-row>\n\t  </ion-grid>\n\t  <!-- <ion-card>\n\t\t  <ion-card-header>\n\t\t\t  <ion-card-subtitle>Month Projections</ion-card-subtitle>\n\t\t\t  <ion-card-title>&#8377;{{expense_val?.MonthProjection}}</ion-card-title>\n\t\t\t  <ion-card-subtitle>Yearly Projections</ion-card-subtitle>\n\t\t\t  <ion-card-title>&#8377;{{expense_val?.YearlyProjection}}</ion-card-title>\n\t\t  </ion-card-header>\n\t  </ion-card> -->\n  </ion-content>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/filters/filter.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/expenses/filters/filter.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Filter Expenses</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"filter\" (ngSubmit)=\"onSubmit(filter)\">\r\n    <ion-text>Date Filter</ion-text>\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\" (ionChange)=\"changedate(filter.value.from_date,filter.value.end_date)\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\" >\r\n          <div class=\"date_filter\">\r\n            <!-- <ion-label position=\"floating\">From Date</ion-label> -->\r\n            <h1>From Date</h1>\r\n          <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.from_date.invalid,'ion-touched': submitted && f.from_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [min]=\"year\" [max]='todaydate' formControlName=\"from_date\" placeholder=\"--:--\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n            </ion-item>\r\n            <h6>(Set From Date)</h6>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\" size=\"6\" >\r\n          <div class=\"date_filter\">\r\n            <!-- <ion-label position=\"floating\">To Date</ion-label> -->\r\n            <h1>To Date</h1>\r\n          <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.end_date.invalid,'ion-touched': submitted && f.end_date.invalid }\">\r\n            <ion-datetime displayFormat=\"DD MMM, YYYY\" [min]=\"year\" [max]='todaydate' formControlName=\"end_date\" placeholder=\"-- --- ----\"></ion-datetime>            \r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n          </ion-item>\r\n          <h6>(Set To Date)</h6>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-text *ngIf=\"list_keys.length!=0\">Choose expense heads for analysis</ion-text>\r\n    <ion-list class=\"ion-padding-bottom\">\r\n      <ion-item *ngFor=\"let key of list_keys\">\r\n        <ion-label>\r\n          <h3>{{key}}</h3>\r\n        </ion-label>\r\n        <ion-checkbox (ionChange)=\"checkbox($event, key)\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\">\r\n        Apply\r\n      </button>\r\n    </div>\r\n    <!-- <ion-button (click)=\"cancel()\" color=\"primary\">Cancel</ion-button>\r\n    <ion-button type=\"submit\" color=\"primary\">Filter</ion-button> -->\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/view-analytics/view-analytics.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/expenses/view-analytics/view-analytics.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expenses Analytics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n  <!-- <ion-item>\n  <h5>From date:{{firstDay | date:\"dd MMM yyyy\"}}</h5> \n  <h5>To date:{{date | date:\"dd MMM yyyy\"}}</h5>\n  </ion-item> -->\n\t<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"datetoast()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n      {{firstDay | date:\"dd MMM yyyy\"}} - {{date | date:\"dd MMM yyyy\"}}\n    </ion-button>\n\t\t<ion-button class=\"btn\" slot=\"end\" color=\"secondary\" (click)=\"filterModal()\">\n        <svg id=\"Group_470\" data-name=\"Group 470\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17.967\" height=\"13.02\" viewBox=\"0 0 17.967 13.02\"> <rect id=\"Rectangle_494\" data-name=\"Rectangle 494\" width=\"17.967\" height=\"2.083\" transform=\"translate(0)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_495\" data-name=\"Rectangle 495\" width=\"11.717\" height=\"2.083\" transform=\"translate(3.125 3.645)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_496\" data-name=\"Rectangle 496\" width=\"8.072\" height=\"2.083\" transform=\"translate(4.947 7.291)\" fill=\"#2c2c2c\"/> <rect id=\"Rectangle_497\" data-name=\"Rectangle 497\" width=\"3.906\" height=\"2.083\" transform=\"translate(7.03 10.936)\" fill=\"#2c2c2c\"/> </svg>\n\t\t\tFilter\n    </ion-button>\n    <!-- <ion-button color=\"primary\" (click)=\"filterModal()\">Filter</ion-button> -->\n  </ion-toolbar>\n  <div class=\"ion-padding-top ion-padding-bottom\" *ngIf=\"!loader\">\n    <div *ngFor=\"let i of chart_keys\"> \n        <div id=\"{{i}}\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"chart_keys.length == 0 && !loader\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n    </div>\n  </div>\n <div *ngIf=\"loader\">\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n  <ion-skeleton-text animated style=\"width: 100%; height: 200px; margin-bottom:20px;\"></ion-skeleton-text>\n</div>\n \n</ion-content>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/view-summary/view-summary.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/expenses/view-summary/view-summary.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expenses</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!loader\">\n\t<ion-toolbar class=\"action_tools\">\n    <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"openCalendar()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n      {{from_date1 | date:\"dd MMM yyyy\"}} - {{end_date1 | date:\"dd MMM yyyy\"}}\n    </ion-button>\n\t\t<ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n\t\t\tAdd\n\t\t</ion-button>\n  </ion-toolbar>\n  <div  class=\"ion-padding\">\n    <ion-item-group *ngFor = \"let event of expen_key;let i=index;\">\n      <ion-item class=\"expense_card\" button (click)=\"toggle(i)\">\n          <!-- toggle($event); collapse = event -->\n        <ion-label>\n          <h4>{{event}}</h4>\n          <h5>&#8377;&nbsp;{{getChartValue[i]}}</h5>\n          <ion-text>Last updated: {{view_all_expen.expense[event][view_all_expen.expense[event].length-1]['updated_at'] | date : \"dd MMM,y\"}}</ion-text>\n        </ion-label>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"9.629\" viewBox=\"0 0 18 9.629\"><g transform=\"translate(-6.4 -33.4)\"><path d=\"M24.216,33.586a.636.636,0,0,0-.9,0l-7.908,7.923L7.485,33.586a.636.636,0,1,0-.9.9l8.357,8.357a.621.621,0,0,0,.45.186.647.647,0,0,0,.45-.186L24.2,34.485A.623.623,0,0,0,24.216,33.586Z\"/></g></svg>\n      </ion-item>\n      <ion-list [ngClass]=\"{'expand': i === status, 'collapse': i != status}\">\n          <!-- [ngClass]=\"status ? 'expand' : 'collapse'\"  -->\n          <!-- [ngClass]=\"{'expand': collapse === event, 'collapse': collapse != event}\" -->\n        <ion-item *ngFor = \"let key of view_all_expen.expense[event]\">\n          <ion-avatar>\n            {{key.event_datetime|date:'dd'}}\n            <br>\n            {{key.event_datetime|date:'MMM'}}\n          </ion-avatar>\n          <ion-label>\n            <h3>&#8377;&nbsp;{{key.value}}</h3>\n            <p>{{key.description}}</p>\n          </ion-label>\n          <ion-button class=\"trans_btn\" (click)=\"delete(key,key.event_name)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </ion-item>\n      </ion-list>\n      <!-- <div *ngFor = \"let key of view_all_expen[event]\">\n        {{key.event_datetime | date:'dd/MMM'}}\n        {{key.value}}\n        {{key.description}}\n        <ion-button (click)=\"delete(key.id)\">Delete</ion-button>\n      </div> -->\n    </ion-item-group>\n  </div>\n  <div *ngIf=\"expen_key.length == 0\" class=\"no_record\">\n\t\t<div>\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n\t\t\t<h3>No Record Found</h3>\n\t\t\t<!-- <p>Add your record to know your day to day activity</p>\n      <ion-button class=\"btn\" slot=\"end\" color=\"secondary\" routerLink=\"/self-care-tabs/tabs/tab1/expenses/add-expenses\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button> -->\n\t\t</div>\n  </div>\n  </div>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    \n  \n    <ion-list *ngIf=\"loader\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n   "

/***/ }),

/***/ "./src/app/self-care/expenses/add-expenses/add-expenses.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/self-care/expenses/add-expenses/add-expenses.page.ts ***!
  \**********************************************************************/
/*! exports provided: addExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExpensesPage", function() { return addExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");











var addExpensesPage = /** @class */ (function () {
    function addExpensesPage(alertController, toast, toastController, router, event, fb, statusBar, database, databaseSummary) {
        this.alertController = alertController;
        this.toast = toast;
        this.toastController = toastController;
        this.router = router;
        this.event = event;
        this.fb = fb;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.Progress = false;
        this.showBackdrop = false;
        this.submitted = false;
    }
    addExpensesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.todaydate = new Date().toISOString();
        this.year = new Date().getFullYear();
        this.myForm = this.fb.group({
            'event_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'value': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'others': [''],
            'event_datetime': [this.todaydate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'description': [''],
            'event_type': ["expense"]
        });
        // this.event.event_add_option().subscribe(res =>{
        //   this.Options_res =res;
        //   this.total_option =this.Options_res.enum_masters;
        //   this.total_option.push("Others")
        // })
        //offline database code for listing spent on type
        this.databaseSummary.getEnumMasters('spent_place').then(function (res) {
            _this.Options_res = res;
            _this.total_option = _this.Options_res.enum_masters;
            _this.total_option.push("Others");
        })
            .catch(function (error) { console.log(error); });
    };
    addExpensesPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    };
    addExpensesPage.prototype.Change = function (c) {
        this.Addmore = c;
        if (this.Addmore != "Others") {
            this.myForm.controls['others'].clearValidators();
            this.myForm.updateValueAndValidity();
            this.myForm.controls['others'].updateValueAndValidity();
            this.myForm.value.others = "";
        }
        else {
            this.submitted = false;
            var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required];
            this.myForm.controls['others'].setValidators(validators);
            this.myForm.updateValueAndValidity();
            this.myForm.controls['others'].updateValueAndValidity();
        }
    };
    addExpensesPage.prototype.onCancel = function () {
    };
    Object.defineProperty(addExpensesPage.prototype, "f", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    addExpensesPage.prototype.onSubmit = function (val) {
        this.submitted = true;
        if (this.myForm.valid) {
            this.addconfirmation();
        }
    };
    addExpensesPage.prototype.addconfirmation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Expenses',
                                message: 'Are you sure to submit' + ' ' + (this.myForm.value.event_name).bold() + ' ' + 'expenses' + '?',
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
                                            // this.event.event_add(this.myForm.value).subscribe(res =>{
                                            //   this.Progress=false;
                                            //   this.router.navigate(['/self-care-tabs/tabs/tab1/expenses']);
                                            // })
                                            //offline database code for add the expense
                                            _this.database.createAnEvent(_this.myForm.value).then(function (res) {
                                                console.log(res);
                                                _this.Progress = false;
                                                _this.router.navigate(['/self-care-tabs/tabs/tab1/expenses']);
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
    addExpensesPage.prototype.cancel = function () {
        this.myForm.reset;
        this.router.navigate(['self-care-tabs/tabs/tab1/expenses'], { skipLocationChange: true });
    };
    addExpensesPage.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    };
    addExpensesPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar.style.display = 'flex';
    };
    addExpensesPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    addExpensesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] }
    ]; };
    addExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-expenses',
            template: __webpack_require__(/*! raw-loader!./add-expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/add-expenses/add-expenses.page.html"),
            styles: [__webpack_require__(/*! ../expenses.page.scss */ "./src/app/self-care/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"]])
    ], addExpensesPage);
    return addExpensesPage;
}());



/***/ }),

/***/ "./src/app/self-care/expenses/expenses.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/self-care/expenses/expenses.module.ts ***!
  \*******************************************************/
/*! exports provided: ExpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function() { return ExpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expenses.page */ "./src/app/self-care/expenses/expenses.page.ts");
/* harmony import */ var _view_analytics_view_analytics_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-analytics/view-analytics.page */ "./src/app/self-care/expenses/view-analytics/view-analytics.page.ts");
/* harmony import */ var _filters_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/filter.page */ "./src/app/self-care/expenses/filters/filter.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_expenses_add_expenses_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-expenses/add-expenses.page */ "./src/app/self-care/expenses/add-expenses/add-expenses.page.ts");
/* harmony import */ var _view_summary_view_summary_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-summary/view-summary.page */ "./src/app/self-care/expenses/view-summary/view-summary.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");

















var routes = [
    {
        path: '',
        component: _expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]
    }, {
        path: 'view-analytics',
        component: _view_analytics_view_analytics_page__WEBPACK_IMPORTED_MODULE_7__["viewAnalyticsPage"]
    },
    {
        path: 'add-expenses',
        component: _add_expenses_add_expenses_page__WEBPACK_IMPORTED_MODULE_10__["addExpensesPage"]
    },
    {
        path: 'view-summary',
        component: _view_summary_view_summary_page__WEBPACK_IMPORTED_MODULE_11__["viewSummaryPage"]
    },
    {
        path: 'filters',
        component: _filters_filter_page__WEBPACK_IMPORTED_MODULE_8__["FiltersPage"]
    }
];
var ExpensesPageModule = /** @class */ (function () {
    function ExpensesPageModule() {
    }
    ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"], _view_analytics_view_analytics_page__WEBPACK_IMPORTED_MODULE_7__["viewAnalyticsPage"], _add_expenses_add_expenses_page__WEBPACK_IMPORTED_MODULE_10__["addExpensesPage"], _view_summary_view_summary_page__WEBPACK_IMPORTED_MODULE_11__["viewSummaryPage"], _filters_filter_page__WEBPACK_IMPORTED_MODULE_8__["FiltersPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__["Toast"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"]]
        })
    ], ExpensesPageModule);
    return ExpensesPageModule;
}());



/***/ }),

/***/ "./src/app/self-care/expenses/expenses.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/self-care/expenses/expenses.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ffd32c;\n  --color: #ffffff; }\n  .btn:not(:last-child) {\n  margin-right: 16px; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-card {\n  height: 100%;\n  margin: 0;\n  border-radius: 5px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-card ion-card-content {\n    width: 100%; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-item-group {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group > .expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 75px;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .expand {\n  height: auto; }\n  .collapse {\n  height: 0;\n  padding: 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-text {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-note {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398;\n  display: block; }\n  ion-note span {\n    color: #2c2c2c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyREE7RUF4QkksaUJBMkJzQjtFQTFCdEIsZ0JBMEIyQjtFQXhCN0IsaUJBd0JnQztFQXZCaEMsMEJBdUI0QztFQXRCNUMsZ0JBc0JrRDtFQXJCbEQsb0JBcUIyRDtFQXBCM0QsY0FvQm9FLEVBQUE7RUFIdEU7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtFQVVNLGlCQUFpQixFQUFBO0VBVnZCO0VBYU0sb0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBbkJ4QjtFQXdCTSxhQUFhLEVBQUE7RUFLbkI7RUFFSSxxQkFBYSxFQUFBO0VBSWpCO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7RUExQ0Usb0JBZ0RvQjtFQWhEcEIsYUFnRG9CO0VBL0NwQixpQkErQzRCO0VBOUM1Qix5QkE4Q29DO1VBOUNwQyxtQkE4Q29DO0VBN0NwQyx1QkE2QzJDO1VBN0MzQyxzQkE2QzJDO0VBQ3pDLG9CQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQVh0QjtJQWNNLG1CQUFtQixFQUFBO0VBZHpCO0lBM0RJLGVBNkVvQjtJQTVFcEIsZ0JBNEV5QjtJQTFFM0IsaUJBMEU4QjtJQXpFOUIsMEJBeUUwQztJQXhFMUMsa0JBd0VrRDtJQXZFbEQsb0JBdUUyRDtJQXRFM0QsY0FzRW9FO0lBQ2hFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBdEJ4QjtJQTJCUSxlQUFlLEVBQUE7RUEzQnZCO0lBaUNR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TSxjQUFjLEVBQUE7RUMxc0JwQjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQVEsRUFBQTtFQUlaO0VBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURzQkksaUJDYnNCO0lEY3RCLGdCQ2QyQjtJRGdCN0IsaUJDaEJnQztJRGlCaEMsMEJDakI0QztJRGtCNUMsbUJDbEJxRDtJRG1CckQsb0JDbkI4RDtJRG9COUQsY0FsQ2tCO0lDZWQsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBS3hCO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIseUNBQXlDO0VEbUJ6QyxvQkNsQmtCO0VEa0JsQixhQ2xCa0I7RURtQmxCLGlCQ25CMEI7RURvQjFCLHlCQ3BCa0M7VURvQmxDLG1CQ3BCa0M7RURxQmxDLHdCQ3JCMEM7VURxQjFDLHVCQ3JCMEMsRUFBQTtFQUw1QztJQVFJLFdBQVcsRUFBQTtFQUlmO0VETkksaUJDUW9CO0VEUHBCLGdCQ095QjtFREwzQixpQkNLOEI7RURKOUIsMEJDSTBDO0VESDFDLGdCQ0dnRDtFREZoRCxvQkNFeUQ7RUREekQsY0FsQ2tCLEVBQUE7RUNpQ3BCO0lBS00sV0FBVyxFQUFBO0VBTGpCO0VETkksa0JDZ0JxQjtFRGZyQixnQkNlMEI7RURiNUIsaUJDYStCO0VEWi9CLDBCQ1kyQztFRFgzQyxnQkNXaUQ7RURWakQsb0JDVTBEO0VEVDFELFdDU2dFLEVBQUE7RUFWbEU7RUFpQlUsY0Q5Q0ssRUFBQTtFQzZCZjtFQXVCVSxjRDdDTyxFQUFBO0VDc0JqQjtFQTZCVSxjRHZEVyxFQUFBO0VDMEJyQjtFRFdFLG9CQ3VCMEI7RUR2QjFCLGFDdUIwQjtFRHRCMUIsZUNzQmdDO0VEckJoQyx5QkNxQndDO1VEckJ4QyxtQkNxQndDO0VEcEJ4Qyx3QkNvQmdEO1VEcEJoRCx1QkNvQmdELEVBQUE7RUFsQ2xEO0VBeUNJLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUEzQ3RCO0lBOENNLGNEL0VjO0lDZ0ZkLGFBQWEsRUFBQTtFQS9DbkI7SUFtRE0sY0QxRVU7SUMyRVYsYUFBYSxFQUFBO0VBS25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQ0FBMkMsRUFBQTtFQUg3QztJQU9NLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUyxFQUFBO0VBVGY7SUFjSSx5QkFBYTtJQUNiLDJCQUFlO0lBQ2YscUJBQWdCO0lBQ2hCLG1CQUFjO0lBQ2Qsc0JBQW9CLEVBQUE7RUFsQnhCO01EL0RJLGVDb0ZvQjtNRG5GcEIsZ0JDbUZ5QjtNRGpGM0IsaUJDaUY4QjtNRGhGOUIsMEJDZ0YwQztNRC9FMUMsaUJDK0VpRDtNRDlFakQsb0JDOEUwRDtNRDdFMUQsY0M2RW1FO01BQy9ELGNBQWMsRUFBQTtFQXRCcEI7TUQvREksaUJDeUZzQjtNRHhGdEIsZ0JDd0YyQjtNRHRGN0IsaUJDc0ZnQztNRHJGaEMsMEJDcUY0QztNRHBGNUMsbUJDb0ZxRDtNRG5GckQsb0JDbUY4RDtNRGxGOUQsY0E5QmE7TUNpSFQscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQTdCekI7TUQvREksa0JDZ0d1QjtNRC9GdkIsZ0JDK0Y0QjtNRDdGOUIsaUJDNkZpQztNRDVGakMsMEJDNEY2QztNRDNGN0MsbUJDMkZzRDtNRDFGdEQsb0JDMEYrRDtNRHpGL0QsY0FsQ2tCO01DNEhkLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUFwQ3pCO01EL0RJLGlCQ3NHc0I7TURyR3RCLGdCQ3FHMkI7TURuRzdCLGlCQ21HZ0M7TURsR2hDLDBCQ2tHNEM7TURqRzVDLG1CQ2lHcUQ7TURoR3JELG9CQ2dHOEQ7TUQvRjlELGNBbENrQjtNQ2tJZCxtQkFBbUI7TUFDbkIscUJBQXFCO01BQ3JCLHFCQUFxQixFQUFBO0VBMUMzQjtNRC9ESSxlQzZHb0I7TUQ1R3BCLGdCQzRHeUI7TUQxRzNCLGlCQzBHOEI7TUR6RzlCLHFCQ3lHcUM7TUR4R3JDLG1CQ3dHOEM7TUR2RzlDLG9CQ3VHdUQ7TUR0R3ZELGNDc0dnRTtNQUM1RCxxQkFBcUI7TUFDckIscUJBQXFCLEVBQUE7RUFoRDNCO01Bb0RNLGtCQUFrQjtNQUNsQixtQkQzSVM7TUM0SVQscUJBQXFCO01Eckh2QixlQ3NIb0I7TURySHBCLGdCQ3FIeUI7TURuSDNCLGlCQ21IOEI7TURsSDlCLHFCQ2tIcUM7TURqSHJDLGtCQ2lINkM7TURoSDdDLG9CQ2dIc0Q7TUQvR3RELGNDK0crRCxFQUFBO0VBdkRqRTtRQTBEUSxXQUFXO1FBQ1gsNEJBQTRCO1FBQzVCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVMsRUFBQTtFQS9EakI7SUQvREksa0JDeUlxQjtJRHhJckIsZ0JDd0kwQjtJRHRJNUIsaUJDc0krQjtJRHJJL0IsMEJDcUkyQztJRHBJM0MsbUJDb0lvRDtJRG5JcEQsb0JDbUk2RDtJRGxJN0QsV0NrSW1FO0lBQ2pFLGdCQUFRO0lBQ1IsMEJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWEsRUFBQTtFQWhGakI7TUFrRk0sb0JBQW9CLEVBQUE7RUFLMUI7RUFDRSxZQUFZLEVBQUE7RUFFZDtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7RUFHWjtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixrQ0FBMEI7RUFDMUIsZ0NBQXdCO0VBQ3hCLGtDQUEwQjtFQUMxQixrQkFBZ0I7RURyS2hCLGVDc0trQjtFRHJLbEIsZ0JDcUt1QjtFRG5LekIsaUJDbUs0QjtFRGxLNUIsb0JDa0trQztFRGpLbEMsZ0JDaUt3QztFRGhLeEMsb0JDZ0tpRDtFRC9KakQsY0FsQ2tCO0VDa01oQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFaZDtJQWdCTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isb0JBQWdCO0lBQ2hCLGtCQUFhO0lBQ2IsdUJBQWU7SUFDZixTQUFTLEVBQUE7RUFLZjtFRDVMSSxrQkM2TG1CO0VENUxuQixnQkM0THdCO0VEMUwxQixpQkMwTDZCO0VEekw3QixvQkN5TG1DO0VEeExuQyxnQkN3THlDO0VEdkx6QyxvQkN1TGtEO0VEdExsRCxjQ3NMMkQsRUFBQTtFQUc3RDtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lEaE1JLGlCQ29Nb0I7SURuTXBCLGdCQ21NeUI7SURqTTNCLGlCQ2lNOEI7SURoTTlCLG9CQ2dNb0M7SUQvTHBDLGdCQytMMEM7SUQ5TDFDLG9CQzhMbUQ7SUQ3TG5ELGNBbENrQjtJQ2dPaEIsU0FBUyxFQUFBO0VBTGI7SUFTSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU8sRUFBQTtFQVhYO0lBZUksa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUFBO0VBaEJqQztNQW1CTSxpQkFBaUIsRUFBQTtFQW5CdkI7TUF1Qk0sZ0JBQWdCLEVBQUE7RUFLdEI7RUQ1TkksaUJDOE5vQjtFRDdOcEIsZ0JDNk55QjtFRDNOM0IsaUJDMk44QjtFRDFOOUIsb0JDME5vQztFRHpOcEMsZ0JDeU4wQztFRHhOMUMsb0JDd05tRDtFRHZObkQsY0FsQ2tCO0VDMFBoQixlQUFlO0VBQ2Ysa0JBQWdCO0VBQ2hCLGtCQUFnQjtFQUNoQixrQkFBZ0IsRUFBQTtFQU5wQjtJQVFNLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUt0QjtFRDFPSSxpQkMyT2tCO0VEMU9sQixnQkMwT3VCO0VEeE96QixpQkN3TzRCO0VEdk81QixvQkN1T2tDO0VEdE9sQyxnQkNzT3dDO0VEck94QyxvQkNxT2lEO0VEcE9qRCxjQWpDaUI7RUNzUWpCLGNBQWMsRUFBQTtFQUZoQjtJQUtJLGNEMVFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuJG15LWdyZXktYmx1ZSA6ICNlYTRlNGU7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIC8vIGlvbi1pdGVte1xuICAvLyAgIGlvbi1sYWJlbHtcbiAgLy8gICAgIC0tY29sb3I6ICM3YjdiN2I7XG4gIC8vICAgfVxuICAvLyB9XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjMWMxYzFjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGM2ODtcbiAgICAgIHBhZGRpbmc6IDFweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhcjpub3QoLm5vLWJhY2tncm91bmQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZDMyYztcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gIGg1IHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBub25lKTtcclxuICB9XHJcblxyXG4gICY6bm90KC5wcm9qZWN0aW9ucykge1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICYubGFzdCB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRhbGVydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgY29sb3I6ICRleHBlbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi55ZWFyIHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGFwcG9pbnRtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmFuYWx5dGljcyB7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnByb2plY3Rpb25zIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlM2U1O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTFweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxuICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAkcmVwb3J0O1xyXG4gICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0tZ3JvdXAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAmID4gLmV4cGVuc2VfY2FyZHtcclxuICAgIHN2Z3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgcmlnaHQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRhbGVydCk7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRhbGVydDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgI2ZmZmZmZik7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzcGFue1xyXG4gICAgICAvLyAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgLy8gICAgICAgICBAaW5jbHVkZSBmb250KDE2cHgsIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICNmZmZmZmYpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbGxhcHNlIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogI2VhNGU0ZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6ICNiY2JiY2Y7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwcmVudDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICNmYTVlNjE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbn1cclxuXHJcbi5kYXRlX2ZpbHRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGgxe1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZGF0ZXRpbWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHJcbiAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb25fdG9vbHN7XHJcbiAgLnRyYW5zX2J0bntcclxuICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogNHB4IDAgMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHN2Z3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGRhcmtfZ3JleSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHNwYW57XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/self-care/expenses/expenses.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/self-care/expenses/expenses.page.ts ***!
  \*****************************************************/
/*! exports provided: ExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPage", function() { return ExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");



// import drilldown from 'highcharts/modules/drilldown.src.js'; 
// drilldown(Highcharts)



var ExpensesPage = /** @class */ (function () {
    function ExpensesPage(expense, datepipe, statusBar, databaseSummary) {
        this.expense = expense;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
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
    }
    ExpensesPage.prototype.ngOnInit = function () {
    };
    ExpensesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.user_id = localStorage.getItem("user_id");
        this.currentMonthCat = [];
        this.values = [];
        this.data = [];
        console.log(this.values, 'length');
        this.lastMonthColor = "#fff";
        this.currentMonthColor = "#ffd32c";
        this.yearColor = "#fff";
        // this.expense.main_chart(this.user_id).subscribe(res => {
        //   this.main_chart = res;
        //   console.log(this.Last_Mon_len)
        //   for (let i in this.main_chart.Currentmonth) {
        //     this.currentMonthCat.push(i);
        //     let key:any = Object.values(this.main_chart.Currentmonth[i])
        //     console.log(key[0])
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
        this.databaseSummary.expense_cals_chart().then(function (res) {
            _this.main_chart = res;
            console.log(_this.main_chart);
            for (var i in _this.main_chart.Currentmonth) {
                console.log(_this.main_chart.Currentmonth);
                _this.currentMonthCat.push(i);
                var key = Object.values(_this.main_chart.Currentmonth[i]);
                console.log(key[0]);
                _this.data.push({
                    name: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    y: Number(key[0].value),
                    drilldown: _this.datepipe.transform(key[0].event_datetime, 'MMM dd')
                });
                _this.drilldownData.push({
                    name: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    id: _this.datepipe.transform(key[0].event_datetime, 'MMM dd'),
                    data: key[0].data
                });
            }
            console.log(_this.drilldownData);
            var hashdata = { name: 'Current Month', colorByPoint: true, data: _this.data, color: '#ffd32c' };
            console.log(hashdata);
            _this.values.push(hashdata);
            console.log(_this.values);
            _this.mainChart();
        });
        this.databaseSummary.expenseCalculation().then(function (res) {
            console.log(res);
            _this.expense_val = res;
        });
        // this.databaseSummary.expenseCalculation().then(res=>{
        //   console.log(res)
        // })
        // this.expense.view_expenses_cal(this.user_id).subscribe(res =>{
        //   this.expense_val = res;
        //   console.log(Math.round(this.expense_val.MonthProjection));
        // });
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
    };
    ExpensesPage.prototype.mainChart = function () {
        console.log(this.values);
        var myChart = Highcharts.chart('expense_chart', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                panning: true,
                panKey: 'shift'
                // scrollablePlotArea: {
                //     minWidth: 600
                // }
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
                crosshairs: true,
                shared: true,
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b> </span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} Rs</b><br/>'
            },
            xAxis: {
                type: 'category'
                //categories: this.currentMonthCat
            },
            // tooltip: {
            //       crosshairs: true,
            //       shared: true
            //   },
            yAxis: {
                title: {
                    text: 'Rupees'
                }
                // labels: {
                //   format: '{value}'
                // }
            },
            series: this.values,
            drilldown: {
                series: this.drilldownData
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
            // responsive: {
            //       rules: [{
            //           condition: {
            //               maxWidth: 500
            //           },
            //           chartOptions: {
            //               legend: {
            //                   align: 'center',
            //                   verticalAlign: 'bottom',
            //                   layout: 'horizontal'
            //               }
            //           }
            //       }]
            //   }
        });
        // Highcharts.chart('expense_chart', {
        //   chart: {
        //    type: 'column'
        //   },
        //   title: {
        //    text: 'Browser market shares. January, 2015 to May, 2015'
        //   },
        //   subtitle: {
        //    text: 'Click the columns to view versions. Source: netmarketshare.com.'
        //   },
        //   xAxis: {
        //    type: 'category'
        //   },
        //   yAxis: {
        //    title: {
        //     text: 'Total percent market share'
        //    }
        //   },
        //   legend: {
        //    enabled: false
        //   },
        //   plotOptions: {
        //    series: {
        //     borderWidth: 0,
        //     dataLabels: {
        //      enabled: true,
        //      format: '{point.y:.1f}%'
        //     }
        //    }
        //   },
        //   tooltip: {
        //    headerFormat: '{series.name}',
        //    pointFormat: '{point.name}: {point.y:.2f}% of total'
        //   },
        //   series: [{
        //    name: 'Brands',
        //    colorByPoint: true,
        //    data: [{
        //     name: 'Microsoft Internet Explorer',
        //     y: 56.33,
        //     drilldown: 'Microsoft Internet Explorer'
        //    }, {
        //     name: 'Chrome',
        //     y: 24.03,
        //     drilldown: 'Chrome'
        //    }, {
        //     name: 'Firefox',
        //     y: 10.38,
        //     drilldown: 'Firefox'
        //    }, {
        //     name: 'Safari',
        //     y: 4.77,
        //     drilldown: 'Safari'
        //    }, {
        //     name: 'Opera',
        //     y: 0.91,
        //     drilldown: 'Opera'
        //    }, {
        //     name: 'Proprietary or Undetectable',
        //     y: 0.2,
        //     drilldown: null
        //    }]
        //   }],
        //   drilldown: {
        //    series: [{
        //     name: 'Microsoft Internet Explorer',
        //     id: 'Microsoft Internet Explorer',
        //     data: [
        //      [
        //       'v11.0',
        //       24.13
        //      ],
        //      [
        //       'v8.0',
        //       17.2
        //      ],
        //      [
        //       'v9.0',
        //       8.11
        //      ],
        //      [
        //       'v10.0',
        //       5.33
        //      ],
        //      [
        //       'v6.0',
        //       1.06
        //      ],
        //      [
        //       'v7.0',
        //       0.5
        //      ]
        //     ]
        //    }, {
        //     name: 'Chrome',
        //     id: 'Chrome',
        //     data: [
        //      [
        //       'v40.0',
        //       5
        //      ],
        //      [
        //       'v41.0',
        //       4.32
        //      ],
        //      [
        //       'v42.0',
        //       3.68
        //      ],
        //      [
        //       'v39.0',
        //       2.96
        //      ],
        //      [
        //       'v36.0',
        //       2.53
        //      ],
        //      [
        //       'v43.0',
        //       1.45
        //      ],
        //      [
        //       'v31.0',
        //       1.24
        //      ],
        //      [
        //       'v35.0',
        //       0.85
        //      ],
        //      [
        //       'v38.0',
        //       0.6
        //      ],
        //      [
        //       'v32.0',
        //       0.55
        //      ],
        //      [
        //       'v37.0',
        //       0.38
        //      ],
        //      [
        //       'v33.0',
        //       0.19
        //      ],
        //      [
        //       'v34.0',
        //       0.14
        //      ],
        //      [
        //       'v30.0',
        //       0.14
        //      ]
        //     ]
        //    }, {
        //     name: 'Firefox',
        //     id: 'Firefox',
        //     data: [
        //      [
        //       'v35',
        //       2.76
        //      ],
        //      [
        //       'v36',
        //       2.32
        //      ],
        //      [
        //       'v37',
        //       2.31
        //      ],
        //      [
        //       'v34',
        //       1.27
        //      ],
        //      [
        //       'v38',
        //       1.02
        //      ],
        //      [
        //       'v31',
        //       0.33
        //      ],
        //      [
        //       'v33',
        //       0.22
        //      ],
        //      [
        //       'v32',
        //       0.15
        //      ]
        //     ]
        //    }, {
        //     name: 'Safari',
        //     id: 'Safari',
        //     data: [
        //      [
        //       'v8.0',
        //       2.56
        //      ],
        //      [
        //       'v7.1',
        //       0.77
        //      ],
        //      [
        //       'v5.1',
        //       0.42
        //      ],
        //      [
        //       'v5.0',
        //       0.3
        //      ],
        //      [
        //       'v6.1',
        //       0.29
        //      ],
        //      [
        //       'v7.0',
        //       0.26
        //      ],
        //      [
        //       'v6.2',
        //       0.17
        //      ]
        //     ]
        //    }, {
        //     name: 'Opera',
        //     id: 'Opera',
        //     data: [
        //      [
        //       'v12.x',
        //       0.34
        //      ],
        //      [
        //       'v28',
        //       0.24
        //      ],
        //      [
        //       'v27',
        //       0.17
        //      ],
        //      [
        //       'v29',
        //       0.16
        //      ]
        //     ]
        //    }]
        //   }
        //  });
    };
    ExpensesPage.prototype.cardClick = function (val) {
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
    ExpensesPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    };
    ExpensesPage.ctorParameters = function () { return [
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_5__["DataBaseSummaryProvider"] }
    ]; };
    ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! raw-loader!./expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/expenses.page.html"),
            styles: [__webpack_require__(/*! ./expenses.page.scss */ "./src/app/self-care/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_5__["DataBaseSummaryProvider"]])
    ], ExpensesPage);
    return ExpensesPage;
}());



/***/ }),

/***/ "./src/app/self-care/expenses/filters/filter.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/self-care/expenses/filters/filter.page.ts ***!
  \***********************************************************/
/*! exports provided: FiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPage", function() { return FiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










var FiltersPage = /** @class */ (function () {
    function FiltersPage(toast, datepipe, modalController, fb, serv, router, statusBar, databaseSummary) {
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
    FiltersPage.prototype.ngOnInit = function () {
        this.todaydate = new Date().toISOString();
        this.year = new Date().getFullYear();
        this.filter = this.fb.group({
            'from_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'end_date': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'event_name': ['']
        });
        this.user_id = localStorage.getItem("user_id");
    };
    Object.defineProperty(FiltersPage.prototype, "f", {
        get: function () { return this.filter.controls; },
        enumerable: true,
        configurable: true
    });
    FiltersPage.prototype.changedate = function (from, end) {
        var _this = this;
        if (from != '' && end != '') {
            var type = 'expense';
            // this.serv.filterbox(this.user_id,from,end,type).subscribe(res=>{
            // this.list_keys =res['events']
            // })
            this.databaseSummary.expenseDatefilter(this.user_id, from, end, type).then(function (res) {
                console.log(res);
                _this.list_keys = res['events'];
            }).catch(function (err) { console.log(err); });
        }
    };
    FiltersPage.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    };
    FiltersPage.prototype.checkbox = function (event, val) {
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
    FiltersPage.prototype.cancel = function () {
        this.filter.reset();
        this.modalController.dismiss();
    };
    FiltersPage.prototype.onSubmit = function (val) {
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
    FiltersPage.prototype.ionViewWillLeave = function () {
        //this.statusBar.backgroundColorByHexString('#ffd32c');
        //this.tabBar.style.display = 'flex';
    };
    FiltersPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    FiltersPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] }
    ]; };
    FiltersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'filters-page',
            template: __webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/filters/filter.page.html"),
            styles: [__webpack_require__(/*! ../expenses.page.scss */ "./src/app/self-care/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"]])
    ], FiltersPage);
    return FiltersPage;
}());



/***/ }),

/***/ "./src/app/self-care/expenses/view-analytics/view-analytics.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/self-care/expenses/view-analytics/view-analytics.page.ts ***!
  \**************************************************************************/
/*! exports provided: viewAnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewAnalyticsPage", function() { return viewAnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filters_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filters/filter.page */ "./src/app/self-care/expenses/filters/filter.page.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












var viewAnalyticsPage = /** @class */ (function () {
    function viewAnalyticsPage(toast, modalController, service, datepipe, statusBar, databaseSummary) {
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
    viewAnalyticsPage.prototype.ngOnInit = function () {
    };
    viewAnalyticsPage.prototype.ionViewWillEnter = function () {
        //this.date = new Date();
        //console.log(this.date)
        //this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        //this.loader=true;
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar');
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
    viewAnalyticsPage.prototype.datetoast = function () {
        this.presentToast('Use filter to get specific data');
    };
    viewAnalyticsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '4000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    viewAnalyticsPage.prototype.charts = function (name, value) {
        var _this = this;
        console.log(value);
        var xaxis_value = [];
        console.log(xaxis_value);
        var yaxis_value = [];
        console.log(yaxis_value);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("event_datetime")).subscribe(function (val) { return xaxis_value.push(_this.datepipe.transform(val, 'MMM dd')); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("value")).subscribe(function (val) { return yaxis_value.push([Number(val)]); });
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
    viewAnalyticsPage.prototype.filterModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filters_filter_page__WEBPACK_IMPORTED_MODULE_8__["FiltersPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data['data'] != undefined) {
                                console.log(data);
                                _this.loader = true;
                                data['event_type'] = 'expense';
                                // this.service.filterChart(this.user_id ,data['data']).subscribe(res=>{         
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
                                _this.databaseSummary.ExpenseViewSummary(data['data']['from_date'], data['data']['end_date'], 'expense', data['data']['event_name'], 'view_analytics').then(function (res) {
                                    console.log(res);
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
    viewAnalyticsPage.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
    };
    viewAnalyticsPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
    ]; };
    viewAnalyticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-analytics',
            template: __webpack_require__(/*! raw-loader!./view-analytics.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/view-analytics/view-analytics.page.html"),
            styles: [__webpack_require__(/*! ../expenses.page.scss */ "./src/app/self-care/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
    ], viewAnalyticsPage);
    return viewAnalyticsPage;
}());



/***/ }),

/***/ "./src/app/self-care/expenses/view-summary/view-summary.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/self-care/expenses/view-summary/view-summary.page.ts ***!
  \**********************************************************************/
/*! exports provided: viewSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSummaryPage", function() { return viewSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");










var viewSummaryPage = /** @class */ (function () {
    function viewSummaryPage(toast, modalCtrl, toastController, alertController, expen_view, statusBar, database, databaseSummary) {
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.expen_view = expen_view;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.expen_key = [];
        this.status = -1;
        this.loader = true;
        this.getChartValue = [];
    }
    viewSummaryPage.prototype.ngOnInit = function () {
    };
    viewSummaryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.user_id = localStorage.getItem("user_id");
        this.from_date1 = new Date();
        this.from_date1.setDate(this.from_date1.getDate() - 30);
        this.end_date1 = new Date();
        // this.expen_view.view_expenses(this.user_id).subscribe(res =>{
        //   this.view_all_expen = res;
        //   this.from_date1= this.view_all_expen.from_date 
        //   this.end_date1= this.view_all_expen.end_date
        //   console.log(this.view_all_expen,'res')  
        //   this.expen_key = Object.keys(this.view_all_expen.expense);
        //   this.getChartValue=this.expen_key.map(res=>{
        //     console.log(res)
        //     let chartType=res.toString();       
        //     const total = this.view_all_expen.expense[chartType].reduce((sum, item) => sum + item.value, 0);    
        //     return total
        //     });
        //     this.loader=false;
        //   console.log(this.getChartValue)
        //   console.log(this.expen_key);
        // })
        this.databaseSummary.ExpenseViewSummary(this.from_date1, this.end_date1, 'expense', 'event_name', 'view_summary').then(function (res) {
            console.log(res);
            _this.view_all_expen = res;
            _this.from_date1 = _this.view_all_expen.from_date;
            _this.end_date1 = _this.view_all_expen.end_date;
            console.log(_this.view_all_expen, 'res');
            _this.expen_key = Object.keys(_this.view_all_expen.expense);
            _this.getChartValue = _this.expen_key.map(function (res) {
                console.log(res);
                var chartType = res.toString();
                var total = _this.view_all_expen.expense[chartType].reduce(function (sum, item) { return sum + Number(item.value); }, 0);
                return total;
            });
            _this.loader = false;
            console.log(_this.getChartValue);
            console.log(_this.expen_key);
        })
            .catch(function (error) { console.log(error); });
        this.statusBar.backgroundColorByHexString('#ffd32c');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    };
    viewSummaryPage.prototype.delete = function (id, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Expenses',
                                message: 'Are you sure want to delete' + ' ' + event + ' ' + 'Expenses' + '?',
                                mode: 'md',
                                buttons: [
                                    {
                                        text: 'Confirm',
                                        handler: function () {
                                            //  this.expen_view.event_view_delete(id).subscribe(res =>{      
                                            //     console.log(res)                                   
                                            //     this.presentToast("Record Deleted Successfully");  
                                            //     this.ionViewWillEnter();          
                                            //   }, error => {
                                            //     console.log(error)
                                            //   })
                                            _this.database.deleteAnEvent(id).then(function (res) {
                                                _this.presentToast("Record Deleted Successfully");
                                                _this.ionViewWillEnter();
                                            }).catch(function (err) { console.log(err); });
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
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
    viewSummaryPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    viewSummaryPage.prototype.toggle = function (i) {
        this.status = i === this.status ? -1 : i;
        console.log(this.status);
    };
    viewSummaryPage.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
    };
    viewSummaryPage.prototype.openCalendar = function () {
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
                        console.log(from_date);
                        this.from_date1 = from_date;
                        this.end_date1 = end_date;
                        console.log(this.from_date1);
                        // this.expen_view.filterAmount(from_date,end_date,this.user_id).subscribe(res=>{
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
                        //  })
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
    viewSummaryPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"] }
    ]; };
    viewSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-summary',
            template: __webpack_require__(/*! raw-loader!./view-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/expenses/view-summary/view-summary.page.html"),
            styles: [__webpack_require__(/*! ../expenses.page.scss */ "./src/app/self-care/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_6__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["settingsService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_7__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_8__["DataBaseSummaryProvider"]])
    ], viewSummaryPage);
    return viewSummaryPage;
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
//# sourceMappingURL=expenses-expenses-module-es5.js.map