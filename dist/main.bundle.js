webpackJsonp([0,3],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/auth.service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSongToTrainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddSongToTrainService = (function () {
    function AddSongToTrainService(_http) {
        this._http = _http;
        this.addTrainView = [true];
    }
    AddSongToTrainService.prototype.addSong = function (songObj) {
        var body = {
            trainId: this.trainToAddTo.trainId,
            track: songObj
        };
        return this._http.post('/api/addsongtotrain', body);
    };
    AddSongToTrainService.prototype.trainToAddSongTo = function (train) {
        this.trainToAddTo = train;
        this.addTrainView.shift();
        this.addTrainView.push(false);
    };
    AddSongToTrainService.prototype.returnTrainView = function () {
        this.addTrainView.shift();
        this.addTrainView.push(true);
    };
    AddSongToTrainService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AddSongToTrainService);
    return AddSongToTrainService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/add-song-to-train.service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
        this.trains = [];
    }
    ApiService.prototype.getRelevantSongs = function (songQuery) {
        return this._http.post('/api/hypemSongs', { songQuery: songQuery });
    };
    ApiService.prototype.addSong = function (track) {
        return this._http.post('/api/getHypemSongPath', { track: track });
    };
    ApiService.prototype.userSubmitsTrain = function (trainInfo) {
        this._http.post('/api/addtrain', trainInfo)
            .map(function (x) { return x.json(); })
            .subscribe(function (res) {
            console.log('res', res);
        }, function (err) {
            console.log('err', err);
        });
    };
    ApiService.prototype.getTrains = function () {
        var _this = this;
        this._http.get('api/trains').subscribe(function (res) {
            _this.trains.splice(0, _this.trains.length);
            res.json().forEach(function (train) {
                _this.trains.push(train);
            });
            console.log('this.trains', _this.trains);
        }, function (err) {
            console.log('err', err);
        });
    };
    ApiService.prototype.submitTagSearch = function (inputTag) {
        var _this = this;
        this._http.get('api/trainsbytag?' + inputTag).subscribe(function (res) {
            _this.trains.splice(0, _this.trains.length);
            res.json().forEach(function (train) {
                _this.trains.push(train);
            });
        }, function (err) {
            console.log('err', err);
        });
    };
    ApiService.prototype.favTrain = function (train) {
        return this._http.post('/api/favtrain', {
            trainName: train.trainName,
            trainImg: train.trainImg,
            trainId: train.trainId
        }).subscribe(function (res) {
            console.log('res', res);
        }, function (err) {
            console.log('err', err);
        });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/api.service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetTrainsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetTrainsService = (function () {
    function GetTrainsService(_http) {
        this._http = _http;
    }
    GetTrainsService.prototype.getTrains = function () {
        return this._http.get('api/trains');
    };
    GetTrainsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GetTrainsService);
    return GetTrainsService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/get-trains.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTagService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchTagService = (function () {
    function SearchTagService(_http) {
        this._http = _http;
    }
    SearchTagService.prototype.submitTagSearch = function (inputTag) {
        return this._http.get('api/trainsbytag?' + inputTag);
    };
    SearchTagService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchTagService);
    return SearchTagService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/search-tag.service.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function () {
    function HomeService(_http) {
        this._http = _http;
    }
    HomeService.prototype.logout = function () {
        return this._http.get('api/logout');
    };
    HomeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HomeService);
    return HomeService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/home.service.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (username, password) {
        return this._http.post('api/login', {
            username: username,
            password: password
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/login.service.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = (function () {
    function SignupService(_http) {
        this._http = _http;
    }
    SignupService.prototype.signUp = function (username, password) {
        return this._http.post('/api/signup', {
            username: username,
            password: password
        });
    };
    SignupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SignupService);
    return SignupService;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/signup.service.js.map

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 482;


/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(643);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/main.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(817),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/app.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_form_form_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_signup_signup_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_signup_signup_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_form_login_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fav_trains_fav_trains_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_get_trains_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_service__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_add_song_to_train_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_search_tag_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__searchpage_searchpage_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__search_trains_search_trains_component__ = __webpack_require__(649);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__fav_trains_fav_trains_component__["a" /* FavTrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__searchpage_searchpage_component__["a" /* SearchpageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__search_trains_search_trains_component__["a" /* SearchTrainsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], children: [
                            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_11__login_form_form_component__["a" /* FormComponent */] },
                            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__login_signup_signup_component__["a" /* SignupComponent */] }
                        ] },
                    { path: 'favtrains', component: __WEBPACK_IMPORTED_MODULE_16__fav_trains_fav_trains_component__["a" /* FavTrainsComponent */] },
                    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_21__searchpage_searchpage_component__["a" /* SearchpageComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_13__login_signup_signup_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_14__login_form_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_17__services_get_trains_service__["a" /* GetTrainsService */],
                __WEBPACK_IMPORTED_MODULE_18__home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_19__services_add_song_to_train_service__["a" /* AddSongToTrainService */],
                __WEBPACK_IMPORTED_MODULE_20__services_search_tag_service__["a" /* SearchTagService */],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/app.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_trains_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavTrainsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavTrainsComponent = (function () {
    function FavTrainsComponent(getTrainsService, searchTagService, apiService, addSongToTrainService) {
        var _this = this;
        this.getTrainsService = getTrainsService;
        this.searchTagService = searchTagService;
        this.apiService = apiService;
        this.addSongToTrainService = addSongToTrainService;
        this.addTrainView = [true];
        this.favTrain = function (idx) {
            _this.apiService.favTrain(_this.trains[idx]);
        };
        this.addSongToTrain = function (idx) {
            _this.addSongToTrainService.trainToAddSongTo(_this.trains[idx]);
        };
    }
    FavTrainsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trains = this.apiService.trains;
        setTimeout(function () {
            _this.apiService.getTrains();
        }, 200);
    };
    FavTrainsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-fav-trains',
            template: __webpack_require__(818),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_trains_service__["a" /* GetTrainsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_trains_service__["a" /* GetTrainsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__["a" /* SearchTagService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__["a" /* SearchTagService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__["a" /* AddSongToTrainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__["a" /* AddSongToTrainService */]) === 'function' && _d) || Object])
    ], FavTrainsComponent);
    return FavTrainsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/fav-trains.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(homeService, apiService, searchTagService, addSongToTrainService, applicationRef, authService) {
        var _this = this;
        this.homeService = homeService;
        this.apiService = apiService;
        this.searchTagService = searchTagService;
        this.addSongToTrainService = addSongToTrainService;
        this.applicationRef = applicationRef;
        this.authService = authService;
        this.songResults = [];
        this.searchResults = [];
        this.songToPlay = '';
        this.displayAudioTag = false;
        this.selectedTrack = {
            song: 'Select your song below',
            ph: ''
        };
        this.trains = [];
        this.testForGabe = true;
        this.listrendered = true;
        this.recommendedTrack = '';
        this.atv = true;
        this.addTrainView = this.addSongToTrainService.addTrainView;
        this.searchForSong = function () {
            _this.apiService.getRelevantSongs(_this.songToSearch).subscribe(function (res) {
                _this.songToSearch = '';
                _this.songResults = res.json();
            }, function (err) {
                console.log('err', err);
            });
        };
        this.firstSongInTrain = function (idx) {
            _this.selectedTrack = _this.songResults[idx];
            _this.selectedTrack.ph = ':';
        };
        this.createTrain = function () {
            var opts = {
                selectedTrack: _this.selectedTrack,
                name: _this.trainName,
                imgurl: _this.trainImgPath,
                tags: _this.trainTags
            };
            console.log('opts', opts);
            _this.trainName = '';
            _this.trainImgPath = '';
            _this.trainTags = '';
            _this.selectedTrack = {
                song: 'Select your song below',
                ph: ''
            };
            _this.songResults = [];
            _this.apiService.userSubmitsTrain(opts);
            _this.displayLoadingGif();
        };
        this.getFavTrains = function () {
            _this.apiService.getTrains();
        };
        this.trackToRecommend = function (idx) {
            _this.recommendedTrack = _this.songResults[idx];
            console.log('reccd track:', _this.recommendedTrack);
        };
        this.recommendTrack = function () {
            _this.addSongToTrainService.addSong(_this.recommendedTrack).subscribe(function (res) {
                _this.getFavTrains();
                console.log('reccd track before wipe:', _this.recommendedTrack);
                _this.recommendedTrack = '';
                console.log('reccd track after wipe:', _this.recommendedTrack);
                _this.songResults = [];
                _this.searchResults = [];
                _this.displayLoadingGif();
            }, function (err) {
                console.log('err', err);
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function () {
        this.apiService.submitTagSearch(this.tagSearch);
        this.tagSearch = '';
    };
    HomeComponent.prototype.logout = function () {
        this.authService.isLoggedIn = false;
        this.addSongToTrainService.returnTrainView();
        this.homeService.logout().subscribe(function (res) {
            console.log('logged out');
        });
    };
    HomeComponent.prototype.displayLoadingGif = function () {
        var _this = this;
        this.listrendered = !this.listrendered;
        setTimeout(function () {
            _this.listrendered = !_this.listrendered;
        }, 5000);
    };
    HomeComponent.prototype.returnToTrains = function () {
        this.addSongToTrainService.returnTrainView();
        this.addTrainView = this.addSongToTrainService.addTrainView;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(819),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__["a" /* SearchTagService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_search_tag_service__["a" /* SearchTagService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__["a" /* AddSongToTrainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_add_song_to_train_service__["a" /* AddSongToTrainService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ApplicationRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ApplicationRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/home.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_trains_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormComponent = (function () {
    function FormComponent(loginService, getTrainsService, router, authService) {
        var _this = this;
        this.loginService = loginService;
        this.getTrainsService = getTrainsService;
        this.router = router;
        this.authService = authService;
        this.submitLogin = function () {
            _this.loginService.login(_this.loginUsername, _this.loginPassword)
                .subscribe(function (res) {
                _this.loginUsername = '';
                _this.loginPassword = '';
                console.log('res from login is: ', res);
                console.log('res.status from login is: ', res.status);
                _this.authService.isLoggedIn = true;
                _this.router.navigateByUrl('');
            }, function (err) {
                console.log('err', err);
            });
            _this.getTrainsService.getTrains()
                .subscribe(function (res) {
                console.log('res.json is: ', res.json());
                _this.trains = res.json();
            });
        };
        this.flag = function () {
            //add class fadeIn to element
            //in the css, give that class the fadeIn stuff
        };
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__(820),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_trains_service__["a" /* GetTrainsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_get_trains_service__["a" /* GetTrainsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], FormComponent);
    return FormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/form.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(821),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/login.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_service__ = __webpack_require__(429);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(signUpService) {
        var _this = this;
        this.signUpService = signUpService;
        this.submitSignup = function () {
            _this.signUpService.signUp(_this.inputUsername, _this.inputPassword)
                .subscribe(function (res) {
                _this.inputUsername = '';
                _this.inputPassword = '';
            }, function (err) {
                console.log('err', err);
            });
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-signup-form',
            template: __webpack_require__(822),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__signup_service__["a" /* SignupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__signup_service__["a" /* SignupService */]) === 'function' && _a) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/signup.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTrainsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchTrainsComponent = (function () {
    function SearchTrainsComponent() {
    }
    SearchTrainsComponent.prototype.ngOnInit = function () {
    };
    SearchTrainsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-search-trains',
            template: __webpack_require__(823),
            styles: [__webpack_require__(814)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchTrainsComponent);
    return SearchTrainsComponent;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/search-trains.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(824),
            styles: [__webpack_require__(815)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].Emulated,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].Default
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/search.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchpageComponent = (function () {
    function SearchpageComponent() {
    }
    SearchpageComponent.prototype.ngOnInit = function () {
    };
    SearchpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-searchpage',
            template: __webpack_require__(825),
            styles: [__webpack_require__(816)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchpageComponent);
    return SearchpageComponent;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/searchpage.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn)
            return true;
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/auth-guard.service.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/environment.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/yuriylemberg/Documents/hrla12/greenfield-trainRecc/src/polyfills.js.map

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ".trainImg {\n    height: 67px;\n    width: 67px;\n    position: relative;\n    bottom: 1em;\n    border: 1px groove darkred;\n}\n\n.bootuns {\n    display: inline-block;\n     position: relative;\n    bottom: 1em;\n}\n\n.title {\n    background-color: white;\n    display: inline-block;\n    position: relative;\n    bottom: 2em;\n    border-radius: 3px;\n    border: 1px groove darkred;\n    width: 100px;\n    text-align: center;\n    height: 67px;\n}\n\n.hrtbutton { \n    background: #f0f0f0 url('http://www.clker.com/cliparts/u/c/7/0/b/L/white-heart-md.png');\n    background-position: 8px 8px;\n    background-repeat: no-repeat;\n}\n\n.sawng {\n    margin-bottom: 0px;\n    background-color: white;\n    width: 300px;\n    overflow: scroll;\n    white-space: nowrap;\n    text-align: center;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n}\n\n.train {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    width: 100%;\n    max-height: 11.6%;\n    border-bottom: 1px groove lightslategray;\n    white-space: nowrap;\n    text-decoration: none;\n}\n\n#songlist {\n    display: inline-block;\n    width: 300px;\n    position: relative;\n    top: .4em;\n}\n\naudio:hover, audio:focus, audio:active {\n    box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n}\n\naudio {\n    -webkit-transition:all 0.5s linear;\n    transition:all 0.5s linear;\n    box-shadow: 2px 2px 4px 0px darkred;\n    border-radius:7px 7px 7px 7px ;\n}\n\nmd-list {\n    padding-top: 0px;\n}\n\n.bg {\n    background-color: ghostwhite;\n    opacity: .6;\n    width: 100%;\n    height: 100%;\n}\n\n#listwrap {\n    width: 45%;\n    height: 500px;\n    display: inline-block;\n    margin-top: 7%;\n    white-space: nowrap;\n    overflow: scroll;\n    margin-left:33%;\n    border: groove;\n    border-color: darkred;\n    border-radius: 10px;\n    position: fixed;\n}\n\n.h5a {\n  position: relative;\n  top: 10px;\n}\n\n.fav-heart{\n  height: 56px;\n  width: 58px;\n  position: relative;\n  bottom: 4px;\n  border: groove;\n  border-color: darkgrey;\n  cursor: pointer;\n  background-color: darkred;\n}\n\n.fav-heart:hover {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    background-color: green;\n}\n\n.add-song-btn {\n  border: groove;\n  border-color: darkgray;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  -webkit-filter: blur(0.4px);\n          filter: blur(0.4px);\n  background-color: darkred;\n  line-height: 54px;\n  position: relative;\n  bottom: 3px;\n}\n\n.add-song-btn:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.audio-container {\n  bottom: 2em;\n  margin-top: -2px;\n}\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ".song {\n  cursor: pointer;\n}\n\nul {\n  list-style-type: none;\n}\n\nli {\n  margin: 20px;\n  padding-left: 0px;\n  margin-left: -15px;\n}\n\n#sidebar-wrapper {\n  border-bottom-left-radius: 50px;\n  border-top-left-radius: 50px;\n  width: 150px;\n  border-top: groove;\n  border-left: groove;\n  border-bottom: groove;\n  border-color: darkred;\n  height: 99.99%;\n  display: inline;\n  opacity: .7;\n  background-color: ghostwhite;\n  border-width: 2px;\n}\n\n#wrapper {\n  display: inline;\n  position: fixed;\n}\n\n#name {\n  margin-left: 10%;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  border-bottom: groove;\n  border-color: darkred;\n  color: darkred;\n}\n\n.yuriyisgay {\n  display: inline-block;\n  width:20%;\n  margin-left: 2%;\n  margin-top: 0.5%;\n  opacity: .8;\n  border-radius: 20px;\n  border: groove;\n  border-color: darkred;\n  border-width: 1px;\n  position: fixed;\n}\n\n.selected-song {\n  margin-bottom: 5px;\n}\n\n.inp {\n  margin: 3px;\n}\n\n.login {\n   margin-top: 1%;\n   margin-left: 1px;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n}\n\n.login:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n#slist {\n    overflow: scroll;\n    width: 100%;\n    max-height: 9.8%;\n    white-space: nowrap;\n    text-decoration: none;\n}\n\n.searches {\n  display: inline-block;\n  width:20%;\n  margin-left: 2%;\n  margin-top: 27%;\n  opacity: .8;\n  border-radius: 20px;\n  border: groove;\n  border-color: darkred;\n  border-width: 1px;\n  position: fixed;\n  padding: 1.5em;\n}\n\n.loadinggif {\n    width: 15%;\n    height: 25%;\n    display: inline-block;\n    margin-top: 19%;\n    margin-left:47%;\n}\n\n.search {\n   margin-left: 18%;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n}\n\n.search:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.logout {\n    margin-top: 200%;\n   margin-left: 14%;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n}\n\n.logout:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.song {\n  cursor: pointer;\n  border-bottom: 1px ridge grey;\n  margin-bottom: 1px;\n}\n\n.x {\n  display: inline-block;\n  margin-left: 20%;\n  margin-top: 27.5%;\n  opacity: .8;\n  border-radius: 20px;\n  overflow: hidden;\n  border-width: 1px;\n  position: fixed;\n}\n\n.login2 {\n  margin-top: 1%;\n   margin-left: 1px;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n   display: inline-block;\n}\n\n.login2:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.tagsearch {\n  height: 20px;\n  width: 45%;\n  border-radius: 5px;\n  margin-left: 6%;\n}\n\n.bground {\n  background-image: url('../../assets/giphy-1.gif');\n    background-size: cover;\n    min-width: 400px;\n    min-height: 762px;\n    background-repeat: no-repeat;\n}\n\n.get-fav-btns {\n  border: groove;\n  border-color: darkgray;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  -webkit-filter: blur(0.4px);\n          filter: blur(0.4px);\n  background-color: darkred;\n\n  position: absolute;\n  left: 50%;\n  top: 50px;\n}\n\n.get-fav-btns:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.md-ripple-background:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.return-to-trains-btn {\n  float: right;\n}\n\n#addSongView {\n  margin-top: 1%;\n}"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes dropHeader {\n    0% {\n        -webkit-transform: translateY(-250%);\n                transform: translateY(-250%);\n    }\n    100% {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes dropHeader {\n    0% {\n        -webkit-transform: translateY(-250%);\n                transform: translateY(-250%);\n    }\n    100% {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n.killme {\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n\n    -webkit-animation-name: dropHeader;\n\n            animation-name: dropHeader;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  \n    background-color: white;\n    margin-top: 10%;\n    border-radius: 25px;\n    border: groove;\n   border-color: darkgray;\n      -webkit-filter: blur(0.3px);\n              filter: blur(0.3px);\n\n   \n}\n\n.login {\n    margin-right: 30px;\n    border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n}\n\n.login:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ".background {\n    background-image: url('https://media.giphy.com/media/tKX6FNU9UGwF2/giphy.gif');\n    background-size: cover;\n    min-width: 400px;\n    min-height: 762px;\n    background-repeat: no-repeat;\n    text-align: center;\n\n}\n\n.login1 {\n   margin-top: 3%;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.7px);\n           filter: blur(0.7px);\n   background-color: darkred;\n\n}\n\n.login1:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.login {\n   margin-top: 3%;\n   margin-left: 5px;\n   border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.7px);\n           filter: blur(0.7px);\n   background-color: darkred;\n}\n\n.login:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes dropHeader {\n    0% {\n        -webkit-transform: translateY(-250%);\n                transform: translateY(-250%);\n    }\n    100% {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes dropHeader {\n    0% {\n        -webkit-transform: translateY(-250%);\n                transform: translateY(-250%);\n    }\n    100% {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n.signup {\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n\n    -webkit-animation-name: dropHeader;\n\n            animation-name: dropHeader;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  \n    background-color: white;\n    margin-top: 10%;\n    border-radius: 25px;\n    border: groove;\n   border-color: darkgray;\n   -webkit-filter: blur(0.3px);\n           filter: blur(0.3px);\n   \n}\n\n.login {\n    margin-right: 30px;\n    border: groove;\n   border-color: darkgray;\n   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n   -webkit-filter: blur(0.4px);\n           filter: blur(0.4px);\n   background-color: darkred;\n}\n\n.login:hover {\n  background-color: red;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = ".trainImg {\n    max-width: 7%;\n    max-height: 2.6em;\n    position: relative;\n    bottom: 1em;\n    border: 1px groove darkred;\n}\n\n.bootuns {\n    display: inline-block;\n     position: relative;\n    bottom: 1em;\n}\n\n.ttitle {\n    background-color: white;\n    display: inline-block;\n    position: relative;\n    bottom: 1em;\n    border-radius: 3px;\n    border: 1px groove darkred;\n}\n\n.sawng {\n    margin-bottom: 0px;\n    background-color: white;\n    width: 52.8%;\n    overflow: scroll;\n    white-space: nowrap;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n}\n\n.train {\n    overflow: scroll;\n    width: 100%;\n    max-height: 13.6%;\n    border-bottom: 1px groove lightslategray;\n    white-space: nowrap;\n    text-decoration: none;\n}\n\n#songlist {\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    top: .4em;\n}\n\naudio:hover, audio:focus, audio:active\n{\nbox-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);\n-webkit-transform: scale(1.05);\ntransform: scale(1.05);\n}\n\naudio\n{\n-webkit-transition:all 0.5s linear;\ntransition:all 0.5s linear;\nbox-shadow: 2px 2px 4px 0px darkred;\nborder-radius:7px 7px 7px 7px ;\n}\n\nmd-list {\n    padding-top: 0px;\n}\n\n.bg {\n    background-color: ghostwhite;\n    opacity: .6;\n    width: 100%;\n    height: 100%;\n}\n\n#listwrap {\n    width: 45%;\n    height: 500px;\n    display: inline-block;\n    margin-top: 7%;\n    white-space: nowrap;\n    overflow: scroll;\n    margin-left:33%;\n    border: groove;\n    border-color: darkred;\n    border-radius: 10px;\n    position: fixed;\n}\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<md-list id=\"listwrap\">\n  <span class='bg'> </span>\n  <md-list *ngFor='let train of trains; let idx = index; trackBy: trackByFn' class='train'>\n      <img class='trainImg' [src]='train.trainImg'><!--\n      --><span class='title'><h5 class='h5a'>{{train.trainName}}</h5></span><!--\n      --><div class='bootuns'><!--\n          --><button (click)=\"addSongToTrain(idx)\" md-raised-button color='warn' class=\"add-song-btn\"> Add Song </button><!--\n          --><img (click)=\"favTrain(dx)\" src=\"http://www.clker.com/cliparts/u/c/7/0/b/L/white-heart-md.png\" class=\"fav-heart\"><!--\n      --></div><!--\n      --><div *ngFor='let song of train.songs' id=\"songlist\">\n          <div class=\"audio-container\">\n            <p class='sawng'><em>{{song.title}}</em> by {{song.artist}}</p>\n            <audio controls='controls' [src]='song.songSourcePath'></audio>\n          </div>\n      </div>\n          \n  </md-list>\n</md-list>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div class='bground'>\n  <div *ngIf=\"testForGabe\">\n  \n  <div *ngFor=\"let atv of addTrainView;\">\n    <div *ngIf=\"atv\">\n        <md-card class='yuriyisgay'>\n            <md-input-container width=\"100%\">\n            <textarea md-input placeholder=\"Train Name\" [(ngModel)]=\"trainName\"></textarea>\n            </md-input-container>\n\n            <md-input-container width=\"100%\">\n            <textarea md-input placeholder=\"Train Image Url\" [(ngModel)]=\"trainImgPath\"></textarea>\n            </md-input-container>\n\n            <md-input-container width=\"100%\">\n            <textarea md-input placeholder=\"Train Tags\" [(ngModel)]=\"trainTags\"></textarea>\n            </md-input-container>\n\n            <div class=\"selected-song\" id=\"slist\">\n                <h4>\n                {{selectedTrack.artist}} {{selectedTrack.ph}}\n                {{selectedTrack.song}}\n                </h4>\n            </div>\n\n            <button md-raised-button color='warn' routerLink=\"\" (click)=\"createTrain()\" class='login' > Submit </button>\n\n        </md-card>\n\n        <md-card class='searches'>\n            <input placeholder=\"Search for song\" [(ngModel)]=\"songToSearch\">\n                <button md-raised-button color='warn' class='login2' (click)=\"searchForSong()\">Search</button>\n                <md-list id=\"slist\">\n                <div class=\"song\" (click)=\"firstSongInTrain(i)\" *ngFor=\"let songResult of songResults; let i = index; trackBy: trackByFn\">\n                    <p>{{songResult.artist}}</p>\n                    <p>{{songResult.song}}</p>\n                </div>\n                </md-list>\n        </md-card>\n    </div>\n \n    <div *ngIf=\"!atv\">\n        <md-card class='searches' id='addSongView'>\n            <button class=\"return-to-trains-btn btn btn-danger\" (click)=\"returnToTrains()\">x</button>\n            <h4>Track to recommend</h4>\n            <h4>-----------------------</h4>\n            <h4>{{recommendedTrack.song}}</h4>\n            <input placeholder=\"Search for song\" [(ngModel)]=\"songToSearch\">\n                <p>\n                <button md-raised-button color='warn' class='login2' (click)=\"recommendTrack()\" *ngIf=\"recommendedTrack\">Add Song</button>\n                <button md-raised-button color='warn' class='login2' (click)=\"searchForSong()\">Search</button>\n                </p>\n                <md-list id=\"slist\">\n                <div class=\"song\" (click)=\"trackToRecommend(i)\" *ngFor=\"let songResult of songResults; let i = index; trackBy: trackByFn\">\n                    <p>{{songResult.artist}}</p>\n                    <p>{{songResult.song}}</p>\n                </div>\n                </md-list>\n        </md-card>\n    </div>\n</div>\n<img class='loadinggif' src='http://khztkd.ir/Upload/Loading%20(2).gif' *ngIf='!listrendered'>\n\n<button md-raised-button color='warn' class=\"get-fav-btns\" (click)='getFavTrains()' (click)=\"returnToTrains()\"> Favorited Songs </button>\n\n<app-fav-trains *ngIf=\"listrendered\"></app-fav-trains>\n\n<div id=\"wrapper\">\n        <!-- Sidebar -->\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\" id='name'>\n                        T r a i n R e c c\n                    </a>\n                </li>\n                <li>\n                    <input placeholder=\"Search tags\" [(ngModel)]=\"tagSearch\" class='tagsearch'>\n                    <button md-raised-button color='warn' routerLink=\"\" class='search'  (click)='search()'> Search </button>\n                </li>\n                <!--<li>-->\n                    <button md-raised-button color='warn' routerLink=\"login\" class='logout' (click)='logout()'> Logout </button>\n                <!--</li>-->\n            </ul>\n        </div>\n        <!-- /#sidebar-wrapper -->\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<md-card  class='killme'>\n\n  <table style=\"width: 100%\" cellspacing=\"3\"><tr>\n    <td><md-input-container style=\"width: 100%\">\n      <input required md-input [(ngModel)]='loginUsername' placeholder=\"Username\">\n    </md-input-container></td>\n    <td><md-input-container style=\"width: 100%\">\n      <input required md-input type=\"password\" [(ngModel)]='loginPassword' placeholder=\"Password\">\n    </md-input-container></td>\n  </tr></table>\n\n  <p>\n    <button md-raised-button color='warn' (click)='submitLogin()'  routerLink=\"\" class='login' > LOGIN </button>\n  </p>\n\n</md-card>"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<div class='background' >\n  <button md-raised-button color='warn' routerLink=\"/login/signup\" class='login1' > Register </button>\n  <button md-raised-button color='warn' routerLink=\"/login/form\" class='login' > Hop-on! </button>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<md-card  class='signup'>\n\n  <table style=\"width: 100%\" cellspacing=\"3\"><tr>\n    <td><md-input-container style=\"width: 100%\">\n      <input required md-input [(ngModel)]='inputUsername' placeholder=\"Username\">\n    </md-input-container></td>\n    <td><md-input-container style=\"width: 100%\">\n      <input required md-input type=\"password\" [(ngModel)]='inputPassword' placeholder=\"Password\">\n    </md-input-container></td>\n  </tr></table>\n\n  <p>\n    <button md-raised-button color='warn' (click)='submitSignup()' routerLink=\"/login/form\" class='login' > SIGN UP </button>\n  </p>\n\n</md-card>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<p>\n  search-trains works!\n</p>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<p>\n  searchpage works!\n</p>\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(483);


/***/ })

},[856]);
//# sourceMappingURL=main.bundle.map