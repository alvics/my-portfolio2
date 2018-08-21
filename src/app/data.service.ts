import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://ewebdesigns.com.au/wp-json/wp/v2/posts?');
  }

  getLayouts() {
    return this.http.get(
      'https://ewebdesigns.com.au/wp-json/wp/v2/posts/?slug=layouts/'
    );
  }
}
