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
                PostsComponent.prototype.select = function (postx) {
                    this.currentPost = postx;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFLSSx3QkFBb0IsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUo1QyxjQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUtqQixDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7eUJBQ3ZCLFNBQVMsQ0FBQyxVQUFBLENBQUM7d0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFBO2dCQUNWLENBQUM7Z0JBRUQsK0JBQU0sR0FBTixVQUFPLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3dCQUM5QixNQUFNLEVBQUMsQ0FBQyw4VUFVUCxDQUFDO3FCQUNMLENBQUM7O2tDQUFBO2dCQW9CRixxQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsMkNBbUJDLENBQUEiLCJmaWxlIjoiUG9zdHMvcG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuLi9DdXN0b21IdG1sL3NwaW5uZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwb3N0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9Qb3N0cy9wb3N0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtQb3N0U2VydmljZV0gLFxyXG4gICAgZGlyZWN0aXZlczogW1NwaW5uZXJDb21wb25lbnRdICwgXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICAucG9zdHMgbGkgeyBjdXJzb3I6IGRlZmF1bHQ7IH1cclxuICAgICAgICAucG9zdHMgbGk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZWNmMGYxOyB9IFxyXG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlLCBcclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciwgXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgeyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWNmMGYxOyBcclxuICAgICAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgcG9zdHM6IGFueTtcclxuICAgIGN1cnJlbnRQb3N0O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTpQb3N0U2VydmljZSl7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT57XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHg7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTsgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWxlY3QocG9zdHgpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc3QgPSBwb3N0eDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
