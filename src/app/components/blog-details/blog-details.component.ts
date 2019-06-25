import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  post: Object;
  title: Object;
  content: Object;
  image: string;
  h2: string;
  h5: string;
  id: number;
  private sub: any;

  postSlug: Object;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   if (typeof params['slug'] !== 'undefined') {
    //     this.post = params['slug'];
    //     this.loadPost(this.post);
    //   }
    // });
    // console.log(this.postSlug);
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //   this.posts$ = params['id'];
    //   this.loadPosts(this.posts$); // this.data.getPosts().subscribe(data => (this.posts$ = data));
    // });
  }
}
