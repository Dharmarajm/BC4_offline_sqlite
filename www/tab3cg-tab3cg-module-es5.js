(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3cg-tab3cg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title class=\"ion-padding-start\">Edit Profile</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n\t<ion-avatar>\n\t\t<span *ngIf=\"cdvFilePath1 == null\"> {{ initialLogo | uppercase }}</span>\n\t\t<span *ngIf=\"cdvFilePath1 != null\"><img [src]=\"cdvFilePath1\"></span>\n\t</ion-avatar>\n\t<ion-button class=\"trans_btn\" (click)=\"openImagePicker()\">\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.568\" height=\"10.2\" viewBox=\"0 0 12.568 10.2\"> <g id=\"photo-camera_1_\" data-name=\"photo-camera (1)\" transform=\"translate(0 -46.15)\"> <g id=\"Group_517\" data-name=\"Group 517\" transform=\"translate(0 46.15)\"> <path id=\"Path_1268\" data-name=\"Path 1268\" d=\"M0,49.271v5.545A1.535,1.535,0,0,0,1.534,56.35h9.5a1.535,1.535,0,0,0,1.534-1.534V49.271a1.46,1.46,0,0,0-1.459-1.459H9.067L9.018,47.6A1.864,1.864,0,0,0,7.192,46.15H5.373A1.869,1.869,0,0,0,3.547,47.6l-.049.213H1.459A1.462,1.462,0,0,0,0,49.271Zm3.75-.831a.313.313,0,0,0,.305-.244l.105-.457a1.241,1.241,0,0,1,1.213-.962H7.192A1.241,1.241,0,0,1,8.4,47.74l.105.457a.315.315,0,0,0,.305.244h2.29a.831.831,0,0,1,.831.831v5.545a.905.905,0,0,1-.905.905h-9.5a.905.905,0,0,1-.905-.905V49.271a.831.831,0,0,1,.831-.831Z\" transform=\"translate(0 -46.15)\" fill=\"#483df6\"/> <circle id=\"Ellipse_397\" data-name=\"Ellipse 397\" cx=\"0.421\" cy=\"0.421\" r=\"0.421\" transform=\"translate(1.706 3.211)\" fill=\"#483df6\"/> <path id=\"Path_1269\" data-name=\"Path 1269\" d=\"M144.739,180.428a2.639,2.639,0,1,0-2.639-2.639A2.643,2.643,0,0,0,144.739,180.428Zm0-4.65a2.011,2.011,0,1,1-2.011,2.011A2.014,2.014,0,0,1,144.739,175.778Z\" transform=\"translate(-138.455 -171.841)\" fill=\"#483df6\"/> </g> </g> </svg>\n\t\tChoose\n\t</ion-button>\n\t<!-- <h5>Email ID: {{editprofile.user_info.email}}</h5> -->\n\t<!-- <ion-button (click)=\"takePicture()\"> camera</ion-button>\n\t<ion-button (click)=\"openImagePicker()\">Choose Image</ion-button> -->\n\t<!-- <ion-input   [(ngModel)]=\"usernameupdate\"></ion-input>\n\t<ion-input [(ngModel)]=\"useremailupdate\"></ion-input>\n\t<ion-input [(ngModel)]=\"userphoneupdate\"></ion-input> -->\n\t<!-- <ion-button (click)=\"sendEditProfile()\">Submit</ion-button> -->\n\n\t<form class=\"footerform\" [formGroup]=\"cgeditProfileForm\" (ngSubmit)=\"sendEditProfile(cgeditProfileForm.value)\">\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Name</ion-label> \n\t\t\t<!-- {{'name' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"name\" #name></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Email ID</ion-label>\n\t\t\t<!-- {{'email_id' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"email\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Mobile#</ion-label>\n\t\t\t<!-- {{'mob' | translate}} -->\n\t\t\t<ion-input type=\"text\" formControlName=\"mobile_no\" (keypress)=\"_keyPress($event)\"></ion-input>\n\t\t</ion-item>\n\t\t<!-- <ion-item class=\"ion-float-right\">\n\t\t\t<ion-button type=\"submit\" [disabled]=\"editProfileForm.invalid\">{{'save' | translate}}</ion-button>\n\t\t</ion-item> -->\n\t\t<div class=\"footer\">\n\t\t\t<ion-button (click)=\"close()\" expand=\"block\">\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t\t<button class=\"btn_submit\" type=\"submit\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/care-giver/tab3cg/tab3cg.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/care-giver/tab3cg/tab3cg.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"main-header shadow\">\r\n   <ion-toolbar color=\"primary\">\r\n      <ion-title class=\"ion-padding-start\">Settings</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n         <ion-button>\r\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22.888\" height=\"22.888\" viewBox=\"0 0 22.888 22.888\"><g transform=\"translate(0.25 0.25)\"><path d=\"M11.194,0A11.194,11.194,0,1,0,22.388,11.194,11.206,11.206,0,0,0,11.194,0Zm0,21.527A10.333,10.333,0,1,1,21.527,11.194,10.345,10.345,0,0,1,11.194,21.527Z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M25.431,37a.43.43,0,0,0-.431.431v.861a.431.431,0,1,0,.861,0v-.861A.43.43,0,0,0,25.431,37Z\" transform=\"translate(-14.236 -21.07)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M21.493,9h-.05A3.445,3.445,0,0,0,18,12.444a.431.431,0,1,0,.861,0,2.583,2.583,0,0,1,2.62-2.583,2.632,2.632,0,0,1,2.546,2.546,2.571,2.571,0,0,1-1.184,2.21,4.107,4.107,0,0,0-1.829,3.493v1.224a.431.431,0,1,0,.861,0V18.109a3.293,3.293,0,0,1,1.435-2.769A3.427,3.427,0,0,0,24.888,12.4,3.468,3.468,0,0,0,21.493,9Z\" transform=\"translate(-10.25 -5.125)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\r\n         </ion-button>\r\n         <ion-button>\r\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26.711\" height=\"22.342\" viewBox=\"0 0 26.711 22.342\"><g transform=\"translate(0.25 0.25)\"><path d=\"M22.268,12.074A7.48,7.48,0,0,0,14.889,5,7.7,7.7,0,0,0,8.8,8.061c-.033-.017-.068-.029-.1-.045-.086-.042-.172-.081-.261-.116-.052-.021-.1-.039-.156-.057-.086-.03-.173-.057-.262-.081-.052-.014-.1-.028-.157-.041-.1-.022-.194-.038-.293-.053-.046-.007-.091-.016-.138-.021a3.849,3.849,0,0,0-.44-.027,3.936,3.936,0,0,0-3.932,3.932c0,.056,0,.111.007.166A6.04,6.04,0,0,0,0,16.862a5.618,5.618,0,0,0,5.611,5.612H7.863a.437.437,0,1,0,0-.874H5.611A4.743,4.743,0,0,1,.874,16.862a5.193,5.193,0,0,1,2.81-4.479l.248-.118v-.275c0-.054,0-.109.007-.164l0-.076-.005-.088c0-.036-.005-.073-.005-.109A3.037,3.037,0,0,1,7.39,8.524l.1.016a3.07,3.07,0,0,1,.345.077l.046.012a3.048,3.048,0,0,1,.365.14l.091.044a3.019,3.019,0,0,1,.308.174,3.057,3.057,0,0,1,1.4,2.566.437.437,0,0,0,.874,0,3.923,3.923,0,0,0-1.4-3,6.919,6.919,0,0,1,5.366-2.677,6.6,6.6,0,0,1,6.486,6.066,8.343,8.343,0,0,0-1.784.054.437.437,0,0,0,.065.869.429.429,0,0,0,.066-.005,8.054,8.054,0,0,1,2.046,0,4.478,4.478,0,0,1,3.567,4.362A4.386,4.386,0,0,1,20.956,21.6H19.221a.437.437,0,0,0,0,.874h1.735a5.26,5.26,0,0,0,5.254-5.254A5.376,5.376,0,0,0,22.268,12.074Z\" transform=\"translate(0 -5)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/><path d=\"M29.174,36.242a.437.437,0,0,0-.437.437,3.932,3.932,0,1,1-3.932-3.932A3.789,3.789,0,0,1,28,34.495H25.242a.437.437,0,1,0,0,.874h3.5a.455.455,0,0,0,.092-.018.471.471,0,0,0,.079-.017h0a.393.393,0,0,0,.038-.027.276.276,0,0,0,.145-.137.432.432,0,0,0,.046-.073.451.451,0,0,0,.024-.116.476.476,0,0,0,.01-.048v0h0V31.437a.437.437,0,0,0-.874,0v2.009a4.633,4.633,0,0,0-3.495-1.573,4.805,4.805,0,1,0,4.805,4.805A.437.437,0,0,0,29.174,36.242Z\" transform=\"translate(-11.263 -19.642)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\r\n         </ion-button>\r\n         <ion-button>\r\n         <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.708\" height=\"22.342\" viewBox=\"0 0 19.708 22.342\"><g transform=\"translate(0.255 0.25)\"><path d=\"M22.41,17.986a8.877,8.877,0,0,1-2.789-6.47V7.945A5.779,5.779,0,0,0,16.234,2.7a7.984,7.984,0,0,0-1.388-.483V1.986a1.986,1.986,0,0,0-3.971,0v.263A7.863,7.863,0,0,0,9.625,2.7,6.008,6.008,0,0,0,6.109,7.943v3.574a8.811,8.811,0,0,1-2.663,6.47.4.4,0,0,0,.212.673l3.769.651c.7.121,1.349.22,1.964.3a3.926,3.926,0,0,0,7.082,0c.613-.081,1.256-.18,1.954-.3l3.769-.651a.4.4,0,0,0,.213-.673Zm-10.741-16a1.191,1.191,0,1,1,2.383,0v.072a7.9,7.9,0,0,0-2.383.019Zm1.264,19.062a3.183,3.183,0,0,1-2.548-1.316,24.6,24.6,0,0,0,2.544.137,24.462,24.462,0,0,0,2.554-.139A3.184,3.184,0,0,1,12.933,21.048Zm5.36-2.521c-.762.131-1.461.238-2.121.322h0c-.291.037-.573.069-.85.1h-.009c-.253.025-.5.046-.745.064l-.139.01c-.212.014-.422.025-.63.033l-.129.005c-.494.017-.981.017-1.475,0l-.132-.006q-.309-.012-.622-.033l-.148-.01c-.238-.017-.479-.037-.726-.062l-.025,0c-.275-.027-.556-.06-.844-.1h0c-.662-.084-1.363-.191-2.129-.323L4.52,18A9.558,9.558,0,0,0,6.9,11.517V7.945A5.2,5.2,0,0,1,9.957,3.421a7.1,7.1,0,0,1,1.389-.47h.012a7.22,7.22,0,0,1,3.01-.027c.005,0,.01,0,.015,0a7.182,7.182,0,0,1,1.519.5,5.041,5.041,0,0,1,2.923,4.524v3.574A9.663,9.663,0,0,0,21.334,18Z\" transform=\"translate(-3.329)\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.5\"/></g></svg>\r\n         </ion-button>\r\n      </ion-buttons>\r\n   </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n   <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n         <span *ngIf=\"img == null\">{{initialLogo}}</span>\r\n         <img *ngIf=\"img != null\" [src]=\"img\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n         <h3>{{pic?.user_info.name}}</h3>\r\n         <h6>&nbsp;</h6>\r\n         <!-- <h6>ID : {{pic?.user_info.user_uid}}</h6> -->\r\n         <!-- <h6>{{pic?.user_info.email}}</!-->\r\n         <!-- <h6  (click)=\"copyText(pic.user_info.user_uid)\">Email ID: {{pic?.user_info.email}}</h6> -->\r\n         <ion-button class=\"trans_btn\" (click)=\"edit()\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><g transform=\"translate(-5.6 -6.9)\"><g transform=\"translate(5.6 6.9)\"><path d=\"M16.3,114.3H6.083a.385.385,0,0,0-.383.383.391.391,0,0,0,.383.383H16.308a.385.385,0,0,0,.383-.383A.393.393,0,0,0,16.3,114.3Z\" transform=\"translate(-5.691 -104.271)\" fill=\"#483df6\"/><path d=\"M5.609,13.539,5.6,15.36a.4.4,0,0,0,.112.28.374.374,0,0,0,.271.112l1.812-.009a.374.374,0,0,0,.271-.112l6.256-6.256a.4.4,0,0,0,0-.551L12.529,7.012a.4.4,0,0,0-.551,0L10.726,8.273l-5.005,5A.416.416,0,0,0,5.609,13.539Zm6.649-5.705,1.261,1.261-.71.71L11.548,8.543l.71-.71ZM6.384,13.707,11,9.094l1.261,1.261-4.613,4.6-1.27.009Z\" transform=\"translate(-5.6 -6.9)\" fill=\"#483df6\"/></g></g></svg>\r\n            edit\r\n         </ion-button>\r\n      </ion-label>\r\n   </ion-item>\r\n   <!-- <ion-row class=\"ion-padding\">\r\n      <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n         <ion-avatar>\r\n            <img [src]=\"img\">\r\n         </ion-avatar>\r\n      </ion-col>\r\n      <ion-col>\r\n         <ion-text color=\"dark\">\r\n            <h1>{{pic?.user_info.name}}</h1>\r\n            <h6>{{pic?.user_info.email}}</h6>\r\n            <h6>ID : {{pic?.user_info.user_uid}}</h6>\r\n         </ion-text>\r\n         <ion-icon name=\"create\" size=\"large\" (click)=\"edit()\" class=\"ion-float-right\"></ion-icon>\r\n      </ion-col>\r\n\r\n   </ion-row> -->\r\n   <ion-list>\r\n      <ion-item button>\r\n         <ion-label>\r\n           <h4>Alert</h4>\r\n           <p>You can able to ON or OFF the alerts</p>\r\n         </ion-label>\r\n         <ion-toggle color=\"primary\" slot=\"end\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item button>\r\n         <ion-label>\r\n           <h4>Reminder</h4>\r\n           <p>You can able to ON or OFF the reminder</p>\r\n         </ion-label>\r\n         <ion-toggle color=\"primary\" slot=\"end\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item button (click)=\"alertToneSetting()\">\r\n         <ion-label>\r\n           <h4>Alert Tone</h4>\r\n           <p>Set your alert tone</p>\r\n           <h2>{{this.alertFileName}}</h2>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item button (click)=\"remainderToneSetting()\">\r\n         <ion-label>\r\n            <h4>Reminder Tone</h4>\r\n            <p>Set your reminder tone</p>\r\n            <h2>{{this.remainderFileName}}</h2>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item button (click)=\"autoUpdateDuration()\">\r\n         <ion-label>\r\n            <h4>Auto Update</h4>\r\n            <p>which sync your app data to the cloud storage</p>\r\n            <h2>{{autoUpdateDays}}</h2>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item button (click)=\"goToAbout()\">\r\n         <ion-label>\r\n            <h4>About</h4>\r\n            <p>Know about us</p>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item button (click)=\"goToterms()\">\r\n         <ion-label>\r\n            <h4>Terms & Conditions</h4>\r\n            <p>Read to know the terms & conditions of us</p>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item button (click)=\"logout()\">\r\n         <ion-label>\r\n            <h4>Logout</h4>\r\n            <p>You will be logout from the application</p>\r\n         </ion-label>\r\n      </ion-item>\r\n\r\n   </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  form ion-item {\n  --background: transparent;\n  --border-color: #bcbbcf;\n  --highlight-color-focused: #483df6;\n  --highlight-color-valid: #483df6;\n  --highlight-color-invalid: #ea4e4e;\n  --padding-start: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: left;\n  line-height: inherit;\n  color: #2c2c2c;\n  margin-bottom: 10px; }\n  form ion-item ion-label {\n    --color: #bcbbcf; }\n  ion-avatar {\n  width: 130px;\n  height: 130px;\n  margin: 0 auto;\n  overflow: hidden; }\n  ion-avatar span {\n    font-size: 5rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #72708b; }\n  .trans_btn {\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --border-color: #ddd;\n  --border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: none;\n  margin: 0;\n  position: relative;\n  top: -15px;\n  height: auto; }\n  .trans_btn svg {\n    margin-right: 2px; }\n  h5 {\n  font-size: 1.15rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: none;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  margin: 5px 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci90YWIzY2cvY2ctZWRpdC1wcm9maWxlL2NnLWVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RBO0VBdkJJLGlCQTBCc0I7RUF6QnRCLGdCQXlCMkI7RUF2QjdCLGlCQXVCZ0M7RUF0QmhDLDBCQXNCNEM7RUFyQjVDLGdCQXFCa0Q7RUFwQmxELG9CQW9CMkQ7RUFuQjNELGNBbUJvRSxFQUFBO0VBSHRFO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7RUFVTSxpQkFBaUIsRUFBQTtFQVZ2QjtFQWFNLG9CQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQW5CeEI7RUF3Qk0sYUFBYSxFQUFBO0VBS25CO0VBRUkscUJBQWEsRUFBQTtFQUlqQjtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0VBekNFLG9CQStDb0I7RUEvQ3BCLGFBK0NvQjtFQTlDcEIsaUJBOEM0QjtFQTdDNUIseUJBNkNvQztVQTdDcEMsbUJBNkNvQztFQTVDcEMsdUJBNEMyQztVQTVDM0Msc0JBNEMyQztFQUN6QyxvQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7RUFYdEI7SUFjTSxtQkFBbUIsRUFBQTtFQWR6QjtJQTFESSxlQTRFb0I7SUEzRXBCLGdCQTJFeUI7SUF6RTNCLGlCQXlFOEI7SUF4RTlCLDBCQXdFMEM7SUF2RTFDLGtCQXVFa0Q7SUF0RWxELG9CQXNFMkQ7SUFyRTNELGNBcUVvRTtJQUNoRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQXRCeEI7SUEyQlEs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O0VEd0JoQixlQ3ZCa0I7RUR3QmxCLGdCQ3hCdUI7RUQwQnpCLGlCQzFCNEI7RUQyQjVCLG9CQzNCa0M7RUQ0QmxDLGdCQzVCd0M7RUQ2QnhDLG9CQzdCaUQ7RUQ4QmpELGNBaENrQjtFQ0doQixtQkFBbUIsRUFBQTtFQVR2QjtJQVlNLGdCQUFRLEVBQUE7RUFLZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBSmxCO0lEY0ksZUNSa0I7SURTbEIsZ0JDVHVCO0lEV3pCLGlCQ1g0QjtJRFk1QixvQkNaa0M7SURhbEMsZ0JDYndDO0lEY3hDLG9CQ2RpRDtJRGVqRCxjQ2YwRCxFQUFBO0VBSTVEO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsNkJBQXFCO0VBQ3JCLDJDQUFhO0VBQ2Isb0JBQWU7RUFDZixxQkFBZ0I7RURGZCxpQkNHa0I7RURGbEIsZ0JDRXVCO0VEQXpCLGlCQ0E0QjtFREM1QiwwQkNEd0M7RURFeEMsZ0JDRjhDO0VERzlDLG9CQ0h1RDtFREl2RCxXQ0o2RDtFQUM3RCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFYZDtJQWNJLGlCQUFpQixFQUFBO0VBSXJCO0VEZEksa0JDZW1CO0VEZG5CLGdCQ2N3QjtFRFoxQixpQkNZNkI7RURYN0Isb0JDV21DO0VEVm5DLGtCQ1UyQztFRFQzQyxvQkNTb0Q7RURScEQsV0NRMEQ7RUFDMUQsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJlLWdpdmVyL3RhYjNjZy9jZy1lZGl0LXByb2ZpbGUvY2ctZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG4kd2hpdGU6ICNmZmZmZmY7XG4kZm9udF9jb2xvcjogIzJjMmMyYztcbiRkYXJrX2dyZXk6ICM4YjkzOTg7XG4kYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xuJHByaW1hcnk6ICM0ODNkZjY7XG4kYWxlcnQ6ICMwZTliZmY7XG4kdml0YWxzOiAjNjBkYzY4O1xuJGhlYWx0aDogI2ZmNjhhYjtcbiRhcHBvaW50bWVudDogI2M3YTI1NDtcbiRkb2NfdmlzaXQ6ICM1ZWU0YTI7XG4kcHJlc2NyaXB0aW9uOiAjOTc4YWQyO1xuJHJlcG9ydDogI2VhNGU0ZTtcbiRleHBlbnNlOiAjZmZkMzJjO1xuXG4lZm9udC1jb2xvciB7XG4gIC0tY29sb3I6ICMyYzJjMmM7XG59XG4lZGFyay1ncmF5IHtcbiAgLS1jb2xvcjogIzhiOTM5ODtcbn1cbiVwcmltYXJ5LWNvbG9yIHtcbiAgLS1jb2xvcjogIzQ4M2RmNjtcbn1cblxuQG1peGluIGZvbnQoJHNpemUsICR3ZWlnaHQsICRsZXR0ZXIsICR0cmFuc2Zvcm0sICRhbGlnbiwgJGxpbmVfaGVpZ2h0LCAkZm5fY29sb3IpIHtcbiAgZm9udDoge1xuICAgIHNpemU6ICRzaXplO1xuICAgIHdlaWdodDogJHdlaWdodDtcbiAgfVxuICBsZXR0ZXItc3BhY2luZzogJGxldHRlcjtcbiAgdGV4dC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gIHRleHQtYWxpZ246ICRhbGlnbjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lX2hlaWdodDtcbiAgY29sb3I6ICRmbl9jb2xvcjtcbn1cblxuQG1peGluIGJvcmRlcigkd2lkdGgsICRzdHlsZSwgJGJyY29sb3IpIHtcbiAgYm9yZGVyLXdpZHRoOiAkd2lkdGg7XG4gIGJvcmRlci1zdHlsZTogJHN0eWxlO1xuICBib3JkZXItY29sb3I6ICRicmNvbG9yO1xufVxuXG5AbWl4aW4gZmxleCgkZmxleCwgJHdyYXAsICRhbGlnbiwgJGp1c3RpZnkpIHtcbiAgZGlzcGxheTogJGZsZXg7XG4gIGZsZXgtd3JhcDogJHdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuXG4gICAgICAmOm5vdCguaW9uLXBhZGRpbmctc3RhcnQpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pbWcge1xuICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgfVxuICB9XG4gICY6bm90KC5zaGFkb3cpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJIZWxwXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVXBkYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIk5vdGlmeVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tdGFiLWJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAtM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGZvbnQoMTBweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmZmZmO1xuICBzdmcge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gIH1cbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzQ4M2RmNjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgbGluZWFyO1xuICAgIHN2ZyB7XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyKDBweCAxcHgsIHNvbGlkLCAjZTNlM2VmKTtcbiAgICAmLnRhYi1zZWxlY3RlZDpub3QoLnBhdGllbnQpIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udHJhbnNfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWNvbG9yOiAjNDgzZGY2O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzQ4M2RmNjtcbiAgLS1vcGFjaXR5OiAxO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAtLXJpcHBsZS1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmJ0bixcbmlvbi1idXR0b25zIC5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIC0tYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhdGgge1xuICAgICAgZmlsbDogIzJjMmMyYztcbiAgICB9XG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JiY2Y7XG4gIEBpbmNsdWRlIGZvbnQoMnJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM3MjcwOGIpO1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIDQ1cHgsIG5vbmUpO1xuICAgIC0tY29sb3I6ICM4ODg4ODg7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMmMyYzJjO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6ICM2MGRjNjg7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG59XG5cbi5hY3Rpb25fdG9vbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gIHotaW5kZXg6IDA7XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgIC5idG4ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwZGM2ODtcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjBkYzY4O1xuICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNDAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2JiYmJiYjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0taWNvbi1jb2xvcjogIzJjMmMyYztcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgI2U5ZTllOSk7XG5cbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTZweDtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCB1bnNldCwgaW5oZXJpdCwgaW5oZXJpdCwgbm9uZSk7XG4gICAgfVxuXG4gICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYgKyBpb24tY2hpcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICYuc2VhcmNoYmFyLWhhcy1mb2N1cyxcbiAgICAmLnNlYXJjaGJhci1oYXMtdmFsdWUge1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgQGluY2x1ZGUgYm9yZGVyKDFweCwgc29saWQsICR3aGl0ZSk7XG5cbiAgICAgICYgKyBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIDpob3N0IHtcbi8vICAgaW9uLWNvbnRlbnQge1xuLy8gICAgIGlvbi1zZWFyY2hiYXIge1xuLy8gICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vc2VhcmNoLnN2ZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5hbGVyZ2llcyB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NzhhZDI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbiB7XG4gIGlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1ZWU0YTI7XG4gICAgLS1jb2xvcjogIzJjMmMyYztcbiAgfVxufVxuXG5pb24tdG9hc3Qge1xuICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAtLW1pbi13aWR0aDogOTJweDtcbiAgQGluY2x1ZGUgZm9udCgxNHB4LCA0MDAsIDAsIHVuc2V0LCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xufVxuXG4uZm9vdGVyZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcblxuICBpb24tYnV0dG9uLCAuYnRuX3N1Ym1pdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICAgIGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGZvbnQoMTFweCwgNjAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgICAgJi5zdGFydCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb3JkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYucGF1c2Uge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlBhdXNlXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RvcCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU3RvcFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvcjogI2Q3ZDdlMjtcbiAgLS1jb2xvci1jaGVja2VkOiAjNDgzZGY2O1xuICAtLWJvcmRlci13aWR0aDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuZm9ybSB7XG4gIGlvbi1yYWRpby1ncm91cCB7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCB3cmFwLCBjZW50ZXIsIHVuc2V0KTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGlvbi1yb3d7XG4vLyAgIEBpbmNsdWRlIGZsZXgoZmxleCx3cmFwLHVuc2V0LHVuc2V0KTtcbi8vIH1cbi5kYXRlX2dyaWQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDIwcHg7XG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RjO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMS4ycmVtLCA0MDAsIDAsIG5vbmUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgdW5zZXQpO1xuICAgICAgcGFkZGluZzogMCA0MHB4IDAgMDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubm9fcmVjb3JkIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG5cbiAgaDMge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4yNXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICRmb250X2NvbG9yKTtcbiAgfVxuXG4gIHAge1xuICAgIEBpbmNsdWRlIGZvbnQoMC44NXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICM4YjkzOTgpO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuXG4uYnRuX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdml0YWxzO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG5cbiAgJi5idG5fbG9naW4ge1xuICAgIEBpbmNsdWRlIGZvbnQoMS4xcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICY6YWN0aXZlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICB9XG59XG4ucHJldmlld19pbWd7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC44KSAxMCUsIHRyYW5zcGFyZW50IDkwJSk7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIHJpZ2h0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmltZ19kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMTAlLCByZ2JhKDAsMCwwLDAuOCkgOTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGgze1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgbm9uZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICBAaW5jbHVkZSBmb250KDAuOHJlbSwgNDAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0e1xuICBpb24taXRlbXtcbiAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtLWdyb3Vwe1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mb3Jte1xuICBpb24tbGlzdHtcbiAgICBpb24taXRlbXtcbiAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyAucG9pbnRlcl9ub25le1xuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcbi8vIH1cbi5ib3R0b21fYWN0aW9ue1xuICAvLyBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAuYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjMmMyYzJjO1xuICB9XG59XG5cbi5wbGF5X2hlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5wbGF5X21vZGFse1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDN7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBwe1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5pbWdfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcbiAgICBpbWd7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cbiAgfVxuICAucGxheV9hY3Rpb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDU2cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBpb24tcmFuZ2Uge1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYm9yZGVyLXJhZGl1czogIzM4ODBmZjtcbiAgICAgIC8vIC0tYmFyLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1oZWlnaHQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1iYWNrZ3JvdW5kOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJveC1zaGFkb3c6IDJweDtcbiAgICAgIC8vIC0ta25vYi1zaXplOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuc2Nzc1wiO1xyXG5cclxuZm9ybSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYmNiYmNmO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogIzQ4M2RmNjtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDgzZGY2O1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogI2VhNGU0ZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6ICNiY2JiY2Y7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHNwYW4ge1xyXG4gICAgQGluY2x1ZGUgZm9udCg1cmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICM3MjcwOGIpO1xyXG4gIH1cclxufVxyXG5cclxuLnRyYW5zX2J0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAtLWJvcmRlci1jb2xvcjogI2RkZDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgQGluY2x1ZGUgZm9udCgwLjlyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgbm9uZSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaDUge1xyXG4gIEBpbmNsdWRlIGZvbnQoMS4xNXJlbSwgNDAwLCAwLCBub25lLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xyXG4gIG1hcmdpbjogNXB4IDAgMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.ts ***!
  \***************************************************************************/
/*! exports provided: EditCGProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCGProfilePage", function() { return EditCGProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../sqlite-database/database */ "./src/app/sqlite-database/database.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");












//import { Base64 } from '@ionic-native/base64/ngx';


// import { Clipboard } from '@ionic-native/clipboard/ngx';



var EditCGProfilePage = /** @class */ (function () {
    function EditCGProfilePage(toast, actionSheetController, fb, sanitizer, route, file, transfer, camera, imagePicker, webview, crop, serv, navParams, modalController, toastController, networkProvider, database) {
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
        //  if(this.editprofile.profile_pic != null){
        //   let source=this.editprofile['profile_pic'];
        //   this.cdvFilePath1= this.sanitizer.bypassSecurityTrustResourceUrl(source);
        //  }else{
        //   this.cdvFilePath1= null;
        //  }
        var globalURL = null;
        var localURL = null;
        if (this.editprofile['user_info']['user_picture']['url'] != null) {
            var source = this.editprofile['user_info']['user_picture']['url'];
            var gurl = source.includes("file:///");
            if (gurl == true) {
                globalURL = this.webview.convertFileSrc(source);
            }
            else {
                globalURL = this.sanitizer.bypassSecurityTrustResourceUrl(source);
            }
            //this.cdvFilePath1= this.sanitizer.bypassSecurityTrustResourceUrl(source);
        }
        else {
            //this.cdvFilePath1= null;
            var source = this.webview.convertFileSrc(this.editprofile['user_info']['user_picture']['localURL']);
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
    EditCGProfilePage.prototype.ngOnInit = function () {
        this.cgeditProfileForm = this.fb.group({
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
    };
    EditCGProfilePage.prototype.ionViewDidEnter = function () {
        this.namefocus.setFocus();
    };
    EditCGProfilePage.prototype.sample = function (data) {
        // const fileTransfer: FileTransferObject = this.transfer.create();
        var _this = this;
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
        this.database.updateUserImage(data).then(function (res) {
            console.log(res);
            _this.presentToast('Profile updated successfully');
        }).catch(function (error) {
            _this.presentToast('Failed to update the profile');
            console.log(error);
        });
    };
    EditCGProfilePage.prototype.selectimage = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (results) {
            console.log('Image URI: ' + results);
            _this.img = results.toString();
            _this.crop.crop(_this.img, { quality: 100 })
                .then(function (newImage) {
                console.log(newImage);
                _this.cdvFilePath1 = _this.webview.convertFileSrc(newImage);
                //this.reduceImages(results).then(() => {});
                _this.file.resolveLocalFilesystemUrl(newImage).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    console.log(fileMeta);
                    _this.audioFileName = fileMeta.name;
                    _this.cdvFilePath = fileMeta['localURL'];
                    console.log(_this.cdvFilePath, 'filepath');
                    var source = _this.editprofile['user_info']['user_picture']['url'];
                    var userPicturedata;
                    if (source == null) {
                        userPicturedata = {
                            url: source,
                            localURL: newImage,
                            cdvFilePath: _this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    else {
                        userPicturedata = {
                            url: newImage,
                            localURL: newImage,
                            cdvFilePath: _this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    _this.sample(userPicturedata);
                });
            }, function (error) { return console.error('Error cropping image', error); });
        }, function (err) {
            console.log(err);
        });
    };
    EditCGProfilePage.prototype.openImagePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Gallery',
                                    role: 'image',
                                    icon: 'image',
                                    handler: function () {
                                        _this.selectimage();
                                        console.log('camera clicked');
                                    }
                                }, {
                                    text: 'camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.takePicture();
                                        console.log('gallery clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCGProfilePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (results) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.img = results.toString();
            _this.crop.crop(_this.img, { quality: 100 })
                .then(function (newImage) {
                console.log(newImage);
                _this.cdvFilePath1 = _this.webview.convertFileSrc(newImage);
                //this.reduceImages(results).then(() => {});
                _this.file.resolveLocalFilesystemUrl(newImage).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    console.log(fileMeta);
                    _this.audioFileName = fileMeta.name;
                    _this.cdvFilePath = fileMeta['localURL'];
                    console.log(_this.cdvFilePath, 'filepath');
                    var source = _this.editprofile['user_info']['user_picture']['url'];
                    // let userPicturedata = {
                    //   url: source,
                    //   localURL: newImage,
                    //   cdvFilePath: this.cdvFilePath,
                    //   toUpdate: true
                    // }
                    var userPicturedata;
                    if (source == null) {
                        userPicturedata = {
                            url: source,
                            localURL: newImage,
                            cdvFilePath: _this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    else {
                        userPicturedata = {
                            url: newImage,
                            localURL: newImage,
                            cdvFilePath: _this.cdvFilePath,
                            toUpdate: true
                        };
                    }
                    _this.sample(userPicturedata);
                });
            }, function (error) { return console.error('Error cropping image', error); });
        }, function (err) {
            // Handle error
        });
    };
    EditCGProfilePage.prototype.sendEditProfile = function (val) {
        var _this = this;
        if (this.cgeditProfileForm.valid) {
            this.userphoneupdate = val.mobile_no;
            this.useremailupdate = val.email;
            this.usernameupdate = val.name;
            var data = { id: this.editprofile.user_info.id,
                name: this.usernameupdate,
                email: this.useremailupdate,
                mobile_no: this.userphoneupdate,
                role_id: 2
            };
            //  this.serv.editprofile(data, this.editprofile.user_info.id).subscribe(res=>{
            //   this.presentToast('Profile updated successfully');
            //   this.modalController.dismiss();
            //  },error=>{
            //  })
            this.database.updateUserData(data).then(function (res) {
                console.log(res);
                _this.presentToast('Profile updated successfully');
                _this.modalController.dismiss();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.presentToast('Please enter all the fields');
        }
    };
    EditCGProfilePage.prototype.close = function () {
        this.modalController.dismiss();
    };
    EditCGProfilePage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toast.show(message, '2000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
                return [2 /*return*/];
            });
        });
    };
    EditCGProfilePage.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 0) {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    };
    EditCGProfilePage.ctorParameters = function () { return [
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
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_10__["careGiverService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"] },
        { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"] },
        { type: _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditCGProfilePage.prototype, "namefocus", void 0);
    EditCGProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cg-edit-profile',
            template: __webpack_require__(/*! raw-loader!./cg-edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./cg-edit-profile.page.scss */ "./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_13__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ActionSheetController"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_3__["Crop"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_10__["careGiverService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ToastController"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"], _sqlite_database_database__WEBPACK_IMPORTED_MODULE_14__["DatabaseProvider"]])
    ], EditCGProfilePage);
    return EditCGProfilePage;
}());



/***/ }),

/***/ "./src/app/care-giver/tab3cg/tab3cg.module.ts":
/*!****************************************************!*\
  !*** ./src/app/care-giver/tab3cg/tab3cg.module.ts ***!
  \****************************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3cg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3cg.page */ "./src/app/care-giver/tab3cg/tab3cg.page.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _cg_edit_profile_cg_edit_profile_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cg-edit-profile/cg-edit-profile.page */ "./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");


















//import { Base64 } from '@ionic-native/base64/ngx';




var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3cg_page__WEBPACK_IMPORTED_MODULE_6__["Tab3cPage"] }, { path: 'cg-edit-profile', component: _cg_edit_profile_cg_edit_profile_page__WEBPACK_IMPORTED_MODULE_16__["EditCGProfilePage"] }])
            ],
            declarations: [_tab3cg_page__WEBPACK_IMPORTED_MODULE_6__["Tab3cPage"], _cg_edit_profile_cg_edit_profile_page__WEBPACK_IMPORTED_MODULE_16__["EditCGProfilePage"]],
            providers: [
                _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"],
                _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_8__["Crop"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
                _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
                _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"],
                _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__["FileChooser"],
                // Base64,
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
                _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Clipboard"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
                _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_18__["Toast"],
                _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_19__["DataBaseSummaryProvider"]
            ]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/care-giver/tab3cg/tab3cg.page.scss":
/*!****************************************************!*\
  !*** ./src/app/care-giver/tab3cg/tab3cg.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: left;\n  line-height: inherit;\n  color: inherit; }\n  ion-header ion-toolbar ion-title:not(.ion-padding-start) {\n    padding-left: 2px; }\n  ion-header ion-toolbar ion-img {\n  padding: 0px 16px; }\n  ion-header ion-toolbar ion-avatar {\n  --border-radius: 50%;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0 0 0 12px; }\n  ion-header:not(.shadow):after {\n  display: none; }\n  ion-header ion-toolbar {\n  --background: #ffffff; }\n  .main-header ion-buttons {\n  margin-right: 12px; }\n  .main-header ion-button {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  --border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0;\n  position: relative; }\n  .main-header ion-button svg {\n    margin-bottom: 16px; }\n  .main-header ion-button:after {\n    font-size: 11px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: inherit;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-bottom: 5px; }\n  .main-header ion-button:first-child:after {\n    content: \"Help\"; }\n  .main-header ion-button:nth-child(2):after {\n    content: \"Update\"; }\n  .main-header ion-button:last-child:after {\n    content: \"Notify\"; }\n  ion-tab-bar {\n  border: 0;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16); }\n  ion-tab-button {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none;\n  --color: #483df6;\n  --color-selected: #ffffff; }\n  ion-tab-button svg {\n    margin: 2px 0; }\n  ion-tab-button.tab-selected {\n    --background: #483df6;\n    -webkit-transition: background-color 0.5s linear;\n    transition: background-color 0.5s linear; }\n  ion-tab-button.tab-selected svg path {\n      fill: #ffffff; }\n  ion-tab-button:nth-child(2) {\n    border-width: 0px 1px;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-tab-button:nth-child(2).tab-selected:not(.patient) svg path {\n      stroke: #ffffff; }\n  .trans_btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --border-radius: 12px;\n  --border-style: solid;\n  --border-width: 0px;\n  --box-shadow: none;\n  --color: #483df6;\n  --color-activated: #483df6;\n  --opacity: 1;\n  --padding-bottom: 5px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 5px;\n  --ripple-color: #1e1e1e; }\n  .btn,\nion-buttons .btn {\n  --border-radius: 18px;\n  --box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  --padding-bottom: 8px;\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 8px;\n  height: auto;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .btn svg,\n  ion-buttons .btn svg {\n    margin-right: 5px; }\n  .btn svg path,\n    ion-buttons .btn svg path {\n      fill: #2c2c2c; }\n  ion-avatar {\n  background-color: #bcbbcf;\n  font-size: 2rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: capitalize;\n  text-align: center;\n  line-height: inherit;\n  color: #72708b;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  ion-segment {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  background: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n  ion-segment ion-segment-button {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: 45px;\n    color: none;\n    --color: #888888;\n    --color-activated: #2c2c2c;\n    --color-checked: #2c2c2c;\n    --indicator-color-checked: #60dc68;\n    --indicator-height: 8px;\n    --padding-top: 12px;\n    min-height: 45px; }\n  .action_tools {\n  --background: transparent;\n  --min-height: 50px;\n  --padding-bottom: 4px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 4px;\n  z-index: 0; }\n  .action_tools ion-buttons {\n    margin-right: 0; }\n  .action_tools ion-buttons .btn {\n      --background: #60dc68;\n      --background-activated: #60dc68;\n      --background-focused: #60dc68;\n      --background-hover: #60dc68;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .action_tools ion-chip {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: inherit;\n    line-height: inherit;\n    color: none;\n    --background: transparent;\n    --color: #2c2c2c;\n    height: 40px;\n    margin: 0;\n    padding: 0 10px;\n    border-radius: 20px; }\n  .action_tools ion-chip ion-label {\n      max-width: 120px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n  .action_tools ion-chip ion-avatar {\n      width: 35px;\n      height: 35px;\n      font-size: 1rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar {\n    --background: #ffffff;\n    --cancel-button-color: #bbbbbb;\n    --clear-button-color: #bbbbbb;\n    --color: #2c2c2c;\n    --icon-color: #2c2c2c;\n    --placeholder-color: #2c2c2c;\n    --placeholder-opacity: 1;\n    border-radius: 16px;\n    height: 32px;\n    padding: 0;\n    width: 110px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #e9e9e9; }\n  .action_tools ion-searchbar .searchbar-input {\n      -webkit-padding-end: 26px;\n              padding-inline-end: 26px;\n      -webkit-padding-end: 16px;\n              padding-inline-end: 16px;\n      font-size: 1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: none; }\n  .action_tools ion-searchbar + ion-buttons {\n      display: block; }\n  .action_tools ion-searchbar + ion-chip {\n      display: -webkit-box;\n      display: flex; }\n  .action_tools ion-searchbar.searchbar-has-focus, .action_tools ion-searchbar.searchbar-has-value {\n      -webkit-transition: width 0.3s ease;\n      transition: width 0.3s ease;\n      width: 100%;\n      --placeholder-opacity: 0.5;\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n      border-width: 1px;\n      border-style: solid;\n      border-color: #ffffff; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-buttons, .action_tools ion-searchbar.searchbar-has-value + ion-buttons {\n        display: none; }\n  .action_tools ion-searchbar.searchbar-has-focus + ion-chip, .action_tools ion-searchbar.searchbar-has-value + ion-chip {\n        display: none; }\n  .alergies ion-chip {\n  --background: #978ad2;\n  --color: #ffffff; }\n  .medication ion-chip {\n  --background: #5ee4a2;\n  --color: #2c2c2c; }\n  ion-toast {\n  --color: #ffffff;\n  --min-height: 24px;\n  --min-width: 92px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-transform: unset;\n  text-align: center;\n  line-height: inherit;\n  color: none; }\n  .footerform {\n  padding-bottom: 60px; }\n  .footer {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n  .footer ion-button, .footer .btn_submit {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px; }\n  .footer ion-button:first-child, .footer .btn_submit:first-child {\n      --background: #ffffff;\n      --background-activated: #ffffff;\n      --background-focused: #ffffff;\n      --background-hover: #ffffff;\n      --color: #2c2c2c;\n      --color-activated: #2c2c2c; }\n  .footer ion-button i, .footer .btn_submit i {\n      position: relative;\n      height: 100%; }\n  .footer ion-button i:after, .footer .btn_submit i:after {\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0;\n        text-transform: capitalize;\n        text-align: center;\n        line-height: inherit;\n        color: inherit;\n        font-style: normal;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        margin-top: 5px; }\n  .footer ion-button i.start:after, .footer .btn_submit i.start:after {\n        content: \"Record\"; }\n  .footer ion-button i.pause:after, .footer .btn_submit i.pause:after {\n        content: \"Pause\"; }\n  .footer ion-button i.stop:after, .footer .btn_submit i.stop:after {\n        content: \"Stop\"; }\n  .footer:before {\n    display: none; }\n  ion-radio {\n  --color: #d7d7e2;\n  --color-checked: #483df6;\n  --border-width: 8px;\n  width: 16px;\n  height: 16px;\n  margin-right: 5px; }\n  form ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: unset;\n          justify-content: unset; }\n  form ion-radio-group ion-item {\n    --border-color: transparent;\n    margin-bottom: 0; }\n  form ion-radio-group ion-item ion-label {\n      --color: #2c2c2c; }\n  .date_grid {\n  background: #fbfbfb;\n  margin: -16px -16px 20px; }\n  .date_grid ion-col {\n    padding: 0;\n    position: relative; }\n  .date_grid ion-col:not(:last-child):after {\n      content: \"\";\n      width: 1px;\n      background-color: #d4d3dc;\n      position: absolute;\n      right: 0;\n      top: 10px;\n      bottom: 10px; }\n  .date_grid ion-col ion-datetime {\n      font-size: 1.2rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: center;\n      line-height: inherit;\n      color: #2c2c2c;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: nowrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: unset;\n              justify-content: unset;\n      padding: 0 40px 0 0;\n      height: 50px; }\n  .date_grid ion-col svg {\n      position: absolute;\n      right: 10px;\n      top: 15px; }\n  .alert-tappable.sc-ion-alert-md {\n  height: 35px; }\n  .no_record {\n  padding: 50px 0;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .no_record h3 {\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c; }\n  .no_record p {\n    font-size: 0.85rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #8b9398;\n    width: 250px; }\n  .btn_submit {\n  display: block;\n  background-color: #60dc68;\n  border: none;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  background-color: #60dc68; }\n  .btn_submit.btn_login {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #2c2c2c;\n    border-radius: 24px;\n    max-width: 260px;\n    min-height: 42px;\n    margin: 25px auto; }\n  .btn_submit.btn_login:active {\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); }\n  .btn_submit:focus {\n    outline: none;\n    border: none;\n    box-shadow: none; }\n  .btn_submit::after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100px;\n    height: 100px;\n    margin-top: -50px;\n    margin-left: -50px;\n    top: 50%;\n    left: 50%;\n    -webkit-animation: ripple 1s;\n            animation: ripple 1s;\n    opacity: 0; }\n  .btn_submit:focus:not(:active)::after {\n    display: block; }\n  @-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  @keyframes ripple {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(10);\n            transform: scale(10); } }\n  .preview_img {\n  --background: #000000; }\n  .preview_img ion-toolbar {\n    --background: linear-gradient(rgba(0,0,0,0.8) 10%, transparent 90%);\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0; }\n  .preview_img ion-toolbar ion-title {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: right;\n      line-height: inherit;\n      color: inherit; }\n  .preview_img ion-slides {\n    height: 100%; }\n  .preview_img .img_details {\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(10%, transparent), color-stop(90%, rgba(0, 0, 0, 0.8)));\n    background-image: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.8) 90%);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: #ffffff;\n    padding: 16px;\n    z-index: 1; }\n  .preview_img .img_details h3 {\n      font-size: 1.1rem;\n      font-weight: 500;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  .preview_img .img_details p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      text-align: left;\n      line-height: inherit;\n      color: inherit;\n      margin: 0; }\n  ion-list ion-item:last-child {\n  --border-color: transparent; }\n  ion-list ion-item-group ion-item:first-child {\n  --border-color: #bcbbcf; }\n  form ion-list ion-item:last-child {\n  --border-color: #bcbbcf; }\n  .bottom_action {\n  margin-top: 20px; }\n  .bottom_action .button {\n    margin: 0;\n    --border-radius: 0;\n    width: 100%;\n    --box-shadow: none;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: none;\n    height: 50px;\n    margin: 10px 0; }\n  .bottom_action ion-button {\n    --background: #f5f5f5;\n    --background-activated: #ffffff;\n    --background-focused: #ffffff;\n    --background-hover: #ffffff;\n    --color: #2c2c2c;\n    --color-activated: #2c2c2c; }\n  .play_header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0; }\n  .play_header ion-toolbar {\n    --background: transparent;\n    --border-color: transparent;\n    --border-width: 0px;\n    --color: #ffffff; }\n  .play_modal {\n  --background: #000000;\n  text-align: center; }\n  .play_modal h3 {\n    font-size: 1.1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: capitalize;\n    text-align: center;\n    line-height: inherit;\n    color: #ffffff;\n    margin-top: 56px;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .play_modal p {\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-transform: none;\n    text-align: left;\n    line-height: inherit;\n    color: #ffffff;\n    padding: 0 16px;\n    overflow: hidden;\n    white-space: wrap; }\n  .play_modal .img_container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 56px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .play_modal .img_container img {\n      width: 75%; }\n  .play_modal .play_actions {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n    right: 0;\n    padding-bottom: 10px; }\n  .play_modal .play_actions ion-range {\n      color: #ffffff; }\n  ion-avatar {\n  width: 70px;\n  height: 70px; }\n  ion-item {\n  --background: #ffffff;\n  --border-width: 0;\n  --border-style: unset;\n  --color: #2c2c2c;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  padding: 10px 5px; }\n  ion-item:not(:last-child) {\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: #e3e3ef; }\n  ion-item ion-label {\n    margin: 0;\n    position: relative; }\n  ion-item ion-label h2 {\n      font-size: 1.05rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: right;\n      line-height: inherit;\n      color: #2c2c2c; }\n  ion-item ion-label h3 {\n      font-size: 1.25rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: capitalize;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      white-space: pre-wrap; }\n  ion-item ion-label h4 {\n      font-size: 1.05rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c; }\n  ion-item ion-label h6 {\n      font-size: 0.9rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #2c2c2c;\n      margin-top: 4px; }\n  ion-item ion-label p {\n      font-size: 0.8rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: inherit;\n      line-height: inherit;\n      color: #8b9398; }\n  ion-item ion-label .trans_btn {\n      font-size: 0.9rem;\n      font-weight: 400;\n      letter-spacing: 0;\n      text-transform: unset;\n      text-align: center;\n      line-height: inherit;\n      color: #483df6;\n      margin: 0;\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      height: auto; }\n  ion-item ion-label .trans_btn svg {\n        margin: 1px 2px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9zYWxpbmkvU2FsaW5pL0JDNC9zcmMvYXBwL2FwcC5zY3NzIiwiL2hvbWUvYWx0aXVzL3NhbGluaS9TYWxpbmkvQkM0L3NyYy9hcHAvY2FyZS1naXZlci90YWIzY2cvdGFiM2NnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3REE7RUF2QkksaUJBMEJzQjtFQXpCdEIsZ0JBeUIyQjtFQXZCN0IsaUJBdUJnQztFQXRCaEMsMEJBc0I0QztFQXJCNUMsZ0JBcUJrRDtFQXBCbEQsb0JBb0IyRDtFQW5CM0QsY0FtQm9FLEVBQUE7RUFIdEU7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtFQVVNLGlCQUFpQixFQUFBO0VBVnZCO0VBYU0sb0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBbkJ4QjtFQXdCTSxhQUFhLEVBQUE7RUFLbkI7RUFFSSxxQkFBYSxFQUFBO0VBSWpCO0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7RUF6Q0Usb0JBK0NvQjtFQS9DcEIsYUErQ29CO0VBOUNwQixpQkE4QzRCO0VBN0M1Qix5QkE2Q29DO1VBN0NwQyxtQkE2Q29DO0VBNUNwQyx1QkE0QzJDO1VBNUMzQyxzQkE0QzJDO0VBQ3pDLG9CQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTtFQVh0QjtJQWNNLG1CQUFtQixFQUFBO0VBZHpCO0lBMURJLGVBNEVvQjtJQTNFcEIsZ0JBMkV5QjtJQXpFM0IsaUJBeUU4QjtJQXhFOUIsMEJBd0UwQztJQXZFMUMsa0JBdUVrRDtJQXRFbEQsb0JBc0UyRDtJQXJFM0QsY0FxRW9FO0lBQ2hFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBdEJ4QjtJQTJCUSxlQUFlLEVBQUE7RUEzQnZCO0lBaUNRLGlCQUFpQixFQUFBO0VBakN6QjtJQXVDUSxpQkFBaUIsRUFBQTtFQU16QjtFQUNFLFNBQVM7RUFDVCwwQ0FBMEMsRUFBQTtFQUc1QztFQTVHSSxlQTZHZ0I7RUE1R2hCLGdCQTRHcUI7RUExR3ZCLGlCQTBHMEI7RUF6RzFCLDBCQXlHc0M7RUF4R3RDLGtCQXdHOEM7RUF2RzlDLG9CQXVHdUQ7RUF0R3ZELFdBc0c2RDtFQUM3RCxnQkFBUTtFQUNSLHlCQUFpQixFQUFBO0VBSG5CO0lBS0ksYUFBYSxFQUFBO0VBTGpCO0lBUUkscUJBQWE7SUFDYixnREFBd0M7SUFBeEMsd0NBQXdDLEVBQUE7RUFUNUM7TUFZUSxhQUFhLEVBQUE7RUFackI7SUFqR0UscUJBbUh5QjtJQWxIekIsbUJBa0hnQztJQWpIaEMscUJBaUh5QyxFQUFBO0VBbEIzQztNQXNCVSxlQUFlLEVBQUE7RUFPekI7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixpQ0FBcUI7RUFDckIsK0JBQW1CO0VBQ25CLDJCQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLHFCQUFlO0VBQ2YsbUJBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFRO0VBQ1IsMEJBQWtCO0VBQ2xCLFlBQVU7RUFDVixxQkFBaUI7RUFDakIsbUJBQWM7RUFDZCxxQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCx1QkFBZSxFQUFBO0VBR2pCOztFQUVFLHFCQUFnQjtFQUNoQiwyQ0FBYTtFQUNiLHFCQUFpQjtFQUNqQixtQkFBYztFQUNkLHFCQUFnQjtFQUNoQixrQkFBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBdEtQLGVBdUtnQjtFQXRLaEIsZ0JBc0txQjtFQXBLdkIsaUJBb0swQjtFQW5LMUIsMEJBbUtzQztFQWxLdEMsa0JBa0s4QztFQWpLOUMsb0JBaUt1RDtFQWhLdkQsV0FnSzZELEVBQUE7RUFWL0Q7O0lBYUksaUJBQWlCLEVBQUE7RUFickI7O01BZU0sYUFBYSxFQUFBO0VBS25CO0VBQ0UseUJBQXlCO0VBbEx2QixlQW1MZ0I7RUFsTGhCLGdCQWtMcUI7RUFoTHZCLGlCQWdMMEI7RUEvSzFCLDBCQStLc0M7RUE5S3RDLGtCQThLOEM7RUE3SzlDLG9CQTZLdUQ7RUE1S3ZELGNBNEtnRTtFQWxLaEUsb0JBbUtrQjtFQW5LbEIsYUFtS2tCO0VBbEtsQixpQkFrSzBCO0VBaksxQix5QkFpS2tDO1VBaktsQyxtQkFpS2tDO0VBaEtsQyx3QkFnSzBDO1VBaEsxQyx1QkFnSzBDLEVBQUE7RUFHNUM7RUFDRSx5Q0FBeUM7RUFDekMsbUJBbk5hO0VBb05iLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQTtFQUxaO0lBdkxJLGVBK0xrQjtJQTlMbEIsZ0JBOEx1QjtJQTVMekIsaUJBNEw0QjtJQTNMNUIsMEJBMkx3QztJQTFMeEMsa0JBMExnRDtJQXpMaEQsaUJBeUxzRDtJQXhMdEQsV0F3TDREO0lBQzFELGdCQUFRO0lBQ1IsMEJBQWtCO0lBQ2xCLHdCQUFnQjtJQUNoQixrQ0FBMEI7SUFDMUIsdUJBQW1CO0lBQ25CLG1CQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFJcEI7RUFDRSx5QkFBYTtFQUNiLGtCQUFhO0VBQ2IscUJBQWlCO0VBQ2pCLG1CQUFjO0VBQ2QscUJBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsVUFBVSxFQUFBO0VBUFo7SUFVSSxlQUFlLEVBQUE7RUFWbkI7TUFhTSxxQkFBYTtNQUNiLCtCQUF1QjtNQUN2Qiw2QkFBcUI7TUFDckIsMkJBQW1CO01BQ25CLGdCQUFRO01BQ1IsMEJBQWtCLEVBQUE7RUFsQnhCO0lBMU1JLGVBaU9rQjtJQWhPbEIsZ0JBZ091QjtJQTlOekIsaUJBOE40QjtJQTdONUIsMEJBNk53QztJQTVOeEMsbUJBNE5pRDtJQTNOakQsb0JBMk4wRDtJQTFOMUQsV0EwTmdFO0lBQzlELHlCQUFhO0lBQ2IsZ0JBQVE7SUFDUixZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQTdCdkI7TUFnQ00sZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsdUJBQXVCLEVBQUE7RUFuQzdCO01BdUNNLFdBQVc7TUFDWCxZQUFZO01BbFBkLGVBbVBvQjtNQWxQcEIsZ0JBa1B5QjtNQWhQM0IsaUJBZ1A4QjtNQS9POUIscUJBK09xQztNQTlPckMsbUJBOE84QztNQTdPOUMsb0JBNk91RDtNQTVPdkQsV0E0TzZELEVBQUE7RUF6Qy9EO0lBOENJLHFCQUFhO0lBQ2IsOEJBQXNCO0lBQ3RCLDZCQUFxQjtJQUNyQixnQkFBUTtJQUNSLHFCQUFhO0lBQ2IsNEJBQW9CO0lBQ3BCLHdCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBdlBkLGlCQXdQcUI7SUF2UHJCLG1CQXVQNEI7SUF0UDVCLHFCQXNQcUMsRUFBQTtFQXpEdkM7TUE0RE0seUJBQXdCO2NBQXhCLHdCQUF3QjtNQUN4Qix5QkFBd0I7Y0FBeEIsd0JBQXdCO01BdlExQixlQXdRb0I7TUF2UXBCLGdCQXVReUI7TUFyUTNCLGlCQXFROEI7TUFwUTlCLHFCQW9RcUM7TUFuUXJDLG1CQW1ROEM7TUFsUTlDLG9CQWtRdUQ7TUFqUXZELFdBaVE2RCxFQUFBO0VBOUQvRDtNQWtFTSxjQUFjLEVBQUE7RUFsRXBCO01Bc0VNLG9CQUFhO01BQWIsYUFBYSxFQUFBO0VBdEVuQjtNQTJFTSxtQ0FBMkI7TUFBM0IsMkJBQTJCO01BQzNCLFdBQVc7TUFDWCwwQkFBc0I7TUFDdEIseUNBQXlDO01BN1E3QyxpQkE4UXVCO01BN1F2QixtQkE2UThCO01BNVE5QixxQkF2Q2EsRUFBQTtFQW9PZjtRQWtGUSxhQUFhLEVBQUE7RUFsRnJCO1FBc0ZRLGFBQWEsRUFBQTtFQWdCckI7RUFFSSxxQkFBYTtFQUNiLGdCQUFRLEVBQUE7RUFJWjtFQUVJLHFCQUFhO0VBQ2IsZ0JBQVEsRUFBQTtFQUlaO0VBRUUsZ0JBQVE7RUFFUixrQkFBYTtFQUNiLGlCQUFZO0VBblVWLGVBb1VnQjtFQW5VaEIsZ0JBbVVxQjtFQWpVdkIsaUJBaVUwQjtFQWhVMUIscUJBZ1VpQztFQS9UakMsa0JBK1R5QztFQTlUekMsb0JBOFRrRDtFQTdUbEQsV0E2VHdELEVBQUE7RUFHMUQ7RUFDRSxvQkFBb0IsRUFBQTtFQUd0QjtFQTFURSxvQkEyVGtCO0VBM1RsQixhQTJUa0I7RUExVGxCLGlCQTBUMEI7RUF6VDFCLHlCQXlUa0M7VUF6VGxDLG1CQXlUa0M7RUF4VGxDLHVCQXdUeUM7VUF4VHpDLHNCQXdUeUM7RUFDekMsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVLEVBQUE7RUFQWjtJQVVJLFNBQVM7SUFDVCxrQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFhO0lBeFZiLGVBeVZrQjtJQXhWbEIsZ0JBd1Z1QjtJQXRWekIsaUJBc1Y0QjtJQXJWNUIsMEJBcVZ3QztJQXBWeEMsa0JBb1ZnRDtJQW5WaEQsb0JBbVZ5RDtJQWxWekQsV0FrVitEO0lBQzdELFlBQVksRUFBQTtFQWZoQjtNQWtCTSxxQkFBYTtNQUNiLCtCQUF1QjtNQUN2Qiw2QkFBcUI7TUFDckIsMkJBQW1CO01BQ25CLGdCQUFRO01BQ1IsMEJBQWtCLEVBQUE7RUF2QnhCO01BMEJNLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUEzQmxCO1FBM1VJLGVBd1dzQjtRQXZXdEIsZ0JBdVcyQjtRQXJXN0IsaUJBcVdnQztRQXBXaEMsMEJBb1c0QztRQW5XNUMsa0JBbVdvRDtRQWxXcEQsb0JBa1c2RDtRQWpXN0QsY0FpV3NFO1FBQ2hFLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFNBQVM7UUFDVCxXQUFXO1FBQ1gsZUFBZSxFQUFBO0VBbkN2QjtRQXVDVSxpQkFBaUIsRUFBQTtFQXZDM0I7UUE0Q1UsZ0JBQWdCLEVBQUE7RUE1QzFCO1FBaURVLGVBQWUsRUFBQTtFQWpEekI7SUF3REksYUFBYSxFQUFBO0VBSWpCO0VBQ0UsZ0JBQVE7RUFDUix3QkFBZ0I7RUFDaEIsbUJBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBR25CO0VBL1hFLG9CQWlZb0I7RUFqWXBCLGFBaVlvQjtFQWhZcEIsZUFnWTBCO0VBL1gxQix5QkErWGtDO1VBL1hsQyxtQkErWGtDO0VBOVhsQyx1QkE4WHlDO1VBOVh6QyxzQkE4WHlDLEVBQUE7RUFGM0M7SUFLTSwyQkFBZTtJQUNmLGdCQUFnQixFQUFBO0VBTnRCO01BU1EsZ0JBQVEsRUFBQTtFQVNoQjtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0IsRUFBQTtFQUYxQjtJQUlJLFVBQVU7SUFDVixrQkFBa0IsRUFBQTtFQUx0QjtNQVNRLFdBQVc7TUFDWCxVQUFVO01BQ1YseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULFlBQVksRUFBQTtFQWZwQjtNQWxhSSxpQkFxYnNCO01BcGJ0QixnQkFvYjJCO01BbGI3QixpQkFrYmdDO01BamJoQyxvQkFpYnNDO01BaGJ0QyxrQkFnYjhDO01BL2E5QyxvQkErYXVEO01BOWF2RCxjQWhDa0I7TUEwQ2xCLG9CQXFhc0I7TUFyYXRCLGFBcWFzQjtNQXBhdEIsaUJBb2E4QjtNQW5hOUIseUJBbWFzQztjQW5hdEMsbUJBbWFzQztNQWxhdEMsdUJBa2E2QztjQWxhN0Msc0JBa2E2QztNQUN6QyxtQkFBbUI7TUFDbkIsWUFBWSxFQUFBO0VBdEJsQjtNQXlCTSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVMsRUFBQTtFQUtmO0VBQ0UsWUFBWSxFQUFBO0VBR2Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBdmJsQixvQkF3YmtCO0VBeGJsQixhQXdia0I7RUF2YmxCLGlCQXViMEI7RUF0YjFCLHlCQXNia0M7VUF0YmxDLG1CQXNia0M7RUFyYmxDLHdCQXFiMEM7VUFyYjFDLHVCQXFiMEMsRUFBQTtFQUg1QztJQXRjSSxrQkE0Y3FCO0lBM2NyQixnQkEyYzBCO0lBemM1QixpQkF5YytCO0lBeGMvQiwwQkF3YzJDO0lBdmMzQyxrQkF1Y21EO0lBdGNuRCxvQkFzYzREO0lBcmM1RCxjQWhDa0IsRUFBQTtFQStkcEI7SUF0Y0ksa0JBZ2RxQjtJQS9jckIsZ0JBK2MwQjtJQTdjNUIsaUJBNmMrQjtJQTVjL0IsMEJBNGMyQztJQTNjM0Msa0JBMmNtRDtJQTFjbkQsb0JBMGM0RDtJQXpjNUQsY0F5Y3FFO0lBQ25FLFlBQVksRUFBQTtFQUloQjtFQUNFLGNBQWM7RUFDZCx5QkEzZWM7RUE0ZWQsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQWhmYyxFQUFBO0VBeWVoQjtJQXJkSSxpQkErZG9CO0lBOWRwQixnQkE4ZHlCO0lBNWQzQixpQkE0ZDhCO0lBM2Q5QiwwQkEyZDBDO0lBMWQxQyxrQkEwZGtEO0lBemRsRCxvQkF5ZDJEO0lBeGQzRCxjQWhDa0I7SUF5ZmhCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBZHJCO01BZ0JNLHlDQUF5QyxFQUFBO0VBaEIvQztJQW9CSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBdEJwQjtJQXlCSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsVUFBVSxFQUFBO0VBckNkO0lBd0NJLGNBQWMsRUFBQTtFQUdsQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFVBQVU7SUFDViw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUEsRUFBQTtFQVB4QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLFVBQVU7SUFDViw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUEsRUFBQTtFQUd4QjtFQUNFLHFCQUFhLEVBQUE7RUFEZjtJQUdJLG1FQUFhO0lBQ2IsMkJBQWU7SUFDZixtQkFBZTtJQUNmLGdCQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUSxFQUFBO0VBVlo7TUExZ0JJLGlCQXNoQnNCO01BcmhCdEIsZ0JBcWhCMkI7TUFuaEI3QixpQkFtaEJnQztNQWxoQmhDLG9CQWtoQnNDO01BamhCdEMsaUJBaWhCNkM7TUFoaEI3QyxvQkFnaEJzRDtNQS9nQnRELGNBK2dCK0QsRUFBQTtFQVpqRTtJQWdCSSxZQUFZLEVBQUE7RUFoQmhCO0lBbUJJLG9JQUF1RTtJQUF2RSwwRUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBMUJkO01BMWdCSSxpQkFzaUJzQjtNQXJpQnRCLGdCQXFpQjJCO01BbmlCN0IsaUJBbWlCZ0M7TUFsaUJoQyxvQkFraUJzQztNQWppQnRDLGdCQWlpQjRDO01BaGlCNUMsb0JBZ2lCcUQ7TUEvaEJyRCxjQStoQjhEO01BQzFELFNBQVMsRUFBQTtFQTdCZjtNQTFnQkksaUJBMGlCc0I7TUF6aUJ0QixnQkF5aUIyQjtNQXZpQjdCLGlCQXVpQmdDO01BdGlCaEMsb0JBc2lCc0M7TUFyaUJ0QyxnQkFxaUI0QztNQXBpQjVDLG9CQW9pQnFEO01BbmlCckQsY0FtaUI4RDtNQUMxRCxTQUFTLEVBQUE7RUFJZjtFQUdNLDJCQUFlLEVBQUE7RUFIckI7RUFTUSx1QkFBZSxFQUFBO0VBS3ZCO0VBSVEsdUJBQWUsRUFBQTtFQVF2QjtFQUVFLGdCQUFnQixFQUFBO0VBRmxCO0lBSUksU0FBUztJQUNULGtCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWE7SUFobEJiLGVBaWxCa0I7SUFobEJsQixnQkFnbEJ1QjtJQTlrQnpCLGlCQThrQjRCO0lBN2tCNUIsMEJBNmtCd0M7SUE1a0J4QyxrQkE0a0JnRDtJQTNrQmhELG9CQTJrQnlEO0lBMWtCekQsV0Ewa0IrRDtJQUM3RCxZQUFZO0lBQ1osY0FBYyxFQUFBO0VBVmxCO0lBYUkscUJBQWE7SUFDYiwrQkFBdUI7SUFDdkIsNkJBQXFCO0lBQ3JCLDJCQUFtQjtJQUNuQixnQkFBUTtJQUNSLDBCQUFrQixFQUFBO0VBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUSxFQUFBO0VBSlY7SUFNSSx5QkFBYTtJQUNiLDJCQUFlO0lBQ2YsbUJBQWU7SUFDZixnQkFBUSxFQUFBO0VBSVo7RUFDRSxxQkFBYTtFQUNiLGtCQUFrQixFQUFBO0VBRnBCO0lBNW1CSSxpQkFnbkJvQjtJQS9tQnBCLGdCQSttQnlCO0lBN21CM0IsaUJBNm1COEI7SUE1bUI5QiwwQkE0bUIwQztJQTNtQjFDLGtCQTJtQmtEO0lBMW1CbEQsb0JBMG1CMkQ7SUF6bUIzRCxjQWpDYTtJQTJvQlgsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBO0VBVDNCO0lBNW1CSSxlQXduQmtCO0lBdm5CbEIsZ0JBdW5CdUI7SUFybkJ6QixpQkFxbkI0QjtJQXBuQjVCLG9CQW9uQmtDO0lBbm5CbEMsZ0JBbW5Cd0M7SUFsbkJ4QyxvQkFrbkJpRDtJQWpuQmpELGNBakNhO0lBbXBCWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBZnJCO0lBbUJJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBbG5CZCxvQkFtbkJvQjtJQW5uQnBCLGFBbW5Cb0I7SUFsbkJwQixpQkFrbkI0QjtJQWpuQjVCLHlCQWluQm9DO1lBam5CcEMsbUJBaW5Cb0M7SUFobkJwQyx3QkFnbkI0QztZQWhuQjVDLHVCQWduQjRDLEVBQUE7RUF4QjlDO01BMEJNLFVBQVUsRUFBQTtFQTFCaEI7SUE4Qkksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLG9CQUFvQixFQUFBO0VBbEN4QjtNQTZDTSxjQUFjLEVBQUE7RUN4ckJwQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHZDtFQUNFLHFCQUFhO0VBQ2IsaUJBQWU7RUFDZixxQkFBZTtFQUNmLGdCQUFRO0VBQ1Isc0JBQW9CO0VBQ3BCLHdCQUFzQjtFQUN0QixnQkFBYztFQUNkLGtCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQVRuQjtJRHFDRSx1QkMxQjJCO0lEMkIzQixtQkMzQmtDO0lENEJsQyxxQkM1QjJDLEVBQUE7RUFYN0M7SUFlSSxTQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7RUFoQnRCO01EMEJJLGtCQ1B1QjtNRFF2QixnQkNSNEI7TURVOUIsaUJDVmlDO01EV2pDLHFCQ1h3QztNRFl4QyxpQkNaK0M7TURhL0Msb0JDYndEO01EY3hELGNBaENrQixFQUFBO0VDRHBCO01EMEJJLGtCQ0h1QjtNREl2QixnQkNKNEI7TURNOUIsaUJDTmlDO01ET2pDLDBCQ1A2QztNRFE3QyxtQkNSc0Q7TURTdEQsb0JDVCtEO01EVS9ELGNBaENrQjtNQ3VCZCxxQkFBcUIsRUFBQTtFQXhCM0I7TUQwQkksa0JDRXVCO01ERHZCLGdCQ0M0QjtNREM5QixpQkNEaUM7TURFakMscUJDRndDO01ER3hDLG1CQ0hpRDtNRElqRCxvQkNKMEQ7TURLMUQsY0FoQ2tCLEVBQUE7RUNEcEI7TUQwQkksaUJDTXNCO01ETHRCLGdCQ0syQjtNREg3QixpQkNHZ0M7TURGaEMscUJDRXVDO01ERHZDLG1CQ0NnRDtNREFoRCxvQkNBeUQ7TURDekQsY0FoQ2tCO01DZ0NkLGVBQWUsRUFBQTtFQWpDckI7TUQwQkksaUJDV3NCO01EVnRCLGdCQ1UyQjtNRFI3QixpQkNRZ0M7TURQaEMscUJDT3VDO01ETnZDLG1CQ01nRDtNRExoRCxvQkNLeUQ7TURKekQsY0EvQmlCLEVBQUE7RUNGbkI7TUQwQkksaUJDZXNCO01EZHRCLGdCQ2MyQjtNRFo3QixpQkNZZ0M7TURYaEMscUJDV3VDO01EVnZDLGtCQ1UrQztNRFQvQyxvQkNTd0Q7TURSeEQsY0E3QmU7TUNzQ1gsU0FBUztNQUNULGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULFlBQVksRUFBQTtFQTlDbEI7UUFpRFEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJlLWdpdmVyL3RhYjNjZy90YWIzY2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSB0byB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpc1xuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZFxuLy8gYW5kIHVzZWQgdGhyb3VnaG91dCB0aGUgYXBwbGljYXRpb24uXG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRmb250X2NvbG9yOiAjMmMyYzJjO1xuJGRhcmtfZ3JleTogIzhiOTM5ODtcbiRib3JkZXItY29sb3I6ICNiY2JiY2Y7XG4kcHJpbWFyeTogIzQ4M2RmNjtcbiRhbGVydDogIzBlOWJmZjtcbiR2aXRhbHM6ICM2MGRjNjg7XG4kaGVhbHRoOiAjZmY2OGFiO1xuJGFwcG9pbnRtZW50OiAjYzdhMjU0O1xuJGRvY192aXNpdDogIzVlZTRhMjtcbiRwcmVzY3JpcHRpb246ICM5NzhhZDI7XG4kcmVwb3J0OiAjZWE0ZTRlO1xuJGV4cGVuc2U6ICNmZmQzMmM7XG5cbiVmb250LWNvbG9yIHtcbiAgLS1jb2xvcjogIzJjMmMyYztcbn1cbiVkYXJrLWdyYXkge1xuICAtLWNvbG9yOiAjOGI5Mzk4O1xufVxuJXByaW1hcnktY29sb3Ige1xuICAtLWNvbG9yOiAjNDgzZGY2O1xufVxuXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodCwgJGxldHRlciwgJHRyYW5zZm9ybSwgJGFsaWduLCAkbGluZV9oZWlnaHQsICRmbl9jb2xvcikge1xuICBmb250OiB7XG4gICAgc2l6ZTogJHNpemU7XG4gICAgd2VpZ2h0OiAkd2VpZ2h0O1xuICB9XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgdGV4dC1hbGlnbjogJGFsaWduO1xuICBsaW5lLWhlaWdodDogJGxpbmVfaGVpZ2h0O1xuICBjb2xvcjogJGZuX2NvbG9yO1xufVxuXG5AbWl4aW4gYm9yZGVyKCR3aWR0aCwgJHN0eWxlLCAkYnJjb2xvcikge1xuICBib3JkZXItd2lkdGg6ICR3aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3R5bGU7XG4gIGJvcmRlci1jb2xvcjogJGJyY29sb3I7XG59XG5cbkBtaXhpbiBmbGV4KCRmbGV4LCAkd3JhcCwgJGFsaWduLCAkanVzdGlmeSkge1xuICBkaXNwbGF5OiAkZmxleDtcbiAgZmxleC13cmFwOiAkd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgbGVmdCwgaW5oZXJpdCwgaW5oZXJpdCk7XG5cbiAgICAgICY6bm90KC5pb24tcGFkZGluZy1zdGFydCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICB9XG4gIH1cbiAgJjpub3QoLnNoYWRvdykge1xuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIHVuc2V0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkhlbHBcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJVcGRhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTm90aWZ5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIC0zcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgZm9udCgxMHB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgfVxuICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDgzZGY2O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBsaW5lYXI7XG4gICAgc3ZnIHtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBAaW5jbHVkZSBib3JkZXIoMHB4IDFweCwgc29saWQsICNlM2UzZWYpO1xuICAgICYudGFiLXNlbGVjdGVkOm5vdCgucGF0aWVudCkge1xuICAgICAgc3ZnIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmFuc19idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6ICM0ODNkZjY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDgzZGY2O1xuICAtLW9wYWNpdHk6IDE7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMWUxZTFlO1xufVxuXG4uYnRuLFxuaW9uLWJ1dHRvbnMgLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogMThweDtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsIG5vbmUpO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAjMmMyYzJjO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmJjZjtcbiAgQGluY2x1ZGUgZm9udCgycmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzcyNzA4Yik7XG4gIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgNDVweCwgbm9uZSk7XG4gICAgLS1jb2xvcjogIzg4ODg4ODtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYzJjMmM7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogIzYwZGM2ODtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIH1cbn1cblxuLmFjdGlvbl90b29scyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgei1pbmRleDogMDtcblxuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgLmJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNjBkYzY4O1xuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM2MGRjNjg7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM2MGRjNjg7XG4gICAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNoaXAge1xuICAgIEBpbmNsdWRlIGZvbnQoMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiAjYmJiYmJiO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1pY29uLWNvbG9yOiAjMmMyYzJjO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyYzJjMmM7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlcigxcHgsIHNvbGlkLCAjZTllOWU5KTtcblxuICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCBub25lKTtcbiAgICB9XG5cbiAgICAmICsgaW9uLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJiArIGlvbi1jaGlwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi5zZWFyY2hiYXItaGFzLWZvY3VzLFxuICAgICYuc2VhcmNoYmFyLWhhcy12YWx1ZSB7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBAaW5jbHVkZSBib3JkZXIoMXB4LCBzb2xpZCwgJHdoaXRlKTtcblxuICAgICAgJiArIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiArIGlvbi1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBpb24tY29udGVudCB7XG4vLyAgICAgaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuLy8gICAgICAgICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9zZWFyY2guc3ZnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLmFsZXJnaWVzIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzk3OGFkMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uIHtcbiAgaW9uLWNoaXAge1xuICAgIC0tYmFja2dyb3VuZDogIzVlZTRhMjtcbiAgICAtLWNvbG9yOiAjMmMyYzJjO1xuICB9XG59XG5cbmlvbi10b2FzdCB7XG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gIC0tbWluLXdpZHRoOiA5MnB4O1xuICBAaW5jbHVkZSBmb250KDE0cHgsIDQwMCwgMCwgdW5zZXQsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG59XG5cbi5mb290ZXJmb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5mb290ZXIge1xuICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1idXR0b24sIC5idG5fc3VibWl0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBAaW5jbHVkZSBmb250KDFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCBub25lKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzJjMmMyYztcbiAgICB9XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udCgxMXB4LCA2MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAmLnN0YXJ0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJSZWNvcmRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiUGF1c2VcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5zdG9wIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJTdG9wXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOiAjZDdkN2UyO1xuICAtLWNvbG9yLWNoZWNrZWQ6ICM0ODNkZjY7XG4gIC0tYm9yZGVyLXdpZHRoOiA4cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5mb3JtIHtcbiAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIHdyYXAsIGNlbnRlciwgdW5zZXQpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLS1jb2xvcjogIzJjMmMyYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLXJvd3tcbi8vICAgQGluY2x1ZGUgZmxleChmbGV4LHdyYXAsdW5zZXQsdW5zZXQpO1xuLy8gfVxuLmRhdGVfZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIG1hcmdpbjogLTE2cHggLTE2cHggMjBweDtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgQGluY2x1ZGUgZm9udCgxLjJyZW0sIDQwMCwgMCwgbm9uZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCB1bnNldCk7XG4gICAgICBwYWRkaW5nOiAwIDQwcHggMCAwO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5ub19yZWNvcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleChmbGV4LCBub3dyYXAsIGNlbnRlciwgY2VudGVyKTtcblxuICBoMyB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjI1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xuICB9XG5cbiAgcCB7XG4gICAgQGluY2x1ZGUgZm9udCgwLjg1cmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgIzhiOTM5OCk7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbi5idG5fc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICR2aXRhbHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHZpdGFscztcblxuICAmLmJ0bl9sb2dpbiB7XG4gICAgQGluY2x1ZGUgZm9udCgxLjFyZW0sIDUwMCwgMCwgY2FwaXRhbGl6ZSwgY2VudGVyLCBpbmhlcml0LCAkZm9udF9jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gIH1cbn1cbi5wcmV2aWV3X2ltZ3tcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjgpIDEwJSwgdHJhbnNwYXJlbnQgOTAlKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgbm9uZSwgcmlnaHQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgIH1cbiAgfVxuICBpb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW1nX2RldGFpbHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAxMCUsIHJnYmEoMCwwLDAsMC44KSA5MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaDN7XG4gICAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBub25lLCBsZWZ0LCBpbmhlcml0LCBpbmhlcml0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC44cmVtLCA0MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsIGluaGVyaXQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWxpc3R7XG4gIGlvbi1pdGVte1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0tZ3JvdXB7XG4gICAgaW9uLWl0ZW17XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZvcm17XG4gIGlvbi1saXN0e1xuICAgIGlvbi1pdGVte1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2JjYmJjZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIC5wb2ludGVyX25vbmV7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLmJvdHRvbV9hY3Rpb257XG4gIC8vIEBpbmNsdWRlIGZsZXgoZmxleCwgbm93cmFwLCBjZW50ZXIsIGNlbnRlcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIGNhcGl0YWxpemUsIGNlbnRlciwgaW5oZXJpdCwgbm9uZSk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyYzJjMmM7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyYzJjMmM7XG4gIH1cbn1cblxuLnBsYXlfaGVhZGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuLnBsYXlfbW9kYWx7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoM3tcbiAgICBAaW5jbHVkZSBmb250KDEuMXJlbSwgNTAwLCAwLCBjYXBpdGFsaXplLCBjZW50ZXIsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIHB7XG4gICAgQGluY2x1ZGUgZm9udCgxcmVtLCA1MDAsIDAsIG5vbmUsIGxlZnQsIGluaGVyaXQsICR3aGl0ZSk7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBAaW5jbHVkZSBmbGV4KGZsZXgsIG5vd3JhcCwgY2VudGVyLCBjZW50ZXIpO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG4gIC5wbGF5X2FjdGlvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGlvbi1yYW5nZSB7XG4gICAgICAvLyAtLWJhci1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICMzODgwZmY7XG4gICAgICAvLyAtLWJhci1ib3JkZXItcmFkaXVzOiAjMzg4MGZmO1xuICAgICAgLy8gLS1iYXItaGVpZ2h0OiAycHg7XG4gICAgICAvLyAtLWhlaWdodDogMnB4O1xuICAgICAgLy8gLS1rbm9iLWJhY2tncm91bmQ6IDJweDtcbiAgICAgIC8vIC0ta25vYi1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAvLyAtLWtub2ItYm94LXNoYWRvdzogMnB4O1xuICAgICAgLy8gLS1rbm9iLXNpemU6IDJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5zY3NzXCI7XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHVuc2V0O1xyXG4gIC0tY29sb3I6ICMyYzJjMmM7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIEBpbmNsdWRlIGJvcmRlcigwIDAgMXB4IDAsIHNvbGlkLCAjZTNlM2VmKTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMDVyZW0sIDQwMCwgMCwgdW5zZXQsIHJpZ2h0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMjVyZW0sIDQwMCwgMCwgY2FwaXRhbGl6ZSwgaW5oZXJpdCwgaW5oZXJpdCwgJGZvbnRfY29sb3IpO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDEuMDVyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICRmb250X2NvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnQoMC45cmVtLCA0MDAsIDAsIHVuc2V0LCBpbmhlcml0LCBpbmhlcml0LCAkZm9udF9jb2xvcik7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgQGluY2x1ZGUgZm9udCgwLjhyZW0sIDQwMCwgMCwgdW5zZXQsIGluaGVyaXQsIGluaGVyaXQsICRkYXJrX2dyZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC50cmFuc19idG4ge1xyXG4gICAgICBAaW5jbHVkZSBmb250KDAuOXJlbSwgNDAwLCAwLCB1bnNldCwgY2VudGVyLCBpbmhlcml0LCAkcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDJweCAwIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/care-giver/tab3cg/tab3cg.page.ts":
/*!**************************************************!*\
  !*** ./src/app/care-giver/tab3cg/tab3cg.page.ts ***!
  \**************************************************/
/*! exports provided: Tab3cPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3cPage", function() { return Tab3cPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../care-giver-service/caregiver-service.service */ "./src/app/care-giver/care-giver-service/caregiver-service.service.ts");
/* harmony import */ var _cg_edit_profile_cg_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cg-edit-profile/cg-edit-profile.page */ "./src/app/care-giver/tab3cg/cg-edit-profile/cg-edit-profile.page.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../sqlite-database/database_provider */ "./src/app/sqlite-database/database_provider.ts");
/* harmony import */ var _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../network-connectivity/network-service */ "./src/app/network-connectivity/network-service.ts");


















var Tab3cPage = /** @class */ (function () {
    function Tab3cPage(statusBar, modalController, sanitizer, serv, actionSheetController, router, alertController, clipboard, file, FilePath, fileChooser, databaseSummary, networkProvider, webview) {
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.serv = serv;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.alertController = alertController;
        this.clipboard = clipboard;
        this.file = file;
        this.FilePath = FilePath;
        this.fileChooser = fileChooser;
        this.databaseSummary = databaseSummary;
        this.networkProvider = networkProvider;
        this.webview = webview;
        this.data = "5 days";
        this.data1 = "-";
        this.data2 = "Never";
        this.dataArray = [];
        this.autoUpdateTrigger = [
            { name: 'never', type: 'radio', label: 'Never', value: "Never", checked: true },
            { name: 'day1', type: 'radio', label: '1 Day', value: "1 Day", checked: false },
            { name: 'day2', type: 'radio', label: '3 Days', value: "3 Days", checked: false },
            { name: 'day3', type: 'radio', label: '5 Days', value: "5 Days", checked: false },
            { name: 'day4', type: 'radio', label: '10 Days', value: "10 Days", checked: false },
            { name: 'day5', type: 'radio', label: '15 Days', value: "15 Days", checked: false }
        ];
        this.autoUpdateDays = "Never";
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].ImageUrl;
    }
    Tab3cPage.prototype.ngOnInit = function () {
        this.alertFileName = localStorage.getItem("notifyAlertName") || 'Default';
        this.remainderFileName = localStorage.getItem("remainderAlertName") || 'Default';
    };
    Tab3cPage.prototype.ionViewWillEnter = function () {
        // this.serv.setting().subscribe(res => {
        //   this.pic = res;
        //   console.log(this.pic)   
        //   this.initialLogo=this.pic.user_info.name.charAt(0);
        //   console.log(this.initialLogo)
        //   this.caregiver = this.pic.caregiver;
        var _this = this;
        //   this.caregive_option=this.pic['caregiver'].map(data=>({
        //       name: 'radio1',
        //       type: 'radio',
        //       label: data.name,
        //       value: data.name,
        //   }));
        //   console.log(this.caregive_option)
        //   if(this.pic.profile_pic != null){
        //     let source=this.pic['profile_pic'];
        //     this.img= this.sanitizer.bypassSecurityTrustResourceUrl(source);
        //   }
        // })
        this.databaseSummary.getCaregiverData().then(function (res) {
            _this.pic = res;
            _this.initialLogo = _this.pic['user_info'].name.charAt(0);
            var globalURL = null;
            var localURL = null;
            if (_this.pic['user_info']['user_picture']['url'] != null) {
                var source = _this.pic['user_info']['user_picture']['url'];
                var gurl = source.includes("file:///");
                if (gurl == true) {
                    globalURL = _this.webview.convertFileSrc(source);
                }
                else {
                    var byPassURL = _this.environment + source;
                    globalURL = _this.sanitizer.bypassSecurityTrustResourceUrl(byPassURL);
                }
            }
            //else if(this.pic['user_info']['user_option']!=null){
            //   let source = this.webview.convertFileSrc(this.pic['user_info']['user_option']['localURL']); 
            //   localURL = source;
            //  }
            else {
                var source = _this.webview.convertFileSrc(_this.pic['user_info']['user_picture']['localURL']);
                localURL = source;
            }
            if (_this.networkProvider.isNetworkOnline) {
                _this.isNetwork = true;
                _this.img = globalURL != null ? globalURL : localURL;
            }
            else {
                _this.isNetwork = false;
                _this.img = localURL || null;
            }
            console.log(_this.img);
        });
        this.statusBar.backgroundColorByHexString('#483df6');
        this.autoUpdateDays = localStorage.getItem("autoUpdateDays") || "Never";
        this.updateAutoTriggers();
    };
    Tab3cPage.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            pics: this.pic
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _cg_edit_profile_cg_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditCGProfilePage"],
                                componentProps: data
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            //const user = data['data']; // Here's your selected user!
                            _this.ionViewWillEnter();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab3cPage.prototype.careGiverName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.caregive_option);
                        console.log();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'CareGiver',
                                backdropDismiss: false,
                                inputs: this.caregive_option,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (res) {
                                            console.log(res);
                                            _this.data1 = res;
                                            console.log('Confirm Ok');
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
    // async medicineDuration(){
    //   const alert1 = await this.alertController.create({
    //     header: 'Choose Reorder Days',
    //     backdropDismiss: false,
    //     inputs:  [{name:'day1',type:'radio',label:'1 Day',value:"1 Day"},
    //               {name:'day2',type:'radio',label:'3 Days',value:"3 Days"},
    //               {name:'day3',type:'radio',label:'5 Days',value:"5 Days",checked: true},
    //               {name:'day4',type:'radio',label:'10 Days',value:"10 Days"},
    //               {name:'day5',type:'radio',label:'15 Days',value:"15 Days"}
    //             ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: () => {
    //           console.log('Confirm Cancel');
    //         }
    //       }, {
    //         text: 'Ok',
    //         handler: (res) => {
    //           console.log(res);
    //            this.data=res;
    //           console.log('Confirm Ok');
    //         }
    //       }
    //     ]
    //   });
    //   await alert1.present();
    // }
    Tab3cPage.prototype.autoUpdateDuration = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Choose Auto Update Days',
                            backdropDismiss: false,
                            inputs: this.autoUpdateTrigger,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (res) {
                                        _this.autoUpdateDays = res;
                                        localStorage.setItem("autoUpdateDays", _this.autoUpdateDays);
                                        _this.updateAutoTriggers();
                                        console.log(res);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert2 = _a.sent();
                        return [4 /*yield*/, alert2.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3cPage.prototype.updateAutoTriggers = function () {
        for (var i = 0; i < this.autoUpdateTrigger.length; i++) {
            if (this.autoUpdateDays != this.autoUpdateTrigger[i].value) {
                this.autoUpdateTrigger[i].checked = false;
            }
            else {
                this.autoUpdateTrigger[i].checked = true;
            }
        }
    };
    Tab3cPage.prototype.goToterms = function () {
        this.router.navigate(['/terms_conditions']);
    };
    Tab3cPage.prototype.goToAbout = function () {
        this.router.navigate(['/about']);
    };
    // logout(){
    //   localStorage.clear();
    //   this.router.navigate(['/login'])
    // }
    Tab3cPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'BC4',
                            message: 'Are you sure want to logout?',
                            mode: 'md',
                            buttons: [
                                {
                                    text: 'Logout',
                                    handler: function () {
                                        localStorage.clear();
                                        _this.router.navigate(['/login']);
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
    Tab3cPage.prototype.copyText = function (CopyText) {
        console.log(CopyText);
        this.clipboard.copy(CopyText);
    };
    Tab3cPage.prototype.alertToneSetting = function () {
        var _this = this;
        this.fileChooser.open({ "mime": "audio/*" }).then(function (url) {
            //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
            //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
            _this.FilePath.resolveNativePath(url).then(function (result) {
                _this.alertToneNativepath = result;
                localStorage.setItem("alertSong", _this.alertToneNativepath);
                _this.file.resolveLocalFilesystemUrl(result).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    _this.alertFileName = fileMeta.name;
                    localStorage.setItem("notifyAlertName", _this.alertFileName);
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
                //       {id:this.dataArray[i].id,title:this.dataArray[i].title,sound:this.alertToneNativepath}); 
                //   }   
                // })
            });
        });
    };
    Tab3cPage.prototype.remainderToneSetting = function () {
        var _this = this;
        this.fileChooser.open({ "mime": "audio/*" }).then(function (url) {
            //this.playaudio=this.sanitizer.bypassSecurityTrustResourceUrl(url)
            //this.playaudio1=this.playaudio["changingThisBreaksApplicationSecurity"];
            _this.FilePath.resolveNativePath(url).then(function (result) {
                _this.remainderToneNativepath = result;
                localStorage.setItem("remainderSong", _this.remainderToneNativepath);
                _this.file.resolveLocalFilesystemUrl(result).then(function (fileEntry) {
                    return new Promise(function (resolve, reject) {
                        fileEntry.file(function (meta) { return resolve(meta); }, function (error) { return reject(error); });
                    });
                }).then(function (fileMeta) {
                    _this.remainderFileName = fileMeta.name;
                    localStorage.setItem("remainderAlertName", _this.remainderFileName);
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
    };
    Tab3cPage.ctorParameters = function () { return [
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_5__["careGiverService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"] },
        { type: _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"] },
        { type: _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] }
    ]; };
    Tab3cPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3cg',
            template: __webpack_require__(/*! raw-loader!./tab3cg.page.html */ "./node_modules/raw-loader/index.js!./src/app/care-giver/tab3cg/tab3cg.page.html"),
            styles: [__webpack_require__(/*! ./tab3cg.page.scss */ "./src/app/care-giver/tab3cg/tab3cg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _care_giver_service_caregiver_service_service__WEBPACK_IMPORTED_MODULE_5__["careGiverService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"], _sqlite_database_database_provider__WEBPACK_IMPORTED_MODULE_14__["DataBaseSummaryProvider"], _network_connectivity_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]])
    ], Tab3cPage);
    return Tab3cPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab3cg-tab3cg-module-es5.js.map