(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~alerts-alerts-module~cgprescriptions-cgprescriptions-module~cgreports-cgreports-module~presc~218066a3"],{

/***/ "./node_modules/@ionic-native/image-picker/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/image-picker/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: OutputType, ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
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


var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ImagePicker);
    return ImagePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQWdDeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF1Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O0lBaENWLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkEzRXhCO0VBMkVpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXggaGVpZ2h0IHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWFsaXR5IG9mIGltYWdlcywgZGVmYXVsdHMgdG8gMTAwXG4gICAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIEltYWdlUGlja2VyLk91dHB1dFR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgRklMRV9VUkkgOiAwLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBEQVRBX1VSTCA6IDEsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZ1xuICAgKi9cbiAgb3V0cHV0VHlwZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gT3V0cHV0VHlwZSB7XG4gIEZJTEVfVVJMID0gMCxcbiAgREFUQV9VUkxcbn1cblxuLyoqXG4gKiBAbmFtZSBJbWFnZSBQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBQbHVnaW4gRm9yIE11bHRpcGxlIEltYWdlIFNlbGVjdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4taW1hZ2UtcGlja2VyYC5cbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXJcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbWFnZS1waWNrZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVBpY2tlcjogSW1hZ2VQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucykudGhlbigocmVzdWx0cykgPT4ge1xuICogICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBVUkk6ICcgKyByZXN1bHRzW2ldKTtcbiAqICAgfVxuICogfSwgKGVycikgPT4geyB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBJbWFnZVBpY2tlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbWFnZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuaW1hZ2VQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdGVsZXJpay1pbWFnZXBpY2tlciAtLXZhcmlhYmxlIFBIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT049XCJ5b3VyIHVzYWdlIG1lc3NhZ2VcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVBpY2tlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBpY2sgcGljdHVyZXMgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtJbWFnZVBpY2tlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0aGUgaW1hZ2UgZmlsZSBVUklcbiAgICogb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZXMob3B0aW9uczogSW1hZ2VQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19

/***/ }),

/***/ "./node_modules/@ionic-native/ionic-webview/ngx/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/ionic-webview/ngx/index.js ***!
  \***************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
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


var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "convertFileSrc"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "convertFileSrc", value); },
        enumerable: true,
        configurable: true
    });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    WebView = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WebView);
    return WebView;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXdlYnZpZXcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNkRBQThDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0JuRCwyQkFBaUI7Ozs7MEJBTTVDLG1DQUFjOzs7Ozs7Ozs7Ozs7SUFOSCxPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBaENwQjtFQWdDNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFdlYiBWaWV3IHV0aWxpdGllcy5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3YCA+IDIuMC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0lvbmljIFdlYiBWaWV3XShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3KSByZXBvc2l0b3J5LlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW9uaWMtd2Vidmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYnZpZXc6IFdlYlZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViVmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuSW9uaWMuV2ViVmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4taW9uaWMtd2Vidmlldydcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ29udmVydCBhIGBmaWxlOi8vYCBVUkwgdG8gYSBVUkwgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGxvY2FsIHdlYiBzZXJ2ZXIgaW4gdGhlIFdlYiBWaWV3IHBsdWdpbi5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb252ZXJ0RmlsZVNyYzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbn1cbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=default~alerts-alerts-module~cgprescriptions-cgprescriptions-module~cgreports-cgreports-module~presc~218066a3-es5.js.map