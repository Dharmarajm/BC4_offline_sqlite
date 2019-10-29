(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-diary-health-diary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"no-background\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"self-care-tabs/tabs/tab1/health-diary\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-progress-bar color=\"tertiary\" *ngIf=\"proBar\"></ion-progress-bar> <!--[value]=\"progress\"-->\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <!-- <button (click)=\"play()\">Play</button> -->\r\n  <h1 class=\"timer\">{{time}}</h1>\r\n  <!-- <button (click)=\"fileUpload()\">Play</button> -->\r\n    <div class=\"footer ion-padding\">\r\n      <!-- //start() -->\r\n      <ion-button [disabled]=\"!isenabled\" (click)=\"start()\">\r\n        <i class=\"start\" *ngIf=\"!Pause\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"#ff68ab\"/></svg>\r\n        </i>\r\n        <i class=\"pause\" *ngIf=\"Pause\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24.562\" height=\"41.2\" viewBox=\"0 0 24.562 41.2\"><g transform=\"translate(-129 -575)\"><rect width=\"7.131\" height=\"41.2\" transform=\"translate(129 575)\" fill=\"#ff68ab\"/><rect width=\"7.131\" height=\"41.2\" transform=\"translate(146.431 575)\" fill=\"#ff68ab\"/></g></svg>\r\n        </i>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"Pause\" [disabled]=\"!Stop\" (click)=\"stop()\">\r\n        <i class=\"stop\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41.2\" height=\"41.2\" viewBox=\"0 0 41.2 41.2\"><rect width=\"41.2\" height=\"41.2\" fill=\"#ff68ab\"/></svg>\r\n        </i>\r\n      </ion-button>\r\n    </div>\r\n  <!-- <ion-button color=\"primary\" [disabled]=\"isenabled\" (click)=\"confirm()\">\r\n    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n  </ion-button> -->\r\n\r\n  <!-- <div class=\"row\" style=\"margin-top: 75% !important;margin-left: 20px;\">\r\n    <div class=\"btn-label\" id=\"upload_record\">\r\n      <ion-button [disabled]=\"!isenabled\" (click)=\"start()\"> -->\r\n        <!-- <ion-icon name=\"ios-mic-outline\" *ngIf=\"!Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"mic\" *ngIf=\"!Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"play\" *ngIf=\"Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"pause\" *ngIf=\"Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"ios-pause-outline\" *ngIf=\"Pause\"></ion-icon> -->\r\n      <!-- </ion-button> -->\r\n      <!-- <p *ngIf=\"!Pause\">Record</p>\r\n        <p *ngIf=\"Pause\">Pause</p> -->\r\n    <!-- </div>\r\n\r\n    <div class=\"btn-label\" id=\"upload_record\">\r\n      <ion-button style=\"font-size: 13px;background: #ece2e2de;color: black;\" [disabled]=\"!Stop\" (click)=\"stop()\"> -->\r\n        <!-- <ion-icon name=\"square-outline\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"square\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"mic\"></ion-icon> -->\r\n      <!-- </ion-button>\r\n      <p>Stop</p>\r\n    </div>\r\n\r\n    <div class=\"btn-label\" id=\"upload_record\" (click)=\"confirm()\">\r\n      <ion-button color=\"primary\" [disabled]=\"isenabled\"> -->\r\n        <!-- <ion-icon name=\"ios-checkmark-circle-outline\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n      <p>Confirm</p>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <button (click)=\"play()\">Play</button> -->\r\n\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"proBar\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/health-diary.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/health-diary/health-diary.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Health Diary</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n    <ion-searchbar  slot=\"start\" placeholder=\"Search\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n    <ion-buttons  slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"healthRecord()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n\n <div *ngIf=\"status && health_records.length != 0\">\n  <ion-list *ngFor=\"let data of health_records;let i=index\">\n    <ion-list-header>\n      <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let event of data.events\">\n      <ion-label text-wrap>\n        <h3>{{event.event_name}}</h3>\n        <!-- (click)=\"playHealthRecord(data.events,data,i)\" -->\n        <p>{{event.description}}</p>\n        <!-- (click)=\"playHealthRecord(data.events,data,i)\" -->\n        <h6>\n          <span (click)=\"playHealthRecord(event)\">\n            {{event.created_at | date:'shortTime'}}\n            <i>\n              <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n            </i>\n          <span class=\"play-text\">Play</span>\n          </span>\n         \n          <ion-button class=\"trans_btn\" (click)=\"deleteEvent(event.event_id,event.event_name)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n </div>\n <div *ngIf=\"status && health_records.length == 0\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n      <!-- <p>Add your record to know your day to day activity</p>\n      <ion-button color=\"secondary\" class=\"btn\" (click)=\"healthRecord()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button> -->\n    </div>\n  </div>\n\n  \n  <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n  \n\n  <ion-list *ngIf=\"!status\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/upload/upload.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/health-diary/upload/upload.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding-top ion-padding-start ion-padding-end\">\r\n  <form class=\"footerform\" [formGroup]=\"uploadform\" *ngIf=uploadform (ngSubmit)=\"uploadfunc(uploadform.value)\">\r\n    <ion-item\r\n      [ngClass]=\"{'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n      <ion-label position=\"floating\">Related to</ion-label>\r\n      <ion-select okText=\"Set\" cancelText=\"cancel\" formControlName=\"event_name\" (ionChange)=\"otherCheck($event)\">\r\n        <ion-select-option *ngFor=\"let option of related_option\" [value]=\"option\">{{option || General}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item\r\n      [ngClass]=\"{'ion-invalid': submitted && f.description.invalid,'ion-touched': submitted && f.description.invalid }\">\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"bottom_action\">\r\n      <button type=\"submit\" class=\"button btn_submit\">\r\n        Save\r\n      </button>\r\n      <ion-button expand=\"block\" (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.ts ***!
  \****************************************************************************************/
/*! exports provided: healthDiaryRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthDiaryRecord", function() { return healthDiaryRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../upload/upload.page */ "./src/app/self-care/health-diary/upload/upload.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../untilDestroyed/until-destroyed */ "./src/app/self-care/untilDestroyed/until-destroyed.ts");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");















let healthDiaryRecord = class healthDiaryRecord {
    constructor(toast, modalCtrl, router, toastController, transfer, mediaCapture, media, file, platform, alertController, service, _zone, statusBar, database, databaseSummary) {
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastController = toastController;
        this.transfer = transfer;
        this.mediaCapture = mediaCapture;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.alertController = alertController;
        this.service = service;
        this._zone = _zone;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.recording = false;
        this.audioList = [];
        this.sec = 0;
        this.time = "00:00:00";
        this.isenabled = true;
        this.audioTrack = false;
        this.recordStart = false;
        this.Stop = false;
        this.Pause = false;
        this.progress = 0;
        this.proBar = false;
        this.statement = "record";
        this.counter = 0;
        this.currentPath = '/self-care-tabs/tabs/tab1/health-diary/health-diary-record';
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    }
    ngOnInit() {
    }
    ngOnDestroy() { }
    ionViewDidEnter() {
        this.platform.backButton.pipe(Object(_untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__["untilDestroyed"])(this)).subscribe(() => {
            if (this.router.url === this.currentPath && this.statement === "record") {
                this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
            }
            if (this.router.url === this.currentPath && this.statement === "pause") {
                this.recordBack();
            }
            if (this.router.url === this.currentPath && this.statement === "stop") {
                this.recordBack();
                this.myModal.dismiss();
            }
        });
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ff68ab');
        this.show = 3;
        this.statement = "record";
    }
    start() {
        if (this.audioTrack == false && this.recordStart == false) {
            this.statement = "pause";
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then(() => {
                this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
                localStorage.setItem("play", this.filePath);
                this.audio = this.media.create(this.filePath);
                this.audioTrack = true;
                this.Stop = true;
                this.Pause = true;
                this.show = 1;
                this.audio.startRecord();
                this.audio.onSuccess.subscribe(() => console.log('Action is successful'));
                this.audio.onError.subscribe(error => console.log('Error!', error));
                this.recording = true;
                this.time = "00:00:00";
                this.sec = 0;
                this.interval = setInterval(() => {
                    this.sec += 1;
                    this.time = this.secondsToTime(this.sec);
                }, 1000);
                this.recording = true;
            }).catch(e => console.log(e));
        }
        else {
            if (this.recordStart == false) {
                this.audioTrack = false;
                this.Pause = false;
                this.recordStart = true;
                this.audio.pauseRecord();
                clearInterval(this.interval);
            }
            else {
                this.audioTrack = true;
                this.recordStart = false;
                this.Pause = true;
                this.audio.resumeRecord();
                this.interval = setInterval(() => {
                    this.sec += 1;
                    this.time = this.secondsToTime(this.sec);
                }, 1000);
            }
        }
    }
    stop() {
        this.statement = "stop";
        this.isenabled = false;
        this.Stop = false;
        this.show = 2;
        clearInterval(this.interval);
        this.audio.stopRecord();
        this.audio.release();
        let fromDirectory = this.file.externalDataDirectory;
        let toDirectory = this.file.externalDataDirectory;
        let OldfileName = this.fileName;
        let NewfileName = this.fileName + 'healthdiary' + '.mp3';
        this.file.copyFile(fromDirectory, OldfileName, toDirectory, NewfileName).then((res) => {
            console.log(res);
            this.OriginalFileName = res['name'];
            let nativeFileURL = res['nativeURL'];
            this.localPlayURL = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.OriginalFileName;
            console.log(nativeFileURL);
            this.file.resolveLocalFilesystemUrl(nativeFileURL).then((fileEntry) => {
                return new Promise((resolve, reject) => {
                    fileEntry.file(meta => resolve(meta), error => reject(error));
                });
            }).then((fileMeta) => {
                console.log(fileMeta);
                let type = fileMeta.type.split('/');
                let dir = fileMeta['localURL'];
                this.audioRecordPath = dir;
                this.upload();
            }).catch(err => console.log(err));
        }, err => {
            console.log('err: ', err);
        });
    }
    startRecord() {
        if (this.platform.is('ios')) {
            this.fileName = new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.dataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    }
    stopRecord() {
        this.audio.stopRecord();
        let data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        //this.getAudioList();
    }
    secondsToTime(secs) {
        var hours = Math.floor(secs / (60 * 60));
        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        if (seconds < 10) {
            this.zero = "0" + seconds;
            seconds = this.zero;
        }
        if (minutes < 10) {
            this.zero = "0" + minutes;
            minutes = this.zero;
        }
        if (hours < 10) {
            this.zero = "0" + hours;
            hours = this.zero;
        }
        var obj = hours + ":" + minutes + ":" + seconds;
        return obj;
    }
    recordBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("hi");
            this.alertcontrol = yield this.alertController.create({
                header: 'Reset',
                backdropDismiss: false,
                message: 'Do you want to Discard?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        handler: () => {
                            console.log("delete");
                            this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
                        }
                    }, {
                        text: 'No',
                        handler: () => {
                            this.upload();
                        }
                    }
                ]
            });
            yield this.alertcontrol.present();
        });
    }
    upload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = { fileName: this.OriginalFileName, path: this.audioRecordPath };
            this.myModal = yield this.modalCtrl.create({
                component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_10__["UploadPage"],
                cssClass: 'bottom_sheet',
                showBackdrop: false,
                backdropDismiss: false,
                componentProps: data
            });
            this.myModal.onDidDismiss().then((res) => {
                if (res.data != undefined) {
                    let getData = res.data;
                    this.proBar = true;
                    this.fileuri = [];
                    this.database.createAnEvent(getData).then((res) => {
                        let event_id = res['event_id'];
                        this.fileuri.push({ "localURI": this.localPlayURL, "globalURI": null, "cdvFilePath": this.audioRecordPath, "fileName": this.OriginalFileName });
                        this.addAudioData(event_id);
                    })
                        .catch(error => {
                        this.proBar = false;
                    });
                    // const fileTransfer: FileTransferObject = this.transfer.create();
                    // this.progress = 0;
                    // fileTransfer.upload(this.audioRecordPath, getData.api, getData.options).then(res => {
                    //   this.proBar = false;
                    //   this.presentToast('Health diary record updated successfully')
                    //   this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true })
                    // }, error => {
                    //   this.proBar = false;
                    // })
                    // fileTransfer.onProgress((progressEvent) => {
                    //   this._zone.run(() => {
                    //     if (progressEvent.lengthComputable) {
                    //       var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                    //       this.progress = perc;
                    //     }
                    //   })
                    // });
                }
                else {
                    this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
                }
            });
            return yield this.myModal.present();
        });
    }
    addAudioData(event_id) {
        let data = {
            "event_options": {
                "localAudioPath": this.fileuri
            }
        };
        this.database.updateAnEventImage(event_id, data).then((res) => {
            console.log(res);
            this.proBar = false;
            this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
        })
            .catch(error => {
            console.log(error);
            this.proBar = false;
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    play() {
        console.log(this.filePath);
        this.audio.play();
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
        this.myModal.dismiss();
        this.modalCtrl.dismiss();
        //this.resetBackButton = null;
        if (this.audioTrack == true) {
            this.audioTrack = false;
            this.audio.stop();
            this.audio.release();
        }
    }
};
healthDiaryRecord.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["settingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name_auto', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], healthDiaryRecord.prototype, "input", void 0);
healthDiaryRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-diary-record',
        template: __webpack_require__(/*! raw-loader!./health-diary-record.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.html"),
        styles: [__webpack_require__(/*! ../health-diary.page.scss */ "./src/app/self-care/health-diary/health-diary.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"]])
], healthDiaryRecord);



/***/ }),

/***/ "./src/app/self-care/health-diary/health-diary.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/self-care/health-diary/health-diary.module.ts ***!
  \***************************************************************/
/*! exports provided: HealthDiaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthDiaryPageModule", function() { return HealthDiaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _health_diary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-diary.page */ "./src/app/self-care/health-diary/health-diary.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _health_diary_record_health_diary_record_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health-diary-record/health-diary-record.page */ "./src/app/self-care/health-diary/health-diary-record/health-diary-record.page.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload/upload.page */ "./src/app/self-care/health-diary/upload/upload.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");









//import { PipesModule } from '../self-common-service/pipe.module';










const routes = [
    {
        path: '',
        component: _health_diary_page__WEBPACK_IMPORTED_MODULE_6__["HealthDiaryPage"]
    }, {
        path: 'health-diary-record',
        component: _health_diary_record_health_diary_record_page__WEBPACK_IMPORTED_MODULE_8__["healthDiaryRecord"]
    },
    {
        path: 'upload-record',
        component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_14__["UploadPage"]
    }
];
let HealthDiaryPageModule = class HealthDiaryPageModule {
};
HealthDiaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            //PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [_ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__["StreamingMedia"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__["Toast"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_16__["DataBaseSummaryProvider"]],
        declarations: [_health_diary_page__WEBPACK_IMPORTED_MODULE_6__["HealthDiaryPage"], _health_diary_record_health_diary_record_page__WEBPACK_IMPORTED_MODULE_8__["healthDiaryRecord"], _upload_upload_page__WEBPACK_IMPORTED_MODULE_14__["UploadPage"]]
    })
], HealthDiaryPageModule);



/***/ }),

/***/ "./src/app/self-care/health-diary/health-diary.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/self-care/health-diary/health-diary.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ff68ab;\n  --color: #ffffff; }\n  @media not all and (min-height: 600px) and (min-width: 768px) {\n  ion-modal ion-backdrop {\n    visibility: hidden; } }\n  @media only screen and (min-height: 0px) and (min-width: 0px) {\n  .modal-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; } }\n  .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e; }\n  .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n  ion-list ion-item h6 {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  ion-list ion-item h6 span {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      cursor: pointer; }\n  ion-list ion-item h6 span i {\n        background: #ffffff;\n        padding: 4px;\n        width: 30px;\n        height: 30px;\n        border-radius: 50px;\n        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);\n        display: -webkit-inline-box;\n        display: inline-flex;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  ion-list ion-item h6 span i svg {\n          margin: 1px 0 0 2px; }\n  ion-list ion-item h6 span span {\n        color: #ff4545;\n        padding: 4px;\n        font-size: 12px; }\n  .footer ion-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #2c2c2c;\n  --color-activated: #2c2c2c;\n  height: 65px; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  form.footerform {\n  padding-bottom: 0px; }\n  .btn_submit {\n  background: #ff68ab;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2hlYWx0aC1kaWFyeS9oZWFsdGgtZGlhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQTtFQXZCSSxpQkEwQnNCO0VBekJ0QixnQkF5QjJCO0VBdkI3QixpQkF1QmdDO0VBdEJoQywwQkFzQjRDO0VBckI1QyxnQkFxQmtEO0VBcEJsRCxvQkFvQjJEO0VBbkIzRCxjQW1Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQXpDRSxvQkErQ29CO0VBL0NwQixhQStDb0I7RUE5Q3BCLGlCQThDNEI7RUE3QzVCLHlCQTZDb0M7VUE3Q3BDLG1CQTZDb0M7RUE1Q3BDLHVCQTRDMkM7VUE1QzNDLHNCQTRDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUExREksZUE0RW9CO0lBM0VwQixnQkEyRXlCO0lBekUzQixpQkF5RThCO0lBeEU5QiwwQkF3RTBDO0lBdkUxQyxrQkF1RWtEO0lBdEVsRCxvQkFzRTJEO0lBckUzRCxjQXFFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNC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QixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZLEVBQUEsRUFDYjtFQUVIO0VEUUksa0JDUG1CO0VEUW5CLGdCQ1J3QjtFRFUxQixpQkNWNkI7RURXN0IsMEJDWHlDO0VEWXpDLG1CQ1prRDtFRGFsRCxvQkNiMkQ7RURjM0QsV0NkaUU7RUFDakUsZ0JBQVE7RUFDUiwwQkFBa0IsRUFBQTtFQUhwQjtJQU1JLG9CQUFvQixFQUFBO0VBSXhCO0VBQ0UscUJBQWE7RUFDYixnQkFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VEUGpCLGVDUWdCO0VEUGhCLGdCQ09xQjtFREx2QixpQkNLMEI7RURKMUIscUJDSWlDO0VESGpDLG1CQ0cwQztFREYxQyxvQkNFbUQ7RUREbkQsV0NDeUQsRUFBQTtFQUczRDtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxzQkFBb0IsRUFBQTtFQU54QjtJRFhJLGlCQ29Cc0I7SURuQnRCLGdCQ21CMkI7SURqQjdCLGlCQ2lCZ0M7SURoQmhDLDBCQ2dCNEM7SURmNUMsbUJDZXFEO0lEZHJELG9CQ2M4RDtJRGI5RCxjQWhDa0IsRUFBQTtFQ29DcEI7SURYSSxlQ3dCb0I7SUR2QnBCLGdCQ3VCeUI7SURyQjNCLGlCQ3FCOEI7SURwQjlCLHFCQ29CcUM7SURuQnJDLG1CQ21COEM7SURsQjlDLG9CQ2tCdUQ7SURqQnZELGNDaUJnRSxFQUFBO0VBYmxFO0lETUUsb0JDV3NCO0lEWHRCLGFDV3NCO0lEVnRCLGlCQ1U4QjtJRFQ5Qix5QkNTc0M7WURUdEMsbUJDU3NDO0lEUnRDLHlCQ1FxRDtZRFJyRCw4QkNRcUQsRUFBQTtFQWpCdkQ7TURYSSxlQytCc0I7TUQ5QnRCLGdCQzhCMkI7TUQ1QjdCLGlCQzRCZ0M7TUQzQmhDLHFCQzJCdUM7TUQxQnZDLG1CQzBCZ0Q7TUR6QmhELG9CQ3lCeUQ7TUR4QnpELGNDd0JrRTtNQUM1RCxlQUFlLEVBQUE7RUFyQnZCO1FBd0JVLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUNBQXVDO1FEdkIvQywyQkN3QmlDO1FEeEJqQyxvQkN3QmlDO1FEdkJqQyxpQkN1QnlDO1FEdEJ6Qyx5QkNzQmlEO2dCRHRCakQsbUJDc0JpRDtRRHJCakQsd0JDcUJ5RDtnQkRyQnpELHVCQ3FCeUQsRUFBQTtFQTlCM0Q7VUFpQ1ksbUJBQW1CLEVBQUE7RUFqQy9CO1FBcUNVLGNBQWM7UUFDWixZQUFZO1FBQ1osZUFBZSxFQUFBO0VBTzNCO0VBRUkseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsaUNBQXFCO0VBQ3JCLCtCQUFtQjtFQUNuQixnQkFBUTtFQUNSLDBCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFJaEI7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2Ysa0NBQTBCO0VBQzFCLGdDQUF3QjtFQUN4QixrQ0FBMEI7RUFDMUIsa0JBQWdCO0VENUVoQixlQzZFa0I7RUQ1RWxCLGdCQzRFdUI7RUQxRXpCLGlCQzBFNEI7RUR6RTVCLG9CQ3lFa0M7RUR4RWxDLGdCQ3dFd0M7RUR2RXhDLG9CQ3VFaUQ7RUR0RWpELGNBaENrQjtFQ3VHaEIsbUJBQW1CLEVBQUE7RUFUdkI7SUFZTSxnQkFBUSxFQUFBO0VBWmQ7SUFnQk0sa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBYTtJQUNiLG9CQUFnQjtJQUNoQixrQkFBYTtJQUNiLHVCQUFlO0lBQ2YsU0FBUyxFQUFBO0VBekJmO0VBNkJJLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGYtY2FyZS9oZWFsdGgtZGlhcnkvaGVhbHRoLWRpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXI6bm90KC5uby1iYWNrZ3JvdW5kKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZjY4YWI7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBub3QgYWxsIGFuZCAobWluLWhlaWdodDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGlvbi1tb2RhbCBpb24tYmFja2Ryb3Age1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMHB4KSBhbmQgKG1pbi13aWR0aDogMHB4KSB7XHJcbiAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4udHJhbnNfYnRuIHtcclxuICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogI2VhNGU0ZTtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbjogLTFweCAycHggMCAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmN2Y2ZmY7XHJcbiAgLS1jb2xvcjogIzJjMmMyYztcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBAaW5jbHVkZSBmb250KDEycHgsIDYwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICB9XHJcblxyXG4gICAgaDYge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTJweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KGlubGluZS1mbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcclxuXHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweCAwIDAgMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgY29sb3I6ICNmZjQ1NDU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICAgIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcclxuICAgIGhlaWdodDogNjVweDtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcHJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmE1ZTYxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZm9vdGVyZm9ybXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuX3N1Ym1pdHtcclxuICBiYWNrZ3JvdW5kOiAjZmY2OGFiO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/self-care/health-diary/health-diary.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/self-care/health-diary/health-diary.page.ts ***!
  \*************************************************************/
/*! exports provided: HealthDiaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthDiaryPage", function() { return HealthDiaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");









//import { DatePipe } from '@angular/common';





let HealthDiaryPage = class HealthDiaryPage {
    constructor(toast, streamingMedia, toastController, statusBar, router, settingService, alertController, database, databaseSummary) {
        this.toast = toast;
        this.streamingMedia = streamingMedia;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.router = router;
        this.settingService = settingService;
        this.alertController = alertController;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.health_records = [];
        this.health_scroll = [];
        this.status = false;
        this.healthDiaryPage = 1;
        this.healthDiaryPage_offset = 0;
        this.data_details = [];
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.environmentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].ImageUrl;
        console.log("2019-06-26T04:22:22.534Z".toString());
        //this.datePipe.transform("2019-06-26T04:22:22.534Z", 'yyyy-MM-dd')
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ff68ab');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        // this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_details=res['event_list'];     
        //   this.groupBy(data)
        //   this.status = true;
        // })
        this.healthDiaryPage = 1;
        this.healthDiaryPage_offset = 0;
        this.databaseSummary.getAllEvents('health_diary', 'New', this.healthDiaryPage_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
            this.status = true;
        }).catch(err => { console.log(err); });
    }
    groupBy(data) {
        let records = data.map(item => ({
            id: item.id,
            event_id: item.event_id,
            created_at: item.created_at,
            description: item.description,
            event_assets: item.event_assets,
            event_options: item.event_options,
            event_name: item.event_name,
            value: item.value,
            event_type: item.event_type,
            user_id: item.user_id,
            playing: false,
            progress: 0
        }));
        let value = [];
        const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()))).subscribe(val => {
            if (val) {
                let ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.health_records = value;
        console.log(this.health_records, 'health');
    }
    onSearchChange(event) {
        let search = event.detail.value;
        // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
        //   let data:any = res['event_list'];
        //   this.data_details=res['event_list'];    
        //   this.groupBy(data)
        // })
        this.healthDiaryPage = 1;
        this.healthDiaryPage_offset = 0;
        this.databaseSummary.getAllEventsSearchList('health_diary', search, 'New', this.healthDiaryPage_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
        }).catch(err => { console.log(err); });
    }
    healthRecord() {
        this.router.navigate(['/self-care-tabs/tabs/tab1/health-diary/health-diary-record']);
    }
    onCancel(event) {
        console.log(event);
    }
    deleteEvent(id, show) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Health Dairy',
                message: 'Are you sure want to delete' + ' ' + show + '?',
                mode: 'md',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            // this.settingService.commonDeleteEvent(id).subscribe(res => {
                            //   console.log(res)
                            //   this.presentToast("Record Deleted Successfully");
                            //   this.ionViewWillEnter();
                            // }, error => {
                            //   console.log(error)
                            // })
                            this.database.deleteAnEvent(id).then(res => {
                                this.presentToast("Record Deleted Successfully");
                                this.ionViewWillEnter();
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
    playHealthRecord(data) {
        console.log(data);
        let navParams = {
            queryParams: {
                //value:JSON.stringify(record),
                current: JSON.stringify(data)
            }
        };
        this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'], navParams);
    }
    // playHealthRecord(record,data,index){
    //   console.log(record,data['events'][0]['event_assets'][0]['url']);
    //   let url=this.environmentUrl+data['events'][0]['event_assets'][0]['url'];
    //   console.log(url);
    //   var options: StreamingAudioOptions = {
    //      bgColor: "#000000",
    //      bgImage: "www/assets/img/play.png",
    //      bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    //      initFullscreen: true, // true is default. iOS only.
    //      keepAwake: true, // prevents device from sleeping. true is default. Android only.
    //      successCallback: function() {
    //        console.log("Player closed without error.");
    //      },
    //      errorCallback: function(errMsg) {
    //        console.log("Error! " + errMsg);
    //      }
    //    }; 
    //   this.streamingMedia.playAudio(url, options);
    //  }
    stop() {
        this.streamingMedia.stopAudio();
    }
    pause() {
        this.streamingMedia.pauseAudio();
    }
    resume() {
        this.streamingMedia.resumeAudio();
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.healthDiaryPage += 1;
            this.healthDiaryPage_offset = this.healthDiaryPage * 10 - 10;
            // this.settingService.commonEventList("health_diary",this.healthDiaryPage).subscribe(res => {
            //    let data:any = res['event_list'];
            //    let concat=this.data_details.concat(data);
            //     this.health_scroll=concat.map(item => ({
            //      id:item.id,
            //      event_id: item.event_id,
            //      created_at: item.created_at,
            //      description: item.description,
            //      event_assets: item.event_assets,
            //      event_options: item.event_options,
            //      event_name: item.event_name,
            //      value: item.value,
            //      event_type: item.event_type,
            //      user_id: item.user_id,
            //      playing: false,
            //      progress: 0
            //     }));
            //     let value = []
            //     const example = from(this.health_scroll).pipe(
            //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //       console.log(val)
            //       if(val){
            //           let ff: any = { "created_at":val[0].created_at,"events" :val }
            //           value.push(ff);
            //       }
            //     })
            //     this.health_scroll=value;
            //     this.health_records=this.health_scroll;
            //     console.log(this.health_scroll)
            //     console.log(this.health_records)
            //     event.target.complete();
            //     if (this.healthDiaryPage *10 !=this.health_records.length){
            //        event.target.disabled = true;
            //     }
            // },error=>{
            //    event.target.disabled = true;
            // })
            let data = [];
            this.databaseSummary.getAllEvents('health_diary', 'New', this.healthDiaryPage_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                let concat = this.data_details.concat(data);
                this.health_scroll = concat.map(item => ({
                    id: item.id,
                    event_id: item.event_id,
                    created_at: item.created_at,
                    description: item.description,
                    event_assets: item.event_assets,
                    event_options: item.event_options,
                    event_name: item.event_name,
                    value: item.value,
                    event_type: item.event_type,
                    user_id: item.user_id,
                    playing: false,
                    progress: 0
                }));
                let value = [];
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.health_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = { "created_at": val[0].created_at, "events": val };
                        value.push(ff);
                    }
                });
                this.health_scroll = value;
                this.health_records = this.health_scroll;
                console.log(this.health_scroll);
                console.log(this.health_records);
                event.target.complete();
                if (this.healthDiaryPage * 10 != this.health_records.length) {
                    event.target.disabled = true;
                }
            }), error => {
                event.target.disabled = true;
            });
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    ionViewWillLeave() {
        this.tabBar.classList.add("tab-selected");
        this.statusBar.backgroundColorByHexString('#483df6');
    }
};
HealthDiaryPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
], HealthDiaryPage.prototype, "infiniteScroll", void 0);
HealthDiaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-diary',
        template: __webpack_require__(/*! raw-loader!./health-diary.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/health-diary.page.html"),
        styles: [__webpack_require__(/*! ./health-diary.page.scss */ "./src/app/self-care/health-diary/health-diary.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]])
], HealthDiaryPage);



/***/ }),

/***/ "./src/app/self-care/health-diary/upload/upload.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/self-care/health-diary/upload/upload.page.ts ***!
  \**************************************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");














let UploadPage = class UploadPage {
    constructor(toast, navParams, toastController, fb, modalCtrl, router, transfer, mediaCapture, media, file, platform, alertController, service, _zone, database, databaseSummary) {
        this.toast = toast;
        this.navParams = navParams;
        this.toastController = toastController;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.transfer = transfer;
        this.mediaCapture = mediaCapture;
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.alertController = alertController;
        this.service = service;
        this._zone = _zone;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.submitted = false;
        this.fileName = this.navParams.get('fileName');
        this.audioRecordPath = this.navParams.get('path');
    }
    ionViewWillEnter() {
        // this.service.relatedto().subscribe((res)=>{
        //   this.related_option=res["enum_masters"]
        // })
        this.databaseSummary.getEnumMasters('health_diary').then((res) => {
            this.related_option = res["enum_masters"];
        })
            .catch(error => { console.log(error); });
        this.uploadform = this.fb.group({
            event_name: ['General', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [],
        });
    }
    cancel() {
        this.recordBack();
    }
    get f() { return this.uploadform.controls; }
    recordBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("hi");
            this.alertcontrol = yield this.alertController.create({
                header: 'Reset',
                backdropDismiss: false,
                message: 'Do you want to Discard?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        handler: () => {
                            this.modalCtrl.dismiss();
                        }
                    }, {
                        text: 'No',
                        handler: () => {
                        }
                    }
                ]
            });
            yield this.alertcontrol.present();
        });
    }
    uploadfunc(val) {
        this.submitted = true;
        if (this.uploadform.valid) {
            this.description = val.description;
            this.event_name = val.event_name;
            this.uploadDeatils();
        }
    }
    uploadDeatils() {
        let recordParams = {
            "event_name": this.event_name,
            "description": this.description,
            "event_type": "health_diary",
            "event_option": { "file_name": this.fileName }
        };
        let options = {
            fileKey: 'event_assets',
            fileName: this.fileName,
            mimeType: 'multipart/form-data',
            params: recordParams,
            chunkedMode: false,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        };
        let data = {
            "path": this.audioRecordPath,
            "api": _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + 'events',
            "options": options
        };
        let uploadData = {
            'event_name': this.event_name,
            'description': this.description,
            'event_type': 'health_diary'
        };
        //this.modalCtrl.dismiss(data);
        this.modalCtrl.dismiss(uploadData);
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
};
UploadPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"] }
];
UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/upload/upload.page.html"),
        styles: [__webpack_require__(/*! ../health-diary.page.scss */ "./src/app/self-care/health-diary/health-diary.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=health-diary-health-diary-module-es2015.js.map