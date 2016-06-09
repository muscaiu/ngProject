System.register(['angular2/core', './post.service', '../Users/user.service', '../CustomHtml/spinner.component'], function(exports_1, context_1) {
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
    var core_1, post_service_1, user_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.users = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.commentsLoading = true;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) {
                        return _this.currentPost.comments = comments;
                    }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        selector: 'posts',
                        templateUrl: 'dev/Posts/posts.component.html',
                        providers: [post_service_1.PostService, user_service_1.UserService],
                        directives: [spinner_component_1.SpinnerComponent],
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFPSSx3QkFDWSxZQUF5QixFQUN6QixZQUF5QjtvQkFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVJ4QyxVQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNSLFVBQUssR0FBRyxFQUFFLENBQUM7Z0JBUWQsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVVLGtDQUFTLEdBQWpCO29CQUFBLGlCQUdDO29CQUZHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUN2QixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVPLGtDQUFTLEdBQWpCLFVBQWtCLE1BQU87b0JBQXpCLGlCQU9DO29CQU5HLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7eUJBQ2hDLFNBQVMsQ0FDRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixJQUFJLEVBQ0osY0FBUSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxNQUFNO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELCtCQUFNLEdBQU4sVUFBTyxJQUFJO29CQUFYLGlCQVVDO29CQVRILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUVsQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5QkFDMUMsU0FBUyxDQUNHLFVBQUEsUUFBUTt3QkFDSixPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVE7b0JBQXBDLENBQW9DLEVBQ3hDLElBQUksRUFDSixjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLEVBQTVCLENBQTRCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFoRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxNQUFNLEVBQUMsQ0FBQyw4VUFVUCxDQUFDO3dCQUNGLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDBCQUFXLENBQUM7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztrQ0FBQTtnQkFpREYscUJBQUM7WUFBRCxDQWhEQSxBQWdEQyxJQUFBO1lBaERELDJDQWdEQyxDQUFBIiwiZmlsZSI6IlBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL1VzZXJzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vQ3VzdG9tSHRtbC9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5wb3N0cyBsaSB7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gICAgICAgIC5wb3N0cyBsaTpob3ZlciB7IGJhY2tncm91bmQ6ICNlY2YwZjE7IH0gXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsIFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLCBcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyB7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlY2YwZjE7IFxyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvUG9zdHMvcG9zdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2UsIFVzZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTcGlubmVyQ29tcG9uZW50XSAsIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBvc3RzID0gW107XHJcbiAgICB1c2VycyA9IFtdO1xyXG4gICAgcG9zdHNMb2FkaW5nO1xyXG4gICAgY29tbWVudHNMb2FkaW5nO1xyXG4gICAgY3VycmVudFBvc3Q7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUG9zdHMoKTsgICAgICAgIFxyXG5cdH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsb2FkVXNlcnMoKXtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsb2FkUG9zdHMoZmlsdGVyPyl7XHJcbiAgICAgICAgdGhpcy5wb3N0c0xvYWRpbmcgPSB0cnVlOyBcclxuXHRcdHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3RzKGZpbHRlcilcclxuXHRcdFx0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHBvc3RzID0+IHRoaXMucG9zdHMgPSBwb3N0cyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IHRoaXMucG9zdHNMb2FkaW5nID0gZmFsc2U7IH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZWxvYWRQb3N0cyhmaWx0ZXIpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc3QgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9hZFBvc3RzKGZpbHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlbGVjdChwb3N0KXtcclxuXHRcdHRoaXMuY3VycmVudFBvc3QgPSBwb3N0OyBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbW1lbnRzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0Q29tbWVudHMocG9zdC5pZClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc3QuY29tbWVudHMgPSBjb21tZW50cyxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmNvbW1lbnRzTG9hZGluZyA9IGZhbHNlKTsgXHJcbiAgICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
