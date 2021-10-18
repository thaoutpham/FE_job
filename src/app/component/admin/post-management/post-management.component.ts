import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss']
})
export class PostManagementComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  changeRecommend(id: any) {
    this.postService.setRecommendedPost(id).subscribe(data => {
      location.reload();
      console.log(data);
    });
  }
}
