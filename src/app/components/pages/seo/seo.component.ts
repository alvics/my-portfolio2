import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {
page_title = 'SEO';
title = 'SEO Websites | Allen Pavic';

constructor(private titleService: Title, private meta: Meta) {}
  
ngOnInit() {
  this.titleService.setTitle(this.title);

  this.meta.updateTag({
    name: 'keywords',
    content:
      'seo, search engine optimization, sem, facebook adds, instagram adds, social media marketing, digital marketing campaigns'
  });

  this.meta.updateTag({
    name: 'description',
    content:
      'SEO marketing campaigns for your business, includes social media marketing, SEM for your business, media advertising, pay per click.'
  });
}
}
