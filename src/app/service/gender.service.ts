import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post/post';
import {environment} from '../../environments/environment.prod';
import {Gender} from '../model/post/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Gender[]> {
    return this.http.get<Gender[]>(environment.API_URL+'/genders');
  }
}
