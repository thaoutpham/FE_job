import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JwtResponse} from '../../../model/jwt-response';
import {AuthService} from '../../../service/auth.service';
import {ResponseBody} from '../../../common/response-body';
import {Constant} from '../../../common/constant';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

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
      } else {
        this.message = 'Sai email hoặc mật khẩu, hãy nhập lại!';
      }
    }, error => {
      console.log('Error system:' + error);
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
