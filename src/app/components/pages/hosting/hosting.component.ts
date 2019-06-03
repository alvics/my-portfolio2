import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {
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
