(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/add-report/add-report.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/reports/add-report/add-report.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n\t<ion-toolbar>\n\t\t<ion-title class=\"ion-padding-start\">Add Report</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\n<ion-content class=\"ion-padding\">\n\n\t<form class=\"footerform\" [formGroup]=\"reportForm\" (ngSubmit)=\"reportSubmit(reportForm.value)\">\n\t\t<ion-card button *ngIf=\"!active\" class=\"ion-no-margin ion-margin-top ion-margin-bottom\" (click)=\"AddImage()\">\n\t\t\t<ion-card-content class=\"ion-text-center\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\n\t\t\t\t<p>Add Photos of your Report</p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-grid *ngIf=\"active\" class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" *ngFor=\"let file of store_photos; let i = index\">\n\t\t\t\t\t<ion-card class=\"has_image\">\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<img [src]=\"file\">\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t<ion-button color=\"tertiary\" (click)=\"removeImage(i)\">\n\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t<ion-card button (click)=\"AddImage()\">\n\t\t\t\t\t\t<ion-card-content class=\"ion-text-center\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\n\t\t\t\t\t\t\t<p>Add More</p>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t\t<ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_category.invalid,'ion-touched': submitted && f.event_category.invalid }\">\n\t\t\t<ion-label position=\"floating\">Report Type</ion-label>\n\t\t\t<ion-select okText=\"ok\" cancelText=\"cancel\" formControlName=\"event_category\">\n\t\t      <!-- <ion-select-option value=\"ct_scan\">CT Scan</ion-select-option>\n\t\t      <ion-select-option value=\"blonde\"></ion-select-option>\n\t\t      <ion-select-option value=\"black\">Black</ion-select-option>\n\t\t      <ion-select-option value=\"red\">Red</ion-select-option> -->\n\t\t      <ion-select-option *ngFor=\"let report of reportTypeValue\" [value]=\"report\">{{report}}</ion-select-option>\n            </ion-select>\n\t\t</ion-item>\n\t\t<ion-item *ngIf=\"reportForm.value['event_category']=='Others'\" [ngClass]=\"{ 'ion-invalid': submitted && f.others.invalid,'ion-touched': submitted && f.others.invalid }\">\n\t       <ion-label position=\"floating\">Report Type Name(Others)</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"others\"></ion-input>\n        </ion-item>\n\t\t<ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.event_name.invalid,'ion-touched': submitted && f.event_name.invalid }\">\n\t\t\t<ion-label position=\"floating\">Name</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item button>\n\t\t\t<ion-label position=\"floating\">Report Date</ion-label>\n\t\t\t<ion-datetime displayFormat=\"DD MMM YYYY\" [min]=\"year\" [max]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\n\t\t\t<ion-button>\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n\t\t\t</ion-button>\n\t\t</ion-item>\n\t\t<ion-item>  \n\t\t\t<ion-label position=\"floating\">Description</ion-label>\n\t\t\t<ion-textarea formControlName=\"description\"></ion-textarea>\n\t\t</ion-item>\n\n\n\t\t<div class=\"footer\">\n\t\t\t<ion-button expand=\"block\" (click)=\"close()\" [disabled]=\"Progress\">\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t\t<button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</ion-content>\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/edit-report/edit-report.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/reports/edit-report/edit-report.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n\t<ion-toolbar>\n\t\t<ion-title class=\"ion-padding-start\">Edit Report</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"Progress\"></ion-progress-bar>\n\n<ion-content class=\"ion-padding\">\n\t<form class=\"footerform\" [formGroup]=\"editReport\" *ngIf=\"editReport\" (ngSubmit)=\"editReportSubmit(editReport.value)\">\n\t\t<ion-card button *ngIf=\"edit_all_image.length==0\" class=\"ion-no-margin ion-margin-top ion-margin-bottom\" (click)=\"AddImage()\">\n\t\t\t<ion-card-content class=\"ion-text-center\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\n\t\t\t\t<p>Add Photos of your Report</p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t\n\t\t<ion-grid *ngIf=\"edit_all_image.length !=0\" class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"4\" *ngFor=\"let img of edit_all_image; let i=index\">\n\t\t\t\t\t\t<ion-card class=\"has_image\">\n\t\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t<img *ngIf=\"!isNetwork && !img.delete || img.globalURI==null && !img.delete\" [src]=\"webview.convertFileSrc(img.localURI)\">\n\t\t\t\t\t\t\t    <img *ngIf=\"isNetwork && !img.delete && img.globalURI!=null\" [src]=\"img.globalURI\">\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t\t<ion-button color=\"tertiary\" (click)=\"removeImg(i,img,originalArray)\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-card button (click)=\"AddImage()\">\n\t\t\t\t\t\t\t<ion-card-content class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.652\" height=\"22.931\" viewBox=\"0 0 28.652 22.931\"><g transform=\"translate(0.5 -5.5)\"><path d=\"M26.045,10H1.607A1.609,1.609,0,0,0,0,11.607V28.417a1.609,1.609,0,0,0,1.607,1.607H26.045a1.609,1.609,0,0,0,1.607-1.607V11.607A1.609,1.609,0,0,0,26.045,10ZM26.7,28.417a.654.654,0,0,1-.653.653H1.607a.654.654,0,0,1-.653-.653V11.607a.654.654,0,0,1,.653-.653H26.045a.654.654,0,0,1,.653.653V28.417Z\" transform=\"translate(0 -2.093)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M21.1,14a8.1,8.1,0,1,0,8.1,8.1A8.114,8.114,0,0,0,21.1,14Zm0,15.256A7.151,7.151,0,1,1,28.256,22.1,7.16,7.16,0,0,1,21.1,29.256Z\" transform=\"translate(-6.802 -4.186)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/><path d=\"M19.477,6.954h9.058a.477.477,0,0,0,0-.954H19.477a.477.477,0,1,0,0,.954Z\" transform=\"translate(-9.942 0)\" fill=\"#c3c5c8\" stroke=\"#c3c5c8\" stroke-width=\"1\"/></g></svg>\n\t\t\t\t\t\t\t\t<p>Add More</p>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\n\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Report Type</ion-label>\n\t\t\t<ion-select okText=\"ok\" cancelText=\"cancel\" formControlName=\"event_category\">\n\t\t      <!-- <ion-select-option value=\"ct_scan\">CT Scan</ion-select-option>\n\t\t      <ion-select-option value=\"blonde\"></ion-select-option>\n\t\t      <ion-select-option value=\"black\">Black</ion-select-option>\n\t\t      <ion-select-option value=\"red\">Red</ion-select-option> -->\n\t\t      <ion-select-option *ngFor=\"let report of reportTypeValue\" [value]=\"report\">{{report}}</ion-select-option>\n            </ion-select>\n\t\t</ion-item>\n\t\t<ion-item *ngIf=\"editReport.value['event_category']=='Others'\">\n\t       <ion-label position=\"floating\">Report Type Name(Others)</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"others\"></ion-input>\n        </ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Name</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"event_name\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item button>\n\t\t\t<ion-label position=\"floating\">Prescription Date</ion-label>\n\t\t\t<ion-datetime displayFormat=\"DD MMM YYYY\" [min]=\"year\" [max]=\"todaydate\" formControlName=\"event_datetime\"></ion-datetime>\n\t\t\t<ion-button>\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\"><path d=\"M18.539,1.641h-.984V0H15.914V1.641H5.086V0H3.445V1.641H2.461A2.464,2.464,0,0,0,0,4.1V18.539A2.464,2.464,0,0,0,2.461,21H18.539A2.464,2.464,0,0,0,21,18.539V4.1A2.464,2.464,0,0,0,18.539,1.641Zm.82,16.9a.821.821,0,0,1-.82.82H2.461a.821.821,0,0,1-.82-.82V7.711H19.359Zm0-12.469H1.641V4.1a.821.821,0,0,1,.82-.82h.984V4.922H5.086V3.281H15.914V4.922h1.641V3.281h.984a.821.821,0,0,1,.82.82Z\" fill=\"#ea4e4e\"/><g transform=\"translate(3.117 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 9.434)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(3.117 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(6.398 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(9.68 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(12.961 15.996)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g><g transform=\"translate(16.242 12.715)\"><rect width=\"1.641\" height=\"1.641\" fill=\"#ea4e4e\"/></g></svg>\n\t\t\t</ion-button>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Description</ion-label>\n\t\t\t<ion-textarea formControlName=\"description\"></ion-textarea>\n\t\t</ion-item>\n\n\n\t\t<div class=\"footer\">\n\t\t\t<ion-button expand=\"block\" (click)=\"close()\" [disabled]=\"Progress\">\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t\t<button type=\"submit\" class=\"btn_submit\" [disabled]=\"Progress\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</ion-content>\n<ion-backdrop *ngIf=\"Progress\"></ion-backdrop>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/report-modal/report-modal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/reports/report-modal/report-modal.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [forceOverscroll]=\"false\" fullscreen=\"true\" class=\"preview_img\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{image_details?.event_datetime | date:\"dd MMMM,y\"}}</ion-title>\n  </ion-toolbar>\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"swiper-zoom-container\"><img [src]=\"image\" /></div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"img_details\">\n    <h3>{{ image_details?.event_name }}</h3>\n    <p>{{ image_details?.description }}</p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/reports.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/reports/reports.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1\"></ion-back-button>\n    <ion-title>Reports</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-toolbar class=\"action_tools\" *ngIf=\"loader\">\n    <ion-skeleton-text slot=\"start\" animated style=\"width: 20%\"></ion-skeleton-text>\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"action_tools\" *ngIf=\"!loader\">\n    <ion-searchbar (ionChange)=\"SearchItem($event)\" slot=\"start\" placeholder=\"Search\" [debounce]=\"250\" mode=\"ios\"></ion-searchbar>\n    <ion-buttons slot=\"end\" color=\"secondary\">\n      <ion-button class=\"btn\" (click)=\"addReport()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n        Add\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-list *ngIf=\"loader\">\n    <ion-list-header>\n      <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n<div *ngIf=\"!loader && report_details.length != 0\">\n  <ion-list *ngFor=\"let view of report_details;let i=index\">\n    <ion-list-header>\n      <ion-label>{{view.created_at | date:\"dd MMM,y\"}}</ion-label>\n    </ion-list-header>\n    <ion-item button  *ngFor=\"let event of view.events\">\n      <ion-label text-wrap>\n        <h3 (click)=\"viewReport(event)\">{{event.event_category}}</h3>\n        <h3 (click)=\"viewReport(event)\">{{event.event_name}}</h3>\n        <p  (click)=\"viewReport(event)\">{{event.description}}</p>\n        <ion-button class=\"trans_btn\" (click)=\"deleteReport(event)\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.873\" height=\"13.398\" viewBox=\"0 0 10.873 13.398\"><g transform=\"translate(0.1 0.1)\"><g transform=\"translate(0)\"><path d=\"M55.32,1.581H53.266a1.786,1.786,0,0,0-3.548,0H47.663a1.51,1.51,0,0,0-1.508,1.508v.077a1.509,1.509,0,0,0,.953,1.4V11.69A1.51,1.51,0,0,0,48.616,13.2h5.752a1.51,1.51,0,0,0,1.508-1.508V4.567a1.509,1.509,0,0,0,.953-1.4V3.089A1.51,1.51,0,0,0,55.32,1.581ZM51.491.715a1.073,1.073,0,0,1,1.052.866h-2.1A1.073,1.073,0,0,1,51.491.715ZM55.16,11.69a.794.794,0,0,1-.793.793H48.616a.794.794,0,0,1-.793-.793V4.674H55.16Zm.953-8.524a.794.794,0,0,1-.793.793H47.663a.794.794,0,0,1-.793-.793V3.089a.794.794,0,0,1,.793-.793H55.32a.794.794,0,0,1,.793.793v.077Z\" transform=\"translate(-46.155)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M158.433,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,158.433,254.312Z\" transform=\"translate(-155.013 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M228.5,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,228.5,254.312Z\" transform=\"translate(-223.166 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/><path d=\"M298.572,254.312a.358.358,0,0,0,.358-.358v-4.026a.358.358,0,1,0-.715,0v4.026A.358.358,0,0,0,298.572,254.312Z\" transform=\"translate(-291.318 -242.743)\" fill=\"#fa5457\" stroke=\"#fa5457\" stroke-width=\"0.2\"/></g></g></svg>\n          Delete\n        </ion-button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\"  (ionInfinite)=\"loadData($event)\"> <!-- *ngIf=\"healthDiaryPage * 10 ==health_records.length\" -->\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>\n<div *ngIf=\"report_details.length == 0 && !loader\" class=\"no_record\">\n  <div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"102.83\" height=\"97.896\" viewBox=\"0 0 102.83 97.896\"><defs><linearGradient id=\"a\" x1=\"0.509\" y1=\"0.997\" x2=\"0.509\" y2=\"-0.003\" gradientUnits=\"objectBoundingBox\"><stop offset=\"0\" stop-color=\"gray\" stop-opacity=\"0.251\"/><stop offset=\"0.54\" stop-color=\"gray\" stop-opacity=\"0.122\"/><stop offset=\"1\" stop-color=\"gray\" stop-opacity=\"0.102\"/></linearGradient><linearGradient id=\"b\" x1=\"0.813\" y1=\"0.841\" x2=\"0.813\" y2=\"-0.159\" xlink:href=\"#a\"/><linearGradient id=\"c\" x1=\"1.78\" y1=\"0.849\" x2=\"1.78\" y2=\"-0.151\" xlink:href=\"#a\"/><linearGradient id=\"d\" x1=\"0.5\" y1=\"1\" x2=\"0.5\" y2=\"0\" xlink:href=\"#a\"/><linearGradient id=\"f\" x1=\"0.5\" y1=\"0.999\" x2=\"0.5\" y2=\"-0.001\" xlink:href=\"#a\"/></defs><g transform=\"translate(0 0)\"><rect width=\"54.792\" height=\"75.705\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 8.666, 16.987)\" fill=\"#e0e0e0\"/><g transform=\"translate(9.841 6.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 0, 11.106)\" fill=\"url(#a)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 10.612, 18.43)\" fill=\"#fafafa\"/><rect width=\"25.594\" height=\"6.2\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.737, 12.656)\" fill=\"url(#b)\"/><path d=\"M441.3,91.351a3.664,3.664,0,1,0,4.263,2.831A3.621,3.621,0,0,0,441.3,91.351Zm1.212,5.654a2.114,2.114,0,1,1,1.575-2.508,2.089,2.089,0,0,1-1.575,2.508Z\" transform=\"translate(-407.323 -87.3)\" fill=\"url(#c)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"matrix(0.978, -0.21, 0.21, 0.978, 22.945, 12.34)\" fill=\"#0e9bff\"/><path d=\"M441.623,91.351a3.5,3.5,0,1,0,4.159,2.689A3.5,3.5,0,0,0,441.623,91.351Zm1.158,5.4a2.021,2.021,0,1,1,1.552-2.4,2.021,2.021,0,0,1-1.552,2.4Z\" transform=\"translate(-407.645 -87.3)\" fill=\"#0e9bff\"/><rect width=\"54.792\" height=\"75.705\" transform=\"translate(32.333 14.658)\" fill=\"#e0e0e0\"/><g transform=\"translate(33.26 15.938)\" opacity=\"0.5\"><rect width=\"52.94\" height=\"73.146\" fill=\"url(#d)\"/></g><rect width=\"51.592\" height=\"71.53\" transform=\"translate(33.933 16.477)\" fill=\"#fff\"/><rect width=\"25.594\" height=\"6.2\" transform=\"translate(47 13.375)\" fill=\"url(#d)\"/><path d=\"M641.9,118a3.665,3.665,0,1,0,3.578,3.664A3.622,3.622,0,0,0,641.9,118Zm0,5.777a2.114,2.114,0,1,1,2.064-2.114,2.089,2.089,0,0,1-2.064,2.1Z\" transform=\"translate(-582.101 -110.677)\" fill=\"url(#f)\"/><rect width=\"25.055\" height=\"5.927\" transform=\"translate(47.269 13.109)\" fill=\"#0e9bff\"/><path d=\"M642.432,118a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,642.432,118Zm0,5.523a2.023,2.023,0,1,0,0-.006Z\" transform=\"translate(-582.635 -110.677)\" fill=\"#0e9bff\"/><g transform=\"translate(0.814 92.409)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.102) rotate(90)\" fill=\"#47e6b1\"/></g><g transform=\"translate(55.505)\" opacity=\"0.5\"><rect width=\"0.471\" height=\"2.674\" transform=\"translate(1.101)\" fill=\"#47e6b1\"/><rect width=\"0.471\" height=\"2.674\" transform=\"translate(2.674 1.101) rotate(90)\" fill=\"#47e6b1\"/></g><path d=\"M947.523,824.69a.578.578,0,0,1-.322-.7.282.282,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.272.272,0,0,0-.033.056.578.578,0,0,1-.7.322.279.279,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.277.277,0,0,0,.056.033.578.578,0,0,1,.322.7.273.273,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.272.272,0,0,0,.033-.056.578.578,0,0,1,.7-.322.279.279,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.274.274,0,0,0,947.523,824.69Z\" transform=\"translate(-850.847 -727.829)\" fill=\"#4d8af0\" opacity=\"0.5\"/><path d=\"M313.113,619.63a.578.578,0,0,1-.322-.7.279.279,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.28.28,0,0,0-.033.056.578.578,0,0,1-.7.322.269.269,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.279.279,0,0,0,.056.033.578.578,0,0,1,.322.7.277.277,0,0,0-.013.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.28.28,0,0,0,313.113,619.63Z\" transform=\"translate(-295.978 -548.479)\" fill=\"#fdd835\" opacity=\"0.5\"/><path d=\"M841.523,120.31a.578.578,0,0,1-.322-.7.285.285,0,0,0,.013-.064h0a.29.29,0,0,0-.52-.192h0a.274.274,0,0,0-.033.056.578.578,0,0,1-.7.322.28.28,0,0,0-.064-.013h0a.29.29,0,0,0-.192.52h0a.275.275,0,0,0,.056.033.578.578,0,0,1,.322.7.278.278,0,0,0-.012.064h0a.29.29,0,0,0,.52.192h0a.274.274,0,0,0,.033-.056.578.578,0,0,1,.7-.322.278.278,0,0,0,.064.013h0a.29.29,0,0,0,.192-.52h0A.275.275,0,0,0,841.523,120.31Z\" transform=\"translate(-758.137 -111.762)\" fill=\"#fdd835\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(100.942 38.483)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(27.984 92.668)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(91.247 58.889)\" fill=\"#f55f44\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(9.981 11.136)\" fill=\"#4d8af0\" opacity=\"0.5\"/><circle cx=\"0.944\" cy=\"0.944\" r=\"0.944\" transform=\"translate(0 36.89)\" fill=\"#47e6b1\" opacity=\"0.5\"/></g></svg>\n    <h3>No Record Found</h3>\n    <!-- <p>Add your record to know your day to day activity</p>\n    <ion-button class=\"btn\" (click)=\"addReport()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.965\" height=\"11.965\" viewBox=\"0 0 11.965 11.965\"><g transform=\"translate(-291.035 -86.035)\"><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(296.322 86.035)\" fill=\"#2c2c2c\"/><rect width=\"1.391\" height=\"11.965\" rx=\"0.696\" transform=\"translate(291.035 92.713) rotate(-90)\" fill=\"#2c2c2c\"/></g></svg>\n      Add\n    </ion-button> -->\n  </div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/view-report/view-report.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/reports/view-report/view-report.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>view-patient-prescription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-item>\n\t<ion-label>{{data?.doc_name}}</ion-label>\n</ion-item>\n<ion-item>\n\t<ion-label>{{data?.prescription_date}}</ion-label>\n</ion-item>\n<ion-item>\n\t<ion-label>{{data?.description}}</ion-label>\n</ion-item>\n</ion-content> -->\n<ion-header class=\"main-header shadow\">\n  <ion-toolbar>\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-back-button slot=\"start\" defaultHref=\"self-care-tabs/tabs/tab1/reports\"></ion-back-button>\n    <ion-title>Reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <ion-toolbar class=\"action_tools\" *ngIf=\"false\">\n    <ion-skeleton-text slot=\"end\" animated style=\"width: 20%\"></ion-skeleton-text>\n  </ion-toolbar> -->\n\n  <ion-toolbar class=\"action_tools\">\n    <ion-button slot=\"end\" class=\"trans_btn edit\" (click)=\"editDetails()\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><g transform=\"translate(-5.6 -6.9)\"><g transform=\"translate(5.6 6.9)\"><path d=\"M16.3,114.3H6.083a.385.385,0,0,0-.383.383.391.391,0,0,0,.383.383H16.308a.385.385,0,0,0,.383-.383A.393.393,0,0,0,16.3,114.3Z\" transform=\"translate(-5.691 -104.271)\" fill=\"#483df6\"/><path d=\"M5.609,13.539,5.6,15.36a.4.4,0,0,0,.112.28.374.374,0,0,0,.271.112l1.812-.009a.374.374,0,0,0,.271-.112l6.256-6.256a.4.4,0,0,0,0-.551L12.529,7.012a.4.4,0,0,0-.551,0L10.726,8.273l-5.005,5A.416.416,0,0,0,5.609,13.539Zm6.649-5.705,1.261,1.261-.71.71L11.548,8.543l.71-.71ZM6.384,13.707,11,9.094l1.261,1.261-4.613,4.6-1.27.009Z\" transform=\"translate(-5.6 -6.9)\" fill=\"#483df6\"/></g></g></svg>\n      edit\n    </ion-button>\n  </ion-toolbar>\n\n  <!-- <div class=\"pres_detail\" *ngIf=\"false\">\n    <h4>\n      <span><ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text></span>\n      <span><ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text></span>\n    </h4>\n    <h4>\n      <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n    </h4>\n    <p>\n      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n    </p>\n  </div> -->\n\n  <div class=\"pres_detail\">\n    <h4><span>{{data?.event_category}}</span><span>{{data?.event_datetime | date:\"dd MMM,y\" }}</span></h4>\n    <h4>{{data?.event_name}}</h4>\n    <p>{{data?.description}}</p>\n  </div>\n\n  <!-- <ion-slides *ngIf=\"false\" class=\"ion-padding-start ion-padding-end\">\n    <ion-slide>\n        <ion-skeleton-text animated style=\"width: 100%; height:calc(100vh - 250px)\"></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides> -->\n\n  <ion-slides class=\"ion-padding-start ion-padding-end\" [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n      <ion-slide *ngFor=\"let img of view_all_image\">\n        <ion-img *ngIf=\"!isNetwork && !img.delete || img.globalURI==null && !img.delete\" [src]=\"webview.convertFileSrc(img.localURI)\" (click)=\"viewImage(img.localURI)\"></ion-img>\n\t\t\t  <ion-img *ngIf=\"isNetwork && !img.delete && img.globalURI!=null\" [src]=\"img.globalURI\" (click)=\"viewImage(img.globalURI)\"></ion-img>\n      </ion-slide>\n  </ion-slides>\n  \n  \n</ion-content>"

/***/ }),

/***/ "./src/app/self-care/reports/add-report/add-report.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/self-care/reports/add-report/add-report.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportPage", function() { return AddReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");




















let AddReportPage = class AddReportPage {
    constructor(database, databaseSummary, alertController, toast, camera, actionSheetController, fb, route, service, router, datepipe, file, transfer, imagePicker, webview, crop, sanitizer, modalController, toastController, statusBar) {
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.alertController = alertController;
        this.toast = toast;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.router = router;
        this.datepipe = datepipe;
        this.file = file;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.crop = crop;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.toastController = toastController;
        this.statusBar = statusBar;
        this.store_photos = [];
        this.fileuri = [];
        this.active = false;
        this.image_save_status = false;
        this.reportTypeValue = [];
        this.showBackdrop = false;
        this.Progress = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.todaydate = new Date().toISOString();
        this.year = new Date().getFullYear();
        this.reportForm = this.fb.group({
            'event_category': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'others': [''],
            'event_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'event_datetime': [this.datepipe.transform(new Date(), "dd MMM yyyy"), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'description': ['']
        });
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ea4e4e');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
        // this.service.reportType().subscribe(res=>{
        //  console.log(res)
        //  this.reportTypeValue=res['enum_masters'];
        //  this.reportTypeValue.push("Others")
        //  console.log(this.reportTypeValue)
        // })
        this.databaseSummary.getEnumMasters('report').then((res) => {
            this.reportTypeValue = res['enum_masters'];
            this.reportTypeValue.push("Others");
        })
            .catch(error => { console.log(error); });
    }
    get f() { return this.reportForm.controls; }
    close() {
        this.router.navigate(['/self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
    }
    selectimage() {
        let options = {
            maximumImagesCount: 3,
            quality: 100,
            width: 600,
            height: 600,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.store_photos.push(this.webview.convertFileSrc(results[i]));
                console.log(this.store_photos, 'webviewuri');
                this.active = true;
                this.localFilePath = results[i];
                this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    console.log(fileMeta);
                    this.audioFileName = fileMeta.name;
                    this.cdvFilePath = fileMeta['localURL'];
                    this.fileuri.push({ "localURI": this.localFilePath, "globalURI": null, "cdvFilePath": this.cdvFilePath, "fileName": this.audioFileName, "delete": false });
                    console.log(this.fileuri, 'fileuri');
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    AddImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                buttons: [{
                        text: 'Gallery',
                        role: 'image',
                        icon: 'image',
                        handler: () => {
                            this.selectimage();
                            console.log('camera clicked');
                        }
                    }, {
                        text: 'camera',
                        icon: 'camera',
                        handler: () => {
                            this.takePicture();
                            console.log('gallery clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    takePicture() {
        var options = {
            quality: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.store_photos.push(this.webview.convertFileSrc(imageData));
            console.log(this.store_photos, 'webviewuri');
            this.active = true;
            this.localFilePath = imageData;
            this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry) => {
                return new Promise((resolve, reject) => {
                    fileEntry.file(meta => resolve(meta), error => reject(error));
                });
            }).then((fileMeta) => {
                console.log(fileMeta);
                this.audioFileName = fileMeta.name;
                this.cdvFilePath = fileMeta['localURL'];
                this.fileuri.push({ "localURI": this.localFilePath, "globalURI": null, "cdvFilePath": this.cdvFilePath, "fileName": this.audioFileName, "delete": false });
                console.log(this.fileuri, 'fileuri');
            });
        }, (err) => {
            // Handle error
        });
    }
    sample(event_id) {
        const fileTransfer = this.transfer.create();
        let data = { id: event_id };
        for (var i = 0; i < this.fileuri.length; i++) {
            let options = {
                fileKey: 'event_assets',
                fileName: this.fileuri[i].fileName,
                mimeType: 'multipart/form-data',
                params: data,
                chunkedMode: false,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            };
            console.log(this.fileuri, 'file');
            fileTransfer.upload(this.fileuri[i].uri, _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + 'events/update_image', options).then(res => {
                if (this.fileuri.length - i == 0) {
                    this.Progress = false;
                    this.presentToast('Report added successfully');
                    this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
                }
                else {
                }
            }, error => {
                console.log('alert');
            });
        }
    }
    reportSubmit(value) {
        this.submitted = true;
        console.log(value);
        if (this.reportForm.valid) {
            if (value['event_category'] == 'Others') {
                if (value['others'] != '') {
                }
                else {
                    this.presentToast("Please enter your report type name");
                    return false;
                }
            }
            if (this.store_photos.length == 0) {
                this.presentToast("Please add your report image");
                return false;
            }
            else {
                this.addconfirmation(value);
            }
        }
        else if (this.reportForm['value']['event_name'] == "") {
            this.presentToast("Please enter your Name");
        }
        else if (this.reportForm['value']['event_datetime'] == "") {
            this.presentToast("Please select your report date");
        }
        else if (this.reportForm['value']['event_category'] == "") {
            this.presentToast("Please select your report type");
        }
        else {
        }
    }
    addconfirmation(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.add_alert = yield this.alertController.create({
                header: 'Report',
                message: 'Are you sure to submit' + ' ' + (value.event_name).bold() + ' ' + '?',
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
                            this.image_save_status = true;
                            let details = value;
                            if (value['event_category'] == 'Others') {
                                details['event_category'] = details['others'];
                            }
                            details['event_type'] = 'report';
                            console.log(details);
                            let new1 = new Date(value.event_datetime);
                            let event_dateTime = new1.toJSON();
                            let data = { 'event_name': value.event_name, 'event_datetime': event_dateTime, 'event_category': details['event_category'], 'description': value.description, 'event_type': 'report' };
                            // this.service.commonPost(data).subscribe(res=>{
                            //   console.log(res)
                            //  if(this.fileuri.length >0){ 
                            //   let event_id:any=res['event']['id'];
                            //    this.sample(event_id); 
                            //  }else{
                            //   this.Progress=false;
                            //   this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
                            //  }
                            // },error=>{
                            //         this.image_save_status=true;
                            //   console.log('')
                            // })
                            this.database.createAnEvent(data).then((res) => {
                                console.log(res);
                                if (this.fileuri.length > 0) {
                                    let event_id = res['event_id'];
                                    this.AddLocalImageData(event_id);
                                }
                                else {
                                    this.Progress = false;
                                    this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
                                }
                            })
                                .catch(error => {
                                this.image_save_status = true;
                            });
                        }
                    }
                ]
            });
            yield this.add_alert.present();
        });
    }
    AddLocalImageData(event_id) {
        let data = {
            "event_options": {
                "localImagePath": this.fileuri
            }
        };
        this.database.updateAnEventImage(event_id, data).then((res) => {
            console.log(res);
            this.Progress = false;
            this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
        })
            .catch(error => {
            this.Progress = false;
            console.log(error);
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    removeImage(i) {
        this.store_photos.splice(i, 1);
        if (this.store_photos.length == 0) {
            this.active = false;
        }
    }
};
AddReportPage.ctorParameters = () => [
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"] }
];
AddReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-report',
        template: __webpack_require__(/*! raw-loader!./add-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/add-report/add-report.page.html"),
        styles: [__webpack_require__(/*! ../reports.page.scss */ "./src/app/self-care/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"]])
], AddReportPage);



/***/ }),

/***/ "./src/app/self-care/reports/edit-report/edit-report.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/self-care/reports/edit-report/edit-report.page.ts ***!
  \*******************************************************************/
/*! exports provided: EditReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReportPage", function() { return EditReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");





















let EditReportPage = class EditReportPage {
    constructor(alertController, toast, camera, actionSheetController, file, transfer, imagePicker, webview, crop, sanitizer, modalController, toastController, service, route, router, fb, datePipe, statusBar, database, databaseSummary, networkProvider) {
        this.alertController = alertController;
        this.toast = toast;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.crop = crop;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.toastController = toastController;
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.datePipe = datePipe;
        this.statusBar = statusBar;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.networkProvider = networkProvider;
        this.reportTypeValue = [];
        this.originalReportType = [];
        this.store_photos = [];
        this.fileuri = [];
        this.active = false;
        this.edit_all_image = [];
        this.originalArray = [];
        this.spliceIndexArray = [];
        this.showBackdrop = false;
        this.Progress = false;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].ImageUrl;
        this.route.queryParams.subscribe(params => {
            if (params && params.edit) {
                this.data = JSON.parse(params.edit);
                console.log(this.data);
            }
        });
    }
    ngOnInit() {
        this.todaydate = new Date().toISOString();
        this.year = new Date().getFullYear();
    }
    ionViewWillEnter() {
        this.edit_all_image = [];
        this.originalArray = [];
        this.fileuri = [];
        this.spliceIndexArray = [];
        // this.service.reportType().subscribe(res=>{
        //  console.log(res)
        //  this.originalReportType=res['enum_masters'];
        //  this.reportTypeValue=res['enum_masters'];
        //  this.reportTypeValue.push("Others")
        //  console.log(this.reportTypeValue);
        //  let assets = this.data.event_assets;
        //  for(var i in assets){
        //     let mapUrl=this.environment+assets[i]["url"]
        //     this.edit_all_image.push({"uri":mapUrl});
        //     this.originalArray.push({"uri":mapUrl})   
        //  }
        //  this.statusBar.backgroundColorByHexString('#ea4e4e');
        //  this.tabBar = document.getElementById('myTabBar');
        //  this.tabBar.style.display = 'none';
        //  let Others:any;
        //  console.log(this.originalReportType)
        //  let index=this.originalReportType.indexOf(this.data['event_category']);
        //  console.log(index)
        //  console.log(index)
        //  if(index>-1){
        //   this.report=this.data['event_category'];
        //   Others='';      
        //  }else{
        //   this.report="Others";
        //   Others=this.data['event_category'];   
        //  }
        //  this.editReport=this.fb.group({
        //   'event_category': [this.report,[Validators.required]],
        //   'others':      [Others],    
        //   'event_name':       [this.data.event_name,[Validators.required]],
        //   'event_datetime':   [this.datePipe.transform(this.data.event_datetime,"MMM dd yyyy"),[Validators.required]],
        //   'description':      [this.data.description]
        //  });
        //  console.log(this.editReport)
        // })
        this.databaseSummary.getEnumMasters('report').then((res) => {
            this.originalReportType = res['enum_masters'];
            this.reportTypeValue = res['enum_masters'];
            this.reportTypeValue.push("Others");
            let localAssets = this.data["event_options"];
            let globalassets = this.data["event_assets"];
            if (this.networkProvider.isNetworkOnline) {
                this.isNetwork = true;
            }
            else {
                this.isNetwork = false;
            }
            for (let i in localAssets["localImagePath"]) {
                let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"], "globalURI": null, "cdvFilePath": localAssets["localImagePath"][i]["cdvFilePath"], "fileName": localAssets["localImagePath"][i]["fileName"], "delete": localAssets["localImagePath"][i]["delete"] };
                if (globalassets != null) {
                    if (globalassets.length > i) {
                        let globeURL = this.environment + globalassets[i]["url"];
                        mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
                    }
                }
                this.edit_all_image.push(mapUrl);
                this.originalArray.push(mapUrl);
            }
            this.statusBar.backgroundColorByHexString('#ea4e4e');
            this.tabBar = document.getElementById('myTabBar');
            this.tabBar.style.display = 'none';
            let Others;
            let index = this.originalReportType.indexOf(this.data['event_category']);
            if (index > -1) {
                this.report = this.data['event_category'];
                Others = '';
            }
            else {
                this.report = "Others";
                Others = this.data['event_category'];
            }
            this.editReport = this.fb.group({
                'event_category': [this.report, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                'others': [Others],
                'event_name': [this.data.event_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                'event_datetime': [this.datePipe.transform(this.data.event_datetime, "MMM dd yyyy"), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                'description': [this.data.description]
            });
            console.log(this.editReport);
        })
            .catch(error => { console.log(error); });
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
    }
    editReportSubmit(value) {
        if (this.editReport.valid) {
            if (value['event_category'] == 'Others') {
                if (value['others'] != '') {
                }
                else {
                    this.presentToast("Please enter your report type name");
                    return false;
                }
            }
            if (this.edit_all_image.length == 0) {
                this.presentToast("Please add your report image");
                return false;
            }
            else {
                this.addconfirmation(value);
            }
        }
        else if (this.editReport['value']['event_name'] == "") {
            this.presentToast("Please enter your Name");
        }
        else if (this.editReport['value']['event_datetime'] == "") {
            this.presentToast("Please select your report date");
        }
        else if (this.editReport['value']['event_category'] == "") {
            this.presentToast("Please select your report type");
        }
        else {
        }
    }
    addconfirmation(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.add_alert = yield this.alertController.create({
                header: 'Report',
                message: 'Are you sure to submit' + ' ' + (value.event_name).bold() + ' ' + '?',
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
                            let details = value;
                            if (value['event_category'] == 'Others') {
                                details['event_category'] = details['others'];
                            }
                            //let date=this.datePipe.transform(value.event_datetime,"dd MMM yyyy")
                            let new1 = new Date(value.event_datetime);
                            let event_dateTime = new1.toJSON();
                            let collectData = { 'event_name': value.event_name, 'event_datetime': event_dateTime, 'event_category': details['event_category'], 'description': value.description, 'event_type': 'report', 'created_at': this.data['created_at'], 'id': this.data["id"] };
                            // this.service.commonUpdatePost(this.data["id"],collectData).subscribe(res=>{
                            //  if(this.spliceIndexArray.length>0){
                            //     this.deleteImage();
                            //  }else if(this.fileuri.length >0){ 
                            //    console.log(this.fileuri.length>0) 
                            //   let event_id:any=this.data['id'];
                            //    this.sample(event_id); 
                            //  }else{
                            //   this.Progress=false;
                            //  this.router.navigate(['self-care-tabs/tabs/tab1/reports'],{skipLocationChange: true });
                            //  }      
                            // },error=>{    
                            //   this.Progress=false;
                            // })
                            this.database.updateAnEvent(this.data['event_id'], collectData).then((res) => {
                                console.log(res);
                                let event_id = this.data['event_id'];
                                this.AddLocalImageData(event_id);
                            }).catch(error => {
                                this.Progress = false;
                                console.log(error);
                            });
                        }
                    }
                ]
            });
            yield this.add_alert.present();
        });
    }
    AddLocalImageData(event_id) {
        let data = {
            "event_options": {
                "localImagePath": this.edit_all_image
            }
        };
        this.database.updateAnEventImage(event_id, data).then((res) => {
            console.log(res);
            this.Progress = false;
            this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
        })
            .catch(error => {
            this.Progress = false;
            console.log(error);
        });
    }
    selectimage() {
        let options = {
            maximumImagesCount: 3,
            quality: 100,
            width: 600,
            height: 600,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                //this.edit_all_image.push({"uri":this.webview.convertFileSrc(results[i])});
                //this.store_photos.push(this.webview.convertFileSrc(results[i]))
                //console.log(this.store_photos,'webviewuri')
                this.localFilePath = results[i];
                this.active = true;
                this.file.resolveLocalFilesystemUrl(results[i]).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    console.log(fileMeta);
                    this.audioFileName = fileMeta.name;
                    this.cdvFilePath = fileMeta['localURL'];
                    this.edit_all_image.push({ "localURI": this.localFilePath, "globalURI": null, "cdvFilePath": this.cdvFilePath, "fileName": this.audioFileName, "delete": false });
                    this.fileuri.push({ "uri": this.cdvFilePath, "fileName": this.audioFileName });
                    console.log(this.fileuri, 'fileuri');
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    AddImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                buttons: [{
                        text: 'Gallery',
                        role: 'image',
                        icon: 'image',
                        handler: () => {
                            this.selectimage();
                            console.log('camera clicked');
                        }
                    }, {
                        text: 'camera',
                        icon: 'camera',
                        handler: () => {
                            this.takePicture();
                            console.log('gallery clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    takePicture() {
        var options = {
            quality: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //this.edit_all_image.push({"uri":this.webview.convertFileSrc(imageData)});
            //this.store_photos.push(this.webview.convertFileSrc(results[i]))
            //console.log(this.store_photos,'webviewuri')
            this.localFilePath = imageData;
            this.active = true;
            this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry) => {
                return new Promise((resolve, reject) => {
                    fileEntry.file(meta => resolve(meta), error => reject(error));
                });
            }).then((fileMeta) => {
                console.log(fileMeta);
                this.audioFileName = fileMeta.name;
                this.cdvFilePath = fileMeta['localURL'];
                this.edit_all_image.push({ "localURI": this.localFilePath, "globalURI": null, "cdvFilePath": this.cdvFilePath, "fileName": this.audioFileName, "delete": false });
                this.fileuri.push({ "uri": this.cdvFilePath, "fileName": this.audioFileName });
                console.log(this.fileuri, 'fileuri');
            });
        }, (err) => {
            // Handle error
        });
    }
    sample(event_id) {
        const fileTransfer = this.transfer.create();
        let data = { id: event_id };
        for (var i = 0; i < this.fileuri.length; i++) {
            let options = {
                fileKey: 'event_assets',
                fileName: this.fileuri[i].fileName,
                mimeType: 'multipart/form-data',
                params: data,
                chunkedMode: false,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            };
            console.log(this.fileuri, 'file');
            fileTransfer.upload(this.fileuri[i].uri, _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].apiUrl + 'events/update_image', options).then(res => {
                console.log(i, "i");
                console.log(this.fileuri.length);
                console.log(this.fileuri.length - i == 0);
                if (this.fileuri.length - i == 0) {
                    this.Progress = false;
                    console.log('success');
                    this.presentToast('Report added successfully');
                    this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
                }
            }, error => {
                console.log(this.fileuri.length);
                console.log('alert');
            });
        }
    }
    close() {
        this.router.navigate(['/self-care-tabs/tabs/tab1/reports/view-report'], { skipLocationChange: true });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    deleteImage() {
        let delete_detail = { "index": this.spliceIndexArray, "id": this.data["id"] };
        this.service.deleteImage(delete_detail).subscribe(res => {
            console.log(res);
            if (this.fileuri.length > 0) {
                console.log(this.fileuri.length > 0);
                let event_id = this.data['id'];
                this.sample(event_id);
            }
            else {
                this.Progress = false;
                this.router.navigate(['self-care-tabs/tabs/tab1/reports'], { skipLocationChange: true });
            }
        });
    }
    removeImg(index, image, originalArray) {
        //  let result = originalArray.some(el=>el.uri === image.uri);
        // if(result==true){
        //     var index1 = this.originalArray.findIndex(p => p.uri == image.uri)
        //     this.edit_all_image.splice(index,1);
        // }else{
        //   this.edit_all_image.splice(index,1);
        //   let fileResult = this.fileuri.some(el=>el.uri === image.uri);
        //   if(fileResult==true){
        //    var index1 = this.fileuri.findIndex(p => p.uri == image.uri)
        //     this.fileuri.splice(index1,1);
        //   }
        // }
        let result = originalArray.some(el => el.localURI === image.localURI);
        //let result1 = originalArray.some(el=>el.globalURI === image.globalURI);
        if (result == true && image.globalURI != null) {
            var index1 = this.originalArray.findIndex(p => p.localURI == image.localURI && p.globalURI == image.globalURI);
            this.spliceIndexArray.push(index1);
            this.edit_all_image[index1]["delete"] = true;
        }
        else {
            this.edit_all_image.splice(index, 1);
            let fileResult = this.fileuri.some(el => el.localURI === image.localURI);
            if (fileResult == true) {
                var index1 = this.fileuri.findIndex(p => p.localURI == image.localURI);
                this.fileuri.splice(index1, 1);
            }
        }
    }
};
EditReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["AlertController"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__["WebView"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ToastController"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["settingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"] },
    { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__["NetworkService"] }
];
EditReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-report',
        template: __webpack_require__(/*! raw-loader!./edit-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/edit-report/edit-report.page.html"),
        styles: [__webpack_require__(/*! ../reports.page.scss */ "./src/app/self-care/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__["AlertController"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_16__["Toast"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__["WebView"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ToastController"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["settingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_17__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_18__["DataBaseSummaryProvider"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_19__["NetworkService"]])
], EditReportPage);



/***/ }),

/***/ "./src/app/self-care/reports/report-modal/report-modal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/self-care/reports/report-modal/report-modal.page.ts ***!
  \*********************************************************************/
/*! exports provided: ReportModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModalPage", function() { return ReportModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");







let ReportModalPage = class ReportModalPage {
    constructor(modalController, navParams, statusBar, webview) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.webview = webview;
        this.slideOpts = {
            centeredSlides: 'true'
        };
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ImageUrl;
        this.image = this.webview.convertFileSrc(this.navParams.get('imgSource'));
        this.image_details = this.navParams.get('imgDetails');
        console.log(this.image_details);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#000000');
    }
    closeModal() {
        this.modalController.dismiss();
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#ea4e4e');
    }
};
ReportModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] }
];
ReportModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-modal',
        template: __webpack_require__(/*! raw-loader!./report-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/report-modal/report-modal.page.html"),
        styles: [__webpack_require__(/*! ../reports.page.scss */ "./src/app/self-care/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"]])
], ReportModalPage);



/***/ }),

/***/ "./src/app/self-care/reports/reports.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/self-care/reports/reports.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/self-care/reports/reports.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _add_report_add_report_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-report/add-report.page */ "./src/app/self-care/reports/add-report/add-report.page.ts");
/* harmony import */ var _edit_report_edit_report_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-report/edit-report.page */ "./src/app/self-care/reports/edit-report/edit-report.page.ts");
/* harmony import */ var _view_report_view_report_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-report/view-report.page */ "./src/app/self-care/reports/view-report/view-report.page.ts");
/* harmony import */ var _report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report-modal/report-modal.page */ "./src/app/self-care/reports/report-modal/report-modal.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");








//import { PipesModule } from '../self-common-service/pipe.module';














const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]
    },
    {
        path: 'add-report',
        component: _add_report_add_report_page__WEBPACK_IMPORTED_MODULE_8__["AddReportPage"]
    },
    {
        path: 'edit-report',
        component: _edit_report_edit_report_page__WEBPACK_IMPORTED_MODULE_9__["EditReportPage"]
    },
    {
        path: 'view-report',
        component: _view_report_view_report_page__WEBPACK_IMPORTED_MODULE_10__["ViewReportPage"]
    },
    {
        path: 'report-modal',
        component: _report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_11__["ReportModalPage"]
    }
];
let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            //PipesModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"],
            _add_report_add_report_page__WEBPACK_IMPORTED_MODULE_8__["AddReportPage"],
            _edit_report_edit_report_page__WEBPACK_IMPORTED_MODULE_9__["EditReportPage"],
            _view_report_view_report_page__WEBPACK_IMPORTED_MODULE_10__["ViewReportPage"],
            _report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_11__["ReportModalPage"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_13__["Crop"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_16__["WebView"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_18__["Toast"],
            _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_19__["DataBaseSummaryProvider"]
        ]
    })
], ReportsPageModule);



/***/ }),

/***/ "./src/app/self-care/reports/reports.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/self-care/reports/reports.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-header ion-toolbar:not(.no-background) {\n  --background: #ea4e4e;\n  --color: #ffffff; }\n  ion-list-header {\n  --background: #f7f6ff;\n  --color: #2c2c2c;\n  min-height: auto;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: inherit;\n  line-height: inherit;\n  color: none; }\n  ion-list ion-item {\n  --background: transparent;\n  --border-color: #ececec;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --inner-padding-end: 0; }\n  ion-list ion-item h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: #2c2c2c;\n    padding-right: 75px; }\n  ion-list ion-item p {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 5px; }\n  ion-list .trans_btn {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: inherit;\n  line-height: inherit;\n  color: none;\n  --color: #ea4e4e;\n  --color-activated: #ea4e4e;\n  position: absolute;\n  right: 0;\n  top: 12px;\n  margin: 4px 0;\n  z-index: 2; }\n  ion-list .trans_btn svg {\n    margin: -1px 2px 0 0; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  form ion-item ion-button {\n    position: absolute;\n    top: 16px;\n    right: 0;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61;\n    margin: 0; }\n  ion-card {\n  box-shadow: none;\n  border: 1px solid #d8dbde;\n  max-height: 120px;\n  min-height: 120px;\n  height: 100%; }\n  ion-card:not(.ion-no-margin) {\n    margin: 0; }\n  ion-card:not(.has_image) {\n    --background: transparent;\n    border: 1px dashed #9e9fa0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  ion-card:not(.has_image) p {\n      font-size: 12px;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-card ion-card-content {\n    padding: 0;\n    height: 100%; }\n  ion-card ion-card-content img {\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      background-color: #d8dbde; }\n  ion-card ion-button {\n    --padding-end: 0;\n    --padding-start: 0;\n    --border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0;\n    position: absolute;\n    bottom: 6px;\n    right: 6px; }\n  .edit {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: #483df6;\n  margin: 0;\n  height: auto; }\n  .edit svg {\n    margin: 1px 2px 0 0; }\n  .pres_detail {\n  padding: 0 16px; }\n  .pres_detail h4 {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: unset;\n    line-height: inherit;\n    color: #2c2c2c;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n  .pres_detail h4 span:last-child {\n      font-size: 12px; }\n  .pres_detail p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: unset;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398;\n    margin-top: 4px; }\n  ion-slides {\n  --bullet-background: #484848; }\n  ion-slides ion-img {\n    height: calc(100vh - 235px);\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 40px;\n    width: 100%;\n    background-color: #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBO0VBdkJJLGlCQTBCc0I7RUF6QnRCLGdCQXlCMkI7RUF2QjdCLGlCQXVCZ0M7RUF0QmhDLDBCQXNCNEM7RUFyQjVDLGdCQXFCa0Q7RUFwQmxELG9CQW9CMkQ7RUFuQjNELGNBbUJvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBekNFLG9CQStDb0I7RUEvQ3BCLGFBK0NvQjtFQTlDcEIsaUJBOEM0QjtFQTdDNUIseUJBNkNvQztVQTdDcEMsbUJBNkNvQztFQTVDcEMsdUJBNEMyQztVQTVDM0Msc0JBNEMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTFESSxlQTRFb0I7SUEzRXBCLGdCQTJFeUI7SUF6RTNCLGlCQXlFOEI7SUF4RTlCLDBCQXdFMEM7SUF2RTFDLGtCQXVFa0Q7SUF0RWxELG9CQXNFMkQ7SUFyRTNELGNBcUVvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJQWlDUSxp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LHlCQ3dGaUQ7WUR4RmpELDhCQ3dGaUQ7SUFJL0MsU0FBUyxFQUFBO0VBVGI7TUFPTSxlQUFlLEVBQUE7RUFQckI7SUR2R0ksZUNvSGtCO0lEbkhsQixnQkNtSHVCO0lEakh6QixpQkNpSDRCO0lEaEg1QixxQkNnSG1DO0lEL0duQyxtQkMrRzRDO0lEOUc1QyxvQkM4R3FEO0lEN0dyRCxjQzZHOEQ7SUFDNUQsZUFBZSxFQUFBO0VBSW5CO0VBQ0UsNEJBQW9CLEVBQUE7RUFEdEI7SUFJSSwyQkFBMkI7SUFDM0Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0LCAkbGV0dGVyLCAkdHJhbnNmb3JtLCAkYWxpZ24sICRsaW5lX2hlaWdodCwgJGZuX2NvbG9yKSB7XG4gIGZvbnQ6IHtcbiAgICBzaXplOiAkc2l6ZTtcbiAgICB3ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xuICB0ZXh0LWFsaWduOiAkYWxpZ247XG4gIGxpbmUtaGVpZ2h0OiAkbGluZV9oZWlnaHQ7XG4gIGNvbG9yOiAkZm5fY29sb3I7XG59XG5cbkBtaXhpbiBib3JkZXIoJHdpZHRoLCAkc3R5bGUsICRicmNvbG9yKSB7XG4gIGJvcmRlci13aWR0aDogJHdpZHRoO1xuICBib3JkZXItc3R5bGU6ICRzdHlsZTtcbiAgYm9yZGVyLWNvbG9yOiAkYnJjb2xvcjtcbn1cblxuQG1peGluIGZsZXgoJGZsZXgsICR3cmFwLCAkYWxpZ24sICRqdXN0aWZ5KSB7XG4gIGRpc3BsYXk6ICRmbGV4O1xuICBmbGV4LXdyYXA6ICR3cmFwO1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyOm5vdCgubm8tYmFja2dyb3VuZCkge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWE0ZTRlO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNmZmO1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgQGluY2x1ZGUgZm9udCgxMnB4LCA2MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2VjZWNlYztcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnQtY29sb3IpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50cmFuc19idG4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xyXG4gICAgLS1jb2xvcjogI2VhNGU0ZTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZWE0ZTRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbjogLTFweCAycHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogI2VhNGU0ZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6ICNiY2JiY2Y7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwcmVudDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1yaXBwbGUtY29sb3I6ICNmYTVlNjE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGRiZGU7XHJcbiAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmOm5vdCguaW9uLW5vLW1hcmdpbil7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAmOm5vdCguaGFzX2ltYWdlKSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM5ZTlmYTA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZGJkZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgJHByaW1hcnkpO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW46IDFweCAycHggMCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnByZXNfZGV0YWlse1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgaDR7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIHVuc2V0LCBpbmhlcml0LCAkZm9udC1jb2xvcik7XHJcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XHJcbiAgICBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBAaW5jbHVkZSBmb250KDEycHgsIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICM4YjkzOTgpO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjNDg0ODQ4O1xyXG5cclxuICBpb24taW1nIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzNXB4KTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/self-care/reports/reports.page.ts":
/*!***************************************************!*\
  !*** ./src/app/self-care/reports/reports.page.ts ***!
  \***************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");












let ReportsPage = class ReportsPage {
    constructor(toast, alertController, toastController, router, statusBar, settingService, databaseSummary, database) {
        this.toast = toast;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.statusBar = statusBar;
        this.settingService = settingService;
        this.databaseSummary = databaseSummary;
        this.database = database;
        this.report_page = 1;
        this.report_page_offset = 0;
        this.report_details = [];
        this.data_details = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loader = true;
        this.statusBar.backgroundColorByHexString('#ea4e4e');
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
        this.report_page = 1;
        this.report_page_offset = 0;
        // this.settingService.commonDateEventList("report",this.report_page).subscribe(res => {
        //     let data:any = res['event_list']
        //     this.data_details=res['event_list']; 
        //      setInterval(() => {  
        //          this.loader=false;
        //        }, 1000);
        //     this.groupBy(data);
        //  }); 
        this.databaseSummary.getAllEvents('report', 'New', this.report_page_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
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
            event_datetime: item.event_datetime,
            event_category: item.event_category,
            value: item.value,
            event_type: item.event_type,
            user_id: item.user_id,
            playing: false,
            progress: 0
        }));
        let value = [];
        const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(records).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])()))).subscribe(val => {
            console.log(val);
            if (val) {
                let ff = { "created_at": val[0].event_datetime, "events": val };
                value.push(ff);
            }
        });
        this.report_details = value;
        this.loader = false;
    }
    addReport() {
        this.router.navigate(['self-care-tabs/tabs/tab1/reports/add-report']);
    }
    viewReport(view) {
        if (this.report_details.length != 0) {
            let navigationExtras = {
                queryParams: {
                    viewReport: JSON.stringify(view)
                }
            };
            this.router.navigate(['self-care-tabs/tabs/tab1/reports/view-report'], navigationExtras);
        }
    }
    deleteReport(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Report',
                message: 'Are you sure want to delete report?',
                mode: 'md',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            // this.settingService.commonDeleteEvent(id).subscribe(res => {
                            //   console.log(res)
                            //   this.presentToast("Record Deleted Successfully");
                            //   this.ionViewWillEnter();
                            //   //this.health_records=res['event_list'];
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
        this.report_page = 1;
        this.report_page_offset = 0;
        // this.settingService.commonDateEventSearchList('report',search).subscribe(res=>{
        //   let data:any = res['event_list'];
        //   this.data_details=res['event_list']; 
        //   this.groupBy(data);
        // }, error=>{
        //      this.presentToast("Server slow, Please try again")
        // })
        this.databaseSummary.getAllEventsSearchList('report', search, 'New', this.report_page_offset).then(res => {
            let data = res['event_list'];
            this.data_details = res['event_list'];
            this.groupBy(data);
        }).catch(err => { console.log(err); });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.report_page += 1;
            this.report_page_offset = this.report_page * 10 - 10;
            let data = [];
            // this.settingService.commonDateEventList("report",this.report_page).subscribe(res => {
            //    let data:any = res['event_list'];
            //    let concat=this.data_details.concat(data);
            //     this.report_scroll=concat.map(item => ({
            //      id:item.id,
            //      created_at: item.created_at,
            //      description: item.description,
            //      event_assets: item.event_assets,
            //      event_name: item.event_name,
            //      event_datetime: item.event_datetime,
            //      event_category: item.event_category,
            //      value: item.value,
            //      event_type: item.event_type,
            //      user_id: item.user_id,
            //      playing: false,
            //      progress: 0
            //     }));
            //     let value = []
            //     const example = from(this.report_scroll).pipe(
            //       groupBy(person => formatDate(person.event_datetime, 'yyyy-MM-dd', 'en-US')),
            //       mergeMap(group => group.pipe(toArray()))
            //     ).subscribe(val => {
            //       console.log(val)
            //       if(val){
            //           let ff = { "created_at":val[0].event_datetime,"events" :val }
            //           value.push(ff);
            //       }
            //     })
            //     this.report_scroll=value;
            //     //this.report_scroll.map(item => this.report_details.push(item));
            //     this.report_details=this.report_scroll;
            //     event.target.complete();
            //     if (this.report_page *10 !=this.report_details.length){
            //        event.target.disabled = true;
            //     }
            // },error=>{
            //    event.target.disabled = true;
            // })
            this.databaseSummary.getAllEvents('report', 'New', this.report_page_offset).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = res['event_list'];
                let concat = this.data_details.concat(data);
                this.report_scroll = concat.map(item => ({
                    id: item.id,
                    event_id: item.event_id,
                    created_at: item.created_at,
                    description: item.description,
                    event_assets: item.event_assets,
                    event_options: item.event_options,
                    event_name: item.event_name,
                    event_datetime: item.event_datetime,
                    event_category: item.event_category,
                    value: item.value,
                    event_type: item.event_type,
                    user_id: item.user_id,
                    playing: false,
                    progress: 0
                }));
                let value = [];
                const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.report_scroll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(person => Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(person.event_datetime, 'yyyy-MM-dd', 'en-US')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])()))).subscribe(val => {
                    console.log(val);
                    if (val) {
                        let ff = { "created_at": val[0].event_datetime, "events": val };
                        value.push(ff);
                    }
                });
                this.report_scroll = value;
                this.report_details = this.report_scroll;
                event.target.complete();
                if (this.report_page * 10 != this.report_details.length) {
                    event.target.disabled = true;
                }
            })).catch(err => { console.log(err); });
        }, 500);
    }
    ionViewWillLeave() {
        this.statusBar.backgroundColorByHexString('#483df6');
        this.tabBar.classList.add("tab-selected");
    }
};
ReportsPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__["DatabaseProvider"] }
];
ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/reports.page.html"),
        styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/self-care/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_11__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["settingsService"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_9__["DataBaseSummaryProvider"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_8__["DatabaseProvider"]])
], ReportsPage);



/***/ }),

/***/ "./src/app/self-care/reports/view-report/view-report.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/self-care/reports/view-report/view-report.page.ts ***!
  \*******************************************************************/
/*! exports provided: ViewReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReportPage", function() { return ViewReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-modal/report-modal.page */ "./src/app/self-care/reports/report-modal/report-modal.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










let ViewReportPage = class ViewReportPage {
    constructor(sanitizer, webview, statusBar, route, router, modalController, networkProvider) {
        this.sanitizer = sanitizer;
        this.webview = webview;
        this.statusBar = statusBar;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.networkProvider = networkProvider;
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
        };
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ImageUrl;
        if (this.networkProvider.isNetworkOnline) {
            this.isNetwork = true;
        }
        else {
            this.isNetwork = false;
        }
        console.log(this.environment);
        this.route.queryParams.subscribe(params => {
            // if (params && params.viewReport) {
            //   this.data = JSON.parse(params.viewReport);
            //   this.view_all_image = this.data.event_assets;
            //   console.log(this.view_all_image);
            // }
            if (params && params.viewReport) {
                this.view_all_image = [];
                this.data = JSON.parse(params.viewReport);
                let localAssets = this.data["event_options"];
                let globalassets = this.data["event_assets"];
                for (let i in localAssets["localImagePath"]) {
                    let mapUrl = { "localURI": localAssets["localImagePath"][i]["localURI"], "globalURI": null, "cdvFilePath": localAssets["localImagePath"][i]["cdvFilePath"], "fileName": localAssets["localImagePath"][i]["fileName"], "delete": localAssets["localImagePath"][i]["delete"] };
                    if (globalassets != null) {
                        if (globalassets.length > i) {
                            let globeURL = this.environment + globalassets[i]["url"];
                            mapUrl["globalURI"] = this.sanitizer.bypassSecurityTrustResourceUrl(globeURL);
                        }
                    }
                    this.view_all_image.push(mapUrl);
                }
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#ea4e4e');
        this.tabBar = document.getElementById('myTabBar');
        this.tabBar.style.display = 'none';
    }
    slidesDidLoad(slides) {
        //  slides.startAutoplay();
    }
    viewImage(source, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _report_modal_report_modal_page__WEBPACK_IMPORTED_MODULE_5__["ReportModalPage"],
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
    editDetails() {
        let navigation = {
            queryParams: {
                edit: JSON.stringify(this.data)
            }
        };
        this.router.navigate(['self-care-tabs/tabs/tab1/reports/edit-report'], navigation);
    }
    ionViewWillLeave() {
        this.tabBar.style.display = 'flex';
        this.tabBar = document.getElementById('myTabBar').childNodes[0];
        this.tabBar.classList.remove("tab-selected");
    }
};
ViewReportPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] }
];
ViewReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-report',
        template: __webpack_require__(/*! raw-loader!./view-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/reports/view-report/view-report.page.html"),
        styles: [__webpack_require__(/*! ../reports.page.scss */ "./src/app/self-care/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]])
], ViewReportPage);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map