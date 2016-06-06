import {Component, OnInit} from 'angular2/core';
import {RouterLink } from 'angular2/router';

import {UserService} from './user.service';
import {SpinnerComponent} from '../CustomHtml/spinner.component';

@Component({
    selector:'users',
    templateUrl: 'dev/Users/users.component.html',
    providers:[UserService],
    directives: [RouterLink,SpinnerComponent] 
})

export class UsersComponent implements OnInit{
    isLoading = true;
    users : any;
    
    constructor(private _userService:UserService){
        
    }
    
    ngOnInit(){
        this._userService.getUsers()
            .subscribe(x => {
                this.users = x;
                this.isLoading = false;
            });    
    }    
    
    deleteUser(user){
        if(confirm("Are u sure u want to delete" + user.name + "?")){
            var index = this.users.indexOf(user)
            
            this.users.splice(index, 1);
            
            this._userService.deleteUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the user.");
                        this.users.splice(index, 0, user);
                    });
        }
    }
}