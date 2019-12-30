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

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Health Diary</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n    <ion-searchbar  slot=\"start\" placeholder=\"Search\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n    <ion-buttons  slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"healthRecord()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n\n <div *ngIf=\"status && health_records.length != 0\">\n  <ion-list *ngFor=\"let data of health_records;let i=index\">\n    <ion-list-header>\n      <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let event of data.events\">\n      <ion-label text-wrap>\n        <h3>{{event.event_name}}</h3>\n        <!-- (click)=\"playHealthRecord(data.events,data,i)\" -->\n        <p>{{event.description}}</p>\n        <!-- (click)=\"playHealthRecord(data.events,data,i)\" -->\n        <h6>\n          <span (click)=\"playHealthRecord(event)\">\n            {{event.created_at | date:'shortTime'}}\n            <i>\n              <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n            </i>\n          <span class=\"play-text\">Play</span>\n          </span>\n         \n          <ion-button class=\"trans_btn\" (click)=\"deleteEvent(event,event.event_name)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n            Delete\n          </ion-button>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n </div>\n <div *ngIf=\"status && health_records.length == 0\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n    <p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n    <!-- <p>Add your record to know your day to day activity</p>\n    <ion-button color=\"secondary\" class=\"btn\" (click)=\"healthRecord()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n      Add\n    </ion-button> -->\n  </div>\n</div>\n\n  \n  <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n  \n\n  <ion-list *ngIf=\"!status\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../upload/upload.page */ "./src/app/self-care/health-diary/upload/upload.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../untilDestroyed/until-destroyed */ "./src/app/self-care/untilDestroyed/until-destroyed.ts");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");















var healthDiaryRecord = /** @class */ (function () {
    function healthDiaryRecord(toast, modalCtrl, router, toastController, transfer, mediaCapture, media, file, platform, alertController, service, _zone, statusBar, database, databaseSummary) {
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
    healthDiaryRecord.prototype.ngOnInit = function () {
    };
    healthDiaryRecord.prototype.ngOnDestroy = function () { };
    healthDiaryRecord.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.backButton.pipe(Object(_untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__["untilDestroyed"])(this)).subscribe(function () {
            if (_this.router.url === _this.currentPath && _this.statement === "record") {
                _this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
            }
            if (_this.router.url === _this.currentPath && _this.statement === "pause") {
                _this.recordBack();
            }
            if (_this.router.url === _this.currentPath && _this.statement === "stop") {
                _this.recordBack();
                _this.myModal.dismiss();
            }
        });
    };
    healthDiaryRecord.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#ff68ab');
        this.show = 3;
        this.statement = "record";
    };
    healthDiaryRecord.prototype.start = function () {
        var _this = this;
        if (this.audioTrack == false && this.recordStart == false) {
            this.statement = "pause";
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then(function () {
                _this.filePath = _this.file.externalDataDirectory.replace(/file:\/\//g, '') + _this.fileName;
                localStorage.setItem("play", _this.filePath);
                _this.audio = _this.media.create(_this.filePath);
                _this.audioTrack = true;
                _this.Stop = true;
                _this.Pause = true;
                _this.show = 1;
                _this.audio.startRecord();
                _this.audio.onSuccess.subscribe(function () { return console.log('Action is successful'); });
                _this.audio.onError.subscribe(function (error) { return console.log('Error!', error); });
                _this.recording = true;
                _this.time = "00:00:00";
                _this.sec = 0;
                _this.interval = setInterval(function () {
                    _this.sec += 1;
                    _this.time = _this.secondsToTime(_this.sec);
                }, 1000);
                _this.recording = true;
            }).catch(function (e) { return console.log(e); });
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
                this.interval = setInterval(function () {
                    _this.sec += 1;
                    _this.time = _this.secondsToTime(_this.sec);
                }, 1000);
            }
        }
    };
    healthDiaryRecord.prototype.stop = function () {
        var _this = this;
        this.statement = "stop";
        this.isenabled = false;
        this.Stop = false;
        this.show = 2;
        clearInterval(this.interval);
        this.audio.stopRecord();
        this.audio.release();
        var fromDirectory = this.file.externalDataDirectory;
        var toDirectory = this.file.externalDataDirectory;
        var OldfileName = this.fileName;
        var NewfileName = this.fileName + 'healthdiary' + '.mp3';
        this.file.copyFile(fromDirectory, OldfileName, toDirectory, NewfileName).then(function (res) {
            console.log(res);
            _this.OriginalFileName = res['name'];
            var nativeFileURL = res['nativeURL'];
            _this.localPlayURL = _this.file.externalDataDirectory.replace(/file:\/\//g, '') + _this.OriginalFileName;
            console.log(nativeFileURL);
            _this.file.resolveLocalFilesystemUrl(nativeFileURL).then(function (fileEntry) {
                return new Promise(function (resolve, reject) {
                    fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                });
            }).then(function (fileMeta) {
                console.log(fileMeta);
                var type = fileMeta.type.split('/');
                var dir = fileMeta['localURL'];
                _this.audioRecordPath = dir;
                _this.upload();
            }).catch(function (err) { return console.log(err); });
        }, function (err) {
            console.log('err: ', err);
        });
    };
    healthDiaryRecord.prototype.startRecord = function () {
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
    };
    healthDiaryRecord.prototype.stopRecord = function () {
        this.audio.stopRecord();
        var data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        //this.getAudioList();
    };
    healthDiaryRecord.prototype.secondsToTime = function (secs) {
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
    };
    healthDiaryRecord.prototype.recordBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("hi");
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Reset',
                                backdropDismiss: false,
                                message: 'Do you want to Discard?',
                                buttons: [
                                    {
                                        text: 'Yes',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log("delete");
                                            _this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
                                        }
                                    }, {
                                        text: 'No',
                                        handler: function () {
                                            _this.upload();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        _a.alertcontrol = _b.sent();
                        return [4 /*yield*/, this.alertcontrol.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    healthDiaryRecord.prototype.upload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = { fileName: this.OriginalFileName, path: this.audioRecordPath };
                        _a = this;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_10__["UploadPage"],
                                cssClass: 'bottom_sheet',
                                showBackdrop: false,
                                backdropDismiss: false,
                                componentProps: data
                            })];
                    case 1:
                        _a.myModal = _b.sent();
                        this.myModal.onDidDismiss().then(function (res) {
                            if (res.data != undefined) {
                                var getData = res.data;
                                _this.proBar = true;
                                _this.fileuri = [];
                                _this.database.createAnEvent(getData).then(function (res) {
                                    var event_id = res['event_id'];
                                    _this.fileuri.push({ "localURI": _this.localPlayURL, "globalURI": null, "cdvFilePath": _this.audioRecordPath, "fileName": _this.OriginalFileName });
                                    _this.addAudioData(event_id);
                                })
                                    .catch(function (error) {
                                    _this.proBar = false;
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
                                _this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
                            }
                        });
                        return [4 /*yield*/, this.myModal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    healthDiaryRecord.prototype.addAudioData = function (event_id) {
        var _this = this;
        var data = {
            "event_options": {
                "localAudioPath": this.fileuri
            }
        };
        this.database.updateAnEventImage(event_id, data).then(function (res) {
            console.log(res);
            _this.proBar = false;
            _this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true });
        })
            .catch(function (error) {
            console.log(error);
            _this.proBar = false;
        });
    };
    healthDiaryRecord.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    healthDiaryRecord.prototype.play = function () {
        console.log(this.filePath);
        this.audio.play();
    };
    healthDiaryRecord.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
        this.myModal.dismiss();
        this.modalCtrl.dismiss();
        //this.resetBackButton = null;
        if (this.audioTrack == true) {
            this.audioTrack = false;
            this.audio.stop();
            this.audio.release();
        }
    };
    healthDiaryRecord.ctorParameters = function () { return [
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
    ]; };
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
    return healthDiaryRecord;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _health_diary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-diary.page */ "./src/app/self-care/health-diary/health-diary.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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










var routes = [
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
var HealthDiaryPageModule = /** @class */ (function () {
    function HealthDiaryPageModule() {
    }
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
    return HealthDiaryPageModule;
}());



/***/ }),

/***/ "./src/app/self-care/health-diary/health-diary.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/self-care/health-diary/health-diary.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ff68ab;\n  --color: #ffffff; }\n  @media not all and (min-height: 600px) and (min-width: 768px) {\n  ion-modal ion-backdrop {\n    visibility: hidden; } }\n  @media only screen and (min-height: 0px) and (min-width: 0px) {\n  .modal-wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; } }\n  .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e; }\n  .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n  ion-list ion-item h6 {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  ion-list ion-item h6 span {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      cursor: pointer; }\n  ion-list ion-item h6 span i {\n        background: #ffffff;\n        padding: 4px;\n        width: 30px;\n        height: 30px;\n        border-radius: 50px;\n        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);\n        display: -webkit-inline-box;\n        display: inline-flex;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  ion-list ion-item h6 span i svg {\n          margin: 1px 0 0 2px; }\n  ion-list ion-item h6 span span {\n        color: #ff4545;\n        padding: 4px;\n        font-size: 12px; }\n  .footer ion-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #2c2c2c;\n  --color-activated: #2c2c2c;\n  height: 65px; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  form.footerform {\n  padding-bottom: 0px; }\n  .btn_submit {\n  background: #ff68ab;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2hlYWx0aC1kaWFyeS9oZWFsdGgtZGlhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEQTtFQXhCSSxpQkEyQnNCO0VBMUJ0QixnQkEwQjJCO0VBeEI3QixpQkF3QmdDO0VBdkJoQywwQkF1QjRDO0VBdEI1QyxnQkFzQmtEO0VBckJsRCxvQkFxQjJEO0VBcEIzRCxjQW9Cb0UsRUFBQTtFQUh0RTtJQU1RLGlCQUFpQixFQUFBO0VBTnpCO0VBVU0saUJBQWlCLEVBQUE7RUFWdkI7RUFhTSxvQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFuQnhCO0VBd0JNLGFBQWEsRUFBQTtFQUtuQjtFQUVJLHFCQUFhLEVBQUE7RUFJakI7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtFQTFDRSxvQkFnRG9CO0VBaERwQixhQWdEb0I7RUEvQ3BCLGlCQStDNEI7RUE5QzVCLHlCQThDb0M7VUE5Q3BDLG1CQThDb0M7RUE3Q3BDLHVCQTZDMkM7VUE3QzNDLHNCQTZDMkM7RUFDekMsb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBWHRCO0lBY00sbUJBQW1CLEVBQUE7RUFkekI7SUEzREksZUE2RW9CO0lBNUVwQixnQkE0RXlCO0lBMUUzQixpQkEwRThCO0lBekU5QiwwQkF5RTBDO0lBeEUxQyxrQkF3RWtEO0lBdkVsRCxvQkF1RTJEO0lBdEUzRCxjQXNFb0U7SUFDaEUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QnhCO0lBMkJRLGVBQWUsRUFBQTtFQTNC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Q3hCO01BZ0RNLGNBQWMsRUFBQTtFQzFzQnBCO0VBRUkscUJBQWE7RUFDYixnQkFBUSxFQUFBO0VBS1o7RUFDRTtJQUNFLGtCQUFrQixFQUFBLEVBQ25CO0VBR0g7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZLEVBQUEsRUFDYjtFQUVIO0VEVUksa0JDVG1CO0VEVW5CLGdCQ1Z3QjtFRFkxQixpQkNaNkI7RURhN0IsMEJDYnlDO0VEY3pDLG1CQ2RrRDtFRGVsRCxvQkNmMkQ7RURnQjNELFdDaEJpRTtFQUNqRSxnQkFBUTtFQUNSLDBCQUFrQixFQUFBO0VBSHBCO0lBTUksb0JBQW9CLEVBQUE7RUFJeEI7RUFDRSxxQkFBYTtFQUNiLGdCQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RURMakIsZUNNZ0I7RURMaEIsZ0JDS3FCO0VESHZCLGlCQ0cwQjtFREYxQixxQkNFaUM7RUREakMsbUJDQzBDO0VEQTFDLG9CQ0FtRDtFRENuRCxXQ0R5RCxFQUFBO0VBRzNEO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLHNCQUFvQixFQUFBO0VBTnhCO0lEVEksaUJDa0JzQjtJRGpCdEIsZ0JDaUIyQjtJRGY3QixpQkNlZ0M7SURkaEMsMEJDYzRDO0lEYjVDLG1CQ2FxRDtJRFpyRCxvQkNZOEQ7SURYOUQsY0FsQ2tCLEVBQUE7RUNvQ3BCO0lEVEksZUNzQm9CO0lEckJwQixnQkNxQnlCO0lEbkIzQixpQkNtQjhCO0lEbEI5QixxQkNrQnFDO0lEakJyQyxtQkNpQjhDO0lEaEI5QyxvQkNnQnVEO0lEZnZELGNDZWdFLEVBQUE7RUFibEU7SURRRSxvQkNTc0I7SURUdEIsYUNTc0I7SURSdEIsaUJDUThCO0lEUDlCLHlCQ09zQztZRFB0QyxtQkNPc0M7SUROdEMseUJDTXFEO1lETnJELDhCQ01xRCxFQUFBO0VBakJ2RDtNRFRJLGVDNkJzQjtNRDVCdEIsZ0JDNEIyQjtNRDFCN0IsaUJDMEJnQztNRHpCaEMscUJDeUJ1QztNRHhCdkMsbUJDd0JnRDtNRHZCaEQsb0JDdUJ5RDtNRHRCekQsY0NzQmtFO01BQzVELGVBQWUsRUFBQTtFQXJCdkI7UUF3QlUsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1Q0FBdUM7UURyQi9DLDJCQ3NCaUM7UUR0QmpDLG9CQ3NCaUM7UURyQmpDLGlCQ3FCeUM7UURwQnpDLHlCQ29CaUQ7Z0JEcEJqRCxtQkNvQmlEO1FEbkJqRCx3QkNtQnlEO2dCRG5CekQsdUJDbUJ5RCxFQUFBO0VBOUIzRDtVQWlDWSxtQkFBbUIsRUFBQTtFQWpDL0I7UUFxQ1UsY0FBYztRQUNaLFlBQVk7UUFDWixlQUFlLEVBQUE7RUFPM0I7RUFFSSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixpQ0FBcUI7RUFDckIsK0JBQW1CO0VBQ25CLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUloQjtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixrQ0FBMEI7RUFDMUIsZ0NBQXdCO0VBQ3hCLGtDQUEwQjtFQUMxQixrQkFBZ0I7RUQxRWhCLGVDMkVrQjtFRDFFbEIsZ0JDMEV1QjtFRHhFekIsaUJDd0U0QjtFRHZFNUIsb0JDdUVrQztFRHRFbEMsZ0JDc0V3QztFRHJFeEMsb0JDcUVpRDtFRHBFakQsY0FsQ2tCO0VDdUdoQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFaZDtJQWdCTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isb0JBQWdCO0lBQ2hCLGtCQUFhO0lBQ2IsdUJBQWU7SUFDZixTQUFTLEVBQUE7RUF6QmY7RUE2QkksbUJBQW1CLEVBQUE7RUFJdkI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL2hlYWx0aC1kaWFyeS9oZWFsdGgtZGlhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG4kbXktZ3JleS1ibHVlIDogI2VhNGU0ZTtcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgLy8gaW9uLWl0ZW17XG4gIC8vICAgaW9uLWxhYmVse1xuICAvLyAgICAgLS1jb2xvcjogIzdiN2I3YjtcbiAgLy8gICB9XG4gIC8vIH1cbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMxYzFjMWM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBkYzY4O1xuICAgICAgcGFkZGluZzogMXB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmY2OGFiO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgbm90IGFsbCBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBpb24tbW9kYWwgaW9uLWJhY2tkcm9wIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDBweCkgYW5kIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5tb2RhbC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuLnRyYW5zX2J0biB7XHJcbiAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gIC0tY29sb3I6ICNlYTRlNGU7XHJcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNmZmO1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA2MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleChpbmxpbmUtZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMCAwIDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgIGNvbG9yOiAjZmY0NTQ1O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogI2JjYmJjZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgbWluLWhlaWdodDogNDJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3ByZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXJpcHBsZS1jb2xvcjogI2ZhNWU2MTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmZvb3RlcmZvcm17XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bl9zdWJtaXR7XHJcbiAgYmFja2dyb3VuZDogI2ZmNjhhYjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");









//import { DatePipe } from '@angular/common';





var HealthDiaryPage = /** @class */ (function () {
    function HealthDiaryPage(toast, streamingMedia, toastController, statusBar, router, settingService, alertController, database, databaseSummary) {
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
    HealthDiaryPage.prototype.ngOnInit = function () { };
    HealthDiaryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
        this.databaseSummary.getAllEvents('health_diary', 'New', this.healthDiaryPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_details = res['event_list'];
            _this.groupBy(data);
            _this.status = true;
        }).catch(function (err) { console.log(err); });
    };
    HealthDiaryPage.prototype.groupBy = function (data) {
        var records = data.map(function (item) { return ({
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
        }); });
        var value = [];
        var example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()); })).subscribe(function (val) {
            if (val) {
                var ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.health_records = value;
        console.log(this.health_records, 'health');
    };
    HealthDiaryPage.prototype.onSearchChange = function (event) {
        var _this = this;
        var search = event.detail.value;
        // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
        //   let data:any = res['event_list'];
        //   this.data_details=res['event_list'];    
        //   this.groupBy(data)
        // })
        this.healthDiaryPage = 1;
        this.healthDiaryPage_offset = 0;
        this.databaseSummary.getAllEventsSearchList('health_diary', search, 'New', this.healthDiaryPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_details = res['event_list'];
            _this.groupBy(data);
        }).catch(function (err) { console.log(err); });
    };
    HealthDiaryPage.prototype.healthRecord = function () {
        this.router.navigate(['/self-care-tabs/tabs/tab1/health-diary/health-diary-record']);
    };
    HealthDiaryPage.prototype.onCancel = function (event) {
        console.log(event);
    };
    HealthDiaryPage.prototype.deleteEvent = function (id, show) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Health Dairy',
                            message: 'Are you sure want to delete' + ' ' + show + '?',
                            mode: 'md',
                            buttons: [
                                {
                                    text: 'Confirm',
                                    handler: function () {
                                        // this.settingService.commonDeleteEvent(id).subscribe(res => {
                                        //   console.log(res)
                                        //   this.presentToast("Record Deleted Successfully");
                                        //   this.ionViewWillEnter();
                                        // }, error => {
                                        //   console.log(error)
                                        // })
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
    HealthDiaryPage.prototype.playHealthRecord = function (data) {
        console.log(data);
        var navParams = {
            queryParams: {
                //value:JSON.stringify(record),
                current: JSON.stringify(data)
            }
        };
        this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'], navParams);
    };
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
    HealthDiaryPage.prototype.stop = function () {
        this.streamingMedia.stopAudio();
    };
    HealthDiaryPage.prototype.pause = function () {
        this.streamingMedia.pauseAudio();
    };
    HealthDiaryPage.prototype.resume = function () {
        this.streamingMedia.resumeAudio();
    };
    HealthDiaryPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            _this.healthDiaryPage += 1;
            _this.healthDiaryPage_offset = _this.healthDiaryPage * 10 - 10;
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
            var data = [];
            _this.databaseSummary.getAllEvents('health_diary', 'New', _this.healthDiaryPage_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var concat, value, example;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    data = res['event_list'];
                    concat = this.data_details.concat(data);
                    this.health_scroll = concat.map(function (item) { return ({
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
                    }); });
                    value = [];
                    example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.health_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()); })).subscribe(function (val) {
                        console.log(val);
                        if (val) {
                            var ff = { "created_at": val[0].created_at, "events": val };
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
                    return [2 /*return*/];
                });
            }); }, function (error) {
                event.target.disabled = true;
            });
        }, 500);
    };
    HealthDiaryPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    HealthDiaryPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    HealthDiaryPage.prototype.ionViewWillLeave = function () {
        this.tabBar.classList.add("tab-selected");
        this.statusBar.backgroundColorByHexString('#483df6');
    };
    HealthDiaryPage.ctorParameters = function () { return [
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
        { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"] }
    ]; };
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
    return HealthDiaryPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");














var UploadPage = /** @class */ (function () {
    function UploadPage(toast, navParams, toastController, fb, modalCtrl, router, transfer, mediaCapture, media, file, platform, alertController, service, _zone, database, databaseSummary) {
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
    UploadPage.prototype.ionViewWillEnter = function () {
        // this.service.relatedto().subscribe((res)=>{
        //   this.related_option=res["enum_masters"]
        // })
        var _this = this;
        this.databaseSummary.getEnumMasters('health_diary').then(function (res) {
            _this.related_option = res["enum_masters"];
        })
            .catch(function (error) { console.log(error); });
        this.uploadform = this.fb.group({
            event_name: ['General', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [],
        });
    };
    UploadPage.prototype.cancel = function () {
        this.recordBack();
    };
    Object.defineProperty(UploadPage.prototype, "f", {
        get: function () { return this.uploadform.controls; },
        enumerable: true,
        configurable: true
    });
    UploadPage.prototype.recordBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("hi");
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Reset',
                                backdropDismiss: false,
                                message: 'Do you want to Discard?',
                                buttons: [
                                    {
                                        text: 'Yes',
                                        role: 'cancel',
                                        handler: function () {
                                            _this.modalCtrl.dismiss();
                                        }
                                    }, {
                                        text: 'No',
                                        handler: function () {
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        _a.alertcontrol = _b.sent();
                        return [4 /*yield*/, this.alertcontrol.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadPage.prototype.uploadfunc = function (val) {
        this.submitted = true;
        if (this.uploadform.valid) {
            this.description = val.description;
            this.event_name = val.event_name;
            this.uploadDeatils();
        }
    };
    UploadPage.prototype.uploadDeatils = function () {
        var recordParams = {
            "event_name": this.event_name,
            "description": this.description,
            "event_type": "health_diary",
            "event_option": { "file_name": this.fileName }
        };
        var options = {
            fileKey: 'event_assets',
            fileName: this.fileName,
            mimeType: 'multipart/form-data',
            params: recordParams,
            chunkedMode: false,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        };
        var data = {
            "path": this.audioRecordPath,
            "api": _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + 'events',
            "options": options
        };
        var uploadData = {
            'event_name': this.event_name,
            'description': this.description,
            'event_type': 'health_diary'
        };
        //this.modalCtrl.dismiss(data);
        this.modalCtrl.dismiss(uploadData);
    };
    UploadPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    UploadPage.ctorParameters = function () { return [
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
    ]; };
    UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/health-diary/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ../health-diary.page.scss */ "./src/app/self-care/health-diary/health-diary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=health-diary-health-diary-module-es5.js.map