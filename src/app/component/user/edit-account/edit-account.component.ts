import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../../model/company/company';
import {TokenService} from '../../../service/token.service';
import {CompanyService} from '../../../service/company.service';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {Constant} from '../../../common/constant';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user/user';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  email?: string = '';
  userName?: string = '';
  message?: string = '';
  isUpdated = false;
  phone: any;

  constructor(private tokenService: TokenService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    const id = this.tokenService.getToken().id;
    this.userService.findById(id).subscribe(user => {
      this.userName = user.name;
      this.email = user.email;
      this.phone = user.phone;
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
