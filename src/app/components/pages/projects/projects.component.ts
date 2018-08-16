import { DataService } from './../../../data.service';
import { HeaderService } from './../../../header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title;
  pages$: Object;
  // Creating a variables as observables to hold the layouts content
  // layouts: Entry<any>[] = [];
  // images: Entry<any>[] = [];

  constructor(
    /*private contenful: ContentfulService*/ private headerService: HeaderService,
    private data: DataService
  ) {}

  ngOnInit() {
    // subscribe to the current title observable and set its value equal to the title variable
    this.headerService.currentTitle.subscribe(title => (this.title = title));

    // get layouts from WordPress
    this.data.getLayouts().subscribe(data => (this.pages$ = data));
    console.log(this.pages$);

    // this.contenful.logContent('3bh985ibn6ee');
    // this.contenful.getContents()
    // .then(layouts => this.layouts = layouts);

    /* this.contenful.getImages()
    .then(images => this.images = images);
     } */
  }

  // function to change the titles value
  newTitle() {
    this.headerService.changeTitle('Projects');
  }
}
