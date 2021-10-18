import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {}

  getAllCities(){
    return this.httpClient.get(`${environment.baseUrl}/cities`);
  }
}
