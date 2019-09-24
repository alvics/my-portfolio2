import { DataService } from './../../../data.service';
import { HeaderService } from './../../../header.service';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {
  defaultImage =
    'https://ewebdesigns.com.au/wp-content/uploads/2019/09/blurred-min.jpg';
  image = '/assets/images/hero2.jpeg';

  title;
  my_title = 'Projects | Allen Pavic';
  pages$: Object;

  // Creating variables as observables to hold the layouts content
  // layouts: Entry<any>[] = [];
  // images: Entry<any>[] = [];

  constructor(
    /* private contenful: ContentfulService */ private headerService: HeaderService,
    private data: DataService,
    private titleService: Title,
    private meta: Meta
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
    this.titleService.setTitle(this.my_title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        "angular projects, web app's, single page application's, spa, pwa, wordpress,websites "
    });

    this.meta.updateTag({
      name: 'description',
      content:
        "Projects by Allen Pavic, Angular and WordPress portfolio, responsive websites, PWA's, eCommerce sites and more...  "
    });
  }

  // function to change the titles value
  newTitle() {
    this.headerService.changeTitle('Projects');
  }
}
