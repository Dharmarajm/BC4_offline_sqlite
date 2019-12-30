(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cgprescriptions-cgprescriptions-module"],{

/***/ "./node_modules/@ionic-native/crop/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/crop/ngx/index.js ***!
  \******************************************************/
/*! exports provided: Crop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return Crop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Crop = /** @class */ (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
    Crop = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Crop);
    return Crop;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3Avbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7SUFWcEMsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBckNqQjtFQXFDMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wT3B0aW9ucyB7XG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ3JvcFxuICogQGRlc2NyaXB0aW9uIENyb3BzIGltYWdlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDcm9wIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jcm9wL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjcm9wOiBDcm9wKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmNyb3AuY3JvcCgncGF0aC90by9pbWFnZS5qcGcnLCB7cXVhbGl0eTogNzV9KVxuICogICAudGhlbihcbiAqICAgICBuZXdJbWFnZSA9PiBjb25zb2xlLmxvZygnbmV3IGltYWdlIHBhdGggaXM6ICcgKyBuZXdJbWFnZSksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY3JvcHBpbmcgaW1hZ2UnLCBlcnJvcilcbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENyb3BPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ3JvcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNyb3AnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGNyb3AocGF0aFRvSW1hZ2U6IHN0cmluZywgb3B0aW9ucz86IENyb3BPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [forceOverscroll]=\"false\" fullscreen=\"true\" class=\"preview_img\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title> {{image_details?.event_datetime | date:\"dd MMMM,y\"}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-slides [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\"><img [src]=\"environment+image\" /></div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <div class=\"img_details\">\r\n    <h3>{{ image_details?.event_name }}</h3>\r\n    <p>{{ image_details?.description }}</p>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>view-patient-prescription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-item>\n\t<ion-label>{{data?.doc_name}}</ion-label>\n</ion-item>\n<ion-item>\n\t<ion-label>{{data?.prescription_date}}</ion-label>\n</ion-item>\n<ion-item>\n\t<ion-label>{{data?.description}}</ion-label>\n</ion-item>\n</ion-content> -->\n<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n     <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"care-giver-tabs/tabsc/tab1c/cg-prescriptions\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Prescriptions</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <ion-toolbar class=\"action_tools\" *ngIf=\"viewloader\">\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar> -->\n\n  <!-- <ion-toolbar class=\"action_tools\" >\n      \n    <ion-button slot=\"end\" class=\"trans_btn edit\" (click)=\"editDetails()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><g transform=\"translate(-5.6 -6.9)\"><g transform=\"translate(5.6 6.9)\"><path d=\"M16.3,114.3H6.083a.385.385,0,0,0-.383.383.391.391,0,0,0,.383.383H16.308a.385.385,0,0,0,.383-.383A.393.393,0,0,0,16.3,114.3Z\" transform=\"translate(-5.691 -104.271)\" fill=\"#483df6\"/><path d=\"M5.609,13.539,5.6,15.36a.4.4,0,0,0,.112.28.374.374,0,0,0,.271.112l1.812-.009a.374.374,0,0,0,.271-.112l6.256-6.256a.4.4,0,0,0,0-.551L12.529,7.012a.4.4,0,0,0-.551,0L10.726,8.273l-5.005,5A.416.416,0,0,0,5.609,13.539Zm6.649-5.705,1.261,1.261-.71.71L11.548,8.543l.71-.71ZM6.384,13.707,11,9.094l1.261,1.261-4.613,4.6-1.27.009Z\" transform=\"translate(-5.6 -6.9)\" fill=\"#483df6\"/></g></g></svg>\n      edit\n    </ion-button>\n  </ion-toolbar> -->\n\n  <!-- <div class=\"pres_detail\" *ngIf=\"viewloader\">\n    <h4>\n      <span><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></span>\n      <span><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></span>\n    </h4>\n    <p>\n      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n    </p>\n  </div> -->\n\n  <div class=\"pres_detail\">\n    <h4><span>{{data?.event_name}}</span><span>{{data?.event_datetime | date:\"dd MMM,y\" }}</span></h4>\n    <p>{{data?.description}}</p>\n  </div>\n\n  <!-- <ion-slides *ngIf=\"viewloader\" class=\"ion-padding-start ion-padding-end\">\n    <ion-slide>\n        <ion-skeleton-text animated style=\"width: 100%; height:calc(100vh - 250px)\"></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides> -->\n\n  <ion-slides class=\"ion-padding-start ion-padding-end\" [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n    <ion-slide *ngFor=\"let img of view_all_image\">\n      <ion-img [src]=\"environment+img.url\" (click)=\"viewImage(img.url)\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n  \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cgprescriptions.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/cgprescriptions/cgprescriptions.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n   <!--  <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"care-giver-tabs/tabsc/tab1c\"></ion-back-button>\n    <ion-title>Prescriptions</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"SearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n    <ion-chip slot=\"end\" *ngIf=\"profile_details!=undefined\">\n      <ion-label>{{user_name}}</ion-label>\n      <ion-avatar>\n          <span *ngIf=\"profile_pic == null\">{{logoinitial}}</span>\n          <img *ngIf=\"profile_pic != null\" [src]=\"profile_pic\">\n        \n      </ion-avatar>\n    </ion-chip>\n   \n    <!-- <ion-buttons slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"addPrescription()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  \n\n  <ion-list *ngIf=\"loader\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"!loader && prescribe_details.length != 0\">\n   <ion-list *ngFor=\"let view of prescribe_details;let i=index\">\n    <ion-list-header>\n      <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\n    </ion-list-header>\n    <ion-item button *ngFor=\"let event of view.events\">\n      <ion-label text-wrap>\n        <h3 (click)=\"viewPrescription(event)\">{{event.event_name}}</h3>\n        <p (click)=\"viewPrescription(event)\">{{event.description}}</p>\n        <!-- <ion-button class=\"trans_btn\" (click)=\"deletePrescription(event.id)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n          Delete\n        </ion-button> -->\n      </ion-label>\n    </ion-item>\n   </ion-list>\n    <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div *ngIf=\"prescribe_details.length == 0 && !loader\" class=\"no_record\">\n    <div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n      <h3>No Record Found</h3>\n      <!-- <p>Add your record to know your day to day activity</p>\n      <ion-button color=\"secondary\" class=\"btn\" (click)=\"docRecord()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button> -->\n    </div>\n  </div>\n <!-- <ion-card>\n   <ion-card-content *ngFor=\"let tab of tab_details\">\n     <div (click)=\"addPrescription(tab)\">\n\t      <B>{{tab.doc_name}}</B>\n\t      <p>{{tab.description}}</p>\n     </div>\n        <ion-icon name=\"trash\" class=\"ion-float-right\"></ion-icon>\n   </ion-card-content>\n\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"create\" (click)=\"addPrescription('add Prescription')\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CgImageModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgImageModalPage", function() { return CgImageModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





let CgImageModalPage = class CgImageModalPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.slideOpts = {
            centeredSlides: 'true'
        };
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ImageUrl;
        this.image = this.navParams.get('imgSource');
        this.image_details = this.navParams.get('imgDetails');
        console.log(this.image_details);
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
CgImageModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
CgImageModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cg-image-modal',
        template: __webpack_require__(/*! raw-loader!./cg-image-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.html"),
        styles: [__webpack_require__(/*! ../cgprescriptions.page.scss */ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], CgImageModalPage);



/***/ }),

/***/ "./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: CgViewPrescriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewPrescriptionPage", function() { return CgViewPrescriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cg_image_modal_cg_image_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cg-image-modal/cg-image-modal.page */ "./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







let CgViewPrescriptionPage = class CgViewPrescriptionPage {
    constructor(statusBar, route, router, modalController) {
        this.statusBar = statusBar;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        // viewloader:boolean;
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
        };
        //this.viewloader=true;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ImageUrl;
        console.log(this.environment);
        this.route.queryParams.subscribe(params => {
            if (params && params.viewprescription) {
                this.data = JSON.parse(params.viewprescription);
                this.view_all_image = this.data.event_assets;
                console.log(this.view_all_image);
                // this.viewloader=false;
            }
        });
    }
    slidesDidLoad(slides) {
    } //slides.startAutoplay();
    ngOnInit() {
        //let images:any=["../../../../assets/img/login-logo.png","../../../../assets/img/ico.png"]
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#978ad2');
        this.tabBar = document.getElementById('myTabBar1');
        this.tabBar.style.display = 'none';
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#978ad2');
        this.tabBar.style.display = 'flex';
    }
    viewImage(source) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(source);
            const modal = yield this.modalController.create({
                component: _cg_image_modal_cg_image_modal_page__WEBPACK_IMPORTED_MODULE_5__["CgImageModalPage"],
                componentProps: {
                    imgSource: source,
                    imgDetails: this.data
                },
                cssClass: 'modal-fullscreen',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
};
CgViewPrescriptionPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CgViewPrescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cg-view-prescription',
        template: __webpack_require__(/*! raw-loader!./cg-view-prescription.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.html"),
        styles: [__webpack_require__(/*! ../cgprescriptions.page.scss */ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], CgViewPrescriptionPage);



/***/ }),

/***/ "./src/app/care-giver/cgprescriptions/cgprescriptions.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/care-giver/cgprescriptions/cgprescriptions.module.ts ***!
  \**********************************************************************/
/*! exports provided: CgprescriptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgprescriptionsPageModule", function() { return CgprescriptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cgprescriptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cgprescriptions.page */ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _cg_view_prescription_cg_view_prescription_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cg-view-prescription/cg-view-prescription.page */ "./src/app/care-giver/cgprescriptions/cg-view-prescription/cg-view-prescription.page.ts");
/* harmony import */ var _cg_image_modal_cg_image_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cg-image-modal/cg-image-modal.page */ "./src/app/care-giver/cgprescriptions/cg-image-modal/cg-image-modal.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");


















const routes = [
    {
        path: '',
        component: _cgprescriptions_page__WEBPACK_IMPORTED_MODULE_6__["CgprescriptionsPage"]
    },
    {
        path: 'view-cg-prescription',
        component: _cg_view_prescription_cg_view_prescription_page__WEBPACK_IMPORTED_MODULE_8__["CgViewPrescriptionPage"]
    },
    {
        path: 'cg-image-modal',
        component: _cg_image_modal_cg_image_modal_page__WEBPACK_IMPORTED_MODULE_9__["CgImageModalPage"]
    }
];
let CgprescriptionsPageModule = class CgprescriptionsPageModule {
};
CgprescriptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cgprescriptions_page__WEBPACK_IMPORTED_MODULE_6__["CgprescriptionsPage"], _cg_view_prescription_cg_view_prescription_page__WEBPACK_IMPORTED_MODULE_8__["CgViewPrescriptionPage"], _cg_image_modal_cg_image_modal_page__WEBPACK_IMPORTED_MODULE_9__["CgImageModalPage"]],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__["Crop"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__["Toast"]
        ]
    })
], CgprescriptionsPageModule);



/***/ }),

/***/ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/care-giver/cgprescriptions/cgprescriptions.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #978ad2;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-card {\n  box-shadow: none;\n  border: 1px solid #d8dbde;\n  max-height: 120px;\n  min-height: 120px;\n  height: 100%; }\n  ion-card:not(.ion-no-margin) {\n    margin: 0; }\n  ion-card:not(.has_image) {\n    --background: transparent;\n    border: 1px dashed #9e9fa0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-card:not(.has_image) p {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-card ion-card-content {\n    padding: 0;\n    height: 100%; }\n  ion-card ion-card-content img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      background-color: #d8dbde; }\n  ion-card ion-button {\n    --padding-end: 0;\n    --padding-start: 0;\n    --border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0;\n    position: absolute;\n    bottom: 6px;\n    right: 6px; }\n  .edit {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: #483df6;\n  margin: 0;\n  height: auto; }\n  .edit svg {\n    margin: 1px 2px 0 0; }\n  .pres_detail {\n  padding: 16px 16px 0; }\n  .pres_detail h4 {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: unset;\n    line-height: inherit;\n    color: #2c2c2c;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n  .pres_detail h4 span:last-child {\n      font-size: 12px; }\n  .pres_detail p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 4px; }\n  ion-slides {\n  --bullet-background: #484848; }\n  ion-slides ion-img {\n    height: calc(100vh - 235px);\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 40px;\n    width: 100%;\n    background-color: #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci9jZ3ByZXNjcmlwdGlvbnMvY2dwcmVzY3JpcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyREE7RUF4QkksaUJBMkJzQjtFQTFCdEIsZ0JBMEIyQjtFQXhCN0IsaUJBd0JnQztFQXZCaEMsMEJBdUI0QztFQXRCNUMsZ0JBc0JrRDtFQXJCbEQsb0JBcUIyRDtFQXBCM0QsY0FvQm9FLEVBQUE7RUFIdEU7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtFQVVNLGlCQUFpQixFQUFBO0VBVnZCO0VBYU0sb0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBbkJ4QjtFQXdCTSxhQUFhLEVBQUE7RUFLbkI7RUFFSSxxQkFBYSxFQUFBO0VBSWpCO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7RUExQ0Usb0JBZ0RvQjtFQWhEcEIsYUFnRG9CO0VBL0NwQixpQkErQzRCO0VBOUM1Qix5QkE4Q29DO1VBOUNwQyxtQkE4Q29DO0VBN0NwQyx1QkE2QzJDO1VBN0MzQyxzQkE2QzJDO0VBQ3pDLG9CQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQVh0QjtJQWNNLG1CQUFtQixFQUFBO0VBZHpCO0lBM0RJLGVBNkVvQjtJQTVFcEIsZ0JBNEV5QjtJQTFFM0IsaUJBMEU4QjtJQXpFOUIsMEJBeUUwQztJQXhFMUMsa0JBd0VrRDtJQXZFbEQsb0JBdUUyRDtJQXRFM0QsY0FzRW9FO0lBQ2hFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBdEJ4QjtJQTJCUSxlQUFlLEVB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QUFBO0VBckN4QjtNQWdETSxjQUFjLEVBQUE7RUMxc0JwQjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQVEsRUFBQTtFQUlaO0VBQ0UscUJBQWE7RUFDYixnQkFBUTtFQUNSLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VEcUJqQixlQ3BCZ0I7RURxQmhCLGdCQ3JCcUI7RUR1QnZCLGlCQ3ZCMEI7RUR3QjFCLHFCQ3hCaUM7RUR5QmpDLG1CQ3pCMEM7RUQwQjFDLG9CQzFCbUQ7RUQyQm5ELFdDM0J5RCxFQUFBO0VBRzNEO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLHNCQUFvQixFQUFBO0VBTnhCO0lEaUJJLGlCQ1JzQjtJRFN0QixnQkNUMkI7SURXN0IsaUJDWGdDO0lEWWhDLDBCQ1o0QztJRGE1QyxtQkNicUQ7SURjckQsb0JDZDhEO0lEZTlELGNBbENrQjtJQ29CZCxtQkFBbUIsRUFBQTtFQVZ6QjtJRGlCSSxlQ0hvQjtJRElwQixnQkNKeUI7SURNM0IsaUJDTjhCO0lETzlCLHFCQ1BxQztJRFFyQyxtQkNSOEM7SURTOUMsb0JDVHVEO0lEVXZELGNDVmdFO0lBQzVELGVBQWUsRUFBQTtFQWZyQjtFRGlCSSxrQkNFcUI7RUREckIsZ0JDQzBCO0VEQzVCLGlCQ0QrQjtFREUvQiwwQkNGMkM7RURHM0MsbUJDSG9EO0VESXBELG9CQ0o2RDtFREs3RCxXQ0xtRTtFQUNqRSxnQkFBUTtFQUNSLDBCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhLEVBQUE7RUF6QmpCO0lBMkJNLG9CQUFvQixFQUFBO0VBSzFCO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLGtDQUEwQjtFQUMxQixnQ0FBd0I7RUFDeEIsa0NBQTBCO0VBQzFCLGtCQUFnQjtFRHRCaEIsZUN1QmtCO0VEdEJsQixnQkNzQnVCO0VEcEJ6QixpQkNvQjRCO0VEbkI1QixvQkNtQmtDO0VEbEJsQyxnQkNrQndDO0VEakJ4QyxvQkNpQmlEO0VEaEJqRCxjQWxDa0I7RUNtRGhCLG1CQUFtQixFQUFBO0VBVHZCO0lBWU0sZ0JBQVEsRUFBQTtFQVpkO0lBZ0JNLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsd0JBQWE7SUFDYixvQkFBZ0I7SUFDaEIsa0JBQWE7SUFDYix1QkFBZTtJQUNmLFNBQVMsRUFBQTtFQUtmO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtFQUxkO0lBUUksU0FBUyxFQUFBO0VBUmI7SUFZSSx5QkFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFmdkI7TUQ3Q0ksZUM4RG9CO01EN0RwQixnQkM2RHlCO01EM0QzQixpQkMyRDhCO01EMUQ5QixxQkMwRHFDO01EekRyQyxtQkN5RDhDO01EeEQ5QyxvQkN3RHVEO01EdkR2RCxjQ3VEZ0UsRUFBQTtFQWpCbEU7SUFzQkksVUFBVTtJQUNWLFlBQVksRUFBQTtFQXZCaEI7TUEwQk0sWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7RUE1Qi9CO0lBaUNJLGdCQUFjO0lBQ2Qsa0JBQWdCO0lBQ2hCLG9CQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUlkO0VEMUZJLGlCQzJGa0I7RUQxRmxCLGdCQzBGdUI7RUR4RnpCLGlCQ3dGNEI7RUR2RjVCLHFCQ3VGbUM7RUR0Rm5DLGtCQ3NGMkM7RURyRjNDLG9CQ3FGb0Q7RURwRnBELGNBL0JlO0VDb0hmLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFIZDtJQU1JLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0Usb0JBQW9CLEVBQUE7RUFEdEI7SURwR0ksZUN3R2tCO0lEdkdsQixnQkN1R3VCO0lEckd6QixpQkNxRzRCO0lEcEc1QixxQkNvR21DO0lEbkduQyxpQkNtRzBDO0lEbEcxQyxvQkNrR21EO0lEakduRCxjQWxDa0I7SUE0Q2xCLG9CQ3dGb0I7SUR4RnBCLGFDd0ZvQjtJRHZGcEIsZUN1RjBCO0lEdEYxQix5QkNzRmtDO1lEdEZsQyxtQkNzRmtDO0lEckZsQyx5QkNxRmlEO1lEckZqRCw4QkNxRmlEO0lBSS9DLFNBQVMsRUFBQTtFQVRiO01BT00sZUFBZSxFQUFBO0VBUHJCO0lEcEdJLGVDaUhrQjtJRGhIbEIsZ0JDZ0h1QjtJRDlHekIsaUJDOEc0QjtJRDdHNUIscUJDNkdtQztJRDVHbkMsbUJDNEc0QztJRDNHNUMsb0JDMkdxRDtJRDFHckQsY0MwRzhEO0lBQzVELGVBQWUsRUFBQTtFQUduQjtFQUNFLDRCQUFvQixFQUFBO0VBRHRCO0lBSUksMkJBQTJCO0lBQzNCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmUtZ2l2ZXIvY2dwcmVzY3JpcHRpb25zL2NncHJlc2NyaXB0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcbiRteS1ncmV5LWJsdWUgOiAjZWE0ZTRlO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodCwgJGxldHRlciwgJHRyYW5zZm9ybSwgJGFsaWduLCAkbGluZV9oZWlnaHQsICRmbl9jb2xvcikge1xuICBmb250OiB7XG4gICAgc2l6ZTogJHNpemU7XG4gICAgd2VpZ2h0OiAkd2VpZ2h0O1xuICB9XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgdGV4dC1hbGlnbjogJGFsaWduO1xuICBsaW5lLWhlaWdodDogJGxpbmVfaGVpZ2h0O1xuICBjb2xvcjogJGZuX2NvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR3aWR0aCwgJHN0eWxlLCAkYnJjb2xvcikge1xuICBib3JkZXItd2lkdGg6ICR3aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3R5bGU7XG4gIGJvcmRlci1jb2xvcjogJGJyY29sb3I7XG59XG5cbkBtaXhpbiBmbGV4KCRmbGV4LCAkd3JhcCwgJGFsaWduLCAkanVzdGlmeSkge1xuICBkaXNwbGF5OiAkZmxleDtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbn1cblxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICAvLyBpb24taXRlbXtcbiAgLy8gICBpb24tbGFiZWx7XG4gIC8vICAgICAtLWNvbG9yOiAjN2I3YjdiO1xuICAvLyAgIH1cbiAgLy8gfVxuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzFjMWMxYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGRjNjg7XG4gICAgICBwYWRkaW5nOiAxcHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXI6bm90KC5uby1iYWNrZ3JvdW5kKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmN2Y2ZmY7XHJcbiAgLS1jb2xvcjogIzJjMmMyYztcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBAaW5jbHVkZSBmb250KDEycHgsIDYwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgIzhiOTM5OCk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRyYW5zX2J0biB7XHJcbiAgICBAaW5jbHVkZSBmb250KDAuNzVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgICAtLWNvbG9yOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNlYTRlNGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW46IC0xcHggMnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcHJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tcmlwcGxlLWNvbG9yOiAjZmE1ZTYxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkYmRlO1xyXG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJjpub3QoLmlvbi1uby1tYXJnaW4pe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLmhhc19pbWFnZSkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWU5ZmEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAjOGI5Mzk4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGRiZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICByaWdodDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXQge1xyXG4gIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsICRwcmltYXJ5KTtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luOiAxcHggMnB4IDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcmVzX2RldGFpbHtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcclxuXHJcbiAgaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIHVuc2V0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XHJcbiAgICBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxufVxyXG5pb24tc2xpZGVze1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICM0ODQ4NDg7XHJcbiAgXHJcbiAgaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzVweCk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/care-giver/cgprescriptions/cgprescriptions.page.ts ***!
  \********************************************************************/
/*! exports provided: CgprescriptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgprescriptionsPage", function() { return CgprescriptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");













let CgprescriptionsPage = class CgprescriptionsPage {
    constructor(toast, alertController, toastController, router, statusBar, settingService, databaseSummary, database) {
        this.toast = toast;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.statusBar = statusBar;
        this.settingService = settingService;
        this.databaseSummary = databaseSummary;
        this.database = database;
        this.pres_page = 1;
        this.prescribe_details = [];
        this.prescribe_scroll = [];
        this.data_details = [];
        this.pres_page_offset = 0;
        this.environmentUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ImageUrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loader = true;
        this.statusBar.backgroundColorByHexString('#978ad2');
        this.tabBar = document.getElementById('myTabBar1').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.pres_page = 1;
        this.pres_page_offset = 0;
        // this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {      
        //     let data:any = res['event_list'];
        //     this.data_details=res['event_list'];      
        //        setInterval(() => {  
        //          this.loader=false;
        //        }, 2000);
        //     this.groupBy(data);
        this.databaseSummary.getAllEvents('prescription', 'New', this.pres_page_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
        }).catch(err => { console.log(err); });
        //  Need to Update
        //     this.profile_details=JSON.parse(localStorage.getItem("details"));
        //     console.log(this.profile_details)
        //     if(this.profile_details!= undefined){
        //     console.log(this.profile_details)
        //     this.logoinitial=this.profile_details.name.charAt(0);
        //     this.profile_pic=this.environmentUrl+this.profile_details.profile_pic;
        //     if(this.profile_details.profile_pic==null){
        //       this.profile_pic=null;  
        //     }
        //     this.user_name=this.profile_details.name;
        //     }
        //  }); 
    }
    groupBy(data) {
        let records = data.map(item => ({
            id: item.id,
            created_at: item.created_at,
            description: item.description,
            event_assets: item.event_assets,
            event_name: item.event_name,
            event_datetime: item.event_datetime,
            value: item.value,
            event_type: item.event_type,
            user_id: item.user_id,
            playing: false,
            progress: 0
        }));
        let value = [];
        const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])()))).subscribe(val => {
            console.log(val);
            if (val) {
                let ff = { "created_at": val[0].event_datetime, "events": val };
                value.push(ff);
            }
        });
        this.prescribe_details = value;
        this.loader = false;
    }
    /*addPrescription(){
     
    this.router.navigate(['self-care-tabs/tabs/tab1/prescriptions/add-prescription']);
   }*/
    /*async deletePrescription(id){
      console.log(id)
     const alert = await this.alertController.create({
          header: 'Prescriptions',
          message: 'Are you sure want to delete?',
          mode: 'ios',
          buttons: [
            {
              text: 'Confirm',
              handler: () => {
                this.settingService.commonDeleteEvent(id).subscribe(res => {
                  console.log(res)
                  this.presentToast("Record Deleted Successfully");
                  this.ionViewWillEnter();
                }, error => {
                  console.log(error)
                })
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
        await alert.present();
    }*/
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
        this.pres_page = 1;
        this.pres_page_offset = 0;
        // this.settingService.commonDateEventSearchList('prescription',search).subscribe(res=>{
        //   console.log(res)
        //  let data:any = res['event_list'];
        //  this.data_details=res['event_list'];  
        //  this.groupBy(data)
        // }, error=>{
        //      this.presentToast("Server slow, Please try again")
        // })
        this.databaseSummary.getAllEventsSearchList('prescription', search, 'New', this.pres_page_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
        }).catch(err => { console.log(err); });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.pres_page += 1;
            this.pres_page_offset = this.pres_page * 10 - 10;
            let data = [];
            this.databaseSummary.getAllEvents('prescription', 'New', this.pres_page_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                data = res['event_list'];
                let concat = yield this.data_details.concat(data);
                this.prescribe_scroll = yield concat.map(item => ({
                    id: item.id,
                    event_id: item.event_id,
                    created_at: item.created_at,
                    description: item.description,
                    event_assets: item.event_assets,
                    event_options: item.event_options,
                    event_name: item.event_name,
                    event_datetime: item.event_datetime,
                    value: item.value,
                    event_type: item.event_type,
                    user_id: item.user_id,
                    playing: false,
                    progress: 0
                }));
                let value = [];
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.prescribe_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = {};
                        ff["created_at"] = val[0].event_datetime;
                        ff["events"] = val;
                        value.push(ff);
                    }
                });
                this.prescribe_scroll = value;
                this.prescribe_details = this.prescribe_scroll;
                event.target.complete();
                if (this.pres_page * 10 != this.prescribe_details.length) {
                    event.target.disabled = true;
                }
            })).catch(err => { console.log(err); });
        }, 500);
        //   this.settingService.commonDateEventList("prescription",this.pres_page).subscribe(res => {
        //      let data:any[] = res['event_list'];
        //      let concat=this.data_details.concat(data);
        //       this.prescribe_scroll=concat.map(item => ({
        //        id:item.id,
        //        created_at: item.created_at,
        //        description: item.description,
        //        event_assets: item.event_assets,
        //        event_name: item.event_name,
        //        event_datetime:item.event_datetime,
        //        value: item.value,
        //        event_type: item.event_type,
        //        user_id: item.user_id,
        //        playing: false,
        //        progress: 0
        //       }));
        //       let value:any = []
        //       const example = from(this.prescribe_scroll).pipe(
        //         groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
        //         mergeMap(group => group.pipe(toArray()))
        //       ).subscribe(val => {
        //         console.log(val)
        //         if(val){
        //             let ff: any = {}
        //             ff["created_at"] = val[0].event_datetime 
        //             ff["events"] = val
        //             value.push(ff);
        //         }
        //       })
        //       this.prescribe_scroll=value;
        //       //this.prescribe_scroll.map(item => this.prescribe_details.push(item));
        //       this.prescribe_details=this.prescribe_scroll;
        //       event.target.complete();
        //       if (this.pres_page *10 !=this.prescribe_details.length){
        //          event.target.disabled = true;
        //       }
        //   },error=>{
        //      event.target.disabled = true;
        //   })
        //  }, 500);
    }
    viewPrescription(view) {
        if (this.prescribe_details.length != 0) {
            let navigationExtras = {
                queryParams: {
                    viewprescription: JSON.stringify(view)
                }
            };
            this.router.navigate(['care-giver-tabs/tabsc/tab1c/cg-prescriptions/view-cg-prescription'], navigationExtras);
        }
    }
    ionViewWillLeave() {
        this.tabBar.classList.add("tab-selected");
        this.statusBar.backgroundColorByHexString('#483df6');
    }
};
CgprescriptionsPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_4__["careGiverService"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__["DataBaseSummaryProvider"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__["DatabaseProvider"] }
];
CgprescriptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cgprescriptions',
        template: __webpack_require__(/*! raw-loader!./cgprescriptions.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/cgprescriptions/cgprescriptions.page.html"),
        styles: [__webpack_require__(/*! ./cgprescriptions.page.scss */ "./src/app/care-giver/cgprescriptions/cgprescriptions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_4__["careGiverService"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_12__["DataBaseSummaryProvider"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_11__["DatabaseProvider"]])
], CgprescriptionsPage);



/***/ })

}]);
//# sourceMappingURL=cgprescriptions-cgprescriptions-module-es2015.js.map