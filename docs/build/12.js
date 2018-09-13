webpackJsonp([12],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards__ = __webpack_require__(879);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__cards__["a" /* CardsPage */]
            ]
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, http, auth) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.auth = auth;
        this.currentItems = [];
        this.result = [];
        this.auth.getDrugById(61).subscribe(function (data) {
            console.log(data);
            console.log("returned id");
        });
        this.cardItems = [
            {
                //Prescription Array ( Need rX API! )
                user: {
                    avatar: 'assets/img/rX-avatar.png',
                    name: 'Ibuprofen'
                },
                dosage: '1 800mg pill twice a day.',
                image: 'assets/img/advance-card-ibu.jpeg',
                content: 'Advil and ibuprofen are generally well tolerated medicines with a low incidence of adverse side effects. Ibuprofen has an extensive safety record, but as with any other OTC medication, you should exercise caution before taking this medication with any other prescription medications. Particular consideration must be taken before using Advil, or ibuprofen, for pain if you are already taking an anticoagulant (blood thinner) to avoid excessive bleeding. The current medical advice on taking NSAIDs during pregnancy is not to take them during the third trimester, as they may cause risk to the fetus. Anyone who is allergic to aspirin may also have an allergic reaction to other NSAIDs, including ibuprofen.',
            },
            {
                //Picture or no picture?
                user: {
                    avatar: 'assets/img/rX-avatar.png',
                    name: 'Azithromycin',
                    otherNames: 'Common brands: Zithromax, AzaSite, Zmax'
                },
                dosage: 'As directed by Doctor.',
                // image: 'assets/img/advance-card-ibu.jpeg',
                content: 'Antibiotic, it can treat various types of infections, including pink eye bacterial conjunctivitis.'
            },
        ];
    }
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/remy/code/DestinyHealthTracker/src/pages/cards/cards.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Prescriptions\n      <ion-icon name="power" (onClick)=\'logout()\' class="float-right dhr-green"></ion-icon></ion-title>\n  </ion-navbar>\n  <div class="row headerRow pl-4">\n    <div class="col-sm-0">\n    </div>\n    <div class="row">\n      <div class="col-5 col-md-6">\n          <div class="bio">\n            <p class="p-0 m-0"></p>    \n            <p class="p-0 m-0"></p>\n          </div>  \n        </div>\n      </div>\n    </div>\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- API TESTING -->\n  <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>  \n  \n  <button ion-button (click)= "getData()">Get Data</button>\n    <ion-row>Body:{{result.body}}</ion-row>\n    <ion-row>ID:{{result.id}}</ion-row>\n    <ion-row>Title:{{result.title}}</ion-row> -->\n\n  <ion-card *ngFor="let item of cardItems">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.user.avatar">\n      </ion-avatar>\n      <h2>{{item.user.name}}</h2>\n      <p>{{item.dosage}}</p>\n      <p>{{item.user.otherNames}}</p>\n    </ion-item>\n\n    <!-- <img [src]="item.image"> -->\n\n    <ion-card-content>\n      <p>{{item.content}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col pl-3>\n        <button ion-button color="primary" clear small icon-start>\n            <i class="fas fa-pills"></i>\n          QTY: 28\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n            <i class="fas fa-prescription-bottle"></i>\n          Refills left: 0\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          Use Before: 01/21/2019\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/remy/code/DestinyHealthTracker/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data_service__["a" /* DataService */]])
    ], CardsPage);
    return CardsPage;
}());

;
//# sourceMappingURL=cards.js.map

/***/ })

});
//# sourceMappingURL=12.js.map