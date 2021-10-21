import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  keyword = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
  }
  searchJob(){
    console.log(this.keyword)
    const params: URLSearchParams = new URLSearchParams();
    params.set('title', this.keyword);
    // @ts-ignore
    this.postService.getSearchedPosts(params).subscribe((data: any ) => {
      console.log(params.toString());
      localStorage.setItem('search', JSON.stringify(data));
      this.router.navigateByUrl('/posts/page-search').then(() => {
        location.reload();
      });
    });
  }
}
