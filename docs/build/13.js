webpackJsonp([13],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_calendar_en__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //daira
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__calendar__["a" /* CalendarPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__calendar__["a" /* CalendarPage */]
            ]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalendarPage = /** @class */ (function () {
    function CalendarPage() {
    }
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/remy/code/DestinyHealthTracker/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title text-center>\n        My Calendar\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n    <div class="row headerRow pl-4">\n      <div class="col-sm-0">\n      </div>\n      <div class="row">\n        <div class="col-5 col-md-6">\n            <div class="bio">\n              <p class="p-0 m-0"></p>    \n              <p class="p-0 m-0"></p>\n            </div>  \n          </div>\n        </div>\n      </div>\n  </ion-header>\n\n<ion-content>\n  <div class="container">\n      <ion-calendar #calendar (onclick)="onDaySelect($event)">\n          <button id="demo" onclick="createNewEvent()">Click me</button>\n      </ion-calendar>\n  </div>\n\n  <h4 class="text-center">No current events</h4>\n\n    \n</ion-content>\n'/*ion-inline-end:"/Users/remy/code/DestinyHealthTracker/src/pages/calendar/calendar.html"*/,
        })
    ], CalendarPage);
    return CalendarPage;
}());

this.currentEvents = [
    {
        year: 2017,
        month: 11,
        date: 25
    },
    {
        year: 2017,
        month: 11,
        date: 26
    }
];
function onDaySelect(event) {
}
// create new event 
function createNewEvent() {
    document.getElementById("demo").innerHTML = "Hello World";
}
//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=13.js.map