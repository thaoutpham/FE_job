import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {GenderService} from '../../../service/gender.service';
import {PostService} from '../../../service/post.service';
import {WorkFormService} from '../../../service/work-form.service';
import {Category} from '../../../model/post/category';
import {Gender} from '../../../model/post/gender';
import {WorkForm} from '../../../model/post/work-form';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../model/post/post';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {CityService} from '../../../service/city.service';
import {City} from '../../../model/post/city';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  categories: Category[] = [];
  genders: Gender[] = [];
  workForms: WorkForm[] = [];
  cities?:City[];
  company?: Company;
  gender?: Gender;
  workForm?: WorkForm;
  category?: Category;
  city?: City;
  post?: Post;
  isUpdated = false;
  message = '';
  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    category: new FormControl('1'),
    salary: new FormControl(''),
    address: new FormControl(''),
    position: new FormControl(''),
    exp: new FormControl(''),
    workForm: new FormControl('1'),
    expiredDate: new FormControl(''),
    description: new FormControl(''),
    quantity: new FormControl('', [Validators.required]),
    gender: new FormControl('3'),
    city:new FormControl('1')
  });


  constructor(private categoryService: CategoryService,
              private genderService: GenderService,
              private postService: PostService,
              private cityService: CityService,
              private workformService: WorkFormService,
              private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllGender();
    this.getAllWorkForm();
    this.getAllCity();
  }

  submit() {
    const idCompany = this.tokenService.getToken().id;
    this.post = {
      title: this.postForm.value.title,
      category: this.category = {
        id: this.postForm.value.category
      },
      salary: this.postForm.value.salary,
      address: this.postForm.value.address,
      position: this.postForm.value.position,
      exp: this.postForm.value.exp,
      workForm: this.workForm = {
        id: this.postForm.value.workForm
      },
      expiredDate: this.postForm.value.expiredDate,
      description: this.postForm.value.description,
      quantity: this.postForm.value.quantity,
      gender: this.gender = {
        id: this.postForm.value.gender
      },
      company: this.company = {
        id: idCompany
      },
      city: this.city={
        id: this.postForm.value.city
      }
    };
    this.postService.save(this.post).subscribe(() => {
      this.postForm.reset();
      this.isUpdated = true;
      this.message = 'Đăng kí thành công!';
    }, e => {
      console.log(e);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result;
    });
  }

  getAllGender() {
    this.genderService.getAll().subscribe(result => {
      this.genders = result;
    });
  }

  getAllWorkForm() {
    this.workformService.getAll().subscribe(result => {
      this.workForms = result;
    });
  }
  getAllCity(){
    this.cityService.getAll().subscribe(result=>{
      this.cities = result;
    })
  }

  reload() {
    window.location.reload();
  }
}
