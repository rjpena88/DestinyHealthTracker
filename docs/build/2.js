webpackJsonp([2],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(888);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    // change translateservice values back to TAB*ROOT and modify translation JSON instead
    function TabsPage(navCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3____["c" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3____["d" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3____["e" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3____["f" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3____["g" /* Tab5Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.tab5Title = " ";
        translateService.get(['RX', 'Labs', 'Home', 'Mail', 'Calendar']).subscribe(function (values) {
            _this.tab1Title = values['RX'];
            _this.tab2Title = values['Labs'];
            _this.tab3Title = values['Home'];
            _this.tab4Title = values['Mail'];
            _this.tab5Title = values['Calendar'];
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/remy/code/DestinyHealthTracker/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="2">\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="medkit"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="flask"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="mail"></ion-tab>\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="calendar"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/remy/code/DestinyHealthTracker/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=2.js.map