(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/tab3/edit-profile/edit-profile.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/tab3/edit-profile/edit-profile.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title class=\"ion-padding-start\">Edit Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n\t<ion-avatar>\n\t\t<span *ngIf=\"cdvFilePath1 == null\"> {{ initialLogo | uppercase }}</span>\n\t\t<span *ngIf=\"cdvFilePath1 != null\"><img [src]=\"cdvFilePath1\"></span>\n\t</ion-avatar>\n\t<ion-button class=\"trans_btn\" (click)=\"openImagePicker()\">\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.568\" height=\"10.2\" viewBox=\"0 0 12.568 10.2\"> <g id=\"photo-camera_1_\" data-name=\"photo-camera (1)\" transform=\"translate(0 -46.15)\"> <g id=\"Group_517\" data-name=\"Group 517\" transform=\"translate(0 46.15)\"> <path id=\"Path_1268\" data-name=\"Path 1268\" d=\"M0,49.271v5.545A1.535,1.535,0,0,0,1.534,56.35h9.5a1.535,1.535,0,0,0,1.534-1.534V49.271a1.46,1.46,0,0,0-1.459-1.459H9.067L9.018,47.6A1.864,1.864,0,0,0,7.192,46.15H5.373A1.869,1.869,0,0,0,3.547,47.6l-.049.213H1.459A1.462,1.462,0,0,0,0,49.271Zm3.75-.831a.313.313,0,0,0,.305-.244l.105-.457a1.241,1.241,0,0,1,1.213-.962H7.192A1.241,1.241,0,0,1,8.4,47.74l.105.457a.315.315,0,0,0,.305.244h2.29a.831.831,0,0,1,.831.831v5.545a.905.905,0,0,1-.905.905h-9.5a.905.905,0,0,1-.905-.905V49.271a.831.831,0,0,1,.831-.831Z\" transform=\"translate(0 -46.15)\" fill=\"#483df6\"/> <circle id=\"Ellipse_397\" data-name=\"Ellipse 397\" cx=\"0.421\" cy=\"0.421\" r=\"0.421\" transform=\"translate(1.706 3.211)\" fill=\"#483df6\"/> <path id=\"Path_1269\" data-name=\"Path 1269\" d=\"M144.739,180.428a2.639,2.639,0,1,0-2.639-2.639A2.643,2.643,0,0,0,144.739,180.428Zm0-4.65a2.011,2.011,0,1,1-2.011,2.011A2.014,2.014,0,0,1,144.739,175.778Z\" transform=\"translate(-138.455 -171.841)\" fill=\"#483df6\"/> </g> </g> </svg>\n\t\tChoose\n\t</ion-button>\n\t<h5>UID: {{editprofile.user_info.user_uid}}</h5>\n\t<!-- <ion-button (click)=\"takePicture()\"> camera</ion-button>\n\t<ion-button (click)=\"openImagePicker()\">Choose Image</ion-button> -->\n\t<!-- <ion-input   [(ngModel)]=\"usernameupdate\"></ion-input>\n\t<ion-input [(ngModel)]=\"useremailupdate\"></ion-input>\n\t<ion-input [(ngModel)]=\"userphoneupdate\"></ion-input> -->\n\t<!-- <ion-button (click)=\"sendEditProfile()\">Submit</ion-button> -->\n\n\t<form class=\"footerform\" [formGroup]=\"editProfileForm\" (ngSubmit)=\"sendEditProfile(editProfileForm.value)\">\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Name</ion-label> \n\t\t\t<!-- {{'name' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"name\" #name></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Email ID</ion-label>\n\t\t\t<!-- {{'email_id' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"email\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Mobile#</ion-label>\n\t\t\t<!-- {{'mob' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"mobile_no\" (keypress)=\"_keyPress($event)\"></ion-input>\n\t\t</ion-item>\n\t\t<!-- <ion-item class=\"ion-float-right\">\n\t\t\t<ion-button type=\"submit\" [disabled]=\"editProfileForm.invalid\">{{'save' | translate}}</ion-button>\n\t\t</ion-item> -->\n\t\t<div class=\"footer\">\n\t\t\t<ion-button (click)=\"close()\" expand=\"block\">\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t\t<button type=\"submit\" class=\"btn_submit\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-care/tab3/tab3.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-care/tab3/tab3.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\n   <ion-toolbar color=\"primary\">\n      <ion-title class=\"ion-padding-start\">Settings</ion-title>\n      <ion-buttons slot=\"end\">\n         <ion-button>\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n         </ion-button>\n         <ion-button>\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n         </ion-button>\n         <ion-button>\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\n         </ion-button>\n      </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n   <ion-item>\n      <ion-avatar slot=\"start\">\n         <span *ngIf=\"img == null\">{{initialLogo}}</span>\n         <img *ngIf=\"img != null\" [src]=\"img\">\n      </ion-avatar>\n      <ion-label>\n         <h3>{{pic?.user_info.name}}</h3>\n         <!-- <h6>{{pic?.user_info.email}}</h6> -->\n         <ion-button class=\"trans_btn copy_btn\"  (click)=\"copyText(pic.user_info.user_uid)\">\n            UID: {{pic?.user_info.user_uid}}\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.652\" height=\"15.8\" viewBox=\"0 0 12.652 15.8\"><g transform=\"translate(-48.65)\"><g transform=\"translate(48.65)\"><path d=\"M57.244,85.4H49.9a1.25,1.25,0,0,0-1.249,1.249V97.188A1.25,1.25,0,0,0,49.9,98.437h7.345a1.25,1.25,0,0,0,1.249-1.249V86.649A1.254,1.254,0,0,0,57.244,85.4Zm.372,11.785a.376.376,0,0,1-.375.375H49.9a.376.376,0,0,1-.375-.375V86.649a.376.376,0,0,1,.375-.375h7.345a.376.376,0,0,1,.375.375Z\" transform=\"translate(-48.65 -82.637)\" fill=\"#483df6\"/><path d=\"M144.044,0H136.7a1.25,1.25,0,0,0-1.249,1.249.437.437,0,1,0,.874,0A.376.376,0,0,1,136.7.874h7.345a.376.376,0,0,1,.375.375V11.788a.376.376,0,0,1-.375.375.437.437,0,0,0,0,.874,1.25,1.25,0,0,0,1.249-1.249V1.249A1.25,1.25,0,0,0,144.044,0Z\" transform=\"translate(-132.641)\" fill=\"#483df6\"/></g></g></svg>\n         </ion-button>\n         <ion-button class=\"trans_btn\" (click)=\"edit()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><g transform=\"translate(-5.6 -6.9)\"><g transform=\"translate(5.6 6.9)\"><path d=\"M16.3,114.3H6.083a.385.385,0,0,0-.383.383.391.391,0,0,0,.383.383H16.308a.385.385,0,0,0,.383-.383A.393.393,0,0,0,16.3,114.3Z\" transform=\"translate(-5.691 -104.271)\" fill=\"#483df6\"/><path d=\"M5.609,13.539,5.6,15.36a.4.4,0,0,0,.112.28.374.374,0,0,0,.271.112l1.812-.009a.374.374,0,0,0,.271-.112l6.256-6.256a.4.4,0,0,0,0-.551L12.529,7.012a.4.4,0,0,0-.551,0L10.726,8.273l-5.005,5A.416.416,0,0,0,5.609,13.539Zm6.649-5.705,1.261,1.261-.71.71L11.548,8.543l.71-.71ZM6.384,13.707,11,9.094l1.261,1.261-4.613,4.6-1.27.009Z\" transform=\"translate(-5.6 -6.9)\" fill=\"#483df6\"/></g></g></svg>\n            edit\n         </ion-button>\n      </ion-label>\n   </ion-item>\n   <!-- <ion-row class=\"ion-padding\">\n      <ion-col size=\"4\" class=\"ion-align-self-center\">\n         <ion-avatar>\n            <img [src]=\"img\">\n         </ion-avatar>\n      </ion-col>\n      <ion-col>\n         <ion-text color=\"dark\">\n            <h1>{{pic?.user_info.name}}</h1>\n            <h6>{{pic?.user_info.email}}</h6>\n            <h6>ID : {{pic?.user_info.user_uid}}</h6>\n         </ion-text>\n         <ion-icon name=\"create\" size=\"large\" (click)=\"edit()\" class=\"ion-float-right\"></ion-icon>\n      </ion-col>\n\n   </ion-row> -->\n   <ion-list>\n      <ion-item button (click)=\"alertToneSetting()\">\n         <ion-label>\n           <h4>Alert Tone</h4>\n           <p>Set your alert tone</p>\n           <h2>{{this.alertFileName}}</h2>\n         </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"remainderToneSetting()\">\n         <ion-label>\n            <h4>Reminder Tone</h4>\n            <p>Set your reminder tone</p>\n            <h2>{{this.remainderFileName}}</h2>\n         </ion-label>\n      </ion-item>\n\n      <!-- <ion-item button (click)=\"careGiverName()\">\n         <ion-label>\n            <h4>Care Giver</h4>\n            <p>Choose your carer giver</p>\n            <h2>{{data1}}</h2>\n         </ion-label>\n      </ion-item> -->\n\n\n      <ion-item button (click)=\"reorderDuration()\">\n         <ion-label>\n            <h4>Medication Reorder Quantity</h4>\n            <p>Set your medication recorder quantity</p>\n            <h2>{{reOrderUnit}}</h2>\n         </ion-label>\n      </ion-item>\n\n\n      <ion-item button (click)=\"autoUpdateDuration()\">\n         <ion-label>\n            <h4>Auto Update</h4>\n            <p>which sync your app data to the cloud storage</p>\n            <h2>{{autoUpdateDays}}</h2>\n         </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"goToAbout()\">\n         <ion-label>\n            <h4>About</h4>\n            <p>Know about us</p>\n         </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"goToterms()\">\n         <ion-label>\n            <h4>Terms & Conditions</h4>\n            <p>Read to know the terms & conditions of us</p>\n         </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"logout()\">\n         <ion-label>\n            <h4>Logout</h4>\n            <p>You will be logout from the application</p>\n         </ion-label>\n      </ion-item>\n\n   </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/self-care/tab3/edit-profile/edit-profile.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/self-care/tab3/edit-profile/edit-profile.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  ion-avatar {\n  width: 130px;\n  height: 130px;\n  margin: 0 auto;\n  overflow: hidden; }\n  ion-avatar span {\n    font-size: 5rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #72708b; }\n  .trans_btn {\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --border-color: #ddd;\n  --border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none;\n  margin: 0;\n  position: relative;\n  top: -15px;\n  height: auto; }\n  .trans_btn svg {\n    margin-right: 2px; }\n  h5 {\n  font-size: 1.15rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  margin: 5px 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL3RhYjMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRBO0VBeEJJLGlCQTJCc0I7RUExQnRCLGdCQTBCMkI7RUF4QjdCLGlCQXdCZ0M7RUF2QmhDLDBCQXVCNEM7RUF0QjVDLGdCQXNCa0Q7RUFyQmxELG9CQXFCMkQ7RUFwQjNELGNBb0JvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBMUNFLG9CQWdEb0I7RUFoRHBCLGFBZ0RvQjtFQS9DcEIsaUJBK0M0QjtFQTlDNUIseUJBOENvQztVQTlDcEMsbUJBOENvQztFQTdDcEMsdUJBNkMyQztVQTdDM0Msc0JBNkMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTNESSxlQTZFb0I7SUE1RXBCLGdCQTRFeUI7SUExRTNCLGlCQTBFOEI7SUF6RTlCLDBCQXlFMEM7SUF4RTFDLGtCQXdFa0Q7SUF2RWxELG9CQXVFMkQ7SUF0RTNELGNBc0VvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFB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QTtFQXJDeEI7TUFnRE0sY0FBYyxFQUFBO0VDMXNCcEI7RUFFSSx5QkFBYTtFQUNiLHVCQUFlO0VBQ2Ysa0NBQTBCO0VBQzFCLGdDQUF3QjtFQUN4QixrQ0FBMEI7RUFDMUIsa0JBQWdCO0VEMEJoQixlQ3pCa0I7RUQwQmxCLGdCQzFCdUI7RUQ0QnpCLGlCQzVCNEI7RUQ2QjVCLG9CQzdCa0M7RUQ4QmxDLGdCQzlCd0M7RUQrQnhDLG9CQy9CaUQ7RURnQ2pELGNBbENrQjtFQ0doQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFLZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBSmxCO0lEZ0JJLGVDVmtCO0lEV2xCLGdCQ1h1QjtJRGF6QixpQkNiNEI7SURjNUIsb0JDZGtDO0lEZWxDLGdCQ2Z3QztJRGdCeEMsb0JDaEJpRDtJRGlCakQsY0NqQjBELEVBQUE7RUFJNUQ7RUFDRSxxQkFBYTtFQUNiLCtCQUF1QjtFQUN2Qiw2QkFBcUI7RUFDckIsMkNBQWE7RUFDYixvQkFBZTtFQUNmLHFCQUFnQjtFREFkLGlCQ0NrQjtFREFsQixnQkNBdUI7RURFekIsaUJDRjRCO0VERzVCLDBCQ0h3QztFREl4QyxnQkNKOEM7RURLOUMsb0JDTHVEO0VETXZELFdDTjZEO0VBQzdELFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVksRUFBQTtFQVhkO0lBY0ksaUJBQWlCLEVBQUE7RUFJckI7RURaSSxrQkNhbUI7RURabkIsZ0JDWXdCO0VEVjFCLGlCQ1U2QjtFRFQ3QixvQkNTbUM7RURSbkMsa0JDUTJDO0VEUDNDLG9CQ09vRDtFRE5wRCxXQ00wRDtFQUMxRCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGYtY2FyZS90YWIzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG4kbXktZ3JleS1ibHVlIDogI2VhNGU0ZTtcblxuJWZvbnQtY29sb3Ige1xuICAtLWNvbG9yOiAjMmMyYzJjO1xufVxuJWRhcmstZ3JheSB7XG4gIC0tY29sb3I6ICM4YjkzOTg7XG59XG4lcHJpbWFyeS1jb2xvciB7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG59XG5cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgLy8gaW9uLWl0ZW17XG4gIC8vICAgaW9uLWxhYmVse1xuICAvLyAgICAgLS1jb2xvcjogIzdiN2I3YjtcbiAgLy8gICB9XG4gIC8vIH1cbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMxYzFjMWM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBkYzY4O1xuICAgICAgcGFkZGluZzogMXB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuZm9ybXtcbiAgaW9uLWxpc3R7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gLnBvaW50ZXJfbm9uZXtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4uYm90dG9tX2FjdGlvbntcbiAgLy8gQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgfVxufVxuXG4ucGxheV9oZWFkZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ucGxheV9tb2RhbHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGgze1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgcHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJHdoaXRlKTtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIH1cbiAgLnBsYXlfYWN0aW9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJhbmdlIHtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJvcmRlci1yYWRpdXM6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0taGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWtub2ItYmFja2dyb3VuZDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3gtc2hhZG93OiAycHg7XG4gICAgICAvLyAtLWtub2Itc2l6ZTogMnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXBwLnNjc3NcIjtcclxuXHJcbmZvcm0ge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0ODNkZjY7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNlYTRlNGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAtLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBzcGFuIHtcclxuICAgIEBpbmNsdWRlIGZvbnQoNXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAjNzI3MDhiKTtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc19idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIG5vbmUpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbmg1IHtcclxuICBAaW5jbHVkZSBmb250KDEuMTVyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcclxuICBtYXJnaW46IDVweCAwIDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/self-care/tab3/edit-profile/edit-profile.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/self-care/tab3/edit-profile/edit-profile.page.ts ***!
  \******************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");












//import { Base64 } from '@ionic-native/base64/ngx';


// import { Clipboard } from '@ionic-native/clipboard/ngx';



let EditProfilePage = class EditProfilePage {
    constructor(toast, actionSheetController, fb, sanitizer, route, file, transfer, camera, imagePicker, webview, crop, serv, navParams, modalController, toastController, networkProvider, database) {
        // this.route.queryParams.subscribe(params => {
        //     if (params && params.special) {
        //       console.log(params)
        //       this.editprofile = JSON.parse(params.special);
        //       console.log(this.editprofile.profile_pic,"edit")
        //        this.insialLogo = this.editprofile.user_info.name.charAt(0);
        //       if(this.editprofile["profile_pic"] == null){
        //         this.img=".././././assets/img/contact.png"
        //       }
        //       else{
        //             this.linkSource = this.editprofile["profile_pic"];
        //             this.img= this.sanitizer.bypassSecurityTrustResourceUrl(this.linkSource)
        //             console.log(this.img)
        //       }
        //     }
        //   });
        this.toast = toast;
        this.actionSheetController = actionSheetController;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.route = route;
        this.file = file;
        this.transfer = transfer;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.webview = webview;
        this.crop = crop;
        this.serv = serv;
        this.navParams = navParams;
        this.modalController = modalController;
        this.toastController = toastController;
        this.networkProvider = networkProvider;
        this.database = database;
        this.cdvFilePath = null;
        this.editprofile = this.navParams.get('pics');
        let globalURL = null;
        let localURL = null;
        if (this.editprofile['user_info']['user_picture']['url'] != null) {
            let source = this.editprofile['user_info']['user_picture']['url'];
            let gurl = source.includes("file:///");
            if (gurl == true) {
                globalURL = this.webview.convertFileSrc(source);
            }
            else {
                globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(source);
            }
            //this.cdvFilePath1= this.sanitizer.bypassSecurityTrustResourceUrl(source);
        }
        // else if(this.editprofile['user_info']['user_option']!=null){
        //   let source = this.webview.convertFileSrc(this.editprofile['user_info']['user_option']['localURL']); 
        //   localURL = source;
        // }
        else {
            //this.cdvFilePath1= null;
            let source = this.webview.convertFileSrc(this.editprofile['user_info']['user_picture']['localURL']);
            localURL = source;
        }
        if (this.networkProvider.isNetworkOnline) {
            this.isNetwork = true;
            this.cdvFilePath1 = globalURL != null ? globalURL : localURL;
        }
        else {
            this.isNetwork = false;
            this.cdvFilePath1 = localURL;
        }
        // this.cdvFilePath1=this.editprofile['profile_pic']
        this.initialLogo = this.editprofile.user_info.name.charAt(0);
    }
    ngOnInit() {
        this.editProfileForm = this.fb.group({
            "name": [this.editprofile["user_info"]["name"], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            "email": [this.editprofile["user_info"]["email"], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])]],
            "mobile_no": [this.editprofile["user_info"]["mobile_no"], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(10)]],
        });
        this.userphoneupdate = this.editprofile.user_info.mobile_no;
        this.useremailupdate = this.editprofile.user_info.email;
        this.usernameupdate = this.editprofile.user_info.name;
    }
    ionViewDidEnter() {
        this.namefocus.setFocus();
    }
    sample(data) {
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // let data={}
        // let options: FileUploadOptions = {
        //  fileKey: 'user_picture',
        //  fileName: this.audioFileName,
        //  mimeType: 'multipart/form-data',
        //  params:data,
        //  chunkedMode: false,
        //  headers:{ 'Authorization': 'Bearer '+localStorage.getItem('token') }
        // }
        // fileTransfer.upload(this.cdvFilePath,environment.apiUrl+'users/profile_picture',options).then(res=>{
        //   this.presentToast('Profile updated successfully');
        //   console.log(res,'res');
        // }).catch();
        this.database.updateUserImage(data).then(res => {
            console.log(res);
            this.presentToast('Profile updated successfully');
        }).catch(error => {
            this.presentToast('Failed to update the profile');
            console.log(error);
        });
    }
    selectimage() {
        let options = {
            maximumImagesCount: 1,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then((results) => {
            console.log('Image URI: ' + results);
            this.img = results.toString();
            this.crop.crop(this.img, { quality: 100 })
                .then(newImage => {
                console.log(newImage);
                this.cdvFilePath1 = this.webview.convertFileSrc(newImage);
                //this.reduceImages(results).then(() => {});
                this.file.resolveLocalFilesystemUrl(newImage).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    console.log(fileMeta);
                    this.audioFileName = fileMeta.name;
                    this.cdvFilePath = fileMeta['localURL'];
                    console.log(this.cdvFilePath, 'filepath');
                    let source = this.editprofile['user_info']['user_picture']['url'];
                    let userPicturedata;
                    if (source == null) {
                        userPicturedata = {
                            url: source,
                            localURL: newImage,
                            cdvFilePath: this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    else {
                        userPicturedata = {
                            url: newImage,
                            localURL: newImage,
                            cdvFilePath: this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    this.sample(userPicturedata);
                });
            }, error => console.error('Error cropping image', error));
        }, (err) => {
            console.log(err);
        });
    }
    openImagePicker() {
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
        this.camera.getPicture(options).then((results) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.img = results.toString();
            this.crop.crop(this.img, { quality: 100 })
                .then(newImage => {
                console.log(newImage);
                this.cdvFilePath1 = this.webview.convertFileSrc(newImage);
                //this.reduceImages(results).then(() => {});
                this.file.resolveLocalFilesystemUrl(newImage).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    console.log(fileMeta);
                    this.audioFileName = fileMeta.name;
                    this.cdvFilePath = fileMeta['localURL'];
                    console.log(this.cdvFilePath, 'filepath');
                    let source = this.editprofile['user_info']['user_picture']['url'];
                    // let userPicturedata = {
                    //   url: source,
                    //   localURL: newImage,
                    //   cdvFilePath: this.cdvFilePath,
                    //   toUpdate: true
                    // }
                    let userPicturedata;
                    if (source == null) {
                        userPicturedata = {
                            url: source,
                            localURL: newImage,
                            cdvFilePath: this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    else {
                        userPicturedata = {
                            url: newImage,
                            localURL: newImage,
                            cdvFilePath: this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    this.sample(userPicturedata);
                });
            }, error => console.error('Error cropping image', error));
        }, (err) => {
            // Handle error
        });
    }
    sendEditProfile(val) {
        if (this.editProfileForm.valid) {
            this.userphoneupdate = val.mobile_no;
            this.useremailupdate = val.email.toLowerCase();
            this.usernameupdate = val.name;
            let data = { id: this.editprofile.user_info.id,
                name: this.usernameupdate,
                email: this.useremailupdate,
                mobile_no: this.userphoneupdate,
                role_id: 1
            };
            //  this.serv.editprofile(data, this.editprofile.user_info.id).subscribe(res=>{
            //   this.presentToast('Profile updated successfully');
            //   this.modalController.dismiss();
            //  },error=>{
            //  })
            this.database.updateUserData(data).then(res => {
                console.log(res);
                this.presentToast('Profile updated successfully');
                this.modalController.dismiss();
            }).catch(err => {
                console.log(err);
            });
        }
        else {
            this.presentToast('Please enter all the fields');
        }
    }
    close() {
        this.modalController.dismiss();
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
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
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ActionSheetController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["settingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"] },
    { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditProfilePage.prototype, "namefocus", void 0);
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/tab3/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/self-care/tab3/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ActionSheetController"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"]])
], EditProfilePage);



/***/ }),

/***/ "./src/app/self-care/tab3/tab3.module.ts":
/*!***********************************************!*\
  !*** ./src/app/self-care/tab3/tab3.module.ts ***!
  \***********************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/self-care/tab3/tab3.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-profile/edit-profile.page */ "./src/app/self-care/tab3/edit-profile/edit-profile.page.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");



















//import { Base64 } from '@ionic-native/base64/ngx';




let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }, { path: 'edit-profile', component: _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_17__["EditProfilePage"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_17__["EditProfilePage"]],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"],
            //Base64,
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_15__["WebView"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_18__["Clipboard"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__["FileChooser"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__["Toast"],
            _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_20__["DataBaseSummaryProvider"]
        ],
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/self-care/tab3/tab3.page.scss":
/*!***********************************************!*\
  !*** ./src/app/self-care/tab3/tab3.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 300px; }\n  .no_record p span {\n      color: #1c1c1c;\n      background-color: #60dc68;\n      padding: 1px 8px;\n      border-radius: 20px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group {\n  color: red; }\n  ion-list ion-item-group ion-item:first-child {\n    --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap;\n    z-index: 9999;\n    position: absolute;\n    width: 100%; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-avatar {\n  width: 70px;\n  height: 70px; }\n  ion-item {\n  --background: #ffffff;\n  --border-width: 0;\n  --border-style: unset;\n  --color: #2c2c2c;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  padding: 10px 5px; }\n  ion-item:not(:last-child) {\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-item ion-label {\n    margin: 0;\n    position: relative; }\n  ion-item ion-label h2 {\n      font-size: 1.05rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: right;\n      line-height: inherit;\n      color: #2c2c2c; }\n  ion-item ion-label h3 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap; }\n  ion-item ion-label h4 {\n      font-size: 1.05rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c; }\n  ion-item ion-label h6 {\n      font-size: 0.9rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      margin-top: 4px; }\n  ion-item ion-label p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-item ion-label .trans_btn {\n      font-size: 0.9rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #483df6;\n      margin: 0;\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      height: auto; }\n  ion-item ion-label .trans_btn svg {\n        margin: 1px 2px 0 0; }\n  ion-item ion-label .trans_btn.copy_btn {\n        position: unset;\n        --padding-end: 2px;\n        --padding-start: 2px;\n        --border-radius: 5px;\n        color: #2c2c2c; }\n  ion-item ion-label .trans_btn.copy_btn svg {\n          margin: 0 0 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvc2VsZi1jYXJlL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRBO0VBeEJJLGlCQTJCc0I7RUExQnRCLGdCQTBCMkI7RUF4QjdCLGlCQXdCZ0M7RUF2QmhDLDBCQXVCNEM7RUF0QjVDLGdCQXNCa0Q7RUFyQmxELG9CQXFCMkQ7RUFwQjNELGNBb0JvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBMUNFLG9CQWdEb0I7RUFoRHBCLGFBZ0RvQjtFQS9DcEIsaUJBK0M0QjtFQTlDNUIseUJBOENvQztVQTlDcEMsbUJBOENvQztFQTdDcEMsdUJBNkMyQztVQTdDM0Msc0JBNkMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTNESSxlQTZFb0I7SUE1RXBCLGdCQTRFeUI7SUExRTNCLGlCQTBFOEI7SUF6RTlCLDBCQXlFMEM7SUF4RTFDLGtCQXdFa0Q7SUF2RWxELG9CQXVFMkQ7SUF0RTNELGNBc0VvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEsZUFBZSxFQUFBO0VBM0J2QjtJQWlDUSxpQkFBaUIs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QUFBO0VDMXNCcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBR2Q7RUFDRSxxQkFBYTtFQUNiLGlCQUFlO0VBQ2YscUJBQWU7RUFDZixnQkFBUTtFQUNSLHNCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsZ0JBQWM7RUFDZCxrQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUFUbkI7SUR1Q0UsdUJDNUIyQjtJRDZCM0IsbUJDN0JrQztJRDhCbEMscUJDOUIyQyxFQUFBO0VBWDdDO0lBZUksU0FBUztJQUNULGtCQUFrQixFQUFBO0VBaEJ0QjtNRDRCSSxrQkNUdUI7TURVdkIsZ0JDVjRCO01EWTlCLGlCQ1ppQztNRGFqQyxxQkNid0M7TURjeEMsaUJDZCtDO01EZS9DLG9CQ2Z3RDtNRGdCeEQsY0FsQ2tCLEVBQUE7RUNEcEI7TUQ0Qkksa0JDTHVCO01ETXZCLGdCQ040QjtNRFE5QixpQkNSaUM7TURTakMsMEJDVDZDO01EVTdDLG1CQ1ZzRDtNRFd0RCxvQkNYK0Q7TURZL0QsY0FsQ2tCO01DdUJkLHFCQUFxQixFQUFBO0VBeEIzQjtNRDRCSSxrQkNBdUI7TURDdkIsZ0JDRDRCO01ERzlCLGlCQ0hpQztNRElqQyxxQkNKd0M7TURLeEMsbUJDTGlEO01ETWpELG9CQ04wRDtNRE8xRCxjQWxDa0IsRUFBQTtFQ0RwQjtNRDRCSSxpQkNJc0I7TURIdEIsZ0JDRzJCO01ERDdCLGlCQ0NnQztNREFoQyxxQkNBdUM7TURDdkMsbUJDRGdEO01ERWhELG9CQ0Z5RDtNREd6RCxjQWxDa0I7TUNnQ2QsZUFBZSxFQUFBO0VBakNyQjtNRDRCSSxpQkNTc0I7TURSdEIsZ0JDUTJCO01ETjdCLGlCQ01nQztNRExoQyxxQkNLdUM7TURKdkMsbUJDSWdEO01ESGhELG9CQ0d5RDtNREZ6RCxjQWpDaUIsRUFBQTtFQ0ZuQjtNRDRCSSxpQkNhc0I7TURadEIsZ0JDWTJCO01EVjdCLGlCQ1VnQztNRFRoQyxxQkNTdUM7TURSdkMsa0JDUStDO01EUC9DLG9CQ093RDtNRE54RCxjQS9CZTtNQ3NDWCxTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWSxFQUFBO0VBOUNsQjtRQWlEUSxtQkFBbUIsRUFBQTtFQWpEM0I7UUFxRFEsZUFBZTtRQUNmLGtCQUFjO1FBQ2Qsb0JBQWdCO1FBQ2hCLG9CQUFnQjtRQUNoQixjQUFjLEVBQUE7RUF6RHRCO1VBNERVLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZi1jYXJlL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IHRvIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFRoZXNlXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzXG4vLyBmaWxlIGNhbiBob2xkIFNhc3MgbWl4aW5zLCBmdW5jdGlvbnMsIGFuZCBwbGFjZWhvbGRlciBjbGFzc2VzIHRvIGJlIGltcG9ydGVkXG4vLyBhbmQgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cblxuJHdoaXRlOiAjZmZmZmZmO1xuJGZvbnRfY29sb3I6ICMyYzJjMmM7XG4kZGFya19ncmV5OiAjOGI5Mzk4O1xuJGJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiRwcmltYXJ5OiAjNDgzZGY2O1xuJGFsZXJ0OiAjMGU5YmZmO1xuJHZpdGFsczogIzYwZGM2ODtcbiRoZWFsdGg6ICNmZjY4YWI7XG4kYXBwb2ludG1lbnQ6ICNjN2EyNTQ7XG4kZG9jX3Zpc2l0OiAjNWVlNGEyO1xuJHByZXNjcmlwdGlvbjogIzk3OGFkMjtcbiRyZXBvcnQ6ICNlYTRlNGU7XG4kZXhwZW5zZTogI2ZmZDMyYztcbiRteS1ncmV5LWJsdWUgOiAjZWE0ZTRlO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodCwgJGxldHRlciwgJHRyYW5zZm9ybSwgJGFsaWduLCAkbGluZV9oZWlnaHQsICRmbl9jb2xvcikge1xuICBmb250OiB7XG4gICAgc2l6ZTogJHNpemU7XG4gICAgd2VpZ2h0OiAkd2VpZ2h0O1xuICB9XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgdGV4dC1hbGlnbjogJGFsaWduO1xuICBsaW5lLWhlaWdodDogJGxpbmVfaGVpZ2h0O1xuICBjb2xvcjogJGZuX2NvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR3aWR0aCwgJHN0eWxlLCAkYnJjb2xvcikge1xuICBib3JkZXItd2lkdGg6ICR3aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3R5bGU7XG4gIGJvcmRlci1jb2xvcjogJGJyY29sb3I7XG59XG5cbkBtaXhpbiBmbGV4KCRmbGV4LCAkd3JhcCwgJGFsaWduLCAkanVzdGlmeSkge1xuICBkaXNwbGF5OiAkZmxleDtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbn1cblxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcblxuICAgICAgJjpub3QoLmlvbi1wYWRkaW5nLXN0YXJ0KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgIH1cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuICAmOm5vdCguc2hhZG93KSB7XG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWFpbi1oZWFkZXIge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBAaW5jbHVkZSBmb250KDExcHgsIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlVwZGF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJOb3RpZnlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRhYi1iYXIge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBmb250KDEwcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZmZmZjtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG4gICYudGFiLXNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ODNkZjY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcbiAgICBzdmcge1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIEBpbmNsdWRlIGJvcmRlcigwcHggMXB4LCBzb2xpZCwgI2UzZTNlZik7XG4gICAgJi50YWItc2VsZWN0ZWQ6bm90KC5wYXRpZW50KSB7XG4gICAgICBzdmcge1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRyYW5zX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0ODNkZjY7XG4gIC0tb3BhY2l0eTogMTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1yaXBwbGUtY29sb3I6ICMxZTFlMWU7XG59XG5cbi5idG4sXG5pb24tYnV0dG9ucyAuYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICMyYzJjMmM7XG4gICAgfVxuICB9XG59XG5cbmlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiYmNmO1xuICBAaW5jbHVkZSBmb250KDJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjNzI3MDhiKTtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCA0NXB4LCBub25lKTtcbiAgICAtLWNvbG9yOiAjODg4ODg4O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzJjMmMyYztcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiAjNjBkYzY4O1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uYWN0aW9uX3Rvb2xzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICB6LWluZGV4OiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAuYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwZGM2ODtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gIH1cblxuICBpb24tY2hpcCB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jbGVhci1idXR0b24tY29sb3I6ICNiYmJiYmI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAtLWljb24tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICNlOWU5ZTkpO1xuXG4gICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDI2cHg7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG4gICAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsIG5vbmUpO1xuICAgIH1cblxuICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmICsgaW9uLWNoaXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAkd2hpdGUpO1xuXG4gICAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmICsgaW9uLWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA6aG9zdCB7XG4vLyAgIGlvbi1jb250ZW50IHtcbi8vICAgICBpb24tc2VhcmNoYmFyIHtcbi8vICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pY29uL3NlYXJjaC5zdmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4uYWxlcmdpZXMge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTc4YWQyO1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1lZGljYXRpb24ge1xuICBpb24tY2hpcCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWVlNGEyO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gIH1cbn1cblxuaW9uLXRvYXN0IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAvLyAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tbWluLWhlaWdodDogMjRweDtcbiAgLS1taW4td2lkdGg6IDkycHg7XG4gIEBpbmNsdWRlIGZvbnQoMTRweCwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbn1cblxuLmZvb3RlcmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmZvb3RlciB7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbiAgaW9uLWJ1dHRvbiwgLmJ0bl9zdWJtaXQge1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgICBpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBmb250KDExcHgsIDYwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICAgICYuc3RhcnQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlJlY29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnBhdXNlIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJQYXVzZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0b3Age1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlN0b3BcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNkN2Q3ZTI7XG4gIC0tY29sb3ItY2hlY2tlZDogIzQ4M2RmNjtcbiAgLS1ib3JkZXItd2lkdGg6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmZvcm0ge1xuICAvLyBpb24taXRlbXtcbiAgLy8gICBpb24tbGFiZWx7XG4gIC8vICAgICAtLWNvbG9yOiAjN2I3YjdiO1xuICAvLyAgIH1cbiAgLy8gfVxuICBpb24tcmFkaW8tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgd3JhcCwgY2VudGVyLCB1bnNldCk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBpb24tcm93e1xuLy8gICBAaW5jbHVkZSBmbGV4KGZsZXgsd3JhcCx1bnNldCx1bnNldCk7XG4vLyB9XG4uZGF0ZV9ncmlkIHtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWFyZ2luOiAtMTZweCAtMTZweCAyMHB4O1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkYztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1kYXRldGltZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMnJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAwIDA7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm5vX3JlY29yZCB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuXG4gIGgzIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gIH1cblxuICBwIHtcbiAgICBAaW5jbHVkZSBmb250KDAuODVyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAjOGI5Mzk4KTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzFjMWMxYztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGRjNjg7XG4gICAgICBwYWRkaW5nOiAxcHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bl9zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuXG4gICYuYnRuX2xvZ2luIHtcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgfVxufVxuLnByZXZpZXdfaW1ne1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuOCkgMTAlLCB0cmFuc3BhcmVudCA5MCUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGlvbi10aXRsZSB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCByaWdodCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5pbWdfZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgwLDAsMCwwLjgpIDkwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoM3tcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdHtcbiAgaW9uLWl0ZW17XG4gICAgJjpsYXN0LWNoaWxke1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBpb24taXRlbS1ncm91cHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuICAgICAgfVxuICAgIH1cbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuc2Nzc1wiO1xuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJvcmRlci1zdHlsZTogdW5zZXQ7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMCAwIDFweCAwLCBzb2xpZCwgI2UzZTNlZik7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBoMiB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMDVyZW0sIDQwMCwgMCwgdW5zZXQsIHJpZ2h0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGluaGVyaXQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMDVyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgICB9XG5cbiAgICBoNiB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xuICAgIH1cblxuICAgIC50cmFuc19idG4ge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgJHByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbjogMXB4IDJweCAwIDA7XG4gICAgICB9XG5cbiAgICAgICYuY29weV9idG57XG4gICAgICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjMmMyYzJjO1xuICAgICAgICBcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/self-care/tab3/tab3.page.ts":
/*!*********************************************!*\
  !*** ./src/app/self-care/tab3/tab3.page.ts ***!
  \*********************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../self-common-service/settings/settings.service */ "./src/app/self-care/self-common-service/settings/settings.service.ts");
/* harmony import */ var _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.page */ "./src/app/self-care/tab3/edit-profile/edit-profile.page.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");





















let Tab3Page = class Tab3Page {
    constructor(toast, toastController, localNotifications, file, FilePath, fileChooser, statusBar, modalController, sanitizer, serv, actionSheetController, router, alertController, clipboard, database, databaseSummary, networkProvider, webview) {
        this.toast = toast;
        this.toastController = toastController;
        this.localNotifications = localNotifications;
        this.file = file;
        this.FilePath = FilePath;
        this.fileChooser = fileChooser;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.serv = serv;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.alertController = alertController;
        this.clipboard = clipboard;
        this.database = database;
        this.databaseSummary = databaseSummary;
        this.networkProvider = networkProvider;
        this.webview = webview;
        this.data1 = "-";
        // playaudio:any;
        // playaudio1:any;
        this.dataArray = [];
        this.medicationDuration = [
            { name: 'unit1', type: 'radio', label: '1 Unit', value: "1 Unit", checked: false },
            { name: 'unit3', type: 'radio', label: '3 Units', value: "3 Units", checked: false },
            { name: 'unit5', type: 'radio', label: '5 Units', value: "5 Units", checked: true },
            { name: 'unit10', type: 'radio', label: '10 Units', value: "10 Units", checked: false },
            { name: 'unit15', type: 'radio', label: '15 Units', value: "15 Units", checked: false }
        ];
        this.autoUpdateTrigger = [
            { name: 'never', type: 'radio', label: 'Never', value: "Never", checked: true },
            { name: 'day1', type: 'radio', label: '1 Day', value: "1 Day", checked: false },
            { name: 'day2', type: 'radio', label: '3 Days', value: "3 Days", checked: false },
            { name: 'day3', type: 'radio', label: '5 Days', value: "5 Days", checked: false },
            { name: 'day4', type: 'radio', label: '10 Days', value: "10 Days", checked: false },
            { name: 'day5', type: 'radio', label: '15 Days', value: "15 Days", checked: false }
        ];
        this.reOrderUnit = "5 Units";
        this.autoUpdateDays = "Never";
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ImageUrl;
    }
    ngOnInit() {
        this.alertFileName = localStorage.getItem("notifyAlertName") || 'Default';
        this.remainderFileName = localStorage.getItem("remainderAlertName") || 'Default';
    }
    ionViewWillEnter() {
        // this.serv.setting().subscribe(res => {
        //   this.pic = res;
        //   console.log(this.pic)   
        //   this.initialLogo=this.pic.user_info.name.charAt(0);
        //   this.caregiver = this.pic.caregiver;
        //   this.caregive_option=this.pic['caregiver'].map(data=>({
        //       name: 'radio1',
        //       type: 'radio',
        //       label: data.name,
        //       value: data.name,
        //   }));
        //   if(this.pic.profile_pic != null){
        //     let source=this.pic['profile_pic'];
        //     this.img= this.sanitizer.bypassSecurityTrustResourceUrl(source);
        //   }  
        // })
        this.databaseSummary.getPicture_Show().then(res => {
            this.pic = res;
            console.log(this.pic);
            this.initialLogo = this.pic.user_info.name.charAt(0);
            this.caregiver = this.pic.caregiver;
            this.caregive_option = this.pic['caregiver'].map(data => ({
                name: 'radio1',
                type: 'radio',
                label: data.name,
                value: data.name,
            }));
            // if(this.pic.profile_pic != null){
            //   let source=this.pic['profile_pic'];
            //   this.img= this.sanitizer.bypassSecurityTrustResourceUrl(source);
            // }
            let globalURL = null;
            let localURL = null;
            if (this.pic['user_info']['user_picture']['url'] != null) {
                let source = this.pic['user_info']['user_picture']['url'];
                let gurl = source.includes("file:///");
                if (gurl == true) {
                    globalURL = this.webview.convertFileSrc(source);
                }
                else {
                    let byPassURL = this.environment + source;
                    globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(byPassURL);
                }
            }
            // else if(this.pic['user_info']['user_option']!=null){
            //   let source = this.webview.convertFileSrc(this.pic['user_info']['user_option']['localURL']); 
            //   localURL = source;
            // }
            else {
                let source = this.webview.convertFileSrc(this.pic['user_info']['user_picture']['localURL']);
                localURL = source;
            }
            if (this.networkProvider.isNetworkOnline) {
                this.isNetwork = true;
                this.img = globalURL != null ? globalURL : localURL;
            }
            else {
                this.isNetwork = false;
                this.img = localURL || null;
            }
            console.log(this.img);
        });
        this.statusBar.backgroundColorByHexString('#483df6');
        this.reOrderUnit = localStorage.getItem("reOrderQuantity") || "5 Units";
        this.autoUpdateDays = localStorage.getItem("autoUpdateDays") || "Never";
        this.updateReOrderTriggers();
        this.updateAutoTriggers();
    }
    edit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = {
                pics: this.pic
            };
            const modal = yield this.modalController.create({
                component: _edit_profile_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"],
                componentProps: data
            });
            modal.onDidDismiss()
                .then((data) => {
                //const user = data['data']; // Here's your selected user!
                this.ionViewWillEnter();
            });
            return yield modal.present();
            // let navigationExtras: NavigationExtras = {
            //   queryParams: {
            //     special: JSON.stringify(this.pic)
            //   }
            // };
            //this.navCtrl.navigateForward(['/editprofile']);
            //this.router.navigate(['/editprofile',{item:this.pic}])
            // this.router.navigate(['self-care-tabs/tabs/tab3/edit-profile'], navigationExtras)
            //this.navCtrl.navigate(['/self-care-tabs/tabs/tab3/editprofile']);
        });
    }
    careGiverName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.caregive_option);
            const alert = yield this.alertController.create({
                header: 'CareGiver',
                backdropDismiss: false,
                inputs: this.caregive_option,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (res) => {
                            console.log(res);
                            this.data1 = res;
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    reorderDuration() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert1 = yield this.alertController.create({
                header: 'Choose Reorder Days',
                backdropDismiss: false,
                inputs: this.medicationDuration,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (res) => {
                            this.reOrderUnit = res;
                            localStorage.setItem("reOrderQuantity", this.reOrderUnit);
                            this.updateReOrderTriggers();
                            console.log(res);
                        }
                    }
                ]
            });
            yield alert1.present();
        });
    }
    autoUpdateDuration() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert2 = yield this.alertController.create({
                header: 'Choose Auto Update Days',
                backdropDismiss: false,
                inputs: this.autoUpdateTrigger,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (res) => {
                            this.autoUpdateDays = res;
                            localStorage.setItem("autoUpdateDays", this.autoUpdateDays);
                            this.updateAutoTriggers();
                            console.log(res);
                        }
                    }
                ]
            });
            yield alert2.present();
        });
    }
    updateReOrderTriggers() {
        for (var i = 0; i < this.medicationDuration.length; i++) {
            if (this.reOrderUnit != this.medicationDuration[i].value) {
                this.medicationDuration[i].checked = false;
            }
            else {
                this.medicationDuration[i].checked = true;
            }
        }
    }
    updateAutoTriggers() {
        for (var i = 0; i < this.autoUpdateTrigger.length; i++) {
            if (this.autoUpdateDays != this.autoUpdateTrigger[i].value) {
                this.autoUpdateTrigger[i].checked = false;
            }
            else {
                this.autoUpdateTrigger[i].checked = true;
            }
        }
    }
    goToterms() {
        this.router.navigate(['/terms_conditions']);
    }
    goToAbout() {
        this.router.navigate(['/about']);
    }
    // logout(){
    //   localStorage.clear();
    //   this.router.navigate(['/login'])
    // }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'BC4',
                message: 'Are you sure want to logout?',
                mode: 'md',
                buttons: [
                    {
                        text: 'Logout',
                        handler: () => {
                            localStorage.clear();
                            this.database.deleteDataFromTable().then((res) => {
                                console.log(res);
                                this.router.navigate(['/login']);
                            })
                                .catch(error => console.log(error));
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
    copyText(CopyText) {
        console.log(CopyText);
        this.clipboard.copy(CopyText);
        this.presentToast('UID Copied to Clipboard');
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.show(message, '2000', 'bottom').subscribe(toast => {
                console.log(toast);
            });
        });
    }
    alertToneSetting() {
        this.fileChooser.open({ "mime": "audio/*" }).then((url) => {
            //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
            //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
            this.FilePath.resolveNativePath(url).then((result) => {
                this.alertToneNativepath = result;
                localStorage.setItem("alertSong", this.alertToneNativepath);
                this.file.resolveLocalFilesystemUrl(result).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    this.alertFileName = fileMeta.name;
                    localStorage.setItem("notifyAlertName", this.alertFileName);
                });
                this.localNotifications.getAll().then((res) => {
                    console.log(res);
                    this.dataArray = res;
                    let songArray = [];
                    for (var i in this.dataArray) {
                        console.log(i);
                        console.log(this.dataArray);
                        //songArray.push({id:this.dataArray[i].id})
                        this.localNotifications.update({ id: this.dataArray[i].id, title: this.dataArray[i].title, sound: this.alertToneNativepath });
                    }
                });
            });
        });
    }
    remainderToneSetting() {
        this.fileChooser.open({ "mime": "audio/*" }).then((url) => {
            //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
            //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
            this.FilePath.resolveNativePath(url).then((result) => {
                this.remainderToneNativepath = result;
                localStorage.setItem("remainderSong", this.remainderToneNativepath);
                this.file.resolveLocalFilesystemUrl(result).then((fileEntry) => {
                    return new Promise((resolve, reject) => {
                        fileEntry.file(meta => resolve(meta), error => reject(error));
                    });
                }).then((fileMeta) => {
                    this.remainderFileName = fileMeta.name;
                    localStorage.setItem("remainderAlertName", this.remainderFileName);
                });
                // this.localNotifications.getAll().then((res: ILocalNotification[]) => {
                //   console.log(res);  
                //   this.dataArray=res; 
                //   let songArray:ILocalNotification[]=[]
                //   for(var i in  this.dataArray) {
                //     console.log(i)
                //     console.log(this.dataArray)
                //     //songArray.push({id:this.dataArray[i].id})
                //     this.localNotifications.update(
                //       {id:this.dataArray[i].id,title:this.dataArray[i].title,sound:this.remainderToneNativepath});
                //   }   
                // })
            });
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__["Toast"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["settingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"] },
    { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__["DatabaseProvider"] },
    { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__["DataBaseSummaryProvider"] },
    { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_18__["NetworkService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/self-care/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/self-care/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_15__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _self_common_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["settingsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_16__["DatabaseProvider"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_17__["DataBaseSummaryProvider"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_18__["NetworkService"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map