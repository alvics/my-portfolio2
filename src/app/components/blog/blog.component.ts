import { HeaderService } from './../../header.service';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$: Object;
  title = "Blog";
  image: string;
  h2: string;
  h5: string;
  

  constructor(private headerService: HeaderService, private data: DataService) { }

ngOnInit() {
  this.headerService.currentTitle.subscribe(title => this.title = title);

      this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
      console.log(this.data.getPosts()); 
   }

   newTitle() {
    return this.headerService.changeTitle("Blog");
  }
}
