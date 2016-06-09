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
                    this.postsLoading = true;
                    this.posts = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (x) {
                        _this.posts = x;
                        _this.postsLoading = false;
                    });
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
                        providers: [post_service_1.PostService],
                        directives: [spinner_component_1.SpinnerComponent],
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFNSSx3QkFBb0IsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUw1QyxpQkFBWSxHQUFHLElBQUksQ0FBQztvQkFDcEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztnQkFLWCxDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7eUJBQ3ZCLFNBQVMsQ0FBQyxVQUFBLENBQUM7d0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFBO2dCQUNWLENBQUM7Z0JBRUQsK0JBQU0sR0FBTixVQUFPLElBQUk7b0JBQVgsaUJBU0M7b0JBUkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUU1QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUNqQyxTQUFTLENBQUMsVUFBQSxRQUFRO3dCQUNmLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUTtvQkFBcEMsQ0FBb0MsRUFDcEMsSUFBSSxFQUNKLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTNDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLE1BQU0sRUFBQyxDQUFDLDhVQVVQLENBQUM7d0JBQ0YsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztrQ0FBQTtnQkE4QkYscUJBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELDJDQTZCQyxDQUFBIiwiZmlsZSI6IlBvc3RzL3Bvc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tICcuL3Bvc3Quc2VydmljZSc7XHJcbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vQ3VzdG9tSHRtbC9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5wb3N0cyBsaSB7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gICAgICAgIC5wb3N0cyBsaTpob3ZlciB7IGJhY2tncm91bmQ6ICNlY2YwZjE7IH0gXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsIFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLCBcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyB7IFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlY2YwZjE7IFxyXG4gICAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvUG9zdHMvcG9zdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2VdICxcclxuICAgIGRpcmVjdGl2ZXM6IFtTcGlubmVyQ29tcG9uZW50XSAsIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHBvc3RzID0gW107XHJcbiAgICBjdXJyZW50UG9zdDtcclxuICAgIGNvbW1lbnRzTG9hZGluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTpQb3N0U2VydmljZSl7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT57XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHg7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0c0xvYWRpbmcgPSBmYWxzZTsgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWxlY3QocG9zdCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zdCA9IHBvc3Q7XHJcbiAgICAgICAgdGhpcy5jb21tZW50c0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRDb21tZW50cyhwb3N0LmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3N0LmNvbW1lbnRzID0gY29tbWVudHMsIFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuY29tbWVudHNMb2FkaW5nID0gZmFsc2UpOyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
