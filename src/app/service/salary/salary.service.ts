import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllSalaries(){
    return this.httpClient.get(`${environment.baseUrl}/salaries`);
  }
}
