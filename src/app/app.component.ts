import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Allen Pavic | Web Developer';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: 'author', content: 'allen pavic' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'allen pavic,front-end developer,web designer,web developer,websites,wordpress,'
    });
    // this.meta.updateTag({
    //   name: 'description',
    //   content:'Allen Pavic Leading font-end Web developer, building blazing-fast websites, wordpress web design for small'
    // });
  }
}
