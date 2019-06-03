import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-developmet',
  templateUrl: './web-developmet.component.html',
  styleUrls: ['./web-developmet.component.scss']
})
export class WebDevelopmetComponent implements OnInit {
  page_title = 'Web Development';
  title = 'Web Development | Allen Pavic';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        'web developer, website developer,allen gold coast, websites brisbane, websites north gold coast, labrador, runaway bay, labrador'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Get the latest trends in Web Design in 2019. We deliver mordern designed websites that are easily self managed for your business.'
    });
  }
}
