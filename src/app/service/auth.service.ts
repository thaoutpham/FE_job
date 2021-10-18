import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegisterForm} from '../model/user/user-register-form';
import {Observable} from 'rxjs';
import {ResponseBody} from '../common/response-body';
import {Constant} from '../common/constant';
import {UserLoginForm} from '../model/user/user-login-form';
import {CompanyRegisterForm} from '../model/company/company-register-form';
import {CompanyLoginForm} from '../model/company/company-login-form';
import {environment} from '../../environments/environment.prod';
import {CompanyPasswordForm} from '../model/company/company-password-form';
import {UserPasswordForm} from '../model/user-password-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(userRegister: UserRegisterForm): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(Constant.API_USER_REGISTER, userRegister);
  }

  loginUser(userLogin: UserLoginForm): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(Constant.API_USER_LOGIN, userLogin);
  }

  registerCompany(companyRegister: CompanyRegisterForm): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(Constant.API_COMPANY_REGISTER, companyRegister);
  }

  loginCompany(companyLogin: CompanyLoginForm): Observable<ResponseBody> {
    return this.http.post<ResponseBody>(Constant.API_COMPANY_LOGIN, companyLogin);
  }

  changeCompanyPassword(id: any, companyPasswordForm: CompanyPasswordForm): Observable<any> {
    return this.http.post(environment.API_URL + `/auth/companies/${id}/change-password`, companyPasswordForm);
  }
  changeUserPassword(id: any, userPasswordForm: UserPasswordForm): Observable<any> {
    return this.http.post(environment.API_URL + `/auth/users/${id}/change-password`, userPasswordForm);
  }
}
