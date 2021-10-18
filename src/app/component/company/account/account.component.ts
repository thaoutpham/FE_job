import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  email?: string = '';
  companyName?: string = '';
  message?: string = '';
  isUpdated = false;

  constructor(private tokenService: TokenService,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    const id = this.tokenService.getToken().id;
    this.companyService.findById(id).subscribe(company => {
      this.companyName = company.companyName;
      this.email = company.email;
      // @ts-ignore
      this.message = localStorage.getItem('message');
      if (this.message === 'Đổi mật khẩu thành công') {
        this.isUpdated = true;
      } else {
        this.isUpdated = false;
      }
      localStorage.removeItem('message');
    }, error => {
      console.log(error);
    });
  }
}
