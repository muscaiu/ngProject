System.register(['angular2/core', 'angular2/common', 'angular2/router', './basicValidators', './user.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, basicValidators_1, user_service_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, _router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                UserFormComponent.prototype.save = function () {
                    var _this = this;
                    this._userService.addUser(this.form.value)
                        .subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Users']);
                    });
                    var result;
                    if (this.user.id) {
                        result = this._userService.updateUser(this.user);
                    }
                    else {
                        result = this._userService.addUser(this.user);
                        result.subscribe(function (x) {
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/Users/user-form.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, user_service_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLQywyQkFDTyxFQUFlLEVBQ1AsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLFlBQXlCO29CQUZ6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFOckMsU0FBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7b0JBUXBCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDcEIsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUMvQixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsaUNBQWUsQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxFQUFFO3dCQUNULE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzRCQUNqQixNQUFNLEVBQUUsRUFBRTs0QkFDVixLQUFLLEVBQUUsRUFBRTs0QkFDVCxJQUFJLEVBQUUsRUFBRTs0QkFDUixPQUFPLEVBQUUsRUFBRTt5QkFDWCxDQUFDO3FCQUNGLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUVFLG9DQUFRLEdBQVI7b0JBQUEsaUJBZ0JDO29CQWZHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUUzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixNQUFNLENBQUM7b0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3lCQUNqQyxTQUFTLENBQ0csVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDeEIsVUFBQSxRQUFRO3dCQUNKLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsK0NBQW1CLEdBQW5CO29CQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7b0JBRXJGLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRSxnQ0FBSSxHQUFKO29CQUFBLGlCQW1CRjtvQkFsQkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQy9CLFNBQVMsQ0FBQyxVQUFBLENBQUM7d0JBQ1IsMkJBQTJCO3dCQUMzQiw4QkFBOEI7d0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUM7b0JBRVAsSUFBSSxNQUFNLENBQUM7b0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNiLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFFN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7NEJBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNSLENBQUM7Z0JBeEVGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLG9DQUFvQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7cUNBQUE7Z0JBc0VGLHdCQUFDO1lBQUQsQ0FyRUEsQUFxRUMsSUFBQTtZQXJFRCxpREFxRUMsQ0FBQSIsImZpbGUiOiJVc2Vycy91c2VyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7Q2FuRGVhY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7QmFzaWNWYWxpZGF0b3JzfSBmcm9tICcuL2Jhc2ljVmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9Vc2Vycy91c2VyLWZvcm0uY29tcG9uZW50Lmh0bWwnLCBcclxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENhbkRlYWN0aXZhdGUge1xyXG5cdGZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB1c2VyID0gbmV3IFVzZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICAgICAgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2VcclxuICAgICkge1xyXG5cdFx0dGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRlbWFpbDogWycnLCBCYXNpY1ZhbGlkYXRvcnMuZW1haWxdLFxyXG5cdFx0XHRwaG9uZTogW10sXHJcblx0XHRcdGFkZHJlc3M6IGZiLmdyb3VwKHtcclxuXHRcdFx0XHRzdHJlZXQ6IFtdLFxyXG5cdFx0XHRcdHN1aXRlOiBbXSxcclxuXHRcdFx0XHRjaXR5OiBbXSxcclxuXHRcdFx0XHR6aXBjb2RlOiBbXVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldChcImlkXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBpZCA/IFwiRWRpdCBVc2VyXCIgOiBcIk5ldyBVc2VyXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFpZClcclxuXHRcdFx0cmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VyKGlkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdXNlciA9PiB0aGlzLnVzZXIgPSB1c2VyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ05vdEZvdW5kJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKCl7XHJcblx0XHRpZiAodGhpcy5mb3JtLmRpcnR5KVxyXG5cdFx0XHRyZXR1cm4gY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbmF2aWdhdGUgYXdheT8nKTtcclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTsgXHJcblx0fVxyXG4gICAgXHJcbiAgICBzYXZlKCl7XHJcblx0XHR0aGlzLl91c2VyU2VydmljZS5hZGRVc2VyKHRoaXMuZm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElkZWFsbHksIGhlcmUgd2UnZCB3YW50OlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnVXNlcnMnXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgaWYodGhpcy51c2VyLmlkKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdXNlclNlcnZpY2UudXBkYXRlVXNlcih0aGlzLnVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl91c2VyU2VydmljZS5hZGRVc2VyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdWJzY3JpYmUoeCA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1VzZXJzJ10pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
