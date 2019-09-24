import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp } from 'ng-animate';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(
        '* => *',
        useAnimation(fadeInUp, {
          params: { timing: 1, delay: 0 }
        })
      )
    ])
  ]
})
export class HeroComponent implements OnInit {
  constructor() {}

  defaultImage =
    'https://ewebdesigns.com.au/wp-content/uploads/2019/09/blurred-min.jpg';
  image = '/assets/images/img2_p.jpg';

  ngOnInit() {}
}
