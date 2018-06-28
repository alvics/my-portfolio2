import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$: Object;

  constructor(private data: DataService) { }

ngOnInit() {
      this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
      console.log(this.data.getPosts()); 
   }
}
