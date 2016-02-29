System.register(['angular2/core', './http-test.services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_services_1;
    var httpTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_services_1_1) {
                http_test_services_1 = http_test_services_1_1;
            }],
        execute: function() {
            /**
             * [Component description]
             * @param {``,}} {	selector [description]
             */
            httpTestComponent = (function () {
                function httpTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                httpTestComponent.prototype.onGetDetailsClick = function () {
                    var _this = this;
                    this._httpService.getTitle()
                        .subscribe(function (data) { console.log('data', data); _this.getData = JSON.stringify(data); }, function (error) { return console.log('error', error); }, function () { return console.log('finished'); });
                };
                httpTestComponent.prototype.onPostDetailsClick = function () {
                    // this._httpService.postJSON()
                    // 	.subscribe(
                    // 	data => { console.log('data', data); this.postData = JSON.stringify(data) },
                    // 	error => console.log('error', error),
                    // 	() => console.log('finished')
                    // 	);
                    var _this = this;
                    this._httpService.postJSON()
                        .then(function (data) { console.log('data', data); _this.postData = JSON.stringify(data); });
                };
                httpTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n\t\t<button (click) = \"onGetDetailsClick()\">Get Details</button>\n\t\t<p>{{getData}}</p>\n\t\t<button (click) = \"onPostDetailsClick()\">Post Details</button>\n\t\t<p>{{postData}}</p>\n\t",
                        providers: [http_test_services_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_services_1.HTTPTestService])
                ], httpTestComponent);
                return httpTestComponent;
            }());
            exports_1("httpTestComponent", httpTestComponent);
        }
    }
});
//# sourceMappingURL=httpTestService.component.js.map