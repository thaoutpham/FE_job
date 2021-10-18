import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.scss']
})
export class CompanyAccountComponent implements OnInit {
  companies:any[]=[];
  constructor(private companyservice: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCompanyByUnenable();
  }

  getCompanyByUnenable(){
    this.companyservice.getAllByUnenable().subscribe(data => {
        // @ts-ignore
      this.companies = data;
      }, error => {
        console.log(error);
      }
    );
  }

  enableAccount(id:number) {
    this.companyservice.updateenable(id).subscribe(() => {
      location.reload();
    })
  }
}
