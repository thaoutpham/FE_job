import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top6-recommended',
  templateUrl: './top6-recommended.component.html',
  styleUrls: ['./top6-recommended.component.scss']
})
export class Top6RecommendedComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTop6Recommended();
  }

  getTop6Recommended() {
    this.postService.getTop6PostRecommended().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }
}
