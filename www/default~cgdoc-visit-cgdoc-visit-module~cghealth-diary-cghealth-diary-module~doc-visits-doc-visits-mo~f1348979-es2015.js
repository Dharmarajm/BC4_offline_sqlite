(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cgdoc-visit-cgdoc-visit-module~cghealth-diary-cghealth-diary-module~doc-visits-doc-visits-mo~f1348979"],{

/***/ "./node_modules/@ionic-native/media-capture/ngx/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/media-capture/ngx/index.js ***!
  \***************************************************************/
/*! exports provided: MediaCapture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaCapture", function() { return MediaCapture; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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



var MediaCapture = /** @class */ (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCapture.prototype.captureAudio = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureImage = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureVideo = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.onPendingCaptureResult = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCapture.prototype.onPendingCaptureError = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "supportedImageModes"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "supportedImageModes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "supportedAudioModes"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "supportedAudioModes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "supportedVideoModes"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "supportedVideoModes", value); },
        enumerable: true,
        configurable: true
    });
    MediaCapture.pluginName = "MediaCapture";
    MediaCapture.plugin = "cordova-plugin-media-capture";
    MediaCapture.pluginRef = "navigator.device.capture";
    MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];
    MediaCapture = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MediaCapture);
    return MediaCapture;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLWNhcHR1cmUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBS04sTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZKQSxnQ0FBaUI7Ozs7SUE4QmpELG1DQUFZLGFBQ1YsT0FBNkI7SUFhL0IsbUNBQVksYUFDVixPQUE2QjtJQWEvQixtQ0FBWSxhQUNWLE9BQTZCO0lBYS9CLDZDQUFzQjtJQVl0Qiw0Q0FBcUI7MEJBOUVyQiw2Q0FBbUI7Ozs7OzswQkFPbkIsNkNBQW1COzs7Ozs7MEJBT25CLDZDQUFtQjs7Ozs7Ozs7Ozs7SUFwQlIsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQXBLekI7RUFvS2tDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWxlIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmaWxlLCB3aXRob3V0IHBhdGggaW5mb3JtYXRpb24uXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlLCBpbmNsdWRpbmcgdGhlIG5hbWUuXG4gICAqL1xuICBmdWxsUGF0aDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZpbGUncyBtaW1lIHR5cGVcbiAgICovXG4gIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgZmlsZSB3YXMgbGFzdCBtb2RpZmllZC5cbiAgICovXG4gIGxhc3RNb2RpZmllZERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy5cbiAgICovXG4gIHNpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBmb3JtYXQgaW5mb3JtYXRpb24gb2YgdGhlIG1lZGlhIGZpbGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3NDYWxsYmFja1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXG4gICAqL1xuICBnZXRGb3JtYXREYXRhKFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogKGRhdGE6IE1lZGlhRmlsZURhdGEpID0+IGFueSxcbiAgICBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnlcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUZpbGVEYXRhIHtcbiAgLyoqXG4gICAqIFRoZSBhY3R1YWwgZm9ybWF0IG9mIHRoZSBhdWRpbyBhbmQgdmlkZW8gY29udGVudC5cbiAgICovXG4gIGNvZGVjczogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGF2ZXJhZ2UgYml0cmF0ZSBvZiB0aGUgY29udGVudC4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIGltYWdlcy5cbiAgICovXG4gIGJpdHJhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIGF1ZGlvIGNsaXBzLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIGF1ZGlvIGNsaXBzLlxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHZpZGVvIG9yIHNvdW5kIGNsaXAgaW4gc2Vjb25kcy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIGltYWdlcy5cbiAgICovXG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUVycm9yIHtcbiAgY29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVBdWRpb09wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgYXVkaW8gY2xpcHMuIERlZmF1bHRzIHRvIDEuXG4gICAqIE9uIGlPUyB5b3UgY2FuIG9ubHkgcmVjb3JkIG9uZSBmaWxlLlxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIHNvdW5kIGNsaXAsIGluIHNlY29uZHMuIFRoaXMgZG9lcyBub3Qgd29yayBvbiBBbmRyb2lkIGRldmljZXMuXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlSW1hZ2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGltYWdlcyB0byBjYXB0dXJlLiBUaGlzIGxpbWl0IGlzIG5vdCBzdXBwb3J0ZWQgb24gaU9TLCBvbmx5IG9uZSBpbWFnZSB3aWxsIGJlIHRha2VuIHBlciBpbnZvY2F0aW9uLlxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZVZpZGVvT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiB2aWRlbyBjbGlwcyB0byByZWNvcmQuIFRoaXMgdmFsdWUgaXMgaWdub3JlZCBvbiBpT1MsIG9ubHkgb25lIHZpZGVvIGNsaXAgY2FuIGJlIHRha2VuIHBlciBpbnZvY2F0aW9uLlxuICAgKi9cbiAgbGltaXQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBNYXhpbXVtIGR1cmF0aW9uIHBlciB2aWRlbyBjbGlwLiBUaGlzIHdpbGwgYmUgaWdub3JlZCBvbiBCbGFja0JlcnJ5LlxuICAgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBRdWFsaXR5IG9mIHRoZSB2aWRlby4gVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIEFuZHJvaWQuXG4gICAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25EYXRhIHtcbiAgLyoqXG4gICAqIFRoZSBBU0NJSS1lbmNvZGVkIGxvd2VyY2FzZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZWRpYSB0eXBlLlxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3Igc291bmQgY2xpcHMuXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3Igc291bmQgY2xpcHMuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIE1lZGlhIENhcHR1cmVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBkZXZpY2UncyBhdWRpbywgaW1hZ2UsIGFuZCB2aWRlbyBjYXB0dXJlIGNhcGFiaWxpdGllcy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmVgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTWVkaWEgQ2FwdHVyZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhQ2FwdHVyZSwgTWVkaWFGaWxlLCBDYXB0dXJlRXJyb3IsIENhcHR1cmVJbWFnZU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhLWNhcHR1cmUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYUNhcHR1cmU6IE1lZGlhQ2FwdHVyZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGxldCBvcHRpb25zOiBDYXB0dXJlSW1hZ2VPcHRpb25zID0geyBsaW1pdDogMyB9XG4gKiB0aGlzLm1lZGlhQ2FwdHVyZS5jYXB0dXJlSW1hZ2Uob3B0aW9ucylcbiAqICAgLnRoZW4oXG4gKiAgICAgKGRhdGE6IE1lZGlhRmlsZVtdKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAoZXJyOiBDYXB0dXJlRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuICogICApO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE1lZGlhRmlsZVxuICogTWVkaWFGaWxlRGF0YVxuICogQ2FwdHVyZUVycm9yXG4gKiBDYXB0dXJlQXVkaW9PcHRpb25zXG4gKiBDYXB0dXJlSW1hZ2VPcHRpb25zXG4gKiBDYXB0dXJlVmlkZW9PcHRpb25zXG4gKiBDb25maWd1cmF0aW9uRGF0YVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01lZGlhQ2FwdHVyZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZGV2aWNlLmNhcHR1cmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgaW1hZ2Ugc2l6ZXMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkQXVkaW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogVGhlIHJlY29yZGluZyB2aWRlbyByZXNvbHV0aW9ucyBhbmQgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkVmlkZW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGF1ZGlvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgYXVkaW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBjYXB0dXJlQXVkaW8oXG4gICAgb3B0aW9ucz86IENhcHR1cmVBdWRpb09wdGlvbnNcbiAgKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2FtZXJhIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgaW1hZ2UgZmlsZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2FwdHVyZUltYWdlKFxuICAgIG9wdGlvbnM/OiBDYXB0dXJlSW1hZ2VPcHRpb25zXG4gICk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgdmlkZW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBjYXB0dXJlVmlkZW8oXG4gICAgb3B0aW9ucz86IENhcHR1cmVWaWRlb09wdGlvbnNcbiAgKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlcmVzdWx0J1xuICB9KVxuICBvblBlbmRpbmdDYXB0dXJlUmVzdWx0KCk6IE9ic2VydmFibGU8TWVkaWFGaWxlW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogaXMgZmlyZWQgaWYgdGhlIGNhcHR1cmUgY2FsbCBpcyB1bnN1Y2Nlc3NmdWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q2FwdHVyZUVycm9yPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdwZW5kaW5nY2FwdHVyZWVycm9yJ1xuICB9KVxuICBvblBlbmRpbmdDYXB0dXJlRXJyb3IoKTogT2JzZXJ2YWJsZTxDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/streaming-media/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/streaming-media/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: StreamingMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamingMedia", function() { return StreamingMedia; });
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


var StreamingMedia = /** @class */ (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StreamingMedia);
    return StreamingMedia;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O0lBakNBLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFsRjNCO0VBa0ZvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheVZpZGVvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdWaWRlb09wdGlvbnMge1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEZvcmNlIG9uZSBvcmllbnRhdGlvbiBmb3IgcGxheWluZyB2aWRlby4gKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGNsb3NlIGFmdGVyIGl0J3Mgb3Zlci4gRGVmYXVsdHMgdG8gdHJ1ZS4gKi9cbiAgc2hvdWxkQXV0b0Nsb3NlPzogYm9vbGVhbjtcbiAgLyoqIFNob3VsZCB0aGUgdmlkZW8gaGF2ZSBjb250cm9scy4gRGVmYXVsdHMgdG8gdHJ1ZS4gQW5kcm9pZCBvbmx5LiAqL1xuICBjb250cm9scz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogT2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBwbGF5QXVkaW8gbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyB7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGltYWdlIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIHNjYWxlIGZvciBhdWRpbyBwbGF5ZXIuXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqIGZpdFxuICAgKiBzdHJldGNoXG4gICAqIGFzcGVjdFN0cmV0Y2guXG4gICAqL1xuICBiZ0ltYWdlU2NhbGU/OiBzdHJpbmc7XG4gIC8qKiBTdGFydCBhdWRpbyBwbGF5ZXIgaW4gZnVsbCBzY3JlZW4uIGlPUyBvbmx5LiAqL1xuICBpbml0RnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIGxpdCBhbmQgc3RvcHMgaXQgZnJvbSBsb2NraW5nXG4gICAqIHdoaWxlIGF1ZGlvIGlzIHBsYXlpbmcuIEFuZHJvaWQgb25seS5cbiAgICovXG4gIGtlZXBBd2FrZT86IGJvb2xlYW47XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBzdWNjZXNzIHBsYXlpbmcgYXVkaW8uICovXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyBhdWRpby4gKi9cbiAgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBuYW1lIFN0cmVhbWluZyBNZWRpYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0cmVhbSBhdWRpbyBhbmQgdmlkZW8gaW4gYSBmdWxsc2NyZWVuLCBuYXRpdmUgcGxheWVyIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyZWFtaW5nTWVkaWE6IFN0cmVhbWluZ01lZGlhKSB7IH1cbiAqXG4gKiBsZXQgb3B0aW9uczogU3RyZWFtaW5nVmlkZW9PcHRpb25zID0ge1xuICogICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHsgY29uc29sZS5sb2coJ1ZpZGVvIHBsYXllZCcpIH0sXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxuICogICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXG4gKiAgIHNob3VsZEF1dG9DbG9zZTogdHJ1ZSxcbiAqICAgY29udHJvbHM6IGZhbHNlXG4gKiB9O1xuICpcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU3RyZWFtaW5nVmlkZW9PcHRpb25zXG4gKiBTdHJlYW1pbmdBdWRpb09wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlYW1pbmdNZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3RyZWFtaW5nTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25jaHV0Y2hpbmQvY29yZG92YS1wbHVnaW4tc3RyZWFtaW5nLW1lZGlhJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdHJlYW1zIGEgdmlkZW9cbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdBdWRpb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5QXVkaW8oYXVkaW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcEF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHN0cmVhbWluZyBhdWRpb1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcGF1c2VBdWRpbygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXN1bWVBdWRpbygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=default~cgdoc-visit-cgdoc-visit-module~cghealth-diary-cghealth-diary-module~doc-visits-doc-visits-mo~f1348979-es2015.js.map