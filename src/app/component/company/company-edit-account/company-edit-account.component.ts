import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {Constant} from '../../../common/constant';

@Component({
  selector: 'app-company-edit-account',
  templateUrl: './company-edit-account.component.html',
  styleUrls: ['./company-edit-account.component.scss']
})
export class CompanyEditAccountComponent implements OnInit {
  email?: string = '';
  companyName?: string = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  passwordForm = new FormGroup({});
  currentCompany?: Company = {};
  message?: string = '';
  isUpdated?: boolean = false;

  constructor(private tokenService: TokenService,
              private companyService: CompanyService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getInfo();
    this.passwordForm = new FormGroup({
      currentPassword: new FormControl(''),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmedPassword: new FormControl('', [Validators.required])
    });
    const id = this.tokenService.getToken().id;
    this.findById(id);
  }

  getInfo() {
    const id = this.tokenService.getToken().id;
    this.companyService.findById(id).subscribe(company => {
      this.companyName = company.companyName;
      this.email = company.email;
    }, error => {
      console.log(error);
    });
  }

  findById(id: string) {
    this.companyService.findById(id).subscribe(company => {
      this.currentCompany = company;
    }, error => {
      console.log(error);
    });
  }

  changePassword() {
    const id = this.tokenService.getToken().id;
    const company = {
      currentPassword: this.passwordForm.value.currentPassword,
      newPassword: this.passwordForm.value.newPassword
    };
    this.authService.changeCompanyPassword(id, company).subscribe(data => {
      console.log(data);
      this.isUpdated = true;
      this.message = 'Đổi mật khẩu thành công';
    }, error => {
      console.log(error)
      console.log(error.responseCode);
      console.log(Constant.PASSWORD_IS_NOT_TRUE);
      if (error.error.responseCode == Constant.PASSWORD_IS_NOT_TRUE) {
        this.message = 'Mật khẩu cũ không chính xác!'
      } else {
        this.message = 'Mật khẩu mới trùng với mật khẩu cũ!'
      }
    });
  }


  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

  reload() {
    if (this.isUpdated) {
      this.router.navigate(['companies/account']);
    } else {
      this.passwordForm.reset();
    }
  }

}
