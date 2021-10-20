import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company/company';
import {PostService} from '../../../service/post.service';
import {Post} from '../../../model/post/post';
import {ActivatedRoute, Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {CompanyService} from "../../../service/company.service";

@Component({
  selector: 'app-post-top-company',
  templateUrl: './post-top-company.component.html',
  styleUrls: ['./post-top-company.component.scss']
})
export class PostTopCompanyComponent implements OnInit {

  companies:any[]=[];
  constructor(private companyservice: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getMainPageCompanies();
  }

  getMainPageCompanies(){
    this.companyservice.getTop5Companies().subscribe(data => {
      // @ts-ignore
      this.companies = data;
    },error => {
      console.log(error);
    });
  }

}
