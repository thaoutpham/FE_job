import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../service/post.service';
import {CityService} from '../../../service/city.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
  address = '';
  title = '';
  exp = '';
  salary = '';

  constructor(private postService: PostService,
              private cityService: CityService,
              private router: Router) {
  }

  ngOnInit(): void {
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
      params.set('salary', +this.salary * 1000000);
    }
    if (this.exp !== '') {
      params.set('exp', this.exp + ' năm');
    }
    // console.log(params.toString());
    this.postService.search(params).subscribe(data => {
      console.log(data);
      localStorage.removeItem('search-advanced');
      localStorage.setItem('search-advanced', JSON.stringify(data));
      this.router.navigate(['posts/search-advanced']).then(() => {
        window.location.reload();
      });
    });
  }

}
