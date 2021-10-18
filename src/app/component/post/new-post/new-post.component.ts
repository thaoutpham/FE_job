import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  posts: any[] = [];

  constructor(private router:Router, private postService: PostService ) { }

  ngOnInit(): void {
    this.postService.getNewestPosts().subscribe( data => {
      // @ts-ignore
        console.log(data)
      // @ts-ignore
        for (const post of  data) {
        if (post.status){
          this.posts.push(post);
        }
      }
    }, error => {
        console.log(error);
      }
    );
  }


}
