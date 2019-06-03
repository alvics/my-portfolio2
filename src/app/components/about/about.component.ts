import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  home_title = 'Web hosting';
  title = 'About | Allen Pavic';

  constructor(private titleService: Title, private meta: Meta) {}

   ngOnInit() {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        'web hosting, website hosting Austalia, Gold Coast, cheap web hosting'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'About Allen Pavic, web developer on the Gold Coast, Australia.  Focusing technologies is WordPress, Angular and Ionic development.'
    });
  }

}
