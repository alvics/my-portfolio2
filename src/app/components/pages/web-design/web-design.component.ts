import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss'],
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
export class WebDesignComponent implements OnInit {
  defaultImage = '/assets/images/hero2.jpeg';
  image = '/assets/images/hero2.jpeg';

  page_title = 'Web Design';
  title = 'Web Design | Allen Pavic';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        'web design, website designer, websites gold coast, websites brisbane, websites north gold coast, labrador, runaway bay, labrador'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Get the latest trends in Web Design in 2019. We deliver mordern designed websites that are easily self managed for your business.'
    });
  }
}
