System.register(['angular2/core', './user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                    this.users = [];
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (x) {
                        _this.users = x;
                        _this.isLoading = false;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'dev/users.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUlJLHdCQUFvQixZQUF3QjtvQkFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDVDLGNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ2pCLFVBQUssR0FBRyxFQUFFLENBQUM7Z0JBSVgsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUN2QixTQUFTLENBQUMsVUFBQSxDQUFDO3dCQUNSLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixXQUFXLEVBQUUsMEJBQTBCO3dCQUN2QyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztrQ0FBQTtnQkFrQkYscUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELDJDQWdCQyxDQUFBIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid1c2VycycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHVzZXJzID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgIH1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
