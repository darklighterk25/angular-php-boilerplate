import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Article} from '../interfaces/article.interface';
import {AppSettings} from '../../core/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private endpoint = `${AppSettings.APIEndpoint}articles.php`;

  constructor(private httpClient: HttpClient) {
  }

  getArticles(_id?: any): Observable<any> {
    if (_id) {
      return this.httpClient.get(`${this.endpoint}?id=${_id.$oid}`);
    } else {
      return this.httpClient.get(`${this.endpoint}`);
    }
  }

  addArticle(article: Article): Observable<any> {
    return this.httpClient.post(this.endpoint, article, {headers: this.httpHeaders});
  }

  editArticle(_id: any, article: Article): Observable<any> {
    return this.httpClient.put(`${this.endpoint}?_id=${_id.$oid}`, article, {headers: this.httpHeaders});
  }

  deleteArticle(_id: any): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}?_id=${_id.$oid}`, {headers: this.httpHeaders});
  }

}
