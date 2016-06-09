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
    var PostService;
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
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/posts";
                }
                PostService.prototype.getPosts = function (filter) {
                    var url = this._url;
                    if (filter && filter.userId)
                        url += "?userId=" + filter.userId;
                    return this._http.get(url)
                        .map(function (res) { return res.json(); });
                };
                PostService.prototype.getComments = function (postId) {
                    return this._http.get(this._url + "/" + postId + "/comments")
                        .map(function (res) { return res.json(); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFHQyxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUZ2QixTQUFJLEdBQUcsMkNBQTJDLENBQUM7Z0JBRzNELENBQUM7Z0JBRUQsOEJBQVEsR0FBUixVQUFTLE1BQU87b0JBQ2YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFFcEIsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQzFCLEdBQUcsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDeEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGlDQUFXLEdBQVgsVUFBWSxNQUFNO29CQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQXBCRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFxQmIsa0JBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFDQW9CQyxDQUFBIiwiZmlsZSI6IlBvc3RzL3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcclxuXHRwcml2YXRlIF91cmwgPSBcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuXHR9XHJcblxyXG5cdGdldFBvc3RzKGZpbHRlcj8pIHtcclxuXHRcdHZhciB1cmwgPSB0aGlzLl91cmw7XHJcblxyXG5cdFx0aWYoZmlsdGVyICYmIGZpbHRlci51c2VySWQpXHJcblx0XHRcdHVybCArPSBcIj91c2VySWQ9XCIgKyBmaWx0ZXIudXNlcklkO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwpXHJcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuICAgIFxyXG5cdGdldENvbW1lbnRzKHBvc3RJZCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsICsgXCIvXCIgKyBwb3N0SWQgKyBcIi9jb21tZW50c1wiKVxyXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
