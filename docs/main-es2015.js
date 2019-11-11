(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/components/navigation/navigation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/components/navigation/navigation.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row align=\"right\">\r\n    <button mat-button color=\"primary\" [routerLink]=\"['login']\">Iniciar sesión</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/pages/landing/landing.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/pages/landing/landing.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/pages/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/pages/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <!--User-->\n      <mat-form-field class=\"col mb-1\">\n        <mat-label>Usuario</mat-label>\n        <mat-icon matPrefix class=\"mr-2\" color=\"primary\">account_circle</mat-icon>\n        <input matInput formControlName=\"username\">\n        <mat-error *ngIf=\"form.get('username').errors?.required\n                          &&( form.get('username').dirty || form.get('username').touched )\">\n          Este campo es requerido.\n        </mat-error>\n      </mat-form-field>\n      <!--Password-->\n      <mat-form-field class=\"col mb-3\">\n        <mat-label>Contraseña</mat-label>\n        <mat-icon matPrefix class=\"mr-2\" color=\"primary\">lock</mat-icon>\n        <input matInput formControlName=\"password\" type=\"password\">\n        <mat-error *ngIf=\"form.get('password').errors?.required\n                          &&( form.get('password').dirty || form.get('password').touched )\">\n          Este campo es requerido.\n        </mat-error>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions align=\"right\">\n    <button mat-stroked-button (click)=\"login()\" [disabled]=\"disableBtn\" color=\"primary\">Iniciar Sesión</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inventory/components/article-card/article-card.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inventory/components/article-card/article-card.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z1\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      {{article.name | slice:0:19}}<span *ngIf=\"article.name.length > 19\">&nbsp;[...]</span>\r\n    </mat-card-title>\r\n    <mat-card-subtitle>\r\n      {{article.dateAdded | date}}\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <img mat-card-image [src]=\"article.photo\"/>\r\n    <strong>Descripción:</strong>&nbsp;{{article.description | slice:0:85}}<span\r\n    *ngIf=\"article.description.length > 85\">&nbsp;[...]</span><br>\r\n    <strong>Costo:</strong>&nbsp;{{article.cost | currency}}<br>\r\n    <strong>En existencia:</strong>&nbsp;{{article.stock}}\r\n  </mat-card-content>\r\n  <mat-card-actions align=\"right\">\r\n    <button mat-stroked-button (click)=\"editArticle()\">Editar</button>\r\n    <button mat-stroked-button color=\"warn\" (click)=\"deleteArticle()\">Eliminar</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inventory/components/article-form/article-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inventory/components/article-form/article-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n  <mat-form-field>\r\n    <mat-label>Nombre</mat-label>\r\n    <input matInput required formControlName=\"name\">\r\n    <mat-error *ngIf=\"form.get('name').errors?.required\r\n                          &&( form.get('name').dirty || form.get('name').touched )\">\r\n      Este campo es requerido.\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Descripción</mat-label>\r\n    <input matInput required formControlName=\"description\">\r\n    <mat-error *ngIf=\"form.get('description').errors?.required\r\n                          &&( form.get('description').dirty || form.get('description').touched )\">\r\n      Este campo es requerido.\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Costo</mat-label>\r\n    <input matInput required formControlName=\"cost\">\r\n    <mat-error *ngIf=\"form.get('cost').errors?.required\r\n                          &&( form.get('cost').dirty || form.get('cost').touched )\">\r\n      Este campo es requerido.\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Cantidad</mat-label>\r\n    <input matInput required formControlName=\"stock\">\r\n    <mat-error *ngIf=\"form.get('stock').errors?.required\r\n                          &&( form.get('stock').dirty || form.get('stock').touched )\">\r\n      Este campo es requerido.\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <button mat-stroked-button (click)=\"submit()\" [disabled]=\"disableBtn\">{{title}}</button>\r\n  <button mat-stroked-button (click)=\"cancel()\" color=\"warn\">Cancelar</button>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inventory/dialogs/article-dialog/article-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inventory/dialogs/article-dialog/article-dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{title}} artículo</h4>\r\n<app-article-form [input]=\"article\" (close)=\"close()\" (output)=\"submit($event)\"></app-article-form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inventory/pages/stock/stock.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inventory/pages/stock/stock.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <button mat-button color=\"primary\" (click)=\"addArticle()\">\r\n      <mat-icon>add</mat-icon>&nbsp;Agregar Artículo\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[12, 24]\" class=\"mat-elevation-z1\" showFirstLastButtons></mat-paginator>\r\n<mat-progress-bar *ngIf=\"!dataSource\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n<mat-grid-list [cols]=\"breakpoint\" rowHeight=\"500px\" (window:resize)=\"onResize($event)\">\r\n  <mat-grid-tile *ngFor=\"let article of observable | async\">\r\n    <app-article-card [article]=\"article\" (edit)=\"editArticle($event)\"\r\n                      (delete)=\"deleteArticle($event)\"></app-article-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/warning-dialog/warning-dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/warning-dialog/warning-dialog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{data.title}}</h4>\n<h6 *ngIf=\"data.description\">{{data.description}}</h6>\n<button mat-stroked-button (click)=\"close(true)\">Aceptar</button>\n<button mat-stroked-button color=\"warn\" (click)=\"close(false)\">Cancelar</button>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.routes */ "./src/app/home/home.routes.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _inventory_inventory_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory/inventory.routes */ "./src/app/inventory/inventory.routes.ts");








const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: _home_home_routes__WEBPACK_IMPORTED_MODULE_5__["HomeRoutes"]
    },
    {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__["InventoryComponent"],
        children: _inventory_inventory_routes__WEBPACK_IMPORTED_MODULE_7__["InventoryRoutes"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/token.interceptor */ "./src/app/core/interceptors/token.interceptor.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventory/inventory.module */ "./src/app/inventory/inventory.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");







// Guardias.


// Interceptores.


// Módulos.



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_12__["InventoryModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
        ],
        providers: [
            _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/app-settings.config.ts":
/*!*********************************************!*\
  !*** ./src/app/core/app-settings.config.ts ***!
  \*********************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
const AppSettings = {
    APIEndpoint: 'http://localhost:8080/api/v1/',
    Options: {
        headers: httpHeaders
    }
};


/***/ }),

/***/ "./src/app/core/authentication/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/authentication/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_settings_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-settings.config */ "./src/app/core/app-settings.config.ts");







let AuthService = class AuthService {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    get isLoggedIn() {
        return this.loggedIn$.asObservable();
    }
    getToken() {
        return localStorage.getItem('token') ? localStorage.getItem('token') : '';
    }
    login(body) {
        return this.httpClient.post(`${_app_settings_config__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].APIEndpoint}/login.php`, body, _app_settings_config__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].Options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res.token) {
                this.loggedIn$.next(true);
                localStorage.setItem('token', res.token);
                this.router.navigate(['/inventory']);
            }
            return { status: 'ok' };
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigate(['login']);
                return false;
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401 || err.status === 403) {
                this.authService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/token.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const authService = this.injector.get(_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        const tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/home/components/navigation/navigation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/components/navigation/navigation.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/components/navigation/navigation.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>`
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/home/pages/landing/landing.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/home/pages/login/login.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/home/components/navigation/navigation.component.ts");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.routes */ "./src/app/home/home.routes.ts");







// Pages



// Routes

let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_home_routes__WEBPACK_IMPORTED_MODULE_10__["HomeRoutes"])
        ],
        exports: [
            _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home.routes.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.routes.ts ***!
  \*************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/home/pages/landing/landing.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/home/pages/login/login.component.ts");


const HomeRoutes = [
    {
        path: '',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/home/pages/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/pages/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/pages/landing/landing.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LandingComponent);



/***/ }),

/***/ "./src/app/home/pages/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/pages/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 10% auto;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlcy9sb2dpbi9EOlxcUmVwb3NpdG9yaWVzXFxib2lsZXJwbGF0ZS9zcmNcXGFwcFxcaG9tZVxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTAlIGF1dG87XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/pages/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.disableBtn = true;
        this.formSubscription = this.form.valueChanges.subscribe(() => {
            this.disableBtn = !this.form.valid;
        });
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }
    login() {
        this.disableBtn = true;
        this.authService.login(this.form.value).pipe().subscribe(() => {
        }, error => console.error(error));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/home/pages/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/inventory/components/article-card/article-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/inventory/components/article-card/article-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-height: 250px;\n  max-width: 250px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2NvbXBvbmVudHMvYXJ0aWNsZS1jYXJkL0Q6XFxSZXBvc2l0b3JpZXNcXGJvaWxlcnBsYXRlL3NyY1xcYXBwXFxpbnZlbnRvcnlcXGNvbXBvbmVudHNcXGFydGljbGUtY2FyZFxcYXJ0aWNsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9hcnRpY2xlLWNhcmQvYXJ0aWNsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiIsImltZyB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/inventory/components/article-card/article-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory/components/article-card/article-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function() { return ArticleCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleCardComponent = class ArticleCardComponent {
    constructor() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    editArticle() {
        this.edit.emit(this.article);
    }
    deleteArticle() {
        this.delete.emit(this.article._id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleCardComponent.prototype, "article", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleCardComponent.prototype, "edit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleCardComponent.prototype, "delete", void 0);
ArticleCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-card',
        template: __webpack_require__(/*! raw-loader!./article-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/inventory/components/article-card/article-card.component.html"),
        styles: [__webpack_require__(/*! ./article-card.component.scss */ "./src/app/inventory/components/article-card/article-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArticleCardComponent);



/***/ }),

/***/ "./src/app/inventory/components/article-form/article-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/inventory/components/article-form/article-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  min-width: 750px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2NvbXBvbmVudHMvYXJ0aWNsZS1mb3JtL0Q6XFxSZXBvc2l0b3JpZXNcXGJvaWxlcnBsYXRlL3NyY1xcYXBwXFxpbnZlbnRvcnlcXGNvbXBvbmVudHNcXGFydGljbGUtZm9ybVxcYXJ0aWNsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9hcnRpY2xlLWZvcm0vYXJ0aWNsZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9jb21wb25lbnRzL2FydGljbGUtZm9ybS9hcnRpY2xlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBtaW4td2lkdGg6IDc1MHB4O1xyXG59XHJcbiIsImZvcm0ge1xuICBtaW4td2lkdGg6IDc1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/inventory/components/article-form/article-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/inventory/components/article-form/article-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFormComponent", function() { return ArticleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ArticleFormComponent = class ArticleFormComponent {
    constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = 'Editar';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
        this.disableBtn = true;
        this.input ? this.patchForm() : this.title = 'Agregar';
        this.formSubscription = this.form.valueChanges.subscribe(() => this.disableBtn = !this.form.valid);
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }
    cancel() {
        this.close.emit();
    }
    submit() {
        this.output.emit(this.form.value);
    }
    patchForm() {
        this.form.patchValue({
            name: this.input.name,
            description: this.input.description,
            cost: this.input.cost,
            stock: this.input.stock,
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleFormComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleFormComponent.prototype, "output", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArticleFormComponent.prototype, "close", void 0);
ArticleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-form',
        template: __webpack_require__(/*! raw-loader!./article-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/inventory/components/article-form/article-form.component.html"),
        styles: [__webpack_require__(/*! ./article-form.component.scss */ "./src/app/inventory/components/article-form/article-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArticleFormComponent);



/***/ }),

/***/ "./src/app/inventory/dialogs/article-dialog/article-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/inventory/dialogs/article-dialog/article-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ArticleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDialogComponent", function() { return ArticleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/inventory/services/inventory.service.ts");




let ArticleDialogComponent = class ArticleDialogComponent {
    constructor(article, dialogRef, inventoryService) {
        this.article = article;
        this.dialogRef = dialogRef;
        this.inventoryService = inventoryService;
    }
    ngOnInit() {
        this.title = this.article ? 'Editar' : 'Agregar';
    }
    addArticle() {
        this.inventoryService.addArticle(this.formData).subscribe((newArticle) => this.dialogRef.close(newArticle), error => console.log(error));
    }
    close() {
        this.dialogRef.close();
    }
    editArticle() {
        this.inventoryService.editArticle(this.article._id, this.formData).subscribe((editedArticle) => this.dialogRef.close(editedArticle), error => console.error(error));
    }
    submit(formData) {
        this.formData = formData;
        this.title === 'Agregar' ? this.addArticle() : this.editArticle();
    }
};
ArticleDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] }
];
ArticleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-dialog',
        template: __webpack_require__(/*! raw-loader!./article-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/inventory/dialogs/article-dialog/article-dialog.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
], ArticleDialogComponent);



/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InventoryComponent = class InventoryComponent {
    constructor() {
    }
};
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: '<router-outlet></router-outlet>'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InventoryComponent);



/***/ }),

/***/ "./src/app/inventory/inventory.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/article-card/article-card.component */ "./src/app/inventory/components/article-card/article-card.component.ts");
/* harmony import */ var _components_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/article-form/article-form.component */ "./src/app/inventory/components/article-form/article-form.component.ts");
/* harmony import */ var _dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/article-dialog/article-dialog.component */ "./src/app/inventory/dialogs/article-dialog/article-dialog.component.ts");
/* harmony import */ var _pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/stock/stock.component */ "./src/app/inventory/pages/stock/stock.component.ts");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/inventory.service */ "./src/app/inventory/services/inventory.service.ts");
/* harmony import */ var _inventory_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inventory.routes */ "./src/app/inventory/inventory.routes.ts");









// Components


// Dialogs

// Pages

// Providers

// Routes

let InventoryModule = class InventoryModule {
};
InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"],
            _dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDialogComponent"],
            _components_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_10__["ArticleFormComponent"],
            _inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
            _pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_12__["StockComponent"]
        ],
        entryComponents: [
            _dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDialogComponent"],
            _components_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_10__["ArticleFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_inventory_routes__WEBPACK_IMPORTED_MODULE_14__["InventoryRoutes"]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        exports: [
            _components_article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"],
            _dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDialogComponent"],
            _components_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_10__["ArticleFormComponent"],
            _inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
            _pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_12__["StockComponent"]
        ],
        providers: [_services_inventory_service__WEBPACK_IMPORTED_MODULE_13__["InventoryService"]]
    })
], InventoryModule);



/***/ }),

/***/ "./src/app/inventory/inventory.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.routes.ts ***!
  \***********************************************/
/*! exports provided: InventoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutes", function() { return InventoryRoutes; });
/* harmony import */ var _pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/stock/stock.component */ "./src/app/inventory/pages/stock/stock.component.ts");

const InventoryRoutes = [
    {
        path: '',
        component: _pages_stock_stock_component__WEBPACK_IMPORTED_MODULE_0__["StockComponent"]
    }
];


/***/ }),

/***/ "./src/app/inventory/pages/stock/stock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inventory/pages/stock/stock.component.ts ***!
  \**********************************************************/
/*! exports provided: StockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockComponent", function() { return StockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/inventory/services/inventory.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/article-dialog/article-dialog.component */ "./src/app/inventory/dialogs/article-dialog/article-dialog.component.ts");
/* harmony import */ var _shared_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/warning-dialog/warning-dialog.component */ "./src/app/shared/warning-dialog/warning-dialog.component.ts");






let StockComponent = class StockComponent {
    constructor(changeDetectorRef, dialog, inventoryService, snackBar) {
        this.changeDetectorRef = changeDetectorRef;
        this.dialog = dialog;
        this.inventoryService = inventoryService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 1220) ? 3 : 4;
        this.subscription = this.inventoryService.getArticles().subscribe((data) => {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.observable = this.dataSource.connect();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onResize(event) {
        const innerWidth = event.target.innerWidth;
        this.breakpoint = this.breakpoint = (innerWidth <= 900) ? 2 : (innerWidth >= 900 && innerWidth <= 1220) ? 3 : 4;
    }
    addArticle() {
        const dialogRef = this.dialog.open(_dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ArticleDialogComponent"], { disableClose: true });
        dialogRef.afterClosed().subscribe((newArticle) => {
            if (newArticle) {
                this.addToArray(newArticle);
            }
        });
    }
    addToArray(article) {
        const data = this.dataSource.data;
        data.push(article);
        this.dataSource.data = data;
        this.snackBar.open('Se agregó el artículo correctamente.', 'OK', { verticalPosition: 'top' });
    }
    editArticle(article) {
        const dialogRef = this.dialog.open(_dialogs_article_dialog_article_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ArticleDialogComponent"], { data: article, disableClose: true });
        dialogRef.afterClosed().subscribe((editedArticle) => {
            if (editedArticle) {
                this.updateFromArray(editedArticle);
            }
        }, error => console.error(error));
    }
    deleteArticle(_id) {
        const dialogRef = this.dialog.open(_shared_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_5__["WarningDialogComponent"], { data: { title: '¿Seguro que desea eliminar el artículó?', description: 'Esta acción no se puede deshacer.' } });
        dialogRef.afterClosed().subscribe((answer) => {
            if (answer) {
                this.inventoryService.deleteArticle(_id).subscribe(() => this.removeFromArray(_id), error => console.error(error));
            }
        });
    }
    removeFromArray(_id) {
        this.dataSource.data = this.dataSource.data.filter(article => article._id !== _id);
        this.snackBar.open('Se eliminó el artículo correctamente.', 'OK', { verticalPosition: 'top' });
    }
    updateFromArray(article) {
        this.dataSource.data.forEach((element) => {
            if (element._id === article._id) {
                element = article;
                this.snackBar.open('Se editó el artículo correctamente.', 'OK', { verticalPosition: 'top' });
            }
        });
    }
};
StockComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], StockComponent.prototype, "paginator", void 0);
StockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: __webpack_require__(/*! raw-loader!./stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/inventory/pages/stock/stock.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _services_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], StockComponent);



/***/ }),

/***/ "./src/app/inventory/services/inventory.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/inventory/services/inventory.service.ts ***!
  \*********************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_app_settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/app-settings.config */ "./src/app/core/app-settings.config.ts");




let InventoryService = class InventoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.endpoint = `${_core_app_settings_config__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].APIEndpoint}articles.php`;
    }
    getArticles(_id) {
        if (_id) {
            return this.httpClient.get(`${this.endpoint}?id=${_id.$oid}`);
        }
        else {
            return this.httpClient.get(`${this.endpoint}`);
        }
    }
    addArticle(article) {
        return this.httpClient.post(this.endpoint, article, { headers: this.httpHeaders });
    }
    editArticle(_id, article) {
        console.log('Editar');
        return this.httpClient.put(`${this.endpoint}?_id=${_id.$oid}`, article, { headers: this.httpHeaders });
    }
    deleteArticle(_id) {
        return this.httpClient.delete(`${this.endpoint}?_id=${_id.$oid}`, { headers: this.httpHeaders });
    }
};
InventoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], InventoryService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warning-dialog/warning-dialog.component */ "./src/app/shared/warning-dialog/warning-dialog.component.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__["WarningDialogComponent"]
        ],
        entryComponents: [
            _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__["WarningDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ],
        exports: [
            _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_4__["WarningDialogComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/warning-dialog/warning-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/warning-dialog/warning-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: WarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialogComponent", function() { return WarningDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let WarningDialogComponent = class WarningDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close(answer) {
        this.dialogRef.close(answer);
    }
};
WarningDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
WarningDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warning-dialog',
        template: __webpack_require__(/*! raw-loader!./warning-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/warning-dialog/warning-dialog.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], WarningDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repositories\boilerplate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map