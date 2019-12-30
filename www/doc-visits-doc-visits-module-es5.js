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

module.exports = "<ion-header class=\"main-header\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Doc Visits</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"onSegmentChanged(selectedSegment)\">\n    <ion-segment-button value=\"first\">\n      Diary Recordings\n    </ion-segment-button>\n    <ion-segment-button value=\"second\">\n      Doctor Recordings\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container *ngIf=\"selectedSegment=='first'\" >\n\n    <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    \n    <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n      <!-- <ion-searchbar slot=\"start\" placeholder=\"Search\" slot=\"start\" placeholder=\"Search\"\n      [(ngModel)]=\"dairyInput\" (ionChange)=\"onDiarySearchChange($event)\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onDiaryCancel($event)\"></ion-searchbar> -->\n      <ion-button class=\"trans_btn\" slot=\"start\" (click)=\"openCalendar()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\"height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n        <p class=\"ion-no-margin\" *ngIf=\"from_date1!=null && end_date1!=null || from_date1!=undefined && end_date1!=undefined\">{{from_date1 | date:\"dd MMM yyyy\"}} - {{end_date1 | date:\"dd MMM yyyy\"}}</p>\n        <p class=\"ion-no-margin\" *ngIf=\"from_date1==null || end_date1==null || from_date1==undefined || end_date1==undefined\">Filter by date</p>\n      </ion-button>\n    </ion-toolbar>\n\n    <ion-list *ngIf=\"!status\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list> \n\n\n  <div *ngIf=\"status && diary_records.length != 0\">\n    <ion-list *ngFor=\"let data of diary_records;let i=index\">\n      <ion-list-header>\n        <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let event of data.events\">\n        <ion-label text-wrap>\n          <h3>{{event.event_name}}</h3>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <p>{{event.description}}</p>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <h6>\n            <span (click)=\"playDocRecord(data.events,event,i)\">\n              {{event.created_at | date:'shortTime'}}\n              <i>\n                <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n              </i>\n              <span class=\"play-text\">Play</span>\n            </span>  \n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData1($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div *ngIf=\"diary_records.length == 0 && status\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n      <p>Entries made in health diary will be reflect here</p>\n      <!-- <p>Add your record to know your day to day activity</p> -->\n    </div>\n  </div>\n  </ng-container>\n  <ng-container *ngIf=\"selectedSegment=='second'\">\n    <ion-toolbar class=\"action_tools\" *ngIf=\"!status\">\n      <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-toolbar>\n    <ion-toolbar class=\"action_tools\" *ngIf=\"status\">\n      <ion-searchbar #search_focus id=\"search_focus\" slot=\"start\" placeholder=\"Search\" slot=\"start\" placeholder=\"Search\" [(ngModel)]=\"doctorInput\" (ionChange)=\"onDoctorSearchChange($event)\" (click)=\"searchOf()\" [debounce]=\"250\" mode=\"ios\" (ionCancel)=\"onDoctorCancel($event)\"></ion-searchbar>\n      <ion-buttons slot=\"end\" color=\"secondary\">\n        <ion-button class=\"btn\" (click)=\"docRecord()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n          Add\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <ion-list *ngIf=\"!status\">\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <h6>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>    \n\n    <div *ngIf=\"status && doctor_records.length != 0\">\n    <ion-list *ngFor=\"let data of doctor_records;let i=index\">\n      <ion-list-header>\n        <ion-label>{{data.created_at | date:\"dd MMM,y\"}}</ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let event of data.events\" [ngClass]=\"{'pointer_none': pointer_event}\">\n        <ion-label text-wrap>\n          <h3>{{event.event_name}}</h3>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <p>{{event.description}}</p>\n          <!-- (click)=\"playDocRecord(data.events,data,i)\" -->\n          <h6>\n            <span (click)=\"playDocRecord(data.events,event,i)\">\n            {{event.created_at | date:'shortTime'}}\n              <i>\n                <svg id=\"play-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.144\" height=\"11.545\" viewBox=\"0 0 10.144 11.545\"> <path id=\"Path_26\" data-name=\"Path 26\" d=\"M17.422,5.286,8.391.075a.557.557,0,0,0-.835.482V10.989a.557.557,0,0,0,.835.482L17.422,6.26A.565.565,0,0,0,17.422,5.286Z\" transform=\"translate(-7.556 0)\" fill=\"#ea4e4e\"/> </svg>\n              </i>\n              <span class=\"play-text\">Play</span>\n            </span>\n            <ion-button class=\"trans_btn\" (click)=\"deleteEvent(event,event.event_name)\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n              Delete\n            </ion-button>\n          </h6>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData2($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div *ngIf=\"doctor_records.length == 0 && status\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n      <p>Click&nbsp;<span>+Add</span>&nbsp;to add Record or Upload Data</p>\n      <!-- <p>Add your record to know your day to day activity</p>\n      <ion-button color=\"secondary\" class=\"btn\" (click)=\"docRecord()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button> -->\n    </div>\n  </div>\n  </ng-container>\n \n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _upload_upload_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../upload/upload.page */ "./src/app/self-care/doc-visits/upload/upload.page.ts");
/* harmony import */ var _untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../untilDestroyed/until-destroyed */ "./src/app/self-care/untilDestroyed/until-destroyed.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
















var docVisitsDiaryRecord = /** @class */ (function () {
    function docVisitsDiaryRecord(modalCtrl, toast, router, toastController, transfer, mediaCapture, media, file, platform, alertController, service, _zone, statusBar, database, databaseSummary) {
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
    docVisitsDiaryRecord.prototype.ngOnInit = function () {
        //this.initializeBackButtonCustomHandler();
    };
    docVisitsDiaryRecord.prototype.fromObervable = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](function (observer) {
            _this.platform.backButton.subscribe(function () {
                if (_this.router.url === _this.currentPath && _this.checkstate === "record") {
                    _this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
                }
                if (_this.router.url === _this.currentPath && _this.checkstate === "pause") {
                    _this.recordBack();
                }
                if (_this.router.url === _this.currentPath && _this.checkstate === "stop") {
                    _this.recordBack();
                    _this.myModal.dismiss();
                }
            });
        });
    };
    //.pipe(untilDestroyed(this))
    docVisitsDiaryRecord.prototype.ionViewDidEnter = function () {
        this.fromObervable().pipe(Object(_untilDestroyed_until_destroyed__WEBPACK_IMPORTED_MODULE_12__["untilDestroyed"])(this)).subscribe();
    };
    docVisitsDiaryRecord.prototype.ionViewWillEnter = function () {
        this.statusBar.backgroundColorByHexString('#5ee4a2');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        this.checkstate = "record";
    };
    docVisitsDiaryRecord.prototype.start = function () {
        var _this = this;
        if (this.audioTrack == false && this.recordStart == false) {
            this.checkstate = "pause";
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then(function () {
                _this.filePath = _this.file.externalDataDirectory.replace(/file:\/\//g, '') + _this.fileName;
                _this.audio = _this.media.create(_this.filePath);
                _this.audioTrack = true;
                _this.Stop = true;
                _this.Pause = true;
                _this.audio.startRecord();
                _this.audio.onSuccess.subscribe(function () { return console.log('Action is successful'); });
                _this.audio.onError.subscribe(function (error) { return console.log('Error!', error); });
                _this.recording = true;
                _this.show = 1;
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
    docVisitsDiaryRecord.prototype.stop = function () {
        var _this = this;
        this.checkstate = "stop";
        this.isenabled = false;
        this.Stop = false;
        this.show = 2;
        clearInterval(this.interval);
        this.audio.stopRecord();
        this.audio.release();
        var fromDirectory = this.file.externalDataDirectory;
        var toDirectory = this.file.externalDataDirectory;
        var OldfileName = this.fileName;
        var NewfileName = this.fileName + 'docvisits' + '.mp3';
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
    docVisitsDiaryRecord.prototype.startRecord = function () {
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
    docVisitsDiaryRecord.prototype.stopRecord = function () {
        this.audio.stopRecord();
        var data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        //this.getAudioList();
    };
    docVisitsDiaryRecord.prototype.secondsToTime = function (secs) {
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
    docVisitsDiaryRecord.prototype.recordBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
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
                                            _this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
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
    docVisitsDiaryRecord.prototype.upload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = { fileName: this.OriginalFileName, path: this.audioRecordPath };
                        _a = this;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _upload_upload_page__WEBPACK_IMPORTED_MODULE_11__["UploadPage"],
                                cssClass: 'bottom_sheet',
                                showBackdrop: false,
                                backdropDismiss: false,
                                componentProps: data,
                            })];
                    case 1:
                        _a.myModal = _b.sent();
                        this.myModal.onDidDismiss().then(function (res) {
                            console.log(res.data != undefined);
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
                                _this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
                            }
                        });
                        return [4 /*yield*/, this.myModal.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    docVisitsDiaryRecord.prototype.addAudioData = function (event_id) {
        var _this = this;
        var data = {
            "event_options": {
                "localAudioPath": this.fileuri
            }
        };
        this.database.updateAnEventImage(event_id, data).then(function (res) {
            console.log(res);
            _this.proBar = false;
            _this.router.navigate(['self-care-tabs/tabs/tab1/doc-visits'], { skipLocationChange: true });
        })
            .catch(function (error) {
            console.log(error);
            _this.proBar = false;
        });
    };
    docVisitsDiaryRecord.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
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
    docVisitsDiaryRecord.prototype.play = function () {
        console.log(this.filePath);
        //this.audio = this.media.create(this.filePath);
        this.audio.play();
    };
    docVisitsDiaryRecord.prototype.ionViewWillLeave = function () {
        this.tabBar.style.display = 'flex';
        this.myModal.dismiss();
        this.modalCtrl.dismiss();
        if (this.audioTrack == true) {
            this.audioTrack = false;
            this.audio.stop();
            this.audio.release();
        }
    };
    docVisitsDiaryRecord.ctorParameters = function () { return [
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
    ]; };
    docVisitsDiaryRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-visits-record',
            template: __webpack_require__(/*! raw-loader!./doc-visits-record.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.html"),
            styles: [__webpack_require__(/*! ../doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_15__["DataBaseSummaryProvider"]])
    ], docVisitsDiaryRecord);
    return docVisitsDiaryRecord;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _doc_visits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc-visits.page */ "./src/app/self-care/doc-visits/doc-visits.page.ts");
/* harmony import */ var _doc_visits_record_doc_visits_record_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doc-visits-record/doc-visits-record.page */ "./src/app/self-care/doc-visits/doc-visits-record/doc-visits-record.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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











var routes = [
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
var DocVisitsPageModule = /** @class */ (function () {
    function DocVisitsPageModule() {
    }
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
    return DocVisitsPageModule;
}());



/***/ }),

/***/ "./src/app/self-care/doc-visits/doc-visits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/self-care/doc-visits/doc-visits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #5ee4a2;\n  --color: #ffffff; }\n  .action_tools .trans_btn {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: inherit;\n  margin: 4px 0 0;\n  --color: inherit;\n  --color-activated: inherit;\n  --padding-start: 0;\n  --border-radius: 0; }\n  .action_tools .trans_btn svg {\n    margin-right: 5px;\n    margin-top: -4px; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n  ion-list ion-item h6 {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  ion-list ion-item h6 span {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398;\n      cursor: pointer; }\n  ion-list ion-item h6 span i {\n        background: #ffffff;\n        padding: 4px;\n        width: 30px;\n        height: 30px;\n        border-radius: 50px;\n        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);\n        display: -webkit-inline-box;\n        display: inline-flex;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  ion-list ion-item h6 span i svg {\n          margin: 1px 0 0 2px; }\n  ion-list ion-item h6 span span {\n        color: #ff4545;\n        padding: 4px;\n        font-size: 12px; }\n  ion-list ion-item .trans_btn {\n    font-size: 0.75rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --color: #ea4e4e;\n    --color-activated: #ea4e4e; }\n  ion-list ion-item .trans_btn svg {\n      margin: -1px 2px 0 0; }\n  .footer ion-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --color: #2c2c2c;\n  --color-activated: #2c2c2c;\n  height: 65px; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  form.footerform {\n  padding-bottom: 0px; }\n  .btn_submit {\n  background: #5ee4a2;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL2RvYy12aXNpdHMvZG9jLXZpc2l0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRBO0VBeEJJLGlCQTJCc0I7RUExQnRCLGdCQTBCMkI7RUF4QjdCLGlCQXdCZ0M7RUF2QmhDLDBCQXVCNEM7RUF0QjVDLGdCQXNCa0Q7RUFyQmxELG9CQXFCMkQ7RUFwQjNELGNBb0JvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBMUNFLG9CQWdEb0I7RUFoRHBCLGFBZ0RvQjtFQS9DcEIsaUJBK0M0QjtFQTlDNUIseUJBOENvQztVQTlDcEMsbUJBOENvQztFQTdDcEMsdUJBNkMyQztVQTdDM0Msc0JBNkMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTNESSxlQTZFb0I7SUE1RXBCLGdCQTRFeUI7SUExRTNCLGlCQTBFOEI7SUF6RTlCLDBCQXlFMEM7SUF4RTFDLGtCQXdFa0Q7SUF2RWxELG9CQXVFMkQ7SUF0RTNELGNBc0VvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJ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TUFnRE0sY0FBYyxFQUFBO0VDMXNCcEI7RUFFSSxxQkFBYTtFQUNiLGdCQUFRLEVBQUE7RUFJWjtFRDBCSSxpQkN4Qm9CO0VEeUJwQixnQkN6QnlCO0VEMkIzQixpQkMzQjhCO0VENEI5QixvQkM1Qm9DO0VENkJwQyxnQkM3QjBDO0VEOEIxQyxvQkM5Qm1EO0VEK0JuRCxjQy9CNEQ7RUFDMUQsZUFBZTtFQUNmLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLGtCQUFnQjtFQUNoQixrQkFBZ0IsRUFBQTtFQVBwQjtJQVNNLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUt0QjtFQUNFLHFCQUFhO0VBQ2IsZ0JBQVE7RUFDUixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFRE1qQixlQ0xnQjtFRE1oQixnQkNOcUI7RURRdkIsaUJDUjBCO0VEUzFCLHFCQ1RpQztFRFVqQyxtQkNWMEM7RURXMUMsb0JDWG1EO0VEWW5ELFdDWnlELEVBQUE7RUFHM0Q7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLG1CQUFjO0VBQ2Qsc0JBQW9CLEVBQUE7RUFOeEI7SURFSSxpQkNPc0I7SUROdEIsZ0JDTTJCO0lESjdCLGlCQ0lnQztJREhoQywwQkNHNEM7SURGNUMsbUJDRXFEO0lERHJELG9CQ0M4RDtJREE5RCxjQWxDa0IsRUFBQTtFQ3lCcEI7SURFSSxlQ1dvQjtJRFZwQixnQkNVeUI7SURSM0IsaUJDUThCO0lEUDlCLHFCQ09xQztJRE5yQyxtQkNNOEM7SURMOUMsb0JDS3VEO0lESnZELGNDSWdFLEVBQUE7RUFibEU7SURtQkUsb0JDRnNCO0lERXRCLGFDRnNCO0lER3RCLGlCQ0g4QjtJREk5Qix5QkNKc0M7WURJdEMsbUJDSnNDO0lES3RDLHlCQ0xxRDtZREtyRCw4QkNMcUQsRUFBQTtFQWpCdkQ7TURFSSxlQ2tCc0I7TURqQnRCLGdCQ2lCMkI7TURmN0IsaUJDZWdDO01EZGhDLHFCQ2N1QztNRGJ2QyxtQkNhZ0Q7TURaaEQsb0JDWXlEO01EWHpELGNDV2tFO01BQzVELGVBQWMsRUFBQTtFQXJCdEI7UUF1QlUsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1Q0FBdUM7UURUL0MsMkJDVWlDO1FEVmpDLG9CQ1VpQztRRFRqQyxpQkNTeUM7UURSekMseUJDUWlEO2dCRFJqRCxtQkNRaUQ7UURQakQsd0JDT3lEO2dCRFB6RCx1QkNPeUQsRUFBQTtFQTdCM0Q7VUFnQ1ksbUJBQW1CLEVBQUE7RUFoQy9CO1FBb0NVLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZSxFQUFBO0VBdEN6QjtJREVJLGtCQ3lDdUI7SUR4Q3ZCLGdCQ3dDNEI7SUR0QzlCLGlCQ3NDaUM7SURyQ2pDLDBCQ3FDNkM7SURwQzdDLG1CQ29Dc0Q7SURuQ3RELG9CQ21DK0Q7SURsQy9ELFdDa0NxRTtJQUNqRSxnQkFBUTtJQUNSLDBCQUFrQixFQUFBO0VBN0N4QjtNQWdEUSxvQkFBb0IsRUFBQTtFQU01QjtFQUVJLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGlDQUFxQjtFQUNyQiwrQkFBbUI7RUFDbkIsZ0JBQVE7RUFDUiwwQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBSWhCO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLGtDQUEwQjtFQUMxQixnQ0FBd0I7RUFDeEIsa0NBQTBCO0VBQzFCLGtCQUFnQjtFRHZFaEIsZUN3RWtCO0VEdkVsQixnQkN1RXVCO0VEckV6QixpQkNxRTRCO0VEcEU1QixvQkNvRWtDO0VEbkVsQyxnQkNtRXdDO0VEbEV4QyxvQkNrRWlEO0VEakVqRCxjQWxDa0I7RUNvR2hCLG1CQUFtQixFQUFBO0VBVHZCO0lBWU0sZ0JBQVEsRUFBQTtFQVpkO0lBZ0JNLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQWE7SUFDYixvQkFBZ0I7SUFDaEIsa0JBQWE7SUFDYix1QkFBZTtJQUNmLFNBQVMsRUFBQTtFQXpCZjtFQTZCSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxmLWNhcmUvZG9jLXZpc2l0cy9kb2MtdmlzaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuJG15LWdyZXktYmx1ZSA6ICNlYTRlNGU7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIC8vIGlvbi1pdGVte1xuICAvLyAgIGlvbi1sYWJlbHtcbiAgLy8gICAgIC0tY29sb3I6ICM3YjdiN2I7XG4gIC8vICAgfVxuICAvLyB9XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjMWMxYzFjO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGM2ODtcbiAgICAgIHBhZGRpbmc6IDFweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tdG9vbGJhcjpub3QoLm5vLWJhY2tncm91bmQpIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uX3Rvb2xzIHtcclxuICAudHJhbnNfYnRuIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xyXG4gICAgbWFyZ2luOiA0cHggMCAwO1xyXG4gICAgLS1jb2xvcjogaW5oZXJpdDtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiBpbmhlcml0O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjZmZjtcclxuICAtLWNvbG9yOiAjMmMyYzJjO1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIEBpbmNsdWRlIGZvbnQoMTJweCwgNjAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNlY2VjZWM7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4KGlubGluZS1mbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcclxuXHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweCAwIDAgMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgY29sb3I6ICNmZjQ1NDU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJhbnNfYnRuIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2VhNGU0ZTtcclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luOiAtMXB4IDJweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcclxuICAgIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcclxuICAgIGhlaWdodDogNjVweDtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcHJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmE1ZTYxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZm9vdGVyZm9ybXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcbi5idG5fc3VibWl0e1xyXG4gIGJhY2tncm91bmQ6ICM1ZWU0YTI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");

















var DocVisitsPage = /** @class */ (function () {
    function DocVisitsPage(toast, datepipe, modalCtrl, streamingMedia, toastController, statusBar, router, settingService, alertController, database, databaseSummary) {
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
    DocVisitsPage.prototype.ngOnInit = function () {
        console.log(this.from_date1 == null, this.from_date1 == undefined, this.from_date1 == '');
    };
    DocVisitsPage.prototype.ionViewWillEnter = function () {
        this.diaryPage = 1;
        this.doctorPage = 1;
        this.statusBar.backgroundColorByHexString('#5ee4a2');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.getDiaryRecords();
        this.getDoctorRecords();
    };
    DocVisitsPage.prototype.getDiaryRecords = function () {
        // this.settingService.commonEventList("health_diary",this.diaryPage).subscribe(res => {
        //   let data:any = res['event_list'];
        //   this.data_diary_details=res['event_list'];
        //    console.log(data)
        var _this = this;
        //   this.groupByDiary(data)
        //   this.status = true;
        // })
        this.diaryPage = 1;
        this.diaryPage_offset = 0;
        this.databaseSummary.getAllEvents('health_diary', 'New', this.diaryPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_diary_details = res['event_list'];
            _this.groupByDiary(data);
            _this.status = true;
        }).catch(function (err) { console.log(err); });
    };
    DocVisitsPage.prototype.getDoctorRecords = function () {
        var _this = this;
        // this.settingService.commonEventList("doc_visit",this.doctorPage).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_doctor_details=res['event_list']; 
        //   this.groupByDoctor(data)
        //   this.status = true;
        // })
        this.doctorPage = 1;
        this.doctorPage_offset = 0;
        this.databaseSummary.getAllEvents('doc_visit', 'New', this.doctorPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_doctor_details = res['event_list'];
            _this.groupByDoctor(data);
            _this.status = true;
        }).catch(function (err) { console.log(err); });
    };
    DocVisitsPage.prototype.groupByDiary = function (data) {
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
            console.log(val);
            if (val) {
                var ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.diary_records = value;
    };
    DocVisitsPage.prototype.groupByDoctor = function (data) {
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
            console.log(val);
            if (val) {
                var ff = { "created_at": val[0].created_at, "events": val };
                value.push(ff);
            }
        });
        this.doctor_records = value;
    };
    DocVisitsPage.prototype.deleteEvent = function (id, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Doc Visits',
                            message: 'Are you sure want to delete' + ' ' + event + ' ' + 'recording' + '?',
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
    DocVisitsPage.prototype.onSegmentChanged = function (event) {
    };
    DocVisitsPage.prototype.onDiarySearchChange = function (event) {
        var _this = this;
        console.log(event);
        var search = event.detail.value;
        this.diaryPage = 1;
        // this.settingService.commonEventSearchList("health_diary",search).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_diary_details=res['event_list']; 
        //   this.groupByDiary(data)
        // })
        this.diaryPage = 1;
        this.diaryPage_offset = 0;
        this.databaseSummary.getAllEventsSearchList('health_diary', search, 'New', this.diaryPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_diary_details = res['event_list'];
            _this.groupByDiary(data);
        }).catch(function (err) { console.log(err); });
    };
    DocVisitsPage.prototype.openCalendar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, myCalendar, event, date, from_date, end_date, filter_data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            canBackwardsSelected: true,
                            pickMode: 'range',
                            color: 'dark',
                            title: ''
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModal"],
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
                        console.log(end_date);
                        //this.from_date1=this.datepipe.transform(from_date, 'dd-MMM-yyyy')
                        //this.end_date1=this.datepipe.transform(end_date, 'dd-MMM-yyyy')
                        this.from_date1 = this.datepipe.transform(from_date, 'yyyy-MM-dd');
                        this.end_date1 = this.datepipe.transform(end_date, 'yyyy-MM-dd');
                        console.log(this.from_date1);
                        console.log(this.end_date1);
                        this.userId = localStorage.getItem("user_id");
                        console.log(this.userId);
                        filter_data = {
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
                        this.databaseSummary.diaryRecordFilter(filter_data).then(function (res) {
                            var data = res['event_list'];
                            _this.data_diary_details = res['event_list'];
                            _this.groupByDiary(data);
                        }).catch(function (err) { console.log(err); });
                        return [2 /*return*/];
                }
            });
        });
    };
    DocVisitsPage.prototype.onDiaryCancel = function (event) {
    };
    DocVisitsPage.prototype.onDoctorSearchChange = function (event) {
        var _this = this;
        console.log(event);
        var search = event.detail.value;
        this.doctorPage = 1;
        this.doctorPage_offset = 0;
        // this.settingService.commonEventSearchList("doc_visit",search).subscribe(res => {
        //   let data:any = res['event_list']
        //   this.data_doctor_details=res['event_list']; 
        //   this.groupByDoctor(data)
        // })
        this.databaseSummary.getAllEventsSearchList('doc_visit', search, 'New', this.doctorPage_offset).then(function (res) {
            var data = res['event_list'];
            _this.data_doctor_details = res['event_list'];
            _this.groupByDoctor(data);
        }).catch(function (err) { console.log(err); });
    };
    DocVisitsPage.prototype.onDoctorCancel = function (event) {
    };
    DocVisitsPage.prototype.docRecord = function () {
        this.router.navigate(['/self-care-tabs/tabs/tab1/doc-visits/doc-visits-record']);
    };
    DocVisitsPage.prototype.playDocRecord = function (record, data, index) {
        console.log(record, data, index);
        var navParams = {
            queryParams: {
                value: JSON.stringify(record),
                current: JSON.stringify(data)
            }
        };
        this.router.navigate(['/self-care-tabs/tabs/tab1/common-self-care-play'], navParams);
    };
    DocVisitsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    DocVisitsPage.prototype.loadData1 = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            _this.diaryPage += 1;
            _this.diaryPage_offset = _this.diaryPage * 10 - 10;
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
            var data = [];
            _this.databaseSummary.getAllEvents('health_diary', 'New', _this.diaryPage_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var concat, value, example;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    data = res['event_list'];
                    concat = this.data_diary_details.concat(data);
                    this.diary_scroll = concat.map(function (item) { return ({
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
                    example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.diary_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()); })).subscribe(function (val) {
                        console.log(val);
                        if (val) {
                            var ff = { "created_at": val[0].created_at, "events": val };
                            value.push(ff);
                        }
                    });
                    this.diary_scroll = value;
                    this.diary_records = this.diary_scroll;
                    event.target.complete();
                    if (this.diaryPage * 10 != this.diary_records.length) {
                        event.target.disabled = true;
                    }
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                event.target.disabled = true;
                console.log(err);
            });
        }, 500);
    };
    DocVisitsPage.prototype.loadData2 = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            _this.doctorPage += 1;
            _this.doctorPage_offset = _this.doctorPage * 10 - 10;
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
            var data = [];
            _this.databaseSummary.getAllEvents('doc_visit', 'New', _this.doctorPage_offset).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var concat, value, example;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    data = res['event_list'];
                    concat = this.data_doctor_details.concat(data);
                    this.doctor_scroll = concat.map(function (item) { return ({
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
                    example = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.doctor_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["groupBy"])(function (person) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(person.created_at, 'yyyy-MM-dd', 'en-US'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["toArray"])()); })).subscribe(function (val) {
                        console.log(val);
                        if (val) {
                            var ff = { "created_at": val[0].created_at, "events": val };
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
                    return [2 /*return*/];
                });
            }); }).catch(function (err) {
                event.target.disabled = true;
                console.log(err);
            });
        }, 500);
    };
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
    DocVisitsPage.prototype.searchOf = function () {
        this.searchHas = document.getElementById('search_focus').classList[11];
        if (this.searchHas == "searchbar-has-focus") {
            this.pointer_event = true;
        }
        else {
            this.pointer_event = false;
        }
    };
    DocVisitsPage.prototype.ionViewWillLeave = function () {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    };
    DocVisitsPage.ctorParameters = function () { return [
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
    ]; };
    DocVisitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-visits',
            template: __webpack_require__(/*! raw-loader!./doc-visits.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/doc-visits.page.html"),
            styles: [__webpack_require__(/*! ./doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_13__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"]])
    ], DocVisitsPage);
    return DocVisitsPage;
}());



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
        this.uploadform = this.fb.group({
            event_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [''],
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
            "event_type": "doc_visit",
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
        var data = { "path": this.audioRecordPath, "api": _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + 'events', "options": options };
        var uploadData = {
            'event_name': this.event_name,
            'description': this.description,
            'event_type': 'doc_visit'
        };
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
            template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/doc-visits/upload/upload.page.html"),
            styles: [__webpack_require__(/*! ../doc-visits.page.scss */ "./src/app/self-care/doc-visits/doc-visits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_10__["MediaCapture"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["settingsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_12__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_13__["DataBaseSummaryProvider"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ })

}]);
//# sourceMappingURL=doc-visits-doc-visits-module-es5.js.map