import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-post-by-id',
  templateUrl: './list-post-by-id.component.html',
  styleUrls: ['./list-post-by-id.component.scss']
})
export class ListPostByIdComponent implements OnInit {
  posts: Post[] = [];
  id: any;

  constructor(private postService: PostService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {

    const id = this.tokenService.getToken().id;
    this.posts = [{
      company: {
        image: ''
      }
    }];
    this.postService.getAllByIdCompany(id).subscribe(result => {
        this.posts = result;
      }, error => {
        console.log(error);
      }
    );
  }

  updateStatus(id: any) {
    this.postService.updateStatus(id).subscribe(() => {
      window.location.reload();
    });
  }

  close() {
    this.router.navigateByUrl('/companies/find-all');
  }

  updateId(id: any) {
    this.id = id;
  }
}
