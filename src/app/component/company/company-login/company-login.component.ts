import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtResponse} from '../../../model/jwt-response';
import {AuthService} from '../../../service/auth.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {ResponseBody} from '../../../common/response-body';
import {Constant} from '../../../common/constant';
import {CompanyLoginForm} from '../../../model/company/company-login-form';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  isLogin = false;
  isPassword = 'password';
  message = 'Please fill in the form to login';
  jwtResponse: JwtResponse = {};

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  showPass() {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  login() {
    const companyLogin: CompanyLoginForm = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.loginCompany(companyLogin).subscribe((response: ResponseBody) => {
        this.isLogin = true;
        this.message = 'Đăng nhập thành công';
        this.tokenService.setToken(response.responseData);
    }, error => {
      this.message = 'Sai tài khoản hoặc mật khẩu';
    });
  }

  reload() {
    if (this.isLogin){
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    }else {
      window.location.reload();
    }
  }
}
