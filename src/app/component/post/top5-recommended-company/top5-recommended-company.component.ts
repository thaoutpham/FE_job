import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-top5-recommended-company',
  templateUrl: './top5-recommended-company.component.html',
  styleUrls: ['./top5-recommended-company.component.scss']
})
export class Top5RecommendedCompanyComponent implements OnInit {
  companies:any[]=[];
  constructor(private companyservice: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getMainPageCompanies();
  }

  getMainPageCompanies(){
    this.companyservice.getMainPageCompanies().subscribe(data => {
      // @ts-ignore
      this.companies = data;
      // this.firstPost = this.posts[0];
      // this.posts.shift();
    },error => {
      console.log(error);
    });
  }

}
