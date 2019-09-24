import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-responsive-websites',
  templateUrl: './responsive-websites.component.html',
  styleUrls: ['./responsive-websites.component.scss'],
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
export class ResponsiveWebsitesComponent implements OnInit {
  defaultImage = '/assets/images/hero2.jpeg';
  image = '/assets/images/hero2.jpeg';

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
