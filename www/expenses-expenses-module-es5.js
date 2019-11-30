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

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ffd32c;\n  --color: #ffffff; }\n  .btn:not(:last-child) {\n  margin-right: 16px; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px;\n    margin-bottom: 5px; }\n  ion-card {\n  height: 100%;\n  margin: 0;\n  border-radius: 5px;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-card ion-card-content {\n    width: 100%; }\n  ion-row h5 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  ion-row h5 svg {\n    margin: 5px; }\n  ion-row h4 {\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none; }\n  ion-row:not(.projections) ion-col.last h4 {\n  color: #0e9bff; }\n  ion-row:not(.projections) ion-col.current h4 {\n  color: #ffd32c; }\n  ion-row:not(.projections) ion-col.year h4 {\n  color: #c7a254; }\n  ion-row:not(.projections) ion-col.analytics h5 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-row.projections {\n  border-top: 1px solid #e0e3e5;\n  margin-top: 15px;\n  padding: 10px 11px; }\n  ion-row.projections h5 {\n    color: #2c2c2c;\n    margin: 2px 0; }\n  ion-row.projections h4 {\n    color: #ea4e4e;\n    margin: 2px 0; }\n  ion-item-group {\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-item-group > .expense_card svg {\n    position: absolute;\n    right: 0;\n    top: 25px; }\n  ion-item-group ion-item {\n    --background: transparent;\n    --border-color: transparent;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --inner-padding-end: 0; }\n  ion-item-group ion-item ion-text {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: right;\n      line-height: inherit;\n      color: #8b9398;\n      display: block; }\n  ion-item-group ion-item h5 {\n      font-size: 1.1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #0e9bff;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h4 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap;\n      word-break: break-all;\n      padding-right: 25px; }\n  ion-item-group ion-item h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      padding-right: 75px;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item p {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      white-space: pre-wrap;\n      word-break: break-all; }\n  ion-item-group ion-item ion-avatar {\n      margin-right: 10px;\n      background: #0e9bff;\n      white-space: pre-wrap;\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #ffffff; }\n  ion-item-group ion-item ion-avatar:before {\n        content: \"\";\n        border-left: 1px dashed #ddd;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n        bottom: 0; }\n  ion-item-group .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e;\n    position: absolute;\n    right: 0;\n    top: 12px;\n    margin: 4px 0; }\n  ion-item-group .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .expand {\n  height: auto; }\n  .collapse {\n  height: 0;\n  padding: 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-text {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px;\n    border-bottom: 1px solid #ddd; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin: 4px 0 0;\n  --padding-start: 0;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-note {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398;\n  display: block; }\n  ion-note span {\n    color: #2c2c2c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REE7RUF2QkksaUJBMEJzQjtFQXpCdEIsZ0JBeUIyQjtFQXZCN0IsaUJBdUJnQztFQXRCaEMsMEJBc0I0QztFQXJCNUMsZ0JBcUJrRDtFQXBCbEQsb0JBb0IyRDtFQW5CM0QsY0FtQm9FLEVBQUE7RUFIdEU7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtFQVVNLGlCQUFpQixFQUFBO0VBVnZCO0VBYU0sb0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBbkJ4QjtFQXdCTSxhQUFhLEVBQUE7RUFLbkI7RUFFSSxxQkFBYSxFQUFBO0VBSWpCO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7RUF6Q0Usb0JBK0NvQjtFQS9DcEIsYUErQ29CO0VBOUNwQixpQkE4QzRCO0VBN0M1Qix5QkE2Q29DO1VBN0NwQyxtQkE2Q29DO0VBNUNwQyx1QkE0QzJDO1VBNUMzQyxzQkE0QzJDO0VBQ3pDLG9CQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQVh0QjtJQWNNLG1CQUFtQixFQUFBO0VBZHpCO0lBMURJLGVBNEVvQjtJQTNFcEIsZ0JBMkV5QjtJQXpFM0IsaUJBeUU4QjtJQXhFOUIsMEJBd0UwQztJQXZFMUMsa0JBdUVrRDtJQXRFbEQsb0JBc0UyRDtJQXJFM0QsY0FxRW9FO0lBQ2hFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBdEJ4QjtJQTJCUSxlQUFlLEVBQUE7RUEzQnZCO0lBaUNR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LG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURvQkksaUJDWHNCO0lEWXRCLGdCQ1oyQjtJRGM3QixpQkNkZ0M7SURlaEMsMEJDZjRDO0lEZ0I1QyxtQkNoQnFEO0lEaUJyRCxvQkNqQjhEO0lEa0I5RCxjQWhDa0I7SUNlZCxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFLeEI7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQix5Q0FBeUM7RURpQnpDLG9CQ2hCa0I7RURnQmxCLGFDaEJrQjtFRGlCbEIsaUJDakIwQjtFRGtCMUIseUJDbEJrQztVRGtCbEMsbUJDbEJrQztFRG1CbEMsd0JDbkIwQztVRG1CMUMsdUJDbkIwQyxFQUFBO0VBTDVDO0lBUUksV0FBVyxFQUFBO0VBSWY7RURSSSxpQkNVb0I7RURUcEIsZ0JDU3lCO0VEUDNCLGlCQ084QjtFRE45QiwwQkNNMEM7RURMMUMsZ0JDS2dEO0VESmhELG9CQ0l5RDtFREh6RCxjQWhDa0IsRUFBQTtFQ2lDcEI7SUFLTSxXQUFXLEVBQUE7RUFMakI7RURSSSxrQkNrQnFCO0VEakJyQixnQkNpQjBCO0VEZjVCLGlCQ2UrQjtFRGQvQiwwQkNjMkM7RURiM0MsZ0JDYWlEO0VEWmpELG9CQ1kwRDtFRFgxRCxXQ1dnRSxFQUFBO0VBVmxFO0VBaUJVLGNEOUNLLEVBQUE7RUM2QmY7RUF1QlUsY0Q3Q08sRUFBQTtFQ3NCakI7RUE2QlUsY0R2RFcsRUFBQTtFQzBCckI7RURTRSxvQkN5QjBCO0VEekIxQixhQ3lCMEI7RUR4QjFCLGVDd0JnQztFRHZCaEMseUJDdUJ3QztVRHZCeEMsbUJDdUJ3QztFRHRCeEMsd0JDc0JnRDtVRHRCaEQsdUJDc0JnRCxFQUFBO0VBbENsRDtFQXlDSSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBM0N0QjtJQThDTSxjRC9FYztJQ2dGZCxhQUFhLEVBQUE7RUEvQ25CO0lBbURNLGNEMUVVO0lDMkVWLGFBQWEsRUFBQTtFQUtuQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkNBQTJDLEVBQUE7RUFIN0M7SUFPTSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVMsRUFBQTtFQVRmO0lBY0kseUJBQWE7SUFDYiwyQkFBZTtJQUNmLHFCQUFnQjtJQUNoQixtQkFBYztJQUNkLHNCQUFvQixFQUFBO0VBbEJ4QjtNRGpFSSxlQ3NGb0I7TURyRnBCLGdCQ3FGeUI7TURuRjNCLGlCQ21GOEI7TURsRjlCLDBCQ2tGMEM7TURqRjFDLGlCQ2lGaUQ7TURoRmpELG9CQ2dGMEQ7TUQvRTFELGNDK0VtRTtNQUMvRCxjQUFjLEVBQUE7RUF0QnBCO01EakVJLGlCQzJGc0I7TUQxRnRCLGdCQzBGMkI7TUR4RjdCLGlCQ3dGZ0M7TUR2RmhDLDBCQ3VGNEM7TUR0RjVDLG1CQ3NGcUQ7TURyRnJELG9CQ3FGOEQ7TURwRjlELGNBNUJhO01DaUhULHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUE3QnpCO01EakVJLGtCQ2tHdUI7TURqR3ZCLGdCQ2lHNEI7TUQvRjlCLGlCQytGaUM7TUQ5RmpDLDBCQzhGNkM7TUQ3RjdDLG1CQzZGc0Q7TUQ1RnRELG9CQzRGK0Q7TUQzRi9ELGNBaENrQjtNQzRIZCxxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLG1CQUFtQixFQUFBO0VBcEN6QjtNRGpFSSxpQkN3R3NCO01Edkd0QixnQkN1RzJCO01Eckc3QixpQkNxR2dDO01EcEdoQywwQkNvRzRDO01Ebkc1QyxtQkNtR3FEO01EbEdyRCxvQkNrRzhEO01Eakc5RCxjQWhDa0I7TUNrSWQsbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQixxQkFBcUIsRUFBQTtFQTFDM0I7TURqRUksZUMrR29CO01EOUdwQixnQkM4R3lCO01ENUczQixpQkM0RzhCO01EM0c5QixxQkMyR3FDO01EMUdyQyxtQkMwRzhDO01Eekc5QyxvQkN5R3VEO01EeEd2RCxjQ3dHZ0U7TUFDNUQscUJBQXFCO01BQ3JCLHFCQUFxQixFQUFBO0VBaEQzQjtNQW9ETSxrQkFBa0I7TUFDbEIsbUJEM0lTO01DNElULHFCQUFxQjtNRHZIdkIsZUN3SG9CO01EdkhwQixnQkN1SHlCO01EckgzQixpQkNxSDhCO01EcEg5QixxQkNvSHFDO01EbkhyQyxrQkNtSDZDO01EbEg3QyxvQkNrSHNEO01Eakh0RCxjQ2lIK0QsRUFBQTtFQXZEakU7UUEwRFEsV0FBVztRQUNYLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTLEVBQUE7RUEvRGpCO0lEakVJLGtCQzJJcUI7SUQxSXJCLGdCQzBJMEI7SUR4STVCLGlCQ3dJK0I7SUR2SS9CLDBCQ3VJMkM7SUR0STNDLG1CQ3NJb0Q7SURySXBELG9CQ3FJNkQ7SURwSTdELFdDb0ltRTtJQUNqRSxnQkFBUTtJQUNSLDBCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFoRmpCO01Ba0ZNLG9CQUFvQixFQUFBO0VBSzFCO0VBQ0UsWUFBWSxFQUFBO0VBRWQ7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0VBR1o7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2Ysa0NBQTBCO0VBQzFCLGdDQUF3QjtFQUN4QixrQ0FBMEI7RUFDMUIsa0JBQWdCO0VEdktoQixlQ3dLa0I7RUR2S2xCLGdCQ3VLdUI7RURyS3pCLGlCQ3FLNEI7RURwSzVCLG9CQ29La0M7RURuS2xDLGdCQ21Ld0M7RURsS3hDLG9CQ2tLaUQ7RURqS2pELGNBaENrQjtFQ2tNaEIsbUJBQW1CLEVBQUE7RUFUdkI7SUFZTSxnQkFBUSxFQUFBO0VBWmQ7SUFnQk0sa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBYTtJQUNiLG9CQUFnQjtJQUNoQixrQkFBYTtJQUNiLHVCQUFlO0lBQ2YsU0FBUyxFQUFBO0VBS2Y7RUQ5TEksa0JDK0xtQjtFRDlMbkIsZ0JDOEx3QjtFRDVMMUIsaUJDNEw2QjtFRDNMN0Isb0JDMkxtQztFRDFMbkMsZ0JDMEx5QztFRHpMekMsb0JDeUxrRDtFRHhMbEQsY0N3TDJELEVBQUE7RUFHN0Q7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJRGxNSSxpQkNzTW9CO0lEck1wQixnQkNxTXlCO0lEbk0zQixpQkNtTThCO0lEbE05QixvQkNrTW9DO0lEak1wQyxnQkNpTTBDO0lEaE0xQyxvQkNnTW1EO0lEL0xuRCxjQWhDa0I7SUNnT2hCLFNBQVMsRUFBQTtFQUxiO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPLEVBQUE7RUFYWDtJQWVJLGtCQUFrQjtJQUNsQiw2QkFBNkIsRUFBQTtFQWhCakM7TUFtQk0saUJBQWlCLEVBQUE7RUFuQnZCO01BdUJNLGdCQUFnQixFQUFBO0VBS3RCO0VEOU5JLGlCQ2dPb0I7RUQvTnBCLGdCQytOeUI7RUQ3TjNCLGlCQzZOOEI7RUQ1TjlCLG9CQzROb0M7RUQzTnBDLGdCQzJOMEM7RUQxTjFDLG9CQzBObUQ7RUR6Tm5ELGNBaENrQjtFQzBQaEIsZUFBZTtFQUNmLGtCQUFnQjtFQUNoQixrQkFBZ0I7RUFDaEIsa0JBQWdCLEVBQUE7RUFOcEI7SUFRTSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFLdEI7RUQ1T0ksaUJDNk9rQjtFRDVPbEIsZ0JDNE91QjtFRDFPekIsaUJDME80QjtFRHpPNUIsb0JDeU9rQztFRHhPbEMsZ0JDd093QztFRHZPeEMsb0JDdU9pRDtFRHRPakQsY0EvQmlCO0VDc1FqQixjQUFjLEVBQUE7RUFGaEI7SUFLSSxjRDFRZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGYtY2FyZS9leHBlbnNlcy9leHBlbnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZkMzJjO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5idG46bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgaDUge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIG5vbmUpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLnByb2plY3Rpb25zKSB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgJi5sYXN0IHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGFsZXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBjb2xvcjogJGV4cGVuc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnllYXIge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGNvbG9yOiAkYXBwb2ludG1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuYW5hbHl0aWNzIHtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgY2VudGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucHJvamVjdGlvbnMge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUzZTU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMXB4O1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG4gICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6ICRyZXBvcnQ7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbS1ncm91cCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICYgPiAuZXhwZW5zZV9jYXJke1xyXG4gICAgc3Zne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCBjYXBpdGFsaXplLCByaWdodCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGFsZXJ0KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogJGFsZXJ0O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAjZmZmZmZmKTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNwYW57XHJcbiAgICAgIC8vICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAvLyAgICAgICAgIEBpbmNsdWRlIGZvbnQoMTZweCwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgI2ZmZmZmZik7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRyYW5zX2J0biB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uY29sbGFwc2Uge1xyXG4gIGhlaWdodDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgbWluLWhlaWdodDogNDJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3ByZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXJpcHBsZS1jb2xvcjogI2ZhNWU2MTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIEBpbmNsdWRlIGZvbnQoMC43NXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxufVxyXG5cclxuLmRhdGVfZmlsdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaDF7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIGlvbi1kYXRldGltZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbl90b29sc3tcclxuICAudHJhbnNfYnRue1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgc3Zne1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZGFya19ncmV5KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxuICB9XHJcbn0iXX0= */"

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
        this.expense.main_chart(this.user_id).subscribe(function (res) {
            _this.main_chart = res;
            console.log(_this.Last_Mon_len);
            for (var i in _this.main_chart.Currentmonth) {
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
            var hashdata = { name: 'Current Month', colorByPoint: true, data: _this.data, color: '#ffd32c' };
            _this.values.push(hashdata);
            _this.mainChart();
        });
        this.databaseSummary.expenseCalculation().then(function (res) {
            console.log(res);
        });
        // this.databaseSummary.expenseCalculation().then(res=>{
        //   console.log(res)
        // })
        this.expense.view_expenses_cal(this.user_id).subscribe(function (res) {
            _this.expense_val = res;
            console.log(Math.round(_this.expense_val.MonthProjection));
        });
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