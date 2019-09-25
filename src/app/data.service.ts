import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { SafePost } from './safe-post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected url = 'https://ewebdesigns.com.au/wp-json/wp/v2/posts?';
  featured_image: Object;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  getLayouts() {
    return this.http.get(
      'https://ewebdesigns.com.au/wp-json/wp/v2/posts/?slug=layouts/'
    );
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://ewebdesigns.com.au/wp-json/wp/v2/posts');
      }
}

// interface APIDataSinglePost {
//   title: string;
//   content: string;
//   excerpt: string;
//   featured_image: string;
//   small: string;
//   medium: string;
//   large: string;
//   date: string;
//   author: string;
// }
