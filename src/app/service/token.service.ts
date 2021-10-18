import {Injectable} from '@angular/core';
import {JwtResponse} from '../model/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  jwt: JwtResponse = {};

  constructor() {
  }

  getToken() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('token'));
  }

  setToken(jwtResponse: JwtResponse) {
    this.jwt = jwtResponse;
    localStorage.removeItem('token');
    localStorage.setItem('token', JSON.stringify(jwtResponse));
  }
}
