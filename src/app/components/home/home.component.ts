import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { flipInX } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
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
export class HomeComponent implements OnInit {
  title = 'Allen Pavic | Web Developer';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
