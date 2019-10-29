(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forgot-password-step1-step1-module~login-login-module"],{

/***/ "./node_modules/@ionic-native/keyboard/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/keyboard/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
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



var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hideFormAccessoryBar", { "sync": true }, arguments); };
    Keyboard.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "isVisible"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
    Keyboard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Keyboard);
    return Keyboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBK0JKLDRCQUFpQjs7OztJQWE3Qyx1Q0FBb0IsYUFBQyxJQUFhO0lBU2xDLHVCQUFJO0lBU0osdUJBQUk7SUFVSixnQ0FBYSxhQUFDLElBQVk7SUFXMUIsaUNBQWM7SUFhZCxxQ0FBa0I7SUFhbEIsaUNBQWM7SUFhZCxxQ0FBa0I7MEJBckZsQiwrQkFBUzs7Ozs7Ozs7Ozs7SUFORSxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBakNyQjtFQWlDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGtleWJvYXJkIHN0YXR1cyB2aXNpYmxlIG9yIG5vdC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBrZXlib2FyZCBhY2Nlc3NvcnkgYmFyIHdpdGggdGhlIG5leHQsIHByZXZpb3VzIGFuZCBkb25lIGJ1dHRvbnMuXG4gICAqIEBwYXJhbSBoaWRlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhpZGVGb3JtQWNjZXNzb3J5QmFyKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGlmIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCB0aGUgcmVzaXplIG1vZGVcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBzZXRSZXNpemVNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIHNob3duLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRzaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkV2lsbFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIGhpZGRlbi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkaGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgaGlkZS4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsSGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFdpbGxIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/core/services/usermanagement.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/usermanagement.service.ts ***!
  \*********************************************************/
/*! exports provided: UsermanagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementService", function() { return UsermanagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsermanagementService = class UsermanagementService {
    constructor(http) {
        this.http = http;
    }
    care_detail(data) {
        return this.http.post("users/patient_register", data);
    }
    login_credential(credential) {
        return this.http.post("auth/login", credential);
    }
    verify_CGId(id) {
        return this.http.get("users/user_uid?user_uid=" + id);
    }
    CGdetails(val) {
        return this.http.post("users/caregiver_register", val);
    }
    emailVerify(mail) {
        return this.http.get("users/identify_user?email=" + mail);
    }
    VerifyCode(code, id) {
        return this.http.get("users/verification_code?user_id=" + id + "&&verification_code=" + code);
    }
    pwdUpdate(val) {
        return this.http.post("users/password_updation", val);
    }
    subscriptionAmt() {
        return this.http.get("subscriptions/app_amount");
    }
    offerAmt() {
        return this.http.get("offers");
    }
    couponAmt(user_id, id) {
        return this.http.get("subscriptions/apply_coupon?user_id=" + user_id + "&&offer_id=" + id);
    }
    selfPayment(data) {
        return this.http.post("subscriptions/make_payment", data);
    }
    user_data(e_id) {
        return this.http.get("auth/find_user?email=" + e_id);
    }
};
UsermanagementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsermanagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsermanagementService);



/***/ })

}]);
//# sourceMappingURL=default~forgot-password-step1-step1-module~login-login-module-es2015.js.map