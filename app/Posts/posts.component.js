System.register(['angular2/core', './post.service', '../CustomHtml/spinner.component'], function(exports_1, context_1) {
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
    var core_1, post_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                    this.posts = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (x) {
                        _this.posts = x;
                        _this.isLoading = false;
                    });
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) {
                        return _this.currentPost.comments = comments;
                    });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'dev/Posts/posts.component.html',
                        providers: [post_service_1.PostService],
                        directives: [spinner_component_1.SpinnerComponent],
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFLSSx3QkFBb0IsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUo1QyxjQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixVQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUlYLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDVixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFFRCwrQkFBTSxHQUFOLFVBQU8sSUFBSTtvQkFBWCxpQkFNQztvQkFMRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFFeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFDakMsU0FBUyxDQUFDLFVBQUEsUUFBUTt3QkFDZixPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVE7b0JBQXBDLENBQW9DLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLE1BQU0sRUFBQyxDQUFDLDhVQVVQLENBQUM7cUJBQ0wsQ0FBQzs7a0NBQUE7Z0JBMEJGLHFCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwyQ0F5QkMsQ0FBQSIsImZpbGUiOiJQb3N0cy9wb3N0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4uL0N1c3RvbUh0bWwvc3Bpbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L1Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlXSAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU3Bpbm5lckNvbXBvbmVudF0gLCBcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5wb3N0cyBsaSB7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gICAgICAgIC5wb3N0cyBsaTpob3ZlciB7IGJhY2tncm91bmQ6ICNlY2YwZjE7IH0gXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsIFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLCBcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyB7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlY2YwZjE7IFxyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBwb3N0cyA9IFtdO1xyXG4gICAgY3VycmVudFBvc3Q7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOlBvc3RTZXJ2aWNlKXsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PntcclxuICAgICAgICAgICAgICB0aGlzLnBvc3RzID0geDtcclxuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlbGVjdChwb3N0KXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3N0ID0gcG9zdDtcclxuXHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0Q29tbWVudHMocG9zdC5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdC5jb21tZW50cyA9IGNvbW1lbnRzKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
