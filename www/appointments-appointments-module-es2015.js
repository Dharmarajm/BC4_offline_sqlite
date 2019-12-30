(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments-appointments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/add-appointment/add-appointment.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/appointments/add-appointment/add-appointment.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Add Appointment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n \r\n<ion-content class=\"ion-padding\">\r\n\t<form  [formGroup]=\"addform\" (ngSubmit)=\"addDetails(addform.value)\">\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row >    \r\n        <ion-col size=\"6\">\r\n          <div class=\"date_filter\">\r\n            <h1>Time</h1>\r\n          <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_time.invalid,'ion-touched': submitted && f.event_time.invalid }\">\r\n            <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\" placeholder=\"--:--\"></ion-datetime>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\"><g transform=\"translate(0.25 0.25)\"><path d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\" transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\" transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\" transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/><path d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\" transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\"/></g></svg>\r\n        </ion-item>\r\n      </div>          \r\n    </ion-col>       \r\n    <ion-col size=\"6\">\r\n      <div class=\"date_filter\">\r\n        <h1>Date</h1>\r\n        <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_datetime.invalid,'ion-touched': submitted && f.event_datetime.invalid }\">\r\n          <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\" placeholder=\"-- --- ----\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\r\n        </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n      <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_category.invalid,'ion-touched': submitted && f.event_category.invalid }\">\r\n            <ion-label position=\"floating\">Appointment with</ion-label>\r\n            <ion-select okText=\"Ok\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n            <ion-select-option *ngFor=\"let drop of dropdown\" [value]=\"drop\">{{drop}}</ion-select-option>\r\n            </ion-select>\r\n      </ion-item>\r\n      <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n            <ion-label position=\"floating\">Name of</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item> \r\n            <ion-label position=\"floating\">Description</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n      </ion-item>\r\n      <ion-item button class=\"reminder\">\r\n        <ion-checkbox [checked]=\"reminder\" formControlName=\"reminder\"></ion-checkbox>\r\n        <ion-label>Set remainder to fix appointment</ion-label>\r\n      </ion-item>\r\n      <ion-item button class=\"reminder\">\r\n        <ion-checkbox [checked]=\"fixed_appointment\" formControlName=\"appointment_fixed\"></ion-checkbox>\r\n        <ion-label>Appointment fixed</ion-label>\r\n      </ion-item>\r\n      <!-- <label>\r\n          <ion-checkbox [checked]=\"reminder\" formControlName=\"reminder\"></ion-checkbox>\r\n          Set Reminder\r\n      </label> -->\r\n      <!-- class=\"footer\" -->\r\n          <!-- <div> \r\n            <ion-button expand=\"block\" color=\"secondary\" (click)=\"cancel()\"> \r\n              Cancel\r\n            </ion-button>\r\n            <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\r\n              Save\r\n            </ion-button>\r\n          </div> -->\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\">\r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n        Save\r\n      </button>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/appointments.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/appointments/appointments.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"  defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged(selectedSegment)\">\n    <ion-segment-button value=\"future\" (click)=\"upcoming()\">\n      Upcoming\n    </ion-segment-button>\n    <ion-segment-button value=\"completed\" (click)=\"Completed()\">\n      Completed\n    </ion-segment-button>\n  </ion-segment>\n\n<ng-container *ngIf=\"selectedSegment=='future'\">\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"SearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n    <ion-buttons slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"addPage()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n<div *ngIf=\"!loader\">\n  <ion-list *ngFor=\"let event of display_details\">\n      \n      <ion-list-header>\n        <ion-label *ngIf=\"TommorrowDate==event.created_at\">Tomorrow</ion-label>\n        <ion-label *ngIf=\"TodayDate==event.created_at\">Today</ion-label>\n        <ion-label *ngIf=\"TommorrowDate!=event.created_at && TodayDate!=event.created_at\">{{event.created_at}}</ion-label>\n      </ion-list-header>\n      <ion-item button *ngFor=\"let display of event['events']\">\n        <ion-label text-wrap>\n        <h4 (click)=\"editDetails(display)\">\n          {{display.event_name}}\n        </h4>\n        <!-- : {{display.reminder }} -->\n        <p *ngIf=\"display.reminder == true\" (click)=\"editDetails(display)\">Remainder Set</p>\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3> -->\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</h3> -->\n        <p (click)=\"editDetails(display)\">{{display.description}}</p>\n        </ion-label>\n        <!-- &nbsp;<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.383\" height=\"17.637\" viewBox=\"0 0 17.383 17.637\"><g transform=\"translate(0.161 0.156)\"><path d=\"M105.932,46.624a7.816,7.816,0,0,1-1.745-3.608l-.539-2.787a5.31,5.31,0,0,0-4.314-4.217l-.066-.341a1.873,1.873,0,1,0-3.679.711l.066.342a5.311,5.311,0,0,0-2.429,5.52l.455,2.349a7.767,7.767,0,0,1-.568,4.732l-.035.076a.313.313,0,0,0,.343.436l4.9-.95a1.561,1.561,0,0,0,3.064-.592l4.6-.889a.312.312,0,0,0,.177-.51Zm-5.895,2.888a.939.939,0,0,1-1.1-.742l1.839-.355a.939.939,0,0,1-.742,1.1ZM96.2,36.264a1.249,1.249,0,1,1,2.453-.475l.029.152a5.119,5.119,0,0,0-2.453.475Zm4.763,11.478-2.452.474-4.634.9a8.381,8.381,0,0,0,.413-4.638l-.455-2.349a4.691,4.691,0,0,1,3.71-5.487,4.764,4.764,0,0,1,.9-.086,4.685,4.685,0,0,1,4.589,3.8l.539,2.787a8.445,8.445,0,0,0,1.771,3.761Zm0,0\" transform=\"translate(-89.423 -32.823)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M323.856,35.735A3.121,3.121,0,0,0,320.8,32c-.053,0-.1,0-.156.007l-.038,0,.039.624.041,0c.038,0,.076-.005.114-.005a2.5,2.5,0,0,1,2.449,2.987Zm0,0\" transform=\"translate(-308.093 -30.755)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M318.865,0c-.072,0-.143,0-.214.009l-.059,0,.039.624.062,0c.056,0,.113-.008.17-.008a3.746,3.746,0,0,1,3.673,4.48l.613.122a4.42,4.42,0,0,0,.085-.857,4.375,4.375,0,0,0-4.373-4.373Zm0,0\" transform=\"translate(-306.163)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M324.512,66.24A1.867,1.867,0,0,0,322.676,64a.892.892,0,0,0-.117.01l.041.624a.5.5,0,0,0,.076-.009,1.245,1.245,0,0,1,1.224,1.493Zm0,0\" transform=\"translate(-309.973 -61.506)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M34.424,67.492c.037-.012.074-.021.111-.031l.038-.01-.159-.6-.035.01a1.556,1.556,0,0,0-.153.046,3.126,3.126,0,0,0-1.969,3.951,3.161,3.161,0,0,0,.251.56l.542-.309a2.542,2.542,0,0,1-.2-.45,2.5,2.5,0,0,1,1.576-3.162Zm0,0\" transform=\"translate(-30.845 -64.242)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M1.082,38.508a3.721,3.721,0,0,1,2.164-1.881c.056-.019.113-.034.17-.048l.055-.014-.16-.6-.052.014c-.071.018-.141.037-.211.06A4.373,4.373,0,0,0,.29,41.567a4.418,4.418,0,0,0,.353.786l.542-.31a3.791,3.791,0,0,1-.3-.674,3.724,3.724,0,0,1,.2-2.86Zm0,0\" transform=\"translate(-0.062 -34.561)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M65.594,98.552c.021,0,.043-.008.064-.014l-.179-.6a.723.723,0,0,0-.1.024,1.871,1.871,0,0,0-1.03,2.707l.541-.309a1.243,1.243,0,0,1,.7-1.808Zm0,0\" transform=\"translate(-61.605 -94.119)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M145.311,318.4l-.612.123.091.455a2.388,2.388,0,0,1-.357,1.806l.519.347a3.006,3.006,0,0,0,.45-2.274Zm0,0\" transform=\"translate(-138.799 -305.978)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/></g></svg> -->\n        <ion-label slot=\"end\" class=\"ion-no-margin\">\n          <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3>\n          <p (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</p>         \n          <ion-button class=\"trans_btn\" (click)=\"deleteItem(display,display.event_category)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </ion-label>\n      </ion-item>      \n  </ion-list>\n</div>\n<div *ngIf=\"show_details.length == 0 && !loader\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n    <p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n</div>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\" *ngIf=\"per_page * 10  == show_details.length\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<ion-list *ngIf=\"loader\">\n  <ion-list-header>\n    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ng-container>\n\n\n<ng-container *ngIf=\"selectedSegment=='completed'\">\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"completedSearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n</ion-toolbar>\n<div *ngIf=\"!loader\">\n  <ion-list *ngFor=\"let event of completed_data\">\n      \n      <ion-list-header>\n        <ion-label>{{event.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item button *ngFor=\"let display of event['events']\">\n        <ion-label text-wrap>\n        <h4>\n          {{display.event_name}}\n        </h4>\n        <!-- : {{display.reminder }} -->\n        <p *ngIf=\"display.reminder == true\">Remainder Set</p>\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3> -->\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</h3> -->\n        <p>{{display.description}}</p>\n        </ion-label>\n        <!-- &nbsp;<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.383\" height=\"17.637\" viewBox=\"0 0 17.383 17.637\"><g transform=\"translate(0.161 0.156)\"><path d=\"M105.932,46.624a7.816,7.816,0,0,1-1.745-3.608l-.539-2.787a5.31,5.31,0,0,0-4.314-4.217l-.066-.341a1.873,1.873,0,1,0-3.679.711l.066.342a5.311,5.311,0,0,0-2.429,5.52l.455,2.349a7.767,7.767,0,0,1-.568,4.732l-.035.076a.313.313,0,0,0,.343.436l4.9-.95a1.561,1.561,0,0,0,3.064-.592l4.6-.889a.312.312,0,0,0,.177-.51Zm-5.895,2.888a.939.939,0,0,1-1.1-.742l1.839-.355a.939.939,0,0,1-.742,1.1ZM96.2,36.264a1.249,1.249,0,1,1,2.453-.475l.029.152a5.119,5.119,0,0,0-2.453.475Zm4.763,11.478-2.452.474-4.634.9a8.381,8.381,0,0,0,.413-4.638l-.455-2.349a4.691,4.691,0,0,1,3.71-5.487,4.764,4.764,0,0,1,.9-.086,4.685,4.685,0,0,1,4.589,3.8l.539,2.787a8.445,8.445,0,0,0,1.771,3.761Zm0,0\" transform=\"translate(-89.423 -32.823)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M323.856,35.735A3.121,3.121,0,0,0,320.8,32c-.053,0-.1,0-.156.007l-.038,0,.039.624.041,0c.038,0,.076-.005.114-.005a2.5,2.5,0,0,1,2.449,2.987Zm0,0\" transform=\"translate(-308.093 -30.755)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M318.865,0c-.072,0-.143,0-.214.009l-.059,0,.039.624.062,0c.056,0,.113-.008.17-.008a3.746,3.746,0,0,1,3.673,4.48l.613.122a4.42,4.42,0,0,0,.085-.857,4.375,4.375,0,0,0-4.373-4.373Zm0,0\" transform=\"translate(-306.163)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M324.512,66.24A1.867,1.867,0,0,0,322.676,64a.892.892,0,0,0-.117.01l.041.624a.5.5,0,0,0,.076-.009,1.245,1.245,0,0,1,1.224,1.493Zm0,0\" transform=\"translate(-309.973 -61.506)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M34.424,67.492c.037-.012.074-.021.111-.031l.038-.01-.159-.6-.035.01a1.556,1.556,0,0,0-.153.046,3.126,3.126,0,0,0-1.969,3.951,3.161,3.161,0,0,0,.251.56l.542-.309a2.542,2.542,0,0,1-.2-.45,2.5,2.5,0,0,1,1.576-3.162Zm0,0\" transform=\"translate(-30.845 -64.242)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M1.082,38.508a3.721,3.721,0,0,1,2.164-1.881c.056-.019.113-.034.17-.048l.055-.014-.16-.6-.052.014c-.071.018-.141.037-.211.06A4.373,4.373,0,0,0,.29,41.567a4.418,4.418,0,0,0,.353.786l.542-.31a3.791,3.791,0,0,1-.3-.674,3.724,3.724,0,0,1,.2-2.86Zm0,0\" transform=\"translate(-0.062 -34.561)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M65.594,98.552c.021,0,.043-.008.064-.014l-.179-.6a.723.723,0,0,0-.1.024,1.871,1.871,0,0,0-1.03,2.707l.541-.309a1.243,1.243,0,0,1,.7-1.808Zm0,0\" transform=\"translate(-61.605 -94.119)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M145.311,318.4l-.612.123.091.455a2.388,2.388,0,0,1-.357,1.806l.519.347a3.006,3.006,0,0,0,.45-2.274Zm0,0\" transform=\"translate(-138.799 -305.978)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/></g></svg> -->\n        <ion-label slot=\"end\" class=\"ion-no-margin\">\n          <h3>{{display.event_datetime | date:\"HH:mm\"}}</h3>\n          <p>{{display.event_datetime | date:\"dd-MM-yyyy\"}}</p>\n          <ion-button class=\"trans_btn\" (click)=\"deleteItem(display)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </ion-label>\n      </ion-item>\n  </ion-list>\n</div>\n\n<div *ngIf=\"history_details.length == 0 && !loader\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n    <p>Completed appointments will be reflect here</p>\n    <!-- <p>Add your record to know your day to day activity</p> -->\n  </div>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData1($event)\" *ngIf=\"completepage * 10  == history_details.length\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<ion-list *ngIf=\"loader\">\n  <ion-list-header>\n    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ng-container>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/edit-appointment/edit-appointment.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/appointments/edit-appointment/edit-appointment.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-padding-start\">Edit Appointment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"editform\" *ngIf=\"editform\" (ngSubmit)=\"editDetails(editform.value)\">\r\n    <ion-grid class=\"date_grid\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-datetime display-format=\"HH:mm\" formControlName=\"event_time\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25.643\" height=\"26.128\" viewBox=\"0 0 25.643 26.128\">\r\n            <g transform=\"translate(0.25 0.25)\">\r\n              <path\r\n                d=\"M56.966,85.208a.485.485,0,0,0,.663-.174,8.526,8.526,0,0,1,.91-1.273.485.485,0,1,0-.734-.634,9.49,9.49,0,0,0-1.014,1.419.485.485,0,0,0,.174.663Zm0,0\"\r\n                transform=\"translate(-52.729 -77.067)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M116.172,103.294a.484.484,0,0,0,.343-.142l3.58-3.58a.484.484,0,0,0,.142-.343V94.114a.485.485,0,0,0-.97,0v4.914l-3.438,3.438a.485.485,0,0,0,.343.827Zm0,0\"\r\n                transform=\"translate(-107.504 -86.98)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M23.836,17.338a12.123,12.123,0,0,0,1.11-5.09,12.249,12.249,0,1,0-7.8,11.412,4.65,4.65,0,1,0,6.691-6.323ZM12.7,23.527A11.279,11.279,0,1,1,23.976,12.248a11.16,11.16,0,0,1-.966,4.564,4.617,4.617,0,0,0-1.776-.478A9.468,9.468,0,0,0,7.8,4.143a.485.485,0,0,0,.5.829A8.5,8.5,0,0,1,20.119,16.4a4.661,4.661,0,0,0-3.7,3.5l-.011,0A8.5,8.5,0,0,1,4.253,11.26a.485.485,0,1,0-.963-.113A9.472,9.472,0,0,0,11.6,21.656a9.545,9.545,0,0,0,1.109.065,9.436,9.436,0,0,0,3.581-.707,4.622,4.622,0,0,0,.376,1.795,11.21,11.21,0,0,1-3.965.718Zm8.241,1.132a3.685,3.685,0,1,1,3.684-3.685A3.689,3.689,0,0,1,20.939,24.659Zm0,0\"\r\n                transform=\"translate(-0.45 0)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n              <path\r\n                d=\"M257.717,258.145l-.325-.379a1.726,1.726,0,0,1-.416-1.123v-.264a1.962,1.962,0,0,0-1.727-1.966,1.913,1.913,0,0,0-2.1,1.9v.434a1.715,1.715,0,0,1-.321,1l-.3.423a.485.485,0,0,0,.394.766h1.656v.308a.485.485,0,0,0,.969,0v-.308h1.8a.485.485,0,0,0,.368-.8Zm-3.89-.169a2.677,2.677,0,0,0,.293-1.223v-.434a.947.947,0,0,1,.309-.7.933.933,0,0,1,.729-.24.985.985,0,0,1,.849,1v.264a2.7,2.7,0,0,0,.353,1.333Zm0,0\"\r\n                transform=\"translate(-234.543 -236.34)\" fill=\"#ea4e4e\" stroke=\"#ea4e4e\" stroke-width=\"0.5\" />\r\n            </g>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-datetime display-format=\"DD MMM YYYY\" [min]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\">\r\n            <path\r\n              d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\"\r\n              fill=\"#ea4e4e\" />\r\n            <g transform=\"translate(3.117 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(16.242 9.434)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(3.117 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(3.117 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(6.398 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(9.68 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(12.961 15.996)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n            <g transform=\"translate(16.242 12.715)\">\r\n              <rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\" />\r\n            </g>\r\n          </svg>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_category.invalid,'ion-touched': submitted && f.event_category.invalid }\">\r\n      <ion-label position=\"floating\">Appointment with</ion-label>\r\n      <ion-select okText=\"Ok\" cancelText=\"cancel\" formControlName=\"event_category\">\r\n        <ion-select-option *ngFor=\"let drop of dropdown\" [value]=\"drop\">{{drop}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n      <ion-label position=\"floating\">Name of</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n    <ion-item button class=\"reminder\">\r\n      <ion-checkbox [checked]=\"reminder\" formControlName=\"reminder\"></ion-checkbox>\r\n      <ion-label>Set remainder to fix appointment</ion-label>\r\n    </ion-item>\r\n    <ion-item button class=\"reminder\">\r\n      <ion-checkbox [checked]=\"fixed_appointment\" formControlName=\"appointment_fixed\"></ion-checkbox>\r\n      <ion-label>Appointment fixed</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-label>\r\n      <ion-checkbox [checked]=\"reminder\" formControlName=\"reminder\"></ion-checkbox>\r\n      Set Reminder\r\n    </ion-label> -->\r\n    <!-- class=\"footer\" -->\r\n    <!-- <div> \r\n                <ion-button expand=\"block\" color=\"secondary\" (click)=\"cancel()\"> \r\n                  Cancel\r\n                </ion-button>\r\n                <ion-button type=\"submit\" color=\"secondary\" expand=\"block\">\r\n                  Save\r\n                </ion-button>\r\n              </div> -->\r\n    <div class=\"footer\">\r\n      <ion-button expand=\"block\" (click)=\"cancel()\" [disabled]=\"Progress\">\r\n        Cancel\r\n      </ion-button>\r\n      <button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./src/app/self-care/appointments/add-appointment/add-appointment.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/self-care/appointments/add-appointment/add-appointment.page.ts ***!
  \********************************************************************************/
/*! exports provided: AddAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAppointmentPage", function() { return AddAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");












let AddAppointmentPage = class AddAppointmentPage {
    constructor(toast, alertController, localNotifications, router, fb, route, service, datepipe, statusBar, database, databaseSummary) {
        this.toast = toast;
        this.alertController = alertController;
        this.localNotifications = localNotifications;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.reminder = false;
        this.submitted = false;
        this.Progress = false;
        this.fixed_appointment = false;
    }
    ngOnInit() {
        this.todaydate = new Date().toISOString();
        this.addform = this.fb.group({
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            event_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            event_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            event_category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [''],
            reminder: [this.reminder],
            appointment_fixed: [this.fixed_appointment]
        });
        // this.service.Appointmentdropdown().subscribe(res=>{
        //   this.dropdown=res['enum_masters']
        //   console.log(this.dropdown)
        // })
        this.databaseSummary.getEnumMasters('appointment').then((res) => {
            this.dropdown = res['enum_masters'];
        })
            .catch(error => { console.log(error); });
    }
    get f() { return this.addform.controls; }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#c7a254');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    }
    cancel() {
        this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
        this.addform.reset();
    }
    addDetails(val) {
        this.submitted = true;
        if (this.addform.valid) {
            if (val.appointment_fixed == false && val.reminder == false) {
                this.warning();
            }
            else {
                this.ConfirmEvent(val);
            }
        }
    }
    ConfirmEvent(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(val);
            this.add_alert = yield this.alertController.create({
                header: 'Appointment',
                message: 'Are you sure to submit' + ' ' + (val.event_category).bold() + ' ' + '?',
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
                        handler: () => {
                            this.Progress = true;
                            let new1 = new Date(val.event_time);
                            let gethours = new1.getHours();
                            let getMinutes = new1.getMinutes();
                            let new2 = new Date(val.event_datetime);
                            new2.setHours(gethours);
                            new2.setMinutes(getMinutes);
                            let event_dateTime = new2.toJSON();
                            console.log(event_dateTime);
                            let app_data = {
                                "event_name": val.event_name,
                                "event_datetime": event_dateTime,
                                "event_category": val.event_category,
                                "description": val.description,
                                "event_options": {
                                    'reminder': val.reminder,
                                    'appointment_fixed': val.appointment_fixed
                                },
                                "event_type": "appointment"
                            };
                            // this.service.appointmentDetails(app_data).subscribe(res=>{
                            //         let getEventId:any=res['event']['id'];
                            //         if(val.reminder==true){
                            //           let uniqueTime = new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+new Date().getMilliseconds();
                            //           let getDate:any = new Date(val.event_datetime);
                            //           let getTime:any = new Date(val.event_time);
                            //           let getHours = getTime.getHours();
                            //           let getMinutes = getTime.getMinutes();
                            //           let getSeconds = getTime.getSeconds();
                            //           let getMilliseconds = getTime.getMilliseconds(); 
                            //           getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
                            //           let ID:any=getEventId+"1";
                            //           console.log(ID)
                            //           let repeatAlarmValue = {
                            //                           id: ID,
                            //                           title: val.event_name,
                            //                           text: 'Appointment',
                            //                           lockscreen:true,
                            //                           trigger: {at: new Date(getDate.getTime())},
                            //                           data: { secret:getEventId },
                            //                           foreground: true,
                            //                           //autoClear: true, 
                            //                           sound: null             
                            //                           //vibrate: true,
                            //                         }
                            //           this.scheduleNotifications(repeatAlarmValue);             
                            //         }else{
                            //           this.Progress=false;
                            //           this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
                            //         }
                            // },
                            // error=>{
                            //   this.Progress=false;
                            //   console.log("error")
                            // })
                            this.database.createAnEvent(app_data).then((res) => {
                                let getEventId = res['event_id'];
                                if (val.reminder == true) {
                                    let uniqueTime = new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + new Date().getMilliseconds();
                                    let getDate = new Date(val.event_datetime);
                                    let getTime = new Date(val.event_time);
                                    let getHours = getTime.getHours();
                                    let getMinutes = getTime.getMinutes();
                                    let getSeconds = getTime.getSeconds();
                                    let getMilliseconds = getTime.getMilliseconds();
                                    getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
                                    let ID = getEventId;
                                    console.log(ID);
                                    let repeatAlarmValue = {
                                        id: ID,
                                        title: val.event_name,
                                        text: 'Appointment',
                                        lockscreen: true,
                                        trigger: { at: new Date(getDate.getTime()) },
                                        data: { secret: getEventId },
                                        foreground: true,
                                        //autoClear: true, 
                                        sound: null
                                        //vibrate: true,
                                    };
                                    this.scheduleNotifications(repeatAlarmValue);
                                }
                                else {
                                    this.Progress = false;
                                    this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
                                }
                            })
                                .catch(error => { console.log(error); });
                        }
                    }
                ]
            });
            yield this.add_alert.present();
        });
    }
    warning() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Appointment',
                message: 'whether check reminder or appointment fixed to submit',
                mode: 'md',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    scheduleNotifications(data) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#c7a254');
        this.tabBar.style.display = 'flex';
    }
};
AddAppointmentPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] }
];
AddAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-appointment',
        template: __webpack_require__(/*! raw-loader!./add-appointment.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/add-appointment/add-appointment.page.html"),
        styles: [__webpack_require__(/*! ../appointments.page.scss */ "./src/app/self-care/appointments/appointments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"]])
], AddAppointmentPage);



/***/ }),

/***/ "./src/app/self-care/appointments/appointments.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/self-care/appointments/appointments.module.ts ***!
  \***************************************************************/
/*! exports provided: AppointmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageModule", function() { return AppointmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments.page */ "./src/app/self-care/appointments/appointments.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _add_appointment_add_appointment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-appointment/add-appointment.page */ "./src/app/self-care/appointments/add-appointment/add-appointment.page.ts");
/* harmony import */ var _edit_appointment_edit_appointment_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-appointment/edit-appointment.page */ "./src/app/self-care/appointments/edit-appointment/edit-appointment.page.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");















const routes = [
    {
        path: '',
        component: _appointments_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentsPage"]
    },
    {
        path: 'add-appointment',
        component: _add_appointment_add_appointment_page__WEBPACK_IMPORTED_MODULE_8__["AddAppointmentPage"]
    },
    {
        path: 'edit-appointment',
        component: _edit_appointment_edit_appointment_page__WEBPACK_IMPORTED_MODULE_9__["EditAppointmentPage"]
    }
];
let AppointmentsPageModule = class AppointmentsPageModule {
};
AppointmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentsPage"],
            _add_appointment_add_appointment_page__WEBPACK_IMPORTED_MODULE_8__["AddAppointmentPage"],
            _edit_appointment_edit_appointment_page__WEBPACK_IMPORTED_MODULE_9__["EditAppointmentPage"]
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"],
            _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__["DataBaseSummaryProvider"]
        ]
    })
], AppointmentsPageModule);



/***/ }),

/***/ "./src/app/self-care/appointments/appointments.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/self-care/appointments/appointments.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #c7a254;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item h4 {\n    font-size: 1.1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list ion-item:last-child {\n    --border-color: transparent; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form {\n  padding-bottom: 60px; }\n  form ion-item {\n    --background: transparent;\n    --border-color: #ECECEC;\n    --highlight-color-focused: #483df6;\n    --highlight-color-valid: #483df6;\n    --highlight-color-invalid: #ea4e4e;\n    --padding-start: 0;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin-bottom: 10px; }\n  form ion-item ion-label {\n      --color: #bcbbcf; }\n  form ion-item.reminder {\n      --border-color: transparent; }\n  form ion-item.reminder ion-label {\n        --color: #2c2c2c;\n        margin-left: 10px; }\n  ion-card {\n  box-shadow: none;\n  border: 1px solid #d8dbde;\n  max-height: 120px;\n  min-height: 120px;\n  height: 100%; }\n  ion-card:not(.ion-no-margin) {\n    margin: 0; }\n  ion-card:not(.has_image) {\n    --background: transparent;\n    border: 1px dashed #9e9fa0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-card:not(.has_image) p {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-card ion-card-content {\n    padding: 0;\n    height: 100%; }\n  ion-card ion-card-content img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      background-color: #d8dbde; }\n  ion-card ion-button {\n    --padding-end: 0;\n    --padding-start: 0;\n    --border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0;\n    position: absolute;\n    bottom: 6px;\n    right: 6px; }\n  .edit {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: #483df6;\n  margin: 0;\n  height: auto; }\n  .edit svg {\n    margin: 1px 2px 0 0; }\n  .pres_detail {\n  padding: 0 16px; }\n  .pres_detail h4 {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: unset;\n    line-height: inherit;\n    color: #2c2c2c;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n  .pres_detail h4 span:last-child {\n      font-size: 12px; }\n  .pres_detail p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 4px; }\n  ion-slides {\n  --bullet-background: #484848; }\n  ion-slides ion-img {\n    height: calc(100vh - 235px);\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 40px;\n    width: 100%;\n    background-color: #dddddd; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEQTtFQXhCSSxpQkEyQnNCO0VBMUJ0QixnQkEwQjJCO0VBeEI3QixpQkF3QmdDO0VBdkJoQywwQkF1QjRDO0VBdEI1QyxnQkFzQmtEO0VBckJsRCxvQkFxQjJEO0VBcEIzRCxjQW9Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQTFDRSxvQkFnRG9CO0VBaERwQixhQWdEb0I7RUEvQ3BCLGlCQStDNEI7RUE5QzVCLHlCQThDb0M7VUE5Q3BDLG1CQThDb0M7RUE3Q3BDLHVCQTZDMkM7VUE3QzNDLHNCQTZDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUEzREksZUE2RW9CO0lBNUVwQixnQkE0RXlCO0lBMUUzQixpQkEwRThCO0lBekU5QiwwQkF5RTBDO0lBeEUxQyxrQkF3RWtEO0lBdkVsRCxvQkF1RTJEO0lBdEUzRCxjQXNFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNCdkI7SUFpQ1EsaUJBQWlCLEVBQUE7RUFqQ3pCO0lBdUNRLGlCQUFpQixFQUFBO0VBTXpCO0VBQ0UsU0FBUztFQUNULDBDQUEwQyxFQUFBO0VBRzVDO0VBN0dJLGVBOEdnQjtFQTdHaEIsZ0JBNkdxQjtFQTNHdkIsaUJBMkcwQjtFQTFHMUIsMEJBMEdzQztFQXpHdEMsa0JBeUc4QztFQXhHOUMsb0JBd0d1RDtFQXZHdkQsV0F1RzZEO0VBQzdELGdCQUFRO0VBQ1IseUJBQWlCLEVBQUE7RUFIbkI7SUFLSSxhQUFhLEVBQUE7RUFMakI7SUFRSSxxQkFBYTtJQUNiLGdEQUF3QztJQUF4Qyx3Q0FBd0MsRUFBQTtFQVQ1QztNQVlRLGFBQWEsRUFBQTtFQVpyQjtJQWxHRSxxQkFvSHlCO0lBbkh6QixtQkFtSGdDO0lBbEhoQyxxQkFrSHlDLEVBQUE7RUFsQjNDO01Bc0JVLGVBQWUsRUFBQTtFQU96QjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGlDQUFxQjtFQUNyQiwrQkFBbUI7RUFDbkIsMkJBQWU7RUFDZixxQkFBZ0I7RUFDaEIscUJBQWU7RUFDZixtQkFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQVE7RUFDUiwwQkFBa0I7RUFDbEIsWUFBVTtFQUNWLHFCQUFpQjtFQUNqQixtQkFBYztFQUNkLHFCQUFnQjtFQUNoQixrQkFBYztFQUNkLHVCQUFlLEVBQUE7RUFHakI7O0VBRUUscUJBQWdCO0VBQ2hCLDJDQUFhO0VBQ2IscUJBQWlCO0VBQ2pCLG1CQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUF2S1AsZUF3S2dCO0VBdktoQixnQkF1S3FCO0VBckt2QixpQkFxSzBCO0VBcEsxQiwwQkFvS3NDO0VBbkt0QyxrQkFtSzhDO0VBbEs5QyxvQkFrS3VEO0VBakt2RCxXQWlLNkQsRUFBQTtFQVYvRDs7SUFhSSxpQkFBaUIsRUFBQTtFQWJyQjs7TUFlTSxhQUFhLEVBQUE7RUFLbkI7RUFDRSx5QkFBeUI7RUFuTHZCLGVBb0xnQjtFQW5MaEIsZ0JBbUxxQjtFQWpMdkIsaUJBaUwwQjtFQWhMMUIsMEJBZ0xzQztFQS9LdEMsa0JBK0s4QztFQTlLOUMsb0JBOEt1RDtFQTdLdkQsY0E2S2dFO0VBbktoRSxvQkFvS2tCO0VBcEtsQixhQW9La0I7RUFuS2xCLGlCQW1LMEI7RUFsSzFCLHlCQWtLa0M7VUFsS2xDLG1CQWtLa0M7RUFqS2xDLHdCQWlLMEM7VUFqSzFDLHVCQWlLMEMsRUFBQTtFQUc1QztFQUNFLHlDQUF5QztFQUN6QyxtQkF0TmE7RUF1TmIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBO0VBTFo7SUF4TEksZUFnTWtCO0lBL0xsQixnQkErTHVCO0lBN0x6QixpQkE2TDRCO0lBNUw1QiwwQkE0THdDO0lBM0x4QyxrQkEyTGdEO0lBMUxoRCxpQkEwTHNEO0lBekx0RCxXQXlMNEQ7SUFDMUQsZ0JBQVE7SUFDUiwwQkFBa0I7SUFDbEIsd0JBQWdCO0lBQ2hCLGtDQUEwQjtJQUMxQix1QkFBbUI7SUFDbkIsbUJBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWE7RUFDYixxQkFBaUI7RUFDakIsbUJBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxVQUFVLEVBQUE7RUFQWjtJQVVJLGVBQWUsRUFBQTtFQVZuQjtNQWFNLHFCQUFhO01BQ2IsK0JBQXVCO01BQ3ZCLDZCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsZ0JBQVE7TUFDUiwwQkFBa0IsRUFBQTtFQWxCeEI7SUEzTUksZUFrT2tCO0lBak9sQixnQkFpT3VCO0lBL056QixpQkErTjRCO0lBOU41QiwwQkE4TndDO0lBN054QyxtQkE2TmlEO0lBNU5qRCxvQkE0TjBEO0lBM04xRCxXQTJOZ0U7SUFDOUQseUJBQWE7SUFDYixnQkFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQixFQUFBO0VBN0J2QjtNQWdDTSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQW5DN0I7TUF1Q00sV0FBVztNQUNYLFlBQVk7TUFuUGQsZUFvUG9CO01BblBwQixnQkFtUHlCO01BalAzQixpQkFpUDhCO01BaFA5QixxQkFnUHFDO01BL09yQyxtQkErTzhDO01BOU85QyxvQkE4T3VEO01BN092RCxXQTZPNkQsRUFBQTtFQXpDL0Q7SUE4Q0kscUJBQWE7SUFDYiw4QkFBc0I7SUFDdEIsNkJBQXFCO0lBQ3JCLGdCQUFRO0lBQ1IscUJBQWE7SUFDYiw0QkFBb0I7SUFDcEIsd0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUF4UGQsaUJBeVBxQjtJQXhQckIsbUJBd1A0QjtJQXZQNUIscUJBdVBxQyxFQUFBO0VBekR2QztNQTRETSx5QkFBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLHlCQUF3QjtjQUF4Qix3QkFBd0I7TUF4UTFCLGVBeVFvQjtNQXhRcEIsZ0JBd1F5QjtNQXRRM0IsaUJBc1E4QjtNQXJROUIscUJBcVFxQztNQXBRckMsbUJBb1E4QztNQW5ROUMsb0JBbVF1RDtNQWxRdkQsV0FrUTZELEVBQUE7RUE5RC9EO01Ba0VNLGNBQWMsRUFBQTtFQWxFcEI7TUFzRU0sb0JBQWE7TUFBYixhQUFhLEVBQUE7RUF0RW5CO01BMkVNLG1DQUEyQjtNQUEzQiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLDBCQUFzQjtNQUN0Qix5Q0FBeUM7TUE5UTdDLGlCQStRdUI7TUE5UXZCLG1CQThROEI7TUE3UTlCLHFCQXpDYSxFQUFBO0VBdU9mO1FBa0ZRLGFBQWEsRUFBQTtFQWxGckI7UUFzRlEsYUFBYSxFQUFBO0VBZ0JyQjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQVEsRUFBQTtFQUlaO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBSVo7RUFFRSxnQkFBUTtFQUVSLGtCQUFhO0VBQ2IsaUJBQVk7RUFwVVYsZUFxVWdCO0VBcFVoQixnQkFvVXFCO0VBbFV2QixpQkFrVTBCO0VBalUxQixxQkFpVWlDO0VBaFVqQyxrQkFnVXlDO0VBL1R6QyxvQkErVGtEO0VBOVRsRCxXQThUd0QsRUFBQTtFQUcxRDtFQUNFLG9CQUFvQixFQUFBO0VBR3RCO0VBM1RFLG9CQTRUa0I7RUE1VGxCLGFBNFRrQjtFQTNUbEIsaUJBMlQwQjtFQTFUMUIseUJBMFRrQztVQTFUbEMsbUJBMFRrQztFQXpUbEMsdUJBeVR5QztVQXpUekMsc0JBeVR5QztFQUN6QywwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVUsRUFBQTtFQVBaO0lBVUksU0FBUztJQUNULGtCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWE7SUF6VmIsZUEwVmtCO0lBelZsQixnQkF5VnVCO0lBdlZ6QixpQkF1VjRCO0lBdFY1QiwwQkFzVndDO0lBclZ4QyxrQkFxVmdEO0lBcFZoRCxvQkFvVnlEO0lBblZ6RCxXQW1WK0Q7SUFDN0QsWUFBWSxFQUFBO0VBZmhCO01Ba0JNLHFCQUFhO01BQ2IsK0JBQXVCO01BQ3ZCLDZCQUFxQjtNQUNyQiwyQkFBbUI7TUFDbkIsZ0JBQVE7TUFDUiwwQkFBa0IsRUFBQTtFQXZCeEI7TUEwQk0sa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtFQTNCbEI7UUE1VUksZUF5V3NCO1FBeFd0QixnQkF3VzJCO1FBdFc3QixpQkFzV2dDO1FBcldoQywwQkFxVzRDO1FBcFc1QyxrQkFvV29EO1FBbldwRCxvQkFtVzZEO1FBbFc3RCxjQWtXc0U7UUFDaEUsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlLEVBQUE7RUFuQ3ZCO1FBdUNVLGlCQUFpQixFQUFBO0VBdkMzQjtRQTRDVSxnQkFBZ0IsRUFBQTtFQTVDMUI7UUFpRFUsZUFBZSxFQUFBO0VBakR6QjtJQXdESSxhQUFhLEVBQUE7RUFJakI7RUFDRSxnQkFBUTtFQUNSLHdCQUFnQjtFQUNoQixtQkFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7RUFHbkI7RUFoWUUsb0JBdVlvQjtFQXZZcEIsYUF1WW9CO0VBdFlwQixlQXNZMEI7RUFyWTFCLHlCQXFZa0M7VUFyWWxDLG1CQXFZa0M7RUFwWWxDLHVCQW9ZeUM7VUFwWXpDLHNCQW9ZeUMsRUFBQTtFQVAzQztJQVVNLDJCQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFYdEI7TUFjUSxnQkFBUSxFQUFBO0VBU2hCO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBO0VBRjFCO0lBSUksVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBTHRCO01BU1EsV0FBVztNQUNYLFVBQVU7TUFDVix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWSxFQUFBO0VBZnBCO01BeGFJLGlCQTJic0I7TUExYnRCLGdCQTBiMkI7TUF4YjdCLGlCQXdiZ0M7TUF2YmhDLG9CQXVic0M7TUF0YnRDLGtCQXNiOEM7TUFyYjlDLG9CQXFidUQ7TUFwYnZELGNBbENrQjtNQTRDbEIsb0JBMmFzQjtNQTNhdEIsYUEyYXNCO01BMWF0QixpQkEwYThCO01BemE5Qix5QkF5YXNDO2NBemF0QyxtQkF5YXNDO01BeGF0Qyx1QkF3YTZDO2NBeGE3QyxzQkF3YTZDO01BQ3pDLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7RUF0QmxCO01BeUJNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUyxFQUFBO0VBS2Y7RUFDRSxZQUFZLEVBQUE7RUFHZDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUE3YmxCLG9CQThia0I7RUE5YmxCLGFBOGJrQjtFQTdibEIsaUJBNmIwQjtFQTViMUIseUJBNGJrQztVQTVibEMsbUJBNGJrQztFQTNibEMsd0JBMmIwQztVQTNiMUMsdUJBMmIwQyxFQUFBO0VBSDVDO0lBNWNJLGtCQWtkcUI7SUFqZHJCLGdCQWlkMEI7SUEvYzVCLGlCQStjK0I7SUE5Yy9CLDBCQThjMkM7SUE3YzNDLGtCQTZjbUQ7SUE1Y25ELG9CQTRjNEQ7SUEzYzVELGNBbENrQixFQUFBO0VBdWVwQjtJQTVjSSxrQkFzZHFCO0lBcmRyQixnQkFxZDBCO0lBbmQ1QixpQkFtZCtCO0lBbGQvQiwwQkFrZDJDO0lBamQzQyxrQkFpZG1EO0lBaGRuRCxvQkFnZDREO0lBL2M1RCxjQStjcUU7SUFDbkUsWUFBWSxFQUFBO0VBWGhCO01BYU0sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUFLekI7RUFDRSxjQUFjO0VBQ2QseUJBemZjO0VBMGZkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkE5ZmMsRUFBQTtFQXVmaEI7SUFqZUksaUJBMmVvQjtJQTFlcEIsZ0JBMGV5QjtJQXhlM0IsaUJBd2U4QjtJQXZlOUIsMEJBdWUwQztJQXRlMUMsa0JBc2VrRDtJQXJlbEQsb0JBcWUyRDtJQXBlM0QsY0FsQ2tCO0lBdWdCaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFkckI7TUFnQk0seUNBQXlDLEVBQUE7RUFoQi9DO0lBb0JJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUF0QnBCO0lBeUJJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixVQUFVLEVBQUE7RUFyQ2Q7SUF3Q0ksY0FBYyxFQUFBO0VBR2xCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsVUFBVTtJQUNWLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBUHhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsVUFBVTtJQUNWLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQSxFQUFBO0VBR3hCO0VBQ0UscUJBQWEsRUFBQTtFQURmO0lBR0ksbUVBQWE7SUFDYiwyQkFBZTtJQUNmLG1CQUFlO0lBQ2YsZ0JBQVE7SUFDUixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRLEVBQUE7RUFWWjtNQXRoQkksaUJBa2lCc0I7TUFqaUJ0QixnQkFpaUIyQjtNQS9oQjdCLGlCQStoQmdDO01BOWhCaEMsb0JBOGhCc0M7TUE3aEJ0QyxpQkE2aEI2QztNQTVoQjdDLG9CQTRoQnNEO01BM2hCdEQsY0EyaEIrRCxFQUFBO0VBWmpFO0lBZ0JJLFlBQVksRUFBQTtFQWhCaEI7SUFtQkksb0lBQXVFO0lBQXZFLDBFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVLEVBQUE7RUExQmQ7TUF0aEJJLGlCQWtqQnNCO01BampCdEIsZ0JBaWpCMkI7TUEvaUI3QixpQkEraUJnQztNQTlpQmhDLG9CQThpQnNDO01BN2lCdEMsZ0JBNmlCNEM7TUE1aUI1QyxvQkE0aUJxRDtNQTNpQnJELGNBMmlCOEQ7TUFDMUQsU0FBUyxFQUFBO0VBN0JmO01BdGhCSSxpQkFzakJzQjtNQXJqQnRCLGdCQXFqQjJCO01BbmpCN0IsaUJBbWpCZ0M7TUFsakJoQyxvQkFrakJzQztNQWpqQnRDLGdCQWlqQjRDO01BaGpCNUMsb0JBZ2pCcUQ7TUEvaUJyRCxjQStpQjhEO01BQzFELFNBQVMsRUFBQTtFQUlmO0VBR00sMkJBQWUsRUFBQTtFQUhyQjtFQVlJLFVBQVUsRUFBQTtFQVpkO0lBU1EsdUJBQWUsRUFBQTtFQU12QjtFQUlRLHVCQUFlLEVBQUE7RUFRdkI7RUFFRSxnQkFBZ0IsRUFBQTtFQUZsQjtJQUlJLFNBQVM7SUFDVCxrQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFhO0lBN2xCYixlQThsQmtCO0lBN2xCbEIsZ0JBNmxCdUI7SUEzbEJ6QixpQkEybEI0QjtJQTFsQjVCLDBCQTBsQndDO0lBemxCeEMsa0JBeWxCZ0Q7SUF4bEJoRCxvQkF3bEJ5RDtJQXZsQnpELFdBdWxCK0Q7SUFDN0QsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQVZsQjtJQWFJLHFCQUFhO0lBQ2IsK0JBQXVCO0lBQ3ZCLDZCQUFxQjtJQUNyQiwyQkFBbUI7SUFDbkIsZ0JBQVE7SUFDUiwwQkFBa0IsRUFBQTtFQUl0QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFFBQVEsRUFBQTtFQUpWO0lBTUkseUJBQWE7SUFDYiwyQkFBZTtJQUNmLG1CQUFlO0lBQ2YsZ0JBQVEsRUFBQTtFQUlaO0VBQ0UscUJBQWE7RUFDYixrQkFBa0IsRUFBQTtFQUZwQjtJQXpuQkksaUJBNm5Cb0I7SUE1bkJwQixnQkE0bkJ5QjtJQTFuQjNCLGlCQTBuQjhCO0lBem5COUIsMEJBeW5CMEM7SUF4bkIxQyxrQkF3bkJrRDtJQXZuQmxELG9CQXVuQjJEO0lBdG5CM0QsY0FuQ2E7SUEwcEJYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQVQzQjtJQXpuQkksZUFxb0JrQjtJQXBvQmxCLGdCQW9vQnVCO0lBbG9CekIsaUJBa29CNEI7SUFqb0I1QixvQkFpb0JrQztJQWhvQmxDLGdCQWdvQndDO0lBL25CeEMsb0JBK25CaUQ7SUE5bkJqRCxjQW5DYTtJQWtxQlgsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFFakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFuQmY7SUFzQkksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7SUFsb0JkLG9CQW1vQm9CO0lBbm9CcEIsYUFtb0JvQjtJQWxvQnBCLGlCQWtvQjRCO0lBam9CNUIseUJBaW9Cb0M7WUFqb0JwQyxtQkFpb0JvQztJQWhvQnBDLHdCQWdvQjRDO1lBaG9CNUMsdUJBZ29CNEMsRUFBQTtFQTNCOUM7TUE2Qk0sVUFBVSxFQUFBO0VBN0JoQjtJQWlDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1Isb0JBQW9CLEVBQUE7RUFyQ3hCO01BZ0RNLGNBQWMsRUFBQTtFQzFzQnBCO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBSVo7RUFDRSxxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RURxQmpCLGVDcEJnQjtFRHFCaEIsZ0JDckJxQjtFRHVCdkIsaUJDdkIwQjtFRHdCMUIscUJDeEJpQztFRHlCakMsbUJDekIwQztFRDBCMUMsb0JDMUJtRDtFRDJCbkQsV0MzQnlELEVBQUE7RUFHM0Q7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURpQkksaUJDUnNCO0lEU3RCLGdCQ1QyQjtJRFc3QixpQkNYZ0M7SURZaEMsMEJDWjRDO0lEYTVDLG1CQ2JxRDtJRGNyRCxvQkNkOEQ7SURlOUQsY0FsQ2tCLEVBQUE7RUNVcEI7SURpQkksaUJDSnNCO0lES3RCLGdCQ0wyQjtJRE83QixpQkNQZ0M7SURRaEMsMEJDUjRDO0lEUzVDLG1CQ1RxRDtJRFVyRCxvQkNWOEQ7SURXOUQsY0FsQ2tCLEVBQUE7RUNVcEI7SURpQkksZUNBb0I7SURDcEIsZ0JDRHlCO0lERzNCLGlCQ0g4QjtJREk5QixxQkNKcUM7SURLckMsbUJDTDhDO0lETTlDLG9CQ051RDtJRE92RCxjQ1BnRTtJQUM1RCxlQUFlLEVBQUE7RUFsQnJCO0lBcUJNLDJCQUFlLEVBQUE7RUFyQnJCO0VEaUJJLGtCQ1FxQjtFRFByQixnQkNPMEI7RURMNUIsaUJDSytCO0VESi9CLDBCQ0kyQztFREgzQyxtQkNHb0Q7RURGcEQsb0JDRTZEO0VERDdELFdDQ21FO0VBQ2pFLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWEsRUFBQTtFQS9CakI7SUFpQ00sb0JBQW9CLEVBQUE7RUFLMUI7RUFDRSxvQkFBb0IsRUFBQTtFQUR0QjtJQUlJLHlCQUFhO0lBQ2IsdUJBQWU7SUFDZixrQ0FBMEI7SUFDMUIsZ0NBQXdCO0lBQ3hCLGtDQUEwQjtJQUMxQixrQkFBZ0I7SUQ5QmhCLGVDK0JrQjtJRDlCbEIsZ0JDOEJ1QjtJRDVCekIsaUJDNEI0QjtJRDNCNUIsb0JDMkJrQztJRDFCbEMsZ0JDMEJ3QztJRHpCeEMsb0JDeUJpRDtJRHhCakQsY0FsQ2tCO0lDMkRoQixtQkFBbUIsRUFBQTtFQVh2QjtNQWNNLGdCQUFRLEVBQUE7RUFkZDtNQWtCTSwyQkFBZSxFQUFBO0VBbEJyQjtRQW9CUSxnQkFBUTtRQUNSLGlCQUFpQixFQUFBO0VBTXpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtFQUxkO0lBUUksU0FBUyxFQUFBO0VBUmI7SUFZSSx5QkFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFmdkI7TURoREksZUNpRW9CO01EaEVwQixnQkNnRXlCO01EOUQzQixpQkM4RDhCO01EN0Q5QixxQkM2RHFDO01ENURyQyxtQkM0RDhDO01EM0Q5QyxvQkMyRHVEO01EMUR2RCxjQzBEZ0UsRUFBQTtFQWpCbEU7SUFzQkksVUFBVTtJQUNWLFlBQVksRUFBQTtFQXZCaEI7TUEwQk0sWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7RUE1Qi9CO0lBaUNJLGdCQUFjO0lBQ2Qsa0JBQWdCO0lBQ2hCLG9CQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUlkO0VEN0ZJLGlCQzhGa0I7RUQ3RmxCLGdCQzZGdUI7RUQzRnpCLGlCQzJGNEI7RUQxRjVCLHFCQzBGbUM7RUR6Rm5DLGtCQ3lGMkM7RUR4RjNDLG9CQ3dGb0Q7RUR2RnBELGNBL0JlO0VDdUhmLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFIZDtJQU1JLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lEdkdJLGVDMkdrQjtJRDFHbEIsZ0JDMEd1QjtJRHhHekIsaUJDd0c0QjtJRHZHNUIscUJDdUdtQztJRHRHbkMsaUJDc0cwQztJRHJHMUMsb0JDcUdtRDtJRHBHbkQsY0FsQ2tCO0lBNENsQixvQkMyRm9CO0lEM0ZwQixhQzJGb0I7SUQxRnBCLGVDMEYwQjtJRHpGMUIseUJDeUZrQztZRHpGbEMsbUJDeUZrQztJRHhGbEMseUJDd0ZpRDtZRHhGakQsOEJDd0ZpRDtJQUkvQyxTQUFTLEVBQUE7RUFUYjtNQU9NLGVBQWUsRUFBQTtFQVByQjtJRHZHSSxlQ29Ia0I7SURuSGxCLGdCQ21IdUI7SURqSHpCLGlCQ2lINEI7SURoSDVCLHFCQ2dIbUM7SUQvR25DLG1CQytHNEM7SUQ5RzVDLG9CQzhHcUQ7SUQ3R3JELGNDNkc4RDtJQUM1RCxlQUFlLEVBQUE7RUFHbkI7RUFDRSw0QkFBb0IsRUFBQTtFQUR0QjtJQUlJLDJCQUEyQjtJQUMzQixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCLEVBQUE7RUFJN0I7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJRHBJSSxpQkN3SW9CO0lEdklwQixnQkN1SXlCO0lEckkzQixpQkNxSThCO0lEcEk5QixvQkNvSW9DO0lEbklwQyxnQkNtSTBDO0lEbEkxQyxvQkNrSW1EO0lEakluRCxjQWxDa0I7SUNvS2hCLFNBQVMsRUFBQTtFQUxiO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPLEVBQUE7RUFYWDtJQWVJLGtCQUFrQixFQUFBO0VBZnRCO01BbUJNLGlCQUFpQixFQUFBO0VBbkJ2QjtNQXVCTSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGYtY2FyZS9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuJG15LWdyZXktYmx1ZSA6ICNlYTRlNGU7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIC8vIGlvbi1pdGVte1xuICAvLyAgIGlvbi1sYWJlbHtcbiAgLy8gICAgIC0tY29sb3I6ICM3YjdiN2I7XG4gIC8vICAgfVxuICAvLyB9XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjMWMxYzFjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGM2ODtcbiAgICAgIHBhZGRpbmc6IDFweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhcjpub3QoLm5vLWJhY2tncm91bmQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2M3YTI1NDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjZmZjtcclxuICAtLWNvbG9yOiAjMmMyYzJjO1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIEBpbmNsdWRlIGZvbnQoMTJweCwgNjAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlY2VjZWM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNFQ0VDRUM7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlbWluZGVye1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGJkZTtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICY6bm90KC5pb24tbm8tbWFyZ2luKXtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICY6bm90KC5oYXNfaW1hZ2UpIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzllOWZhMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYmRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAkcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbjogMXB4IDJweCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJlc19kZXRhaWx7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICBoNHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgdW5zZXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcclxuICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzQ4NDg0ODtcclxuICBcclxuICBpb24taW1nIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRlX2ZpbHRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGgxe1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZGF0ZXRpbWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHJcbiAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/self-care/appointments/appointments.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/self-care/appointments/appointments.page.ts ***!
  \*************************************************************/
/*! exports provided: AppointmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPage", function() { return AppointmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");













let AppointmentsPage = class AppointmentsPage {
    constructor(toast, alertController, toastController, router, route, service, datepipe, statusBar, databaseSummary, database) {
        this.toast = toast;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.service = service;
        this.datepipe = datepipe;
        this.statusBar = statusBar;
        this.databaseSummary = databaseSummary;
        this.database = database;
        this.selectedSegment = "future";
        this.show_details = [];
        this.per_page = 1;
        this.per_page_limit = 10;
        this.per_page_offset = 0;
        this.appointmentData = [];
        this.appoint_details = [];
        this.getDate = this.datepipe.transform(new Date(), "dd MMM yyyy");
        this.history_details = [];
        this.completed_data = [];
        this.completepage = 1;
        this.completepage_page_limit = 10;
        this.completepage_offset = 0;
        this.route.queryParams.subscribe(params => {
            if (params && params.specialsecond) {
                this.selectedSegment = params.specialsecond;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.loader = true;
        this.statusBar.backgroundColorByHexString('#c7a254');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        let todayDate = new Date();
        this.TodayDate = this.datepipe.transform(todayDate, "dd MMM yyyy");
        let tommorrowDate = todayDate.setDate(todayDate.getDate() + 1);
        this.TommorrowDate = this.datepipe.transform(tommorrowDate, "dd MMM yyyy");
        if (this.selectedSegment == 'future') {
            this.upcoming();
        }
        else if (this.selectedSegment == 'completed') {
            this.Completed();
        }
    }
    upcoming() {
        // this.service.commonAppointmentDateEventList('appointment',this.per_page).subscribe(res=>{
        //   console.log(res)
        //   this.show_details = res['event_list'];
        //   this.groupBy(this.show_details);
        // })
        this.per_page = 1;
        this.per_page_offset = 0;
        console.log("upcoming");
        this.databaseSummary.getAllEvents('appointment', 'New', this.per_page_offset).then(res => {
            console.log(res);
            this.show_details = res['event_list'];
            console.log(this.show_details);
            this.groupBy(this.show_details);
        }).catch(err => { console.log(err); });
    }
    Completed() {
        // this.service.completedAppointmentEventList('appointment',this.per_page).subscribe(res=>{
        //   console.log(res)
        //   this.history_details = res['event_list'];
        //   this.groupBy1(this.history_details);
        // })
        this.completepage = 1;
        this.completepage_offset = 0;
        console.log("Completed");
        this.databaseSummary.getAllEvents('appointment', 'history', this.completepage_offset).then(res => {
            console.log(res);
            this.history_details = res['event_list'];
            console.log(this.history_details);
            this.groupBy1(this.history_details);
        }).catch(err => { console.log(err); });
    }
    segmentChanged(event) {
        console.log(event);
        this.selectedSegment = event;
        //this.ionViewWillEnter();
    }
    addPage() {
        this.router.navigate(["self-care-tabs/tabs/tab1/appointments/add-appointment"]);
    }
    groupBy(data) {
        let records = data.map(item => ({
            id: item.id,
            event_id: item.event_id,
            created_at: item.created_at,
            description: item.description,
            event_name: item.event_name,
            event_datetime: item.event_datetime,
            event_category: item.event_category,
            value: item.value,
            event_type: item.event_type,
            reminder: item['event_options']['reminder'],
            appointment_fixed: item['event_options']['appointment_fixed']
        }));
        let valueOther = [];
        let valueCurrent = [];
        const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])()))).subscribe(val => {
            console.log(val);
            if (val) {
                let todaydate = this.datepipe.transform(val[0].event_datetime, "dd MMM yyyy");
                let mapDate;
                let todayDate = new Date();
                let tommorrowDate = todayDate.setDate(todayDate.getDate() + 1);
                let mapTomorrowDate = this.datepipe.transform(tommorrowDate, "dd MMM yyyy");
                console.log(mapTomorrowDate, todaydate);
                mapDate = this.datepipe.transform(val[0].event_datetime, "dd MMM yyyy");
                let ff = { "created_at": mapDate, "events": val };
                if (mapDate != 'Today' && mapDate != "Tommorrow") {
                    valueOther.push(ff);
                }
                else {
                    valueCurrent.push(ff);
                }
            }
        });
        valueCurrent.map(item => valueOther.unshift(item));
        console.log(valueOther);
        this.display_details = valueOther;
        this.loader = false;
        console.log("upcomingC");
    }
    deleteItem(id, show) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Appointments',
                message: 'Are you sure want to delete' + ' ' + show + ' ' + 'Alert' + ' ' + '?',
                mode: 'md',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            // this.service.commonDeleteEvent(id).subscribe(res => {
                            //   console.log(res)
                            //   this.ionViewWillEnter();
                            //   this.presentToast("Record Deleted Successfully");
                            // }, error => {
                            //   console.log(error)
                            // })
                            this.database.deleteAnEvent(id).then(res => {
                                this.ionViewWillEnter();
                                this.presentToast("Record Deleted Successfully");
                            }).catch(err => { console.log(err); });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    SearchItem(event) {
        let search = event.detail.value;
        console.log(event);
        this.per_page = 1;
        this.per_page_offset = 0;
        // this.service.commonAppointmentSearchList('appointment',search).subscribe(res=>{
        //   console.log(res)
        //   this.show_details= res['event_list'];
        //   this.groupBy(this.show_details)
        // }, error=>{
        //     this.presentToast("Server slow, Please try again")
        // })
        this.databaseSummary.getAllEventsSearchList('appointment', search, 'New', this.per_page_offset).then(res => {
            this.show_details = res['event_list'];
            this.groupBy(this.show_details);
        }).catch(err => { console.log(err); });
    }
    editDetails(view) {
        let navigationExtras = {
            queryParams: {
                viewAppointment: JSON.stringify(view),
                check: 'edit'
            }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/appointments/edit-appointment'], navigationExtras);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.per_page += 1;
            this.per_page_offset = this.per_page * 10 - 10;
            let data = [];
            this.databaseSummary.getAllEvents('appointment', 'New', this.per_page_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                console.log(data, 'load1');
                let concat = yield this.show_details.concat(data);
                this.appointmentData = yield concat.map(item => ({
                    id: item.id,
                    event_id: item.event_id,
                    created_at: item.created_at,
                    description: item.description,
                    event_name: item.event_name,
                    event_datetime: item.event_datetime,
                    event_category: item.event_category,
                    value: item.value,
                    event_type: item.event_type,
                    reminder: item['event_options']['reminder'],
                    appointment_fixed: item['event_options']['appointment_fixed']
                }));
                let valueOther = [];
                let valueCurrent = [];
                console.log(this.appointmentData);
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.appointmentData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let todaydate = this.datepipe.transform(val[0].event_datetime, "dd MMM yyyy");
                        console.log(this.getDate + 1 == todaydate);
                        console.log(this.getDate + 1, todaydate);
                        let mapDate;
                        let todayDate = new Date();
                        let tommorrowDate = todayDate.setDate(todayDate.getDate() + 1);
                        let mapTomorrowDate = this.datepipe.transform(tommorrowDate, "dd MMM yyyy");
                        console.log(mapTomorrowDate, todaydate);
                        mapDate = this.datepipe.transform(val[0].event_datetime, "dd MMM yyyy");
                        let ff = { "created_at": mapDate, "events": val };
                        if (mapDate != 'Today' && mapDate != "Tommorrow") {
                            valueOther.push(ff);
                        }
                        else {
                            valueCurrent.push(ff);
                        }
                    }
                });
                valueCurrent.map(item => valueOther.unshift(item));
                this.appointmentData = valueOther;
                this.appointmentData.map(item => this.display_details.push(item));
                console.log(this.display_details, "data");
                event.target.complete();
                if (this.per_page * 10 != this.display_details.length) {
                    event.target.disabled = true;
                }
            })).catch(err => { console.log(err); });
            // this.service.commonAppointmentDateEventList("appointment",this.per_page).subscribe(res => {
            //     let data:any[] = res['event_list'];
            //     let concat=this.show_details.concat(data);
            //     this.appointmentData=concat.map(item => ({
            //       id:item.id,
            //       event_id: item.event_id,
            //       created_at: item.created_at,
            //       description: item.description,
            //       event_name: item.event_name,
            //       event_datetime:item.event_datetime,
            //       event_category:item.event_category,
            //       value: item.value,
            //       event_type: item.event_type,
            //       reminder:item['event_options']['reminder'],
            //       appointment_fixed:item['event_options']['appointment_fixed']
            //     }));
            //     let valueOther = [];
            //     let valueCurrent = [];
            //     console.log(this.appointmentData)
            //     const example = from(this.appointmentData).pipe(
            //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //     console.log(val)
            //     if(val){
            //       let todaydate:any=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
            //       console.log(this.getDate+1==todaydate)
            //       console.log(this.getDate+1,todaydate)
            //       let mapDate:any;
            //       let todayDate:any=new Date(); 
            //       let tommorrowDate=todayDate.setDate(todayDate.getDate() + 1);
            //       let mapTomorrowDate:any=this.datepipe.transform(tommorrowDate,"dd MMM yyyy");
            //       console.log(mapTomorrowDate,todaydate)
            //       mapDate=this.datepipe.transform(val[0].event_datetime,"dd MMM yyyy")
            //       let ff = { "created_at":mapDate,"events" :val };
            //       if(mapDate!='Today' && mapDate!="Tommorrow"){
            //         valueOther.push(ff);
            //       }else{
            //         valueCurrent.push(ff)
            //       }
            //     }
            //   })
            //     valueCurrent.map(item => valueOther.unshift(item));
            //     this.appointmentData=valueOther;
            //     this.appointmentData.map(item => this.display_details.push(item));
            //     console.log(this.display_details,"data")
            //     event.target.complete();
            //     if (this.per_page *10 !=this.display_details.length){
            //         event.target.disabled = true;
            //     }
            // },error=>{
            //     event.target.disabled = true;
            // })
        }, 500);
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    }
    completedSearchItem(event) {
        let search = event.detail.value;
        console.log(event);
        this.completepage = 1;
        this.completepage_offset = 0;
        // this.service.completedAppointmentSearchList('appointment',search).subscribe(res=>{
        //   console.log(res)
        //   this.history_details= res['event_list'];
        // this.groupBy1(this.history_details)
        // }, error=>{
        //     this.presentToast("Server slow, Please try again")
        // })
        this.databaseSummary.getAllEventsSearchList('appointment', search, 'history', this.completepage_offset).then(res => {
            this.history_details = res['event_list'];
            this.groupBy1(this.history_details);
        }).catch(err => { console.log(err); });
    }
    groupBy1(data) {
        let records = data.map(item => ({
            id: item.id,
            created_at: item.created_at,
            description: item.description,
            event_name: item.event_name,
            event_datetime: item.event_datetime,
            event_category: item.event_category,
            value: item.value,
            event_type: item.event_type,
            reminder: item['event_options']['reminder'],
            appointment_fixed: item['event_options']['appointment_fixed']
        }));
        let valueCurrent = [];
        const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])()))).subscribe(val => {
            console.log(val);
            if (val) {
                let ff = { "created_at": val[0].event_datetime, "events": val };
                valueCurrent.push(ff);
            }
        });
        this.completed_data = valueCurrent;
        this.loader = false;
        console.log(this.completed_data);
    }
    loadData1(event) {
        setTimeout(() => {
            console.log('Done');
            this.completepage += 1;
            this.completepage_offset = this.completepage * 10 - 10;
            console.log(this.completepage_offset);
            let data = [];
            this.databaseSummary.getAllEvents('appointment', 'history', this.completepage_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                console.log(data, 'load1');
                let concat = yield this.history_details.concat(data);
                this.appointmentData = yield concat.map(item => ({
                    id: item.id,
                    event_id: item.event_id,
                    created_at: item.created_at,
                    description: item.description,
                    event_name: item.event_name,
                    event_datetime: item.event_datetime,
                    event_category: item.event_category,
                    value: item.value,
                    event_type: item.event_type,
                    reminder: item['event_options']['reminder'],
                    appointment_fixed: item['event_options']['appointment_fixed']
                }));
                let valueOther = [];
                console.log(this.appointmentData);
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.appointmentData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = { "created_at": val[0].event_datetime, "events": val };
                        valueOther.push(ff);
                        console.log(valueOther);
                    }
                });
                this.completed_data = valueOther;
                event.target.complete();
                if (this.completepage * 10 != this.completed_data.length) {
                    event.target.disabled = true;
                }
            })).catch(err => { console.log(err); });
            // this.service.completedAppointmentEventList("appointment",this.completepage).subscribe(res => {
            //     let data:any[] = res['event_list'];
            //     let concat=this.history_details.concat(data);
            //     this.appointmentData=concat.map(item => ({
            //       id:item.id,
            //       event_id: item.event_id,
            //       created_at: item.created_at,
            //       description: item.description,
            //       event_name: item.event_name,
            //       event_datetime:item.event_datetime,
            //       event_category:item.event_category,
            //       value: item.value,
            //       event_type: item.event_type,
            //       reminder:item['event_options']['reminder'],
            //       appointment_fixed:item['event_options']['appointment_fixed']
            //     }));
            //     let valueOther = [];
            //     console.log(this.appointmentData)
            //     const example = from(this.appointmentData).pipe(
            //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //     console.log(val)
            //     if(val){  
            //       let ff = { "created_at":val[0].event_datetime,"events" :val };
            //       valueOther.push(ff) 
            //       console.log(valueOther)          
            //     }
            //   })
            //     this.completed_data=valueOther;
            //     event.target.complete();
            //     if (this.completepage *10 !=this.completed_data.length){
            //         event.target.disabled = true;
            //     }
            // },error=>{
            //     event.target.disabled = true;
            // })
        }, 500);
    }
};
AppointmentsPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"] }
];
AppointmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointments',
        template: __webpack_require__(/*! raw-loader!./appointments.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/appointments.page.html"),
        styles: [__webpack_require__(/*! ./appointments.page.scss */ "./src/app/self-care/appointments/appointments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_11__["DataBaseSummaryProvider"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_10__["DatabaseProvider"]])
], AppointmentsPage);



/***/ }),

/***/ "./src/app/self-care/appointments/edit-appointment/edit-appointment.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/self-care/appointments/edit-appointment/edit-appointment.page.ts ***!
  \**********************************************************************************/
/*! exports provided: EditAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentPage", function() { return EditAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");











let EditAppointmentPage = class EditAppointmentPage {
    constructor(localNotifications, alertController, toastController, router, route, service, datepipe, fb, statusBar, database, databaseSummary) {
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.service = service;
        this.datepipe = datepipe;
        this.fb = fb;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.submitted = false;
        this.Progress = false;
        this.fixed_appointment = false;
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.viewAppointment) {
                this.data = JSON.parse(params.viewAppointment);
                this.getRoute = params.check;
                console.log(this.data);
                if (this.getRoute == 'home') {
                    this.reminder = this.data['event_options']['reminder'];
                    this.fixed_appointment = this.data['event_options']['appointment_fixed'];
                }
                else {
                    this.reminder = this.data['reminder'];
                    this.fixed_appointment = this.data['appointment_fixed'];
                }
                // this.reminder=this.data['reminder'] || this.data['event_options']['reminder'];
                // this.fixed_appointment=this.data['appointment_fixed'] || this.data['event_options']['appointment_fixed'];         
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.todaydate = new Date().toISOString();
        this.editform = this.fb.group({
            event_name: [this.data['event_name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            event_time: [this.data['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            event_datetime: [this.data['event_datetime'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            event_category: [this.data['event_category'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            description: [this.data['description']],
            reminder: [this.reminder],
            appointment_fixed: [this.fixed_appointment]
        });
        console.log(this.editform);
        this.statusBar.backgroundColorByHexString('#c7a254');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        // this.service.Appointmentdropdown().subscribe(res=>{
        //   this.dropdown=res['enum_masters']
        //   console.log(this.dropdown)
        // })
        this.databaseSummary.getEnumMasters('appointment').then((res) => {
            this.dropdown = res['enum_masters'];
        })
            .catch(error => { console.log(error); });
    }
    get f() { return this.editform.controls; }
    cancel() {
        if (this.getRoute == 'home') {
            this.router.navigate(["self-care-tabs/tabs/tab1"]);
        }
        else {
            this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
        }
    }
    editDetails(val) {
        this.submitted = true;
        if (this.editform.valid) {
            if (val.appointment_fixed == false && val.reminder == false) {
                this.warning();
            }
            else {
                this.ConfirmEvent(val);
            }
            // console.log(val,this.reminder)
            // this.Progress=true;
            // let date:any=this.datepipe.transform(val.event_datetime,"dd MMM yyyy")
            // let app_data:any = {
            //           "event_name": val.event_name,
            //           "event_datetime": date+ " "+ val.event_time,
            //           "event_category": val.event_category,
            //           "description": val.description,
            //           "event_options":{
            //             'reminder':val.reminder
            //           },
            //           "event_type": "appointment"
            //     }
            // this.service.EditDetails(this.data['id'],app_data).subscribe(res=>{
            //   let getEventId:any=this.data['id'];
            //   if(val.reminder==true && this.reminder==false || val.reminder==true && this.reminder==true){
            //     this.assignOrCancelNotifications(val,getEventId,'assign');
            //   }else if(val.reminder==false && this.reminder==true){
            //     this.assignOrCancelNotifications(val,getEventId,'cancel');
            //   }else{
            //     this.Progress=false;
            //     this.router.navigate(["self-care-tabs/tabs/tab1/appointments"])
            //   }
            // },
            // error=>{
            //   console.log("error");
            // })
        }
    }
    ConfirmEvent(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Appointment',
                message: 'The information updated will be replaced with old one',
                mode: 'md',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.Progress = true;
                            let new1 = new Date(val.event_time);
                            let gethours = new1.getHours();
                            let getMinutes = new1.getMinutes();
                            let new2 = new Date(val.event_datetime);
                            new2.setHours(gethours);
                            new2.setMinutes(getMinutes);
                            let event_dateTime = new2.toJSON();
                            let app_data = {
                                "id": this.data["id"],
                                "event_name": val.event_name,
                                "event_datetime": event_dateTime,
                                "event_category": val.event_category,
                                "description": val.description,
                                "event_options": {
                                    'reminder': val.reminder,
                                    'appointment_fixed': val.appointment_fixed
                                },
                                "event_type": "appointment",
                                "created_at": this.data['created_at']
                            };
                            // this.service.EditDetails(this.data['id'],app_data).subscribe(res=>{
                            //   let getEventId:any=this.data['id'];
                            //   if(val.reminder==true && this.reminder==false || val.reminder==true && this.reminder==true){
                            //     this.assignOrCancelNotifications(val,getEventId,'assign');
                            //   }else if(val.reminder==false && this.reminder==true){
                            //     this.assignOrCancelNotifications(val,getEventId,'cancel');
                            //   }else{
                            //     this.Progress=false;
                            //     if(this.getRoute=='home'){
                            //       this.router.navigate(["self-care-tabs/tabs/tab1"]) 
                            //     }else{
                            //       this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]) 
                            //     }
                            //   }
                            // },
                            // error=>{
                            //   console.log("error");
                            // })
                            this.database.updateAnEvent(this.data['event_id'], app_data).then((res) => {
                                let getEventId = this.data['event_id'];
                                if (val.reminder == true && this.reminder == false || val.reminder == true && this.reminder == true) {
                                    this.assignOrCancelNotifications(val, getEventId, 'assign');
                                }
                                else if (val.reminder == false && this.reminder == true) {
                                    this.assignOrCancelNotifications(val, getEventId, 'cancel');
                                }
                                else {
                                    this.Progress = false;
                                    if (this.getRoute == 'home') {
                                        this.router.navigate(["self-care-tabs/tabs/tab1"]);
                                    }
                                    else {
                                        this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
                                    }
                                }
                            })
                                .catch(error => { console.log(error); });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    warning() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Appointment',
                message: 'whether check reminder or appointment fixed to submit',
                mode: 'md',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    assignOrCancelNotifications(val, getEventId, notify) {
        let ID = getEventId;
        if (notify == 'assign') {
            let getDate = new Date(val.event_datetime);
            let getTime = new Date(val.event_time);
            let getHours = getTime.getHours();
            let getMinutes = getTime.getMinutes();
            let getSeconds = getTime.getSeconds();
            let getMilliseconds = getTime.getMilliseconds();
            getDate.setHours(getHours, getMinutes, getSeconds, getMilliseconds);
            console.log(ID);
            let repeatAlarmValue = {
                id: ID,
                title: val.event_name,
                text: 'Appointment',
                lockscreen: true,
                trigger: { at: new Date(getDate.getTime()) },
                data: { secret: getEventId },
                foreground: true,
                //autoClear: true, 
                sound: null
                //vibrate: true,
            };
            this.scheduleNotifications(repeatAlarmValue);
        }
        else if (notify == 'cancel') {
            this.localNotifications.cancel(ID).then((res) => {
                console.log(res);
                this.Progress = false;
                if (this.getRoute == 'home') {
                    this.router.navigate(["self-care-tabs/tabs/tab1"]);
                }
                else {
                    this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
                }
            });
        }
    }
    scheduleNotifications(data) {
        this.localNotifications.schedule(data);
        this.Progress = false;
        if (this.getRoute == 'home') {
            this.router.navigate(["self-care-tabs/tabs/tab1"]);
        }
        else {
            this.router.navigate(["self-care-tabs/tabs/tab1/appointments"]);
        }
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#c7a254');
        this.tabBar.style.display = 'flex';
    }
};
EditAppointmentPage.ctorParameters = () => [
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_9__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__["DataBaseSummaryProvider"] }
];
EditAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-appointment',
        template: __webpack_require__(/*! raw-loader!./edit-appointment.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/appointments/edit-appointment/edit-appointment.page.html"),
        styles: [__webpack_require__(/*! ../appointments.page.scss */ "./src/app/self-care/appointments/appointments.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_9__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_10__["DataBaseSummaryProvider"]])
], EditAppointmentPage);



/***/ })

}]);
//# sourceMappingURL=appointments-appointments-module-es2015.js.map