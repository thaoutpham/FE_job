import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../../service/company.service';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  infoEditForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    phone: new FormControl(),
  });
  image? = '';
  message = '';
  isPassword = 'password';
  isConfirmedPassword = 'password';
  isUpdated = false;
  user?: User;
  constructor(private userService: UserService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.tokenService.getToken().id;
    this.findById(id);
  }

  findById(id: string) {
    return this.userService.findById(id).subscribe(user => {
      this.infoEditForm = new FormGroup({
        userName: new FormControl(user.name, [Validators.required]),
        phone: new FormControl(user.phone, [Validators.required, Validators.pattern(/^\+84\d{9}$/)]),
      });
    }, error => {
      console.log(error);
    });
  }

  edit() {
    const id = this.tokenService.getToken().id;
    this.userService.findById(id).subscribe(user=>{
      this.user = user;
    })
    const user = {
      name: this.infoEditForm.value.userName,
      phone: this.infoEditForm.value.phone
    };
    this.userService.update(id, user).subscribe(() => {
      localStorage.setItem('message', 'Cập nhật thông tin thành công');
    }, error => {
      console.log(error);
    });
  }


  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }

  showConfirmedPass(): void {
    this.isConfirmedPassword = (this.isConfirmedPassword === 'password') ? 'text' : 'password';
  }

  reload() {
    this.router.navigate(['users/account']);
  }

}
