import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gender} from '../model/post/gender';
import {environment} from '../../environments/environment.prod';
import {City} from "../model/post/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(environment.API_URL+'/cities');
  }
}
