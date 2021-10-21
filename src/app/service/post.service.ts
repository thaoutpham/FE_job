import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Post} from '../model/post/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + '/posts');
  }

  save(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.API_URL + '/posts', post);
  }

  findById(id: any): Observable<Post> {
    return this.http.get<Post>(environment.API_URL + `/posts/${id}`);
  }

  update(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(environment.API_URL + `/posts/${id}`, post);
  }

  getAllByIdCompany(id: any): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + `/posts/companies/${id}`);
  }

  updateStatus(id: string): Observable<Post> {
    return this.http.get<Post>(environment.API_URL + `/posts/status/${id}`);
  }

  delete(id: string) {
    return this.http.delete(environment.API_URL + `/posts/${id}`);
  }

  search(params: any): Observable<any> {
    return this.http.get(environment.API_URL + `/posts/search/advance?` + params.toString());
  }

  getSearchedPosts(params: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // @ts-ignore
    return this.http.get(`${environment.baseUrl}/posts/find?` + params.toString());
  }

  getSuggestedPosts(cat_id: number, id: number) {
    console.log(environment.API_URL);
    return this.http.get(`${environment.API_URL}/posts/${id}/${cat_id}`);
  }

  getNewestPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/posts/topNew`);
  }

  getRecommendedPosts(): Observable<any> {
    return this.http.get(`${environment.API_URL}/posts/recommended`);
  }

  setRecommendedPost(id: any): Observable<any> {
    // @ts-ignore
    return this.http.put(`${environment.API_URL}/posts/recommended/${id}`);
  }


  getTop6PostRecommended(): Observable<any> {
    return this.http.get(`${environment.API_URL}/posts/topSalary`);
  }
}
