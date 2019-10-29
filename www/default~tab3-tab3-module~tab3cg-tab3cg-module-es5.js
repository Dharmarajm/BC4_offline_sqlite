(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab3-tab3-module~tab3cg-tab3cg-module"],{

/***/ "./node_modules/@ionic-native/clipboard/ngx/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic-native/clipboard/ngx/index.js ***!
  \***********************************************************/
/*! exports provided: Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var Clipboard = /** @class */ (function (_super) {
    __extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clear", {}, arguments); };
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
    Clipboard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Clipboard);
    return Clipboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NsaXBib2FyZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3pDLDZCQUFpQjs7OztJQU85Qyx3QkFBSSxhQUFDLElBQVk7SUFTakIseUJBQUs7SUFTTCx5QkFBSzs7Ozs7O0lBekJNLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkF2Q3RCO0VBdUMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBDbGlwYm9hcmRcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xpcGJvYXJkIG1hbmFnZW1lbnQgcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TLCBBbmRyb2lkLCBhbmQgV2luZG93cyBQaG9uZSA4LlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2xpcGJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmQ6IENsaXBib2FyZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQucGFzdGUoKS50aGVuKFxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQocmVzb2x2ZSk7XG4gKiAgICAgfSxcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIHJlamVjdCk7XG4gKiAgICAgfVxuICogICApO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29waWVzIHRoZSBnaXZlbiB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdGhhdCBnZXRzIGNvcGllZCBvbiB0aGUgc3lzdGVtIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjb3BpZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXN0ZXMgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBwYXN0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGFzdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjbGVhbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/crop/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/crop/ngx/index.js ***!
  \******************************************************/
/*! exports provided: Crop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return Crop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

/***/ "./node_modules/@ionic-native/file-chooser/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/file-chooser/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: FileChooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileChooser", function() { return FileChooser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var FileChooser = /** @class */ (function (_super) {
    __extends(FileChooser, _super);
    function FileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileChooser.prototype.open = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "open", {}, arguments); };
    FileChooser.pluginName = "FileChooser";
    FileChooser.plugin = "cordova-plugin-filechooser";
    FileChooser.pluginRef = "fileChooser";
    FileChooser.repo = "https://github.com/ihadeed/cordova-filechooser";
    FileChooser.platforms = ["Android"];
    FileChooser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FileChooser);
    return FileChooser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtY2hvb3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1Q3ZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLE9BQTRCOzs7Ozs7SUFSdEIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXO3NCQXhDeEI7RUF3Q2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUNob29zZXJPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBjb21tYSBzZXBlcmF0ZWQgbWltZSB0eXBlcyB0byBmaWx0ZXIgZmlsZXMuXG4gICAgICovXG4gICAgbWltZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbGUgQ2hvb3NlclxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIEFuZHJvaWQgZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCBhIGZpbGUsIHJldHVybnMgYSBmaWxlIFVSSS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVDaG9vc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLWNob29zZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVDaG9vc2VyOiBGaWxlQ2hvb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlQ2hvb3Nlci5vcGVuKClcbiAqICAgLnRoZW4odXJpID0+IGNvbnNvbGUubG9nKHVyaSkpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBGaWxlQ2hvb3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlQ2hvb3NlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGVjaG9vc2VyJyxcbiAgcGx1Z2luUmVmOiAnZmlsZUNob29zZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1maWxlY2hvb3NlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZUNob29zZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBmaWxlXG4gICAqIEBwYXJhbSB7RmlsZUNob29zZXJPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gJycuIEZpbHRlcnMgdGhlIGZpbGUgc2VsZWN0aW9uIGxpc3QgYWNjb3JkaW5nIHRvIG1pbWUgdHlwZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbihvcHRpb25zPzogRmlsZUNob29zZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19

/***/ }),

/***/ "./node_modules/@ionic-native/file-path/ngx/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic-native/file-path/ngx/index.js ***!
  \***********************************************************/
/*! exports provided: FilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePath", function() { return FilePath; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var FilePath = /** @class */ (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePath.prototype.resolveNativePath = function (path) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "resolveNativePath", {}, arguments); };
    FilePath.pluginName = "FilePath";
    FilePath.plugin = "cordova-plugin-filepath";
    FilePath.pluginRef = "window.FilePath";
    FilePath.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePath.platforms = ["Android"];
    FilePath = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FilePath);
    return FilePath;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtcGF0aC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnQzFDLDRCQUFpQjs7OztJQU83QyxvQ0FBaUIsYUFBQyxJQUFZOzs7Ozs7SUFQbkIsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQWpDckI7RUFpQzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRmlsZSBQYXRoXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlc29sdmUgdGhlIG5hdGl2ZSBmaWxlc3lzdGVtIHBhdGggZm9yIEFuZHJvaWQgY29udGVudCBVUklzIGFuZCBpcyBiYXNlZCBvbiBjb2RlIGluIHRoZSBhRmlsZUNob29zZXIgbGlicmFyeS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbGVQYXRoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXBhdGgvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVQYXRoOiBGaWxlUGF0aCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxuICogICAudGhlbihmaWxlUGF0aCA9PiBjb25zb2xlLmxvZyhmaWxlUGF0aCkpXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZVBhdGgnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlcGF0aCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGlkZGVudGFvL2NvcmRvdmEtcGx1Z2luLWZpbGVwYXRoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlUGF0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlc29sdmUgbmF0aXZlIHBhdGggZm9yIGdpdmVuIGNvbnRlbnQgVVJML3BhdGguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBDb250ZW50IFVSTC9wYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXNvbHZlTmF0aXZlUGF0aChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ })

}]);
//# sourceMappingURL=default~tab3-tab3-module~tab3cg-tab3cg-module-es5.js.map