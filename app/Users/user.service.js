System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var UserService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/users";
                }
                UserService.prototype.getUsers = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.getUser = function (userId) {
                    return this._http.get(this.getUserUrl(userId))
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.addUser = function (user) {
                    return this._http.post(this._url, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.updateUser = function (user) {
                    return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.deleteUser = function (userId) {
                    return this._http.delete(this.getUserUrl(userId))
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.getUserUrl = function (userId) {
                    return this._url + "/" + userId;
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFHQyxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUZ2QixTQUFJLEdBQUcsMkNBQTJDLENBQUM7Z0JBRzNELENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDOUIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVFLDZCQUFPLEdBQVAsVUFBUSxNQUFNO29CQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDNUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVFLDZCQUFPLEdBQVAsVUFBUSxJQUFJO29CQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRSxnQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDcEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxNQUFNO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUM1QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRU8sZ0NBQVUsR0FBbEIsVUFBbUIsTUFBTTtvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDcEMsQ0FBQztnQkFsQ0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBbUNiLGtCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCxxQ0FrQ0MsQ0FBQSIsImZpbGUiOiJVc2Vycy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfdXJsID0gXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKVxyXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcbiAgICBcclxuICAgIGdldFVzZXIodXNlcklkKXtcclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmdldFVzZXJVcmwodXNlcklkKSlcclxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0fVxyXG4gICAgXHJcbiAgICBhZGRVc2VyKHVzZXIpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcbiAgICBcclxuICAgIHVwZGF0ZVVzZXIodXNlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0VXNlclVybCh1c2VyLmlkKSwgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZVVzZXIodXNlcklkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5nZXRVc2VyVXJsKHVzZXJJZCkpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGdldFVzZXJVcmwodXNlcklkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXJsICsgXCIvXCIgKyB1c2VySWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
