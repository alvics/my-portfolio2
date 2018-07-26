
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // Creating a variable as an observable to hold the layouts content
layouts: Entry<any>[] = [];
// images: Entry<any>[] = [];

  constructor(private contenful: ContentfulService) { }

  ngOnInit() {
     // this.contenful.logContent('3bh985ibn6ee');
   this.contenful.getContents()
    .then(layouts => this.layouts = layouts);

    /* this.contenful.getImages()
    .then(images => this.images = images);
  } */
  }
}
