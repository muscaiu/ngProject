import { Component, OnInit } from 'angular2/core';

import {PostService} from './post.service';
import {SpinnerComponent} from '../CustomHtml/spinner.component';

@Component({
    styles:[`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    selector: 'posts',
    templateUrl: 'dev/Posts/posts.component.html',
    providers: [PostService] ,
    directives: [SpinnerComponent] , 
})
export class PostsComponent implements OnInit {
    postsLoading = true;
    posts = [];
    currentPost;
    commentsLoading;

    constructor(private _postService:PostService){   
    }
    
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(x =>{
              this.posts = x;
              this.postsLoading = false;  
            })
    }
    
    select(post){
        this.currentPost = post;
        this.commentsLoading = true;

        this._postService.getComments(post.id)
            .subscribe(comments =>
                this.currentPost.comments = comments, 
                null,
                () => this.commentsLoading = false);                
    }


}