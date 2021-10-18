import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.scss']
})
export class RecommendedPostComponent implements OnInit {
  posts: Post[] = [];
  page = 1;

  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getRecommendedPosts();
  }

  getRecommendedPosts() {
    this.postService.getRecommendedPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }

  viewDetail(id: any) {
    this.router.navigate(['posts/view', id]);
  }
}
