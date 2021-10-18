import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../model/post/category';
import {Gender} from '../../../model/post/gender';
import {WorkForm} from '../../../model/post/work-form';
import {CategoryService} from '../../../service/category.service';
import {GenderService} from '../../../service/gender.service';
import {PostService} from '../../../service/post.service';
import {WorkFormService} from '../../../service/work-form.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';
import {Company} from '../../../model/company/company';
import {Post} from '../../../model/post/post';
import {City} from '../../../model/post/city';
import {CityService} from '../../../service/city.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  categories: Category[] = [];
  genders: Gender[] = [];
  workForms: WorkForm[] = [];
  cities: City[] = [];
  city?: City;
  company?: Company;
  gender?: Gender;
  workForm?: WorkForm;
  category?: Category;
  post?: Post;
  id: any;
  postForm: FormGroup = new FormGroup({
    title: new FormControl(),
    category: new FormControl(),
    salary: new FormControl(),
    address: new FormControl(),
    position: new FormControl(),
    exp: new FormControl(),
    workForm: new FormControl(),
    expiredDate: new FormControl(),
    description: new FormControl(),
    quantity: new FormControl(),
    gender: new FormControl(),
    city: new FormControl()
  });

  constructor(private categoryService: CategoryService,
              private genderService: GenderService,
              private postService: PostService,
              private workformService: WorkFormService,
              private activatedRoute: ActivatedRoute,
              private tokenService: TokenService,
              private cityService:CityService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllGender();
    this.getAllWorkForm();
    this.getAllCity();
    this.findPostById(this.id);
  }

  findPostById(id: any) {
    this.postService.findById(id).subscribe(result => {
      this.postForm = new FormGroup({
        title: new FormControl(result.title),
        category: new FormControl(result.category?.id),
        salary: new FormControl(result.salary),
        address: new FormControl(result.address),
        position: new FormControl(result.position),
        exp: new FormControl(result.exp),
        workForm: new FormControl(result.workForm?.id),
        expiredDate: new FormControl(result.expiredDate),
        description: new FormControl(result.description),
        quantity: new FormControl(result.quantity, [Validators.required]),
        gender: new FormControl(result.gender?.id),
        city: new FormControl(result.city?.id)
      });
    });
  }

  update() {
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
      city: this.gender = {
        id: this.postForm.value.city
      },
    };
    this.postService.update(this.id, this.post).subscribe(() => {
      this.postForm.reset();
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
    this.router.navigateByUrl('/companies/find-all');
  }
}
