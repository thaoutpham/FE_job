import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'app-company-post',
  templateUrl: './company-post.component.html',
  styleUrls: ['./company-post.component.scss']
})
export class CompanyPostComponent implements OnInit {

  posts: Post[] = [];
  page = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.getPostByCompany(id);
    }, error => {
      console.log(error);
    });
  }

  getPostByCompany(id: any) {
    this.postService.getAllByIdCompany(id).subscribe(posts => {
      for (const post of posts) {
        // @ts-ignore
        if (post.status == true) {
          this.posts.push(post);
        }
      }
    }, error => {
      console.log(error);
    });
  }

  viewDetail(id: any) {
    this.router.navigate(['posts/view', id]);
  }
}
