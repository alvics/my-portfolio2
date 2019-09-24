import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss'],
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
export class HostingComponent implements OnInit {
  defaultImage = '/assets/images/hero2.jpeg';
  image = '/assets/images/hero2.jpeg';

  home_title = 'Web hosting';
  title = 'Web Hosting | Allen Pavic';
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
        'We use Australian web hosting servers to deliver a premium, secure and fast web hosting service'
    });
  }
}
