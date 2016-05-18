import { Component } from 'angular2/core';
import {RouterLink} from'angular2/router'


@Component({
    selector: 'navbar',
    templateUrl: 'dev/navbar.component.html'    
    ,directives: [RouterLink] 
})

export class NavbarComponent {
    
}