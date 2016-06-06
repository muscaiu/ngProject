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
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (x) {
                        _this.posts = x;
                        _this.isLoading = false;
                    });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'dev/Posts/posts.component.html',
                        providers: [post_service_1.PostService],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlJLHdCQUFvQixZQUF3QjtvQkFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDVDLGNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBSWpCLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDVixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQ2pDLENBQUM7O2tDQUFBO2dCQWVGLHFCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwyQ0FjQyxDQUFBIiwiZmlsZSI6IlBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XHJcbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vQ3VzdG9tSHRtbC9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvUG9zdHMvcG9zdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2VdICxcclxuICAgIGRpcmVjdGl2ZXM6IFtTcGlubmVyQ29tcG9uZW50XSBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBwb3N0czogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTpQb3N0U2VydmljZSl7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT57XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHg7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTsgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
