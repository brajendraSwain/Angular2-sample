System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getTitle = function () {
                    return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    // var url = 'http://jsonplaceholder.typicode.com/posts';
                    // var json = JSON.stringify({
                    // 	"userId": 10,
                    // 	"id": 100,
                    // 	"title": "at nam consequatur ea labore ea harum",
                    // 	"body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
                    // });
                    // var headers = new Headers();
                    // headers.append('Content-Type', 'application/json');
                    // var options = {
                    // 	headers: headers
                    // };
                    // var params = 'json = ' + json;
                    // return this._http.post(url, params, options)
                    // 		.map(res => res.json());
                    return $.ajax('http://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        data: {
                            "userId": 10,
                            "id": 100,
                            "title": "at nam consequatur ea labore ea harum",
                            "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
                        }
                    });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});
//# sourceMappingURL=http-test.services.js.map