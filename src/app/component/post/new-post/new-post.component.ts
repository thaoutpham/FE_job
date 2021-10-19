import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../../service/post.service';
import {Post} from "../../../model/post/post";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private router:Router, private postService: PostService ) { }

  ngOnInit(): void {
    this.postService.getNewestPosts().subscribe( data => {
        // @ts-ignore
        for (const post of  data) {
        if (post.status){
          // @ts-ignore
          this.posts.push(post);

        }
      }
        console.log("hello")
        console.log(this.posts)
    }, error => {
        console.log(error);
      }
    );
  }


}
