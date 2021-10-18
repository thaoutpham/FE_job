import { Component, OnInit } from '@angular/core';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  message?: string = '';
  isUpdated = false;
  company: Company = {};

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    const id = this.activatedRoute.snapshot.params.id;
    this.companyService.findById(id).subscribe(company => {
      this.company = company;
      // @ts-ignore
      this.message = localStorage.getItem('message');
      this.isUpdated = true;
      localStorage.removeItem('message');
    }, error => {
      console.log(error);
    });
  }

}
