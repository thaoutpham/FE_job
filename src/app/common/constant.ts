import {environment} from '../../environments/environment.prod';

export class Constant {
  public static readonly API_USER_REGISTER = environment.API_URL + '/auth/users/register';
  public static readonly API_USER_LOGIN = environment.API_URL + '/auth/users/login';
  public static readonly API_COMPANY_REGISTER = environment.API_URL + '/auth/companies/register';
  public static readonly API_COMPANY_LOGIN = environment.API_URL + '/auth/companies/login';
  public static readonly API_ADMIN_LOGIN = environment.API_URL + '/auth/admins/login';
  public static SUCCESS = '0000';
  public static USERNAME_IS_EXISTS = '0001';
  public static EMAIL_IS_EXISTS = '0002';
  public static OBJECT_IS_EXISTS = '0003';
  public static OBJECT_NOT_FOUND = '0004';
  public static OBJECT_INVALID = '0005';
  public static NAME_IS_EXISTS = '0006';
  public static PASSWORD_IS_NOT_TRUE = '0007';
  public static NEW_PASSWORD_IS_DUPLICATED = '0008';
  public static SYSTEM_ERROR = '9999';
}
