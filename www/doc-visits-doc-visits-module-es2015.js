(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doc-visits-doc-visits-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"no-background\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"self-care-tabs/tabs/tab1/doc-visits\"></ion-back-button>\r\n        </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-progress-bar color=\"tertiary\" *ngIf=\"proBar\"></ion-progress-bar> <!--[value]=\"progress\"-->\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <!-- <button (click)=\"play()\">Play</button> -->\r\n  <h1 class=\"timer\">{{time}}</h1>\r\n  <!-- <button (click)=\"fileUpload()\">Play</button> -->\r\n  <!-- start() -->\r\n    <div class=\"footer ion-padding\">\r\n      <ion-button [disabled]=\"!isenabled\" (click)=\"start()\">\r\n          <i class=\"start\" *ngIf=\"!Pause\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\"><circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"#5ee4a2\"/></svg>\r\n          </i>\r\n          <i class=\"pause\" *ngIf=\"Pause\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24.562\" height=\"41.2\" viewBox=\"0 0 24.562 41.2\"><g transform=\"translate(-129 -575)\"><rect width=\"7.131\" height=\"41.2\" transform=\"translate(129 575)\" fill=\"#5ee4a2\"/><rect width=\"7.131\" height=\"41.2\" transform=\"translate(146.431 575)\" fill=\"#5ee4a2\"/></g></svg>\r\n          </i>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"Pause\" [disabled]=\"!Stop\" (click)=\"stop()\">\r\n          <i class=\"stop\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"41.2\" height=\"41.2\" viewBox=\"0 0 41.2 41.2\"><rect width=\"41.2\" height=\"41.2\" fill=\"#5ee4a2\"/></svg>\r\n          </i>\r\n        </ion-button>\r\n    </div>\r\n  <!-- <ion-button color=\"primary\" [disabled]=\"isenabled\" (click)=\"confirm()\">\r\n    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n  </ion-button> -->\r\n\r\n  <!-- <div class=\"row\" style=\"margin-top: 75% !important;margin-left: 20px;\">\r\n    <div class=\"btn-label\" id=\"upload_record\">\r\n      <ion-button [disabled]=\"!isenabled\" (click)=\"start()\"> -->\r\n        <!-- <ion-icon name=\"ios-mic-outline\" *ngIf=\"!Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"mic\" *ngIf=\"!Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"play\" *ngIf=\"Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"pause\" *ngIf=\"Pause\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"ios-pause-outline\" *ngIf=\"Pause\"></ion-icon> -->\r\n      <!-- </ion-button> -->\r\n      <!-- <p *ngIf=\"!Pause\">Record</p>\r\n        <p *ngIf=\"Pause\">Pause</p> -->\r\n    <!-- </div>\r\n\r\n    <div class=\"btn-label\" id=\"upload_record\">\r\n      <ion-button style=\"font-size: 13px;background: #ece2e2de;color: black;\" [disabled]=\"!Stop\" (click)=\"stop()\"> -->\r\n        <!-- <ion-icon name=\"square-outline\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"square\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"mic\"></ion-icon> -->\r\n      <!-- </ion-button>\r\n      <p>Stop</p>\r\n    </div>\r\n\r\n    <div class=\"btn-label\" id=\"upload_record\" (click)=\"confirm()\">\r\n      <ion-button color=\"primary\" [disabled]=\"isenabled\"> -->\r\n        <!-- <ion-icon name=\"ios-checkmark-circle-outline\"></ion-icon> -->\r\n        <!-- <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      </ion-button>\r\n      <p>Confirm</p>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <button (click)=\"play()\">Play</button> -->\r\n\r\n</ion-content>\r\n<ion-backdrop *ngIf=\"proBar\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/doc-visits/doc-visits.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Doc Visits</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"onSegmentChanged(selectedSegment)\">\n    <ion-segment-button value=\"first\">\n      Diary Recordings\n    </ion-segment-button>\n    <ion-segment-button value=\"second\">\n      Doctor Recordings\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"selectedSegment=='first'\" >\n\n    <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    \n    <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n      <!-- <ion-searchbar slot=\"start\" placeholder=\"Search\" slot=\"start\" placeholder=\"Search\"\n      [(ngModel)]=\"dairyInput\" (ionChange)=\"onDiarySearchChange($event)\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onDiaryCancel($event)\"></ion-searchbar> -->\n      <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"openCalendar()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n        <p class=\"ion-no-margin\" *ngIf=\"from_date1!=null && end_date1!=null || from_date1!=undefined && end_date1!=undefined\">{{from_date1 | date:\"dd MMM yyyy\"}} - {{end_date1 | date:\"dd MMM yyyy\"}}</p>\n        <p class=\"ion-no-margin\" *ngIf=\"from_date1==null || end_date1==null || from_date1==undefined || end_date1==undefined\">Filter by date</p>\n      </ion-button>\n    </ion-toolbar>\n\n    <ion-list *ngIf=\"!status\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list> \n\n\n  <div *ngIf=\"status && diary_records.length != 0\">\n    <ion-list *ngFor=\"let data of diary_records;let i=index\">\n      <ion-list-header>\n        <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let event of data.events\">\n        <ion-label text-wrap>\n          <h3>{{event.event_name}}</h3>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <p>{{event.description}}</p>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <h6>\n            <span (click)=\"playDocRecord(data.events,event,i)\">\n              {{event.created_at | date:'shortTime'}}\n              <i>\n                <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n              </i>\n              <span class=\"play-text\">Play</span>\n            </span>  \n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData1($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n    <div *ngIf=\"diary_records.length == 0 && status\" class=\"no_record\">\n      <div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n        <h3>No Record Found</h3>\n        <!-- <p>Add your record to know your day to day activity</p> -->\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"selectedSegment=='second'\">\n    <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n      <ion-searchbar #search_focus id=\"search_focus\" slot=\"start\" placeholder=\"Search\" slot=\"start\" placeholder=\"Search\" [(ngModel)]=\"doctorInput\" (ionChange)=\"onDoctorSearchChange($event)\" (click)=\"searchOf()\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onDoctorCancel($event)\"></ion-searchbar>\n      <ion-buttons slot=\"end\" color=\"secondary\">\n        <ion-button class=\"btn\" (click)=\"docRecord()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n          Add\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <ion-list *ngIf=\"!status\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>    \n\n    <div *ngIf=\"status && doctor_records.length != 0\">\n    <ion-list *ngFor=\"let data of doctor_records;let i=index\">\n      <ion-list-header>\n        <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let event of data.events\" [ngClass]=\"{'pointer_none': pointer_event}\">\n        <ion-label text-wrap>\n          <h3>{{event.event_name}}</h3>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <p>{{event.description}}</p>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <h6>\n            <span (click)=\"playDocRecord(data.events,event,i)\">\n            {{event.created_at | date:'shortTime'}}\n              <i>\n                <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n              </i>\n              <span class=\"play-text\">Play</span>\n            </span>\n            <ion-button class=\"trans_btn\" (click)=\"deleteEvent(event,event.event_name)\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n              Delete\n            </ion-button>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData2($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n    <div *ngIf=\"doctor_records.length == 0 && status\" class=\"no_record\">\n      <div>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n        <h3>No Record Found</h3>\n        <!-- <p>Add your record to know your day to day activity</p>\n        <ion-button color=\"secondary\" class=\"btn\" (click)=\"docRecord()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n          Add\n        </ion-button> -->\n      </div>\n    </div>\n  </ng-container>\n \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/upload/upload.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/doc-visits/upload/upload.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding-top ion-padding-start ion-padding-end\">\r\n  <form class=\"footerform\" [formGroup]=\"uploadform\" *ngIf=uploadform (ngSubmit)=\"uploadfunc(uploadform.value)\">\r\n    <ion-item\r\n      [ngClass]=\"{'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\r\n      <ion-label position=\"floating\">Doctor Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item\r\n      [ngClass]=\"{'ion-invalid': submitted && f.description.invalid,'ion-touched': submitted && f.description.invalid }\">\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"bottom_action\">\r\n      <button type=\"submit\" class=\"button btn_submit\">\r\n        Save\r\n      </button>\r\n      <ion-button expand=\"block\" (click)=\"cancel()\">\r\n        Cancel\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.ts ***!
  \**********************************************************************************/
/*! exports provided: docVisitsDiaryRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docVisitsDiaryRecord", function() { return docVisitsDiaryRecord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../upload/upload.page */ "./src/app/self-care/doc-visits/upload/upload.page.ts");
/* harmony import */ var _untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../untilDestroyed/until-destroyed */ "./src/app/self-care/untilDestroyed/until-destroyed.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
















let docVisitsDiaryRecord = class docVisitsDiaryRecord {
    constructor(modalCtrl, toast, router, toastController, transfer, mediaCapture, media, file, platform, alertController, service, _zone, statusBar, database, databaseSummary) {
        this.modalCtrl = modalCtrl;
        this.toast = toast;
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
        this.checkstate = "record";
        this.counter = 0;
        this.currentPath = '/self-care-tabs/tabs/tab1/doc-visits/doc-visits-record';
        this.show = 3;
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    }
    ngOnInit() {
        //this.initializeBackButtonCustomHandler();
    }
    fromObervable() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"]((observer) => {
            this.platform.backButton.subscribe(() => {
                if (this.router.url === this.currentPath && this.checkstate === "record") {
                    this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
                }
                if (this.router.url === this.currentPath && this.checkstate === "pause") {
                    this.recordBack();
                }
                if (this.router.url === this.currentPath && this.checkstate === "stop") {
                    this.recordBack();
                    this.myModal.dismiss();
                }
            });
        });
    }
    //.pipe(untilDestroyed(this))
    ionViewDidEnter() {
        this.fromObervable().pipe(Object(_untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__["untilDestroyed"])(this)).subscribe();
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#5ee4a2');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.checkstate = "record";
    }
    start() {
        if (this.audioTrack == false && this.recordStart == false) {
            this.checkstate = "pause";
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then(() => {
                this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
                this.audio = this.media.create(this.filePath);
                this.audioTrack = true;
                this.Stop = true;
                this.Pause = true;
                this.audio.startRecord();
                this.audio.onSuccess.subscribe(() => console.log('Action is successful'));
                this.audio.onError.subscribe(error => console.log('Error!', error));
                this.recording = true;
                this.show = 1;
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
        this.checkstate = "stop";
        this.isenabled = false;
        this.Stop = false;
        this.show = 2;
        clearInterval(this.interval);
        this.audio.stopRecord();
        this.audio.release();
        let fromDirectory = this.file.externalDataDirectory;
        let toDirectory = this.file.externalDataDirectory;
        let OldfileName = this.fileName;
        let NewfileName = this.fileName + 'docvisits' + '.mp3';
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
                            this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
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
                component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_11__["UploadPage"],
                cssClass: 'bottom_sheet',
                showBackdrop: false,
                backdropDismiss: false,
                componentProps: data,
            });
            this.myModal.onDidDismiss().then((res) => {
                console.log(res.data != undefined);
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
                    //  const fileTransfer: FileTransferObject = this.transfer.create();
                    //  this.progress=0;
                    //  fileTransfer.upload(this.audioRecordPath,getData.api,getData.options).then(res=>{
                    //     this.proBar=false;
                    //     this.presentToast('Doctor record updated successfully')
                    //     this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'],{skipLocationChange: true })
                    //  },error=>{
                    //     this.proBar=false;
                    //  })
                    //  fileTransfer.onProgress((progressEvent) => {
                    //   this._zone.run(() => {
                    //     if (progressEvent.lengthComputable) {
                    //       var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                    //       this.progress=perc;
                    //     }
                    //   })
                    // });
                }
                else {
                    this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
                }
            });
            return yield this.myModal.present();
            // let fileName = this.fileName;
            // this.alert = await this.alertController.create({
            //   header: 'Doctor Record',
            //   backdropDismiss: false,
            //   //message: '<p>File:'+fileName+'</p>',
            //   inputs: [
            //     {
            //       name: 'doctor',
            //       placeholder: 'Doctor Name',
            //     },
            //     {
            //       name: 'description',
            //       placeholder: 'Enter Description',
            //     }
            //   ],
            //   buttons: [
            //     {
            //       text: 'Cancel',
            //       role: 'cancel',
            //       cssClass: 'secondary',
            //       handler: (blah) => {
            //         this.recordBack();
            //       }
            //     }, {
            //       text: 'Save',
            //       handler: (data) => {
            //         console.log(data)
            //       if(data["description"]!="" && data['doctor']!=""){
            //         this.description = data["description"];
            //         this.event_name = data['doctor'];
            //         let fromDirectory = this.file.externalDataDirectory ;
            //         let toDirectory = this.file.externalDataDirectory 
            //         let OldfileName= this.fileName;
            //         let NewfileName= this.event_name+'.mp3';
            //         this.file.copyFile(fromDirectory , OldfileName , toDirectory , NewfileName).then((res) => {
            //           console.log(res)
            //           this.OriginalFileName=res['name'];
            //           let nativeFileURL=res['nativeURL'];
            //           let localPlayURL = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.OriginalFileName;
            //           console.log(nativeFileURL)
            //           this.proBar=true;
            //           this.file.resolveLocalFilesystemUrl(nativeFileURL).then((fileEntry: FileEntry) => {
            //             return new Promise((resolve, reject) => {
            //              fileEntry.file(meta => resolve(meta), error => reject(error));
            //             });
            //           }).then((fileMeta: IFile) => {
            //             console.log(fileMeta)
            //              let type = fileMeta.type.split('/');
            //              let dir = fileMeta['localURL']
            //              this.audioRecordPath=dir;
            //               //this.playPath=this.uploadURI;
            //               const fileTransfer: FileTransferObject = this.transfer.create();
            //               let recordParams={
            //                 "event_name": this.event_name,
            //                 "description": this.description,
            //                 "event_type": "doc_visit",
            //                 "event_option":{ "file_name":this.fileName }
            //               }
            //               let options: FileUploadOptions = {
            //                fileKey: 'event_assets',
            //                fileName: this.fileName,
            //                mimeType: 'multipart/form-data',
            //                params:recordParams,
            //                chunkedMode: false,
            //                headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
            //               }
            //               fileTransfer.upload(this.audioRecordPath,environment.apiUrl+'events',options).then(res=>{
            //                    this.proBar=false;
            //                    this.presentToast("Doctor's record updated successfully")
            //                    this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'],{skipLocationChange: true })
            //               },error=>{
            //                    this.proBar=false;
            //               })
            //               fileTransfer.onProgress((progressEvent) => {
            //                 this._zone.run(() => {
            //                   if (progressEvent.lengthComputable) {
            //                     var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            //                     this.progress=perc;
            //                   }
            //                 })
            //               });
            //           }).catch(err=>console.log(err)); 
            //         },err => {
            //           console.log('err: ', err);
            //         });
            //       }else{
            //           this.presentToast('Please enter the fields')
            //           return false;
            //       }
            //      }
            //     }
            //   ]
            // });
            // await this.alert.present();
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
            this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
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
    /*fileUpload(){
        this.progress=0;
        const fileTransfer: FileTransferObject = this.transfer.create();

        let recordParams={
          "event_name": this.event_name,
          "description": this.description,
          "event_type": "health_diary"
        }

        let options: FileUploadOptions = {
         fileKey: 'event_assets',
         fileName: this.fileName,
         mimeType: 'multipart/form-data',
         params:recordParams,
         chunkedMode: false,
         headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        }

        fileTransfer.upload(this.audioRecordPath,environment.apiUrl+'events',options).then(res=>{

        }, (err) => {
          console.log(err)
        })
        
        fileTransfer.onProgress((progressEvent) => {
     
          this._zone.run(() => {
            if (progressEvent.lengthComputable) {
              var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
              this.progress=perc;
            }
          })
        });

    }*/
    play() {
        console.log(this.filePath);
        //this.audio = this.media.create(this.filePath);
        this.audio.play();
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
        this.myModal.dismiss();
        this.modalCtrl.dismiss();
        if (this.audioTrack == true) {
            this.audioTrack = false;
            this.audio.stop();
            this.audio.release();
        }
    }
};
docVisitsDiaryRecord.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_15__["DataBaseSummaryProvider"] }
];
docVisitsDiaryRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doc-visits-record',
        template: __webpack_require__(/*! raw-loader!./doc-visits-record.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.html"),
        styles: [__webpack_require__(/*! ../doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_15__["DataBaseSummaryProvider"]])
], docVisitsDiaryRecord);



/***/ }),

/***/ "./src/app/self-care/doc-visits/doc-visits.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/self-care/doc-visits/doc-visits.module.ts ***!
  \***********************************************************/
/*! exports provided: DocVisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocVisitsPageModule", function() { return DocVisitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _doc_visits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc-visits.page */ "./src/app/self-care/doc-visits/doc-visits.page.ts");
/* harmony import */ var _doc_visits_record_doc_visits_record_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doc-visits-record/doc-visits-record.page */ "./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload/upload.page */ "./src/app/self-care/doc-visits/upload/upload.page.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");









//import { PipesModule } from '../self-common-service/pipe.module';











const routes = [
    {
        path: '',
        component: _doc_visits_page__WEBPACK_IMPORTED_MODULE_6__["DocVisitsPage"]
    }, {
        path: 'doc-visits-record',
        component: _doc_visits_record_doc_visits_record_page__WEBPACK_IMPORTED_MODULE_7__["docVisitsDiaryRecord"]
    },
    {
        path: 'doc-visits-upload',
        component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_16__["UploadPage"]
    }
];
let DocVisitsPageModule = class DocVisitsPageModule {
};
DocVisitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            //PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ion2_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_doc_visits_page__WEBPACK_IMPORTED_MODULE_6__["DocVisitsPage"], _doc_visits_record_doc_visits_record_page__WEBPACK_IMPORTED_MODULE_7__["docVisitsDiaryRecord"], _upload_upload_page__WEBPACK_IMPORTED_MODULE_16__["UploadPage"]],
        providers: [_ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_13__["StreamingMedia"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__["Toast"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__["DataBaseSummaryProvider"]],
    })
], DocVisitsPageModule);



/***/ }),

/***/ "./src/app/self-care/doc-visits/doc-visits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/self-care/doc-visits/doc-visits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #5ee4a2;\n  --color: #ffffff; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: inherit;\n  margin: 4px 0 0;\n  --color: inherit;\n  --color-activated: inherit;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n  ion-list ion-item h6 {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  ion-list ion-item h6 span {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      cursor: pointer; }\n  ion-list ion-item h6 span i {\n        background: #ffffff;\n        padding: 4px;\n        width: 30px;\n        height: 30px;\n        border-radius: 50px;\n        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);\n        display: -webkit-inline-box;\n        display: inline-flex;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  ion-list ion-item h6 span i svg {\n          margin: 1px 0 0 2px; }\n  ion-list ion-item h6 span span {\n        color: #ff4545;\n        padding: 4px;\n        font-size: 12px; }\n  ion-list ion-item .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e; }\n  ion-list ion-item .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .footer ion-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #2c2c2c;\n  --color-activated: #2c2c2c;\n  height: 65px; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  form.footerform {\n  padding-bottom: 0px; }\n  .btn_submit {\n  background: #5ee4a2;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2RvYy12aXNpdHMvZG9jLXZpc2l0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBO0VBdkJJLGlCQTBCc0I7RUF6QnRCLGdCQXlCMkI7RUF2QjdCLGlCQXVCZ0M7RUF0QmhDLDBCQXNCNEM7RUFyQjVDLGdCQXFCa0Q7RUFwQmxELG9CQW9CMkQ7RUFuQjNELGNBbUJvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBekNFLG9CQStDb0I7RUEvQ3BCLGFBK0NvQjtFQTlDcEIsaUJBOEM0QjtFQTdDNUIseUJBNkNvQztVQTdDcEMsbUJBNkNvQztFQTVDcEMsdUJBNEMyQztVQTVDM0Msc0JBNEMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTFESSxlQTRFb0I7SUEzRXBCLGdCQTJFeUI7SUF6RTNCLGlCQXlFOEI7SUF4RTlCLDBCQXdFMEM7SUF2RTFDLGtCQXVFa0Q7SUF0RWxELG9CQXNFMkQ7SUFyRTNELGNBcUVvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJ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O0VEMkJwQyxnQkMzQjBDO0VENEIxQyxvQkM1Qm1EO0VENkJuRCxjQzdCNEQ7RUFDMUQsZUFBZTtFQUNmLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLGtCQUFnQjtFQUNoQixrQkFBZ0IsRUFBQTtFQVBwQjtJQVNNLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUt0QjtFQUNFLHFCQUFhO0VBQ2IsZ0JBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFRElqQixlQ0hnQjtFREloQixnQkNKcUI7RURNdkIsaUJDTjBCO0VETzFCLHFCQ1BpQztFRFFqQyxtQkNSMEM7RURTMUMsb0JDVG1EO0VEVW5ELFdDVnlELEVBQUE7RUFHM0Q7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURBSSxpQkNTc0I7SURSdEIsZ0JDUTJCO0lETjdCLGlCQ01nQztJRExoQywwQkNLNEM7SURKNUMsbUJDSXFEO0lESHJELG9CQ0c4RDtJREY5RCxjQWhDa0IsRUFBQTtFQ3lCcEI7SURBSSxlQ2FvQjtJRFpwQixnQkNZeUI7SURWM0IsaUJDVThCO0lEVDlCLHFCQ1NxQztJRFJyQyxtQkNROEM7SURQOUMsb0JDT3VEO0lETnZELGNDTWdFLEVBQUE7RUFibEU7SURpQkUsb0JDQXNCO0lEQXRCLGFDQXNCO0lEQ3RCLGlCQ0Q4QjtJREU5Qix5QkNGc0M7WURFdEMsbUJDRnNDO0lER3RDLHlCQ0hxRDtZREdyRCw4QkNIcUQsRUFBQTtFQWpCdkQ7TURBSSxlQ29Cc0I7TURuQnRCLGdCQ21CMkI7TURqQjdCLGlCQ2lCZ0M7TURoQmhDLHFCQ2dCdUM7TURmdkMsbUJDZWdEO01EZGhELG9CQ2N5RDtNRGJ6RCxjQ2FrRTtNQUM1RCxlQUFjLEVBQUE7RUFyQnRCO1FBdUJVLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUNBQXVDO1FEWC9DLDJCQ1lpQztRRFpqQyxvQkNZaUM7UURYakMsaUJDV3lDO1FEVnpDLHlCQ1VpRDtnQkRWakQsbUJDVWlEO1FEVGpELHdCQ1N5RDtnQkRUekQsdUJDU3lELEVBQUE7RUE3QjNEO1VBZ0NZLG1CQUFtQixFQUFBO0VBaEMvQjtRQW9DVSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWUsRUFBQTtFQXRDekI7SURBSSxrQkMyQ3VCO0lEMUN2QixnQkMwQzRCO0lEeEM5QixpQkN3Q2lDO0lEdkNqQywwQkN1QzZDO0lEdEM3QyxtQkNzQ3NEO0lEckN0RCxvQkNxQytEO0lEcEMvRCxXQ29DcUU7SUFDakUsZ0JBQVE7SUFDUiwwQkFBa0IsRUFBQTtFQTdDeEI7TUFnRFEsb0JBQW9CLEVBQUE7RUFNNUI7RUFFSSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixpQ0FBcUI7RUFDckIsK0JBQW1CO0VBQ25CLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUloQjtFQUVJLHlCQUFhO0VBQ2IsdUJBQWU7RUFDZixrQ0FBMEI7RUFDMUIsZ0NBQXdCO0VBQ3hCLGtDQUEwQjtFQUMxQixrQkFBZ0I7RUR6RWhCLGVDMEVrQjtFRHpFbEIsZ0JDeUV1QjtFRHZFekIsaUJDdUU0QjtFRHRFNUIsb0JDc0VrQztFRHJFbEMsZ0JDcUV3QztFRHBFeEMsb0JDb0VpRDtFRG5FakQsY0FoQ2tCO0VDb0doQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFaZDtJQWdCTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUFhO0lBQ2Isb0JBQWdCO0lBQ2hCLGtCQUFhO0lBQ2IsdUJBQWU7SUFDZixTQUFTLEVBQUE7RUF6QmY7RUE2QkksbUJBQW1CLEVBQUE7RUFHdkI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL2RvYy12aXNpdHMvZG9jLXZpc2l0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb25fdG9vbHMge1xyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XHJcbiAgICBtYXJnaW46IDRweCAwIDA7XHJcbiAgICAtLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IGluaGVyaXQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNmZmO1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA2MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgoaW5saW5lLWZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xyXG5cclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4IDAgMCAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICBjb2xvcjogI2ZmNDU0NTtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50cmFuc19idG4ge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAgIC0tY29sb3I6ICNlYTRlNGU7XHJcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG5cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jb2xvcjogIzJjMmMyYztcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogI2VhNGU0ZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6ICNiY2JiY2Y7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwcmVudDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICNmYTVlNjE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgJi5mb290ZXJmb3Jte1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuLmJ0bl9zdWJtaXR7XHJcbiAgYmFja2dyb3VuZDogIzVlZTRhMjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/self-care/doc-visits/doc-visits.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/self-care/doc-visits/doc-visits.page.ts ***!
  \*********************************************************/
/*! exports provided: DocVisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocVisitsPage", function() { return DocVisitsPage; });
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
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");

















let DocVisitsPage = class DocVisitsPage {
    constructor(toast, datepipe, modalCtrl, streamingMedia, toastController, statusBar, router, settingService, alertController, database, databaseSummary) {
        this.toast = toast;
        this.datepipe = datepipe;
        this.modalCtrl = modalCtrl;
        this.streamingMedia = streamingMedia;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.router = router;
        this.settingService = settingService;
        this.alertController = alertController;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.selectedSegment = "first";
        this.diaryPage = 1;
        this.diaryPage_offset = 0;
        this.doctorPage = 1;
        this.doctorPage_offset = 0;
        this.diary_records = [];
        this.doctor_records = [];
        this.status = false;
        this.diary_scroll = [];
        this.doctor_scroll = [];
        this.pointer_event = false;
        this.data_doctor_details = [];
        this.data_diary_details = [];
        this.environmentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].ImageUrl;
    }
    ngOnInit() {
        console.log(this.from_date1 == null, this.from_date1 == undefined, this.from_date1 == '');
    }
    ionViewWillEnter() {
        this.diaryPage = 1;
        this.doctorPage = 1;
        this.statusBar.backgroundColorByHexString('#5ee4a2');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.getDiaryRecords();
        this.getDoctorRecords();
    }
    getDiaryRecords() {
        // this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
        //   let data:any = res['event_list'];
        //   this.data_diary_details=res['event_list'];
        //    console.log(data)
        //   this.groupByDiary(data)
        //   this.status = true;
        // })
        this.diaryPage = 1;
        this.diaryPage_offset = 0;
        this.databaseSummary.getAllEvents('health_diary', 'New', this.diaryPage_offset).then(res => {
            let data = res['event_list'];
            this.data_diary_details = res['event_list'];
            this.groupByDiary(data);
            this.status = true;
        }).catch(err => { console.log(err); });
    }
    getDoctorRecords() {
        // this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_doctor_details=res['event_list']; 
        //   this.groupByDoctor(data)
        //   this.status = true;
        // })
        this.doctorPage = 1;
        this.doctorPage_offset = 0;
        this.databaseSummary.getAllEvents('doc_visit', 'New', this.doctorPage_offset).then(res => {
            let data = res['event_list'];
            this.data_doctor_details = res['event_list'];
            this.groupByDoctor(data);
            this.status = true;
        }).catch(err => { console.log(err); });
    }
    groupByDiary(data) {
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
            console.log(val);
            if (val) {
                let ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.diary_records = value;
    }
    groupByDoctor(data) {
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
            console.log(val);
            if (val) {
                let ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.doctor_records = value;
    }
    deleteEvent(id, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Doc Visits',
                message: 'Are you sure want to delete' + ' ' + event + ' ' + 'recording' + '?',
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
    onSegmentChanged(event) {
    }
    onDiarySearchChange(event) {
        console.log(event);
        let search = event.detail.value;
        this.diaryPage = 1;
        // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_diary_details=res['event_list']; 
        //   this.groupByDiary(data)
        // })
        this.diaryPage = 1;
        this.diaryPage_offset = 0;
        this.databaseSummary.getAllEventsSearchList('health_diary', search, 'New', this.diaryPage_offset).then(res => {
            let data = res['event_list'];
            this.data_diary_details = res['event_list'];
            this.groupByDiary(data);
        }).catch(err => { console.log(err); });
    }
    openCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                canBackwardsSelected: true,
                pickMode: 'range',
                color: 'dark',
                title: ''
            };
            const myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModal"],
                componentProps: { options }
            });
            myCalendar.present();
            const event = yield myCalendar.onDidDismiss();
            const date = event.data;
            const from_date = date.from.dateObj;
            const end_date = date.to.dateObj;
            console.log(from_date);
            console.log(end_date);
            //this.from_date1=this.datepipe.transform(from_date, 'dd-MMM-yyyy')
            //this.end_date1=this.datepipe.transform(end_date, 'dd-MMM-yyyy')
            this.from_date1 = this.datepipe.transform(from_date, 'yyyy-MM-dd');
            this.end_date1 = this.datepipe.transform(end_date, 'yyyy-MM-dd');
            console.log(this.from_date1);
            console.log(this.end_date1);
            this.userId = localStorage.getItem("user_id");
            console.log(this.userId);
            let filter_data = {
                "user_id": this.userId,
                "from_date": this.from_date1,
                "end_date": this.end_date1,
                "event_type": 'health_diary',
                "page": 1,
                "per_page": 10,
                "sort": "created_at"
            };
            //console.log(filter_data)
            //console.log(this.userId)
            //  this.settingService.record_filter(filter_data).subscribe(res=>{
            //   console.log(res)
            //   let data:any = res['diary_records']
            //   this.data_diary_details=res['diary_records'];
            //   this.groupByDiary(data);
            //  })
            this.databaseSummary.diaryRecordFilter(filter_data).then(res => {
                let data = res['event_list'];
                this.data_diary_details = res['event_list'];
                this.groupByDiary(data);
            }).catch(err => { console.log(err); });
        });
    }
    onDiaryCancel(event) {
    }
    onDoctorSearchChange(event) {
        console.log(event);
        let search = event.detail.value;
        this.doctorPage = 1;
        this.doctorPage_offset = 0;
        // this.settingService.commonEventSearchList("doc_visit",search).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_doctor_details=res['event_list']; 
        //   this.groupByDoctor(data)
        // })
        this.databaseSummary.getAllEventsSearchList('doc_visit', search, 'New', this.doctorPage_offset).then(res => {
            let data = res['event_list'];
            this.data_doctor_details = res['event_list'];
            this.groupByDoctor(data);
        }).catch(err => { console.log(err); });
    }
    onDoctorCancel(event) {
    }
    docRecord() {
        this.router.navigate(['/self-care-tabs/tabs/tab1/doc-visits/doc-visits-record']);
    }
    playDocRecord(record, data, index) {
        console.log(record, data, index);
        let navParams = {
            queryParams: {
                value: JSON.stringify(record),
                current: JSON.stringify(data)
            }
        };
        this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'], navParams);
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    loadData1(event) {
        setTimeout(() => {
            console.log('Done');
            this.diaryPage += 1;
            this.diaryPage_offset = this.diaryPage * 10 - 10;
            // this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
            //    let data:any = res['event_list'];
            //    let concat=this.data_diary_details.concat(data);
            //     this.diary_scroll=concat.map(item => ({
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
            //     const example = from(this.diary_scroll).pipe(
            //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //       console.log(val)
            //       if(val){
            //           let ff = { "created_at":val[0].created_at,"events" :val }
            //           value.push(ff);
            //       }
            //     })
            //     this.diary_scroll=value;
            //     this.diary_records=this.diary_scroll;
            //     event.target.complete();
            //     if (this.diaryPage *10 !=this.diary_records.length){
            //        event.target.disabled = true;
            //     }
            // },error=>{
            //    event.target.disabled = true;
            // })
            let data = [];
            this.databaseSummary.getAllEvents('health_diary', 'New', this.diaryPage_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                let concat = this.data_diary_details.concat(data);
                this.diary_scroll = concat.map(item => ({
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
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.diary_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = { "created_at": val[0].created_at, "events": val };
                        value.push(ff);
                    }
                });
                this.diary_scroll = value;
                this.diary_records = this.diary_scroll;
                event.target.complete();
                if (this.diaryPage * 10 != this.diary_records.length) {
                    event.target.disabled = true;
                }
            })).catch(err => {
                event.target.disabled = true;
                console.log(err);
            });
        }, 500);
    }
    loadData2(event) {
        setTimeout(() => {
            console.log('Done');
            this.doctorPage += 1;
            this.doctorPage_offset = this.doctorPage * 10 - 10;
            // this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
            //    let data:any = res['event_list'];
            //    let concat=this.data_doctor_details.concat(data); 
            //     this.doctor_scroll=concat.map(item => ({
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
            //     const example = from(this.doctor_scroll).pipe(
            //       groupBy(person => formatDate(person.created_at, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //       console.log(val)
            //       if(val){
            //           let ff = { "created_at":val[0].created_at,"events" :val }
            //           value.push(ff);
            //       }
            //     })
            //     this.doctor_scroll=value;
            //     //this.doctor_scroll.map(item => this.doctor_records.push(item));
            //     this.doctor_records=this.doctor_scroll;
            //     event.target.complete();
            //     if (this.doctorPage *10 !=this.doctor_records.length){
            //        event.target.disabled = true;
            //     }
            // },error=>{
            //    event.target.disabled = true;
            // })
            let data = [];
            this.databaseSummary.getAllEvents('doc_visit', 'New', this.doctorPage_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                let concat = this.data_doctor_details.concat(data);
                this.doctor_scroll = concat.map(item => ({
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
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.doctor_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = { "created_at": val[0].created_at, "events": val };
                        value.push(ff);
                    }
                });
                this.doctor_scroll = value;
                //this.doctor_scroll.map(item => this.doctor_records.push(item));
                this.doctor_records = this.doctor_scroll;
                event.target.complete();
                if (this.doctorPage * 10 != this.doctor_records.length) {
                    event.target.disabled = true;
                }
            })).catch(err => {
                event.target.disabled = true;
                console.log(err);
            });
        }, 500);
    }
    // playDocRecord(record,data,index){
    //    console.log(record,data['events'][0]['event_assets'][0]['url']);
    //    let url=this.environmentUrl+data['events'][0]['event_assets'][0]['url'];
    //    console.log(url);
    //    var options: StreamingAudioOptions = {
    //       bgColor: "#000000",
    //       bgImage: "www/assets/img/play.png",
    //       bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    //       initFullscreen: true, // true is default. iOS only.
    //       keepAwake: true, // prevents device from sleeping. true is default. Android only.
    //       successCallback: function() {
    //         console.log("Player closed without error.");
    //       },
    //       errorCallback: function(errMsg) {
    //         console.log("Error! " + errMsg);
    //       }
    //     }; 
    //    this.streamingMedia.playAudio(url, options);
    //  }
    searchOf() {
        this.searchHas = document.getElementById('search_focus').classList[11];
        if (this.searchHas == "searchbar-has-focus") {
            this.pointer_event = true;
        }
        else {
            this.pointer_event = false;
        }
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    }
};
DocVisitsPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__["Toast"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"] }
];
DocVisitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doc-visits',
        template: __webpack_require__(/*! raw-loader!./doc-visits.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits.page.html"),
        styles: [__webpack_require__(/*! ./doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"]])
], DocVisitsPage);



/***/ }),

/***/ "./src/app/self-care/doc-visits/upload/upload.page.ts":
/*!************************************************************!*\
  !*** ./src/app/self-care/doc-visits/upload/upload.page.ts ***!
  \************************************************************/
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
        this.uploadform = this.fb.group({
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [''],
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
            "event_type": "doc_visit",
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
        let data = { "path": this.audioRecordPath, "api": _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + 'events', "options": options };
        let uploadData = {
            'event_name': this.event_name,
            'description': this.description,
            'event_type': 'doc_visit'
        };
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
        template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/upload/upload.page.html"),
        styles: [__webpack_require__(/*! ../doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=doc-visits-doc-visits-module-es2015.js.map