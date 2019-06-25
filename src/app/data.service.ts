import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { SafePost } from './safe-post.interface';
>>>>>>> firebase

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://ewebdesigns.com.au/wp-json/wp/v2/posts?');
=======
  protected url: string = 'https://ewebdesigns.com.au/wp-json/api/v1/posts?';
  featured_image: Object;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  safePost(apiDataSinglePost: APIDataSinglePost): SafePost {
    return {
      title: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.title),
      content: this.sanitizer.bypassSecurityTrustHtml(
        apiDataSinglePost.content
      ),
      excerpt: this.sanitizer.bypassSecurityTrustHtml(
        apiDataSinglePost.excerpt
      ),
      featured_image: this.sanitizer.bypassSecurityTrustHtml(
        apiDataSinglePost.featured_image
      ),
      small: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.small),
      medium: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.medium),
      large: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.large),
      author: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.author),
      date: this.sanitizer.bypassSecurityTrustHtml(apiDataSinglePost.date)
    };
  }

  // Rest Items Service: Read all REST Items
  getAll() {
    return this.http.get<any[]>(this.url).pipe(
      map(apiDataAllPosts => {
        const mySafePosts: SafePost[] = apiDataAllPosts.map(apiDataSinglePost =>
          this.safePost(apiDataSinglePost)
        );
        console.log(mySafePosts);
        return mySafePosts;
      })
    );
>>>>>>> firebase
  }

  getLayouts() {
    return this.http.get(
      'https://ewebdesigns.com.au/wp-json/wp/v2/posts/?slug=layouts/'
    );
  }
}

interface APIDataSinglePost {
  title: string;
  content: string;
  excerpt: string;
  featured_image: string;
  small: string;
  medium: string;
  large: string;
  date: string;
  author: string;
}
