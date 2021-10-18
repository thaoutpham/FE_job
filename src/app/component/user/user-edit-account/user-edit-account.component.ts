import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {Constant} from '../../../common/constant';
import {User} from '../../../model/user/user';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-edit-account',
  templateUrl: './user-edit-account.component.html',
  styleUrls: ['./user-edit-account.component.scss']
})
export class UserEditAccountComponent implements OnInit {

  email?: string = '';
  userName?: string = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  passwordForm = new FormGroup({});
  currentUser?: User = {};
  message?: string = '';
  isUpdated?: boolean = false;

  constructor(private tokenService: TokenService,
              private userService: UserService,
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
    this.userService.findById(id).subscribe(user => {
      this.userName = user.name;
      this.email = user.email;
    }, error => {
      console.log(error);
    });
  }

  findById(id: string) {
    this.userService.findById(id).subscribe(user => {
      this.currentUser = user;
    }, error => {
      console.log(error);
    });
  }

  changePassword() {
    const id = this.tokenService.getToken().id;
    const user = {
      currentPassword: this.passwordForm.value.currentPassword,
      newPassword: this.passwordForm.value.newPassword
    };
    console.log(user);
    this.authService.changeUserPassword(id, user).subscribe(data => {
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
      this.router.navigate(['users/account']);
    } else {
      this.passwordForm.reset();
    }
  }
}
