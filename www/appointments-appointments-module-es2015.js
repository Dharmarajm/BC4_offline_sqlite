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

module.exports = "<ion-header class=\"main-header\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"  defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged(selectedSegment)\">\n    <ion-segment-button value=\"future\" (click)=\"upcoming()\">\n      Upcoming\n    </ion-segment-button>\n    <ion-segment-button value=\"completed\" (click)=\"Completed()\">\n      Completed\n    </ion-segment-button>\n  </ion-segment>\n\n<ng-container *ngIf=\"selectedSegment=='future'\">\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"SearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n    <ion-buttons slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"addPage()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n<div *ngIf=\"!loader\">\n  <ion-list *ngFor=\"let event of display_details\">\n      \n      <ion-list-header>\n        <ion-label *ngIf=\"TommorrowDate==event.created_at\">Tomorrow</ion-label>\n        <ion-label *ngIf=\"TodayDate==event.created_at\">Today</ion-label>\n        <ion-label *ngIf=\"TommorrowDate!=event.created_at && TodayDate!=event.created_at\">{{event.created_at}}</ion-label>\n      </ion-list-header>\n      <ion-item button *ngFor=\"let display of event['events']\">\n        <ion-label text-wrap>\n        <h4 (click)=\"editDetails(display)\">\n          {{display.event_name}}\n        </h4>\n        <!-- : {{display.reminder }} -->\n        <p *ngIf=\"display.reminder == true\" (click)=\"editDetails(display)\">Remainder Set</p>\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3> -->\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</h3> -->\n        <p (click)=\"editDetails(display)\">{{display.description}}</p>\n        </ion-label>\n        <!-- &nbsp;<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.383\" height=\"17.637\" viewBox=\"0 0 17.383 17.637\"><g transform=\"translate(0.161 0.156)\"><path d=\"M105.932,46.624a7.816,7.816,0,0,1-1.745-3.608l-.539-2.787a5.31,5.31,0,0,0-4.314-4.217l-.066-.341a1.873,1.873,0,1,0-3.679.711l.066.342a5.311,5.311,0,0,0-2.429,5.52l.455,2.349a7.767,7.767,0,0,1-.568,4.732l-.035.076a.313.313,0,0,0,.343.436l4.9-.95a1.561,1.561,0,0,0,3.064-.592l4.6-.889a.312.312,0,0,0,.177-.51Zm-5.895,2.888a.939.939,0,0,1-1.1-.742l1.839-.355a.939.939,0,0,1-.742,1.1ZM96.2,36.264a1.249,1.249,0,1,1,2.453-.475l.029.152a5.119,5.119,0,0,0-2.453.475Zm4.763,11.478-2.452.474-4.634.9a8.381,8.381,0,0,0,.413-4.638l-.455-2.349a4.691,4.691,0,0,1,3.71-5.487,4.764,4.764,0,0,1,.9-.086,4.685,4.685,0,0,1,4.589,3.8l.539,2.787a8.445,8.445,0,0,0,1.771,3.761Zm0,0\" transform=\"translate(-89.423 -32.823)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M323.856,35.735A3.121,3.121,0,0,0,320.8,32c-.053,0-.1,0-.156.007l-.038,0,.039.624.041,0c.038,0,.076-.005.114-.005a2.5,2.5,0,0,1,2.449,2.987Zm0,0\" transform=\"translate(-308.093 -30.755)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M318.865,0c-.072,0-.143,0-.214.009l-.059,0,.039.624.062,0c.056,0,.113-.008.17-.008a3.746,3.746,0,0,1,3.673,4.48l.613.122a4.42,4.42,0,0,0,.085-.857,4.375,4.375,0,0,0-4.373-4.373Zm0,0\" transform=\"translate(-306.163)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M324.512,66.24A1.867,1.867,0,0,0,322.676,64a.892.892,0,0,0-.117.01l.041.624a.5.5,0,0,0,.076-.009,1.245,1.245,0,0,1,1.224,1.493Zm0,0\" transform=\"translate(-309.973 -61.506)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M34.424,67.492c.037-.012.074-.021.111-.031l.038-.01-.159-.6-.035.01a1.556,1.556,0,0,0-.153.046,3.126,3.126,0,0,0-1.969,3.951,3.161,3.161,0,0,0,.251.56l.542-.309a2.542,2.542,0,0,1-.2-.45,2.5,2.5,0,0,1,1.576-3.162Zm0,0\" transform=\"translate(-30.845 -64.242)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M1.082,38.508a3.721,3.721,0,0,1,2.164-1.881c.056-.019.113-.034.17-.048l.055-.014-.16-.6-.052.014c-.071.018-.141.037-.211.06A4.373,4.373,0,0,0,.29,41.567a4.418,4.418,0,0,0,.353.786l.542-.31a3.791,3.791,0,0,1-.3-.674,3.724,3.724,0,0,1,.2-2.86Zm0,0\" transform=\"translate(-0.062 -34.561)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M65.594,98.552c.021,0,.043-.008.064-.014l-.179-.6a.723.723,0,0,0-.1.024,1.871,1.871,0,0,0-1.03,2.707l.541-.309a1.243,1.243,0,0,1,.7-1.808Zm0,0\" transform=\"translate(-61.605 -94.119)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M145.311,318.4l-.612.123.091.455a2.388,2.388,0,0,1-.357,1.806l.519.347a3.006,3.006,0,0,0,.45-2.274Zm0,0\" transform=\"translate(-138.799 -305.978)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/></g></svg> -->\n        <ion-label slot=\"end\" class=\"ion-no-margin\">\n          <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3>\n          <p (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</p>         \n          <ion-button class=\"trans_btn\" (click)=\"deleteItem(display.event_id,display.event_category)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </ion-label>\n      </ion-item>      \n  </ion-list>\n</div>\n<div *ngIf=\"show_details.length == 0 && !loader\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n</div>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\" *ngIf=\"per_page * 10  == show_details.length\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<ion-list *ngIf=\"loader\">\n  <ion-list-header>\n    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ng-container>\n\n\n<ng-container *ngIf=\"selectedSegment=='completed'\">\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n<ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"completedSearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n</ion-toolbar>\n<div *ngIf=\"!loader\">\n  <ion-list *ngFor=\"let event of completed_data\">\n      \n      <ion-list-header>\n        <ion-label>{{event.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item button *ngFor=\"let display of event['events']\">\n        <ion-label text-wrap>\n        <h4>\n          {{display.event_name}}\n        </h4>\n        <!-- : {{display.reminder }} -->\n        <p *ngIf=\"display.reminder == true\">Remainder Set</p>\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"HH:mm\"}}</h3> -->\n        <!-- <h3 (click)=\"editDetails(display)\">{{display.event_datetime | date:\"dd-MM-yyyy\"}}</h3> -->\n        <p>{{display.description}}</p>\n        </ion-label>\n        <!-- &nbsp;<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.383\" height=\"17.637\" viewBox=\"0 0 17.383 17.637\"><g transform=\"translate(0.161 0.156)\"><path d=\"M105.932,46.624a7.816,7.816,0,0,1-1.745-3.608l-.539-2.787a5.31,5.31,0,0,0-4.314-4.217l-.066-.341a1.873,1.873,0,1,0-3.679.711l.066.342a5.311,5.311,0,0,0-2.429,5.52l.455,2.349a7.767,7.767,0,0,1-.568,4.732l-.035.076a.313.313,0,0,0,.343.436l4.9-.95a1.561,1.561,0,0,0,3.064-.592l4.6-.889a.312.312,0,0,0,.177-.51Zm-5.895,2.888a.939.939,0,0,1-1.1-.742l1.839-.355a.939.939,0,0,1-.742,1.1ZM96.2,36.264a1.249,1.249,0,1,1,2.453-.475l.029.152a5.119,5.119,0,0,0-2.453.475Zm4.763,11.478-2.452.474-4.634.9a8.381,8.381,0,0,0,.413-4.638l-.455-2.349a4.691,4.691,0,0,1,3.71-5.487,4.764,4.764,0,0,1,.9-.086,4.685,4.685,0,0,1,4.589,3.8l.539,2.787a8.445,8.445,0,0,0,1.771,3.761Zm0,0\" transform=\"translate(-89.423 -32.823)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M323.856,35.735A3.121,3.121,0,0,0,320.8,32c-.053,0-.1,0-.156.007l-.038,0,.039.624.041,0c.038,0,.076-.005.114-.005a2.5,2.5,0,0,1,2.449,2.987Zm0,0\" transform=\"translate(-308.093 -30.755)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M318.865,0c-.072,0-.143,0-.214.009l-.059,0,.039.624.062,0c.056,0,.113-.008.17-.008a3.746,3.746,0,0,1,3.673,4.48l.613.122a4.42,4.42,0,0,0,.085-.857,4.375,4.375,0,0,0-4.373-4.373Zm0,0\" transform=\"translate(-306.163)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M324.512,66.24A1.867,1.867,0,0,0,322.676,64a.892.892,0,0,0-.117.01l.041.624a.5.5,0,0,0,.076-.009,1.245,1.245,0,0,1,1.224,1.493Zm0,0\" transform=\"translate(-309.973 -61.506)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M34.424,67.492c.037-.012.074-.021.111-.031l.038-.01-.159-.6-.035.01a1.556,1.556,0,0,0-.153.046,3.126,3.126,0,0,0-1.969,3.951,3.161,3.161,0,0,0,.251.56l.542-.309a2.542,2.542,0,0,1-.2-.45,2.5,2.5,0,0,1,1.576-3.162Zm0,0\" transform=\"translate(-30.845 -64.242)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M1.082,38.508a3.721,3.721,0,0,1,2.164-1.881c.056-.019.113-.034.17-.048l.055-.014-.16-.6-.052.014c-.071.018-.141.037-.211.06A4.373,4.373,0,0,0,.29,41.567a4.418,4.418,0,0,0,.353.786l.542-.31a3.791,3.791,0,0,1-.3-.674,3.724,3.724,0,0,1,.2-2.86Zm0,0\" transform=\"translate(-0.062 -34.561)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M65.594,98.552c.021,0,.043-.008.064-.014l-.179-.6a.723.723,0,0,0-.1.024,1.871,1.871,0,0,0-1.03,2.707l.541-.309a1.243,1.243,0,0,1,.7-1.808Zm0,0\" transform=\"translate(-61.605 -94.119)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/><path d=\"M145.311,318.4l-.612.123.091.455a2.388,2.388,0,0,1-.357,1.806l.519.347a3.006,3.006,0,0,0,.45-2.274Zm0,0\" transform=\"translate(-138.799 -305.978)\" fill=\"#0e9bff\" stroke=\"#0e9bff\" stroke-width=\"0.3\"/></g></svg> -->\n        <ion-label slot=\"end\" class=\"ion-no-margin\">\n          <h3>{{display.event_datetime | date:\"HH:mm\"}}</h3>\n          <p>{{display.event_datetime | date:\"dd-MM-yyyy\"}}</p>\n          <ion-button class=\"trans_btn\" (click)=\"deleteItem(display.event_id)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </ion-label>\n      </ion-item>\n  </ion-list>\n</div>\n<div *ngIf=\"history_details.length == 0 && !loader\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n</div>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData1($event)\" *ngIf=\"completepage * 10  == history_details.length\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<ion-list *ngIf=\"loader\">\n  <ion-list-header>\n    <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ng-container>\n\n</ion-content>\n"

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

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #c7a254;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item h4 {\n    font-size: 1.1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list ion-item:last-child {\n    --border-color: transparent; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form {\n  padding-bottom: 60px; }\n  form ion-item {\n    --background: transparent;\n    --border-color: #ECECEC;\n    --highlight-color-focused: #483df6;\n    --highlight-color-valid: #483df6;\n    --highlight-color-invalid: #ea4e4e;\n    --padding-start: 0;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin-bottom: 10px; }\n  form ion-item ion-label {\n      --color: #bcbbcf; }\n  form ion-item.reminder {\n      --border-color: transparent; }\n  form ion-item.reminder ion-label {\n        --color: #2c2c2c;\n        margin-left: 10px; }\n  ion-card {\n  box-shadow: none;\n  border: 1px solid #d8dbde;\n  max-height: 120px;\n  min-height: 120px;\n  height: 100%; }\n  ion-card:not(.ion-no-margin) {\n    margin: 0; }\n  ion-card:not(.has_image) {\n    --background: transparent;\n    border: 1px dashed #9e9fa0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-card:not(.has_image) p {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-card ion-card-content {\n    padding: 0;\n    height: 100%; }\n  ion-card ion-card-content img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      background-color: #d8dbde; }\n  ion-card ion-button {\n    --padding-end: 0;\n    --padding-start: 0;\n    --border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0;\n    position: absolute;\n    bottom: 6px;\n    right: 6px; }\n  .edit {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: #483df6;\n  margin: 0;\n  height: auto; }\n  .edit svg {\n    margin: 1px 2px 0 0; }\n  .pres_detail {\n  padding: 0 16px; }\n  .pres_detail h4 {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: unset;\n    line-height: inherit;\n    color: #2c2c2c;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n  .pres_detail h4 span:last-child {\n      font-size: 12px; }\n  .pres_detail p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 4px; }\n  ion-slides {\n  --bullet-background: #484848; }\n  ion-slides ion-img {\n    height: calc(100vh - 235px);\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 40px;\n    width: 100%;\n    background-color: #dddddd; }\n  .date_filter {\n  position: relative; }\n  .date_filter h1 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #2c2c2c;\n    margin: 0; }\n  .date_filter svg {\n    position: absolute;\n    bottom: 10px;\n    left: 0; }\n  .date_filter ion-datetime {\n    padding-left: 25px; }\n  .date_filter ion-datetime:nth-child(even) {\n      margin-right: 5px; }\n  .date_filter ion-datetime:nth-child(odd) {\n      margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQTtFQXZCSSxpQkEwQnNCO0VBekJ0QixnQkF5QjJCO0VBdkI3QixpQkF1QmdDO0VBdEJoQywwQkFzQjRDO0VBckI1QyxnQkFxQmtEO0VBcEJsRCxvQkFvQjJEO0VBbkIzRCxjQW1Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQXpDRSxvQkErQ29CO0VBL0NwQixhQStDb0I7RUE5Q3BCLGlCQThDNEI7RUE3QzVCLHlCQTZDb0M7VUE3Q3BDLG1CQTZDb0M7RUE1Q3BDLHVCQTRDMkM7VUE1QzNDLHNCQTRDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUExREksZUE0RW9CO0lBM0VwQixnQkEyRXlCO0lBekUzQixpQkF5RThCO0lBeEU5QiwwQkF3RTBDO0lBdkUxQyxrQkF1RWtEO0lBdEVsRCxvQkFzRTJEO0lBckUzRCxjQXFFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNC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QkFBbUI7RURtQmpCLGVDbEJnQjtFRG1CaEIsZ0JDbkJxQjtFRHFCdkIsaUJDckIwQjtFRHNCMUIscUJDdEJpQztFRHVCakMsbUJDdkIwQztFRHdCMUMsb0JDeEJtRDtFRHlCbkQsV0N6QnlELEVBQUE7RUFHM0Q7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURlSSxpQkNOc0I7SURPdEIsZ0JDUDJCO0lEUzdCLGlCQ1RnQztJRFVoQywwQkNWNEM7SURXNUMsbUJDWHFEO0lEWXJELG9CQ1o4RDtJRGE5RCxjQWhDa0IsRUFBQTtFQ1VwQjtJRGVJLGlCQ0ZzQjtJREd0QixnQkNIMkI7SURLN0IsaUJDTGdDO0lETWhDLDBCQ040QztJRE81QyxtQkNQcUQ7SURRckQsb0JDUjhEO0lEUzlELGNBaENrQixFQUFBO0VDVXBCO0lEZUksZUNFb0I7SUREcEIsZ0JDQ3lCO0lEQzNCLGlCQ0Q4QjtJREU5QixxQkNGcUM7SURHckMsbUJDSDhDO0lESTlDLG9CQ0p1RDtJREt2RCxjQ0xnRTtJQUM1RCxlQUFlLEVBQUE7RUFsQnJCO0lBcUJNLDJCQUFlLEVBQUE7RUFyQnJCO0VEZUksa0JDVXFCO0VEVHJCLGdCQ1MwQjtFRFA1QixpQkNPK0I7RUROL0IsMEJDTTJDO0VETDNDLG1CQ0tvRDtFREpwRCxvQkNJNkQ7RURIN0QsV0NHbUU7RUFDakUsZ0JBQVE7RUFDUiwwQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYSxFQUFBO0VBL0JqQjtJQWlDTSxvQkFBb0IsRUFBQTtFQUsxQjtFQUNFLG9CQUFvQixFQUFBO0VBRHRCO0lBSUkseUJBQWE7SUFDYix1QkFBZTtJQUNmLGtDQUEwQjtJQUMxQixnQ0FBd0I7SUFDeEIsa0NBQTBCO0lBQzFCLGtCQUFnQjtJRGhDaEIsZUNpQ2tCO0lEaENsQixnQkNnQ3VCO0lEOUJ6QixpQkM4QjRCO0lEN0I1QixvQkM2QmtDO0lENUJsQyxnQkM0QndDO0lEM0J4QyxvQkMyQmlEO0lEMUJqRCxjQWhDa0I7SUMyRGhCLG1CQUFtQixFQUFBO0VBWHZCO01BY00sZ0JBQVEsRUFBQTtFQWRkO01Ba0JNLDJCQUFlLEVBQUE7RUFsQnJCO1FBb0JRLGdCQUFRO1FBQ1IsaUJBQWlCLEVBQUE7RUFNekI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBTGQ7SUFRSSxTQUFTLEVBQUE7RUFSYjtJQVlJLHlCQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQWZ2QjtNRGxESSxlQ21Fb0I7TURsRXBCLGdCQ2tFeUI7TURoRTNCLGlCQ2dFOEI7TUQvRDlCLHFCQytEcUM7TUQ5RHJDLG1CQzhEOEM7TUQ3RDlDLG9CQzZEdUQ7TUQ1RHZELGNDNERnRSxFQUFBO0VBakJsRTtJQXNCSSxVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBdkJoQjtNQTBCTSxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQix5QkFBeUIsRUFBQTtFQTVCL0I7SUFpQ0ksZ0JBQWM7SUFDZCxrQkFBZ0I7SUFDaEIsb0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBSWQ7RUQvRkksaUJDZ0drQjtFRC9GbEIsZ0JDK0Z1QjtFRDdGekIsaUJDNkY0QjtFRDVGNUIscUJDNEZtQztFRDNGbkMsa0JDMkYyQztFRDFGM0Msb0JDMEZvRDtFRHpGcEQsY0E3QmU7RUN1SGYsU0FBUztFQUNULFlBQVksRUFBQTtFQUhkO0lBTUksbUJBQW1CLEVBQUE7RUFJdkI7RUFDRSxlQUFlLEVBQUE7RUFEakI7SUR6R0ksZUM2R2tCO0lENUdsQixnQkM0R3VCO0lEMUd6QixpQkMwRzRCO0lEekc1QixxQkN5R21DO0lEeEduQyxpQkN3RzBDO0lEdkcxQyxvQkN1R21EO0lEdEduRCxjQWhDa0I7SUEwQ2xCLG9CQzZGb0I7SUQ3RnBCLGFDNkZvQjtJRDVGcEIsZUM0RjBCO0lEM0YxQix5QkMyRmtDO1lEM0ZsQyxtQkMyRmtDO0lEMUZsQyx5QkMwRmlEO1lEMUZqRCw4QkMwRmlEO0lBSS9DLFNBQVMsRUFBQTtFQVRiO01BT00sZUFBZSxFQUFBO0VBUHJCO0lEekdJLGVDc0hrQjtJRHJIbEIsZ0JDcUh1QjtJRG5IekIsaUJDbUg0QjtJRGxINUIscUJDa0htQztJRGpIbkMsbUJDaUg0QztJRGhINUMsb0JDZ0hxRDtJRC9HckQsY0MrRzhEO0lBQzVELGVBQWUsRUFBQTtFQUduQjtFQUNFLDRCQUFvQixFQUFBO0VBRHRCO0lBSUksMkJBQTJCO0lBQzNCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUIsRUFBQTtFQUk3QjtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lEdElJLGlCQzBJb0I7SUR6SXBCLGdCQ3lJeUI7SUR2STNCLGlCQ3VJOEI7SUR0STlCLG9CQ3NJb0M7SURySXBDLGdCQ3FJMEM7SURwSTFDLG9CQ29JbUQ7SURuSW5ELGNBaENrQjtJQ29LaEIsU0FBUyxFQUFBO0VBTGI7SUFTSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU8sRUFBQTtFQVhYO0lBZUksa0JBQWtCLEVBQUE7RUFmdEI7TUFtQk0saUJBQWlCLEVBQUE7RUFuQnZCO01BdUJNLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodCwgJGxldHRlciwgJHRyYW5zZm9ybSwgJGFsaWduLCAkbGluZV9oZWlnaHQsICRmbl9jb2xvcikge1xuICBmb250OiB7XG4gICAgc2l6ZTogJHNpemU7XG4gICAgd2VpZ2h0OiAkd2VpZ2h0O1xuICB9XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgdGV4dC1hbGlnbjogJGFsaWduO1xuICBsaW5lLWhlaWdodDogJGxpbmVfaGVpZ2h0O1xuICBjb2xvcjogJGZuX2NvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR3aWR0aCwgJHN0eWxlLCAkYnJjb2xvcikge1xuICBib3JkZXItd2lkdGg6ICR3aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3R5bGU7XG4gIGJvcmRlci1jb2xvcjogJGJyY29sb3I7XG59XG5cbkBtaXhpbiBmbGV4KCRmbGV4LCAkd3JhcCwgJGFsaWduLCAkanVzdGlmeSkge1xuICBkaXNwbGF5OiAkZmxleDtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhcjpub3QoLm5vLWJhY2tncm91bmQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2M3YTI1NDtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjZmZjtcclxuICAtLWNvbG9yOiAjMmMyYzJjO1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIEBpbmNsdWRlIGZvbnQoMTJweCwgNjAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlY2VjZWM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNFQ0VDRUM7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICAmLnJlbWluZGVye1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGJkZTtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICY6bm90KC5pb24tbm8tbWFyZ2luKXtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICY6bm90KC5oYXNfaW1hZ2UpIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzllOWZhMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkYmRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAkcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbjogMXB4IDJweCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJlc19kZXRhaWx7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICBoNHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgdW5zZXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcclxuICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1zbGlkZXN7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogIzQ4NDg0ODtcclxuICBcclxuICBpb24taW1nIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRlX2ZpbHRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGgxe1xyXG4gICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZGF0ZXRpbWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHJcbiAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

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
        if (this.selectedSegment == 'future')
            this.upcoming();
        else if (this.selectedSegment == 'completed')
            this.Completed();
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
        console.log("completedC");
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