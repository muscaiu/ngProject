System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicValidators;
    return {
        setters:[],
        execute: function() {
            BasicValidators = (function () {
                function BasicValidators() {
                }
                BasicValidators.email = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { email: true };
                };
                return BasicValidators;
            }());
            exports_1("BasicValidators", BasicValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL2Jhc2ljVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFMVSxxQkFBSyxHQUFaLFVBQWEsT0FBZ0I7b0JBQ3hCLElBQUksS0FBSyxHQUFHLHdKQUF3SixDQUFDO29CQUNySyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0wsc0JBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZDQU1DLENBQUEiLCJmaWxlIjoiVXNlcnMvYmFzaWNWYWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljVmFsaWRhdG9yc3tcclxuICAgIHN0YXRpYyBlbWFpbChjb250cm9sOiBDb250cm9sICl7XHJcbiAgICAgICAgIHZhciByZWdFeCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICAgICB2YXIgdmFsaWQgPSByZWdFeC50ZXN0KGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgICByZXR1cm4gdmFsaWQgPyBudWxsIDogeyBlbWFpbDogdHJ1ZSB9O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
