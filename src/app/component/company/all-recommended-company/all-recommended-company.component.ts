import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-recommended-company',
  templateUrl: './all-recommended-company.component.html',
  styleUrls: ['./all-recommended-company.component.scss']
})
export class AllRecommendedCompanyComponent implements OnInit {
  companies:any[]=[];
  constructor(private companyservice: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyservice.getAllRecommendedCompanies().subscribe(data => {
      // @ts-ignore
      this.companies = data;
      // this.firstPost = this.posts[0];
      // this.posts.shift();
    },error => {
      console.log(error);
    });
  }

  showUnderConstruction() {
    this.router.navigate(['companies/error']);
  }

}
