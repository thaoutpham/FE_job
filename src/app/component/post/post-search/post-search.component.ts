import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../../../model/post/post';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  posts: any[] = [];
  page = 1;
  url = "/posts/view/";


  constructor(private router: Router) {
    console.log(router.getCurrentNavigation());
  }

  ngOnInit(): void {
    const data = localStorage.getItem('search');
    console.log(data);
    if (data !== null){
      for (let post of JSON.parse(data)) {
        if (post.status){
          this.posts.push(post);
        }
      }
    }
  }
}
