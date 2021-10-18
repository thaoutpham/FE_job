import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post/post';
import {environment} from '../../environments/environment.prod';
import {WorkForm} from '../model/post/work-form';

@Injectable({
  providedIn: 'root'
})
export class WorkFormService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<WorkForm[]> {
    return this.http.get<WorkForm[]>(environment.API_URL+'/work-forms');
  }
}
