import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
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
export class EcommerceComponent implements OnInit {
  home_title = 'eCommerce';
  title = 'eCommerce Websites ALLEN PAVIC';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ecommerce,front-end developer,web designer,web developer, websites,wordpress,'
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Building online eCommerce websites for small to medium size businesses here on the Gold Coast'
    });
  }
}
