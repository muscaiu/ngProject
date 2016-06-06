System.register(['angular2/core', './post.service', './spinner.component'], function(exports_1, context_1) {
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
            //import {SpinnerComponent} from 'dev/CustomHtml/spinner.component';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLG9FQUFvRTtZQVFwRTtnQkFJSSx3QkFBb0IsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUg1QyxjQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUlqQixDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7eUJBQ3ZCLFNBQVMsQ0FBQyxVQUFBLENBQUM7d0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFBO2dCQUNWLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztrQ0FBQTtnQkFlRixxQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsMkNBY0MsQ0FBQSIsImZpbGUiOiJQb3N0cy9wb3N0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnZGV2L0N1c3RvbUh0bWwvc3Bpbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L1Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlXSAsXHJcbiAgICBkaXJlY3RpdmVzOiBbU3Bpbm5lckNvbXBvbmVudF0gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgcG9zdHM6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2UpeyAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3RzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+e1xyXG4gICAgICAgICAgICAgIHRoaXMucG9zdHMgPSB4O1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7ICBcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
