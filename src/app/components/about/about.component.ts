import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  defaultImage =
    'https://res.cloudinary.com/ewebdesigns/image/upload/v1569452391/img2_p_nwm71i.jpg';
  image = '/assets/images/img2_p.jpg';

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
