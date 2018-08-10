import { Observable } from 'rxjs';
import { HeaderService } from './../../header.service';
import { DataService } from './../../data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts$: Observable<any[]>;
  title = "Blog";
  image: string;
  h2: string;
  h5: string;


  constructor(private headerService: HeaderService, private data: DataService) {

    // this.posts$ = this.data.getPosts();
    // console.log(data);
  }
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
