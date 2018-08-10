import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any[]>('https://ewebdesigns.com.au/wp-json/wp/v2/posts?')

  }
}
