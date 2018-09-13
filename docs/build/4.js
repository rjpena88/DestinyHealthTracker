webpackJsonp([4],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(887);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/remy/code/DestinyHealthTracker/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title text-center>Mail\n        <ion-icon name="power" (onClick)=\'logout()\' class="float-right dhr-green"></ion-icon></ion-title>\n    </ion-navbar>\n    <div class="row headerRow pl-4">\n      <div class="col-sm-0">\n      </div>\n      <div class="row">\n        <div class="col-5 col-md-6">\n            <div class="bio">\n              <p class="p-0 m-0"></p>    \n              <p class="p-0 m-0"></p>\n            </div>  \n          </div>\n        </div>\n      </div>\n  </ion-header>\n\n<ion-content class="list-avatar-page">\n    <ion-list>\n  \n      <ion-list-header>Today</ion-list-header>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/12758.jpg">\n        </ion-avatar>\n        <h2>Kim B. Abell, M.D.</h2>\n        <p>This town ain\'t big enough for the two of us!</p>\n        <ion-note item-end>3:43 pm</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/18696.jpg">\n        </ion-avatar>\n        <h2>Derek E. Bell, M.D.</h2>\n        <p>My eyeballs could have been sucked from their sockets!</p>\n        <ion-note item-end>1:12 pm</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/6356.jpg">\n        </ion-avatar>\n        <h2>Adrienne D. Bonham, M.D., M.S.</h2>\n        <p>Well aren\'t you just the sweetest space toy I ever did meet!</p>\n        <ion-note item-end>10:03 am</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/2985.jpg">\n        </ion-avatar>\n        <h2>Gaylinn M. Greenwood, M.D.</h2>\n        <p>You\'re not turning me into a Mashed Potato.</p>\n        <ion-note item-end>5:47 am</ion-note>\n      </ion-item>\n  \n    </ion-list>\n  \n    <ion-list>\n  \n      <ion-list-header>Yesterday</ion-list-header>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/6400.jpg">\n        </ion-avatar>\n        <h2>Bryan A. Henry, M.D.</h2>\n        <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n        <ion-note item-end>11:11 pm</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/4385.jpg">\n        </ion-avatar>\n        <h2>Diana Herrmann, M.D.</h2>\n        <p>"Providing continuity of care, not just from birth through adulthood, but to all members within a family, is fascinating to me."</p>\n        <ion-note item-end>8:54 pm</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/23974.jpg">\n        </ion-avatar>\n        <h2>Sveta Karelsky, M.D.</h2>\n        <p>Were you scared? Tell me honestly.</p>\n        <ion-note item-end>7:22 am</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/7688.jpg">\n        </ion-avatar>\n        <h2>Marc S. Lavender, M.D.</h2>\n        <p>Neigh!</p>\n        <ion-note item-end>2:08 am</ion-note>\n      </ion-item>\n  \n    </ion-list>\n  \n    <ion-list>\n  \n      <ion-list-header>Last Week</ion-list-header>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/24129.jpg">\n        </ion-avatar>\n        <h2>Lisa R. Lincoln, M.D.</h2>\n        <p>So, who\'s ready for Ken\'s dream tour?</p>\n        <ion-note item-end>Sun</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/2984.jpg">\n        </ion-avatar>\n        <h2>Alan D. Lorenz, M.D.</h2>\n        <p>The claw is our master.</p>\n        <ion-note item-end>Fri</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/4947.jpg">\n        </ion-avatar>\n        <h2>Marilyn N. Ling, M.D.</h2>\n        <p>Code Red, repeat: We\'re at Code Red!</p>\n        <ion-note item-end>Wed</ion-note>\n      </ion-item>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="https://www.urmc.rochester.edu/ecv_binary/faculty/generated/profile_web/9734.jpg">\n        </ion-avatar>\n        <h2>BHong Zhang, M.D., Ph.D.</h2>\n        <p>What would you say if I get someone else to watch the sheep for me tonight?</p>\n        <ion-note item-end>Mon</ion-note>\n      </ion-item>\n  \n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/remy/code/DestinyHealthTracker/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=4.js.map