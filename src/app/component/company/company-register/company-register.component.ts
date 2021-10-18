import {Component, OnInit} from '@angular/core';
import {Constant} from '../../../common/constant';
import {ResponseBody} from '../../../common/response-body';
import {AuthService} from '../../../service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {
  message = '';
  isRegistered = false;

  registerForm: FormGroup = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    shortName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmedPassword: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  isPassword = 'password';
  isConfirmedPassword = 'password';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register(): void {
    const companyRegister = {
      companyName: this.registerForm.value.companyName,
      shortName: this.registerForm.value.shortName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      description: this.registerForm.value.description,
      type: 'COMPANY'
    };
    this.authService.registerCompany(companyRegister).subscribe((response: ResponseBody) => {
      if (response.responseCode === Constant.SUCCESS) {
        this.isRegistered = true;
        this.message = response.responseMessage;
      } else {
        this.message = response.responseMessage;
      }
    }, error => {
      console.log('System error: ', error);
      if (error.error.responseCode == Constant.EMAIL_IS_EXISTS) {
        this.message = error.error.responseMessage;
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
    if (this.isRegistered) {
      this.router.navigate(['companies/login']).then(() => {
        window.location.reload();
      });
    } else {
      this.registerForm.reset();
    }
  }
}
