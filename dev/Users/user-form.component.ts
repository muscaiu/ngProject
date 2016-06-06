import { Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate} from 'angular2/router';

import {BasicValidators} from './basicValidators';

@Component({
    templateUrl: 'dev/Users/user-form.component.html'
})
export class UserFormComponent implements CanDeactivate {
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    routerCanDeactivate(){
        if(this.form.dirty){
            return confirm('You have usaved changes. U sure?');        
        }
        else{
            return true;    
        }
            
            
        
    }
}

