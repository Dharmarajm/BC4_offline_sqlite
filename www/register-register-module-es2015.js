(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/care-giver-register/care-giver-register.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/care-giver-register/care-giver-register.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registration</ion-title>\r\n    <ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\r\n  </ion-toolbar>\r\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"registerProgress\"></ion-progress-bar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"ion-padding\">\r\n\r\n<form [formGroup]=\"giverForm\" (ngSubmit) = \"CareGiverDetail(giverForm.value)\">\r\n\t\r\n     <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n       <ion-label position= \"floating\">{{'uid' | translate}}</ion-label>\r\n\t   <ion-input  type= \"text\"  formControlName=\"user_uid\" (change)=\"care_giverId()\" #unique_id></ion-input>\r\n     </ion-item>\r\n     <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n      <ion-label position= \"floating\">{{'mobile' | translate}}</ion-label>\r\n      <ion-input type= \"tel\" formControlName=\"mobile_no\" (keypress)=\"_keyPress($event)\"></ion-input>\r\n    </ion-item>\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n      <ion-label position= \"floating\">{{'name' | translate}}</ion-label>\r\n      <ion-input type= \"text\" formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n      <ion-label position= \"floating\">{{'email' | translate}}</ion-label>\r\n      <ion-input type= \"email\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n      <ion-label position= \"floating\">{{'set_pwd' | translate}}</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\">\r\n      <!-- <ion-icon  [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon> -->\r\n      </ion-input>\r\n    </ion-item>   \r\n\r\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\r\n      <ion-label position= \"floating\">{{'confirm_pwd' | translate}}</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password1\">\r\n      <!-- <ion-icon  [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon> -->\r\n      </ion-input>\r\n    </ion-item>   \r\n\r\n    <ion-note><span>{{'note' | translate}}:</span><br>UID is mandatory, for details click on info icon which is in the field right corner</ion-note>\r\n\r\n    <label>\r\n      <ion-checkbox [checked]=\"checkStatus\" formControlName=\"checkStatus\"></ion-checkbox>\r\n      {{'agree' | translate}} &nbsp;<a color=\"primary\" (click)=\"goToterms()\">{{'terms_conditions' | translate}}</a>\r\n    </label>\r\n    <button class=\"btn_submit btn_login\" type=\"submit\" [disabled]=\"registerProgress\">{{'care_submit' | translate}}</button>\r\n\r\n     <!-- <ion-item class=\"ion-float-right\">\r\n      <ion-button type= \"submit\">{{'login' | translate}}<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n    </ion-item> -->\r\n</form>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/main/main.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/main/main.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Registration</ion-title>\n\t\t<ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\t<ion-card [routerLink]=\"['self-care-register']\" routerDirection=\"forward\">\n\t\t<ion-card-content>{{'self_care' | translate}}</ion-card-content>\n\t</ion-card>\n\t<ion-card [routerLink]=\"['care-giver-register']\" routerDirection=\"forward\">\n\t\t<ion-card-content>{{'care_giver' | translate}}</ion-card-content>\n\t</ion-card>\n\t<ion-note><span>{{'note' | translate}}:</span><br>{{'reg_hints' | translate}}</ion-note>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/offers/offers.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/offers/offers.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n <ion-title>Apply Coupon</ion-title>\n <ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <ion-list *ngFor=\"let offer of offer_list\">\n        <ion-item (click)=\"select(offer)\">\n          <ion-label>\n            <h2>{{offer.name}}</h2>\n            <p>{{offer.percentage}}</p>\n            <p>{{offer.price}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/payment-success/payment-success.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/payment-success/payment-success.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding ion-text-center\">\n  <div class=\"sucess\">\n    <ion-img slot=\"end\" src=\"../../../assets/img/ico1.png\"></ion-img>\n  </div>\n  <h3>Successfully Registered<br>for 365 Days</h3>\n  <p>You can update your profile details after you logged into the BC4 app, options has been provided.</p>\n  <ion-button color=\"secondary\" expand=\"block\" (click)=\"Login()\">Let's Go</ion-button>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/self-care-offer-payment/self-care-off-payment.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/self-care-offer-payment/self-care-off-payment.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n    <ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding ion-text-center\">\n  <form (ngSubmit)=\"payment()\">\n  <h3>Finalize Your Registration</h3>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>\n  <h4 *ngIf='status'>₹{{pay_amount}}</h4> \n  <h1 *ngIf='!status'>₹{{pay_amount}}</h1>\n  <h1 *ngIf='status'>₹{{offer_details.amount}}</h1>\n  <ion-button color=\"secondary\" expand=\"block\" type=\"submit\">Make Subscription</ion-button>\n  <a (click)=\"coupon()\" color=\"primary\">Apply Coupon</a>\n   <!-- <p>20% Offer on Yearly Payment</p> \n  <p *ngIf=status>{{offer_details.name}}</p> -->\n  <!-- (click)=\"payment()\" -->\n</form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/self-care-payment/self-care-payment.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/self-care-payment/self-care-payment.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n    <ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding ion-text-center\">\n  <h3>Finalize Your Registration</h3>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>\n  <h1>₹500.00</h1>\n  <ion-button color=\"secondary\" expand=\"block\" (click)=\"payment()\">Make Subscription</ion-button>\n  <a (click)=\"coupon()\" color=\"primary\">Apply Coupon</a>\n  <p>20% Offer on Yearly Payment</p>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/self-care-register/self-care-register.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/self-care-register/self-care-register.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n    <ion-img slot=\"end\" src=\"../../../assets/img/ico.png\"></ion-img>\n  </ion-toolbar>\n  <ion-progress-bar color=\"tertiary\" type=\"indeterminate\" *ngIf=\"registerProgress\"></ion-progress-bar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  \n  <form [formGroup]=\"detailForm\" (ngSubmit)=\"self_detail(detailForm.value)\">\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.name.invalid,'ion-touched': submitted && f.name.invalid }\">\n      <ion-label position=\"floating\">{{'name' | translate}}</ion-label>\n      <ion-input type=\"text\" #name_auto formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.email.invalid,'ion-touched': submitted && f.email.invalid }\">\n      <ion-label position=\"floating\">{{'email' | translate}}</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <p>{{'mail_hint' | translate}}</p>\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.password.invalid,'ion-touched': submitted && f.password.invalid }\">\n      <ion-label position=\"floating\">{{'set_pwd' | translate}}</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.password1.invalid,'ion-touched': submitted && f.password1.invalid }\">\n      <ion-label position=\"floating\">{{'confirm_pwd' | translate}}</ion-label>\n      <ion-input type=\"password\" formControlName=\"password1\"></ion-input>\n    </ion-item>\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.mobile_no.invalid,'ion-touched': submitted && f.mobile_no.invalid }\">\n      <ion-label position=\"floating\">{{'mobile' | translate}}</ion-label>\n      <ion-input type=\"tel\" formControlName=\"mobile_no\" (keypress)=\"_keyPress($event)\"></ion-input>\n    </ion-item>\n    <ion-item class=\"icon\" [ngClass]=\"{ 'ion-invalid': submitted && f.address.invalid,'ion-touched': submitted && f.address.invalid }\">\n      <ion-label position=\"floating\">{{'address' | translate}}</ion-label>\n      <ion-textarea type=\"text\" formControlName=\"address\"></ion-textarea>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"16.5\" viewBox=\"0 0 16.5 16.5\">\n          <path\n            d=\"M8.25,0A8.25,8.25,0,1,0,16.5,8.25,8.259,8.259,0,0,0,8.25,0Zm0,15.485A7.235,7.235,0,1,1,15.485,8.25,7.243,7.243,0,0,1,8.25,15.485Z\"\n            fill=\"#fa5457\" />\n          <circle cx=\"0.849\" cy=\"0.849\" r=\"0.849\" transform=\"translate(7.532 4.111)\" fill=\"#fa5457\" />\n          <path\n            d=\"M30.645,28.342a.508.508,0,0,0-.508.508v4.315a.508.508,0,1,0,1.015,0V28.85A.508.508,0,0,0,30.645,28.342Z\"\n            transform=\"translate(-22.487 -21.147)\" fill=\"#fa5457\" /></svg>\n      </ion-button>\n    </ion-item>\n    <p>{{'address_hints' | translate}}</p>\n    <!--  <ion-item>\n      <ion-label position= \"floating\">Age</ion-label>\n      <ion-textarea type= \"text\" formControlName=\"age\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position= \"floating\">Blood Group</ion-label>\n      <ion-textarea type= \"text\" formControlName=\"blood_group\"></ion-textarea>\n    </ion-item> -->\n    <ion-item [ngClass]=\"{ 'ion-invalid': submitted && f.country.invalid,'ion-touched': submitted && f.country.invalid }\">\n      <ion-label position=\"floating\">{{'country' | translate}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"country\"></ion-input>\n    </ion-item>\n    <ion-item class=\"icon\">\n      <ion-label position=\"floating\">{{'care_giver_name' | translate}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"care_name\"></ion-input>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"16.5\" viewBox=\"0 0 16.5 16.5\">\n          <path\n            d=\"M8.25,0A8.25,8.25,0,1,0,16.5,8.25,8.259,8.259,0,0,0,8.25,0Zm0,15.485A7.235,7.235,0,1,1,15.485,8.25,7.243,7.243,0,0,1,8.25,15.485Z\"\n            fill=\"#fa5457\" />\n          <circle cx=\"0.849\" cy=\"0.849\" r=\"0.849\" transform=\"translate(7.532 4.111)\" fill=\"#fa5457\" />\n          <path\n            d=\"M30.645,28.342a.508.508,0,0,0-.508.508v4.315a.508.508,0,1,0,1.015,0V28.85A.508.508,0,0,0,30.645,28.342Z\"\n            transform=\"translate(-22.487 -21.147)\" fill=\"#fa5457\" /></svg>\n      </ion-button>\n    </ion-item>\n    <ion-item class=\"icon\">\n      <ion-label position=\"floating\">{{'care_giver_no' | translate}}</ion-label>\n      <ion-input type=\"tel\" formControlName=\"care_mobile\" (keypress)=\"_keyPress($event)\"></ion-input>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"16.5\" viewBox=\"0 0 16.5 16.5\">\n          <path\n            d=\"M8.25,0A8.25,8.25,0,1,0,16.5,8.25,8.259,8.259,0,0,0,8.25,0Zm0,15.485A7.235,7.235,0,1,1,15.485,8.25,7.243,7.243,0,0,1,8.25,15.485Z\"\n            fill=\"#fa5457\" />\n          <circle cx=\"0.849\" cy=\"0.849\" r=\"0.849\" transform=\"translate(7.532 4.111)\" fill=\"#fa5457\" />\n          <path\n            d=\"M30.645,28.342a.508.508,0,0,0-.508.508v4.315a.508.508,0,1,0,1.015,0V28.85A.508.508,0,0,0,30.645,28.342Z\"\n            transform=\"translate(-22.487 -21.147)\" fill=\"#fa5457\" /></svg>\n      </ion-button>\n    </ion-item>\n    <ion-note><span>{{'note' | translate}}</span><br>{{'care_giver_hint' | translate}}</ion-note>\n\n    <label>\n      <ion-checkbox [checked]=\"checkStatus\" formControlName=\"checkStatus\"></ion-checkbox>\n      {{'agree' | translate}} &nbsp;<a color=\"primary\" (click)=\"goToterms()\">{{'terms_conditions' | translate}}</a>\n    </label>\n    <button class=\"btn_submit btn_login\" type=\"submit\" [disabled]=\"registerProgress\">{{'reg_now' | translate}}</button>\n    <!-- <ion-item class=\"ion-float-right\">\n      <ion-button type=\"submit\" [disabled]=\"detailForm.invalid\">Register -->\n    <!-- {{'reg_now' | translate}} -->\n    <!-- <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-item> -->\n  </form>\n</ion-content>\n<ion-backdrop *ngIf=\"registerProgress\"></ion-backdrop>"

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



/***/ }),

/***/ "./src/app/register/care-giver-register/care-giver-register.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/register/care-giver-register/care-giver-register.page.ts ***!
  \**************************************************************************/
/*! exports provided: careGiverRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "careGiverRegisterPage", function() { return careGiverRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/usermanagement.service */ "./src/app/core/services/usermanagement.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");





//import { NavController } from '@ionic/angular';




let careGiverRegisterPage = class careGiverRegisterPage {
    constructor(toast, modalController, fb, router, user_service, translate, navCtrl) {
        this.toast = toast;
        this.modalController = modalController;
        this.fb = fb;
        this.router = router;
        this.user_service = user_service;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.checkStatus = false;
        this.registerProgress = false;
        this.submitted = false;
        // this.language=localStorage.getItem('language');
        // console.log(this.language,'ss');
        this.translate.use('en');
    }
    ionViewDidEnter() {
        this.unique_identification.setFocus();
    }
    ngOnInit() {
        this.giverForm = this.fb.group({
            'user_uid': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'mobile_no': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            'password1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), this.equalto('password')]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])]],
            'role_id': [2, []],
            'checkStatus': [this.checkStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('true')]]
        });
        this.giverForm.controls['user_uid'].valueChanges.subscribe(val => {
            this.id = val;
        });
    }
    get f() { return this.giverForm.controls; }
    care_giverId() {
        this.user_service.verify_CGId(this.id).subscribe(res => {
            let value = res["message"];
            if (value == 'false') {
                this.presentToast('Enter valid UID');
            }
        }, error => {
            if (error.status == 401) {
                this.presentToast('Enter valid UID');
            }
            else if (error.status == 422) {
                this.presentToast('The patient already have two caregivers');
            }
        });
    }
    CareGiverDetail(giver_detail) {
        console.log(giver_detail);
        this.submitted = true;
        if (this.giverForm.valid) {
            this.registerProgress = true;
            let data = giver_detail['email'].toLowerCase();
            let value = { 'email': data, 'user_uid': giver_detail['user_uid'], 'name': giver_detail['name'], 'mobile_no': giver_detail['mobile_no'], 'password': giver_detail['password'], 'role_id': 2, };
            this.user_service.CGdetails(value).subscribe(res => {
                this.registerProgress = false;
                this.presentToast('You have registered successfully');
                this.router.navigate(['/login']);
            }, error => {
                this.registerProgress = false;
                if (error.status == 401) {
                    this.presentToast('UID not valid');
                }
                console.log(error);
            });
        }
        // else if(this.giverForm.value["user_uid"]==''){
        //     this.presentToast('Please enter your UID')
        // }else if(this.giverForm.value["mobile_no"]==''){
        //     this.presentToast('Please enter your Mobile No')
        // }else if(this.giverForm.value["name"]==''){
        //     this.presentToast('Please enter your name')
        // }else if(this.giverForm.value["email"]==''){
        //     this.presentToast('Please enter your email')
        // }else if(this.giverForm.value["password"]=='' || this.giverForm.value["password1"]==''){
        //     this.presentToast('Please enter the password')
        // }else if(this.giverForm.value["password"]!=this.giverForm.value["password1"]){
        //     this.presentToast("Password doesn't match")
        // }
        else if (this.giverForm.value["checkStatus"] == false) {
            this.presentToast("Please agree terms and conditions");
        }
        // else{
        //     this.presentToast('Please fill all the mandatory fields')
        // }
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    equalto(field_name) {
        return (control) => {
            let input = control.value;
            let isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid } };
            }
            else {
                return null;
            }
        };
    }
    goToterms() {
        this.router.navigate(['/terms_conditions']);
    }
};
careGiverRegisterPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_4__["UsermanagementService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unique_id', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], careGiverRegisterPage.prototype, "unique_identification", void 0);
careGiverRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-care-giver-register',
        template: __webpack_require__(/*! raw-loader!./care-giver-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/care-giver-register/care-giver-register.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_4__["UsermanagementService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], careGiverRegisterPage);



/***/ }),

/***/ "./src/app/register/main/main.page.scss":
/*!**********************************************!*\
  !*** ./src/app/register/main/main.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-card {\n  --background: #ffffff;\n  --color: #483DF6;\n  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 0px;\n  margin: 40px 0; }\n  ion-card ion-card-content {\n    font-size: 1.4rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    min-height: 110px; }\n  ion-note {\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: #8b9398;\n  margin-top: 30px;\n  display: block; }\n  ion-note span {\n    color: #2c2c2c; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #BCBBCF;\n  --highlight-color-focused: #483DF6;\n  --highlight-color-valid: #483DF6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item.icon {\n    --padding-end: 40px;\n    overflow: visible; }\n  form ion-item ion-label {\n    --color: #BCBBCF; }\n  form ion-item ion-button {\n    position: absolute;\n    top: -10px;\n    right: -40px;\n    width: 42px;\n    min-height: 42px;\n    --background: transprent;\n    --border-radius: 50%;\n    --box-shadow: none;\n    --ripple-color: #fa5e61; }\n  form p {\n  font-size: 0.75rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-top: 0px;\n  display: block; }\n  form label {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  margin: 40px 0; }\n  form label ion-checkbox {\n    margin-right: 10px; }\n  ion-button:not(.button-has-icon-only) {\n  font-size: 1.2rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: inherit;\n  --border-radius: 25px;\n  --box-shadow: none;\n  margin: 25px auto;\n  max-width: 260px;\n  min-height: 50px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  ion-button + a {\n  font-weight: 600;\n  text-decoration: underline; }\n  ion-button.ion-color-light:hover {\n  --background: rgba(255, 255, 255, 0.25); }\n  h1 {\n  font-size: 2.3rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: center;\n  line-height: 36px;\n  color: #2c2c2c; }\n  h1:first-letter {\n    font-size: 26px; }\n  h2 {\n  font-size: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c; }\n  h3 {\n  font-size: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: center;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-top: 50px; }\n  h4 {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: center;\n  line-height: inherit;\n  color: #8b9398;\n  text-decoration: line-through; }\n  p {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: inherit;\n  line-height: inherit;\n  color: #8b9398; }\n  .sucess {\n  margin: -16px -16px 100px;\n  background-color: #483df6;\n  height: 100px; }\n  .sucess ion-img {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    width: 140px;\n    position: relative;\n    top: 30px; }\n  ion-list ion-item {\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 0; }\n  ion-list ion-item p {\n    font-size: 12px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: inherit;\n    line-height: inherit;\n    color: #8b9398; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvcmVnaXN0ZXIvbWFpbi9tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REE7RUF2QkksaUJBMEJzQjtFQXpCdEIsZ0JBeUIyQjtFQXZCN0IsaUJBdUJnQztFQXRCaEMsMEJBc0I0QztFQXJCNUMsZ0JBcUJrRDtFQXBCbEQsb0JBb0IyRDtFQW5CM0QsY0FtQm9FLEVBQUE7RUFIdEU7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtFQVVNLGlCQUFpQixFQUFBO0VBVnZCO0VBYU0sb0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBbkJ4QjtFQXdCTSxhQUFhLEVBQUE7RUFLbkI7RUFFSSxxQkFBYSxFQUFBO0VBSWpCO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7RUF6Q0Usb0JBK0NvQjtFQS9DcEIsYUErQ29CO0VBOUNwQixpQkE4QzRCO0VBN0M1Qix5QkE2Q29DO1VBN0NwQyxtQkE2Q29DO0VBNUNwQyx1QkE0QzJDO1VBNUMzQyxzQkE0QzJDO0VBQ3pDLG9CQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQVh0QjtJQWNNLG1CQUFtQixFQUFBO0VBZHpCO0lBMURJLGVBNEVvQjtJQTNFcEIsZ0JBMkV5QjtJQXpFM0IsaUJBeUU4QjtJQXhFOUIsMEJBd0UwQztJQXZFMUMsa0JBdUVrRDtJQXRFbEQsb0JBc0UyRDtJQXJFM0QsY0FxRW9FO0lBQ2hFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBdEJ4QjtJQTJCUSxlQUFlLEVBQUE7RUEzQnZCO0lBaUNRLGlCQUFpQixF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QixpQkMxQjhCO0lEMkI5QiwwQkMzQjBDO0lENEIxQyxrQkM1QmtEO0lENkJsRCxvQkM3QjJEO0lEOEIzRCxjQzlCb0U7SUR3Q3BFLG9CQ3ZDb0I7SUR1Q3BCLGFDdkNvQjtJRHdDcEIsaUJDeEMyQjtJRHlDM0IseUJDekNrQztZRHlDbEMsbUJDekNrQztJRDBDbEMsd0JDMUN5QztZRDBDekMsdUJDMUN5QztJQUN2QyxpQkFBaUIsRUFBQTtFQUlyQjtFRGlCSSxpQkNoQmtCO0VEaUJsQixnQkNqQnVCO0VEbUJ6QixpQkNuQjRCO0VEb0I1QiwwQkNwQndDO0VEcUJ4QyxnQkNyQjhDO0VEc0I5QyxvQkN0QnVEO0VEdUJ2RCxjQS9CaUI7RUNTakIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUhoQjtJQU1JLGNEZGdCLEVBQUE7RUNrQnBCO0VBRUkseUJBQWE7RUFDYix1QkFBZTtFQUNmLGtDQUEwQjtFQUMxQixnQ0FBd0I7RUFDeEIsa0NBQTBCO0VBQzFCLGtCQUFnQjtFREFoQixlQ0NrQjtFREFsQixnQkNBdUI7RURFekIsaUJDRjRCO0VERzVCLG9CQ0hrQztFRElsQyxnQkNKd0M7RURLeEMsb0JDTGlEO0VETWpELGNBaENrQjtFQzJCaEIsbUJBQW1CLEVBQUE7RUFUdkI7SUFZTSxtQkFBYztJQUNkLGlCQUFpQixFQUFBO0VBYnZCO0lBaUJNLGdCQUFRLEVBQUE7RUFqQmQ7SUFxQk0sa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBYTtJQUNiLG9CQUFnQjtJQUNoQixrQkFBYTtJQUNiLHVCQUFlLEVBQUE7RUE3QnJCO0VET0ksa0JDMkJxQjtFRDFCckIsZ0JDMEIwQjtFRHhCNUIsaUJDd0IrQjtFRHZCL0Isb0JDdUJxQztFRHRCckMsZ0JDc0IyQztFRHJCM0Msb0JDcUJvRDtFRHBCcEQsY0FoQ2tCO0VDcURoQixlQUFlO0VBQ2YsY0FBYyxFQUFBO0VBcENsQjtFRHdCRSxvQkNnQm9CO0VEaEJwQixhQ2dCb0I7RURmcEIsaUJDZTJCO0VEZDNCLHlCQ2NrQztVRGRsQyxtQkNja0M7RURibEMsdUJDYXdDO1VEYnhDLHNCQ2F3QztFQUN0QyxjQUFjLEVBQUE7RUF6Q2xCO0lBNENNLGtCQUFrQixFQUFBO0VBTXhCO0VEM0NJLGlCQzZDb0I7RUQ1Q3BCLGdCQzRDeUI7RUQxQzNCLGlCQzBDOEI7RUR6QzlCLDBCQ3lDMEM7RUR4QzFDLGtCQ3dDa0Q7RUR2Q2xELG9CQ3VDMkQ7RUR0QzNELGNDc0NvRTtFQUNsRSxxQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQ0FBYSxFQUFBO0VBUmpCO0VBWUksZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBO0VBYjlCO0VBaUJJLHVDQUFhLEVBQUE7RUFRakI7RURwRUksaUJDcUVrQjtFRHBFbEIsZ0JDb0V1QjtFRGxFekIsaUJDa0U0QjtFRGpFNUIsb0JDaUVrQztFRGhFbEMsa0JDZ0UwQztFRC9EMUMsaUJDK0RnRDtFRDlEaEQsY0FoQ2tCLEVBQUE7RUM2RnBCO0lBSUksZUFBZSxFQUFBO0VBSW5CO0VENUVJLGtCQzZFbUI7RUQ1RW5CLGdCQzRFd0I7RUQxRTFCLGlCQzBFNkI7RUR6RTdCLG9CQ3lFbUM7RUR4RW5DLGdCQ3dFeUM7RUR2RXpDLG9CQ3VFa0Q7RUR0RWxELGNBaENrQixFQUFBO0VDeUdwQjtFRGhGSSxpQkNpRmtCO0VEaEZsQixnQkNnRnVCO0VEOUV6QixpQkM4RTRCO0VEN0U1QixvQkM2RWtDO0VENUVsQyxrQkM0RTBDO0VEM0UxQyxvQkMyRW1EO0VEMUVuRCxjQWhDa0I7RUMyR2xCLGdCQUFnQixFQUFBO0VBR2xCO0VEckZJLGlCQ3NGa0I7RURyRmxCLGdCQ3FGdUI7RURuRnpCLGlCQ21GNEI7RURsRjVCLG9CQ2tGa0M7RURqRmxDLGtCQ2lGMEM7RURoRjFDLG9CQ2dGbUQ7RUQvRW5ELGNBL0JpQjtFQytHakIsNkJBQTZCLEVBQUE7RUFHL0I7RUQxRkksZUMyRmdCO0VEMUZoQixnQkMwRnFCO0VEeEZ2QixpQkN3RjBCO0VEdkYxQixvQkN1RmdDO0VEdEZoQyxtQkNzRnlDO0VEckZ6QyxvQkNxRmtEO0VEcEZsRCxjQS9CaUIsRUFBQTtFQ3NIbkI7RUFDRSx5QkFBeUI7RUFDekIseUJEdEhlO0VDdUhmLGFBQWEsRUFBQTtFQUhmO0lBS0ksMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTtFQUliO0VBRUkseUJBQWE7RUFDYixrQkFBZ0I7RUFDaEIsZ0JBQWMsRUFBQTtFQUpsQjtJRDFHSSxlQ2lIb0I7SURoSHBCLGdCQ2dIeUI7SUQ5RzNCLGlCQzhHOEI7SUQ3RzlCLG9CQzZHb0M7SUQ1R3BDLG1CQzRHNkM7SUQzRzdDLG9CQzJHc0Q7SUQxR3RELGNBL0JpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuaW9uLWNhcmQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjNDgzREY2O1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmb250KDEuNHJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xyXG4gICAgQGluY2x1ZGUgZmxleChmbGV4LG5vd3JhcCxjZW50ZXIsY2VudGVyKTtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHNwYW57XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNCQ0JCQ0Y7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDgzREY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0ODNERjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZWE0ZTRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgJi5pY29ue1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjQkNCQkNGO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgbWluLWhlaWdodDogNDJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3ByZW50O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLXJpcHBsZS1jb2xvcjogI2ZhNWU2MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgQGluY2x1ZGUgZm9udCgwLjc1cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsbm93cmFwLGNlbnRlcix1bnNldCk7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgJjpub3QoLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXtcclxuICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcblxyXG4gICYgKyBhe1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgJi5pb24tY29sb3ItbGlnaHQ6aG92ZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG4vLyAgIGNvbG9yOiAjMmMyYzJjO1xyXG4vLyB9XHJcblxyXG5oMXtcclxuICBAaW5jbHVkZSBmb250KDIuM3JlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIDM2cHgsICRmb250X2NvbG9yKTtcclxuXHJcbiAgJjpmaXJzdC1sZXR0ZXJ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5oMntcclxuICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG59XHJcblxyXG5oM3tcclxuICBAaW5jbHVkZSBmb250KDEuNXJlbSwgNTAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5oNHtcclxuICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG5we1xyXG4gIEBpbmNsdWRlIGZvbnQoMTZweCwgNDAwLCAwLCBub25lLCBpbmhlcml0LCBpbmhlcml0LCAkZGFya19ncmV5KTtcclxufVxyXG5cclxuLnN1Y2Vzc3tcclxuICBtYXJnaW46IC0xNnB4IC0xNnB4IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgaW9uLWltZ3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIFxyXG4gICAgcHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgxMnB4LCA0MDAsIDAsIG5vbmUsIGluaGVyaXQsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/main/main.page.ts":
/*!********************************************!*\
  !*** ./src/app/register/main/main.page.ts ***!
  \********************************************/
/*! exports provided: mainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPage", function() { return mainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let mainPage = class mainPage {
    constructor(translate) {
        this.translate = translate;
        this.translate.use('en');
    }
    ngOnInit() { }
};
mainPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
mainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-main',
        template: __webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/main/main.page.html"),
        styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], mainPage);



/***/ }),

/***/ "./src/app/register/offers/offers.page.ts":
/*!************************************************!*\
  !*** ./src/app/register/offers/offers.page.ts ***!
  \************************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/usermanagement.service */ "./src/app/core/services/usermanagement.service.ts");




let OffersPage = class OffersPage {
    constructor(modalController, user_service) {
        this.modalController = modalController;
        this.user_service = user_service;
        this.user_service.offerAmt().subscribe(res => {
            this.offer_list = res['offers'];
            console.log(this.offer_list);
        });
    }
    ngOnInit() {
    }
    select(offer) {
        this.user_profile = JSON.parse(localStorage.getItem("userdata"));
        this.prefill = this.user_profile['patient']['id'];
        this.user_service.couponAmt(this.prefill, offer['id']).subscribe(res => {
            console.log(res);
            let data = res;
            this.value = offer;
            this.value['amount'] = data['amount'];
            console.log(this.value);
            this.modalController.dismiss(this.value);
        });
    }
    close() {
        this.modalController.dismiss('data');
    }
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__["UsermanagementService"] }
];
OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: __webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/offers/offers.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__["UsermanagementService"]])
], OffersPage);



/***/ }),

/***/ "./src/app/register/payment-success/payment-success.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/register/payment-success/payment-success.page.ts ***!
  \******************************************************************/
/*! exports provided: paymentSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentSuccessPage", function() { return paymentSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let paymentSuccessPage = class paymentSuccessPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    Login() {
        this.router.navigate(['login']);
    }
};
paymentSuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
paymentSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-success',
        template: __webpack_require__(/*! raw-loader!./payment-success.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/payment-success/payment-success.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], paymentSuccessPage);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: registerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPageModule", function() { return registerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.router.module */ "./src/app/register/register.router.module.ts");
/* harmony import */ var _main_main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.page */ "./src/app/register/main/main.page.ts");
/* harmony import */ var _care_giver_register_care_giver_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./care-giver-register/care-giver-register.page */ "./src/app/register/care-giver-register/care-giver-register.page.ts");
/* harmony import */ var _self_care_register_self_care_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./self-care-register/self-care-register.page */ "./src/app/register/self-care-register/self-care-register.page.ts");
/* harmony import */ var _self_care_payment_self_care_payment_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./self-care-payment/self-care-payment.page */ "./src/app/register/self-care-payment/self-care-payment.page.ts");
/* harmony import */ var _self_care_offer_payment_self_care_off_payment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./self-care-offer-payment/self-care-off-payment.page */ "./src/app/register/self-care-offer-payment/self-care-off-payment.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offers/offers.page */ "./src/app/register/offers/offers.page.ts");
/* harmony import */ var _payment_success_payment_success_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-success/payment-success.page */ "./src/app/register/payment-success/payment-success.page.ts");















let registerPageModule = class registerPageModule {
};
registerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _register_router_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [
            _main_main_page__WEBPACK_IMPORTED_MODULE_6__["mainPage"],
            _care_giver_register_care_giver_register_page__WEBPACK_IMPORTED_MODULE_7__["careGiverRegisterPage"],
            _self_care_register_self_care_register_page__WEBPACK_IMPORTED_MODULE_8__["selfCareRegisterPage"],
            _self_care_payment_self_care_payment_page__WEBPACK_IMPORTED_MODULE_9__["selfCarePaymentPage"],
            _self_care_offer_payment_self_care_off_payment_page__WEBPACK_IMPORTED_MODULE_10__["selfCareOfferPaymentPage"],
            _offers_offers_page__WEBPACK_IMPORTED_MODULE_12__["OffersPage"],
            _payment_success_payment_success_page__WEBPACK_IMPORTED_MODULE_13__["paymentSuccessPage"]
        ]
    })
], registerPageModule);



/***/ }),

/***/ "./src/app/register/register.router.module.ts":
/*!****************************************************!*\
  !*** ./src/app/register/register.router.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.page */ "./src/app/register/main/main.page.ts");
/* harmony import */ var _self_care_register_self_care_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./self-care-register/self-care-register.page */ "./src/app/register/self-care-register/self-care-register.page.ts");
/* harmony import */ var _care_giver_register_care_giver_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./care-giver-register/care-giver-register.page */ "./src/app/register/care-giver-register/care-giver-register.page.ts");
/* harmony import */ var _self_care_payment_self_care_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./self-care-payment/self-care-payment.page */ "./src/app/register/self-care-payment/self-care-payment.page.ts");
/* harmony import */ var _self_care_offer_payment_self_care_off_payment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./self-care-offer-payment/self-care-off-payment.page */ "./src/app/register/self-care-offer-payment/self-care-off-payment.page.ts");
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offers/offers.page */ "./src/app/register/offers/offers.page.ts");
/* harmony import */ var _payment_success_payment_success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-success/payment-success.page */ "./src/app/register/payment-success/payment-success.page.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");











const routes = [
    {
        path: 'main',
        component: _main_main_page__WEBPACK_IMPORTED_MODULE_3__["mainPage"],
    },
    {
        path: 'self-care-register',
        component: _self_care_register_self_care_register_page__WEBPACK_IMPORTED_MODULE_4__["selfCareRegisterPage"],
    },
    {
        path: 'care-giver-register',
        component: _care_giver_register_care_giver_register_page__WEBPACK_IMPORTED_MODULE_5__["careGiverRegisterPage"],
    },
    {
        path: 'self-care-payment',
        component: _self_care_payment_self_care_payment_page__WEBPACK_IMPORTED_MODULE_6__["selfCarePaymentPage"],
    },
    {
        path: 'self-care-offer-payment',
        component: _self_care_offer_payment_self_care_off_payment_page__WEBPACK_IMPORTED_MODULE_7__["selfCareOfferPaymentPage"],
    },
    {
        path: 'offers',
        component: _offers_offers_page__WEBPACK_IMPORTED_MODULE_8__["OffersPage"],
    },
    {
        path: 'payment-success',
        component: _payment_success_payment_success_page__WEBPACK_IMPORTED_MODULE_9__["paymentSuccessPage"],
    },
    {
        path: '',
        component: _main_main_page__WEBPACK_IMPORTED_MODULE_3__["mainPage"],
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"]]
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/self-care-offer-payment/self-care-off-payment.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/register/self-care-offer-payment/self-care-off-payment.page.ts ***!
  \********************************************************************************/
/*! exports provided: selfCareOfferPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfCareOfferPaymentPage", function() { return selfCareOfferPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../offers/offers.page */ "./src/app/register/offers/offers.page.ts");
/* harmony import */ var _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/usermanagement.service */ "./src/app/core/services/usermanagement.service.ts");






let selfCareOfferPaymentPage = class selfCareOfferPaymentPage {
    constructor(router, modalController, user_service) {
        this.router = router;
        this.modalController = modalController;
        this.user_service = user_service;
        this.cardDetails = {};
        this.offer_details = {};
        this.status = false;
        this.currencyIcon = '$';
        this.razor_key = 'rzp_test_09tj2MBCJaCXh6';
        this.user_profile = JSON.parse(localStorage.getItem("userdata"));
        console.log(this.user_profile);
        this.prefill = this.user_profile['patient'];
        this.user_service.user_data(this.prefill.email).subscribe(res => {
            console.log(res);
            let data = res['authentication'][0];
            let dataAuth = {
                patient: data
            };
            localStorage.setItem("userdata", JSON.stringify(dataAuth));
            this.user_profile = JSON.parse(localStorage.getItem("userdata"));
            this.prefill = this.user_profile['patient'];
        });
        this.user_service.subscriptionAmt().subscribe(res => {
            this.pay_amount = res;
            console.log(this.pay_amount);
        });
    }
    payment() {
        // this.router.navigate(['/register/payment-success']);
        /*this.navCtrl.navigateBack('/final-registration');*/
        let payAmount;
        if (this.status == true) {
            payAmount = this.offer_details.amount;
        }
        else {
            payAmount = this.pay_amount;
        }
        var options = {
            key: this.razor_key,
            description: 'Credits towards consultation',
            /*image: 'https://i.imgur.com/3g7nmJC.png',*/
            currency: "INR",
            amount: payAmount * 100,
            name: 'BC4',
            prefill: {
                email: this.prefill.email,
                contact: this.prefill.mobile_no,
                name: this.prefill.name
            },
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = (success) => {
            var orderId = success.razorpay_order_id;
            var signature = success.razorpay_signature;
            this.makePayment(success.razorpay_payment_id);
        };
        var cancelCallback = function (error) {
            console.log(error.description + ' (Error ' + error.code + ')');
        };
        //RazorpayCheckout.open(options,successCallback,cancelCallback)
        RazorpayCheckout.on('payment.success', successCallback);
        RazorpayCheckout.on('payment.cancel', cancelCallback);
        RazorpayCheckout.open(options);
    }
    makePayment(payment) {
        var paymentId = payment;
        let data = {
            "payment_id": paymentId,
            "user_id": this.prefill['id'],
            "offer_id": this.offer_details['id'] || null
        };
        this.user_service.selfPayment(data).subscribe(res => {
            console.log(this.pay_amount);
            this.router.navigate(['register/payment-success']);
        }, error => {
            alert('Failed to update your payment,Please contact administrator');
        });
    }
    coupon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _offers_offers_page__WEBPACK_IMPORTED_MODULE_4__["OffersPage"],
                mode: "md"
            });
            modal.onDidDismiss().then((data) => {
                let offerData = data.data;
                console.log(offerData);
                if (offerData != 'data') {
                    this.status = true;
                    this.offer_details = offerData;
                    console.log(this.offer_details);
                }
            });
            return yield modal.present();
        });
    }
};
selfCareOfferPaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_5__["UsermanagementService"] }
];
selfCareOfferPaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-self-care-off-payment',
        template: __webpack_require__(/*! raw-loader!./self-care-off-payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/self-care-offer-payment/self-care-off-payment.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_5__["UsermanagementService"]])
], selfCareOfferPaymentPage);



/***/ }),

/***/ "./src/app/register/self-care-payment/self-care-payment.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/register/self-care-payment/self-care-payment.page.ts ***!
  \**********************************************************************/
/*! exports provided: selfCarePaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfCarePaymentPage", function() { return selfCarePaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_offers_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../offers/offers.page */ "./src/app/register/offers/offers.page.ts");





let selfCarePaymentPage = class selfCarePaymentPage {
    constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
        this.paymentAmount = 500;
        this.currencyIcon = '$';
        this.razor_key = 'rzp_test_D4jgfSRripvke9';
        this.cardDetails = {};
    }
    payment() {
        this.router.navigate(['register/payment-success']);
        /*this.navCtrl.navigateBack('/final-registration');*/
        // var options = {
        //     key: this.razor_key,
        //     description: 'Credits towards consultation',
        //     /*image: 'https://i.imgur.com/3g7nmJC.png',*/
        //     currency: "INR",
        //     amount: this.paymentAmount * 100,
        //     name: 'BC4',
        //     prefill: {
        //       email: 'adhvik@gmail.com',
        //       contact: '9621323231',
        //       name: 'adhvik'
        //     },
        //     theme: {
        //       color: '#F37254'
        //     },
        //     modal: {
        //       ondismiss: function () {
        //         alert('dismissed')
        //       }
        //     }
        //   };
        // var successCallback = function(success) {
        //   //alert('payment_id: ' + success.razorpay_payment_id)
        //   var orderId = success.razorpay_order_id;
        //   var signature = success.razorpay_signature;
        //   this.router.navigate(['register/payment-success'])
        // }
        // var cancelCallback = function(error) {
        //   //alert(error.description + ' (Error '+error.code+')')
        // }
        //   RazorpayCheckout.open(options, successCallback, cancelCallback);
    }
    coupon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _offers_offers_page__WEBPACK_IMPORTED_MODULE_4__["OffersPage"],
                mode: "md"
            });
            return yield modal.present();
        });
    }
};
selfCarePaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
selfCarePaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-self-care-payment',
        template: __webpack_require__(/*! raw-loader!./self-care-payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/self-care-payment/self-care-payment.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], selfCarePaymentPage);



/***/ }),

/***/ "./src/app/register/self-care-register/self-care-register.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/register/self-care-register/self-care-register.page.ts ***!
  \************************************************************************/
/*! exports provided: selfCareRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfCareRegisterPage", function() { return selfCareRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/usermanagement.service */ "./src/app/core/services/usermanagement.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");









let selfCareRegisterPage = class selfCareRegisterPage {
    constructor(toast, translate, modalController, router, fb, user_service, toastController) {
        this.toast = toast;
        this.translate = translate;
        this.modalController = modalController;
        this.router = router;
        this.fb = fb;
        this.user_service = user_service;
        this.toastController = toastController;
        this.showBackdrop = false;
        this.checkStatus = false;
        this.registerProgress = false;
        this.submitted = false;
        this.translate.use('en');
    }
    ngOnInit() {
        this.detailForm = this.fb.group({
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])]],
            'mobile_no': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            'address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'country': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'care_name': ['', []],
            'care_mobile': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            'password1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), this.equalto('password')]],
            'checkStatus': [this.checkStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]]
        });
    }
    get f() { return this.detailForm.controls; }
    ionViewDidEnter() {
        this.name_focus.setFocus();
    }
    self_detail(detail) {
        this.submitted = true;
        if (this.detailForm.valid) {
            this.registerProgress = true;
            let id = detail['email'].toLowerCase();
            let data = {
                "user": {
                    'name': detail.name,
                    'email': id,
                    'password': detail.password,
                    'password1': detail.password1,
                    'mobile_no': detail.mobile_no,
                    'address': detail.address,
                    'country': detail.country,
                    'blood_group': '',
                    'age': '',
                    'role_id': 1
                },
                "caregiver": {
                    'name': detail.care_name,
                    'mobile_no': detail.care_mobile,
                    'role_id': 2
                }
            };
            this.user_service.care_detail(data).subscribe(res => {
                this.registerProgress = false;
                let user_details = res;
                localStorage.setItem("userdata", JSON.stringify(user_details));
                this.presentToast('You have registered successfully');
                this.router.navigate(['register/self-care-offer-payment']);
            }, error => {
                this.registerProgress = false;
                this.presentToast(error["error"]["error"]);
            });
        }
        //   else if(this.detailForm.value["name"]==''){
        //       this.presentToast('Please enter your name')
        //   }else if(this.detailForm.value["email"]==''){
        //       this.presentToast('Please enter your email')
        //   }else if(this.detailForm.value["password"]=='' || this.detailForm.value["password1"]==''){
        //       this.presentToast('Please enter the password')
        //   }else if(this.detailForm.value["password"]!=this.detailForm.value["password1"]){
        //       this.presentToast("Password doesn't match")
        //   }
        else if (this.detailForm.value["checkStatus"] == false) {
            this.presentToast("Please agree terms and conditions");
        }
        //   else{
        //   	   this.presentToast('Please fill all the mandatory fields')
        //   }	
        //this.router.navigate(['register/self-care-payment']);
    }
    equalto(field_name) {
        return (control) => {
            let input = control.value;
            let isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid } };
            }
            else {
                return null;
            }
        };
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    goToterms() {
        this.router.navigate(['/terms_conditions']);
    }
};
selfCareRegisterPage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__["UsermanagementService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name_auto', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], selfCareRegisterPage.prototype, "name_focus", void 0);
selfCareRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-self-care-register',
        template: __webpack_require__(/*! raw-loader!./self-care-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/self-care-register/self-care-register.page.html"),
        styles: [__webpack_require__(/*! ../main/main.page.scss */ "./src/app/register/main/main.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_usermanagement_service__WEBPACK_IMPORTED_MODULE_3__["UsermanagementService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], selfCareRegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map