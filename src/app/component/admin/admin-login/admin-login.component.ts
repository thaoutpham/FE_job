import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JwtResponse} from '../../../model/jwt-response';
import {AuthService} from '../../../service/auth.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {ResponseBody} from '../../../common/response-body';
import {Constant} from '../../../common/constant';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  isLogin = false;
  isPassword = 'password';
  message = 'Hãy điền vào form';
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
    this.authService.loginUser(this.loginForm.value).subscribe((response: ResponseBody) => {
      if (response.responseCode === Constant.SUCCESS) {
        this.isLogin = true;
        this.message = 'Đăng nhập thành công';
        this.tokenService.setToken(response.responseData);
      }
    }, error => {
      console.log('Error system:' + error);
      this.message = 'Sai email hoặc mật khẩu, hãy nhập lại!';
    });
  }

  reload() {
    if (this.isLogin) {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  }

}
