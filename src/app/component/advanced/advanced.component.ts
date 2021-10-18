import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post/post';
import {Router} from '@angular/router';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  posts: Post[] = [];
  page = 1;
  address = '';
  title = '';
  exp = '';
  salary = '';

  constructor(private router: Router,
              private postService: PostService) {
  }

  ngOnInit(): void {
    const data = localStorage.getItem('search-advanced');
    if (data !== null) {
      for (let post of JSON.parse(data)) {
        if (post.status) {
          this.posts.push(post);
        }
      }
    }
  }

  viewDetail(id: any) {
    this.router.navigateByUrl('/posts/view/' + id);
  }

  searchAdvanced() {
    const params: URLSearchParams = new URLSearchParams();
    if (this.address !== '') {
      params.set('address', this.address);
    }
    if (this.title != '') {
      params.set('title', this.title);
    }
    if (this.salary !== '') {
      // @ts-ignore
      params.set('salary', this.salary * 1000000);
    }
    if (this.exp !== '') {
      params.set('exp', this.exp + ' năm');
    }
    console.log(params.toString());
    this.postService.search(params).subscribe(data => {
      localStorage.removeItem('search-advanced');
      localStorage.setItem('search-advanced', JSON.stringify(data));
      this.router.navigate(['posts/search-advanced']).then(() => {
        window.location.reload();
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }
}
