import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../service/category/category.service';
import {CityService} from '../../../service/city/city.service';
import {SalaryService} from '../../../service/salary/salary.service';
import {PostService} from '../../../service/post/post.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Post} from '../../../model/post/post';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  keyword = '';
  category = -1;
  city = -1;
  salaries: number[] = [-1, -1];
  categories: any;
  cities: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private cityService: CityService,
    private salaryService: SalaryService,
    private postService: PostService,
    private router: Router,
    private httpClient: HttpClient
  ) {
  }


  ngOnInit(): void {
    this.getAllCities();
    this.getAllCategories();
  }

  getAllCities(){
    this.cityService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  searchJob(){
    const params: URLSearchParams = new URLSearchParams();
    params.set('keyword', this.keyword);
    // @ts-ignore
    params.set('cat_id', this.category);
    // @ts-ignore
    params.set('city_id', this.city);
    // @ts-ignore
    params.set('salary1', this.salaries[0]);
    // @ts-ignore
    params.set('salary2', this.salaries[1]);
    console.log(params.toString());
    console.log(this.salaries.toString());
    // @ts-ignore
    this.postService.getSearchedPosts(params).subscribe((data: any ) => {
      console.log(params.toString());
      localStorage.setItem('search', JSON.stringify(data));
      this.router.navigateByUrl('/posts/search').then(() => {
        location.reload();
      });
    });
  }
}
