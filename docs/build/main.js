webpackJsonp([14],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(469);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(841);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(842);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		861,
		13
	],
	"../pages/cards/cards.module": [
		863,
		12
	],
	"../pages/content/content.module": [
		862,
		1
	],
	"../pages/event-modal/event-modal.module": [
		864,
		11
	],
	"../pages/item-create/item-create.module": [
		866,
		10
	],
	"../pages/item-detail/item-detail.module": [
		865,
		9
	],
	"../pages/list-master/list-master.module": [
		867,
		8
	],
	"../pages/login/login.module": [
		868,
		7
	],
	"../pages/menu/menu.module": [
		869,
		6
	],
	"../pages/search/search.module": [
		870,
		5
	],
	"../pages/settings/settings.module": [
		871,
		4
	],
	"../pages/signup/signup.module": [
		872,
		3
	],
	"../pages/tabs/tabs.module": [
		873,
		2
	],
	"../pages/welcome/welcome.module": [
		874,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://destiny-health-tracker-app.firebaseio.com';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Pneumonia: right middle lobe X-Ray",
                "profilePic": "https://www.wikidoc.org/images/a/ad/Pneumonia-right-middle-lobe-4.jpg",
                "about": "Dr Sajoscha Sorrentino Airspace consolidation with air bronchograms in the right lower zone, clearly shown in the right middle lobe on the lateral projection. "
            },
            {
                "name": "Brain",
                "profilePic": "https://images.radiopaedia.org/images/239205/d2c418993c32843e100da0dae228c2_big_gallery.jpg",
                "about": "A.Prof Frank Gaillard Selected MRI images demonstrate abnormal white matter, particularly posteriorly and in the periventricular region. It is characterised by bilateral symmetric deep white matter hyperintensity on T2 weighted images, with associated involvement of the subcortical white matter, which results in poor grey-white matter differentiation on T2 weighted images. MRS demonstrates elevation of choline (Cho). Alpha-glutamate peak is not visible."
            },
            {
                "name": "Pap Smear",
                "profilePic": "https://laobgyns.com/wp-content/uploads/2016/09/los-angeles-pap-smear-495x400.jpg",
                "about": "Should be performed annually for women who are over the age of 18 and/or sexually active, to screen for cervical cancer and certain vaginal or uterine infections. Cells are removed from the cervical area for testing."
            },
            {
                "name": "Urinalysis",
                "profilePic": "http://www.carolinascoreconcepts.com/pedemmorsels/Ped_Emergency_Medicine_Morsels/2010/Entries/2010/9/17_U_A_vs_Dipstick_%28vs_culture%29_files/shapeimage_1.png",
                "about": "This standard test is usually performed on admission to a hospital or as part of an annual physical. It may also be done if you have symptoms relating to abdominal pain or blood in the urine. One to two ounces of urine are required."
            },
            {
                "name": "Urine Culture",
                "profilePic": "https://i.ytimg.com/vi/gH--8YWdyyk/maxresdefault.jpg",
                "about": "If you experience symptoms of a urinary tract infection (UTI), your doctor may test a sample of your urine to make the diagnosis. A urine sample is required."
            },
            {
                "name": "Uric Acid",
                "profilePic": "https://thumbs.dreamstime.com/t/blood-sample-abnormal-high-uric-acid-test-result-116099624.jpg",
                "about": "Used to detect high levels of uric acid, or to monitor certain chemotherapy or radiation cancer therapies."
            },
            {
                "name": "Glucose Level",
                "profilePic": "https://www.mymed.com/image/2383/medicalarticle/800",
                "about": "Used to identify blood glucose level, and to screen for, diagnose, and monitor diabetes, pre-diabetes, and hypoglycemia. If you are diabetic, glucose levels should be monitored up to several times a day."
            },
            {
                "name": "PTT (Partial Thromboplastin Time)",
                "profilePic": "https://media.istockphoto.com/photos/partial-thromboplastin-time-test-picture-id951994872",
                "about": "This test is most often ordered to help evaluate your risk of excessive bleeding prior to a surgical procedure, or to monitor heparin anticoagulant therapy."
            },
            {
                "name": "Glycohemoglobin (Hemoglobin A1C)",
                "profilePic": "https://bmjopen.bmj.com/content/bmjopen/6/4/e011059/F2.large.jpg",
                "about": "Used to monitor a person’s diabetes and to aid in treatment decisions, this test is usually performed with the first diagnosis and then 2 to 4 times per year"
            },
            {
                "name": "BMP (Basic Metabolic Panel) test results sample",
                "profilePic": "http://study.com/cimages/videopreview/chemical-blood-tests-basic-metabolic-panel-terminology1_211791.jpg",
                "about": "A group of 7-8 tests used as a screening tool to check for conditions like diabetes and kidney disease. You may be asked to fast for 10 to 12 hours prior to test."
            },
            {
                "name": "CBC (Complete Blood Count)",
                "profilePic": "https://www.mymed.com/image/2383/medicalarticle/800",
                "about": "Determines general health and screens for disorders such as anemia or infections, as well as nutritional status and toxic substance exposure."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tab5Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'WelcomePage';
// export const MainPage = 'TabsPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// export const FirstRunPage = 'TutorialPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'CardsPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'ContentPage';
var Tab4Root = 'SettingsPage';
var Tab5Root = 'CalendarPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        afAuth.authState.subscribe(function (usr) {
            // storing the usr into user variable
            _this.user = usr;
            console.log("welcome " + usr.email);
        });
    }
    // Test Prescription logic
    DataService.prototype.getDrugById = function (id) {
        console.log("I'm from the getDrug function in data.service.ts");
        return this.db.object('/rx/results/' + String(id)).valueChanges();
        // var results = this.db.list('results');
        // console.log(results);
    };
    // Get User Info
    DataService.prototype.getUserById = function (PatientID) {
        return this.db.object('/patients/' + String(PatientID)).valueChanges();
        // const results = this.db.list('results');
        // console.log(results);
    };
    // Welcome logic
    DataService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    Object.defineProperty(DataService.prototype, "authenticated", {
        get: function () {
            if (__WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth().currentUser) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(522);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic3_calendar_en__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mocks_providers_items__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_data_data_service__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { NgCalendarModule } from 'ionic2-calendar';
// import { NativePageTransitions } from '@ionic-native/native-page-transitions';
// import { CalendarPage } from '../pages/calendar/calendar';
//calendar Daira 

// Angular Fire Imports







// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var config = {
    apiKey: "AIzaSyAaj5fLFgv6Xaiqt_yhf4pEMEXHBcTyVfI",
    authDomain: "destiny-health-tracker-app.firebaseapp.com",
    databaseURL: "https://destiny-health-tracker-app.firebaseio.com",
    projectId: "destiny-health-tracker-app",
    storageBucket: "destiny-health-tracker-app.appspot.com",
    messagingSenderId: "670569498272"
};
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_16__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                // NgCalendarModule,
                __WEBPACK_IMPORTED_MODULE_11_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_15__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_16__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                // NativePageTransitions,
                { provide: __WEBPACK_IMPORTED_MODULE_16__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_data_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 253,
	"./af.js": 253,
	"./ar": 254,
	"./ar-dz": 255,
	"./ar-dz.js": 255,
	"./ar-kw": 256,
	"./ar-kw.js": 256,
	"./ar-ly": 257,
	"./ar-ly.js": 257,
	"./ar-ma": 258,
	"./ar-ma.js": 258,
	"./ar-sa": 259,
	"./ar-sa.js": 259,
	"./ar-tn": 260,
	"./ar-tn.js": 260,
	"./ar.js": 254,
	"./az": 261,
	"./az.js": 261,
	"./be": 262,
	"./be.js": 262,
	"./bg": 263,
	"./bg.js": 263,
	"./bm": 264,
	"./bm.js": 264,
	"./bn": 265,
	"./bn.js": 265,
	"./bo": 266,
	"./bo.js": 266,
	"./br": 267,
	"./br.js": 267,
	"./bs": 268,
	"./bs.js": 268,
	"./ca": 269,
	"./ca.js": 269,
	"./cs": 270,
	"./cs.js": 270,
	"./cv": 271,
	"./cv.js": 271,
	"./cy": 272,
	"./cy.js": 272,
	"./da": 273,
	"./da.js": 273,
	"./de": 274,
	"./de-at": 275,
	"./de-at.js": 275,
	"./de-ch": 276,
	"./de-ch.js": 276,
	"./de.js": 274,
	"./dv": 277,
	"./dv.js": 277,
	"./el": 278,
	"./el.js": 278,
	"./en-au": 279,
	"./en-au.js": 279,
	"./en-ca": 280,
	"./en-ca.js": 280,
	"./en-gb": 281,
	"./en-gb.js": 281,
	"./en-ie": 282,
	"./en-ie.js": 282,
	"./en-il": 283,
	"./en-il.js": 283,
	"./en-nz": 284,
	"./en-nz.js": 284,
	"./eo": 285,
	"./eo.js": 285,
	"./es": 286,
	"./es-do": 287,
	"./es-do.js": 287,
	"./es-us": 288,
	"./es-us.js": 288,
	"./es.js": 286,
	"./et": 289,
	"./et.js": 289,
	"./eu": 290,
	"./eu.js": 290,
	"./fa": 291,
	"./fa.js": 291,
	"./fi": 292,
	"./fi.js": 292,
	"./fo": 293,
	"./fo.js": 293,
	"./fr": 294,
	"./fr-ca": 295,
	"./fr-ca.js": 295,
	"./fr-ch": 296,
	"./fr-ch.js": 296,
	"./fr.js": 294,
	"./fy": 297,
	"./fy.js": 297,
	"./gd": 298,
	"./gd.js": 298,
	"./gl": 299,
	"./gl.js": 299,
	"./gom-latn": 300,
	"./gom-latn.js": 300,
	"./gu": 301,
	"./gu.js": 301,
	"./he": 302,
	"./he.js": 302,
	"./hi": 303,
	"./hi.js": 303,
	"./hr": 304,
	"./hr.js": 304,
	"./hu": 305,
	"./hu.js": 305,
	"./hy-am": 306,
	"./hy-am.js": 306,
	"./id": 307,
	"./id.js": 307,
	"./is": 308,
	"./is.js": 308,
	"./it": 309,
	"./it.js": 309,
	"./ja": 310,
	"./ja.js": 310,
	"./jv": 311,
	"./jv.js": 311,
	"./ka": 312,
	"./ka.js": 312,
	"./kk": 313,
	"./kk.js": 313,
	"./km": 314,
	"./km.js": 314,
	"./kn": 315,
	"./kn.js": 315,
	"./ko": 316,
	"./ko.js": 316,
	"./ky": 317,
	"./ky.js": 317,
	"./lb": 318,
	"./lb.js": 318,
	"./lo": 319,
	"./lo.js": 319,
	"./lt": 320,
	"./lt.js": 320,
	"./lv": 321,
	"./lv.js": 321,
	"./me": 322,
	"./me.js": 322,
	"./mi": 323,
	"./mi.js": 323,
	"./mk": 324,
	"./mk.js": 324,
	"./ml": 325,
	"./ml.js": 325,
	"./mn": 326,
	"./mn.js": 326,
	"./mr": 327,
	"./mr.js": 327,
	"./ms": 328,
	"./ms-my": 329,
	"./ms-my.js": 329,
	"./ms.js": 328,
	"./mt": 330,
	"./mt.js": 330,
	"./my": 331,
	"./my.js": 331,
	"./nb": 332,
	"./nb.js": 332,
	"./ne": 333,
	"./ne.js": 333,
	"./nl": 334,
	"./nl-be": 335,
	"./nl-be.js": 335,
	"./nl.js": 334,
	"./nn": 336,
	"./nn.js": 336,
	"./pa-in": 337,
	"./pa-in.js": 337,
	"./pl": 338,
	"./pl.js": 338,
	"./pt": 339,
	"./pt-br": 340,
	"./pt-br.js": 340,
	"./pt.js": 339,
	"./ro": 341,
	"./ro.js": 341,
	"./ru": 342,
	"./ru.js": 342,
	"./sd": 343,
	"./sd.js": 343,
	"./se": 344,
	"./se.js": 344,
	"./si": 345,
	"./si.js": 345,
	"./sk": 346,
	"./sk.js": 346,
	"./sl": 347,
	"./sl.js": 347,
	"./sq": 348,
	"./sq.js": 348,
	"./sr": 349,
	"./sr-cyrl": 350,
	"./sr-cyrl.js": 350,
	"./sr.js": 349,
	"./ss": 351,
	"./ss.js": 351,
	"./sv": 352,
	"./sv.js": 352,
	"./sw": 353,
	"./sw.js": 353,
	"./ta": 354,
	"./ta.js": 354,
	"./te": 355,
	"./te.js": 355,
	"./tet": 356,
	"./tet.js": 356,
	"./tg": 357,
	"./tg.js": 357,
	"./th": 358,
	"./th.js": 358,
	"./tl-ph": 359,
	"./tl-ph.js": 359,
	"./tlh": 360,
	"./tlh.js": 360,
	"./tr": 361,
	"./tr.js": 361,
	"./tzl": 362,
	"./tzl.js": 362,
	"./tzm": 363,
	"./tzm-latn": 364,
	"./tzm-latn.js": 364,
	"./tzm.js": 363,
	"./ug-cn": 365,
	"./ug-cn.js": 365,
	"./uk": 366,
	"./uk.js": 366,
	"./ur": 367,
	"./ur.js": 367,
	"./uz": 368,
	"./uz-latn": 369,
	"./uz-latn.js": 369,
	"./uz.js": 368,
	"./vi": 370,
	"./vi.js": 370,
	"./x-pseudo": 371,
	"./x-pseudo.js": 371,
	"./yo": 372,
	"./yo.js": 372,
	"./zh-cn": 373,
	"./zh-cn.js": 373,
	"./zh-hk": 374,
	"./zh-hk.js": 374,
	"./zh-tw": 375,
	"./zh-tw.js": 375
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 561;

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(193);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(468);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


var MyApp = /** @class */ (function () {
    // constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, private nativePageTransitions: NativePageTransitions)
    function MyApp(translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Calendar', component: 'CalendarPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Search', component: 'SearchPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    // ionViewWillLeave() {
    //   let options: NativeTransitionOptions = {
    //      direction: 'down',
    //      duration: 500,
    //      slowdownfactor: 3,
    //      slidePixels: 20,
    //      iosdelay: 100,
    //      androiddelay: 150,
    //      fixedPixelsTop: 0,
    //      fixedPixelsBottom: 60
    //     };
    // openPage(page: any) {
    //   this.nativePageTransitions.slide(options);
    //   this.navCtrl.push(page);
    // }
    // this.nativePageTransitions.slide(options)
    //   .then(onSuccess)
    //   .catch(onError);
    // }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-menu [content]=\"content\">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[517]);
//# sourceMappingURL=main.js.map