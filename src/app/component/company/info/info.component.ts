import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';
import {Company} from '../../../model/company/company';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  message?: string = '';
  isUpdated = false;
  company: Company = {};

  constructor(private tokenService: TokenService,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    const id = this.tokenService.getToken().id;
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
