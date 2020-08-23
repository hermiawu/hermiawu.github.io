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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "./src/app/layout/home-layout/home-layout.component.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/web/resource.guard */ "./src/app/services/web/resource.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "./src/app/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _info_board_info_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-board/info-board.component */ "./src/app/info-board/info-board.component.ts");
/* harmony import */ var _roommate_list_roommate_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roommate-list/roommate-list.component */ "./src/app/roommate-list/roommate-list.component.ts");
/* harmony import */ var _home_setup_home_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-setup/home-setup.component */ "./src/app/home-setup/home-setup.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _resize_window_resize_window_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resize-window/resize-window.component */ "./src/app/resize-window/resize-window.component.ts");

















const routes = [
    {
        path: '',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
        children: [
            {
                path: '',
                component: _resize_window_resize_window_component__WEBPACK_IMPORTED_MODULE_14__["ResizeWindowComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Home' }
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Home' }
            },
            {
                path: 'logout',
                component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Logout' }
            },
            {
                path: 'chat',
                component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Chat' }
            },
            {
                path: 'board',
                component: _info_board_info_board_component__WEBPACK_IMPORTED_MODULE_10__["InfoBoardComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Info Board' }
            },
            {
                path: 'roomate',
                component: _roommate_list_roommate_list_component__WEBPACK_IMPORTED_MODULE_11__["RoommateListComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Roomate List' }
            },
        ]
    },
    {
        path: '',
        component: _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_6__["LoginLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                canActivate: [_services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'login' }
            },
            {
                path: 'signup',
                component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                canActivate: [_services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Sign Up' }
            },
            {
                path: 'setup',
                component: _home_setup_home_setup_component__WEBPACK_IMPORTED_MODULE_12__["HomeSetupComponent"],
                canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_web_resource_guard__WEBPACK_IMPORTED_MODULE_4__["ResourceGuard"]],
                data: { title: 'Home Setup' }
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'home-social';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/service.module */ "./src/app/services/service.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart-ngx-emoji.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "./src/app/layout/home-layout/home-layout.component.ts");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "./src/app/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bottom_tab_bottom_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bottom-tab/bottom-tab.component */ "./src/app/bottom-tab/bottom-tab.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roommate_list_roommate_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./roommate-list/roommate-list.component */ "./src/app/roommate-list/roommate-list.component.ts");
/* harmony import */ var _info_board_info_board_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./info-board/info-board.component */ "./src/app/info-board/info-board.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_setup_home_setup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home-setup/home-setup.component */ "./src/app/home-setup/home-setup.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./room-item/room-item.component */ "./src/app/room-item/room-item.component.ts");
/* harmony import */ var _resize_window_resize_window_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./resize-window/resize-window.component */ "./src/app/resize-window/resize-window.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
            _services_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_10__["EmojiModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_14__["HomeLayoutComponent"],
        _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_15__["LoginLayoutComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _bottom_tab_bottom_tab_component__WEBPACK_IMPORTED_MODULE_17__["BottomTabComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"],
        _roommate_list_roommate_list_component__WEBPACK_IMPORTED_MODULE_23__["RoommateListComponent"],
        _info_board_info_board_component__WEBPACK_IMPORTED_MODULE_24__["InfoBoardComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_25__["SignUpComponent"],
        _home_setup_home_setup_component__WEBPACK_IMPORTED_MODULE_26__["HomeSetupComponent"],
        _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeDialogComponent"],
        _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_28__["RoomItemComponent"],
        _resize_window_resize_window_component__WEBPACK_IMPORTED_MODULE_29__["ResizeWindowComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"], _services_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_10__["EmojiModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_14__["HomeLayoutComponent"],
                    _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_15__["LoginLayoutComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _bottom_tab_bottom_tab_component__WEBPACK_IMPORTED_MODULE_17__["BottomTabComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"],
                    _roommate_list_roommate_list_component__WEBPACK_IMPORTED_MODULE_23__["RoommateListComponent"],
                    _info_board_info_board_component__WEBPACK_IMPORTED_MODULE_24__["InfoBoardComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_25__["SignUpComponent"],
                    _home_setup_home_setup_component__WEBPACK_IMPORTED_MODULE_26__["HomeSetupComponent"],
                    _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeDialogComponent"],
                    _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_28__["RoomItemComponent"],
                    _resize_window_resize_window_component__WEBPACK_IMPORTED_MODULE_29__["ResizeWindowComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
                    _services_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_10__["EmojiModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bottom-tab/bottom-tab.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bottom-tab/bottom-tab.component.ts ***!
  \****************************************************/
/*! exports provided: BottomTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomTabComponent", function() { return BottomTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class BottomTabComponent {
}
BottomTabComponent.ɵfac = function BottomTabComponent_Factory(t) { return new (t || BottomTabComponent)(); };
BottomTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomTabComponent, selectors: [["app-bottom-tab"]], decls: 17, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "top-bar"], ["src", "../../assets/svgs/user.svg", 2, "height", "40px"], ["src", "../../assets/svgs/logo.svg", 2, "height", "64px"], ["mat-icon-button", "", "routerLink", "/logout", "color", "warn", "routerLinkActive", "active-item"], [1, "fas", "fa-bars", 2, "color", "#B2B6BB"], [1, "bottom-bar"], ["mat-icon-button", "", "routerLink", "/login", "routerLinkActive", "active-item"], [1, "fas", "fa-user", 2, "color", "#2C5F8D"], ["mat-icon-button", "", "routerLink", "/chat", "color", "warn", "routerLinkActive", "active-item"], [1, "fas", "fa-bell"], ["mat-icon-button", "", "routerLink", "/home", "routerLinkActive", "active-item", 2, "color", "#2C5F8D"], ["mat-icon-button", "", "routerLink", "/board", "color", "warn", "routerLinkActive", "active-item"], [1, "fas", "fa-comment-dots"], ["mat-icon-button", "", "routerLink", "/friends", "routerLinkActive", "active-item"], [1, "fas", "fa-users", 2, "color", "#2C5F8D"]], template: function BottomTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".bottom-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #BADCF6;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  position: relative;\n  top: 30px;\n  left: 0;\n  width: 100%;\n  background-color: #FFFFFF;\n}\n\n.active-item[_ngcontent-%COMP%] {\n  background-color: #2C5F8D !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS10YWIvYm90dG9tLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFBZSw2QkFBQTtFQUErQixtQkFBQTtFQUM5QyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDSixTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUdBOztBQUFBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUdKIiwiZmlsZSI6ImJvdHRvbS10YWIvYm90dG9tLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQURDRjY7XG4gIH1cblxuLnRvcC1iYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbnRvcDozMHB4O1xubGVmdDogMDtcbndpZHRoOiAxMDAlO1xuYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxufVxuXG4uYWN0aXZlLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzVGOEQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-tab',
                templateUrl: './bottom-tab.component.html',
                styleUrls: ['./bottom-tab.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 2, vars: 0, template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chat works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0L2NoYXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home-setup/home-setup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-setup/home-setup.component.ts ***!
  \****************************************************/
/*! exports provided: HomeSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSetupComponent", function() { return HomeSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../welcome-dialog/welcome-dialog.component */ "./src/app/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












function HomeSetupComponent_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSetupComponent_mat_list_item_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.decreaseItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeSetupComponent_mat_list_item_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.increaseItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.amount);
} }
class HomeSetupComponent {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.setupItems = [
            {
                name: 'Roomates',
                imagePath: '../../assets/svgs/roomates.svg',
                amount: 0
            },
            {
                name: 'Bedroom',
                imagePath: '../../assets/svgs/bedroom.svg',
                amount: 0
            },
            {
                name: 'Living Room',
                imagePath: '../../assets/svgs/livingroom.svg',
                amount: 0
            },
            {
                name: 'Kitchen Room',
                imagePath: '../../assets/svgs/kitchen.svg',
                amount: 0
            },
            {
                name: 'Laundry Room',
                imagePath: '../../assets/svgs/laundry.svg',
                amount: 0
            },
            {
                name: 'Other',
                imagePath: '../../assets/svgs/other_study.svg',
                amount: 0
            }
        ];
    }
    ngOnInit() {
        console.log('home');
        const userName = this.authService.getCurrentUser().name;
        this.dialog.open(_welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeDialogComponent"], {
            panelClass: 'welcome-dialog',
            data: { name: userName }
        });
    }
    increaseItem(item) {
        if (item.amount < 10) {
            item.amount++;
        }
    }
    decreaseItem(item) {
        if (item.amount > 0) {
            item.amount--;
        }
    }
}
HomeSetupComponent.ɵfac = function HomeSetupComponent_Factory(t) { return new (t || HomeSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomeSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeSetupComponent, selectors: [["app-home-setup"]], decls: 10, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["src", "../../assets/svgs/logo.svg", 1, "logo"], [1, "set-up"], ["fxLayout", "column", "fxLayoutAlign", "space-between"], ["class", "item", "fxLayout", "row", "fxLayoutAlign", "space-between", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 2, "padding-top", "7px"], ["mat-flat-button", "", "routerLink", "/home", 2, "background-color", "#BADCF6"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "item"], [1, "item-image", 3, "src"], [1, "caption"], [1, "fas", "fa-times", 2, "margin-left", "30px"], ["fxLayout", "row", "fxLayoutAlign", "start", 1, "number-input"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-minus"], [1, "number-box"], [1, "fas", "fa-plus"]], template: function HomeSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home Set Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeSetupComponent_mat_list_item_6_Template, 13, 3, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.setupItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".logo[_ngcontent-%COMP%] {\n  height: 74px;\n  margin-top: 42px;\n}\n\n.set-up[_ngcontent-%COMP%] {\n  height: calc(100vh - 300px);\n  margin-left: 10px;\n  margin-right: 10px;\n  overflow: auto;\n  background-color: rgba(138, 166, 179, 0.3);\n}\n\nmat-list-item.mat-list-item[_ngcontent-%COMP%] {\n  height: 115px;\n}\n\n.item-image[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.caption[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: -5px;\n  font-size: 15px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  background: #BADCF6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2V0dXAvaG9tZS1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUoiLCJmaWxlIjoiaG9tZS1zZXR1cC9ob21lLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGhlaWdodDogNzRweDtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuXG4uc2V0LXVwIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjOEFBNkIzLCAkYWxwaGE6IDAuMyk7XG4gICAgXG59XG5cbm1hdC1saXN0LWl0ZW0ubWF0LWxpc3QtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbn1cbi5pdGVtLWltYWdlIHtcbiAgICB3aWR0aDogOTBweDtcbn1cblxuXG4uY2FwdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI0JBRENGNjtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-setup',
                templateUrl: './home-setup.component.html',
                styleUrls: ['./home-setup.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/__ivy_ngcc__/fesm2015/angular-gridster2.js");
/* harmony import */ var _services_room_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/room/room.service */ "./src/app/services/room/room.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../room-item/room-item.component */ "./src/app/room-item/room-item.component.ts");








function HomeComponent_gridster_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-room-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r1.id);
} }
class HomeComponent {
    constructor(roomService) {
        this.roomService = roomService;
        this.dashboard = [];
        this.selectedRoomId = 0;
    }
    ngOnInit() {
        this.options = {
            itemChangeCallback: this.updateItems,
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridType"].Fit,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["CompactType"].None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            useTransformPositioning: true,
            mobileBreakpoint: 200,
            minCols: 4,
            maxCols: 4,
            minRows: 8,
            maxRows: 8,
            maxItemCols: 4,
            minItemCols: 1,
            maxItemRows: 6,
            minItemRows: 1,
            maxItemArea: 24,
            minItemArea: 1,
            defaultItemCols: 2,
            defaultItemRows: 2,
            fixedColWidth: 100,
            fixedRowHeight: 100,
            keepFixedHeightInMobile: true,
            keepFixedWidthInMobile: true,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true,
            },
            resizable: {
                enabled: false,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["DisplayGrid"].OnDragAndResize,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
        this.currentRooms = this.roomService.getAllRooms();
        console.log(this.currentRooms);
        this.currentRooms.forEach(room => {
            const gridItem = {
                cols: room.size,
                rows: room.size,
                y: 0,
                x: 0,
                id: room.id
            };
            this.dashboard.push(gridItem);
        });
    }
    updateItems(item, itemComponent) {
        console.log(item);
        this.selectedRoomId = item.id;
        // var updatedRoom = this.roomService.rooms[item.Id - 1];
        // updatedRoom.x = item.x;
        // updatedRoom.y = item.y;
        // console.log(updatedRoom);
        // this.roomService.updateRoom(updatedRoom);
    }
    changedOptions() {
        this.options.api.optionsChanged();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "home-area"], [1, "grid-area", 3, "options"], ["class", "grid-item", 3, "item", 4, "ngFor", "ngForOf"], [1, "grid-item", 3, "item"], [3, "id"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_gridster_item_2_Template, 2, 2, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboard);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _room_item_room_item_component__WEBPACK_IMPORTED_MODULE_5__["RoomItemComponent"]], styles: [".home-area {\n  margin-top: 40px;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 646px;\n  background-color: #B2B6BB;\n}\n\n.grid-area {\n  background-color: #B2B6BB;\n}\n\n.grid-item {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtYXJlYSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICBoZWlnaHQ6IDY0NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkI2QkI7XG59XG5cbi5ncmlkLWFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkI2QkI7XG59XG4uZ3JpZC1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4Oztcbn0iXX0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_room_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/info-board/info-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/info-board/info-board.component.ts ***!
  \****************************************************/
/*! exports provided: InfoBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoardComponent", function() { return InfoBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InfoBoardComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoBoardComponent.ɵfac = function InfoBoardComponent_Factory(t) { return new (t || InfoBoardComponent)(); };
InfoBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoBoardComponent, selectors: [["app-info-board"]], decls: 2, vars: 0, template: function InfoBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "info-board works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWJvYXJkL2luZm8tYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-board',
                templateUrl: './info-board.component.html',
                styleUrls: ['./info-board.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/home-layout/home-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bottom_tab_bottom_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bottom-tab/bottom-tab.component */ "./src/app/bottom-tab/bottom-tab.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeLayoutComponent {
}
HomeLayoutComponent.ɵfac = function HomeLayoutComponent_Factory(t) { return new (t || HomeLayoutComponent)(); };
HomeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLayoutComponent, selectors: [["app-home-layout"]], decls: 2, vars: 0, template: function HomeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bottom-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_bottom_tab_bottom_tab_component__WEBPACK_IMPORTED_MODULE_1__["BottomTabComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-layout',
                template: `
    <app-bottom-tab></app-bottom-tab>
    <router-outlet></router-outlet>
    `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/login-layout/login-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LoginLayoutComponent {
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(); };
LoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 1, vars: 0, template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-layout',
                template: `
    <router-outlet></router-outlet>
  `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function LoginComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username or password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.color = '#A4CAED';
    }
    ngOnInit() {
    }
    login() {
        this.loginInvalid = false;
        const correctUser = 'user';
        const correctPassword = '123456';
        if (this.username === correctUser && this.password === correctPassword) {
            this.router.navigate(['/home']);
        }
        else {
            this.loginInvalid = true;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 9, consts: [[1, "login-form"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], ["src", "../../assets/svgs/login.svg", 1, "profile"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["fxLayout", "row"], [1, "fas", "fa-envelope", "left-icon"], ["appearance", "outline"], ["matInput", "", "placeholder", "Username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-unlock-alt", "left-icon"], ["matInput", "", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAligh", "spacebetween", "fxLayoutGap", "15px"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", "routerLink", "/signup"], ["href", ""], [1, "svg"], ["src", "../../assets/svgs/logo.svg"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_12_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forget Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 66.9%;\n}\n\n.left-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  right: 10px;\n  font-size: 30px;\n  bottom: 10px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.profile[_ngcontent-%COMP%] {\n  height: 120px;\n  margin-top: 43px;\n  margin-bottom: 43px;\n}\n\n.svg[_ngcontent-%COMP%] {\n  margin-top: 75px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDY2LjklO1xuXG59XG5cbi5sZWZ0LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ucHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOiA0M3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDQzcHg7XG59XG5cbi5zdmcge1xuICAgIG1hcmdpbi10b3A6IDc1cHg7O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class LogoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.router.navigate(['login']);
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.scss']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_44__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_44__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_44__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/room.ts":
/*!********************************!*\
  !*** ./src/app/models/room.ts ***!
  \********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
class Room {
    constructor() {
        this.isBookable = false;
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/resize-window/resize-window.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resize-window/resize-window.component.ts ***!
  \**********************************************************/
/*! exports provided: ResizeWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeWindowComponent", function() { return ResizeWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResizeWindowComponent {
    constructor() { }
    ngOnInit() {
        window.open('https://hermiawu.github.io/', '', 'width=375 height=812');
    }
}
ResizeWindowComponent.ɵfac = function ResizeWindowComponent_Factory(t) { return new (t || ResizeWindowComponent)(); };
ResizeWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResizeWindowComponent, selectors: [["app-resize-window"]], decls: 0, vars: 0, template: function ResizeWindowComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNpemUtd2luZG93L3Jlc2l6ZS13aW5kb3cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resize-window',
                templateUrl: './resize-window.component.html',
                styleUrls: ['./resize-window.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/room-item/room-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/room-item/room-item.component.ts ***!
  \**************************************************/
/*! exports provided: RoomItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomItemComponent", function() { return RoomItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_room_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/room/room.service */ "./src/app/services/room/room.service.ts");



class RoomItemComponent {
    constructor(roomService) {
        this.roomService = roomService;
    }
    ngOnInit() {
        this.currentRoom = this.roomService.getRoomInfo(this.id);
        this.getImagePath(this.currentRoom.type);
        console.log(this.currentRoom);
    }
    getImagePath(roomType) {
        switch (roomType) {
            case 'bathroom':
                this.imagePath = '../../assets/svgs/bathroom.svg';
                break;
            case 'bedroom':
                this.imagePath = '../../assets/svgs/bedroom.svg';
                break;
            case 'kitchen':
                this.imagePath = '../../assets/svgs/kitchen.svg';
                break;
            case 'livingroom':
                this.imagePath = '../../assets/svgs/livingroom.svg';
                break;
            case 'laundry':
                this.imagePath = '../../assets/svgs/laundry.svg';
                break;
            default:
                break;
        }
    }
}
RoomItemComponent.ɵfac = function RoomItemComponent_Factory(t) { return new (t || RoomItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_room_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"])); };
RoomItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomItemComponent, selectors: [["app-room-item"]], inputs: { id: "id" }, decls: 2, vars: 1, consts: [[1, "room"], [3, "src"]], template: function RoomItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".room[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.room[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20taXRlbS9yb29tLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InJvb20taXRlbS9yb29tLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm9vbSBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-item',
                templateUrl: './room-item.component.html',
                styleUrls: ['./room-item.component.scss']
            }]
    }], function () { return [{ type: _services_room_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/roommate-list/roommate-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/roommate-list/roommate-list.component.ts ***!
  \**********************************************************/
/*! exports provided: RoommateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoommateListComponent", function() { return RoommateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoommateListComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoommateListComponent.ɵfac = function RoommateListComponent_Factory(t) { return new (t || RoommateListComponent)(); };
RoommateListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoommateListComponent, selectors: [["app-roommate-list"]], decls: 2, vars: 0, template: function RoommateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "roommate-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tbWF0ZS1saXN0L3Jvb21tYXRlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoommateListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roommate-list',
                templateUrl: './roommate-list.component.html',
                styleUrls: ['./roommate-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isLogin) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");



class AuthService {
    constructor() {
        this.isLogin = false;
        this.signedUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    inMemoryLogin(username, password) {
        if (username === this.signedUser.name && password === this.signedCredential) {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
    }
    inMemorySignUp(username, email, password) {
        this.signedCredential = password;
        this.signedUser = {
            userId: 1,
            name: username,
            profilePath: 'assets/svgs/profile1.svg',
            status: 'free',
            email: email,
            tags: ['kind']
        };
        this.isLogin = true;
    }
    getCurrentUser() {
        return this.signedUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/token.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/services/auth/token.interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TokenInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/home/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/home/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeService {
    constructor() { }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/room/room.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/room/room.service.ts ***!
  \***********************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/room */ "./src/app/models/room.ts");



class RoomService {
    constructor() {
        this.rooms = [
            {
                id: 1,
                type: 'laundry',
                name: 'laundry 1',
                isBookable: true,
                size: 1,
                x: 0,
                y: 0,
            },
            {
                id: 2,
                type: 'bedroom',
                name: 'Celine',
                isBookable: false,
                size: 2,
                x: 0,
                y: 0,
            },
            {
                id: 3,
                type: 'bedroom',
                name: 'bedroom 2',
                isBookable: false,
                size: 2,
                x: 0,
                y: 0,
            },
            {
                id: 4,
                type: 'bathroom',
                name: 'bathroom',
                isBookable: false,
                size: 1,
                x: 0,
                y: 0,
            },
            {
                id: 5,
                type: 'kitchen',
                name: 'kitchen',
                isBookable: true,
                size: 2,
                x: 0,
                y: 0,
            },
            {
                id: 6,
                type: 'livingroom',
                name: 'livingroom',
                isBookable: true,
                size: 3,
                x: 0,
                y: 0,
            }
        ];
    }
    getAllRooms() {
        return this.rooms;
    }
    getRoomInfo(id) {
        var findItem = new _models_room__WEBPACK_IMPORTED_MODULE_1__["Room"]();
        this.rooms.forEach(element => {
            if (id === element.id) {
                findItem = element;
            }
        });
        return findItem;
    }
    addRoom(room) {
        if (room.type === 'laundry' || room.type === 'bathroom') {
            room.size = 1;
            room.x = 0;
            room.y = 0;
        }
        else if (room.type === 'kitchen' || room.type === 'livingroom') {
            room.size = 3;
            room.x = 0;
            room.y = 0;
        }
        else {
            room.size = 2;
            room.x = 0;
            room.y = 0;
        }
        this.rooms.push(room);
    }
    updateRoom(room) {
        this.rooms.forEach(element => {
            if (room.id === element.id) {
                element = room;
            }
        });
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/service.module.ts":
/*!********************************************!*\
  !*** ./src/app/services/service.module.ts ***!
  \********************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _web_http_client_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/http-client-helper.service */ "./src/app/services/web/http-client-helper.service.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.service */ "./src/app/services/home/home.service.ts");
/* harmony import */ var _room_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room/room.service */ "./src/app/services/room/room.service.ts");
/* harmony import */ var _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/token.interceptor */ "./src/app/services/auth/token.interceptor.ts");









class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, providers: [
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _web_http_client_helper_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientHelperService"],
        _room_room_service__WEBPACK_IMPORTED_MODULE_6__["RoomService"],
        _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [
                    _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _web_http_client_helper_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientHelperService"],
                    _room_room_service__WEBPACK_IMPORTED_MODULE_6__["RoomService"],
                    _home_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _auth_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/web/http-client-helper.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/web/http-client-helper.service.ts ***!
  \************************************************************/
/*! exports provided: HttpClientHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientHelperService", function() { return HttpClientHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HttpClientHelperService {
    constructor() { }
}
HttpClientHelperService.ɵfac = function HttpClientHelperService_Factory(t) { return new (t || HttpClientHelperService)(); };
HttpClientHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpClientHelperService, factory: HttpClientHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/web/resource.guard.ts":
/*!************************************************!*\
  !*** ./src/app/services/web/resource.guard.ts ***!
  \************************************************/
/*! exports provided: ResourceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGuard", function() { return ResourceGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResourceGuard {
    canActivate(next, state) {
        return true;
    }
}
ResourceGuard.ɵfac = function ResourceGuard_Factory(t) { return new (t || ResourceGuard)(); };
ResourceGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourceGuard, factory: ResourceGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










class SignUpComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.color = '#A4CAED';
        this.hide = true;
        this.isFemale = true;
    }
    ngOnInit() {
    }
    selectMale() {
        this.isFemale = false;
    }
    selectFemale() {
        this.isFemale = true;
    }
    login() {
        this.router.navigate(['/home']);
    }
    signUp() {
        this.authService.inMemorySignUp(this.username, this.email, this.password);
        this.router.navigate(['/setup']);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 38, vars: 10, consts: [[1, "login-form"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["src", "../../assets/svgs/logo.svg", 1, "logo"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "16px"], ["mat-flat-button", "", "color", "accent", 1, "fab-button"], [1, "fas", "fa-arrow-left"], ["src", "../../assets/svgs/profilePic.svg"], [1, "fas", "fa-arrow-right"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["mat-icon-button", "", "color", "A4CAED", 3, "click"], [1, "fas", "fa-male"], [1, "fas", "fa-female"], ["fxLayout", "column", "fxLayoutAlign", "start center"], ["fxLayout", "row"], [1, "fas", "fa-user", "left-icon"], ["appearance", "outline"], ["matInput", "", "placeholder", "Username", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-envelope", "left-icon"], ["matInput", "", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-unlock-alt", "left-icon"], ["matInput", "", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "click"], [2, "width", "245px", "text-align", "center", "margin-top", "19px"], [2, "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxLayoutGap", "20px"], ["src", "../../assets/svgs/twitter.svg"], ["src", "../../assets/svgs/facebook.svg"], [1, "svg"], ["src", "../../assets/svgs/bottomPic.svg"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_11_listener() { return ctx.selectMale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_13_listener() { return ctx.selectFemale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_19_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_23_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_27_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_28_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OR Connect With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("male", !ctx.isFemale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("female", ctx.isFemale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 66.9%;\n}\n\n.left-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  right: 10px;\n  font-size: 30px;\n  bottom: 10px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 74px;\n  margin-top: 12px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top: 19px;\n}\n\n.svg[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.fab-button[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  min-width: 36px;\n  padding: 0 0px;\n}\n\n.male[_ngcontent-%COMP%] {\n  background-color: #A4CAED !important;\n  color: white !important;\n}\n\n.female[_ngcontent-%COMP%] {\n  background-color: #F89D70 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUNBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6InNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4tZm9ybSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2Ni45JTtcblxufVxuXG4ubGVmdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA3NHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wOiAxOXB4O1xufVxuXG4uc3ZnIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4OztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFiLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgcGFkZGluZzogMCAwcHg7XG59XG5cbi5tYWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTRDQUVEICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mZW1hbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGODlENzAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/welcome-dialog/welcome-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/welcome-dialog/welcome-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: WelcomeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDialogComponent", function() { return WelcomeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart-ngx-emoji.js");









class WelcomeDialogComponent {
    constructor(data, authService) {
        this.data = data;
        this.authService = authService;
    }
    ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
    }
}
WelcomeDialogComponent.ɵfac = function WelcomeDialogComponent_Factory(t) { return new (t || WelcomeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
WelcomeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeDialogComponent, selectors: [["app-welcome-dialog"]], decls: 19, vars: 2, consts: [["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "end"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "fas", "fa-times"], ["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "row", "fxLayoutAlign", "start"], [1, "user-profile", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "sp"], ["emoji", "house", "size", "16"]], template: function WelcomeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Congratulations !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Let's Set Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-emoji", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentUser.profilePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.name);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_6__["EmojiComponent"]], styles: [".user-profile[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtZGlhbG9nL3dlbGNvbWUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6IndlbGNvbWUtZGlhbG9nL3dlbGNvbWUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-dialog',
                templateUrl: './welcome-dialog.component.html',
                styleUrls: ['./welcome-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jarvis/Documents/GitHub/hack-the-6ix/home-social/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map