import { Component, OnInit } from 'angular2/core';

import {PostService} from './post.service';
import {SpinnerComponent} from './spinner.component';
//import {SpinnerComponent} from 'dev/CustomHtml/spinner.component';

@Component({
    selector: 'posts',
    templateUrl: 'dev/Posts/posts.component.html',
    providers: [PostService] ,
    directives: [SpinnerComponent] 
})
export class PostsComponent implements OnInit {
    isLoading = true;
    posts: any;
    
    constructor(private _postService:PostService){   
    }
    
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(x =>{
              this.posts = x;
              this.isLoading = false;  
            })
    }
}