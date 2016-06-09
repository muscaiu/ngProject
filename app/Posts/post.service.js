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
                PostService.prototype.getPosts = function () {
                    return this._http.get(this._url)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFHQyxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUZ2QixTQUFJLEdBQUcsMkNBQTJDLENBQUM7Z0JBRzNELENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDOUIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGlDQUFXLEdBQVgsVUFBWSxNQUFNO29CQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQWZGO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWdCYixrQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscUNBZUMsQ0FBQSIsImZpbGUiOiJQb3N0cy9wb3N0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZSB7XHJcblx0cHJpdmF0ZSBfdXJsID0gXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcblx0fVxyXG5cclxuXHRnZXRQb3N0cygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwpXHJcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuICAgIFxyXG5cdGdldENvbW1lbnRzKHBvc3RJZCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsICsgXCIvXCIgKyBwb3N0SWQgKyBcIi9jb21tZW50c1wiKVxyXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
