import { HeaderService } from './../../header.service';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(
        '* => *',
        useAnimation(fadeInUp, {
          params: { timing: 1, delay: 0 }
        })
      )
    ]),
    trigger('flipInX', [
      transition(
        '* => *',
        useAnimation(flipInX, {
          params: { timing: 2, delay: 0 }
        })
      )
    ])
  ]
})
export class BlogComponent implements OnInit {
  posts$: Object;
  title = 'Blog';
  image: string;
  h2: string;
  h5: string;

  constructor(
    private headerService: HeaderService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.headerService.currentTitle.subscribe(title => (this.title = title));

    this.data.getPosts().subscribe(data => (this.posts$ = data));
    console.log(this.data.getPosts());
  }

  newTitle() {
    return this.headerService.changeTitle('Blog');
  }
}
