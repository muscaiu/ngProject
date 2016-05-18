import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from'angular2/router'

import {NavbarComponent} from './navbar.component'
import {HomeComponent} from './home.component'
import {UsersComponent} from './users.component'
import {PostsComponent} from './posts.component'

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/*other', name: 'Home', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    template:`
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    ` ,
    directives: [NavbarComponent,
                 HomeComponent,
                 UsersComponent,
                 PostsComponent,
                 ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}