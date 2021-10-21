import { Component, OnInit } from '@angular/core';
import {Post} from "../../../model/post/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  page = 1;
  posts: Post[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    const data = localStorage.getItem('search');
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

}
