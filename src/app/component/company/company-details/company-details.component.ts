import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company?: Company = {};

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.companyService.findById(id).subscribe(company => {
        this.company = company;
      }, error => {
        console.log('Service error: ', error);
      });
    }, error => {
      console.log('ParamMap error: ', error);
    });
  }

}
