import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post/post';
import {PostService} from '../../../service/post.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';
import {CvService} from '../../../service/cv.service';
import {CandidateService} from '../../../service/candidate.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post = {};
  isLogin = false;
  posts: any[] = [];
  page = 1;
  url = '/posts/view/';
  idPost?: string = '';

  constructor(private postService: PostService,
              private tokenService: TokenService,
              private cvService: CvService,
              private candidateService: CandidateService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  isApplied: boolean = false;
  existedCv: boolean = false;
  isUser: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(this.router.url);
      // @ts-ignore
      this.idPost = paramMap.get('id');
      // @ts-ignore
      this.findById(this.idPost);
      this.checkLogin();
      this.checkCv();
      this.checkApplied();
      this.checkUser();
    });
  }

  findById(id: string) {
    this.postService.findById(id).subscribe(post => {
      this.post = post;
      // @ts-ignore
      this.findByCat_id(this.post.category?.id, this.post.id);
    }, error => {
      console.log(error);
    });
  }

  checkLogin() {
    if (this.tokenService.getToken().token !== '') {
      this.isLogin = true;
    } else {
      console.log('Chưa đăng nhập');
    }
  }

  checkCv() {
    if (this.isLogin) {
      const id = this.tokenService.getToken().id;
      this.cvService.findByUserId(id).subscribe(data => {
        this.existedCv = true;
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
  }

  checkUser() {
    const role = this.tokenService.getToken().roles[0].authority;
    if (role == 'USER') {
      this.isUser = true;
    }
  }


  findByCat_id(cat_id: number, id: number) {
    this.postService.getSuggestedPosts(cat_id, id).subscribe(data => {
        // @ts-ignore
        for (let post of data) {
          if (post.status) {
            this.posts.push(post);
          }
        }
        console.log(this.posts);
      }, error => {
        console.log(error);
        console.log('error');
      }
    );
  }

  checkApplied() {
    this.candidateService.findByPostId(this.idPost).subscribe(data => {
      const userId = this.tokenService.getToken().id;
      // @ts-ignore
      for (const candidate of data) {
        if (candidate.cv.user.id == userId) {
          this.isApplied = true;
        }
      }
    }, error => {
      console.log(error);
    });
  }
}
