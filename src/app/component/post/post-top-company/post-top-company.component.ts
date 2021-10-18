import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company/company';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-post-top-company',
  templateUrl: './post-top-company.component.html',
  styleUrls: ['./post-top-company.component.scss']
})
export class PostTopCompanyComponent implements OnInit {

  posts: Post[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="bi bi-arrow-left-circle"></i>', '<i class="bi bi-arrow-right-circle"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };


  constructor(private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTop5Companies();
  }

  getTop5Companies() {
    this.postService.getTop5Companies().subscribe(posts => {
      // @ts-ignore
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }

  viewDetail(id: string | undefined) {
    this.router.navigateByUrl('companies/view/' + id);
  }
}
