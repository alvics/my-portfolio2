import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-responsive-websites',
  templateUrl: './responsive-websites.component.html',
  styleUrls: ['./responsive-websites.component.scss']
})
export class ResponsiveWebsitesComponent implements OnInit {
  page_title = 'Responsive';

  title = 'Responsive Websites | Allen Pavic';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        'responsive websites, website Austalia, websites Gold Coast, cheap web hosting, cheap websites, fully responsive websites'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Fully Responsive Websites on all devices made here on the Gold Coast by Allen Pavic, modern and unique designed for your niche.'
    });
  }
}
